// ===================== 极限与连续 =====================
const limitsContinuityData = {
    nodes: [
        { id: "root_limits", label: "📌 极限与连续" },
        { id: "limits", label: "极限", explanation: "设函数 $f(x)$ 在点 $x_0$ 的某去心邻域内有定义，$A$ 为常数。若 $\\forall \\varepsilon>0,\\exists \\delta>0$，当 $0<|x-x_0|<\\delta$ 时，$|f(x)-A|<\\varepsilon$，则称 $A$ 为 $f(x)$ 当 $x\\to x_0$ 时的极限，记作 $\\lim_{x\\to x_0}f(x)=A$。" },

        { id: "limit_definition", label: "极限定义" },
        { id: "sequence_limit", label: "数列极限", explanation: "设 $\\{x_n\\}$ 为数列，$a$ 为常数。若 $\\forall \\varepsilon>0,\\exists N\\in\\mathbb{N}$，当 $n>N$ 时，$|x_n-a|<\\varepsilon$，则称 $a$ 为数列 $\\{x_n\\}$ 的极限，记作 $\\lim_{n\\to\\infty}x_n=a$。" },
        { id: "epsilon_N", label: "$\\varepsilon$-$N$ 语言", explanation: "数列极限的严格定义：$\\forall \\varepsilon>0,\\exists N(\\varepsilon)\\in\\mathbb{N},\\forall n>N:|x_n-a|<\\varepsilon$。" },
        { id: "function_limit", label: "函数极限" },
        { id: "epsilon_delta", label: "$\\varepsilon$-$\\delta$ 语言", explanation: "函数极限的严格定义：$\\lim_{x\\to x_0}f(x)=A\\iff\\forall\\varepsilon>0,\\exists\\delta>0,\\forall x\\text{ 满足 }0<|x-x_0|<\\delta:|f(x)-A|<\\varepsilon$。" },
        { id: "epsilon_K", label: "$\\varepsilon$-$K$ 语言 ($x\\to\\infty$)", explanation: "三种常见情形：\n $\\lim_{x\\to +\\infty}f(x)=A \\iff \\forall\\varepsilon>0,\\exists K>0,\\forall x>K:|f(x)-A|<\\varepsilon$；\n $\\lim_{x\\to -\\infty}f(x)=A \\iff \\forall\\varepsilon>0,\\exists K>0,\\forall x<-K:|f(x)-A|<\\varepsilon$；\n $\\lim_{x\\to \\infty}f(x)=A$（即 $|x|\\to\\infty$）$\\iff \\forall\\varepsilon>0,\\exists K>0,\\forall |x|>K:|f(x)-A|<\\varepsilon$。" },

        { id: "limit_properties", label: "极限四则运算与性质" },
        { id: "uniqueness", label: "唯一性", explanation: "若极限存在，则极限值唯一。" },
        { id: "boundedness", label: "有界性", explanation: "若 $\\lim_{x\\to x_0}f(x)=A$，则存在 $x_0$ 的某去心邻域，$f(x)$ 在该邻域内有界。" },
        { id: "sign_preservation", label: "保号性", explanation: "若 $\\lim_{x\\to x_0}f(x)=A>0$，则 $\\exists\\delta>0$，当 $0<|x-x_0|<\\delta$ 时，$f(x)>0$；$A<0$ 时类似。" },

        { id: "limit_existence_theorems", label: "极限存在定理" },
        { id: "monotone_bounded", label: "单调有界准则", explanation: "单调递增（减）且有上（下）界的数列必收敛。" },
        { id: "squeeze_theorem", label: "夹逼准则", explanation: "若在 $x_0$ 某去心邻域内 $g(x)\\le f(x)\\le h(x)$，且 $\\lim_{x\\to x_0}g(x)=\\lim_{x\\to x_0}h(x)=A$，则 $\\lim_{x\\to x_0}f(x)=A$。" },
        { id: "cauchy_criterion", label: "柯西准则", explanation: "数列 $\\{x_n\\}$ 收敛 $\\iff\\forall\\varepsilon>0,\\exists N\\in\\mathbb{N},\\forall m,n>N:|x_m-x_n|<\\varepsilon$。" },
        { id: "heine_theorem", label: "海涅定理", explanation: "$\\lim_{x\\to x_0}f(x)=A$ 的充要条件是：对任意满足 $x_n\\to x_0$ 且 $x_n\\ne x_0$ 的数列 $\\{x_n\\}$，均有 $\\lim_{n\\to\\infty}f(x_n)=A$。" },

        { id: "continuity", label: "连续" },
        { id: "continuity_definition", label: "连续的定义", explanation: "$f(x)$ 在点 $x_0$ 处连续 $\\iff\\lim_{x\\to x_0}f(x)=f(x_0)\\iff\\forall\\varepsilon>0,\\exists\\delta>0,\\forall|x-x_0|<\\delta:|f(x)-f(x_0)|<\\varepsilon$。" },
        { id: "left_right_continuity", label: "左连续 / 右连续", explanation: "左连续：$\\lim_{x\\to x_0^-}f(x)=f(x_0)$；右连续：$\\lim_{x\\to x_0^+}f(x)=f(x_0)$。" },

        { id: "discontinuity", label: "间断点" },
        { id: "first_kind", label: "第一类间断点", explanation: "左、右极限均存在。若左右极限相等但不等于函数值（或函数无定义），为可去间断点；若左右极限不相等，为跳跃间断点。" },
        { id: "jump_discontinuity", label: "跳跃间断点", explanation: "左、右极限存在但 $\\lim_{x\\to x_0^-}f(x)\\ne\\lim_{x\\to x_0^+}f(x)$。" },
        { id: "removable_discontinuity", label: "可去间断点", explanation: "左、右极限存在且相等，但 $\\lim_{x\\to x_0}f(x)\\ne f(x_0)$ 或 $f(x_0)$ 无定义。" },
        { id: "second_kind", label: "第二类间断点", explanation: "左、右极限至少有一个不存在（包括无穷或振荡）。" },
        { id: "infinite_discontinuity", label: "无穷间断点", explanation: "$\\lim_{x\\to x_0}|f(x)|=+\\infty$。" },
        { id: "oscillatory_discontinuity", label: "振荡间断点", explanation: "函数在 $x_0$ 附近无限振荡，极限不存在且不为无穷，如 $f(x)=\\sin(1/x)$ 在 $x=0$ 处。" },

        { id: "continuity_properties", label: "连续的性质" },
        { id: "continuity_arithmetic", label: "连续函数四则运算", explanation: "若 $f,g$ 在 $x_0$ 连续，则 $f\\pm g,\\ f\\cdot g,\\ f/g\\ (g(x_0)\\ne0)$ 也在 $x_0$ 连续。" },
        { id: "continuity_composite", label: "复合函数连续性", explanation: "若 $u=g(x)$ 在 $x_0$ 连续，$y=f(u)$ 在 $u_0=g(x_0)$ 连续，则 $y=f(g(x))$ 在 $x_0$ 连续。" },
        { id: "intermediate_value_theorem", label: "介值定理", explanation: "设 $f\\in C[a,b]$，$\\mu$ 介于 $f(a)$ 与 $f(b)$ 之间，则 $\\exists\\xi\\in(a,b)$ 使 $f(\\xi)=\\mu$。" },
        { id: "max_min_theorem", label: "最值定理", explanation: "若 $f\\in C[a,b]$，则 $f$ 在 $[a,b]$ 上必能取到最大值与最小值。" }
    ],
    edges: [
        { from: "root_limits", to: "limits" },
        { from: "limits", to: "limit_definition" },
        { from: "limit_definition", to: "sequence_limit" },
        { from: "sequence_limit", to: "epsilon_N" },
        { from: "limit_definition", to: "function_limit" },
        { from: "function_limit", to: "epsilon_delta" },
        { from: "function_limit", to: "epsilon_K" },
        { from: "limits", to: "limit_properties" },
        { from: "limit_properties", to: "uniqueness" },
        { from: "limit_properties", to: "boundedness" },
        { from: "limit_properties", to: "sign_preservation" },
        { from: "limits", to: "limit_existence_theorems" },
        { from: "limit_existence_theorems", to: "monotone_bounded" },
        { from: "limit_existence_theorems", to: "squeeze_theorem" },
        { from: "limit_existence_theorems", to: "cauchy_criterion" },
        { from: "limit_existence_theorems", to: "heine_theorem" },

        { from: "root_limits", to: "continuity" },
        { from: "continuity", to: "continuity_definition" },
        { from: "continuity_definition", to: "left_right_continuity" },
        { from: "continuity", to: "discontinuity" },
        { from: "discontinuity", to: "first_kind" },
        { from: "first_kind", to: "jump_discontinuity" },
        { from: "first_kind", to: "removable_discontinuity" },
        { from: "discontinuity", to: "second_kind" },
        { from: "second_kind", to: "infinite_discontinuity" },
        { from: "second_kind", to: "oscillatory_discontinuity" },
        { from: "continuity", to: "continuity_properties" },
        { from: "continuity_properties", to: "continuity_arithmetic" },
        { from: "continuity_properties", to: "continuity_composite" },
        { from: "continuity_properties", to: "intermediate_value_theorem" },
        { from: "continuity_properties", to: "max_min_theorem" }
    ]
};

// ===================== 一元导数与微分 =====================
const derivativeDifferentialData = {
    nodes: [
        { id: "root_derivative", label: "📌 一元导数与微分" },
        { id: "derivative", label: "导数的定义" },
        { id: "derivative_limit", label: "导数定义（极限形式）", explanation: "设函数 $f(x)$ 在 $x_0$ 的某邻域内有定义，若极限 $\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$ 存在，则称 $f$ 在 $x_0$ 处可导，该极限值记为 $f'(x_0)$，即 $f'(x_0)=\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}$。" },
        { id: "differentiability", label: "可导的充要条件", explanation: "$f$ 在 $x_0$ 可导 $\\iff$ 左导数 $f'_-(x_0)=\\lim_{h\\to 0^-}\\frac{f(x_0+h)-f(x_0)}{h}$ 与右导数 $f'_+(x_0)$ 存在且相等。" },
        { id: "increment_formula", label: "增量公式", explanation: "若 $f$ 在 $x_0$ 可导，则 $\\Delta y = f(x_0+\\Delta x)-f(x_0)=f'(x_0)\\Delta x+o(\\Delta x)\\ (\\Delta x\\to 0)$。" },

        { id: "differentiation_rules", label: "求导方法" },
        { id: "basic_derivatives", label: "基本初等函数导数", explanation: "常用公式：$(x^\\alpha)'=\\alpha x^{\\alpha-1}$；$(e^x)'=e^x$；$(\\ln x)'=1/x$；$(\\sin x)'=\\cos x$；$(\\cos x)'=-\\sin x$；$(\\tan x)'=\\sec^2 x$ 等。" },
        { id: "arithmetic_deriv", label: "四则运算求导", explanation: "$(u\\pm v)' = u'\\pm v'$；$(uv)' = u'v+uv'$；$(u/v)' = (u'v-uv')/v^2\\ (v\\ne0)$。" },
        { id: "inverse_function_deriv", label: "反函数求导", explanation: "若 $y=f(x)$ 在 $x_0$ 可导且 $f'(x_0)\\ne0$，则反函数 $x=f^{-1}(y)$ 在 $y_0=f(x_0)$ 可导，且 $[f^{-1}]'(y_0)=1/f'(x_0)$。" },
        { id: "chain_rule", label: "链式法则", explanation: "若 $u=g(x)$ 在 $x_0$ 可导，$y=f(u)$ 在 $u_0=g(x_0)$ 可导，则复合函数 $y=f(g(x))$ 在 $x_0$ 可导，且 $(f\\circ g)'(x_0)=f'(g(x_0))\\cdot g'(x_0)$。" },
        { id: "implicit_diff", label: "隐函数求导", explanation: "设 $F(x,y)=0$ 确定隐函数 $y=y(x)$，若 $F_y\\ne0$，则 $\\frac{dy}{dx}=-\\frac{F_x}{F_y}$。" },
        { id: "logarithmic_diff", label: "对数求导法", explanation: "对 $y = u(x)^{v(x)}$ 取自然对数 $\\ln y = v(x)\\cdot\\ln u(x)$，再对 $x$ 求导得 $y'/y = v'\\cdot\\ln u + v\\cdot u'/u$，从而解出 $y'$。" },

        { id: "differential", label: "微分" },
        { id: "differential_definition", label: "微分的定义", explanation: "若 $\\Delta y = f(x_0+\\Delta x)-f(x_0)$ 可表示为 $A\\Delta x+o(\\Delta x)\\ (\\Delta x\\to0)$，则称 $f$ 在 $x_0$ 可微，且微分 $dy = A\\,dx$，其中 $A = f'(x_0)$。" },
        { id: "differentiable_condition", label: "可微与可导的关系", explanation: "函数在一点可微 $\\iff$ 在该点可导，且 $dy = f'(x)\\,dx$。" },
        { id: "first_order_invariance", label: "一阶微分形式不变性", explanation: "若 $y = f(u)$，$u = g(x)$，则 $dy = f'(u)\\,du$，其中 $du = g'(x)\\,dx$，该形式不依赖于 $u$ 是自变量还是中间变量。" }
    ],
    edges: [
        { from: "root_derivative", to: "derivative" },
        { from: "derivative", to: "derivative_limit" },
        { from: "derivative", to: "differentiability" },
        { from: "derivative", to: "increment_formula" },

        { from: "root_derivative", to: "differentiation_rules" },
        { from: "differentiation_rules", to: "basic_derivatives" },
        { from: "differentiation_rules", to: "arithmetic_deriv" },
        { from: "differentiation_rules", to: "inverse_function_deriv" },
        { from: "differentiation_rules", to: "chain_rule" },
        { from: "differentiation_rules", to: "implicit_diff" },
        { from: "differentiation_rules", to: "logarithmic_diff" },

        { from: "root_derivative", to: "differential" },
        { from: "differential", to: "differential_definition" },
        { from: "differential", to: "differentiable_condition" },
        { from: "differential", to: "first_order_invariance" }
    ]
};

// ===================== 微分中值定理与导数的应用 =====================
const meanValueData = {
    nodes: [
        { id: "root_meanvalue", label: "📌 微分中值定理与导数的应用" },

        // 微分中值定理
        { id: "mean_value_theorems", label: "微分中值定理" },
        { id: "fermat", label: "费马引理", explanation: "设函数 $f(x)$ 在点 $x_0$ 的某邻域内有定义，且在 $x_0$ 处可导。若 $x_0$ 是 $f$ 的极值点，则 $f'(x_0)=0$。" },
        { id: "rolle", label: "罗尔定理", explanation: "若 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $f(a)=f(b)$，则 $\\exists\\xi\\in(a,b)$ 使 $f'(\\xi)=0$。" },
        { id: "lagrange", label: "拉格朗日中值定理", explanation: "若 $f(x)$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，则 $\\exists\\xi\\in(a,b)$ 使 $f(b)-f(a)=f'(\\xi)(b-a)$。" },
        { id: "cauchy_mean", label: "柯西中值定理", explanation: "若 $f,g$ 在 $[a,b]$ 上连续，在 $(a,b)$ 内可导，且 $g'(x)\\neq0$，则 $\\exists\\xi\\in(a,b)$ 使 $\\frac{f(b)-f(a)}{g(b)-g(a)}=\\frac{f'(\\xi)}{g'(\\xi)}$。" },

        // 洛必达法则
         { id: "lhopital", label: "洛必达法则", explanation: "用于求解 $\\frac{0}{0}$ 或 $\\frac{\\infty}{\\infty}$ 型未定式极限。\n\n定理（$0/0$ 型）：设 $f(x), g(x)$ 在 $x_0$ 的某去心邻域内可导，且 $g'(x) \\neq 0$，若 $\\lim_{x\\to x_0}f(x)=\\lim_{x\\to x_0}g(x)=0$，且 $\\lim_{x\\to x_0}\\frac{f'(x)}{g'(x)}=A$（$A$ 为有限数或 $\\pm\\infty$），则 $\\lim_{x\\to x_0}\\frac{f(x)}{g(x)}=A$。\n\n定理（$\\infty/\\infty$ 型）：设 $f(x), g(x)$ 在 $x_0$ 的某去心邻域内可导，且 $g'(x) \\neq 0$，若 $\\lim_{x\\to x_0}|f(x)|=\\lim_{x\\to x_0}|g(x)|=\\infty$，且 $\\lim_{x\\to x_0}\\frac{f'(x)}{g'(x)}=A$（$A$ 为有限数或 $\\pm\\infty$），则 $\\lim_{x\\to x_0}\\frac{f(x)}{g(x)}=A$。\n\n推广：法则对 $x\\to x_0^+$、$x\\to x_0^-$、$x\\to\\pm\\infty$ 同样成立。\n\n注意事项：\n① 必须验证未定式类型，否则不能直接应用；\n② 若 $\\lim\\frac{f'}{g'}$ 仍为未定式，可反复使用；\n③ 若 $\\lim\\frac{f'}{g'}$ 不存在且不为无穷，则法则失效，需改用其他方法；\n④ 对于 $0\\cdot\\infty$、$\\infty-\\infty$、$1^\\infty$ 等未定式，需先化为 $\\frac{0}{0}$ 或 $\\frac{\\infty}{\\infty}$ 型再使用。" },

        // 泰勒公式
        { id: "taylor", label: "泰勒公式" },
        { id: "taylor_theorem", label: "泰勒定理", explanation: "若 $f$ 在 $x_0$ 处具有 $n$ 阶导数，则 $f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k + R_n(x)$，其中 $R_n(x)=o((x-x_0)^n)$（佩亚诺余项）。" },
        { id: "mclaurin", label: "麦克劳林公式", explanation: "泰勒公式中取 $x_0=0$ 的特例：$f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(0)}{k!}x^k + R_n(x)$。" },
        { id: "taylor_remainder_lagrange", label: "拉格朗日余项", explanation: "$R_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$，其中 $\\xi$ 介于 $x$ 与 $x_0$ 之间。" },
        { id: "taylor_remainder_peano", label: "佩亚诺余项", explanation: "$R_n(x)=o((x-x_0)^n)$，适用于局部逼近，不给出具体误差估计。" },
        { id: "taylor_remainder_integral", label: "积分型余项", explanation: "$R_n(x)=\\frac{1}{n!}\\int_{x_0}^x (x-t)^n f^{(n+1)}(t)\\,dt$，要求 $f^{(n+1)}$ 可积。" },

        // 导数的应用
        { id: "applications", label: "导数的应用" },
        { id: "monotonicity", label: "单调性判别", explanation: "若 $f'(x)>0$（$<0$）在区间 $I$ 内成立，则 $f$ 在 $I$ 上严格递增（递减）。" },
        { id: "extreme_necessary_first", label: "极值的一阶必要条件", explanation: "若 $f$ 在 $x_0$ 处可导且取得极值，则 $f'(x_0)=0$（费马引理）。" },
        { id: "extreme_necessary_second", label: "极值的二阶必要条件", explanation: "若 $f$ 在 $x_0$ 处二阶可导且取得极值，则 $f'(x_0)=0$ 且 $f''(x_0)\\ge0$（极小值）或 $f''(x_0)\\le0$（极大值）。注意该条件仅为必要，不是充分。" },
        { id: "extreme_sufficient_first", label: "极值的一阶充分条件", explanation: "设 $f$ 在 $x_0$ 处连续，在去心邻域内可导。若 $f'(x)$ 在 $x_0$ 左侧为正、右侧为负，则 $x_0$ 为极大值点；左侧为负、右侧为正，则为极小值点。若导数不变号，则不是极值点。" },
        { id: "extreme_sufficient_second", label: "极值的二阶充分条件", explanation: "设 $f'(x_0)=0$，$f''(x_0)$ 存在。若 $f''(x_0)>0$，则 $x_0$ 为极小值点；若 $f''(x_0)<0$，则 $x_0$ 为极大值点；若 $f''(x_0)=0$，则无法判断，需用更高阶导数或其他方法。" },

        { id: "concavity", label: "凹凸性与拐点", explanation: "若 $f''(x)>0$，则曲线是凹的（向上凸）；$f''(x)<0$ 为凸的（向下凸）。拐点是曲线凹凸性改变的点，满足 $f''(x)=0$ 且左右异号。" },
        { id: "asymptote", label: "渐近线", explanation: "包括水平渐近线（$\\lim_{x\\to\\pm\\infty}f(x)=L$）、铅直渐近线（$\\lim_{x\\to x_0^\\pm}f(x)=\\infty$）和斜渐近线（$\\lim_{x\\to\\pm\\infty}\\frac{f(x)}{x}=k\\neq0$，$\\lim_{x\\to\\pm\\infty}(f(x)-kx)=b$）。" }
    ],
    edges: [
        { from: "root_meanvalue", to: "mean_value_theorems" },
        { from: "mean_value_theorems", to: "fermat" },
        { from: "mean_value_theorems", to: "rolle" },
        { from: "mean_value_theorems", to: "lagrange" },
        { from: "mean_value_theorems", to: "cauchy_mean" },

        { from: "root_meanvalue", to: "lhopital" },

        { from: "root_meanvalue", to: "taylor" },
        { from: "taylor", to: "taylor_theorem" },
        { from: "taylor", to: "mclaurin" },
        { from: "taylor", to: "taylor_remainder_lagrange" },
        { from: "taylor", to: "taylor_remainder_peano" },
        { from: "taylor", to: "taylor_remainder_integral" },

        { from: "root_meanvalue", to: "applications" },
        { from: "applications", to: "monotonicity" },
        { from: "applications", to: "extreme_necessary_first" },
        { from: "applications", to: "extreme_necessary_second" },
        { from: "applications", to: "extreme_sufficient_first" },
        { from: "applications", to: "extreme_sufficient_second" },
        { from: "applications", to: "concavity" },
        { from: "applications", to: "asymptote" }
    ]
};

// ===================== 一元函数积分学 =====================
const integralData = {
    nodes: [
        { id: "root_integral", label: "📌 一元函数积分学" },

        // ========== 不定积分 ==========
        { id: "indefinite_integral", label: "不定积分" },
        { id: "indef_definition", label: "不定积分的定义", explanation: "若 $F'(x)=f(x)$，则称 $F(x)$ 是 $f(x)$ 的一个原函数。$f(x)$ 的所有原函数构成不定积分：$\\int f(x)\\,dx = F(x) + C$，其中 $C$ 为任意常数。" },
        { id: "basic_integral_formulas", label: "基本积分公式", explanation: "常见积分表：$\\int x^\\alpha dx = \\frac{x^{\\alpha+1}}{\\alpha+1}+C(\\alpha\\neq-1)$；$\\int \\frac{1}{x}dx = \\ln|x|+C$；$\\int e^x dx = e^x+C$；$\\int \\sin x dx = -\\cos x+C$；$\\int \\cos x dx = \\sin x+C$；$\\int \\sec^2 x dx = \\\\tan x+C$；$\\int \\frac{1}{1+x^2}dx = \\arctan x+C$ 等。" },

        // 换元积分法
        { id: "substitution", label: "换元积分法" },
        { id: "first_substitution", label: "第一换元积分法（凑微分法）", explanation: "若 $\\int f(u) du = F(u)+C$，且 $u=\\varphi(x)$ 可导，则 $\\int f(\\varphi(x))\\varphi'(x) dx = F(\\varphi(x))+C$。核心是将被积表达式凑成 $f(\\varphi(x)) d\\varphi(x)$ 的形式。" },
        { id: "second_substitution", label: "第二换元积分法", explanation: "令 $x=\\psi(t)$，其中 $\\psi$ 单调可导且 $\\psi'(t)\\neq0$，则 $\\int f(x) dx = \\int f(\\psi(t))\\psi'(t) dt$，求出积分后再代回 $t=\\psi^{-1}(x)$。常用于消去根式，如三角代换、倒代换等。" },

        // 分部积分法
        { id: "integration_by_parts", label: "分部积分法", explanation: "公式：$\\int u dv = uv - \\int v du$。用于乘积积分，通常选取 $u$ 为导数后变简单的函数（反、对、幂、三、指）。" },

        // 有理分式积分
        { id: "rational_integral", label: "有理分式的积分", explanation: "将有理函数 $\\frac{P(x)}{Q(x)}$ 分解为多项式与部分分式之和（真分式时分解为 $\\frac{A}{(x-a)^k}$ 和 $\\frac{Bx+C}{(x^2+px+q)^k}$ 形式），然后逐项积分。" },

        // 三角相关积分
        { id: "trigonometric_integral", label: "三角相关积分", explanation: "包括：$\\int \\sin^m x \\cos^n x dx$（利用倍角、换元或递推）；$\\int \\tan x dx = -\\ln|\\cos x|+C$；$\\int \\sec x dx = \\ln|\\sec x + \\tan x|+C$；以及万能代换 $t=\\tan\\frac{x}{2}$ 等技巧。" },

        // ========== 定积分 ==========
        { id: "definite_integral", label: "定积分" },
        { id: "def_definition", label: "定积分的定义", explanation: "设 $f$ 在 $[a,b]$ 上有界，作分割 $a=x_0<x_1<\\dots<x_n=b$，取 $\\xi_i\\in[x_{i-1},x_i]$，若极限 $\\lim_{\\lambda\\to0}\\sum_{i=1}^n f(\\xi_i)\\Delta x_i$ 存在（与分割和取点无关），则称该极限为 $f$ 在 $[a,b]$ 上的定积分，记作 $\\int_a^b f(x)dx$。" },
        { id: "integrability_condition", label: "函数可积的必要条件", explanation: "若 $f$ 在 $[a,b]$ 上可积，则 $f$ 在 $[a,b]$ 上必有界。但反之不成立（有界不一定可积）。可积的充分条件：连续、单调、只有有限个间断点且有界。" },

        // 定积分的重要性质（包含估值定理、积分中值定理、柯西施瓦兹不等式）
        { id: "definite_properties", label: "定积分的重要性质", explanation: "线性性：$\\int_a^b (\\alpha f+\\beta g)=\\alpha\\int_a^b f+\\beta\\int_a^b g$。\n区间可加性：$\\int_a^b f = \\int_a^c f + \\int_c^b f$。\n保号性：若 $f\\ge0$，则 $\\int_a^b f\\ge0$。\n绝对值不等式：$|\\int_a^b f| \\le \\int_a^b |f|$。\n估值定理：若 $m\\le f(x)\\le M$，则 $m(b-a)\\le\\int_a^b f(x)dx\\le M(b-a)$。\n积分中值定理：若 $f$ 连续，则存在 $\\xi\\in[a,b]$ 使 $\\int_a^b f(x)dx = f(\\xi)(b-a)$。\n柯西-施瓦兹不等式：$(\\int_a^b f(x)g(x)dx)^2 \\le (\\int_a^b f^2(x)dx)(\\int_a^b g^2(x)dx)$。" },

        // 微积分基本定理
        { id: "ftc", label: "微积分基本定理" },
        { id: "ftc1", label: "微积分第一定理（原函数存在定理）", explanation: "若 $f$ 在 $[a,b]$ 上连续，则函数 $F(x)=\\int_a^x f(t)dt$ 在 $[a,b]$ 上可导，且 $F'(x)=f(x)$。即变上限积分是被积函数的一个原函数。" },
        { id: "ftc2", label: "微积分第二定理（牛顿-莱布尼茨公式）", explanation: "若 $f$ 在 $[a,b]$ 上连续，$F$ 是 $f$ 的任意一个原函数，则 $\\int_a^b f(x)dx = F(b)-F(a)$。" },

        // 定积分计算技巧（子节点）
        { id: "definite_techniques", label: "定积分计算技巧" },
        { id: "technique_parity", label: "奇偶性", explanation: "若 $f$ 为偶函数，则 $\\int_{-a}^a f(x)dx = 2\\int_0^a f(x)dx$；\n若 $f$ 为奇函数，则 $\\int_{-a}^a f(x)dx = 0$。" },
        { id: "technique_symmetry", label: "对称性（一般公式）", explanation: "对于对称区间 $[-a,a]$，有 $\\int_{-a}^a f(x)dx = \\int_0^a [f(x)+f(-x)]dx$。\n该公式可推广到更一般的情形。" },
        { id: "technique_periodicity", label: "周期性", explanation: "若 $f$ 以 $T$ 为周期，则 $\\int_a^{a+T} f(x)dx = \\int_0^T f(x)dx$，与起点 $a$ 无关。" },
        { id: "technique_wallis", label: "华莱士公式（Wallis 公式）", explanation: "$\\int_0^{\\pi/2} \\sin^n x dx = \\int_0^{\\pi/2} \\cos^n x dx = \\frac{\\sqrt{\\pi}\\,\\Gamma(\\frac{n+1}{2})}{2\\,\\Gamma(\\frac{n}{2}+1)}$。\n特别地：\n当 $n=2m$ 时，$I_{2m} = \\frac{(2m-1)!!}{(2m)!!}\\cdot\\frac{\\pi}{2}$；\n当 $n=2m+1$ 时，$I_{2m+1} = \\frac{(2m)!!}{(2m+1)!!}$。" },
        { id: "improper_integral", label: "反常积分", explanation: "无穷限反常积分：$\\int_a^{\\infty} f(x)dx = \\lim_{b\\to\\infty}\\int_a^b f(x)dx$；\n无界函数反常积分：$\\int_a^b f(x)dx$ 在 $x\\to a^+$ 无界时定义为极限。\n收敛性判别法有比较判别法、极限比较法等。" }
    ],
    edges: [
        { from: "root_integral", to: "indefinite_integral" },
        { from: "indefinite_integral", to: "indef_definition" },
        { from: "indefinite_integral", to: "basic_integral_formulas" },
        { from: "indefinite_integral", to: "substitution" },
        { from: "substitution", to: "first_substitution" },
        { from: "substitution", to: "second_substitution" },
        { from: "indefinite_integral", to: "integration_by_parts" },
        { from: "indefinite_integral", to: "rational_integral" },
        { from: "indefinite_integral", to: "trigonometric_integral" },

        { from: "root_integral", to: "definite_integral" },
        { from: "definite_integral", to: "def_definition" },
        { from: "definite_integral", to: "integrability_condition" },
        { from: "definite_integral", to: "definite_properties" },
        { from: "definite_integral", to: "ftc" },
        { from: "ftc", to: "ftc1" },
        { from: "ftc", to: "ftc2" },
        { from: "definite_integral", to: "definite_techniques" },
        // 定积分计算技巧的子节点
        { from: "definite_techniques", to: "technique_parity" },
        { from: "definite_techniques", to: "technique_symmetry" },
        { from: "definite_techniques", to: "technique_periodicity" },
        { from: "definite_techniques", to: "technique_wallis" },
        { from: "definite_techniques", to: "improper_integral" }
    ]
};

// ===================== 级数与广义积分 =====================
const seriesData = {
    nodes: [
        { id: "root_series", label: "📌 级数与广义积分" },

        // ========== 无穷级数 ==========
        { id: "infinite_series", label: "无穷级数" },

        // 常数项级数
        { id: "constant_series", label: "常数项级数" },
        { id: "series_properties", label: "收敛级数的性质", explanation: "线性性质：若 $\\sum a_n$ 和 $\\sum b_n$ 收敛，则 $\\sum (\\alpha a_n+\\beta b_n) = \\alpha\\sum a_n+\\beta\\sum b_n$。\n去添有限项不影响敛散性。\n收敛级数任意加括号后仍收敛。" },
        { id: "necessary_condition", label: "级数收敛的必要条件", explanation: "若 $\\sum_{n=1}^\\infty a_n$ 收敛，则 $\\lim_{n\\to\\infty} a_n = 0$。反之不成立（如调和级数）。" },
        { id: "cauchy_series", label: "柯西收敛原理", explanation: "级数 $\\sum_{n=1}^\\infty a_n$ 收敛 $\\iff$ $\\forall\\varepsilon>0,\\exists N,\\forall n>m>N$，有 $|a_{m+1}+\\cdots+a_n|<\\varepsilon$。" },

        { id: "positive_series", label: "正项级数及其判别法" },
        { id: "comparison_test", label: "比较判别法", explanation: "设 $0\\le a_n\\le b_n$，若 $\\sum b_n$ 收敛则 $\\sum a_n$ 收敛；若 $\\sum a_n$ 发散则 $\\sum b_n$ 发散。\n极限形式：若 $\\lim a_n/b_n = l\\in(0,\\infty)$，则 $\\sum a_n$ 与 $\\sum b_n$ 同敛散。" },
        { id: "ratio_test", label: "比值判别法（达朗贝尔）", explanation: "若 $\\lim_{n\\to\\infty} \\frac{a_{n+1}}{a_n} = \\rho$，则 $\\rho<1$ 时收敛，$\\rho>1$ 时发散，$\\rho=1$ 失效。" },
        { id: "root_test", label: "根值判别法（柯西）", explanation: "若 $\\lim_{n\\to\\infty} \\sqrt[n]{a_n} = \\rho$，则 $\\rho<1$ 收敛，$\\rho>1$ 发散，$\\rho=1$ 失效。" },
        { id: "integral_test", label: "积分判别法", explanation: "对非负递减函数 $f(x)$，$\\sum_{n=N}^\\infty f(n)$ 与 $\\int_N^\\infty f(x)dx$ 同敛散。" },

        { id: "alternating_series", label: "交错级数与任意项级数" },
        { id: "leibniz_test", label: "莱布尼茨判别法", explanation: "若交错级数 $\\sum (-1)^{n-1} b_n$（$b_n>0$）满足：$b_n$ 单调递减且 $\\lim b_n=0$，则级数收敛。" },
        { id: "abel_test_const", label: "阿贝尔判别法（常数项级数）", explanation: "若 $\\sum a_n$ 收敛，$\\{b_n\\}$ 单调有界，则 $\\sum a_n b_n$ 收敛。" },
        { id: "dirichlet_test_const", label: "狄利克雷判别法（常数项级数）", explanation: "若 $\\sum a_n$ 的部分和有界，$\\{b_n\\}$ 单调趋于0，则 $\\sum a_n b_n$ 收敛。" },
        { id: "abs_cond_convergence", label: "条件收敛与绝对收敛", explanation: "$\\sum a_n$ 绝对收敛：$\\sum |a_n|$ 收敛，此时原级数必收敛。条件收敛：$\\sum a_n$ 收敛但 $\\sum |a_n|$ 发散。" },

        // 函数项级数
        { id: "function_series", label: "函数项级数" },
        { id: "uniform_convergence", label: "一致收敛", explanation: "定义：$\\sum u_n(x)$ 在集合 $D$ 上一致收敛于 $S(x)$，若 $\\sup_{x\\in D}|\\sum_{k=1}^n u_k(x)-S(x)|\\to0$。比点态收敛更强。" },
        { id: "convergence_domain", label: "收敛域与收敛区间", explanation: "对幂级数 $\\sum a_n(x-x_0)^n$，存在收敛半径 $R$（$0\\le R\\le\\infty$），当 $|x-x_0|<R$ 时绝对收敛，$|x-x_0|>R$ 时发散，端点需单独判断。收敛区间指开区间 $(x_0-R,x_0+R)$。" },
        { id: "weierstrass_m_test", label: "魏尔斯特拉斯判别法（M判别法）", explanation: "若存在正项级数 $\\sum M_n$ 收敛，且对一切 $x\\in D$ 有 $|u_n(x)|\\le M_n$，则 $\\sum u_n(x)$ 在 $D$ 上一致收敛且绝对收敛。" },
        { id: "abel_test_function", label: "阿贝尔判别法（函数项级数）", explanation: "若 $\\sum u_n(x)$ 在 $D$ 上一致收敛，$\\{v_n(x)\\}$ 对每个 $x$ 单调且一致有界，则 $\\sum u_n(x)v_n(x)$ 在 $D$ 上一致收敛。" },
        { id: "dirichlet_test_function", label: "狄利克雷判别法（函数项级数）", explanation: "若 $\\sum u_n(x)$ 的部分和一致有界，$\\{v_n(x)\\}$ 对每个 $x$ 单调且一致趋于0，则 $\\sum u_n(x)v_n(x)$ 在 $D$ 上一致收敛。" },

        // 傅里叶级数
        { id: "fourier_series", label: "傅里叶级数" },
        { id: "fourier_coeff", label: "傅里叶系数", explanation: "设 $f$ 以 $2\\pi$ 为周期，其傅里叶系数：$a_n=\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\cos nx\\,dx$，$b_n=\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\sin nx\\,dx$。傅里叶级数：$\\frac{a_0}{2}+\\sum_{n=1}^\\infty (a_n\\cos nx+b_n\\sin nx)$。" },
        { id: "dirichlet_convergence", label: "狄利克雷收敛定理", explanation: "若周期函数 $f$ 在 $[-\\pi,\\pi]$ 上分段单调且连续，则傅里叶级数收敛于 $f(x)$ 在连续点，在跳跃间断点收敛于左右极限平均值。" },
        { id: "even_odd_extension", label: "正弦级数与余弦级数", explanation: "对非周期函数作奇延拓或偶延拓，可展开为正弦级数或余弦级数。正弦级数系数 $b_n$，余弦级数系数 $a_n$。" },

        // ========== 广义积分 ==========
        { id: "improper_integrals", label: "广义积分" },
        { id: "improper_inf", label: "无穷限广义积分及其判别法", explanation: "定义：$\\int_a^\\infty f(x)dx = \\lim_{b\\to\\infty}\\int_a^b f(x)dx$。\n比较判别法：若 $0\\le f(x)\\le g(x)$，$\\int_a^\\infty g$ 收敛则 $\\int_a^\\infty f$ 收敛；$\\int_a^\\infty f$ 发散则 $\\int_a^\\infty g$ 发散。\n极限比较法：若 $\\lim_{x\\to\\infty} x^p f(x)=l$，则 $p>1,l$ 有限时收敛，$p\\le1,l>0$ 时发散。\n柯西判别法、阿贝尔-狄利克雷判别法等。" },
        { id: "improper_unbounded", label: "无界函数广义积分及其判别法", explanation: "定义：若 $f$ 在 $x=a$ 处无界，$\\int_a^b f(x)dx = \\lim_{\\varepsilon\\to0^+}\\int_{a+\\varepsilon}^b f(x)dx$。\n判别法类似无穷限，用 $(x-a)^p$ 作为比较函数。" },
        { id: "improper_abs_cond", label: "广义积分的绝对收敛与条件收敛", explanation: "若 $\\int |f|$ 收敛，则称绝对收敛，此时 $\\int f$ 必收敛；若 $\\int f$ 收敛但 $\\int |f|$ 发散，则称条件收敛。" }
    ],
    edges: [
        { from: "root_series", to: "infinite_series" },
        { from: "infinite_series", to: "constant_series" },
        { from: "constant_series", to: "series_properties" },
        { from: "constant_series", to: "necessary_condition" },
        { from: "constant_series", to: "cauchy_series" },
        { from: "constant_series", to: "positive_series" },
        { from: "positive_series", to: "comparison_test" },
        { from: "positive_series", to: "ratio_test" },
        { from: "positive_series", to: "root_test" },
        { from: "positive_series", to: "integral_test" },
        { from: "constant_series", to: "alternating_series" },
        { from: "alternating_series", to: "leibniz_test" },
        { from: "alternating_series", to: "abel_test_const" },
        { from: "alternating_series", to: "dirichlet_test_const" },
        { from: "constant_series", to: "abs_cond_convergence" },

        { from: "infinite_series", to: "function_series" },
        { from: "function_series", to: "uniform_convergence" },
        { from: "function_series", to: "convergence_domain" },
        { from: "function_series", to: "weierstrass_m_test" },
        { from: "function_series", to: "abel_test_function" },
        { from: "function_series", to: "dirichlet_test_function" },

        { from: "infinite_series", to: "fourier_series" },
        { from: "fourier_series", to: "fourier_coeff" },
        { from: "fourier_series", to: "dirichlet_convergence" },
        { from: "fourier_series", to: "even_odd_extension" },

        { from: "root_series", to: "improper_integrals" },
        { from: "improper_integrals", to: "improper_inf" },
        { from: "improper_integrals", to: "improper_unbounded" },
        { from: "improper_integrals", to: "improper_abs_cond" }
    ]
};

// ===================== 多元函数微分学 =====================
const multivariateData = {
    nodes: [
        { id: "root_multivariate", label: "📌 多元函数微分学" },

        // ========== 多元函数极限 ==========
        { id: "mult_limit", label: "多元函数极限" },
        { id: "double_limit", label: "二重极限", explanation: "设 $f(x,y)$ 在点 $P_0(x_0,y_0)$ 的某去心邻域内有定义，$A$ 为常数。若 $\\forall\\varepsilon>0,\\exists\\delta>0$，当 $0<\\sqrt{(x-x_0)^2+(y-y_0)^2}<\\delta$ 时，$|f(x,y)-A|<\\varepsilon$，则称 $A$ 为 $f$ 当 $(x,y)\\to(x_0,y_0)$ 时的极限，记作 $\\lim_{(x,y)\\to(x_0,y_0)}f(x,y)=A$。" },
        { id: "iterated_limit", label: "累次极限", explanation: "先对一个变量求极限再对另一个求极限：$\\lim_{x\\to x_0}\\lim_{y\\to y_0}f(x,y)$ 或 $\\lim_{y\\to y_0}\\lim_{x\\to x_0}f(x,y)$。二重极限存在且等于某值时，若累次极限也存在，则必相等；但反之不成立。" },
        { id: "limit_path", label: "路径依赖性", explanation: "多元函数极限存在要求沿任意路径趋于同一点时极限值相同。若找到两条路径使极限不同，则二重极限不存在。" },

        // ========== 多元函数连续 ==========
        { id: "mult_continuity", label: "多元函数连续" },
        { id: "cont_definition", label: "连续的定义", explanation: "设 $f$ 在点 $P_0$ 的某邻域内有定义，若 $\\lim_{P\\to P_0}f(P)=f(P_0)$，则称 $f$ 在 $P_0$ 处连续。若在区域 $D$ 内每一点都连续，则称 $f$ 在 $D$ 上连续。" },
        { id: "cont_properties", label: "连续的性质", explanation: "连续函数的和、差、积、商（分母不为零）仍连续；复合函数连续；有界闭区域上的连续函数必达到最大值和最小值，且一致连续。" },

        // ========== 多元函数导数与微分 ==========
        { id: "mult_derivative", label: "多元函数导数与微分" },
        { id: "partial_derivative", label: "偏导数", explanation: "$f_x(x_0,y_0)=\\lim_{h\\to0}\\frac{f(x_0+h,y_0)-f(x_0,y_0)}{h}$，$f_y(x_0,y_0)=\\lim_{h\\to0}\\frac{f(x_0,y_0+h)-f(x_0,y_0)}{h}$。高阶偏导数如 $f_{xx},f_{xy}$ 等。\n混合偏导求导顺序可交换的充要条件：若 $f_{xy}$ 和 $f_{yx}$ 在点 $(x_0,y_0)$ 处连续，则 $f_{xy}(x_0,y_0)=f_{yx}(x_0,y_0)$。" },
        { id: "total_differential", label: "全微分", explanation: "若 $\\Delta z = f(x_0+\\Delta x,y_0+\\Delta y)-f(x_0,y_0)$ 可表示为 $A\\Delta x+B\\Delta y+o(\\sqrt{(\\Delta x)^2+(\\Delta y)^2})$，则称 $f$ 在 $(x_0,y_0)$ 可微，且 $dz = f_x dx + f_y dy$。可微 $\\Rightarrow$ 偏导存在且连续 $\\Rightarrow$ 可微。" },
        { id: "directional_derivative", label: "方向导数", explanation: "沿方向 $\\vec{l}=(\\cos\\alpha,\\cos\\beta)$ 的方向导数：$\\frac{\\partial f}{\\partial l}=\\lim_{t\\to0^+}\\frac{f(x_0+t\\cos\\alpha,y_0+t\\cos\\beta)-f(x_0,y_0)}{t}$。若 $f$ 可微，则 $\\frac{\\partial f}{\\partial l}=f_x\\cos\\alpha+f_y\\cos\\beta$。" },
        { id: "gradient", label: "梯度", explanation: "$\\nabla f = (f_x, f_y)$。方向导数最大值在梯度方向取得，值为梯度的模。梯度垂直于等高线，指向函数增长最快的方向。" },
        { id: "chain_rule_mult", label: "链式法则", explanation: "设 $z=f(u,v)$，$u=u(x,y)$，$v=v(x,y)$，则 $\\frac{\\partial z}{\\partial x}=\\frac{\\partial z}{\\partial u}\\frac{\\partial u}{\\partial x}+\\frac{\\partial z}{\\partial v}\\frac{\\partial v}{\\partial x}$，$\\frac{\\partial z}{\\partial y}$ 类似。全微分形式不变性：$dz=\\frac{\\partial f}{\\partial u}du+\\frac{\\partial f}{\\partial v}dv$，其中 $du=\\frac{\\partial u}{\\partial x}dx+\\frac{\\partial u}{\\partial y}dy$。" },
        { id: "implicit_function", label: "隐函数定理与隐函数求导", explanation: "隐函数存在定理：若 $F(x,y)=0$ 满足 $F(x_0,y_0)=0$，$F_y(x_0,y_0)\\neq0$，则在 $(x_0,y_0)$ 附近唯一确定隐函数 $y=y(x)$，且 $\\frac{dy}{dx}=-\\frac{F_x}{F_y}$。推广到多个方程：若 $F(x,y,u,v)=0,\\ G(x,y,u,v)=0$ 且雅可比行列式 $\\frac{\\partial(F,G)}{\\partial(u,v)}\\neq0$，则可确定 $u=u(x,y),v=v(x,y)$，偏导数可通过解线性方程组求得。" },
        { id: "jacobian", label: "雅可比行列式", explanation: "对变换 $u=u(x,y), v=v(x,y)$，雅可比行列式为 $J=\\frac{\\partial(u,v)}{\\partial(x,y)}=\\begin{vmatrix}u_x&u_y\\\\v_x&v_y\\end{vmatrix}$，用于坐标变换和隐函数方程组。" },

        // ========== 极值与条件极值 ==========
        { id: "extreme", label: "极值与条件极值" },
        { id: "free_extreme", label: "无条件极值", explanation: "必要条件：若 $f$ 在 $(x_0,y_0)$ 处取得极值且偏导存在，则 $f_x=f_y=0$（驻点）。充分条件：设 $A=f_{xx},B=f_{xy},C=f_{yy}$，$\\Delta = AC-B^2$。若 $\\Delta>0$ 且 $A>0$ 为极小值，$A<0$ 为极大值；若 $\\Delta<0$ 不是极值；$\\Delta=0$ 需进一步判断。" },
        { id: "conditional_extreme", label: "条件极值（拉格朗日乘数法）", explanation: "求 $f(x,y)$ 在约束 $\\varphi(x,y)=0$ 下的极值。构造拉格朗日函数 $L(x,y,\\lambda)=f(x,y)+\\lambda\\varphi(x,y)$，解方程组 $L_x=0,L_y=0,\\varphi=0$ 得到可能极值点。可推广到多个约束和多个变量。" },
        { id: "lagrange_multiplier", label: "拉格朗日乘数法（一般形式）", explanation: "对于目标函数 $f(x_1,\\dots,x_n)$ 在 $m$ 个约束 $g_k(x_1,\\dots,x_n)=0$ 下的极值，构造 $L=f+\\sum_{k=1}^m\\lambda_k g_k$，令所有偏导数为0及约束方程联立求解。" },
        { id: "extreme_applications", label: "最值问题", explanation: "在闭区域上连续函数必存在最大值和最小值，可能位于内部驻点、不可导点或边界上。常用拉格朗日乘数法处理边界条件。" }
    ],
    edges: [
        { from: "root_multivariate", to: "mult_limit" },
        { from: "mult_limit", to: "double_limit" },
        { from: "mult_limit", to: "iterated_limit" },
        { from: "mult_limit", to: "limit_path" },

        { from: "root_multivariate", to: "mult_continuity" },
        { from: "mult_continuity", to: "cont_definition" },
        { from: "mult_continuity", to: "cont_properties" },

        { from: "root_multivariate", to: "mult_derivative" },
        { from: "mult_derivative", to: "partial_derivative" },
        { from: "mult_derivative", to: "total_differential" },
        { from: "mult_derivative", to: "directional_derivative" },
        { from: "mult_derivative", to: "gradient" },
        { from: "mult_derivative", to: "chain_rule_mult" },
        { from: "mult_derivative", to: "implicit_function" },
        { from: "mult_derivative", to: "jacobian" },

        { from: "root_multivariate", to: "extreme" },
        { from: "extreme", to: "free_extreme" },
        { from: "extreme", to: "conditional_extreme" },
        { from: "extreme", to: "lagrange_multiplier" },
        { from: "extreme", to: "extreme_applications" }
    ]
};

// ===================== 导数与积分的应用 =====================
const applicationsData = {
    nodes: [
        { id: "root_applications", label: "📌 导数与积分的应用" },

        // ========== 微分几何应用 ==========
        { id: "diff_geom", label: "微分几何应用" },
        { id: "tangent_line_normal_plane", label: "切线与法平面", explanation: "空间曲线 $\\vec{r}(t)=(x(t),y(t),z(t))$ 在点 $t_0$ 处的切向量为 $\\vec{r}'(t_0)=(x'(t_0),y'(t_0),z'(t_0))$。\n切线方程：$\\frac{x-x_0}{x'(t_0)}=\\frac{y-y_0}{y'(t_0)}=\\frac{z-z_0}{z'(t_0)}$。\n法平面方程：$x'(t_0)(x-x_0)+y'(t_0)(y-y_0)+z'(t_0)(z-z_0)=0$。" },
        { id: "normal_line_tangent_plane", label: "法线与切平面", explanation: "曲面 $F(x,y,z)=0$ 在点 $(x_0,y_0,z_0)$ 处的法向量为 $\\nabla F=(F_x,F_y,F_z)$。\n切平面方程：$F_x(x_0,y_0,z_0)(x-x_0)+F_y(x_0,y_0,z_0)(y-y_0)+F_z(x_0,y_0,z_0)(z-z_0)=0$。\n法线方程：$\\frac{x-x_0}{F_x(x_0,y_0,z_0)}=\\frac{y-y_0}{F_y(x_0,y_0,z_0)}=\\frac{z-z_0}{F_z(x_0,y_0,z_0)}$。\n对于显式曲面 $z=f(x,y)$，法向量为 $(-f_x,-f_y,1)$。" },

        // ========== 定积分应用 ==========
        { id: "definite_app", label: "定积分应用" },
        { id: "volume_revolution", label: "旋转体体积", explanation: "曲线 $y=f(x)$ 绕 $x$ 轴旋转一周所得体积：$V=\\pi\\int_a^b [f(x)]^2 dx$。\n绕 $y$ 轴旋转：$V=2\\pi\\int_a^b x|f(x)|dx$（柱壳法）。\n参数方程情形类似。" },
        { id: "arc_length", label: "弧微分（平面曲线弧长）", explanation: "平面曲线 $y=f(x)$ 从 $a$ 到 $b$ 的弧长：$s=\\int_a^b \\sqrt{1+[f'(x)]^2} dx$。\n参数方程 $x=x(t),y=y(t)$：$s=\\int_{\\alpha}^{\\beta} \\sqrt{[x'(t)]^2+[y'(t)]^2} dt$。\n极坐标 $r=r(\\theta)$：$s=\\int_{\\alpha}^{\\beta} \\sqrt{r^2+(r')^2} d\\theta$。" },
        { id: "surface_revolution", label: "旋转曲面面积", explanation: "曲线 $y=f(x)$（$f(x)\\ge0$）绕 $x$ 轴旋转所得曲面面积：$S=2\\pi\\int_a^b f(x)\\sqrt{1+[f'(x)]^2} dx$。\n绕 $y$ 轴旋转：$S=2\\pi\\int_a^b x\\sqrt{1+[f'(x)]^2} dx$。" },

        // ========== 重积分应用 ==========
        { id: "multiple_app", label: "重积分应用" },
        { id: "arc_length_mult", label: "弧微分（空间曲线弧长）", explanation: "空间曲线 $\\vec{r}(t)=(x(t),y(t),z(t))$ 的弧长：$s=\\int_{\\alpha}^{\\beta} \\sqrt{[x'(t)]^2+[y'(t)]^2+[z'(t)]^2} dt$。\n也可视为第一类曲线积分 $\\int_C ds$。" },
        { id: "surface_area_element", label: "曲面面积微元与曲面面积", explanation: "曲面 $z=f(x,y)$ 的面积微元 $dS=\\sqrt{1+f_x^2+f_y^2}\\,dxdy$，面积 $S=\\iint_D \\sqrt{1+f_x^2+f_y^2}\\,dxdy$。\n参数曲面 $\\vec{r}(u,v)$：$dS=|\\vec{r}_u\\times\\vec{r}_v|\\,dudv$，$S=\\iint_D |\\vec{r}_u\\times\\vec{r}_v|\\,dudv$。" }
    ],
    edges: [
        { from: "root_applications", to: "diff_geom" },
        { from: "diff_geom", to: "tangent_line_normal_plane" },
        { from: "diff_geom", to: "normal_line_tangent_plane" },

        { from: "root_applications", to: "definite_app" },
        { from: "definite_app", to: "volume_revolution" },
        { from: "definite_app", to: "arc_length" },
        { from: "definite_app", to: "surface_revolution" },

        { from: "root_applications", to: "multiple_app" },
        { from: "multiple_app", to: "arc_length_mult" },
        { from: "multiple_app", to: "surface_area_element" }
    ]
};

// ===================== 重积分 =====================
const multipleIntegralData = {
    nodes: [
        { id: "root_multiple", label: "📌 重积分" },

        // ========== 二重积分 ==========
        { id: "double_int", label: "二重积分" },
        { id: "double_definition", label: "定义", explanation: "设 $f(x,y)$ 在有界闭区域 $D$ 上有界，将 $D$ 任意分割成 $n$ 个小区域 $\\Delta\\sigma_i$，取 $\\xi_i\\in\\Delta\\sigma_i$，若极限 $\\lim_{\\lambda\\to0}\\sum_{i=1}^n f(\\xi_i)\\Delta\\sigma_i$ 存在（与分割和取点无关），则称该极限为 $f$ 在 $D$ 上的二重积分，记作 $\\iint_D f(x,y)d\\sigma$。" },
        { id: "double_properties", label: "常见性质", explanation: "线性性：$\\iint_D (\\alpha f+\\beta g)=\\alpha\\iint_D f+\\beta\\iint_D g$。\n区域可加性：若 $D=D_1\\cup D_2$，则积分等于两区域积分之和。\n保号性：若 $f\\ge0$，则 $\\iint_D f\\ge0$。\n中值定理：存在 $(\\xi,\\eta)\\in D$ 使 $\\iint_D f = f(\\xi,\\eta)\\cdot\\text{Area}(D)$。" },
        { id: "double_computation", label: "计算方法", explanation: "直角坐标：$\\iint_D f(x,y)dxdy = \\int_a^b dx\\int_{y_1(x)}^{y_2(x)} f(x,y)dy$（X型区域），或 $\\int_c^d dy\\int_{x_1(y)}^{x_2(y)} f(x,y)dx$（Y型区域）。\n极坐标：$\\iint_D f(x,y)dxdy = \\iint_{D_{r\\theta}} f(r\\cos\\theta,r\\sin\\theta)\\,r\\,drd\\theta$。" },
        { id: "double_substitution", label: "换元积分（一般坐标变换）", explanation: "设变换 $x=x(u,v), y=y(u,v)$ 将 $D_{uv}$ 一一映射到 $D_{xy}$，雅可比行列式 $J=\\frac{\\partial(x,y)}{\\partial(u,v)}\\neq0$，则 $\\iint_{D_{xy}} f(x,y)dxdy = \\iint_{D_{uv}} f(x(u,v),y(u,v)) |J|\\,dudv$。" },

        // ========== 三重积分 ==========
        { id: "triple_int", label: "三重积分" },
        { id: "triple_definition", label: "定义", explanation: "设 $f(x,y,z)$ 在有界闭区域 $\\Omega$ 上有界，分割成 $n$ 个小区域 $\\Delta V_i$，取 $\\xi_i\\in\\Delta V_i$，若极限 $\\lim_{\\lambda\\to0}\\sum_{i=1}^n f(\\xi_i)\\Delta V_i$ 存在，则称为三重积分，记作 $\\iiint_\\Omega f(x,y,z)dV$。" },
        { id: "triple_properties", label: "常见性质", explanation: "线性性、区域可加性、保号性、中值定理（$\\iiint_\\Omega f = f(\\xi,\\eta,\\zeta)\\cdot\\text{Vol}(\\Omega)$）。" },
        { id: "triple_computation", label: "计算方法", explanation: "直角坐标：投影法（先一后二）或截面法（先二后一）。\n柱坐标：$x=r\\cos\\theta, y=r\\sin\\theta, z=z$，$dV = r\\,drd\\theta dz$。\n球坐标：$x=r\\sin\\phi\\cos\\theta, y=r\\sin\\phi\\sin\\theta, z=r\\cos\\phi$，$dV = r^2\\sin\\phi\\,drd\\phi d\\theta$。" },
        { id: "triple_substitution", label: "换元积分（一般坐标变换）", explanation: "设变换 $x=x(u,v,w), y=y(u,v,w), z=z(u,v,w)$ 将 $\\Omega_{uvw}$ 映射到 $\\Omega_{xyz}$，雅可比行列式 $J=\\frac{\\partial(x,y,z)}{\\partial(u,v,w)}\\neq0$，则 $\\iiint_{\\Omega_{xyz}} f(x,y,z)dV = \\iiint_{\\Omega_{uvw}} f(x(u,v,w),y(u,v,w),z(u,v,w)) |J|\\,dudvdw$。" }
    ],
    edges: [
        { from: "root_multiple", to: "double_int" },
        { from: "double_int", to: "double_definition" },
        { from: "double_int", to: "double_properties" },
        { from: "double_int", to: "double_computation" },
        { from: "double_int", to: "double_substitution" },

        { from: "root_multiple", to: "triple_int" },
        { from: "triple_int", to: "triple_definition" },
        { from: "triple_int", to: "triple_properties" },
        { from: "triple_int", to: "triple_computation" },
        { from: "triple_int", to: "triple_substitution" }
    ]
};

// ===================== 曲线积分与曲面积分 =====================
const lineSurfaceData = {
    nodes: [
        { id: "root_linesurface", label: "📌 曲线积分与曲面积分" },

        // ========== 曲线积分 ==========
        { id: "line_int", label: "曲线积分" },
        // 第一类曲线积分
        { id: "line_first_def", label: "第一类曲线积分（对弧长）· 定义与性质", explanation: "定义：$\\int_L f(x,y) ds = \\lim_{\\lambda\\to0}\\sum f(\\xi_i,\\eta_i)\\Delta s_i$，其中 $ds$ 为弧长微元。\n性质：线性性、积分弧段可加性、保号性、中值定理（存在 $\\xi,\\eta$ 使积分等于 $f(\\xi,\\eta)\\cdot L$ 长度）。" },
        { id: "line_first_calc", label: "第一类曲线积分（对弧长）· 计算方法", explanation: "平面曲线 $L: \\vec{r}(t)=(x(t),y(t)), t\\in[\\alpha,\\beta]$，则 $\\int_L f ds = \\int_\\alpha^\\beta f(x(t),y(t))\\sqrt{x'^2+y'^2}dt$。\n空间曲线 $\\vec{r}(t)=(x(t),y(t),z(t))$：$\\int_L f ds = \\int_\\alpha^\\beta f(x(t),y(t),z(t))\\sqrt{x'^2+y'^2+z'^2}dt$。\n极坐标表示时类似。" },
        // 第二类曲线积分
        { id: "line_second_def", label: "第二类曲线积分（对坐标）· 定义与性质", explanation: "定义：$\\int_L Pdx+Qdy = \\lim_{\\lambda\\to0}\\sum [P(\\xi_i,\\eta_i)\\Delta x_i+Q(\\xi_i,\\eta_i)\\Delta y_i]$。\n性质：线性性、方向性（反向积分变号）、积分弧段可加性。" },
        { id: "line_second_calc", label: "第二类曲线积分（对坐标）· 计算方法", explanation: "参数化 $L: x=x(t),y=y(t), t$ 从 $\\alpha$ 到 $\\beta$（$\\alpha,\\beta$ 对应起点终点），则 $\\int_L Pdx+Qdy = \\int_\\alpha^\\beta [P(x(t),y(t))x'(t)+Q(x(t),y(t))y'(t)]dt$。空间曲线类似，加 $Rdz$ 项。" },
        { id: "line_connection", label: "两类曲线积分的联系", explanation: "$\\int_L Pdx+Qdy = \\int_L (P\\cos\\alpha+Q\\cos\\beta) ds$，其中 $(\\cos\\alpha,\\cos\\beta)$ 为曲线切向量的方向余弦（与有向曲线一致）。" },
        { id: "green_formula", label: "格林公式", explanation: "设闭区域 $D$ 由分段光滑曲线 $L$ 围成，$P,Q$ 在 $D$ 上有一阶连续偏导数，则 $\\oint_L Pdx+Qdy = \\iint_D (\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y})dxdy$，其中 $L$ 取正向（逆时针）。应用：计算曲线积分、求面积（$A=\\frac12\\oint_L xdy-ydx$）。" },
        { id: "path_independence", label: "平面曲线积分与路径无关的条件", explanation: "在单连通区域 $D$ 上，以下条件等价：① $\\int_L Pdx+Qdy$ 与路径无关；② $\\oint_L Pdx+Qdy=0$ 对任意闭曲线；③ 存在势函数 $u$ 使 $du=Pdx+Qdy$；④ $\\frac{\\partial P}{\\partial y}=\\frac{\\partial Q}{\\partial x}$ 在 $D$ 内恒成立。此时 $\\int_{(x_0,y_0)}^{(x,y)} Pdx+Qdy = u(x,y)-u(x_0,y_0)$，$u$ 可通过曲线积分或凑微分求得。" },

        // ========== 曲面积分 ==========
        { id: "surface_int", label: "曲面积分" },
        // 第一类曲面积分
        { id: "surface_first_def", label: "第一类曲面积分（对面积）· 定义与性质", explanation: "定义：$\\iint_\\Sigma f(x,y,z) dS = \\lim_{\\lambda\\to0}\\sum f(\\xi_i,\\eta_i,\\zeta_i)\\Delta S_i$。\n性质：线性性、曲面可加性、保号性、中值定理（存在 $\\xi,\\eta,\\zeta$ 使积分等于 $f(\\xi,\\eta,\\zeta)\\cdot \\text{Area}(\\Sigma)$）。" },
        { id: "surface_first_calc", label: "第一类曲面积分（对面积）· 计算方法", explanation: "若 $\\Sigma: z=z(x,y)$，则 $dS=\\sqrt{1+z_x^2+z_y^2}dxdy$，$\\iint_\\Sigma f dS = \\iint_{D_{xy}} f(x,y,z(x,y))\\sqrt{1+z_x^2+z_y^2}dxdy$。\n参数曲面 $\\vec{r}(u,v)$：$dS=|\\vec{r}_u\\times\\vec{r}_v|dudv$，$\\iint_\\Sigma f dS = \\iint_{D_{uv}} f(\\vec{r}(u,v)) |\\vec{r}_u\\times\\vec{r}_v|dudv$。" },
        // 第二类曲面积分
        { id: "surface_second_def", label: "第二类曲面积分（对坐标）· 定义与性质", explanation: "定义：$\\iint_\\Sigma P dy dz + Q dz dx + R dx dy$，分别表示在三个坐标平面上的投影。有方向性，取上侧/下侧、前侧/后侧、右侧/左侧符号不同。性质：线性性、曲面可加性、反向取负号。" },
        { id: "surface_second_calc", label: "第二类曲面积分（对坐标）· 计算方法", explanation: "通常将三种类型分别化为二重积分：$\\iint_\\Sigma R dxdy = \\pm\\iint_{D_{xy}} R(x,y,z(x,y))dxdy$，符号由曲面侧决定（上侧正、下侧负）；$\\iint_\\Sigma P dydz$ 投影到 $yz$ 平面，$\\iint_\\Sigma Q dzdx$ 投影到 $zx$ 平面。也可统一化为第一类曲面积分再计算。" },
        { id: "surface_connection", label: "两类曲面积分的联系", explanation: "$\\iint_\\Sigma P dy dz + Q dz dx + R dx dy = \\iint_\\Sigma (P\\cos\\alpha+Q\\cos\\beta+R\\cos\\gamma) dS$，其中 $(\\cos\\alpha,\\cos\\beta,\\cos\\gamma)$ 为有向曲面 $\\Sigma$ 在 $(x,y,z)$ 处的单位法向量。" },
        { id: "gauss_formula", label: "高斯公式", explanation: "设空间闭区域 $\\Omega$ 由分片光滑闭曲面 $\\Sigma$ 围成，$P,Q,R$ 在 $\\Omega$ 上有一阶连续偏导数，则 $\\iiint_\\Omega (\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}) dV = \\oint\\!\\!\\!\\!\\!\\!\\!\\!\\!\\!\\!\\!\\!\\!\\!\\!\\!\\;\\;\\;\\iint_\\Sigma P dy dz + Q dz dx + R dx dy$，其中 $\\Sigma$ 取外侧。应用：计算闭曲面积分或三重积分。" },
        { id: "stokes_formula", label: "斯托克斯公式", explanation: "设 $\\Sigma$ 是以分段光滑曲线 $L$ 为边界的有向曲面，$P,Q,R$ 在包含 $\\Sigma$ 的空间区域内有一阶连续偏导数，则 $\\oint_L Pdx+Qdy+Rdz = \\iint_\\Sigma (\\frac{\\partial R}{\\partial y}-\\frac{\\partial Q}{\\partial z})dydz + (\\frac{\\partial P}{\\partial z}-\\frac{\\partial R}{\\partial x})dzdx + (\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y})dxdy$，其中 $L$ 的方向与 $\\Sigma$ 的侧符合右手法则。" }
    ],
    edges: [
        { from: "root_linesurface", to: "line_int" },
        { from: "line_int", to: "line_first_def" },
        { from: "line_int", to: "line_first_calc" },
        { from: "line_int", to: "line_second_def" },
        { from: "line_int", to: "line_second_calc" },
        { from: "line_int", to: "line_connection" },
        { from: "line_int", to: "green_formula" },
        { from: "line_int", to: "path_independence" },

        { from: "root_linesurface", to: "surface_int" },
        { from: "surface_int", to: "surface_first_def" },
        { from: "surface_int", to: "surface_first_calc" },
        { from: "surface_int", to: "surface_second_def" },
        { from: "surface_int", to: "surface_second_calc" },
        { from: "surface_int", to: "surface_connection" },
        { from: "surface_int", to: "gauss_formula" },
        { from: "surface_int", to: "stokes_formula" }
    ]
};

// ===================== 微分方程 =====================
const odeData = {
    nodes: [
        { id: "root_ode", label: "📌 微分方程" },

        // ========== 一阶微分方程 ==========
        { id: "first_order_ode", label: "一阶微分方程" },
        { id: "separable", label: "可分离变量的微分方程", explanation: "形式：$\\frac{dy}{dx}=g(x)h(y)$ 或 $M(x)dx+N(y)dy=0$。\n解法：分离变量得 $\\frac{dy}{h(y)}=g(x)dx$，两边积分 $\\int\\frac{dy}{h(y)}=\\int g(x)dx+C$。" },

        { id: "first_linear", label: "一阶线性微分方程" },
        { id: "linear_homogeneous", label: "一阶线性齐次方程", explanation: "形式：$\\frac{dy}{dx}+P(x)y=0$。\n解法：分离变量得 $\\frac{dy}{y}=-P(x)dx$，积分得 $y=Ce^{-\\int P(x)dx}$。" },
        { id: "linear_nonhomogeneous", label: "一阶线性非齐次方程", explanation: "形式：$\\frac{dy}{dx}+P(x)y=Q(x)$。\n解法：常数变易法。\n步骤：①先解齐次方程 $\\frac{dy}{dx}+P(x)y=0$，得通解 $y_h=Ce^{-\\int Pdx}$。\n②将常数 $C$ 变为函数 $u(x)$，设 $y=u(x)e^{-\\int Pdx}$。\n③代入原方程，得 $u'(x)e^{-\\int Pdx}=Q(x)$，即 $u'(x)=Q(x)e^{\\int Pdx}$。\n④积分得 $u(x)=\\int Q(x)e^{\\int Pdx}dx+C$。\n⑤通解 $y=e^{-\\int Pdx}\\left(\\int Q e^{\\int Pdx}dx + C\\right)$。也可直接用积分因子法：积分因子 $\\mu=e^{\\int Pdx}$，两边乘以 $\\mu$ 后化为 $(\\mu y)'=\\mu Q$。" },
        { id: "bernoulli", label: "伯努利方程", explanation: "形式：$\\frac{dy}{dx}+P(x)y=Q(x)y^n$（$n\\neq0,1$）。\n解法：令 $z=y^{1-n}$，化为一阶线性方程 $\\frac{dz}{dx}+(1-n)P(x)z=(1-n)Q(x)$，然后求解。" },

        // ========== 可降阶的高阶微分方程 ==========
        { id: "reducible_ode", label: "可降阶的高阶微分方程" },
        { id: "reducible_type1", label: "类型1：$y^{(n)}=f(x)$", explanation: "直接积分 $n$ 次即可，每次积分增加一个任意常数。" },
        { id: "reducible_type2", label: "类型2：不含 $y$ 的方程 $F(x,y',y'')=0$", explanation: "令 $p=y'$，则 $y''=p'$，方程化为 $F(x,p,p')=0$，为一阶方程。" },
        { id: "reducible_type3", label: "类型3：不含 $x$ 的方程 $F(y,y',y'')=0$", explanation: "令 $p=y'$，则 $y''=p\\frac{dp}{dy}$，方程化为 $F(y,p,p\\frac{dp}{dy})=0$，为一阶方程。" },

        // ========== 二阶线性微分方程 ==========
        { id: "second_linear", label: "二阶线性微分方程" },
        { id: "linear_homogeneous_structure", label: "二阶齐次线性方程解的结构", explanation: "形式：$y''+P(x)y'+Q(x)y=0$。解的结构：若 $y_1,y_2$ 是线性无关解，则通解 $y=C_1y_1+C_2y_2$。\n线性无关判定：朗斯基行列式 $W(y_1,y_2)=\\begin{vmatrix}y_1&y_2\\\\y_1'&y_2'\\end{vmatrix}\\neq0$。" },
        { id: "wronskian", label: "朗斯基行列式", explanation: "对于函数 $y_1,y_2$，$W(y_1,y_2)=y_1y_2'-y_1'y_2$。若 $W\\neq0$，则 $y_1,y_2$ 线性无关；若 $W\\equiv0$，则线性相关（在区间上）。对于二阶齐次方程，$W$ 满足 $W'=-P(x)W$，可解出 $W=Ce^{-\\int Pdx}$。" },
        { id: "linear_nonhomogeneous_structure", label: "二阶非齐次线性方程解的结构", explanation: "形式：$y''+P(x)y'+Q(x)y=f(x)$。通解 $y=y_h+y_p$，其中 $y_h$ 是对应齐次方程的通解，$y_p$ 是一个特解。\n特解求法：\n① 常数变易法：已知齐次两个线性无关解 $y_1,y_2$，设 $y_p=u_1(x)y_1+u_2(x)y_2$，代入解方程组得 $u_1'=\\frac{-y_2 f}{W}$，$u_2'=\\frac{y_1 f}{W}$，积分求出 $u_1,u_2$。\n② 待定系数法：仅适用于常系数且 $f(x)$ 为特殊形式（多项式、指数、三角及组合）。" },

        { id: "constant_coef", label: "二阶常系数线性微分方程" },
        { id: "const_homogeneous", label: "二阶常系数齐次方程", explanation: "形式：$y''+py'+qy=0$。特征方程 $r^2+pr+q=0$。\n① 两个不等实根 $r_1\\neq r_2$：通解 $y=C_1e^{r_1x}+C_2e^{r_2x}$；\n② 重根 $r_1=r_2$：通解 $y=(C_1+C_2x)e^{r_1x}$；\n③ 共轭复根 $r=\\alpha\\pm i\\beta$：通解 $y=e^{\\alpha x}(C_1\\cos\\beta x+C_2\\sin\\beta x)$。" },
        { id: "const_nonhomogeneous", label: "二阶常系数非齐次方程", explanation: "形式：$y''+py'+qy=f(x)$。通解 $y=y_h+y_p$，$y_h$ 由齐次解给出。\n特解 $y_p$ 用待定系数法：\n① $f(x)=P_m(x)e^{\\lambda x}$：设 $y_p=x^k Q_m(x)e^{\\lambda x}$，$k$ 为 $\\lambda$ 作为特征根的重数（0,1,2）；\n② $f(x)=e^{\\alpha x}(P_m(x)\\cos\\beta x+Q_n(x)\\sin\\beta x)$：设 $y_p=x^k e^{\\alpha x}(R_l(x)\\cos\\beta x+S_l(x)\\sin\\beta x)$，$l=\\max(m,n)$，$k$ 为 $\\alpha\\pm i\\beta$ 作为特征根的重数（0,1）。" }
    ],
    edges: [
        { from: "root_ode", to: "first_order_ode" },
        { from: "first_order_ode", to: "separable" },
        { from: "first_order_ode", to: "first_linear" },
        { from: "first_linear", to: "linear_homogeneous" },
        { from: "first_linear", to: "linear_nonhomogeneous" },
        { from: "first_linear", to: "bernoulli" },

        { from: "root_ode", to: "reducible_ode" },
        { from: "reducible_ode", to: "reducible_type1" },
        { from: "reducible_ode", to: "reducible_type2" },
        { from: "reducible_ode", to: "reducible_type3" },

        { from: "root_ode", to: "second_linear" },
        { from: "second_linear", to: "linear_homogeneous_structure" },
        { from: "second_linear", to: "wronskian" },
        { from: "second_linear", to: "linear_nonhomogeneous_structure" },
        { from: "second_linear", to: "constant_coef" },
        { from: "constant_coef", to: "const_homogeneous" },
        { from: "constant_coef", to: "const_nonhomogeneous" }
    ]
};

// ===================== 全局映射 =====================
const chapterMap = {
    limits: { name: "极限与连续", data: limitsContinuityData },
    derivative: { name: "一元导数与微分", data: derivativeDifferentialData },
    meanvalue: { name: "微分中值定理与导数的应用", data: meanValueData },
    integral: { name: "一元函数积分学", data: integralData },
    series: { name: "级数与广义积分", data: seriesData },
    multivariate: { name: "多元函数微分学", data: multivariateData },
    applications: { name: "导数与积分的应用", data: applicationsData },
    multiple: { name: "重积分", data: multipleIntegralData },
    linesurface: { name: "曲线积分与曲面积分", data: lineSurfaceData },
    ode: { name: "微分方程", data: odeData }
};

const chapterOptions = [
    { value: "limits", label: "📌 极限与连续" },
    { value: "derivative", label: "📐 一元导数与微分" },
    { value: "meanvalue", label: "📈 微分中值定理与导数的应用" },
    { value: "integral", label: "∫ 一元函数积分学" },
    { value: "series", label: "∑ 级数与广义积分" },
    { value: "multivariate", label: "🌐 多元函数微分学" },
    { value: "applications", label: "⚙️ 导数与积分的应用" },
    { value: "multiple", label: "📦 重积分" },
    { value: "linesurface", label: "🌀 曲线积分与曲面积分" },
    { value: "ode", label: "📊 微分方程" }
];