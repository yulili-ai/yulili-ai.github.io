export type Metric = { value: string; label: string; context: string; sourceId: string };
export type Media = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  caption: string;
  sourceId: string;
  width?: number;
  height?: number;
  poster?: string;
};
export type Work = {
  slug: string;
  title: string;
  english: string;
  category: 'Featured' | 'Client Projects' | 'AI Lab';
  time: string;
  role: string;
  value: string;
  sourceId: string;
  sourceSection: string;
  featured: boolean;
  cover: string;
  coverKind: 'concept' | 'real';
  stage: string;
  background: string;
  problem: string;
  positioning: string;
  strategy: string[];
  architecture: string[];
  implementation: string[];
  boundary: string;
  metrics: Metric[];
  business: string[];
  media: Media[];
  demo: string;
  github: string;
  relatedLinks: { label: string; url: string }[];
  decisions: string[];
  verification: string;
};
export const works: Work[] = [
  {
    slug: 'intelligent-living',
    title: '智爱家 × 灵之智能 Z-Link OS',
    english: 'Z-Link OS / Home Agent',
    category: 'Featured',
    time: '2025.11–2026.09',
    role: '创新项目负责人 / AI 产品经理',
    value: '从全屋智能产品规划到家庭 Agent 场景设计，推进复杂软硬件协同与规模化交付。',
    sourceId: 'resume-v1.1',
    sourceSection: '简历第 2–3 页',
    featured: true,
    cover: '/covers/intelligent-living.svg',
    coverKind: 'concept',
    stage: '全屋智能已规模交付；家庭 Agent 各能力的实现阶段待逐项补充',
    background: '自如高端艺术整装创新业务，自研 Z-Link 全屋智能系统。',
    problem:
      '设备接入后，用户仍需查找房间、理解参数和配置联动。智能设备功能分散、跨设备协同复杂，安装交付与入住后的使用体验存在脱节。',
    positioning: '连接住宅、设备与日常生活场景的全屋智能系统及家庭 Agent。',
    strategy: [
      '主导产品定位、场景规划、产品架构、多端体验与交付验收。',
      '以 10 类预设场景和自定义场景体系支撑家庭使用需求。',
    ],
    architecture: [
      '家庭 Agent 规划链路：上下文获取 → 意图理解 → 缺参澄清 → 场景编排 → 确认执行 → 异常纠偏 → 结果核验。',
      '产品方案区分本次修改与长期偏好；用户能够检查并修正 AI 判断。该链路属于家庭 Agent 产品方案，具体线上能力清单待补充。',
      '以上为产品规划范围，不代表各环节已全部上线；实际模型、协议及工具调用实现待补充。',
    ],
    implementation: [
      '协同算法、IoT、研发、硬件和安装团队推进产品交付与验收。',
      '支持 260+ 款设备，北京、上海累计交付 1,098 套住宅。',
    ],
    boundary:
      '负责产品定位、架构规划、场景体验与交付验收；模型训练、底层协议及硬件电路由对应研发团队负责。',
    metrics: [
      {
        value: '1,098 套',
        label: '北京、上海住宅交付',
        context: '交付覆盖，不等同于家庭 Agent 活跃用户数',
        sourceId: 'resume-v1.1',
      },
      {
        value: '260+ 款',
        label: '设备支持',
        context: '设备类型与兼容验收清单待补充',
        sourceId: 'resume-v1.1',
      },
      {
        value: '68% → 89%',
        label: '首次场景配置完成率',
        context: '样本量、时间窗口及完成标准待补充',
        sourceId: 'resume-v1.1',
      },
      {
        value: '8.5 → 5.2 分钟',
        label: '平均配置时长',
        context: '与单户初始化配置为不同任务口径',
        sourceId: 'resume-v1.1',
      },
      {
        value: '90 → 55 分钟',
        label: '单户智能场景初始化配置',
        context: '耗时降低约 39%；不能与平均配置时长合并',
        sourceId: 'resume-v1.1',
      },
    ],
    business: ['以住宅交付规模呈现落地成果；不推算未提供的营收或合同金额。'],
    media: [],
    demo: '',
    github: '',
    relatedLinks: [],
    decisions: [
      '以生活场景重构产品体系：为归家、离家、助眠、唤醒等场景明确触发、动作、例外和退出方式，将生活目标转为可配置规则。',
      '明确多端分工：App 承担复杂配置，中控承担就近控制，语音承接即时需求，统一设备与场景的底层产品规则。',
      '采用受控执行链路：模型提出可编排方案，业务服务校验设备和权限，按动作影响设置确认方式，覆盖部分失败、离线和取消。',
      '将家庭、房间、成员、设备与场景统一为配置关系，形成场景矩阵、交付规范与验收标准，支持不同户型复用。',
    ],
    verification:
      '来源：简历第 2–3 页，与 V1.1 说明一致。配置完成率、平均配置时长和单户初始化耗时属于不同口径；原始样本与统计周期待补充。',
  },
  {
    slug: 'dental-agent',
    title: '牙科 AI 咨询与预约转化 Agent',
    english: 'From inquiry to appointment.',
    category: 'Featured',
    time: '2025.11–2026.09',
    role: '孵化项目负责人 / AI 产品经理',
    value: '围绕咨询、需求澄清与预约确认形成服务闭环，将门诊试点推进到付费转化。',
    sourceId: 'resume-v1.1',
    sourceSection: '简历第 3 页',
    featured: true,
    cover: '/covers/dental-agent.svg',
    coverKind: 'concept',
    stage: '3 家门诊完成 8 周试点；2 家转为付费客户',
    background: '门诊存在重复咨询、需求澄清、预约时段查询及预约确认需求。',
    problem: '让咨询进入可追踪的预约流程，分清自动化服务与专业诊疗的责任边界。',
    positioning: '面向牙科门诊的咨询与预约转化 Agent，采用软件订阅 + 实施服务收费模式。',
    strategy: [
      '主导客户需求、端到端产品方案、Demo 验证、转化评测与 FDE 交付。',
      '将咨询、预约确认、实际到诊分别统计，观察从服务到商业转化的全过程。',
    ],
    architecture: [
      '端到端方案连接 Agent、知识库、业务工具调用与人工协同，明确系统边界、集成路径和交付标准。',
      'AI 编程工具用于咨询预约交互 Demo；与研发协同完成接口和系统集成。具体模型及供应商名称未提供，不补写。',
    ],
    implementation: [
      '3 家门诊开展 8 周试点，覆盖 600 名有效咨询用户。',
      '推进客户试点、转化评测和实施服务交付。',
    ],
    boundary:
      '作为孵化项目负责人，主导客户需求、产品方案、商业化试点与 FDE 交付；与研发协同完成接口和系统集成。诊疗判断由门诊专业人员负责。',
    metrics: [
      {
        value: '180 / 600',
        label: '确认预约 / 有效咨询用户',
        context: '预约率 30%；较前一可比周期 22% 提升 8 个百分点',
        sourceId: 'resume-v1.1',
      },
      {
        value: '126 / 180',
        label: '实际到诊 / 确认预约',
        context: '预约至到诊率 70%；并非咨询至到诊率',
        sourceId: 'resume-v1.1',
      },
      {
        value: '2 / 3',
        label: '试点门诊转为付费',
        context: '试点持续 8 周',
        sourceId: 'resume-v1.1',
      },
      {
        value: '12 万元',
        label: '首年签约额',
        context: '年度订阅 8 万元 + 实施服务 4 万元；签约额不等于回款',
        sourceId: 'resume-v1.1',
      },
    ],
    business: ['形成软件订阅 + 实施服务模式，2 家试点门诊转为付费客户。'],
    media: [],
    demo: '',
    github: '',
    relatedLinks: [],
    decisions: [
      '先验证单门诊任务，再扩展场景与客户，明确知识、数据和人工承接依赖。',
      '区分已确认信息、待补条件、知识依据和实时工具结果；用户改口后同步更新参数。',
      '将预约过程拆为待确认、提交中、成功、取消和失败状态。超时先查询再决定重试，使用请求标识处理重复写入，保留人工接管。',
      '先以模拟接口验证交互，再验证真实模型理解与工具调用；将追问、时段选择、确认和异常恢复问题转化为 PRD 与验收用例。',
    ],
    verification:
      '用户提供的试点统计。前后周期可比条件、咨询去重规则、归因方式和合同脱敏凭证待补充；不将前后变化表述为严格因果实验。',
  },
  {
    slug: 'chengyi-ai',
    title: '承艺 AI × 非遗数字创作平台',
    english: 'Culture, made participatory.',
    category: 'AI Lab',
    time: '2026.10–至今',
    role: '独立创新项目负责人 / AI Builder',
    value: '以“看 → 做 → 藏”为核心路径，连接非遗知识、数字创作与个性化文创定制。',
    sourceId: 'resume-v1.1',
    sourceSection: '简历第 4–5 页',
    featured: true,
    cover: '/covers/chengyi-ai.svg',
    coverKind: 'concept',
    stage: '独立创新项目：MVP、种子用户内测与首笔定制订单',
    background:
      '4 人 AI 技术爱好者团队，探索非遗数字化体验与文创商业模式。简历以陶瓷、剪纸为首期场景，成果中包含陶瓷互动工坊和花丝工作台。',
    problem: '让工艺内容从被动浏览进入可参与的数字创作，并探索作品与实物定制之间的连接。',
    positioning:
      '集工艺科普、数字 DIY、作品分享与文创消费于一体的独立创新项目，尚非规模化运营平台。',
    strategy: [
      '开展行业研究、产品定位，梳理 101 条需求记录与 14 个验收场景。',
      '以“看 → 做 → 藏”组织核心路径，规划创作工作台、知识讲解与作品管理。',
    ],
    architecture: [
      '规划 AI 辅助创作与工艺知识讲解，关注文化内容准确性、操作确认与撤销机制。',
      '当前实际模型、后端服务、生成链路与部署架构待补充；不以产品规划推断技术已实现。',
    ],
    implementation: [
      '使用 Vibe Coding 推进 MVP；据本轮提供资料，4 人团队 7 天完成 MVP。',
      '上线陶瓷互动工坊、花丝工作台及 AI 辅助创作功能。',
      '组织调研、种子用户内测和商业化探索。',
      '简历记载回收 25 份有效问卷；该调研样本与 40 名种子内测用户分开记录。',
    ],
    boundary:
      '负责行业研究、产品定位、MVP 规划及核心功能开发；与团队协同完成技术实现、文化内容核验和用户验证。团队交付不等同于个人完成全部模块。',
    metrics: [
      {
        value: '4 人 / 7 天',
        label: '团队与 MVP 周期',
        context: '团队成果，不表述为个人独立完成',
        sourceId: 'resume-v1.1',
      },
      {
        value: '40 人',
        label: '种子用户内测',
        context: '招募方式、任务分布待补充',
        sourceId: 'resume-v1.1',
      },
      {
        value: '约 80%',
        label: '核心创作任务完成率',
        context: '任务定义及统计分母待补充',
        sourceId: 'resume-v1.1',
      },
      {
        value: '85%',
        label: '用户满意度',
        context: '问卷题目、有效样本与满意标准待补充',
        sourceId: 'resume-v1.1',
      },
    ],
    business: [
      '完成首笔个性化文创定制订单。',
      '据本轮说明，跑通线上 DIY、定制报价、支付下单至线下制作交付的闭环；订单金额与交付凭证待补充。',
    ],
    media: [],
    demo: '',
    github: '',
    relatedLinks: [],
    decisions: [
      '以“看 → 做 → 藏”确定核心产品路径，从 101 条需求记录与 14 个验收场景中明确 MVP 范围和迭代优先级。',
      '将手动创作、自然语言交互、工艺知识讲解与作品管理连接起来；为 AI 内容依据、操作确认及撤销设定边界。',
      '采用一周迭代验证核心功能，推进陶瓷拉坯、上釉、烧制、作品分享等流程，把方案转化为可操作原型。',
      '结合用户调研、工作室与传承人工坊访谈推进冷启动，关注创作意愿及线下商品供给的可行性。',
    ],
    verification:
      '来源：简历第 4–5 页及 V1.1 说明。40 名内测用户的完成率、满意度口径待补充；剪纸、和纸、花丝分别对应的首期范围和上线阶段仍需确认。',
  },
  {
    slug: 'aigc-agent',
    title: 'AIGC Agent 内容生产平台',
    english: 'A workflow for creative work.',
    category: 'Featured',
    time: '2024.06–2025.11',
    role: '项目负责人 / AI 产品经理',
    value: '将运营与设计的内容生产流程产品化，用工作流、品牌约束和审核反馈共同管理效率与质量。',
    sourceId: 'resume-v1.1',
    sourceSection: '简历第 3–4 页',
    featured: true,
    cover: '/covers/aigc-agent.svg',
    coverKind: 'concept',
    stage: '企业内部生产平台，已形成使用与配对任务度量',
    background: '运营和设计团队需要将重复内容生产流程转化为可管理的产品能力。',
    problem: '生成速度之外，品牌一致性、审核返工与版本协作共同影响实际生产效率。',
    positioning: '面向内部运营及设计团队的内容生产工作台。',
    strategy: [
      '规划任务工作台、素材库、品牌模板与版本管理。',
      '划分固定 Workflow 与 Agent 的分工，并将审核返工纳入耗时度量。',
    ],
    architecture: [
      '固定 Workflow 与 Agent 协作，结合模型评测、品牌规则约束与审核流程。',
      '审核后对返工原因进行归因；模型版本、具体编排框架与节点实现待补充。',
    ],
    implementation: [
      '覆盖 5 个团队、60 名运营及设计用户，支持 8 类生产任务。',
      '上线 3 个月完成 3,000 项生产任务。',
    ],
    boundary:
      '负责场景选择、平台规划、工作流及质量验收，协同研发接入生成能力，与设计及运营共同制定品牌与使用标准。',
    metrics: [
      {
        value: '60 人 / 8 类',
        label: '用户与任务覆盖',
        context: '内部运营及设计用户',
        sourceId: 'resume-v1.1',
      },
      {
        value: '3,000 项',
        label: '生产任务',
        context: '上线 3 个月内完成',
        sourceId: 'resume-v1.1',
      },
      {
        value: '30 → 12 分钟',
        label: '总耗时中位数',
        context: '100 项配对任务，包含审核返工；耗时降低 60%',
        sourceId: 'resume-v1.1',
      },
      {
        value: '55% → 78%',
        label: '首轮审核通过率',
        context: '同组配对任务，增加 23 个百分点；审核规则待补充。',
        sourceId: 'resume-v1.1',
      },
    ],
    business: ['内部生产效率与质量改善；不推算未提供的收入或成本金额。'],
    media: [],
    demo: '',
    github: '',
    relatedLinks: [],
    decisions: [
      '按任务频次、耗时和素材条件确定优先级，先验证稳定模板任务，再扩展内容类型与团队。',
      '固定流程处理稳定任务，Agent 用于需求补充、模板选择和局部重做；定义输入输出条件并保存中间结果，避免整项重新生成。',
      '将语气、版式、素材权限与输出格式配置化；价格、面积等事实由审核数据提供，发布前保留人工确认。',
      '在相同输入下比较模型与工作流，结合人工配对评价、审核结果、耗时和成本选型；区分单步质量与完整交付效果。',
    ],
    verification:
      '来源：简历第 3–4 页。100 项配对任务包含审核返工；该耗时指标与自如工作经历中的整体设计效率指标分开呈现。',
  },
  {
    slug: 'rental-rag',
    title: '租住服务 RAG 智能客服',
    english: 'Answers with evidence.',
    category: 'Featured',
    time: '2023.02–2024.06',
    role: '项目负责人 / AI 产品经理',
    value: '通过知识治理、检索评测和错误归因，改善租住咨询的回答质量与会话解决效率。',
    sourceId: 'resume-v1.1',
    sourceSection: '简历第 4 页',
    featured: false,
    cover: '/covers/ai-connect.svg',
    coverKind: 'concept',
    stage: '3 个城市开展 8 周试点',
    background: '租住服务咨询需要可追溯、可维护的知识与业务查询支持。',
    problem: '从检索命中到回答正确，再到会话解决，需要分层定位错误与持续迭代。',
    positioning: '结合 RAG、业务查询和人工承接的租住服务智能客服。',
    strategy: [
      '推进知识治理、知识版本管理与答案依据追溯。',
      '结合离线评测和线上错误归因迭代质量。',
    ],
    architecture: [
      '审核知识 → 检索 → 重排序 → 有依据的回答，并结合业务查询与人工承接。',
      '具体模型、切片方案、检索参数与重排序选型待补充。',
    ],
    implementation: [
      '治理约 2,000 条审核知识，使用 500 条独立测试问题。',
      '简历记载：3 个城市、8 周试点覆盖 20,000 次有效咨询。',
    ],
    boundary: '负责知识治理、产品架构、评测与质量迭代；模型研发与底层基础设施实现范围待补充。',
    metrics: [
      {
        value: '76% → 90%',
        label: 'Hit@5',
        context: '500 条独立测试问题，命中定义待补充',
        sourceId: 'resume-v1.1',
      },
      {
        value: '72% → 88%',
        label: '回答正确率',
        context: '评分规则与评审方式待补充',
        sourceId: 'resume-v1.1',
      },
      {
        value: '58% → 74%',
        label: '会话解决率',
        context: '20,000 次有效咨询；解决定义为用户确认且 72 小时内无同问题重复求助。',
        sourceId: 'resume-v1.1',
      },
      {
        value: '下降 28%',
        label: '每次已解决会话综合成本',
        context: '成本组成及对照周期待补充',
        sourceId: 'resume-v1.1',
      },
    ],
    business: [],
    media: [],
    demo: '',
    github: '',
    relatedLinks: [],
    decisions: [
      '按频次、风险和资料条件选取首期任务，先辅助坐席，再开放限定自助场景。',
      '政策回答要求来源支持，条件不完整先澄清，资料不足转人工；实时订单状态通过业务查询获得。',
      '将失败分为知识缺失、检索偏差、生成错误和流程问题，分别调整知识、检索、提示与澄清。',
    ],
    verification:
      '来源：简历第 4 页。以简历“3 个城市、8 周试点”为准；说明中的“8 个团队”尚未获得简历支持，暂不展示。',
  },
  {
    slug: 'bedside-ai',
    title: '个人床边 AI 助手硬件',
    english: 'Quiet intelligence, close at hand.',
    category: 'AI Lab',
    time: '2026.10–至今',
    role: '个人 AI Builder',
    value: '探索低打扰的硬件入口，让现场确认、动作反馈与真实设备状态形成可理解的交互。',
    sourceId: 'resume-v1.1',
    sourceSection: '简历第 3、5 页',
    featured: false,
    cover: '/covers/intelligent-living.svg',
    coverKind: 'concept',
    stage: '已有可演示原型；真实设备验证计划待补充',
    background: '个人 AI Native 软硬件实验室项目。',
    problem: '探索低打扰交互、现场确认和执行结果反馈在床边场景中的适用性。',
    positioning: '个人原型与研究实践，不作为成熟商业产品展示。',
    strategy: ['研究多模态感知、传感数据、环境联动与动作反馈。'],
    architecture: ['技术实现、硬件清单、实际模型和传感数据链路待补充。'],
    implementation: ['据本轮说明，已有可演示原型。', '真实设备状态与执行结果的验证计划待补充。'],
    boundary: '个人 AI Builder 实践；具体已实现功能与计划功能待逐项划分。',
    metrics: [],
    business: [],
    media: [],
    demo: '',
    github: '',
    relatedLinks: [],
    decisions: [],
    verification:
      '来源：简历第 3、5 页，确认已有可演示原型。具体设备、代码、演示链接和验证记录待补充。',
  },
  {
    slug: 'ai-connect',
    title: 'AI智联',
    english: 'Connected intelligence.',
    category: 'Client Projects',
    time: '待更新',
    role: '职责待最新资料确认',
    value: 'Hotel AI / Client Projects · 客户需求、产品方案与交付状态待更新。',
    sourceId: 'brief-v1.1',
    sourceSection: '四 / 项目 G',
    featured: false,
    cover: '/covers/ai-connect.svg',
    coverKind: 'concept',
    stage: '待更新：上线及交付状态未提供最新证据',
    background: '酒店 AI 客户项目，保留已有项目资产。',
    problem: '客户原始需求待补充。',
    positioning: 'Hotel AI / Client Projects',
    strategy: ['本人主导的产品方案待补充。'],
    architecture: ['研发技术方案与实际实现状态待补充。'],
    implementation: ['实际交付成果与验收材料待补充。'],
    boundary: '客户需求、本人产品方案、研发实现与实际交付分别记录，不能相互替代。',
    metrics: [],
    business: [],
    media: [],
    demo: '',
    github: '',
    relatedLinks: [],
    decisions: [],
    verification: '本轮未提供项目级客户数据、合同分配或最新上线证明。',
  },
  {
    slug: 'ai-meeting',
    title: 'AI办会助手',
    english: 'Meet with purpose.',
    category: 'Client Projects',
    time: '待更新',
    role: '职责待最新资料确认',
    value: 'Hotel AI / Client Projects · 客户需求、产品方案与交付状态待更新。',
    sourceId: 'brief-v1.1',
    sourceSection: '四 / 项目 G',
    featured: false,
    cover: '/covers/ai-meeting.svg',
    coverKind: 'concept',
    stage: '待更新：上线及交付状态未提供最新证据',
    background: '酒店 AI 客户项目，保留已有项目资产。',
    problem: '客户原始需求待补充。',
    positioning: 'Hotel AI / Client Projects',
    strategy: ['本人主导的产品方案待补充。'],
    architecture: ['研发技术方案与实际实现状态待补充。'],
    implementation: ['实际交付成果与验收材料待补充。'],
    boundary: '客户需求、本人产品方案、研发实现与实际交付分别记录，不能相互替代。',
    metrics: [],
    business: [],
    media: [],
    demo: '',
    github: '',
    relatedLinks: [],
    decisions: [],
    verification: '本轮未提供项目级客户数据、合同分配或最新上线证明。',
  },
  {
    slug: 'global-agent',
    title: '海外官网与AI Agent',
    english: 'Beyond boundaries.',
    category: 'Client Projects',
    time: '待更新',
    role: '职责待最新资料确认',
    value: 'Hotel AI / Client Projects · 客户需求、产品方案与交付状态待更新。',
    sourceId: 'brief-v1.1',
    sourceSection: '四 / 项目 G',
    featured: false,
    cover: '/covers/global-agent.svg',
    coverKind: 'concept',
    stage: '待更新：上线及交付状态未提供最新证据',
    background: '酒店 AI 客户项目，保留已有项目资产。',
    problem: '客户原始需求待补充。',
    positioning: 'Hotel AI / Client Projects',
    strategy: ['本人主导的产品方案待补充。'],
    architecture: ['研发技术方案与实际实现状态待补充。'],
    implementation: ['实际交付成果与验收材料待补充。'],
    boundary: '客户需求、本人产品方案、研发实现与实际交付分别记录，不能相互替代。',
    metrics: [],
    business: [],
    media: [],
    demo: '',
    github: '',
    relatedLinks: [],
    decisions: [],
    verification: '本轮未提供项目级客户数据、合同分配或最新上线证明。',
  },
  {
    slug: 'ai-lab',
    title: '个人AI产品实验',
    english: 'Always in the making.',
    category: 'AI Lab',
    time: '持续探索',
    role: '个人 AI Builder',
    value: '持续记录产品问题、构建过程与实验发现。',
    sourceId: 'brief-v1.1',
    sourceSection: '四 / 项目 F 与后续扩展',
    featured: false,
    cover: '/covers/ai-lab.svg',
    coverKind: 'concept',
    stage: '实验归档 · 待补充具体记录',
    background: '保留原有个人实验入口，承艺 AI 和床边助手已建立独立案例。',
    problem: '',
    positioning: '',
    strategy: [],
    architecture: [],
    implementation: [],
    boundary: '',
    metrics: [],
    business: [],
    media: [],
    demo: '',
    github: '',
    relatedLinks: [],
    decisions: [],
    verification: '仅展示已提供的实验事实；其他实验资料待补充。',
  },
];
export const featuredWorks = works.filter((w) => w.featured);
export const getWork = (slug: string) => works.find((w) => w.slug === slug);
