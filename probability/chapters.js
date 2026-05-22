// ===================== 概率论与应用统计 =====================

// 第一章：随机事件与概率
const probabilityData = {
    nodes: [
        { id: "ch1_root", label: "📖 随机事件与概率" },
        { id: "random_event", label: "随机事件" },
        { id: "event_def", label: "事件的定义", explanation: "随机试验中可能发生也可能不发生的结果称为随机事件，简称事件。常用大写字母 $A,B,C$ 表示。\n基本事件：单个结果的事件。\n必然事件：一定发生的事件，记作 $\\Omega$。\n不可能事件：一定不发生的事件，记作 $\\varnothing$。" },
        { id: "event_relations", label: "事件的关系", explanation: "包含关系：$A \\subset B$ 表示 $A$ 发生必然导致 $B$ 发生。\n相等关系：$A = B$ 即 $A \\subset B$ 且 $B \\subset A$。\n互斥（互不相容）：$AB = \\varnothing$，两事件不能同时发生。\n对立事件：$\\bar{A} = \\Omega - A$，$A$ 与 $\\bar{A}$ 互斥且 $A \\cup \\bar{A} = \\Omega$。" },
        { id: "event_operations", label: "事件的运算", explanation: "并：$A \\cup B$，至少有一个发生。\n交：$A \\cap B$（或 $AB$），同时发生。\n差：$A - B$，$A$ 发生而 $B$ 不发生。\n对立：$\\bar{A} = \\Omega - A$。" },
        { id: "event_laws", label: "运算律", explanation: "交换律：$A \\cup B = B \\cup A$，$A \\cap B = B \\cap A$。\n结合律：$(A \\cup B) \\cup C = A \\cup (B \\cup C)$，$(A \\cap B) \\cap C = A \\cap (B \\cap C)$。\n分配律：$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$，$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$。\n德摩根律：$(\\bigcup_i A_i)^c = \\bigcap_i A_i^c$，$(\\bigcap_i A_i)^c = \\bigcup_i A_i^c$。" },
        { id: "prob_properties", label: "概率的性质" },
        { id: "nonnegativity", label: "非负性", explanation: "对任意事件 $A$，有 $P(A) \\ge 0$。" },
        { id: "finite_additivity", label: "有限可加性", explanation: "若 $A_1, A_2, \\dots, A_n$ 两两互斥，则 $P(\\bigcup_{i=1}^n A_i) = \\sum_{i=1}^n P(A_i)$。" },
        { id: "monotonicity", label: "单调性", explanation: "若 $A \\subset B$，则 $P(A) \\le P(B)$，且 $P(B-A) = P(B) - P(A)$。" },
        { id: "subtraction_formula", label: "减法公式", explanation: "$P(A-B) = P(A) - P(AB)$。特别地，若 $B \\subset A$，则 $P(A-B)=P(A)-P(B)$。" },
        { id: "addition_formula", label: "加法公式", explanation: "$P(A \\cup B) = P(A) + P(B) - P(AB)$。推广到三个事件：$P(A\\cup B\\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)$。" },
        { id: "demorgan", label: "德摩根定律", explanation: "$(\\bigcup_{i} A_i)^c = \\bigcap_{i} A_i^c$，$(\\bigcap_{i} A_i)^c = \\bigcup_{i} A_i^c$。常用于概率计算中事件的转化。" },
        { id: "conditional_prob", label: "条件概率" },
        { id: "multiplication_formula", label: "乘法公式", explanation: "若 $P(A)>0$，则 $P(AB) = P(A)P(B|A)$。推广：$P(A_1A_2\\cdots A_n) = P(A_1)P(A_2|A_1)P(A_3|A_1A_2)\\cdots P(A_n|A_1\\cdots A_{n-1})$。" },
        { id: "total_probability", label: "全概率公式", explanation: "设 $\\{B_1,B_2,\\dots,B_n\\}$ 为样本空间的一个划分（$B_i$ 两两互斥且 $\\bigcup B_i=\\Omega$），则 $P(A) = \\sum_{i=1}^n P(B_i)P(A|B_i)$。" },
        { id: "bayes_formula", label: "贝叶斯公式", explanation: "接全概率公式条件，若 $P(A)>0$，则 $P(B_i|A) = \\frac{P(B_i)P(A|B_i)}{\\sum_{j=1}^n P(B_j)P(A|B_j)}$。用于由结果推断原因。" },
        { id: "independence", label: "独立性", explanation: "事件 $A,B$ 相互独立 $\\iff P(AB)=P(A)P(B)$。若 $P(A)>0$，则独立等价于 $P(B|A)=P(B)$。\n多个事件相互独立：对任意有限子集，乘积概率等于概率乘积。两两独立不一定相互独立。" }
    ],
    edges: [
        { from: "ch1_root", to: "random_event" },
        { from: "random_event", to: "event_def" },
        { from: "random_event", to: "event_relations" },
        { from: "random_event", to: "event_operations" },
        { from: "random_event", to: "event_laws" },
        { from: "ch1_root", to: "prob_properties" },
        { from: "prob_properties", to: "nonnegativity" },
        { from: "prob_properties", to: "finite_additivity" },
        { from: "prob_properties", to: "monotonicity" },
        { from: "prob_properties", to: "subtraction_formula" },
        { from: "prob_properties", to: "addition_formula" },
        { from: "prob_properties", to: "demorgan" },
        { from: "ch1_root", to: "conditional_prob" },
        { from: "conditional_prob", to: "multiplication_formula" },
        { from: "conditional_prob", to: "total_probability" },
        { from: "conditional_prob", to: "bayes_formula" },
        { from: "ch1_root", to: "independence" }
    ]
};

// 第二章：随机变量及其分布
const randomVariableData = {
    nodes: [
        { id: "ch2_root", label: "📊 随机变量及其分布" },
        { id: "random_variable", label: "随机变量", explanation: "设随机试验的样本空间为 $\\Omega$，若对每个样本点 $\\omega \\in \\Omega$，有唯一实数 $X(\\omega)$ 与之对应，则称 $X$ 为随机变量。通常分为离散型（取值有限或可列）和连续型（取值充满某个区间）。" },
        { id: "cdf", label: "分布函数 (CDF)" },
        { id: "cdf_def", label: "定义", explanation: "设 $X$ 为随机变量，称 $F(x)=P(X \\le x)$ 为 $X$ 的分布函数。$F(x)$ 定义在全体实数上。" },
        { id: "cdf_properties", label: "性质", explanation: "1. $0 \\le F(x) \\le 1$，$\\lim_{x\\to-\\infty}F(x)=0$，$\\lim_{x\\to+\\infty}F(x)=1$。\n2. 单调不减：若 $x_1<x_2$，则 $F(x_1)\\le F(x_2)$。\n3. 右连续：$F(x+0)=F(x)$。\n4. $P(a<X\\le b)=F(b)-F(a)$。" },
        { id: "pmf_pdf", label: "分布列及概率密度函数 (PDF)" },
        { id: "pmf", label: "分布列", explanation: "离散型随机变量 $X$ 取有限或可列个值 $x_i$，概率函数为 $p_i = P(X=x_i)$，满足 $p_i \\ge 0$，$\\sum_i p_i = 1$。" },
        { id: "pdf", label: "概率密度函数", explanation: "连续型随机变量 $X$，若存在非负函数 $f(x)$ 使 $P(X \\le x)=\\int_{-\\infty}^x f(t)dt$，则称 $f(x)$ 为概率密度函数。性质：$f(x)\\ge 0$，$\\int_{-\\infty}^\\infty f(x)dx=1$，$P(a<X<b)=\\int_a^b f(x)dx$。" },
        { id: "expectation", label: "数学期望" },
        { id: "exp_def", label: "定义", explanation: "离散型：$E[X]=\\sum_i x_i p_i$；连续型：$E[X]=\\int_{-\\infty}^\\infty x f(x)dx$，要求级数或积分绝对收敛。" },
        { id: "exp_properties", label: "性质", explanation: "线性性：$E[aX+bY]=aE[X]+bE[Y]$；若 $X\\ge 0$，则 $E[X]\\ge 0$；$|E[X]|\\le E[|X|]$；若 $X,Y$ 独立，则 $E[XY]=E[X]E[Y]$。" },
        { id: "variance", label: "方差与标准差" },
        { id: "var_def", label: "定义", explanation: "$Var(X)=E[(X-E[X])^2]=E[X^2]-(E[X])^2$。标准差 $\\sigma(X)=\\sqrt{Var(X)}$。" },
        { id: "var_properties", label: "性质", explanation: "$Var(c)=0$；$Var(aX+b)=a^2 Var(X)$；若 $X,Y$ 独立，则 $Var(X+Y)=Var(X)+Var(Y)$。" },
        { id: "cov_corr_moment", label: "协方差、相关系数、矩" },
        { id: "covariance", label: "协方差", explanation: "$Cov(X,Y)=E[(X-EX)(Y-EY)]=E[XY]-EXEY$。性质：$Cov(X,X)=Var(X)$，对称性，双线性。" },
        { id: "correlation", label: "相关系数", explanation: "$\\rho_{XY}=\\frac{Cov(X,Y)}{\\sqrt{Var(X)Var(Y)}}$，满足 $|\\rho|\\le 1$。$\\rho=1$ 表示完全正相关，$-1$ 完全负相关，$0$ 不相关（但不一定独立）。" },
        { id: "moment", label: "矩", explanation: "$k$ 阶原点矩：$\\mu_k=E[X^k]$；$k$ 阶中心矩：$\\nu_k=E[(X-EX)^k]$。一阶原点矩即期望，二阶中心矩即方差。" },
        { id: "char_mgf", label: "特征函数与矩母函数" },
        { id: "char_func", label: "特征函数", explanation: "定义：$\\phi_X(t)=E[e^{itX}]$，对任意实数值 $t$ 存在。性质：唯一确定分布，可求矩（$\\phi^{(k)}(0)=i^k E[X^k]$），独立随机变量和的特征函数为乘积。" },
        { id: "mgf", label: "矩母函数", explanation: "定义：$M_X(t)=E[e^{tX}]$，要求 $t$ 在某个邻域内存在。性质：$M_X^{(k)}(0)=E[X^k]$；若 $X,Y$ 独立，则 $M_{X+Y}(t)=M_X(t)M_Y(t)$。" },
        { id: "function_dist", label: "随机变量函数的分布", explanation: "设 $Y=g(X)$，求 $Y$ 的分布。离散型：直接计算 $P(Y=y)=\\sum_{x:g(x)=y} P(X=x)$。连续型：若 $g$ 严格单调且可导，则 $f_Y(y)=f_X(g^{-1}(y))\\left|\\frac{d}{dy}g^{-1}(y)\\right|$；否则用分布函数法。" },
        { id: "discrete_dist", label: "常见离散型随机变量" },
        { id: "binomial", label: "二项分布", explanation: "$X\\sim B(n,p)$。分布列：$P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$。期望 $np$，方差 $np(1-p)$。特征函数 $\\phi(t)=(1-p+pe^{it})^n$。" },
        { id: "poisson", label: "泊松分布", explanation: "$X\\sim P(\\lambda)$。分布列：$P(X=k)=\\frac{\\lambda^k e^{-\\lambda}}{k!}$。期望 $\\lambda$，方差 $\\lambda$。特征函数 $\\phi(t)=e^{\\lambda(e^{it}-1)}$。" },
        { id: "hypergeometric", label: "超几何分布", explanation: "$X\\sim H(N,M,n)$。分布列：$P(X=k)=\\frac{\\binom{M}{k}\\binom{N-M}{n-k}}{\\binom{N}{n}}$。期望 $n\\frac{M}{N}$，方差 $n\\frac{M}{N}(1-\\frac{M}{N})\\frac{N-n}{N-1}$。" },
        { id: "geometric", label: "几何分布", explanation: "$P(X=k)=(1-p)^{k-1}p$（$k=1,2,\\dots$）。期望 $1/p$，方差 $(1-p)/p^2$。特征函数 $\\phi(t)=\\frac{pe^{it}}{1-(1-p)e^{it}}$。" },
        { id: "negative_binomial", label: "负二项分布", explanation: "$X\\sim NB(r,p)$。分布列：$P(X=k)=\\binom{k+r-1}{k}p^r(1-p)^k$。期望 $r(1-p)/p$，方差 $r(1-p)/p^2$。特征函数 $\\phi(t)=\\left(\\frac{p}{1-(1-p)e^{it}}\\right)^r$。" },
        { id: "continuous_dist", label: "常见连续型随机变量" },
        { id: "uniform", label: "均匀分布", explanation: "$X\\sim U(a,b)$，密度 $f(x)=\\frac{1}{b-a}$。期望 $\\frac{a+b}{2}$，方差 $\\frac{(b-a)^2}{12}$。特征函数 $\\phi(t)=\\frac{e^{itb}-e^{ita}}{it(b-a)}$。" },
        { id: "exponential", label: "指数分布", explanation: "$X\\sim Exp(\\lambda)$，密度 $f(x)=\\lambda e^{-\\lambda x}$。期望 $1/\\lambda$，方差 $1/\\lambda^2$。特征函数 $\\phi(t)=\\frac{\\lambda}{\\lambda-it}$。" },
        { id: "gamma", label: "伽马分布", explanation: "$X\\sim \\Gamma(\\alpha,\\beta)$，密度 $f(x)=\\frac{\\beta^\\alpha}{\\Gamma(\\alpha)}x^{\\alpha-1}e^{-\\beta x}$。期望 $\\alpha/\\beta$，方差 $\\alpha/\\beta^2$。特征函数 $\\phi(t)=\\left(\\frac{\\beta}{\\beta-it}\\right)^\\alpha$。" },
        { id: "chisquare", label: "卡方分布", explanation: "$X\\sim \\chi^2(n)$，密度 $f(x)=\\frac{x^{n/2-1}e^{-x/2}}{2^{n/2}\\Gamma(n/2)}$。期望 $n$，方差 $2n$。特征函数 $\\phi(t)=(1-2it)^{-n/2}$。" },
        { id: "beta", label: "Beta分布", explanation: "$X\\sim Beta(\\alpha,\\beta)$，密度 $f(x)=\\frac{x^{\\alpha-1}(1-x)^{\\beta-1}}{B(\\alpha,\\beta)}$。期望 $\\frac{\\alpha}{\\alpha+\\beta}$，方差 $\\frac{\\alpha\\beta}{(\\alpha+\\beta)^2(\\alpha+\\beta+1)}$。" },
        { id: "normal", label: "正态分布", explanation: "$X\\sim N(\\mu,\\sigma^2)$，密度 $f(x)=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$。期望 $\\mu$，方差 $\\sigma^2$。特征函数 $\\phi(t)=e^{i\\mu t - \\frac{1}{2}\\sigma^2 t^2}$。" },
        { id: "lognormal", label: "对数正态分布", explanation: "若 $\\ln X\\sim N(\\mu,\\sigma^2)$，密度 $f(x)=\\frac{1}{x\\sqrt{2\\pi}\\sigma}e^{-\\frac{(\\ln x-\\mu)^2}{2\\sigma^2}}$。期望 $e^{\\mu+\\sigma^2/2}$，方差 $e^{2\\mu+\\sigma^2}(e^{\\sigma^2}-1)$。" },
        { id: "cauchy", label: "柯西分布", explanation: "密度 $f(x)=\\frac{1}{\\pi}\\frac{\\gamma}{(x-x_0)^2+\\gamma^2}$。期望和方差不存在。特征函数 $\\phi(t)=e^{ix_0t-\\gamma|t|}$。" }
    ],
    edges: [
        { from: "ch2_root", to: "random_variable" },
        { from: "ch2_root", to: "cdf" },
        { from: "cdf", to: "cdf_def" },
        { from: "cdf", to: "cdf_properties" },
        { from: "ch2_root", to: "pmf_pdf" },
        { from: "pmf_pdf", to: "pmf" },
        { from: "pmf_pdf", to: "pdf" },
        { from: "ch2_root", to: "expectation" },
        { from: "expectation", to: "exp_def" },
        { from: "expectation", to: "exp_properties" },
        { from: "ch2_root", to: "variance" },
        { from: "variance", to: "var_def" },
        { from: "variance", to: "var_properties" },
        { from: "ch2_root", to: "cov_corr_moment" },
        { from: "cov_corr_moment", to: "covariance" },
        { from: "cov_corr_moment", to: "correlation" },
        { from: "cov_corr_moment", to: "moment" },
        { from: "ch2_root", to: "char_mgf" },
        { from: "char_mgf", to: "char_func" },
        { from: "char_mgf", to: "mgf" },
        { from: "ch2_root", to: "function_dist" },
        { from: "ch2_root", to: "discrete_dist" },
        { from: "discrete_dist", to: "binomial" },
        { from: "discrete_dist", to: "poisson" },
        { from: "discrete_dist", to: "hypergeometric" },
        { from: "discrete_dist", to: "geometric" },
        { from: "discrete_dist", to: "negative_binomial" },
        { from: "ch2_root", to: "continuous_dist" },
        { from: "continuous_dist", to: "uniform" },
        { from: "continuous_dist", to: "exponential" },
        { from: "continuous_dist", to: "gamma" },
        { from: "continuous_dist", to: "chisquare" },
        { from: "continuous_dist", to: "beta" },
        { from: "continuous_dist", to: "normal" },
        { from: "continuous_dist", to: "lognormal" },
        { from: "continuous_dist", to: "cauchy" }
    ]
};

const multivariateDistData = {
    nodes: [
        { id: "ch3_root", label: "🌐 多维随机变量及其分布" },
        { id: "joint_cdf", label: "联合分布函数" },
        { id: "joint_cdf_def", label: "定义", explanation: "设 $(X,Y)$ 为二维随机变量，联合分布函数 $F(x,y)=P(X\\le x, Y\\le y)$，$x,y\\in\\mathbb{R}$。" },
        { id: "joint_cdf_props", label: "性质", explanation: "1. $0\\le F(x,y)\\le1$，$\\lim_{x\\to-\\infty}F(x,y)=0$，$\\lim_{y\\to-\\infty}F(x,y)=0$，$\\lim_{x,y\\to+\\infty}F(x,y)=1$。\n2. 对每个变量单调不减且右连续。\n3. $P(x_1<X\\le x_2, y_1<Y\\le y_2)=F(x_2,y_2)-F(x_1,y_2)-F(x_2,y_1)+F(x_1,y_1)$。" },
        { id: "joint_pdf", label: "联合密度函数" },
        { id: "joint_pdf_def", label: "定义", explanation: "若存在非负函数 $f(x,y)$ 使 $F(x,y)=\\int_{-\\infty}^x\\int_{-\\infty}^y f(u,v)dvdu$，则称 $f$ 为联合概率密度。性质：$f\\ge0$，$\\iint_{\\mathbb{R}^2}f(x,y)dxdy=1$。" },
        { id: "joint_pdf_props", label: "性质", explanation: "$P((X,Y)\\in D)=\\iint_D f(x,y)dxdy$；若 $f$ 在 $(x,y)$ 连续，则 $\\frac{\\partial^2 F}{\\partial x\\partial y}=f(x,y)$。" },
        { id: "marginal", label: "边际分布" },
        { id: "marginal_cdf", label: "边际分布函数", explanation: "$F_X(x)=P(X\\le x)=\\lim_{y\\to\\infty}F(x,y)$，$F_Y(y)=\\lim_{x\\to\\infty}F(x,y)$。" },
        { id: "marginal_pmf_pdf", label: "边际分布列/密度", explanation: "离散型：$p_X(x_i)=\\sum_j p_{ij}$，$p_Y(y_j)=\\sum_i p_{ij}$。连续型：$f_X(x)=\\int_{-\\infty}^\\infty f(x,y)dy$，$f_Y(y)=\\int_{-\\infty}^\\infty f(x,y)dx$。" },
        { id: "independence", label: "独立性与联合分布", explanation: "$X,Y$ 独立 $\\iff F(x,y)=F_X(x)F_Y(y)$（对所有 $x,y$）。离散型：$p_{ij}=p_{i\\cdot}p_{\\cdot j}$；连续型：$f(x,y)=f_X(x)f_Y(y)$。" },
        // 函数分布父节点和子节点
        { id: "function_dist_mult", label: "多维随机变量的函数分布" },
        { id: "func_max", label: "Z = max(X₁, X₂, ..., Xₙ)", explanation: "对于独立随机变量 $X_1,\\dots,X_n$，$Z=\\max(X_1,\\dots,X_n)$ 的分布函数为 $F_Z(z)=P(Z\\le z)=\\prod_{i=1}^n F_{X_i}(z)$。若独立同分布，则 $F_Z(z)=[F_X(z)]^n$，密度 $f_Z(z)=n[F_X(z)]^{n-1}f_X(z)$。" },
        { id: "func_min", label: "Z = min(X₁, X₂, ..., Xₙ)", explanation: "对于独立随机变量，$Z=\\min(X_1,\\dots,X_n)$ 的分布函数为 $F_Z(z)=1-\\prod_{i=1}^n (1-F_{X_i}(z))$。若独立同分布，则 $F_Z(z)=1-[1-F_X(z)]^n$，密度 $f_Z(z)=n[1-F_X(z)]^{n-1}f_X(z)$。" },
        { id: "func_sum", label: "Z = X + Y", explanation: "$Z=X+Y$ 的密度为 $f_Z(z)=\\int_{-\\infty}^\\infty f(x,z-x)dx$。若 $X,Y$ 独立，则卷积 $f_Z(z)=\\int_{-\\infty}^\\infty f_X(x)f_Y(z-x)dx$。" },
        { id: "func_product", label: "Z = XY", explanation: "$Z=XY$ 的密度为 $f_Z(z)=\\int_{-\\infty}^\\infty \\frac{1}{|x|} f(x, z/x) dx$。独立时 $f_Z(z)=\\int_{-\\infty}^\\infty \\frac{1}{|x|} f_X(x) f_Y(z/x) dx$。" },
        { id: "func_quotient", label: "Z = X / Y", explanation: "$Z=X/Y$ 的密度为 $f_Z(z)=\\int_{-\\infty}^\\infty |y| f(zy, y) dy$。独立时 $f_Z(z)=\\int_{-\\infty}^\\infty |y| f_X(zy) f_Y(y) dy$。" },
        { id: "jacobian_method", label: "雅可比法（变量变换法）", explanation: "设 $(X,Y)$ 有联合密度 $f_{XY}(x,y)$，变换 $\\begin{cases} u = g_1(x,y) \\\\ v = g_2(x,y) \\end{cases}$ 是一一映射，逆变换 $x=h_1(u,v), y=h_2(u,v)$，雅可比行列式 $J = \\frac{\\partial(x,y)}{\\partial(u,v)}$。则 $(U,V)$ 的联合密度为 $f_{UV}(u,v)=f_{XY}(h_1(u,v),h_2(u,v))|J|$。常用于求随机变量函数的分布，例如可设辅助变量求解。" },
        // 条件分布等后续节点
        { id: "conditional_dist", label: "条件分布" },
        { id: "cond_discrete", label: "离散型条件分布", explanation: "若 $P(X=x_i)>0$，则 $P(Y=y_j|X=x_i)=\\frac{p_{ij}}{p_{i\\cdot}}$。" },
        { id: "cond_continuous", label: "连续型条件分布", explanation: "条件密度 $f_{Y|X}(y|x)=\\frac{f(x,y)}{f_X(x)}$（$f_X(x)>0$）。" },
        { id: "cond_expectation", label: "条件期望与重期望公式" },
        { id: "cond_exp_def", label: "条件期望的定义", explanation: "离散：$E[Y|X=x_i]=\\sum_j y_j P(Y=y_j|X=x_i)$；连续：$E[Y|X=x]=\\int y f_{Y|X}(y|x)dy$。" },
        { id: "law_total_expectation", label: "重期望公式", explanation: "$E[Y]=E[E[Y|X]]$。" },
        { id: "cond_variance", label: "条件方差" },
        { id: "cond_var_def", label: "条件方差的定义", explanation: "$Var(Y|X)=E[(Y-E[Y|X])^2|X]=E[Y^2|X]-(E[Y|X])^2$。" },
        { id: "law_total_variance", label: "重方差公式", explanation: "$Var(Y)=E[Var(Y|X)]+Var(E[Y|X])$。" }
    ],
    edges: [
        { from: "ch3_root", to: "joint_cdf" },
        { from: "joint_cdf", to: "joint_cdf_def" },
        { from: "joint_cdf", to: "joint_cdf_props" },
        { from: "ch3_root", to: "joint_pdf" },
        { from: "joint_pdf", to: "joint_pdf_def" },
        { from: "joint_pdf", to: "joint_pdf_props" },
        { from: "ch3_root", to: "marginal" },
        { from: "marginal", to: "marginal_cdf" },
        { from: "marginal", to: "marginal_pmf_pdf" },
        { from: "ch3_root", to: "independence" },
        { from: "ch3_root", to: "function_dist_mult" },
        { from: "function_dist_mult", to: "func_max" },
        { from: "function_dist_mult", to: "func_min" },
        { from: "function_dist_mult", to: "func_sum" },
        { from: "function_dist_mult", to: "func_product" },
        { from: "function_dist_mult", to: "func_quotient" },
        { from: "function_dist_mult", to: "jacobian_method" },
        { from: "ch3_root", to: "conditional_dist" },
        { from: "conditional_dist", to: "cond_discrete" },
        { from: "conditional_dist", to: "cond_continuous" },
        { from: "ch3_root", to: "cond_expectation" },
        { from: "cond_expectation", to: "cond_exp_def" },
        { from: "cond_expectation", to: "law_total_expectation" },
        { from: "ch3_root", to: "cond_variance" },
        { from: "cond_variance", to: "cond_var_def" },
        { from: "cond_variance", to: "law_total_variance" }
    ]
};

// 第四章：大数定理与中心极限定理
const limitTheoremsData = {
    nodes: [
        { id: "ch4_root", label: "📈 大数定理与中心极限定理" },

        // 两种收敛
        { id: "convergence_types", label: "两种收敛" },
        { id: "conv_in_prob", label: "依概率收敛", explanation: "定义：$X_n \\xrightarrow{P} X$，若 $\\forall \\varepsilon>0$，$\\lim_{n\\to\\infty} P(|X_n-X|\\ge\\varepsilon)=0$。性质：若 $X_n\\xrightarrow{P}X$，$Y_n\\xrightarrow{P}Y$，则 $X_n\\pm Y_n\\xrightarrow{P}X\\pm Y$，$X_nY_n\\xrightarrow{P}XY$（$Y\\neq0$ 时除法也成立）。" },
        { id: "conv_in_dist", label: "依分布收敛", explanation: "定义：$X_n \\xrightarrow{d} X$，若 $\\lim_{n\\to\\infty} F_{X_n}(x)=F_X(x)$ 在 $F_X$ 的所有连续点处成立。性质：依概率收敛蕴含依分布收敛，反之不一定；若 $X_n\\xrightarrow{d}c$（常数），则 $X_n\\xrightarrow{P}c$。" },

        // 大数定理
        { id: "lln", label: "大数定理" },
        { id: "lln_essence", label: "本质", explanation: "大数定律表明，当试验次数 $n$ 足够大时，样本均值依概率收敛于总体均值。即频率的稳定性。" },
        { id: "chebyshev_lln", label: "切比雪夫大数定理", explanation: "设 $X_1,X_2,\\dots$ 相互独立，$E[X_i]=\\mu_i$，$Var(X_i)\\le C$（有界），则 $\\frac{1}{n}\\sum_{i=1}^n (X_i-\\mu_i)\\xrightarrow{P}0$。推论：若同分布且方差存在，则样本均值收敛于公共期望。" },
        { id: "khinchin_lln", label: "辛钦大数定理", explanation: "设 $X_1,X_2,\\dots$ 独立同分布，$E[X_1]=\\mu$ 存在，则 $\\frac{1}{n}\\sum_{i=1}^n X_i \\xrightarrow{P} \\mu$。不要求方差存在。" },
        { id: "bernoulli_lln", label: "伯努利大数定理", explanation: "设 $\\mu_n$ 为 $n$ 次独立伯努利试验中事件 $A$ 发生的次数，$p=P(A)$，则 $\\frac{\\mu_n}{n}\\xrightarrow{P}p$。即频率依概率收敛于概率。" },

        // 中心极限定理
        { id: "clt", label: "中心极限定理" },
        { id: "clt_essence", label: "本质", explanation: "大量独立同分布随机变量之和的分布近似于正态分布。即不论原始分布是什么，标准化的和趋向标准正态分布。" },
        { id: "lindeberg_levy", label: "林德伯格-莱维中心极限定理", explanation: "设 $X_1,X_2,\\dots$ 独立同分布，$E[X_1]=\\mu$，$Var(X_1)=\\sigma^2>0$，则 $\\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sqrt{n}\\sigma}\\xrightarrow{d} N(0,1)$。即 $\\sqrt{n}(\\bar{X}-\\mu)\\xrightarrow{d} N(0,\\sigma^2)$。" },
        { id: "lyapunov_clt", label: "李雅普诺夫中心极限定理", explanation: "设 $X_1,X_2,\\dots$ 相互独立，$E[X_i]=\\mu_i$，$Var(X_i)=\\sigma_i^2>0$，令 $S_n=\\sum_{i=1}^n X_i$，$s_n^2=Var(S_n)=\\sum_{i=1}^n \\sigma_i^2$。若存在 $\\delta>0$ 使得李雅普诺夫条件 $\\lim_{n\\to\\infty}\\frac{1}{s_n^{2+\\delta}}\\sum_{i=1}^n E[|X_i-\\mu_i|^{2+\\delta}]=0$ 成立，则 $\\frac{S_n - E[S_n]}{s_n}\\xrightarrow{d} N(0,1)$。该定理允许不同分布，只要各随机变量的“3阶矩”（或更高阶）相对于方差和足够小。" }
    ],
    edges: [
        { from: "ch4_root", to: "convergence_types" },
        { from: "convergence_types", to: "conv_in_prob" },
        { from: "convergence_types", to: "conv_in_dist" },
        { from: "ch4_root", to: "lln" },
        { from: "lln", to: "lln_essence" },
        { from: "lln", to: "chebyshev_lln" },
        { from: "lln", to: "khinchin_lln" },
        { from: "lln", to: "bernoulli_lln" },
        { from: "ch4_root", to: "clt" },
        { from: "clt", to: "clt_essence" },
        { from: "clt", to: "lindeberg_levy" },
        { from: "clt", to: "lyapunov_clt" }
    ]
};

// 第五章：统计量及其分布
const statisticsData = {
    nodes: [
        { id: "ch5_root", label: "📏 统计量及其分布" },

        // 总体与样本
        { id: "population_sample", label: "总体与样本" },
        { id: "population_def", label: "总体与样本的定义", explanation: "总体：研究对象的全部个体组成的集合，可用随机变量 $X$ 表示其分布。样本：从总体中抽取的部分个体 $(X_1,\\dots,X_n)$。样本容量为 $n$。" },
        { id: "simple_random_sample", label: "简单随机样本", explanation: "若样本 $(X_1,\\dots,X_n)$ 满足：① 相互独立；② 每个 $X_i$ 与总体 $X$ 同分布，则称为简单随机样本（i.i.d.）。" },
        { id: "sample_mean", label: "样本均值", explanation: "$\\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i$。性质：$E[\\bar{X}]=\\mu$，$Var(\\bar{X})=\\sigma^2/n$。" },
        { id: "sample_variance", label: "样本方差", explanation: "常用定义：$S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i-\\bar{X})^2$。性质：$E[S^2]=\\sigma^2$。另有样本标准差 $S=\\sqrt{S^2}$。" },
        { id: "joint_dist_sample", label: "样本的联合分布函数", explanation: "若总体分布函数为 $F(x)$，密度 $f(x)$，则样本的联合分布函数为 $F(x_1,\\dots,x_n)=\\prod_{i=1}^n F(x_i)$，联合密度为 $\\prod_{i=1}^n f(x_i)$。" },

        // 统计量
        { id: "statistic", label: "统计量", explanation: "统计量是样本的函数 $T=g(X_1,\\dots,X_n)$，且不依赖于任何未知参数。常用统计量：样本均值、样本方差、样本矩、顺序统计量等。" },

        // 三大抽样分布
        { id: "sampling_distributions", label: "三大抽样分布" },
        { id: "chi2_dist", label: "χ²分布", explanation: "设 $Z_1,\\dots,Z_n$ i.i.d. ~ $N(0,1)$，则 $\\chi^2 = \\sum_{i=1}^n Z_i^2 \\sim \\chi^2(n)$。性质：期望 $n$，方差 $2n$，可加性。抽样分布定理：$(n-1)S^2/\\sigma^2 \\sim \\chi^2(n-1)$（正态总体）。" },
        { id: "t_dist", label: "t分布", explanation: "设 $Z\\sim N(0,1)$，$U\\sim \\chi^2(n)$ 独立，则 $T = \\frac{Z}{\\sqrt{U/n}} \\sim t(n)$。性质：对称，当 $n\\to\\infty$ 时趋近于标准正态。应用：$\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}} \\sim t(n-1)$。" },
        { id: "f_dist", label: "F分布", explanation: "设 $U\\sim \\chi^2(m)$，$V\\sim \\chi^2(n)$ 独立，则 $F = \\frac{U/m}{V/n} \\sim F(m,n)$。性质：$1/F \\sim F(n,m)$。应用：两独立正态样本方差比 $S_1^2/S_2^2$ 的分布。" },
        { id: "sampling_theorem", label: "抽样分布定理", explanation: "正态总体抽样分布基本定理：设 $X_1,\\dots,X_n$ i.i.d. ~ $N(\\mu,\\sigma^2)$，则① $\\bar{X}\\sim N(\\mu,\\sigma^2/n)$；② $\\bar{X}$ 与 $S^2$ 独立；③ $(n-1)S^2/\\sigma^2 \\sim \\chi^2(n-1)$；④ $\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}} \\sim t(n-1)$。" },

        // 点估计
        { id: "point_estimation", label: "点估计" },
        { id: "moment_est", label: "矩估计", explanation: "用样本矩代替总体矩。步骤：求出总体矩 $\\mu_k=E[X^k]$（含参数），令 $\\frac{1}{n}\\sum X_i^k = \\mu_k$，解方程组得参数估计。" },
        { id: "mle", label: "极大似然估计", explanation: "似然函数 $L(\\theta)=\\prod_{i=1}^n f(x_i;\\theta)$（离散型为概率）。取 $\\hat{\\theta}$ 使 $L(\\theta)$ 最大。通常取对数求导。性质：不变性（$\\widehat{g(\\theta)}=g(\\hat{\\theta})$）。" },
        { id: "estimation_criteria", label: "估计量的评判标准" },
        { id: "unbiasedness", label: "无偏性", explanation: "若 $E[\\hat{\\theta}]=\\theta$，则称 $\\hat{\\theta}$ 是 $\\theta$ 的无偏估计。如 $\\bar{X}$ 是 $\\mu$ 的无偏估计，$S^2$ 是 $\\sigma^2$ 的无偏估计。" },
        { id: "efficiency", label: "有效性", explanation: "对于无偏估计，方差越小越有效。比较两个无偏估计，方差小的更有效。达到罗-克拉美下界的估计称为有效估计。" },
        { id: "consistency", label: "相合性", explanation: "若 $\\hat{\\theta}_n \\xrightarrow{P} \\theta$，则称 $\\hat{\\theta}_n$ 是 $\\theta$ 的相合估计。即样本量增大时估计值依概率收敛于真值。" },

        // 区间估计
        { id: "interval_estimation", label: "区间估计" },
        { id: "confidence_level", label: "置信水平 $1-\\alpha$ 的含义", explanation: "两种解释：① 随机区间 $[\\hat{\\theta}_L,\\hat{\\theta}_U]$ 以概率 $1-\\alpha$ 包含真值 $\\theta$，即 $P(\\hat{\\theta}_L \\le \\theta \\le \\hat{\\theta}_U)=1-\\alpha$。② 重复抽样中，大约 $100(1-\\alpha)\\%$ 的区间包含 $\\theta$。" },
        { id: "ci_steps", label: "区间估计的步骤", explanation: "1. 选取枢轴量 $G = g(X_1,\\dots,X_n,\\theta)$，其分布已知且与 $\\theta$ 无关。2. 给定置信水平 $1-\\alpha$，确定分位数 $a,b$ 使 $P(a \\le G \\le b)=1-\\alpha$。3. 解不等式 $a \\le G \\le b$ 得 $\\theta$ 的置信区间。" },
        { id: "normal_ci", label: "正态总体常见的区间估计" },
        { id: "ci_mean_known_var", label: "单总体均值（方差已知）", explanation: "设 $X_1,\\dots,X_n\\sim N(\\mu,\\sigma_0^2)$，$\\sigma_0^2$ 已知。枢轴量 $\\frac{\\bar{X}-\\mu}{\\sigma_0/\\sqrt{n}}\\sim N(0,1)$。置信区间：$\\bar{X} \\pm z_{\\alpha/2}\\frac{\\sigma_0}{\\sqrt{n}}$。" },
        { id: "ci_mean_unknown_var", label: "单总体均值（方差未知）", explanation: "设 $X_1,\\dots,X_n\\sim N(\\mu,\\sigma^2)$，$\\sigma^2$ 未知。枢轴量 $\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}}\\sim t(n-1)$。置信区间：$\\bar{X} \\pm t_{\\alpha/2}(n-1)\\frac{S}{\\sqrt{n}}$。" },
        { id: "ci_variance", label: "单总体方差（均值未知）", explanation: "设 $X_1,\\dots,X_n\\sim N(\\mu,\\sigma^2)$，$\\mu$ 未知。枢轴量 $\\frac{(n-1)S^2}{\\sigma^2}\\sim \\chi^2(n-1)$。置信区间：$\\left[ \\frac{(n-1)S^2}{\\chi^2_{\\alpha/2}(n-1)},\\ \\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2}(n-1)} \\right]$。" },
        { id: "ci_diff_means_known_var", label: "双总体均值差（方差已知）", explanation: "设 $X_1,\\dots,X_m\\sim N(\\mu_1,\\sigma_1^2)$，$Y_1,\\dots,Y_n\\sim N(\\mu_2,\\sigma_2^2)$，$\\sigma_1^2,\\sigma_2^2$ 已知。枢轴量 $\\frac{(\\bar{X}-\\bar{Y})-(\\mu_1-\\mu_2)}{\\sqrt{\\sigma_1^2/m+\\sigma_2^2/n}}\\sim N(0,1)$。置信区间：$\\bar{X}-\\bar{Y} \\pm z_{\\alpha/2}\\sqrt{\\frac{\\sigma_1^2}{m}+\\frac{\\sigma_2^2}{n}}$。" },
        { id: "ci_diff_means_unknown_equal_var", label: "双总体均值差（方差未知但相等）", explanation: "设两总体方差 $\\sigma_1^2=\\sigma_2^2=\\sigma^2$ 未知。合并方差 $S_p^2=\\frac{(m-1)S_1^2+(n-1)S_2^2}{m+n-2}$。枢轴量 $\\frac{(\\bar{X}-\\bar{Y})-(\\mu_1-\\mu_2)}{S_p\\sqrt{1/m+1/n}}\\sim t(m+n-2)$。置信区间：$\\bar{X}-\\bar{Y} \\pm t_{\\alpha/2}(m+n-2)S_p\\sqrt{\\frac{1}{m}+\\frac{1}{n}}$。" },
        { id: "ci_diff_means_unknown_unequal_var", label: "双总体均值差（方差未知且不等）", explanation: "近似方法（Welch-Satterthwaite）。枢轴量近似 $t$ 分布，自由度为 $\\nu=\\frac{(s_1^2/m+s_2^2/n)^2}{\\frac{(s_1^2/m)^2}{m-1}+\\frac{(s_2^2/n)^2}{n-1}}$。置信区间：$\\bar{X}-\\bar{Y} \\pm t_{\\alpha/2}(\\nu)\\sqrt{\\frac{S_1^2}{m}+\\frac{S_2^2}{n}}$。" },
        { id: "ci_ratio_variances", label: "双总体方差比", explanation: "设两正态总体独立，$\\mu_1,\\mu_2$ 未知。枢轴量 $\\frac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}\\sim F(m-1,n-1)$。置信区间：$\\left[ \\frac{S_1^2}{S_2^2}\\frac{1}{F_{\\alpha/2}(m-1,n-1)},\\ \\frac{S_1^2}{S_2^2}F_{\\alpha/2}(n-1,m-1) \\right]$。" },

        // 非正态总体
        { id: "nonnormal", label: "非正态总体的渐近结果" },
        { id: "delta_method", label: "δ方法", explanation: "设 $\\sqrt{n}(T_n-\\theta)\\xrightarrow{d} N(0,\\sigma^2)$，且 $g$ 可导，$g'(\\theta)\\neq0$，则 $\\sqrt{n}(g(T_n)-g(\\theta))\\xrightarrow{d} N(0, [g'(\\theta)]^2\\sigma^2)$。用于构造非线性函数的渐近置信区间。" },
        { id: "slutsky", label: "Slutsky定理", explanation: "设 $X_n\\xrightarrow{d}X$，$Y_n\\xrightarrow{P}c$（常数），则① $X_n+Y_n\\xrightarrow{d}X+c$；② $X_nY_n\\xrightarrow{d}cX$；③ $X_n/Y_n\\xrightarrow{d}X/c$（$c\\neq0$）。常用于结合中心极限定理和依概率收敛的随机变量。" }
    ],
    edges: [
        // 总体与样本
        { from: "ch5_root", to: "population_sample" },
        { from: "population_sample", to: "population_def" },
        { from: "population_sample", to: "simple_random_sample" },
        { from: "population_sample", to: "sample_mean" },
        { from: "population_sample", to: "sample_variance" },
        { from: "population_sample", to: "joint_dist_sample" },

        // 统计量
        { from: "ch5_root", to: "statistic" },

        // 三大抽样分布
        { from: "ch5_root", to: "sampling_distributions" },
        { from: "sampling_distributions", to: "chi2_dist" },
        { from: "sampling_distributions", to: "t_dist" },
        { from: "sampling_distributions", to: "f_dist" },
        { from: "sampling_distributions", to: "sampling_theorem" },

        // 点估计
        { from: "ch5_root", to: "point_estimation" },
        { from: "point_estimation", to: "moment_est" },
        { from: "point_estimation", to: "mle" },
        { from: "point_estimation", to: "estimation_criteria" },
        { from: "estimation_criteria", to: "unbiasedness" },
        { from: "estimation_criteria", to: "efficiency" },
        { from: "estimation_criteria", to: "consistency" },

        // 区间估计
        { from: "ch5_root", to: "interval_estimation" },
        { from: "interval_estimation", to: "confidence_level" },
        { from: "interval_estimation", to: "ci_steps" },
        { from: "interval_estimation", to: "normal_ci" },
        { from: "normal_ci", to: "ci_mean_known_var" },
        { from: "normal_ci", to: "ci_mean_unknown_var" },
        { from: "normal_ci", to: "ci_variance" },
        { from: "normal_ci", to: "ci_diff_means_known_var" },
        { from: "normal_ci", to: "ci_diff_means_unknown_equal_var" },
        { from: "normal_ci", to: "ci_diff_means_unknown_unequal_var" },
        { from: "normal_ci", to: "ci_ratio_variances" },

        // 非正态总体
        { from: "ch5_root", to: "nonnormal" },
        { from: "nonnormal", to: "delta_method" },
        { from: "nonnormal", to: "slutsky" }
    ]
};

// 第六章：检验
const hypothesisTestingData = {
    nodes: [
        { id: "ch6_root", label: "🔍 检验" },

        // ========== 假设检验 ==========
        { id: "hypothesis_test", label: "假设检验" },
        { id: "null_alternative", label: "原假设与备择假设", explanation: "原假设 $H_0$：通常表示无差异、无效果、参数等于某值。是不能轻易被拒绝的假设。\n备择假设 $H_1$：与原假设对立的假设，表示有差异、有效果，通常为双侧或单侧（$\\neq, >, <$）。是不能轻易被接受的假设。" },
        { id: "ht_principles", label: "假设检验的基本原理", explanation: "小概率原理：在一次试验中，小概率事件几乎不可能发生。若在 $H_0$ 成立下，样本观测值出现的概率很小（小于显著性水平），则拒绝 $H_0$。" },
        { id: "significance_level", label: "显著性水平 $\\alpha$ 的意义", explanation: "$\\alpha$ 是事先给定的概率阈值，表示当 $H_0$ 为真时错误拒绝 $H_0$ 即允许犯第一类错误的最大允许概率。" },
        { id: "type_errors", label: "第一类错误与第二类错误", explanation: "第一类错误（弃真）：$H_0$ 为真但拒绝 $H_0$，概率 $\\alpha$。\n第二类错误（取伪）：$H_0$ 为假但接受 $H_0$，概率 $\\beta$。$1-\\beta$ 为检验的功效（power）。" },
        { id: "p_value", label: "p值", explanation: "p值是在 $H_0$ 成立下，得到样本观测值或更极端结果的概率。若 p 值 $< \\alpha$，则拒绝 $H_0$。p值越小，证据越强。" },
        { id: "ht_steps", label: "假设检验的步骤", explanation: "1. 提出原假设 $H_0$ 和备择假设 $H_1$。\n2. 确定显著性水平 $\\alpha$。\n3. 选取检验统计量，并确定其在 $H_0$ 下的分布。\n4. 根据备择假设确定拒绝域。\n5. 计算检验统计量的观测值。\n6. 比较 p 值与 $\\alpha$ 或判断是否落入拒绝域，下结论。" },
        { id: "normal_tests", label: "常见的正态总体假设检验" },
        { id: "z_test", label: "Z检验（方差已知）", explanation: "单样本 $H_0: \\mu=\\mu_0$，统计量 $Z=\\frac{\\bar{X}-\\mu_0}{\\sigma/\\sqrt{n}}\\sim N(0,1)$。\n拒绝域：\n- 双边 $H_1:\\mu\\neq\\mu_0$：$|Z| > z_{\\alpha/2}$\n- 左边 $H_1:\\mu<\\mu_0$：$Z < -z_{\\alpha}$\n- 右边 $H_1:\\mu>\\mu_0$：$Z > z_{\\alpha}$\n双样本 $H_0: \\mu_1-\\mu_2=\\delta_0$，统计量 $Z=\\frac{(\\bar{X}-\\bar{Y})-\\delta_0}{\\sqrt{\\sigma_1^2/m+\\sigma_2^2/n}}$，拒绝域同上。" },
        { id: "t_test", label: "t检验（方差未知）", explanation: "单样本 $H_0: \\mu=\\mu_0$，统计量 $t=\\frac{\\bar{X}-\\mu_0}{S/\\sqrt{n}}\\sim t(n-1)$。\n拒绝域：\n- 双边：$|t| > t_{\\alpha/2}(n-1)$\n- 左边：$t < -t_{\\alpha}(n-1)$\n- 右边：$t > t_{\\alpha}(n-1)$\n独立双样本（等方差）$H_0: \\mu_1-\\mu_2=\\delta_0$，统计量 $t=\\frac{(\\bar{X}-\\bar{Y})-\\delta_0}{S_p\\sqrt{1/m+1/n}}\\sim t(m+n-2)$，拒绝域类似。" },
        { id: "chi2_variance_test", label: "卡方检验（方差）", explanation: "$H_0: \\sigma^2=\\sigma_0^2$，统计量 $\\chi^2=\\frac{(n-1)S^2}{\\sigma_0^2}\\sim \\chi^2(n-1)$。\n拒绝域：\n- 双边 $H_1:\\sigma^2\\neq\\sigma_0^2$：$\\chi^2 < \\chi^2_{1-\\alpha/2}(n-1)$ 或 $\\chi^2 > \\chi^2_{\\alpha/2}(n-1)$\n- 左边 $H_1:\\sigma^2<\\sigma_0^2$：$\\chi^2 < \\chi^2_{1-\\alpha}(n-1)$\n- 右边 $H_1:\\sigma^2>\\sigma_0^2$：$\\chi^2 > \\chi^2_{\\alpha}(n-1)$" },
        { id: "f_test", label: "F检验（方差比）", explanation: "$H_0: \\sigma_1^2=\\sigma_2^2$，统计量 $F=\\frac{S_1^2}{S_2^2}\\sim F(m-1,n-1)$。\n拒绝域：\n- 双边 $H_1:\\sigma_1^2\\neq\\sigma_2^2$：$F < F_{1-\\alpha/2}(m-1,n-1)$ 或 $F > F_{\\alpha/2}(m-1,n-1)$\n- 左边 $H_1:\\sigma_1^2<\\sigma_2^2$：$F < F_{1-\\alpha}(m-1,n-1)$\n- 右边 $H_1:\\sigma_1^2>\\sigma_2^2$：$F > F_{\\alpha}(m-1,n-1)$" },

        // ========== 单因素方差分析 ==========
        { id: "anova_oneway", label: "单因素方差分析" },
        { id: "anova_assumptions", label: "基本假设", explanation: "① 各总体相互独立；\n② 各总体均服从正态分布；\n③ 各总体方差相等（齐性）。" },
        { id: "anova_model", label: "数学模型与假设", explanation: "设有 $k$ 个总体，从第 $i$ 个总体中抽取样本 $X_{i1},\\dots,X_{in_i}$，模型：$X_{ij} = \\mu + \\alpha_i + \\varepsilon_{ij}$，其中 $\\mu$ 为总均值，$\\alpha_i$ 为第 $i$ 个处理的效应，$\\varepsilon_{ij}\\sim N(0,\\sigma^2)$ 独立。约束 $\\sum_{i=1}^k n_i\\alpha_i=0$（或等样本量时 $\\sum\\alpha_i=0$）。\n原假设 $H_0: \\alpha_1=\\cdots=\\alpha_k=0$（即所有总体均值相等）。\n备择假设 $H_1$：至少有一个 $\\alpha_i\\neq0$。" },
        { id: "anova_sumsq", label: "三个平方和", explanation: "总平方和 $SST=\\sum_{i=1}^k\\sum_{j=1}^{n_i}(X_{ij}-\\bar{X})^2$；组间平方和 $SSA=\\sum_{i=1}^k n_i(\\bar{X}_{i\\cdot}-\\bar{X})^2$；组内平方和 $SSE=\\sum_{i=1}^k\\sum_{j=1}^{n_i}(X_{ij}-\\bar{X}_{i\\cdot})^2$。满足 $SST=SSA+SSE$。" },
        { id: "anova_statistic", label: "检验统计量", explanation: "$F = \\frac{SSA/(k-1)}{SSE/(n-k)} \\sim F(k-1, n-k)$，其中 $k$ 为组数，$n$ 为总样本量。" },
        { id: "anova_rejection", label: "拒绝域", explanation: "给定显著性水平 $\\alpha$，拒绝域为 $F > F_{\\alpha}(k-1, n-k)$。即组间变异显著大于组内变异时，认为各总体均值不全相等。" },
        { id: "anova_scope", label: "使用范围", explanation: "用于比较多个（$k\\ge2$）组间的均值是否有显著差异。要求正态性、独立性、方差齐性。不满足时可使用非参数方法（如 Kruskal-Wallis）。" },

            // ========== 卡方检验 ==========
        { id: "chisq_goodness", label: "卡方检验" },
        // Pearson定理（直接子节点）
        { id: "pearson_theorem", label: "Pearson定理", explanation: "若 $H_0$ 成立，检验统计量 $\\chi^2 = \\sum_{i=1}^k \\frac{(O_i - E_i)^2}{E_i}$ 的渐近分布：\n- 当理论分布完全已知（无参数估计）时，$\\chi^2 \\sim \\chi^2(k-1)$。\n- 当理论分布有 $r$ 个未知参数需用极大似然估计时，$\\chi^2 \\sim \\chi^2(k-1-r)$（要求估计基于分组频数，且 $n$ 大）。" },
        // 拟合优度检验（父节点）
        { id: "goodness_test", label: "拟合优度检验" },
        { id: "goodness_model", label: "拟合优度检验 · 数学模型与假设", explanation: "设总体 $X$ 的分布函数为 $F(x)$，将实数轴划分为 $k$ 个互不相交的区间 $I_1,\\dots,I_k$，理论概率 $p_i = P(X\\in I_i)$ 在 $H_0$ 下完全已知或依赖于若干参数。设样本观测值落入各区的实际频数为 $O_i$，理论频数 $E_i = np_i$。\n原假设 $H_0$：总体服从某指定分布（即 $p_i$ 符合该分布）。\n备择假设 $H_1$：总体不服从该分布。" },
        { id: "goodness_steps", label: "拟合优度检验步骤", explanation: "1. 提出 $H_0$ 与 $H_1$。\n2. 将数据分成 $k$ 组，计算实际频数 $O_i$ 和理论频数 $E_i$（若需估计参数，先估计）。\n3. 计算 $\\chi^2 = \\sum (O_i-E_i)^2/E_i$。\n4. 确定自由度 $df = k-1$（或 $k-1-r$），给定 $\\alpha$，拒绝域为 $\\chi^2 > \\chi^2_{\\alpha}(df)$。\n5. 若 $E_i < 5$，可合并相邻组。" },
        // 类别变量独立性检验（父节点）
        { id: "independence_test", label: "类别变量独立性检验" },
        { id: "independence_model", label: "独立性检验 · 数学模型与假设", explanation: "设有两个分类变量 $A$ 和 $B$，分别有 $r$ 个和 $c$ 个水平。观测数据为列联表，频数 $O_{ij}$。在 $H_0$：$A$ 与 $B$ 独立下，理论频数 $E_{ij} = \\frac{(行和)\\times(列和)}{总样本数}$。\n原假设 $H_0$：两变量独立。\n备择假设 $H_1$：两变量不独立（存在关联）。" },
        { id: "independence_steps", label: "独立性检验步骤", explanation: "1. 提出 $H_0$：两变量独立。\n2. 计算期望频数 $E_{ij} = (n_{i\\cdot} n_{\\cdot j})/n$。\n3. 计算检验统计量 $\\chi^2 = \\sum_{i=1}^r\\sum_{j=1}^c \\frac{(O_{ij}-E_{ij})^2}{E_{ij}}$。\n4. 自由度 $df = (r-1)(c-1)$，给定 $\\alpha$，拒绝域为 $\\chi^2 > \\chi^2_{\\alpha}(df)$。" },

        // ========== 数值变量的相关性检验 ==========
        { id: "correlation_test", label: "数值变量的相关性检验" },
        { id: "correlation_model", label: "相关性检验 · 数学模型与假设", explanation: "设 $(X_1,Y_1),\\dots,(X_n,Y_n)$ 为来自二元正态总体的样本。总体相关系数 $\\rho = \\frac{Cov(X,Y)}{\\sqrt{Var(X)Var(Y)}}$。\n原假设 $H_0: \\rho=0$（两变量不线性相关）。\n备择假设 $H_1: \\rho\\neq0$（或 $\\rho>0$，$\\rho<0$）。" },
        { id: "correlation_steps", label: "相关性检验步骤", explanation: "1. 计算样本相关系数 $r = \\frac{\\sum (X_i-\\bar{X})(Y_i-\\bar{Y})}{\\sqrt{\\sum (X_i-\\bar{X})^2\\sum (Y_i-\\bar{Y})^2}}$。\n2. 构造检验统计量 $t = r\\sqrt{\\frac{n-2}{1-r^2}}$，在 $H_0$ 下 $t \\sim t(n-2)$。\n3. 给定显著性水平 $\\alpha$，拒绝域：双边 $|t| > t_{\\alpha/2}(n-2)$；左边 $t < -t_{\\alpha}(n-2)$；右边 $t > t_{\\alpha}(n-2)$。\n4. 计算 p 值，做出决策。" },

        // ========== 一元线性回归 ==========
        { id: "linear_regression", label: "一元线性回归" },
        { id: "reg_model", label: "回归模型与假设", explanation: "模型 $Y_i = \\beta_0 + \\beta_1 X_i + \\varepsilon_i$，$i=1,\\dots,n$，其中 $\\varepsilon_i \\stackrel{i.i.d.}{\\sim} N(0,\\sigma^2)$，$X_i$ 是自变量（非随机）。\n参数 $\\beta_0$（截距），$\\beta_1$（斜率）。" },
        { id: "reg_estimation", label: "参数估计（最小二乘法）", explanation: "最小二乘估计：$\\hat{\\beta}_1 = \\frac{\\sum (X_i-\\bar{X})(Y_i-\\bar{Y})}{\\sum (X_i-\\bar{X})^2}$，$\\hat{\\beta}_0 = \\bar{Y} - \\hat{\\beta}_1\\bar{X}$。\n残差 $e_i = Y_i - \\hat{Y}_i$，误差方差估计 $\\hat{\\sigma}^2 = \\frac{1}{n-2}\\sum e_i^2$。" },
        { id: "reg_t_test", label: "回归系数的显著性检验（t检验）", explanation: "检验 $H_0: \\beta_1=0$（线性关系不显著）。\n统计量 $t = \\frac{\\hat{\\beta}_1}{SE(\\hat{\\beta}_1)}$，其中 $SE(\\hat{\\beta}_1) = \\hat{\\sigma} / \\sqrt{\\sum (X_i-\\bar{X})^2}$。在 $H_0$ 下 $t \\sim t(n-2)$。\n拒绝域：双边 $|t| > t_{\\alpha/2}(n-2)$。等价地，也可使用 F检验 $F = t^2 \\sim F(1, n-2)$。" },
        { id: "reg_goodness", label: "拟合优度 $R^2$", explanation: "$R^2 = \\frac{SSR}{SST} = 1 - \\frac{SSE}{SST}$，表示回归模型解释的变异占总变异的比例。$0 \\le R^2 \\le 1$，越接近1拟合越好。对于一元线性回归，$R^2 = r^2$（相关系数的平方）。" },
        { id: "reg_prediction", label: "预测与置信区间", explanation: "给定 $X=x_0$，预测值 $\\hat{Y}_0 = \\hat{\\beta}_0 + \\hat{\\beta}_1 x_0$。\n预测区间（用于单个新观测）：$\\hat{Y}_0 \\pm t_{\\alpha/2}(n-2) \\hat{\\sigma} \\sqrt{1 + \\frac{1}{n} + \\frac{(x_0-\\bar{X})^2}{\\sum (X_i-\\bar{X})^2}}$。\n置信区间（用于均值响应）：$\\hat{Y}_0 \\pm t_{\\alpha/2}(n-2) \\hat{\\sigma} \\sqrt{\\frac{1}{n} + \\frac{(x_0-\\bar{X})^2}{\\sum (X_i-\\bar{X})^2}}$。" },

        // ========== 多元线性回归 ==========
        { id: "multiple_regression", label: "多元线性回归" },
        { id: "mul_reg_model", label: "多元回归模型与假设", explanation: "模型 $Y_i = \\beta_0 + \\beta_1 X_{i1} + \\beta_2 X_{i2} + \\dots + \\beta_p X_{ip} + \\varepsilon_i$，$i=1,\\dots,n$。\n矩阵形式 $\\mathbf{Y} = \\mathbf{X}\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}$，其中 $\\boldsymbol{\\varepsilon} \\sim N(\\mathbf{0}, \\sigma^2 \\mathbf{I}_n)$。\n假设：① 线性关系；② 误差独立同分布正态；③ 自变量之间无完全共线性（$\\mathbf{X}$ 列满秩）。" },
        { id: "mul_reg_estimation", label: "参数估计（最小二乘法）", explanation: "最小二乘估计 $\\hat{\\boldsymbol{\\beta}} = (\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top\\mathbf{Y}$。\n残差 $\\mathbf{e} = \\mathbf{Y} - \\mathbf{X}\\hat{\\boldsymbol{\\beta}}$，误差方差估计 $\\hat{\\sigma}^2 = \\frac{1}{n-p-1}\\sum e_i^2$。" },
        { id: "mul_reg_f_test", label: "整体显著性检验（F检验）", explanation: "检验所有自变量整体是否对 $Y$ 有显著线性影响。\n$H_0: \\beta_1 = \\beta_2 = \\dots = \\beta_p = 0$；$H_1$：至少一个 $\\beta_j \\neq 0$。\n统计量 $F = \\frac{SSR/p}{SSE/(n-p-1)} \\sim F(p, n-p-1)$，其中 $SSR = \\sum (\\hat{Y}_i - \\bar{Y})^2$，$SSE = \\sum (Y_i - \\hat{Y}_i)^2$。拒绝域 $F > F_{\\alpha}(p, n-p-1)$。" },
        { id: "mul_reg_t_test", label: "单个系数显著性检验（t检验）", explanation: "对某个系数 $\\beta_j$，检验 $H_0: \\beta_j=0$。\n统计量 $t = \\frac{\\hat{\\beta}_j}{SE(\\hat{\\beta}_j)} \\sim t(n-p-1)$，其中 $SE(\\hat{\\beta}_j) = \\hat{\\sigma}\\sqrt{[(\\mathbf{X}^\\top\\mathbf{X})^{-1}]_{jj}}$。\n拒绝域：双边 $|t| > t_{\\alpha/2}(n-p-1)$。" },
        { id: "mul_reg_goodness", label: "拟合优度与调整 $R^2$", explanation: "多重判定系数 $R^2 = \\frac{SSR}{SST} = 1 - \\frac{SSE}{SST}$，但随自变量增加而增大。调整 $R^2 = 1 - \\frac{SSE/(n-p-1)}{SST/(n-1)} = 1 - (1-R^2)\\frac{n-1}{n-p-1}$，用于惩罚过多变量。" },
        { id: "mul_reg_prediction", label: "预测与置信区间", explanation: "给定新观测 $\\mathbf{x}_0 = (1, x_{01},\\dots,x_{0p})^\\top$，预测值 $\\hat{Y}_0 = \\mathbf{x}_0^\\top\\hat{\\boldsymbol{\\beta}}$。\n预测区间（单个新观测）：$\\hat{Y}_0 \\pm t_{\\alpha/2}(n-p-1) \\hat{\\sigma} \\sqrt{1 + \\mathbf{x}_0^\\top(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{x}_0}$。\n置信区间（均值响应）：$\\hat{Y}_0 \\pm t_{\\alpha/2}(n-p-1) \\hat{\\sigma} \\sqrt{\\mathbf{x}_0^\\top(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{x}_0}$。" }
    ],
    edges: [
        // 假设检验
        { from: "ch6_root", to: "hypothesis_test" },
        { from: "hypothesis_test", to: "null_alternative" },
        { from: "hypothesis_test", to: "ht_principles" },
        { from: "hypothesis_test", to: "significance_level" },
        { from: "hypothesis_test", to: "type_errors" },
        { from: "hypothesis_test", to: "p_value" },
        { from: "hypothesis_test", to: "ht_steps" },
        { from: "hypothesis_test", to: "normal_tests" },
        { from: "normal_tests", to: "z_test" },
        { from: "normal_tests", to: "t_test" },
        { from: "normal_tests", to: "chi2_variance_test" },
        { from: "normal_tests", to: "f_test" },

        // 单因素方差分析
        { from: "ch6_root", to: "anova_oneway" },
        { from: "anova_oneway", to: "anova_assumptions" },
        { from: "anova_oneway", to: "anova_model" },
        { from: "anova_oneway", to: "anova_sumsq" },
        { from: "anova_oneway", to: "anova_statistic" },
        { from: "anova_oneway", to: "anova_rejection" },
        { from: "anova_oneway", to: "anova_scope" },

        // 卡方检验
        { from: "ch6_root", to: "chisq_goodness" },
        { from: "chisq_goodness", to: "pearson_theorem" },
        { from: "chisq_goodness", to: "goodness_test" },
        { from: "goodness_test", to: "goodness_model" },
        { from: "goodness_test", to: "goodness_steps" },
        { from: "chisq_goodness", to: "independence_test" },
        { from: "independence_test", to: "independence_model" },
        { from: "independence_test", to: "independence_steps" },

        // 数值变量的相关性检验
        { from: "ch6_root", to: "correlation_test" },
        { from: "correlation_test", to: "correlation_model" },
        { from: "correlation_test", to: "correlation_steps" },

        // 一元线性回归
        { from: "ch6_root", to: "linear_regression" },
        { from: "linear_regression", to: "reg_model" },
        { from: "linear_regression", to: "reg_estimation" },
        { from: "linear_regression", to: "reg_t_test" },
        { from: "linear_regression", to: "reg_goodness" },
        { from: "linear_regression", to: "reg_prediction" },

        // 多元线性回归
        { from: "ch6_root", to: "multiple_regression" },
        { from: "multiple_regression", to: "mul_reg_model" },
        { from: "multiple_regression", to: "mul_reg_estimation" },
        { from: "multiple_regression", to: "mul_reg_f_test" },
        { from: "multiple_regression", to: "mul_reg_t_test" },
        { from: "multiple_regression", to: "mul_reg_goodness" },
        { from: "multiple_regression", to: "mul_reg_prediction" }
    ]
};

// 合并所有章节到 chapterMap
const chapterMap = {
    chapter1: { name: "随机事件与概率", data: probabilityData },
    chapter2: { name: "随机变量及其分布", data: randomVariableData },
    chapter3: { name: "多维随机变量及其分布", data: multivariateDistData },
    chapter4: { name: "大数定理与中心极限定理", data: limitTheoremsData },
    chapter5: { name: "统计量及其分布", data: statisticsData },
    chapter6: { name: "检验", data: hypothesisTestingData }
};

const chapterOptions = [
    { value: "chapter1", label: "📖 随机事件与概率" },
    { value: "chapter2", label: "📊 随机变量及其分布" },
    { value: "chapter3", label: "🌐 多维随机变量及其分布" },
    { value: "chapter4", label: "📈 大数定理与中心极限定理" },
    { value: "chapter5", label: "📏 统计量及其分布" },
    { value: "chapter6", label: "🔍 检验" }
];