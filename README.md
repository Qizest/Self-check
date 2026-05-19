# 📐 保研面试复习工具集 / Mathematics Review Toolkit

## 📖 简介 / Introduction

**中文**  
一个纯前端的面试复习工具集，目前包含**微积分**与**运筹学**两个独立模块。每个模块均提供知识树目录自检、随机抽查（全局/按章节）和历史记录表格。数据保存在浏览器本地，无需后端。

**English**  
A pure front-end mathematics review toolkit featuring two independent modules: **Calculus** and **Operations Research**. Each module provides a knowledge tree for self-checking, random quiz (global/by chapter), and a detailed history table. All data is stored locally in your browser – no backend required.

## ✨ 功能 / Features

- 🌳 知识树（可折叠目录，点击节点自检）
- 🎲 随机抽查（可选择全部章节或仅当前章节）
- 📊 历史明细表（每行一个知识点，每列一次抽查记录）
- 🗑️ 重置所有记录
- 📱 响应式设计，支持手机/电脑

## 📚 覆盖内容 / Topics Covered

### 📐 微积分模块
- 极限与连续、一元导数与微分、微分中值定理、一元积分学
- 级数与广义积分、多元函数微分学、重积分、曲线积分与曲面积分、微分方程

### 📊 运筹学模块
- 线性规划（单纯形法、对偶理论、灵敏度分析）
- 运输问题（表上单纯形法）
- 整数规划（分支定界、割平面法、指派问题）
- 图论与网络流（最短路、最大流、最小费用流）
- 非线性规划（无约束优化、迭代计算法、有约束优化、K-T条件）
- 动态规划（最优化原理、典型应用）
- 决策论（不确定决策、风险决策、决策树、前景理论）
- 博弈论（完全信息静态博弈、矩阵博弈、完全信息动态博弈、不完全信息博弈）

## 🚀 使用方法 / How to Use

1. 下载所有文件到同一文件夹，打开根目录下的 `index.html` 即可选择进入任一模块。  
   或部署到 GitHub Pages：将仓库推送到 GitHub → Settings → Pages → 选择 main 分支。
2. 选择微积分或运筹学进入对应工具。
3. 左侧树目录点击知识点 → 点击“显示解释”自检。
4. 右侧选择抽查范围 → 点击“随机抽查” → 回忆 → 显示答案 → 标记“熟悉/不熟悉”。
5. 点击“查看知识点抽查明细”查看完整历史表格。

## 🛠️ 技术栈 / Tech Stack

- HTML5 / CSS3 / JavaScript
- MathJax（数学公式渲染）
- 本地存储（localStorage，记录抽查历史）

## 🔧 自定义 / Customization

- 编辑各模块下的 `chapters.js` 可增删知识点、修改树形结构。
- 所有抽查记录保存在浏览器 `localStorage` 中，清除缓存会丢失记录。

## 📝 许可 / License

MIT License – 开源免费，可自由修改与分享。  
愿大家保研/考研/面试顺利！未来闲得没事的话可以试试做成小程序哈哈哈。

---

🔗 **在线访问**：[https://qizest.github.io/Self-check/](https://qizest.github.io/Self-check/)
