// ================== 全局变量 ==================
let currentTreeRoot = null;
let currentNodeMap = new Map();
let currentSelectedNode = null;
let currentQuizNode = null;
let currentQuizChapterId = null;
let currentQuizChapterName = null;
let currentQuizRevealed = false;
let currentChapterId = "chapter1";

const STORAGE_PREFIX = "QuizHistory_";

// ================== 工具函数 ==================
function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function loadHistory() {
    const stored = localStorage.getItem(STORAGE_PREFIX);
    if (stored) {
        try { return JSON.parse(stored); } catch(e) { return {}; }
    }
    return {};
}

function saveHistory(history) {
    localStorage.setItem(STORAGE_PREFIX, JSON.stringify(history));
}

function addHistoryRecord(chapterId, nodeId, familiar) {
    const history = loadHistory();
    const key = `${chapterId}:${nodeId}`;
    if (!history[key]) history[key] = [];
    history[key].push({
        timestamp: Date.now(),
        familiar: familiar
    });
    saveHistory(history);
    updateGlobalStats();
}

function getNodeHistory(chapterId, nodeId) {
    const history = loadHistory();
    const key = `${chapterId}:${nodeId}`;
    const records = history[key] || [];
    return [...records].reverse();
}

function clearAllHistory() {
    if (confirm("⚠️ 确认清除所有章节的抽查记录吗？此操作不可恢复。")) {
        localStorage.removeItem(STORAGE_PREFIX);
        updateGlobalStats();
        document.getElementById('quizQuestion').innerHTML = `✨ 所有记录已清除，点击上方按钮开始抽查`;
        document.getElementById('quizAnswer').style.display = 'none';
        document.getElementById('quizFeedback').style.display = 'none';
        document.getElementById('quizRevealBtn').style.display = 'none';
        currentQuizNode = null;
        currentQuizRevealed = false;
    }
}

function getGlobalStats() {
    const history = loadHistory();
    let total = 0, familiar = 0;
    for (const key in history) {
        const records = history[key];
        total += records.length;
        familiar += records.filter(r => r.familiar === true).length;
    }
    return { total, familiar, unfamiliar: total - familiar };
}

function updateGlobalStats() {
    const { total, familiar, unfamiliar } = getGlobalStats();
    const statsDiv = document.getElementById('quizStats');
    if (statsDiv) {
        if (total === 0) {
            statsDiv.innerHTML = `📊 全局统计 | 暂无抽查记录，点击“随机抽查”开始自测`;
        } else {
            const rate = Math.round((familiar / total) * 100);
            statsDiv.innerHTML = `📊 全局统计 | 总抽查次数 <strong>${total}</strong> | 熟悉 ${familiar} 次 | 不熟悉 ${unfamiliar} 次 | 熟悉率 ${rate}%`;
        }
    }
}

// ================== 获取知识点列表 ==================
function getAllGlobalKnowledgeNodes() {
    const allNodes = [];
    for (const [chapterId, chapter] of Object.entries(chapterMap)) {
        const nodes = chapter.data.nodes;
        nodes.forEach(node => {
            if (!node.id.startsWith("root_")) {
                allNodes.push({
                    node: node,
                    chapterId: chapterId,
                    chapterName: chapter.name
                });
            }
        });
    }
    return allNodes;
}

function getCurrentChapterKnowledgeNodes() {
    const chapter = chapterMap[currentChapterId];
    if (!chapter) return [];
    const nodes = chapter.data.nodes;
    const result = [];
    nodes.forEach(node => {
        if (!node.id.startsWith("root_")) {
            result.push({
                node: node,
                chapterId: currentChapterId,
                chapterName: chapter.name
            });
        }
    });
    return result;
}

// ================== 随机抽查 ==================
function randomQuiz() {
    const scopeSelect = document.getElementById('quizScope');
    const isGlobal = scopeSelect.value === 'global';
    let knowledgeList;
    if (isGlobal) {
        knowledgeList = getAllGlobalKnowledgeNodes();
    } else {
        knowledgeList = getCurrentChapterKnowledgeNodes();
    }
    if (knowledgeList.length === 0) {
        document.getElementById('quizQuestion').innerHTML = `⚠️ 当前范围内没有可抽查的知识点，请检查数据或切换范围。`;
        return;
    }
    const randomIndex = Math.floor(Math.random() * knowledgeList.length);
    const selected = knowledgeList[randomIndex];
    currentQuizNode = selected.node;
    currentQuizChapterId = selected.chapterId;
    currentQuizChapterName = selected.chapterName;
    currentQuizRevealed = false;

    let displayName;
    if (isGlobal) {
        displayName = `${selected.chapterName} - ${selected.node.label}`;
    } else {
        displayName = selected.node.label;
    }
    document.getElementById('quizQuestion').innerHTML = `❓ 知识点：${escapeHtml(displayName)}<br><span style="font-size:0.8rem;">请回忆解释，然后点击下方按钮核对</span>`;
    document.getElementById('quizAnswer').style.display = 'none';
    document.getElementById('quizFeedback').style.display = 'none';
    const revealBtn = document.getElementById('quizRevealBtn');
    revealBtn.style.display = 'block';
    revealBtn.textContent = '🔎 显示答案 / 对照解释';
}

function revealQuizAnswer() {
    if (!currentQuizNode) {
        alert("请先点击“随机抽查”选择一个知识点。");
        return;
    }
    if (currentQuizRevealed) return;

    const explanationText = currentQuizNode.explanation;
    const answerDiv = document.getElementById('quizAnswer');
    if (!explanationText || explanationText.trim() === '') {
        answerDiv.innerHTML = `<div style="color:#a55;">⚠️ 该知识点暂无详细解释。</div>`;
    } else {
        answerDiv.innerHTML = `<div style="font-weight:500;">📖 解释：</div><div style="white-space:pre-wrap;">${escapeHtml(explanationText)}</div>`;
        if (window.MathJax) MathJax.typesetPromise();
    }
    answerDiv.style.display = 'block';
    document.getElementById('quizFeedback').style.display = 'flex';
    document.getElementById('quizRevealBtn').style.display = 'none';
    currentQuizRevealed = true;
}

function markFamiliar() {
    if (!currentQuizNode) return;
    addHistoryRecord(currentQuizChapterId, currentQuizNode.id, true);
    document.getElementById('quizFeedback').style.display = 'none';
    document.getElementById('quizAnswer').style.display = 'none';
    document.getElementById('quizQuestion').innerHTML = `✅ 已标记为“熟悉”！点击上方按钮继续抽查下一个知识点。`;
    currentQuizNode = null;
    currentQuizRevealed = false;
}

function markUnfamiliar() {
    if (!currentQuizNode) return;
    addHistoryRecord(currentQuizChapterId, currentQuizNode.id, false);
    document.getElementById('quizFeedback').style.display = 'none';
    document.getElementById('quizAnswer').style.display = 'none';
    document.getElementById('quizQuestion').innerHTML = `❌ 标记为“不熟悉”，请加强复习。点击上方按钮继续抽查。`;
    currentQuizNode = null;
    currentQuizRevealed = false;
}

// ================== 显示全局知识点抽查明细（表格） ==================
function showAllRecordsTable() {
    const history = loadHistory();
    if (Object.keys(history).length === 0) {
        alert("暂无抽查记录，请先进行抽查。");
        return;
    }
    // 构建知识点记录 Map: key="chapterId:nodeId" -> { chapterName, nodeName, records (按时间正序) }
    const knowledgeMap = new Map();
    for (const key in history) {
        const [chapterId, nodeId] = key.split(':');
        const chapter = chapterMap[chapterId];
        if (!chapter) continue;
        const node = chapter.data.nodes.find(n => n.id === nodeId);
        if (!node) continue;
        const nodeName = node.label || node.name;
        const records = history[key];
        const sortedRecords = [...records].sort((a,b) => a.timestamp - b.timestamp);
        knowledgeMap.set(key, {
            chapterName: chapter.name,
            nodeName: nodeName,
            records: sortedRecords
        });
    }
    // 找出最大抽查次数
    let maxRecords = 0;
    for (const item of knowledgeMap.values()) {
        maxRecords = Math.max(maxRecords, item.records.length);
    }
    // 生成表头
    const headers = ['所属章节', '知识点'];
    for (let i = 1; i <= maxRecords; i++) {
        headers.push(`第${i}次抽查`);
    }
    // 生成数据行
    const rows = [];
    for (const item of knowledgeMap.values()) {
        const row = [item.chapterName, item.nodeName];
        for (let i = 0; i < maxRecords; i++) {
            if (i < item.records.length) {
                const rec = item.records[i];
                const timeStr = new Date(rec.timestamp).toLocaleString();
                const status = rec.familiar ? '熟悉' : '不熟悉';
                row.push(`${timeStr} - ${status}`);
            } else {
                row.push('');
            }
        }
        rows.push(row);
    }
    // 按章节名+知识点名排序
    rows.sort((a,b) => {
        if (a[0] !== b[0]) return a[0].localeCompare(b[0]);
        return a[1].localeCompare(b[1]);
    });
    // 渲染表格
    const thead = document.getElementById('allRecordsHeader');
    const tbody = document.getElementById('allRecordsBody');
    thead.innerHTML = '';
    tbody.innerHTML = '';
    const trHead = document.createElement('tr');
    headers.forEach(h => {
        const th = document.createElement('th');
        th.textContent = h;
        trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    rows.forEach(rowData => {
        const tr = document.createElement('tr');
        rowData.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    // 显示模态框
    const modal = document.getElementById('allRecordsModal');
    modal.style.display = 'block';
}

// ================== 树形结构构建与渲染 ==================
function buildTreeFromData(nodes, edges) {
    const nodeMap = new Map();
    nodes.forEach(node => {
        nodeMap.set(node.id, { ...node, children: [] });
    });
    edges.forEach(edge => {
        const parentId = edge.from;
        const childId = edge.to;
        if (nodeMap.has(parentId) && nodeMap.has(childId)) {
            nodeMap.get(parentId).children.push(nodeMap.get(childId));
        }
    });
    const childSet = new Set();
    edges.forEach(edge => childSet.add(edge.to));
    let rootIds = [];
    nodeMap.forEach((node, id) => {
        if (!childSet.has(id)) rootIds.push(id);
    });
    let finalRoot = rootIds.length > 0 ? nodeMap.get(rootIds[0]) : null;
    return { root: finalRoot, nodeMap };
}

function renderTree(node) {
    const hasChildren = node.children && node.children.length > 0;
    const li = document.createElement('li');
    li.dataset.id = node.id;

    const nodeDiv = document.createElement('div');
    nodeDiv.className = 'tree-node';
    if (currentSelectedNode && currentSelectedNode.id === node.id) {
        nodeDiv.classList.add('selected');
    }

    const toggleSpan = document.createElement('span');
    toggleSpan.className = 'toggle-icon';
    if (hasChildren) {
        toggleSpan.textContent = '▼';
        toggleSpan.style.cursor = 'pointer';
    } else {
        toggleSpan.textContent = '•';
        toggleSpan.classList.add('empty');
    }

    const labelSpan = document.createElement('span');
    labelSpan.className = 'node-label';
    labelSpan.textContent = node.label || node.name;

    nodeDiv.appendChild(toggleSpan);
    nodeDiv.appendChild(labelSpan);

    nodeDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.tree-node').forEach(el => el.classList.remove('selected'));
        nodeDiv.classList.add('selected');
        currentSelectedNode = node;
        updateCurrentNodeInfo(node.label || node.name);
        clearExplanationArea();
        const historyBtn = document.getElementById('viewHistoryBtn');
        if (historyBtn) {
            if (!node.id.startsWith("root_") && node.label) {
                historyBtn.style.display = 'inline-block';
            } else {
                historyBtn.style.display = 'none';
            }
        }
    });

    if (hasChildren) {
        toggleSpan.addEventListener('click', (e) => {
            e.stopPropagation();
            const childrenUl = li.querySelector('ul');
            if (childrenUl) {
                const isVisible = childrenUl.style.display !== 'none';
                childrenUl.style.display = isVisible ? 'none' : 'block';
                toggleSpan.textContent = isVisible ? '▶' : '▼';
            }
        });
    }

    li.appendChild(nodeDiv);

    if (hasChildren) {
        const childrenUl = document.createElement('ul');
        childrenUl.className = 'children';
        node.children.forEach(child => {
            childrenUl.appendChild(renderTree(child));
        });
        li.appendChild(childrenUl);
    }
    return li;
}

function updateCurrentNodeInfo(nodeName) {
    const infoDiv = document.getElementById('currentNodeInfo');
    if (infoDiv) {
        infoDiv.innerHTML = `📌 当前选中：<strong>${escapeHtml(nodeName)}</strong> （点击下方按钮查看解释）`;
    }
}

function clearExplanationArea() {
    const explanationDiv = document.getElementById('explanationText');
    if (explanationDiv) {
        explanationDiv.innerHTML = `
            <div class="placeholder-text">
                <div class="placeholder-icon">🔍</div>
                <div>请先回忆这个知识点的内容，<br>再点击上方按钮对照答案</div>
            </div>
        `;
    }
}

function revealExplanation() {
    if (!currentSelectedNode) {
        const explanationDiv = document.getElementById('explanationText');
        if (explanationDiv) {
            explanationDiv.innerHTML = `<div class="placeholder-text">⚠️ 尚未选中任何知识点</div>`;
        }
        return;
    }
    const explanationText = currentSelectedNode.explanation;
    if (!explanationText || explanationText.trim() === '') {
        const explanationDiv = document.getElementById('explanationText');
        if (explanationDiv) {
            explanationDiv.innerHTML = `<div class="placeholder-text">📝 该知识点暂无解释，请自行补充。</div>`;
        }
        return;
    }
    const nodeName = currentSelectedNode.label || currentSelectedNode.name;
    const explanationDiv = document.getElementById('explanationText');
    explanationDiv.innerHTML = `
        <div style="font-weight: 600; font-size: 1.1rem; margin-bottom: 0.8rem;">📌 ${escapeHtml(nodeName)}</div>
        <div style="line-height: 1.6; white-space: pre-wrap;">${escapeHtml(explanationText)}</div>
    `;
    if (window.MathJax) MathJax.typesetPromise();
}

function showHistoryForNode(node) {
    if (!node || node.id.startsWith("root_")) return;
    const records = getNodeHistory(currentChapterId, node.id);
    const modal = document.getElementById('historyModal');
    const titleSpan = document.getElementById('modalTitle');
    const listDiv = document.getElementById('historyList');
    const chapterName = chapterMap[currentChapterId]?.name || "未知章节";
    titleSpan.textContent = `📋 ${chapterName} - ${node.label} 抽查记录`;
    if (records.length === 0) {
        listDiv.innerHTML = `<div class="placeholder-text">暂无抽查记录</div>`;
    } else {
        let html = `<table class="history-table"><thead><tr><th>抽查时间</th><th>熟悉程度</th></tr></thead><tbody>`;
        records.forEach(rec => {
            const date = new Date(rec.timestamp);
            const dateStr = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            const badgeClass = rec.familiar ? 'familiar-badge' : 'unfamiliar-badge';
            const badgeText = rec.familiar ? '熟悉' : '不熟悉';
            html += `<tr><td>${dateStr}</td><td><span class="${badgeClass}">${badgeText}</span></td></td>`;
        });
        html += `</tbody></table>`;
        listDiv.innerHTML = html;
    }
    modal.style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// ================== 章节切换 ==================
function loadChapter(chapterId) {
    currentChapterId = chapterId;
    const chapter = chapterMap[chapterId];
    if (!chapter) return;
    const { nodes, edges } = chapter.data;
    const { root, nodeMap } = buildTreeFromData(nodes, edges);
    currentTreeRoot = root;
    currentNodeMap = nodeMap;
    currentSelectedNode = root;

    const container = document.getElementById('treeView');
    container.innerHTML = '';
    const rootUl = document.createElement('ul');
    rootUl.style.listStyle = 'none';
    rootUl.style.paddingLeft = '0';
    if (root) rootUl.appendChild(renderTree(root));
    container.appendChild(rootUl);

    updateCurrentNodeInfo(root.label || root.name);
    clearExplanationArea();

    const historyBtn = document.getElementById('viewHistoryBtn');
    if (historyBtn) historyBtn.style.display = 'none';
}

// ================== 初始化控件 ==================
function initChapterSelect() {
    const selectEl = document.getElementById('chapterSelect');
    selectEl.innerHTML = '';
    chapterOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        selectEl.appendChild(option);
    });
    selectEl.addEventListener('change', (e) => loadChapter(e.target.value));
}

function bindEvents() {
    document.getElementById('revealButton').addEventListener('click', revealExplanation);
    document.getElementById('randomQuizBtn').addEventListener('click', randomQuiz);
    document.getElementById('quizRevealBtn').addEventListener('click', revealQuizAnswer);
    document.getElementById('familiarBtn').addEventListener('click', markFamiliar);
    document.getElementById('unfamiliarBtn').addEventListener('click', markUnfamiliar);
    document.getElementById('resetStatsBtn').addEventListener('click', clearAllHistory);
    document.getElementById('showAllRecordsBtn').addEventListener('click', showAllRecordsTable);
    const historyBtn = document.getElementById('viewHistoryBtn');
    if (historyBtn) {
        historyBtn.addEventListener('click', () => {
            if (currentSelectedNode) showHistoryForNode(currentSelectedNode);
        });
    }
    // 单个知识点历史模态框关闭
    const modalHistory = document.getElementById('historyModal');
    modalHistory.querySelector('.close').addEventListener('click', () => closeModal('historyModal'));
    // 全局明细模态框关闭
    const modalAll = document.getElementById('allRecordsModal');
    modalAll.querySelector('.close-all').addEventListener('click', () => closeModal('allRecordsModal'));
    window.addEventListener('click', (e) => {
        if (e.target === modalHistory) closeModal('historyModal');
        if (e.target === modalAll) closeModal('allRecordsModal');
    });
}

window.addEventListener('DOMContentLoaded', () => {
    initChapterSelect();
    loadChapter('probability');
    bindEvents();
    updateGlobalStats();
});
