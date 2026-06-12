const fallbackWords = [
  "accommodation",
  "analysis",
  "approach",
  "assessment",
  "available",
  "community",
  "consequence",
  "consistent",
  "consumer",
  "context",
  "efficient",
  "environment",
  "evidence",
  "factor",
  "finance",
  "impact",
  "individual",
  "infrastructure",
  "interpretation",
  "maintenance",
  "method",
  "policy",
  "priority",
  "process",
  "requirement",
  "research",
  "resource",
  "significant",
  "strategy",
  "sustainable",
];

const confusableWords = [
  "adaptation",
  "addition",
  "administration",
  "admission",
  "advertising",
  "allocation",
  "alternative",
  "application",
  "appointment",
  "arrangement",
  "assignment",
  "association",
  "assumption",
  "attention",
  "authority",
  "availability",
  "capacity",
  "category",
  "certificate",
  "circumstance",
  "communication",
  "comparison",
  "competition",
  "concentration",
  "conference",
  "confidence",
  "conservation",
  "construction",
  "contribution",
  "convention",
  "cooperation",
  "corporation",
  "correction",
  "curriculum",
  "definition",
  "demonstration",
  "department",
  "departure",
  "destination",
  "development",
  "difference",
  "difficulty",
  "direction",
  "discussion",
  "distribution",
  "education",
  "efficiency",
  "electricity",
  "emergency",
  "employment",
  "equipment",
  "evaluation",
  "exhibition",
  "expedition",
  "explanation",
  "foundation",
  "government",
  "improvement",
  "independence",
  "information",
  "investigation",
  "management",
  "measurement",
  "membership",
  "opportunity",
  "organisation",
  "orientation",
  "permission",
  "presentation",
  "pronunciation",
  "publication",
  "recommendation",
  "recreation",
  "registration",
  "regulation",
  "relationship",
  "reservation",
  "responsibility",
  "selection",
  "subscription",
  "temperature",
  "transportation",
];

const sampleEntries = [
  "accommodation",
  "evidence",
  "significant",
  "maintenance",
  "sustainable",
  "infrastructure",
  "assessment",
  "priority",
];

const wordNotes = {
  accommodation: {
    en: "A place where someone lives or stays, especially temporarily.",
    zh: "住处；住宿；临时居所",
  },
  analysis: {
    en: "A careful study of something in order to understand its parts, causes, or effects.",
    zh: "分析；解析",
  },
  approach: {
    en: "A way of dealing with a problem, task, or situation.",
    zh: "方法；方式；处理途径",
  },
  assessment: {
    en: "A judgement or evaluation of someone or something.",
    zh: "评估；评价；考核",
  },
  available: {
    en: "Able to be used, obtained, or reached.",
    zh: "可获得的；可使用的；有空的",
  },
  community: {
    en: "A group of people who live in the same area or share something in common.",
    zh: "社区；群体；共同体",
  },
  consequence: {
    en: "A result or effect of an action or situation.",
    zh: "结果；后果；影响",
  },
  consistent: {
    en: "Not changing in behaviour, quality, or standard over time.",
    zh: "一致的；始终如一的；稳定的",
  },
  consumer: {
    en: "A person who buys or uses goods or services.",
    zh: "消费者；用户",
  },
  context: {
    en: "The situation or background that helps explain the meaning of something.",
    zh: "背景；语境；上下文",
  },
  efficient: {
    en: "Working well without wasting time, money, or energy.",
    zh: "高效的；效率高的",
  },
  environment: {
    en: "The natural world or the conditions in which people, animals, or plants live.",
    zh: "环境；自然环境；生活条件",
  },
  evidence: {
    en: "Facts, signs, or information that help prove whether something is true.",
    zh: "证据；根据",
  },
  factor: {
    en: "One of the things that influences a situation, result, or decision.",
    zh: "因素；要素",
  },
  finance: {
    en: "The management of money, especially by organisations or governments.",
    zh: "金融；资金；财务",
  },
  impact: {
    en: "A strong effect or influence on someone or something.",
    zh: "影响；冲击；作用",
  },
  individual: {
    en: "A single person, considered separately from a group.",
    zh: "个人；个体；单独的",
  },
  infrastructure: {
    en: "The basic systems and services that a city, country, or organisation needs.",
    zh: "基础设施",
  },
  interpretation: {
    en: "An explanation of the meaning of something.",
    zh: "解释；理解；诠释",
  },
  maintenance: {
    en: "The work needed to keep something in good condition.",
    zh: "维护；保养；维修",
  },
  method: {
    en: "A planned way of doing something.",
    zh: "方法；办法",
  },
  policy: {
    en: "A plan or set of rules used by an organisation or government.",
    zh: "政策；方针；原则",
  },
  priority: {
    en: "Something that is more important than other things and should be dealt with first.",
    zh: "优先事项；重点",
  },
  process: {
    en: "A series of actions or changes that happen to achieve a result.",
    zh: "过程；流程；步骤",
  },
  requirement: {
    en: "Something that is needed or officially demanded.",
    zh: "要求；必要条件",
  },
  research: {
    en: "Detailed study of a subject in order to discover new information.",
    zh: "研究；调查",
  },
  resource: {
    en: "Something such as money, materials, time, or people that can be used.",
    zh: "资源；资料；财力",
  },
  significant: {
    en: "Important or large enough to be noticed.",
    zh: "重要的；显著的；有意义的",
  },
  strategy: {
    en: "A plan designed to achieve a long-term aim.",
    zh: "策略；战略；规划",
  },
  sustainable: {
    en: "Able to continue over time without damaging the environment or using too many resources.",
    zh: "可持续的；不破坏环境的",
  },
};

const commonWordNotes = {
  abstract: ["Existing as an idea rather than a physical thing.", "抽象的；理论上的；摘要"],
  access: ["The ability or right to enter, use, or obtain something.", "进入；使用权；获取途径"],
  accurate: ["Correct and exact, without mistakes.", "准确的；精确的"],
  acknowledge: ["To accept or admit that something is true or exists.", "承认；认可；感谢"],
  acquire: ["To get or learn something over time.", "获得；习得；取得"],
  adaptation: ["A change made so that something fits a new situation.", "适应；改编；改造"],
  addition: ["Something added to something else.", "增加；添加物；附加"],
  adequate: ["Good enough for a particular purpose.", "足够的；合格的；适当的"],
  adjacent: ["Next to or very near something.", "相邻的；毗连的"],
  adjust: ["To change something slightly to make it suitable.", "调整；适应；校准"],
  administration: ["The management or organisation of a system or institution.", "管理；行政；行政部门"],
  admission: ["Permission to enter a place or join an institution.", "准许进入；录取；承认"],
  advertising: ["The activity of promoting products or services.", "广告；广告业；宣传"],
  advocate: ["To publicly support an idea or action.", "提倡；主张；拥护者"],
  affect: ["To influence or change someone or something.", "影响；作用于"],
  agriculture: ["Farming and the production of crops or animals.", "农业；农学"],
  allocation: ["The act of giving resources or tasks to particular people or purposes.", "分配；配置；拨款"],
  alternative: ["Another possible choice or method.", "替代方案；可供选择的；另一种"],
  ambiguous: ["Having more than one possible meaning and therefore unclear.", "模棱两可的；含糊的"],
  anonymous: ["Having an unknown or unstated name.", "匿名的；无名的"],
  annual: ["Happening once every year.", "每年的；年度的；年刊"],
  anticipate: ["To expect or prepare for something before it happens.", "预期；预料；提前准备"],
  apparent: ["Easy to see or understand; seeming to be true.", "明显的；表面上的"],
  application: ["A formal request, practical use, or computer program.", "申请；应用；应用程序"],
  appointment: ["An arranged meeting or a job position.", "预约；任命；职位"],
  approximate: ["Close to the real number or amount but not exact.", "大约的；近似的"],
  arbitrary: ["Based on chance or personal choice rather than reason.", "任意的；武断的"],
  arrangement: ["A plan, agreement, or organised order.", "安排；布置；协议"],
  aspect: ["One part or feature of a situation or subject.", "方面；层面；外观"],
  assemble: ["To bring people or parts together.", "集合；组装；装配"],
  assignment: ["A task or piece of work given to someone.", "任务；作业；分配"],
  association: ["A connection between people, ideas, or organisations.", "协会；关联；联系"],
  assumption: ["Something accepted as true without proof.", "假设；假定；设想"],
  attention: ["Careful thought, interest, or notice.", "注意；关注；留心"],
  attitude: ["A way of thinking or feeling about something.", "态度；看法"],
  attribute: ["A quality or feature of someone or something.", "属性；特征；把……归因于"],
  authority: ["The power to give orders or make decisions.", "权威；权限；当局"],
  availability: ["The state of being able to be used or obtained.", "可获得性；可用性"],
  beneficial: ["Having a good or useful effect.", "有益的；有利的"],
  bias: ["A preference or unfair judgement for or against something.", "偏见；偏向；倾向"],
  capacity: ["The amount that something can hold or do.", "容量；能力；承载力"],
  category: ["A group of people or things with shared features.", "类别；种类"],
  certificate: ["An official document proving a fact or qualification.", "证书；证明"],
  clarify: ["To make something clearer or easier to understand.", "澄清；阐明"],
  coherent: ["Logical, clear, and easy to understand.", "连贯的；条理清楚的"],
  collapse: ["To fall down suddenly or fail completely.", "倒塌；崩溃；瓦解"],
  commission: ["A group given authority, or a payment for selling something.", "委员会；佣金；委托"],
  commit: ["To promise, do, or devote yourself to something.", "承诺；投入；犯下"],
  communication: ["The exchange of information or ideas.", "交流；沟通；通信"],
  comparison: ["The act of examining similarities and differences.", "比较；对比"],
  compatible: ["Able to exist or work together without problems.", "兼容的；相容的"],
  compensate: ["To pay or make up for a loss or problem.", "补偿；赔偿；弥补"],
  competition: ["A contest or rivalry between people or groups.", "竞争；比赛"],
  complex: ["Made of many connected parts and not simple.", "复杂的；综合体"],
  component: ["One part of a larger whole.", "组成部分；部件"],
  comprehensive: ["Including almost everything that is needed.", "全面的；综合的"],
  concentration: ["Careful attention or the amount of a substance in something.", "专注；集中；浓度"],
  conceive: ["To imagine, think of, or become pregnant with something.", "构想；设想；怀孕"],
  conference: ["A formal meeting for discussion.", "会议；研讨会"],
  confidence: ["Belief in ability, truth, or success.", "信心；信任；把握"],
  conservation: ["The protection of nature, resources, or old buildings.", "保护；保存；节约"],
  considerable: ["Large enough to be important or noticeable.", "相当大的；重要的"],
  constraint: ["A limit or restriction.", "限制；约束"],
  construction: ["The process of building something.", "建设；建造；建筑"],
  contemporary: ["Modern or existing at the same time.", "当代的；同时期的"],
  contribution: ["Something given or done to help achieve a result.", "贡献；捐助；促成因素"],
  controversial: ["Causing public disagreement or debate.", "有争议的"],
  convention: ["A usual way of doing something or a formal meeting.", "惯例；大会；公约"],
  cooperation: ["Working together for a shared purpose.", "合作；协作"],
  corporation: ["A large company or business organisation.", "公司；企业；法人团体"],
  correction: ["A change that makes something right or accurate.", "改正；修正；纠正"],
  crucial: ["Extremely important.", "关键的；至关重要的"],
  curriculum: ["The subjects taught in a school or course.", "课程；课程体系"],
  decline: ["To decrease or become worse; to refuse politely.", "下降；衰退；拒绝"],
  deduce: ["To reach an answer by reasoning from facts.", "推断；演绎"],
  definition: ["A statement explaining the meaning of a word or idea.", "定义；释义"],
  demonstrate: ["To show clearly by evidence or example.", "证明；展示；示范"],
  demonstration: ["A public display, explanation, or protest.", "示范；证明；游行示威"],
  department: ["A section of an organisation or government.", "部门；系；科"],
  departure: ["The act of leaving a place.", "离开；出发；背离"],
  derive: ["To come from a source or origin.", "源于；获得；推导出"],
  destination: ["The place where someone or something is going.", "目的地；终点"],
  detect: ["To discover or notice something.", "发现；察觉；检测"],
  development: ["Growth, progress, or a new event.", "发展；开发；进展"],
  difference: ["A way in which things are not the same.", "差异；不同；差别"],
  difficulty: ["A problem or something hard to do.", "困难；难题"],
  diminish: ["To become or make something smaller or less important.", "减少；降低；削弱"],
  direction: ["The way something moves, faces, or is guided.", "方向；指导；说明"],
  disbelief: ["The feeling of not believing something is true.", "不相信；怀疑"],
  discussion: ["A conversation about a subject.", "讨论；商讨"],
  distribution: ["The way something is shared, spread, or delivered.", "分配；分布；发行"],
  diverse: ["Including many different types of people or things.", "多样的；不同的"],
  domestic: ["Related to the home or to one country.", "国内的；家庭的"],
  dominate: ["To control or be the most important part.", "支配；占主导；占据优势"],
  duration: ["The length of time that something lasts.", "持续时间；期间"],
  education: ["Teaching, learning, or the system of schools and universities.", "教育；培养"],
  effect: ["A change or result caused by something.", "影响；效果；结果"],
  efficiency: ["The ability to do something without wasting resources.", "效率；效能"],
  electricity: ["A form of energy used for power, light, and heat.", "电；电力"],
  eliminate: ["To remove or get rid of something.", "消除；淘汰；排除"],
  emerge: ["To appear, become known, or come out.", "出现；浮现；显露"],
  emergency: ["A serious unexpected situation needing immediate action.", "紧急情况；突发事件"],
  employment: ["Paid work or the act of giving someone a job.", "就业；雇用；工作"],
  encounter: ["To meet or experience something unexpectedly.", "遇到；遭遇；邂逅"],
  enhance: ["To improve the quality, value, or strength of something.", "提高；增强；改善"],
  enormous: ["Extremely large.", "巨大的；庞大的"],
  ensure: ["To make certain that something happens.", "确保；保证"],
  equipment: ["The tools or machines needed for a purpose.", "设备；器材；装备"],
  equivalent: ["Equal in value, meaning, or function.", "等同的；等价物"],
  establish: ["To create, start, or prove something.", "建立；确立；证实"],
  estimate: ["To judge the amount or value roughly.", "估计；估算"],
  evaluation: ["A judgement about value, quality, or importance.", "评估；评价"],
  exceed: ["To be greater than a limit or amount.", "超过；超出"],
  exhibition: ["A public display of objects, art, or information.", "展览；展示"],
  expand: ["To become or make something larger.", "扩大；扩展"],
  expedition: ["An organised journey for a particular purpose.", "远征；考察；探险"],
  exploit: ["To use something for advantage, sometimes unfairly.", "利用；剥削；开发"],
  explanation: ["A statement that makes something clear.", "解释；说明"],
  exposure: ["Contact with something or being made known publicly.", "暴露；接触；曝光"],
  external: ["Outside or coming from outside.", "外部的；外来的"],
  facilitate: ["To make an action or process easier.", "促进；使便利"],
  feature: ["An important or noticeable part.", "特征；特点；以……为特色"],
  foundation: ["The base or basic idea on which something is built.", "基础；地基；基金会"],
  fundamental: ["Basic, essential, or very important.", "基本的；根本的"],
  gender: ["The social or biological category of male, female, or other identities.", "性别"],
  generate: ["To produce or create something.", "产生；生成；引发"],
  government: ["The group or system that controls a country or area.", "政府；治理"],
  grubby: ["Dirty or unpleasant; sometimes morally questionable.", "肮脏的；邋遢的；不光彩的"],
  hypothesis: ["An idea suggested as a possible explanation.", "假设；假说"],
  illustrate: ["To explain or show something using examples or pictures.", "说明；阐明；举例说明"],
  imply: ["To suggest something without saying it directly.", "暗示；意味着"],
  improvement: ["A change that makes something better.", "改善；提高；改进"],
  independence: ["Freedom from control by others.", "独立；自主"],
  indicate: ["To show, point out, or suggest something.", "表明；指出；显示"],
  inevitable: ["Certain to happen and impossible to avoid.", "不可避免的；必然的"],
  infer: ["To form an opinion from evidence rather than direct statements.", "推断；推论"],
  information: ["Facts or knowledge about something.", "信息；资料"],
  innovation: ["A new idea, method, or invention.", "创新；革新"],
  insight: ["A clear understanding of something.", "洞察；深刻理解"],
  interact: ["To communicate or have an effect on each other.", "互动；相互作用"],
  internal: ["Inside something or related to the inside.", "内部的；内在的"],
  interpretation: ["An explanation of the meaning of something.", "解释；理解；诠释"],
  investigation: ["A careful search or examination to discover facts.", "调查；研究"],
  inquisitive: ["Curious and wanting to know many things.", "好奇的；爱打听的"],
  justify: ["To give a good reason for something.", "证明……合理；为……辩护"],
  legislation: ["Laws or the process of making laws.", "立法；法律"],
  management: ["The control or organisation of work, people, or resources.", "管理；经营；管理层"],
  measurement: ["The act or result of finding size, amount, or degree.", "测量；尺寸；衡量"],
  membership: ["The state of belonging to a group.", "会员资格；成员身份"],
  migrate: ["To move from one place to another, often for work or living.", "迁移；移居；迁徙"],
  monitor: ["To watch or check something over time.", "监测；监督；显示器"],
  notion: ["An idea, belief, or understanding.", "概念；观念；想法"],
  obtain: ["To get something, especially through effort.", "获得；取得"],
  onward: ["Moving forward or continuing after a point.", "向前；继续的；往后的"],
  opportunity: ["A chance to do something.", "机会；时机"],
  organisation: ["A group arranged for a particular purpose.", "组织；机构"],
  orientation: ["Training or information for a new situation; direction.", "方向；入门培训；定位"],
  outcome: ["The final result of an action or process.", "结果；成果"],
  overall: ["Considering everything together.", "总体的；全面的"],
  permission: ["Official approval to do something.", "许可；允许"],
  perspective: ["A way of thinking about something.", "视角；观点；透视"],
  phenomenon: ["A fact or event that can be observed.", "现象"],
  presentation: ["A talk, display, or formal introduction of information.", "展示；陈述；演讲"],
  presume: ["To suppose something is true without full proof.", "假定；推定；擅自做"],
  previous: ["Existing or happening before the present time.", "以前的；先前的"],
  primary: ["Main or most important.", "主要的；首要的；初级的"],
  pronunciation: ["The way a word is spoken.", "发音；读法"],
  proportion: ["A part, share, or relationship in size or amount.", "比例；部分"],
  publication: ["The act of making information public or a printed work.", "出版；出版物；发表"],
  pursue: ["To follow or try to achieve something.", "追求；从事；追赶"],
  quota: ["A fixed number or amount that is officially allowed or required.", "配额；限额"],
  quotas: ["Fixed numbers or amounts that are officially allowed or required.", "配额；限额"],
  rational: ["Based on reason and logic.", "理性的；合理的"],
  recreation: ["Activities done for enjoyment and relaxation.", "娱乐；消遣；休闲活动"],
  recommendation: ["Advice about what should be done.", "建议；推荐"],
  recover: ["To return to a normal or healthy state.", "恢复；康复；重新获得"],
  registration: ["The act of officially recording a name or information.", "登记；注册"],
  regulation: ["An official rule or the act of controlling something.", "规定；监管；调节"],
  relationship: ["A connection between people, things, or ideas.", "关系；联系"],
  relevant: ["Closely connected with the subject being discussed.", "相关的；切题的"],
  reluctant: ["Not willing or eager to do something.", "不情愿的；勉强的"],
  reservation: ["An arrangement to keep something for later use.", "预订；保留；疑虑"],
  resolve: ["To solve a problem or make a firm decision.", "解决；决心；决定"],
  responsibility: ["A duty or something someone is expected to do.", "责任；职责"],
  retain: ["To keep or continue to have something.", "保留；保持"],
  reveal: ["To make something known or visible.", "揭示；透露；显示"],
  rigid: ["Stiff, strict, or not easy to change.", "僵硬的；严格的；不灵活的"],
  scenario: ["A possible situation or sequence of events.", "情境；设想；方案"],
  scope: ["The range or extent of something.", "范围；余地"],
  selection: ["The act or result of choosing something.", "选择；选拔；选集"],
  shift: ["To move or change from one position or state to another.", "转变；移动；轮班"],
  specify: ["To state something clearly and exactly.", "明确说明；具体指定"],
  stable: ["Not likely to change, move, or fail.", "稳定的；稳固的"],
  stagger: ["To walk unsteadily or shock someone greatly.", "蹒跚；使震惊；错开"],
  steady: ["Firm, regular, and not changing suddenly.", "稳定的；平稳的；稳步的"],
  subscription: ["An arrangement to receive something regularly by paying.", "订阅；订购；会费"],
  substitute: ["A person or thing used instead of another.", "替代物；代替；替换"],
  sufficient: ["Enough for a particular purpose.", "足够的；充分的"],
  temperature: ["The degree of heat or cold.", "温度；气温"],
  temporary: ["Lasting for only a short time.", "临时的；暂时的"],
  theory: ["An explanation or set of ideas about something.", "理论；学说"],
  transfer: ["To move someone or something from one place to another.", "转移；调动；转让"],
  transportation: ["The movement of people or goods from one place to another.", "交通运输；运输"],
  trend: ["A general direction of change or development.", "趋势；潮流"],
  valid: ["Acceptable, logical, or legally effective.", "有效的；合理的；有根据的"],
  vegetarian: ["Not containing meat, or a person who does not eat meat.", "素食的；素食者"],
  vague: ["Not clear, detailed, or specific.", "模糊的；不明确的；含糊的"],
  vary: ["To be different or to change.", "变化；不同；使多样化"],
  voluntary: ["Done willingly and not because of force.", "自愿的；志愿的"],
};

const listeningWordNotes = {
  acre: ["A unit for measuring land area.", "英亩；土地面积单位"],
  accessory: ["An extra item used with clothing, equipment, or a device.", "配件；附件；装饰品"],
  alloy: ["A metal made by mixing two or more metals or elements.", "合金"],
  anaemia: ["A medical condition caused by a lack of healthy red blood cells.", "贫血"],
  ancestor: ["A person in your family who lived a long time ago.", "祖先；祖宗"],
  antique: ["Old and often valuable because of age or rarity.", "古董；古老的"],
  apprenticeship: ["A period of training with a skilled worker or organisation.", "学徒期；学徒训练"],
  astronomical: ["Related to astronomy; extremely large.", "天文学的；极大的"],
  atmosphere: ["The air around the Earth or the mood of a place.", "大气；气氛；氛围"],
  attic: ["A room or space just below the roof of a house.", "阁楼；顶楼储藏室"],
  badge: ["A small sign worn to show identity, rank, or membership.", "徽章；证章；标识牌"],
  banquet: ["A formal large meal for many people.", "宴会；盛宴"],
  barge: ["A long flat boat used on rivers or canals.", "驳船；平底货船"],
  beacon: ["A light or signal used to guide or warn people.", "信标；灯塔；指示灯"],
  brewery: ["A place where beer is made.", "啤酒厂"],
  cardio: ["Exercise that strengthens the heart and lungs.", "有氧运动；心肺训练；心脏相关的"],
  celsius: ["A temperature scale in which water freezes at 0 degrees and boils at 100 degrees.", "摄氏度"],
  celestial: ["Related to the sky, stars, or heaven.", "天体的；天空的"],
  chamber: ["A room used for a particular purpose; a compartment.", "房间；会议厅；腔室"],
  cholesterol: ["A fatty substance in the blood that can affect heart health.", "胆固醇"],
  chronological: ["Arranged in the order in which events happened.", "按时间顺序的"],
  compartment: ["A separate section or space within something.", "隔间；分隔舱；车厢"],
  conservatory: ["A glass room for plants or a school for music and arts.", "温室；玻璃暖房；音乐学院"],
  creek: ["A small stream or narrow area of water.", "小溪；溪流；海湾"],
  cricket: ["An outdoor bat-and-ball game; also a small insect.", "板球；蟋蟀"],
  dementia: ["A serious decline in memory and thinking ability.", "痴呆；失智症"],
  dopamine: ["A brain chemical linked with movement, motivation, and reward.", "多巴胺"],
  dredge: ["To remove mud or material from the bottom of water.", "疏浚；清淤；挖掘"],
  eligible: ["Allowed or qualified to do or receive something.", "有资格的；符合条件的"],
  exotic: ["Unusual and interesting because it comes from a distant place.", "异国的；奇异的"],
  factual: ["Based on facts rather than opinions.", "事实的；真实的"],
  famine: ["A serious shortage of food over a large area.", "饥荒"],
  fiddle: ["A violin; to adjust or handle something in a restless way.", "小提琴；摆弄；篡改"],
  filtered: ["Passed through a filter to remove unwanted substances.", "过滤过的；筛选过的"],
  fracture: ["A crack or break in a bone or hard material.", "骨折；断裂；裂缝"],
  frostbite: ["Injury to skin or body tissue caused by extreme cold.", "冻伤"],
  gauge: ["To measure or judge the amount, level, or quality of something.", "测量；估计；量表；仪表"],
  greece: ["A country in south-eastern Europe.", "希腊"],
  hectares: ["Units for measuring land area; one hectare is 10,000 square metres.", "公顷"],
  hibernation: ["A state of sleeping through winter to save energy.", "冬眠"],
  ingest: ["To take food, drink, or another substance into the body.", "摄入；咽下"],
  intact: ["Complete and not damaged.", "完整无损的；完好无缺的"],
  intricate: ["Having many small parts or details.", "复杂精细的；错综复杂的"],
  jaw: ["The bones in the face that hold the teeth.", "下巴；颌；颚"],
  lizard: ["A small reptile with a long body and tail.", "蜥蜴"],
  luxurious: ["Very comfortable, expensive, and high quality.", "奢华的；豪华的"],
  manure: ["Animal waste used to make soil better for plants.", "粪肥；肥料"],
  metabolic: ["Related to the chemical processes in living bodies.", "新陈代谢的；代谢的"],
  myths: ["Traditional stories or widely believed but false ideas.", "神话；迷思；虚构观念"],
  neuron: ["A nerve cell that carries information in the brain and body.", "神经元"],
  "on the bend": ["At or near a curve in a road, river, or path.", "在弯道处；在转弯处"],
  ornament: ["An object used for decoration.", "装饰品；装饰物"],
  outrage: ["A strong feeling of anger and shock.", "愤怒；义愤；暴行"],
  owl: ["A night bird with large eyes.", "猫头鹰"],
  pads: ["Soft pieces of material used for protection, support, or writing.", "垫子；护垫；便签本"],
  pastries: ["Small baked foods made with pastry, often sweet.", "油酥点心；糕点"],
  patio: ["A paved outdoor area next to a house.", "露台；庭院"],
  patrol: ["To watch an area regularly to keep it safe.", "巡逻；巡查"],
  peat: ["Dark soil-like material made from partly decayed plants.", "泥炭"],
  perch: ["To sit or rest on a high or narrow place.", "栖息；停留；栖木"],
  periodical: ["A magazine or journal published regularly.", "期刊；定期刊物"],
  pimpled: ["Covered with small raised spots.", "有小疙瘩的；有丘疹的"],
  plough: ["A farm tool used to turn over soil.", "犁；耕地"],
  plunge: ["To fall or move suddenly downward or into something.", "猛跌；骤降；投入"],
  pod: ["A seed case of a plant or a small enclosed unit.", "豆荚；荚；舱"],
  pottery: ["Objects made from baked clay.", "陶器；陶艺"],
  predator: ["An animal that hunts other animals for food.", "捕食者；掠食动物"],
  predate: ["To exist or happen before something else.", "早于；先于"],
  prey: ["An animal hunted and eaten by another animal.", "猎物；被捕食者"],
  probationary: ["Relating to a trial period before a job or position becomes permanent.", "试用期的；见习的"],
  prosecute: ["To officially accuse someone of a crime in court.", "起诉；检举"],
  psychological: ["Related to the mind and emotions.", "心理的；心理学的"],
  rucksack: ["A bag carried on the back.", "帆布背包；旅行背包"],
  ramp: ["A slope used instead of stairs or for moving vehicles.", "坡道；斜坡"],
  rectify: ["To correct something that is wrong.", "纠正；改正"],
  revert: ["To return to an earlier state or condition.", "恢复；回复；回到"],
  rodent: ["A small animal such as a rat, mouse, or squirrel.", "啮齿动物"],
  sanctuary: ["A safe place, especially for people, animals, or plants.", "庇护所；保护区；圣所"],
  sap: ["Liquid that carries food through a plant.", "树液；汁液"],
  saturate: ["To make something completely wet or full.", "使饱和；浸透"],
  scarecrow: ["A figure put in fields to frighten birds away.", "稻草人"],
  slander: ["A false spoken statement that damages someone's reputation.", "诽谤；口头诋毁"],
  solitude: ["The state of being alone, often by choice.", "独处；孤独"],
  solidarity: ["Unity and support among people with the same interests.", "团结；一致支持"],
  spatial: ["Related to space, position, or area.", "空间的；位置的"],
  spine: ["The row of bones down the back; the backbone.", "脊柱；书脊"],
  sterling: ["British money; also excellent in quality.", "英镑；英国货币；优秀的"],
  stitched: ["Sewn with thread.", "缝合的；缝制的"],
  stray: ["To move away from the correct place or path.", "走失的；流浪的；偏离"],
  swoop: ["To move suddenly downward through the air.", "俯冲；猛扑"],
  sway: ["To move slowly from side to side or influence someone.", "摇摆；影响；支配"],
  syrup: ["A thick sweet liquid.", "糖浆"],
  tangible: ["Real and able to be touched or clearly understood.", "有形的；切实的"],
  timid: ["Shy and not confident.", "胆怯的；羞怯的"],
  toddler: ["A young child who has just learned to walk.", "学步儿童"],
  treadmill: ["An exercise machine for walking or running indoors.", "跑步机"],
  unesco: ["The United Nations agency for education, science, and culture.", "联合国教科文组织"],
  utensil: ["A tool used for cooking, serving, or eating food.", "器具；用具；餐具"],
  vascular: ["Related to blood vessels.", "血管的；脉管的"],
  vegan: ["A person who eats no animal products; also related to such food.", "纯素者；纯素的"],
  vouchers: ["Documents or codes that can be exchanged for goods, services, or discounts.", "代金券；优惠券；凭证"],
  warden: ["A person responsible for supervising a place or group.", "管理员；看守人；监管员"],
};

const readingWordNotes = {
  acoustics: ["The qualities of a room or space that affect how sound is heard.", "声学；音响效果"],
  annihilate: ["To destroy something completely.", "彻底毁灭；歼灭"],
  archaic: ["Very old or old-fashioned.", "古老的；过时的"],
  breach: ["A break in a rule, agreement, or wall.", "违反；破坏；缺口"],
  conducive: ["Helping to make something happen.", "有助于……的；有益于……的"],
  condolence: ["An expression of sympathy after someone's death or misfortune.", "慰问；吊唁；哀悼"],
  consecutive: ["Following one after another without interruption.", "连续的；接连的"],
  constituent: ["One part of a whole; a voter represented by an official.", "组成部分；选民；构成的"],
  contend: ["To argue, claim, or compete.", "声称；争论；竞争"],
  corrode: ["To gradually destroy metal or weaken something.", "腐蚀；侵蚀；损害"],
  curdle: ["To become thick or lumpy, especially milk.", "凝结；变质"],
  decrepit: ["Old, weak, and in poor condition.", "破旧的；衰老的"],
  defiance: ["Open refusal to obey someone or something.", "违抗；蔑视；挑战"],
  delirium: ["A confused mental state, often caused by illness.", "谵妄；神志不清；极度兴奋"],
  dissonance: ["A lack of agreement or harmony, especially in sound or ideas.", "不和谐音；不一致；冲突"],
  distend: ["To swell or expand because of pressure from inside.", "膨胀；胀大"],
  dormant: ["Not active but able to become active later.", "休眠的；潜伏的；不活跃的"],
  ensemble: ["A group of musicians, actors, or things forming a whole.", "合奏团；整体；全套"],
  exacerbate: ["To make a problem or bad situation worse.", "使恶化；加剧"],
  excrement: ["Solid waste from the body.", "粪便；排泄物"],
  exhilarate: ["To make someone feel very happy and excited.", "使兴奋；使振奋"],
  exuberant: ["Full of energy, excitement, and happiness.", "精力充沛的；热情洋溢的"],
  falter: ["To become weaker or less certain; to hesitate.", "动摇；踌躇；支吾"],
  foam: ["A mass of small bubbles on liquid or another surface.", "泡沫；泡沫材料"],
  forte: ["A thing someone does especially well.", "强项；特长"],
  fret: ["To worry or be anxious.", "担忧；烦恼"],
  glamour: ["An attractive and exciting quality.", "魅力；迷人光彩"],
  indemnity: ["Protection or payment for loss or damage.", "赔偿；补偿；保障"],
  integral: ["Necessary and important as part of a whole.", "不可或缺的；完整的；组成的"],
  interrogate: ["To ask someone many questions in a formal or forceful way.", "审问；盘问；询问"],
  lament: ["To express sadness or regret.", "哀叹；悲悼；惋惜"],
  lateral: ["Related to the side or moving sideways.", "侧面的；横向的"],
  lurk: ["To wait or move secretly, often with bad intent.", "潜伏；埋伏；暗藏"],
  martyr: ["Someone who suffers or dies for a belief or cause.", "烈士；殉道者"],
  meek: ["Quiet, gentle, and unwilling to argue.", "温顺的；谦恭的"],
  molest: ["To attack, bother, or abuse someone.", "骚扰；侵犯；猥亵"],
  mutter: ["To speak quietly and unclearly.", "低声抱怨；咕哝"],
  nautical: ["Related to ships, sailing, or the sea.", "航海的；船舶的"],
  notary: ["An official who confirms legal documents.", "公证人；公证员"],
  nuisance: ["Someone or something that causes annoyance or trouble.", "讨厌的人或事；麻烦"],
  obnoxious: ["Very unpleasant or offensive.", "令人讨厌的；可憎的"],
  obscure: ["Not well known or difficult to understand.", "晦涩的；不知名的；模糊的"],
  oblivious: ["Not aware of something.", "未察觉的；茫然不知的"],
  obstruction: ["Something that blocks movement, progress, or view.", "阻碍；障碍物；妨碍"],
  paradoxical: ["Seeming impossible or contradictory but perhaps true.", "矛盾的；似非而是的"],
  perimeter: ["The outer edge or boundary of an area.", "周长；边界；外围"],
  persecute: ["To treat someone cruelly because of their beliefs or identity.", "迫害；虐待"],
  perspire: ["To sweat.", "出汗"],
  pertain: ["To relate to or be connected with something.", "有关；属于；适用"],
  pertinent: ["Directly related to the subject being considered.", "相关的；切题的"],
  pester: ["To annoy someone repeatedly.", "纠缠；烦扰"],
  pinnacle: ["The most successful or highest point of something.", "顶峰；巅峰；顶点"],
  piston: ["A moving part in an engine or pump.", "活塞"],
  plaintive: ["Sounding sad or mournful.", "哀伤的；凄凉的"],
  pompous: ["Too serious and self-important.", "自大的；浮夸的"],
  precarious: ["Not safe or stable; likely to fail or fall.", "不稳定的；危险的"],
  preclude: ["To prevent something from happening.", "阻止；排除"],
  preliminary: ["Happening before the main action or event.", "初步的；预备的"],
  prelude: ["An introduction to something more important.", "序幕；前奏"],
  prerogative: ["A special right or privilege.", "特权；优先权"],
  preside: ["To be in charge of a meeting or event.", "主持；主管"],
  pretentious: ["Trying to seem more important or impressive than one really is.", "自命不凡的；做作的"],
  prolific: ["Producing a lot of work, results, or offspring.", "多产的；成果丰硕的"],
  prone: ["Likely to do or suffer from something; lying face down.", "易于……的；俯卧的"],
  propagate: ["To spread an idea or make plants or organisms reproduce.", "传播；繁殖"],
  protract: ["To make something last longer.", "延长；拖延"],
  protrude: ["To stick out from a surface.", "突出；伸出"],
  rampant: ["Spreading quickly in a bad or uncontrolled way.", "猖獗的；泛滥的"],
  ravage: ["To badly damage or destroy something.", "严重破坏；蹂躏"],
  recital: ["A performance of music, dance, or spoken work.", "独奏会；朗诵会"],
  recur: ["To happen again.", "复发；重现；再次发生"],
  regurgitate: ["To bring swallowed food back up; repeat without understanding.", "反刍；回流；机械重复"],
  reimburse: ["To pay someone back for money they have spent.", "报销；偿还"],
  relinquish: ["To give up or let go of something.", "放弃；交出"],
  relentless: ["Continuing without becoming weaker or stopping.", "持续强烈的；不懈的；无情的"],
  rendezvous: ["An arranged meeting or meeting place.", "约会；会合地点"],
  repent: ["To feel sorry for doing something wrong.", "悔悟；后悔"],
  repertoire: ["All the skills, songs, or works someone can perform or use.", "全部节目；全部技能；保留剧目"],
  reproach: ["To criticize someone for doing something wrong.", "责备；责怪"],
  resentment: ["A feeling of anger because something seems unfair.", "怨恨；愤懑"],
  resent: ["To feel angry because something seems unfair.", "怨恨；愤恨"],
  resonance: ["A deep clear sound or a strong emotional effect.", "共鸣；回响；反响"],
  respire: ["To breathe.", "呼吸"],
  retention: ["The ability or act of keeping something.", "保留；保持；记忆力"],
  reticent: ["Unwilling to speak much or reveal thoughts.", "沉默寡言的；不愿透露的"],
  revenge: ["Action taken to hurt someone in return for harm.", "报复；复仇"],
  revolt: ["To rebel or feel strong disgust.", "反抗；起义；使反感"],
  scrupulous: ["Very careful to be honest and morally correct.", "谨慎的；一丝不苟的；正直的"],
  scorn: ["A strong feeling that someone or something is worthless.", "轻蔑；鄙视"],
  scrap: ["A small piece left over; to get rid of a plan.", "碎片；废料；废弃"],
  shaft: ["A long narrow part or passage.", "杆；轴；竖井"],
  sluggish: ["Slow and lacking energy.", "缓慢的；迟钝的；萧条的"],
  sporadic: ["Happening sometimes but not regularly.", "零星的；偶发的"],
  strenuous: ["Needing a lot of effort or energy.", "费力的；艰苦的"],
  superfluous: ["More than is needed.", "多余的；过剩的"],
  supersede: ["To replace something older or less useful.", "取代；替代"],
  tacit: ["Understood without being said directly.", "默许的；心照不宣的"],
  terrestrial: ["Related to Earth or land rather than sea or sky.", "陆地的；地球的"],
  terse: ["Using few words, sometimes seeming rude.", "简短生硬的；简洁的"],
  thesaurus: ["A book or tool that lists words with similar meanings.", "同义词词典"],
  translucent: ["Allowing light through but not clear images.", "半透明的"],
  treatise: ["A long serious written work about a subject.", "论文；专著"],
  tweezers: ["A small tool for picking up very small objects or hairs.", "镊子"],
  underneath: ["Under or below something.", "在……下面；底下"],
  versatile: ["Able to do many different things well.", "多才多艺的；多用途的"],
  wretched: ["Very unhappy, unpleasant, or in bad condition.", "悲惨的；可怜的；糟糕的"],
};

[commonWordNotes, listeningWordNotes, readingWordNotes].forEach((noteSource) => {
  Object.entries(noteSource).forEach(([word, note]) => {
    if (!wordNotes[word]) {
      wordNotes[word] = { en: note[0], zh: note[1] };
    }
  });
});

const BOOK_STORAGE_KEY = "ieltsTrainerFavoriteBookV1";
const USER_NOTES_STORAGE_KEY = "ieltsTrainerUserNotesV1";
const MODE_INPUT_STORAGE_KEY = "ieltsTrainerModeInputsV1";
const CORRECT_STORAGE_KEY = "ieltsTrainerCorrectBookV1";
const TRAINING_SNAPSHOT_STORAGE_KEY = "ieltsTrainerSnapshotV1";
const bookModes = ["listening", "dictation", "reading"];
const modeRadios = [...document.querySelectorAll('input[name="quizMode"]')];
const wordInput = document.querySelector("#wordInput");
const optionCount = document.querySelector("#optionCount");
const rateControl = document.querySelector("#rateControl");
const voiceSelect = document.querySelector("#voiceSelect");
const autoSpeak = document.querySelector("#autoSpeak");
const skipFavoriteWords = document.querySelector("#skipFavoriteWords");
const startButton = document.querySelector("#startButton");
const saveTrainingButton = document.querySelector("#saveTrainingButton");
const cleanKnownButton = document.querySelector("#cleanKnownButton");
const sampleButton = document.querySelector("#sampleButton");
const saveStatus = document.querySelector("#saveStatus");
const scoreBox = document.querySelector("#scoreBox");
const scoreValue = document.querySelector("#scoreValue");
const progressBar = document.querySelector("#progressBar");
const listeningStage = document.querySelector("#listeningStage");
const roundState = document.querySelector("#roundState");
const blankSentence = document.querySelector("#blankSentence");
const choices = document.querySelector("#choices");
const answerForm = document.querySelector("#answerForm");
const answerInput = document.querySelector("#answerInput");
const checkButton = document.querySelector("#checkButton");
const listenButton = document.querySelector("#listenButton");
const nextButton = document.querySelector("#nextButton");
const reviewPanel = document.querySelector("#reviewPanel");
const voiceStatus = document.querySelector("#voiceStatus");
const quizTitle = document.querySelector("#quiz-title");
const bookTabs = [...document.querySelectorAll("[data-book-tab]")];
const bookCounts = [...document.querySelectorAll("[data-book-count]")];
const bookList = document.querySelector("#bookList");
const bookReviewButton = document.querySelector("#bookReviewButton");
const exportDataButton = document.querySelector("#exportDataButton");
const importDataButton = document.querySelector("#importDataButton");

const state = {
  mode: "listening",
  bookMode: "listening",
  favoriteBook: loadFavoriteBook(),
  correctBook: loadCorrectBook(),
  userNotes: loadUserNotes(),
  modeInputs: loadModeInputs(),
  deck: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  retryCurrent: false,
  heard: false,
  isSpeaking: false,
  speechRunId: 0,
  results: [],
  voices: [],
  serverVoices: [],
  currentAudio: null,
  savedSessions: loadSavedSessions(),
  definitionServiceAvailable: true,
  isReviewingWrong: false,
};

function getSelectedMode() {
  return modeRadios.find((radio) => radio.checked)?.value || "listening";
}

function getModeLabel(mode = state.mode) {
  if (mode === "dictation") return "填空模式";
  if (mode === "reading") return "阅读模式";
  return "听力模式";
}

function createEmptyBook() {
  return {
    listening: {},
    dictation: {},
    reading: {},
  };
}

function mergeBookByTimestamp(primary, secondary, timestampKey) {
  return bookModes.reduce((book, mode) => {
    const primaryItems = primary?.[mode] && typeof primary[mode] === "object" ? primary[mode] : {};
    const secondaryItems = secondary?.[mode] && typeof secondary[mode] === "object" ? secondary[mode] : {};
    const merged = { ...secondaryItems, ...primaryItems };

    Object.entries(secondaryItems).forEach(([key, item]) => {
      const existing = merged[key];
      if ((item?.[timestampKey] || 0) > (existing?.[timestampKey] || 0)) {
        merged[key] = item;
      }
    });

    book[mode] = merged;
    return book;
  }, createEmptyBook());
}

function loadFavoriteBook() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(BOOK_STORAGE_KEY) || "{}");
    return bookModes.reduce((book, mode) => {
      book[mode] = saved && typeof saved[mode] === "object" && saved[mode] ? saved[mode] : {};
      return book;
    }, createEmptyBook());
  } catch {
    return createEmptyBook();
  }
}

function saveFavoriteBook() {
  try {
    window.localStorage.setItem(BOOK_STORAGE_KEY, JSON.stringify(state.favoriteBook));
  } catch {
    return false;
  }
  return true;
}

function loadCorrectBook() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(CORRECT_STORAGE_KEY) || "{}");
    return bookModes.reduce((book, mode) => {
      book[mode] = saved && typeof saved[mode] === "object" && saved[mode] ? saved[mode] : {};
      return book;
    }, createEmptyBook());
  } catch {
    return createEmptyBook();
  }
}

function saveCorrectBook() {
  try {
    window.localStorage.setItem(CORRECT_STORAGE_KEY, JSON.stringify(state.correctBook));
  } catch {
    return false;
  }
  return true;
}

function updateCorrectBook(entry, mode, isCorrect, response) {
  if (!isCorrect || !bookModes.includes(mode)) return;

  const key = normaliseKey(entry.word);
  if (!key) return;

  const note = getWordNote(entry);
  state.correctBook[mode][key] = {
    word: entry.word,
    example: entry.example,
    meaningZh: note.zh,
    meaningEn: note.en,
    response,
    correctAt: Date.now(),
  };
  saveCorrectBook();
}

function loadUserNotes() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(USER_NOTES_STORAGE_KEY) || "{}");
    if (!saved || typeof saved !== "object") return {};

    return Object.entries(saved).reduce((notes, [word, note]) => {
      const key = normaliseKey(word);
      const zh = normaliseWord(note?.zh || "");
      const en = normaliseWord(note?.en || "");
      const example = normaliseWord(note?.example || "");
      if (key && zh) {
        notes[key] = {
          zh,
          en: en || "User-supplied Chinese meaning.",
          example,
        };
      }
      return notes;
    }, {});
  } catch {
    return {};
  }
}

function saveUserNotes() {
  try {
    window.localStorage.setItem(USER_NOTES_STORAGE_KEY, JSON.stringify(state.userNotes));
  } catch {
    return false;
  }
  return true;
}

function createEmptyModeInputs() {
  return {
    listening: "",
    dictation: "",
    reading: "",
  };
}

function loadModeInputs() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(MODE_INPUT_STORAGE_KEY) || "{}");
    return bookModes.reduce((inputs, mode) => {
      inputs[mode] = typeof saved?.[mode] === "string" ? saved[mode] : "";
      return inputs;
    }, createEmptyModeInputs());
  } catch {
    return createEmptyModeInputs();
  }
}

function saveModeInputs() {
  try {
    window.localStorage.setItem(MODE_INPUT_STORAGE_KEY, JSON.stringify(state.modeInputs));
  } catch {
    return false;
  }
  return true;
}

function loadSavedSessions() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(TRAINING_SNAPSHOT_STORAGE_KEY) || "{}");
    const sessions = saved?.sessions && typeof saved.sessions === "object" ? saved.sessions : {};
    return bookModes.reduce((result, mode) => {
      result[mode] = sessions[mode] || null;
      return result;
    }, createEmptyBook());
  } catch {
    return createEmptyBook();
  }
}

function captureCurrentSession() {
  if (!state.deck.length) return null;
  return {
    mode: state.mode,
    deck: state.deck,
    currentIndex: state.currentIndex,
    score: state.score,
    answered: state.answered,
    retryCurrent: state.retryCurrent,
    heard: state.heard,
    results: state.results,
    savedAt: Date.now(),
  };
}

function buildTrainingSnapshot() {
  saveCurrentModeInput();
  state.savedSessions[state.mode] = captureCurrentSession();

  return {
    version: 1,
    savedAt: Date.now(),
    mode: state.mode,
    bookMode: state.bookMode,
    modeInputs: state.modeInputs,
    favoriteBook: state.favoriteBook,
    correctBook: state.correctBook,
    userNotes: state.userNotes,
    sessions: state.savedSessions,
  };
}

function applyTrainingSnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== "object") return false;

  state.modeInputs = { ...createEmptyModeInputs(), ...(snapshot.modeInputs || {}) };
  state.favoriteBook = mergeBookByTimestamp(state.favoriteBook, snapshot.favoriteBook, "missedAt");
  state.correctBook = mergeBookByTimestamp(state.correctBook, snapshot.correctBook, "correctAt");
  state.userNotes =
    snapshot.userNotes && typeof snapshot.userNotes === "object"
      ? { ...snapshot.userNotes, ...state.userNotes }
      : state.userNotes;
  state.savedSessions = { ...createEmptyBook(), ...(snapshot.sessions || {}) };
  state.bookMode = bookModes.includes(snapshot.bookMode) ? snapshot.bookMode : state.bookMode;

  const nextMode = bookModes.includes(snapshot.mode) ? snapshot.mode : getSelectedMode();
  const radio = modeRadios.find((item) => item.value === nextMode);
  if (radio) radio.checked = true;
  state.mode = nextMode;
  wordInput.value = state.modeInputs[nextMode] || "";
  renderFavoriteBook();
  updateSetupControls();
  updateScoreBox();
  saveFavoriteBook();
  saveCorrectBook();
  saveUserNotes();
  return true;
}

function saveSnapshotToLocal(snapshot) {
  try {
    window.localStorage.setItem(TRAINING_SNAPSHOT_STORAGE_KEY, JSON.stringify(snapshot));
    return true;
  } catch {
    return false;
  }
}

function getSaveStateEndpoint() {
  return window.location.protocol === "file:" ? "http://127.0.0.1:8765/save-state" : "/save-state";
}

async function saveTraining(manual = false) {
  const snapshot = buildTrainingSnapshot();
  saveSnapshotToLocal(snapshot);
  let serverSaved = false;

  try {
    const payload = btoa(unescape(encodeURIComponent(JSON.stringify(snapshot))));
    const isFilePage = window.location.protocol === "file:";
    const response = await fetch(getSaveStateEndpoint(), {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: payload,
      mode: isFilePage ? "no-cors" : "same-origin",
    });
    serverSaved = isFilePage || response.ok;
  } catch {
    serverSaved = false;
  }

  if (manual) {
    if (window.location.protocol === "file:") {
      saveStatus.textContent = serverSaved
        ? "旧页面收藏已保存到本地项目文件。请回到 127.0.0.1 页面刷新。"
        : "只保存到了旧页面浏览器；请先启动本地服务后再保存。";
    } else {
      saveStatus.textContent = serverSaved
        ? "训练已保存到本地项目文件。"
        : "训练已保存到当前浏览器；项目文件保存需要重启本地服务后生效。";
    }
  }

  return serverSaved;
}

async function copyTextToClipboard(text) {
  if (!navigator.clipboard?.writeText) return false;

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

async function exportTrainingData() {
  const snapshot = buildTrainingSnapshot();
  saveSnapshotToLocal(snapshot);
  const exportText = JSON.stringify(snapshot);
  const copied = await copyTextToClipboard(exportText);

  if (copied) {
    saveStatus.textContent = "导出数据已复制。请回到 127.0.0.1 页面点导入。";
    return;
  }

  window.prompt("复制下面的数据，再到 127.0.0.1 页面点导入粘贴。", exportText);
  saveStatus.textContent = "导出数据已生成。";
}

function importTrainingSnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== "object") return false;

  state.favoriteBook = mergeBookByTimestamp(state.favoriteBook, snapshot.favoriteBook, "missedAt");
  state.correctBook = mergeBookByTimestamp(state.correctBook, snapshot.correctBook, "correctAt");
  state.userNotes =
    snapshot.userNotes && typeof snapshot.userNotes === "object"
      ? { ...snapshot.userNotes, ...state.userNotes }
      : state.userNotes;

  saveFavoriteBook();
  saveCorrectBook();
  saveUserNotes();
  renderFavoriteBook();
  updateScoreBox();
  return true;
}

function importTrainingData() {
  const importText = window.prompt("粘贴从旧 file 页面导出的数据。");
  if (importText === null) return;

  let snapshot = null;
  try {
    snapshot = JSON.parse(importText.trim());
  } catch {
    saveStatus.textContent = "导入失败：数据格式不对。";
    return;
  }

  if (!importTrainingSnapshot(snapshot)) {
    saveStatus.textContent = "导入失败：没有识别到可用数据。";
    return;
  }

  saveSnapshotToLocal(buildTrainingSnapshot());
  void saveTraining(false);
  saveStatus.textContent = "导入完成，旧收藏已合并到当前收藏本。";
}

async function restoreTraining() {
  let snapshot = null;
  try {
    const response = await fetch("/load-state", { cache: "no-store" });
    if (response.ok) snapshot = await response.json();
  } catch {
    snapshot = null;
  }

  if (!snapshot) {
    try {
      snapshot = JSON.parse(window.localStorage.getItem(TRAINING_SNAPSHOT_STORAGE_KEY) || "null");
    } catch {
      snapshot = null;
    }
  }

  if (applyTrainingSnapshot(snapshot)) {
    saveStatus.textContent = "已恢复上次保存的训练。";
    restoreSavedSessionForMode(state.mode, false);
  }
}

function restoreSavedSessionForMode(mode, announce = true) {
  const session = state.savedSessions[mode];
  if (!session?.deck?.length) {
    resetPracticeSurface(announce ? `${getModeLabel(mode)}已切换` : "等待开始");
    return false;
  }

  state.deck = session.deck;
  state.currentIndex = Math.min(session.currentIndex || 0, Math.max(0, session.deck.length - 1));
  state.score = session.score || 0;
  state.answered = Boolean(session.answered);
  state.retryCurrent = Boolean(session.retryCurrent);
  state.heard = Boolean(session.heard);
  state.results = Array.isArray(session.results) ? session.results : [];
  const wasAnswered = state.answered;
  scoreValue.textContent = String(state.score);
  renderRound();
  if (wasAnswered) {
    state.answered = true;
    const current = state.deck[state.currentIndex];
    const lastResult = [...state.results].reverse().find((result) => normaliseKey(result.word) === normaliseKey(current.word));
    if (lastResult) {
      renderAnswerReview(current, lastResult.response, lastResult.correct, lastResult.mode);
      nextButton.disabled = false;
      nextButton.innerHTML = state.retryCurrent
        ? '<span class="button-icon" aria-hidden="true">↻</span>再写一次'
        : state.currentIndex === state.deck.length - 1
          ? '<span class="button-icon" aria-hidden="true">✓</span>完成'
          : '<span class="button-icon" aria-hidden="true">→</span>下一题';
      setAnswerDisabled(true);
      [...choices.querySelectorAll("button")].forEach((button) => {
        button.disabled = true;
      });
    }
  }
  updateScoreBox();
  if (announce) saveStatus.textContent = `已恢复${getModeLabel(mode)}的保存进度。`;
  return true;
}

function saveCurrentModeInput() {
  const mode = getSelectedMode();
  state.modeInputs[mode] = wordInput.value;
  return saveModeInputs();
}

function switchModeInput(nextMode, resetSurface = true) {
  if (!bookModes.includes(nextMode)) return;
  state.modeInputs[state.mode] = wordInput.value;
  state.mode = nextMode;
  wordInput.value = state.modeInputs[nextMode] || "";
  saveModeInputs();
  updateSetupControls();
  if (resetSurface) restoreSavedSessionForMode(nextMode);
}

function resetPracticeSurface(message = "等待开始") {
  stopRoundSpeech();
  state.deck = [];
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.heard = false;
  state.results = [];
  scoreValue.textContent = "0";
  quizTitle.textContent = "等待开始";
  roundState.textContent = message;
  blankSentence.textContent = "";
  choices.hidden = true;
  choices.innerHTML = "";
  answerForm.hidden = true;
  reviewPanel.textContent = "";
  progressBar.style.width = "0%";
  setAnswerDisabled(true);
  listenButton.disabled = true;
  nextButton.disabled = true;
  updateScoreBox();
}

function updateFavoriteBook(entry, mode, isCorrect, response) {
  if (!bookModes.includes(mode)) return;

  const key = normaliseKey(entry.word);
  if (!key) return;

  if (isCorrect) return;

  const note = getWordNote(entry);
  state.favoriteBook[mode][key] = {
    word: entry.word,
    example: entry.example,
    meaningZh: note.zh,
    meaningEn: note.en,
    response,
    missedAt: Date.now(),
  };
  saveFavoriteBook();
  renderFavoriteBook();
}

function refreshFavoriteBookNote(word) {
  const key = normaliseKey(word);
  const note = getWordNote({ word });
  let changed = false;

  bookModes.forEach((mode) => {
    const item = state.favoriteBook[mode]?.[key];
    if (item) {
      item.meaningZh = note.zh;
      item.meaningEn = note.en;
      if (note.example) item.example = note.example;
      changed = true;
    }

    const correctItem = state.correctBook[mode]?.[key];
    if (correctItem) {
      correctItem.meaningZh = note.zh;
      correctItem.meaningEn = note.en;
      if (note.example) correctItem.example = note.example;
      changed = true;
    }
  });

  if (changed) {
    saveFavoriteBook();
    saveCorrectBook();
    renderFavoriteBook();
  }
}

function removeFavoriteBookItem(mode, key) {
  if (!bookModes.includes(mode) || !state.favoriteBook[mode]?.[key]) return;
  delete state.favoriteBook[mode][key];
  saveFavoriteBook();
  renderFavoriteBook();
}

function moveCorrectItemToFavoriteBook(mode, key, shouldRenderCorrectAnswers = true) {
  if (!bookModes.includes(mode) || !state.correctBook[mode]?.[key]) return;

  const item = state.correctBook[mode][key];
  const note = getWordNote(item);
  state.favoriteBook[mode][key] = {
    word: item.word,
    example: item.example,
    meaningZh: item.meaningZh || note.zh,
    meaningEn: item.meaningEn || note.en,
    response: item.response,
    missedAt: Date.now(),
  };
  delete state.correctBook[mode][key];
  saveFavoriteBook();
  saveCorrectBook();
  renderFavoriteBook();
  updateScoreBox();
  if (shouldRenderCorrectAnswers) renderCorrectAnswers();
}

function removeCorrectBookItem(mode, key, shouldRenderCorrectAnswers = true) {
  if (!bookModes.includes(mode) || !state.correctBook[mode]?.[key]) return;
  delete state.correctBook[mode][key];
  saveCorrectBook();
  updateScoreBox();
  if (shouldRenderCorrectAnswers) renderCorrectAnswers();
}

function renderFavoriteBook() {
  bookTabs.forEach((button) => {
    const active = button.dataset.bookTab === state.bookMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  bookCounts.forEach((badge) => {
    const mode = badge.dataset.bookCount;
    badge.textContent = String(Object.keys(state.favoriteBook[mode] || {}).length);
  });

  const entries = Object.values(state.favoriteBook[state.bookMode] || {}).sort(
    (a, b) => (b.missedAt || 0) - (a.missedAt || 0),
  );

  bookReviewButton.disabled = entries.length === 0;
  bookReviewButton.title = entries.length
    ? `复习${getModeLabel(state.bookMode)}收藏本里的 ${entries.length} 个错词`
    : `${getModeLabel(state.bookMode)}暂无错词`;
  bookReviewButton.setAttribute("aria-label", bookReviewButton.title);
  bookReviewButton.innerHTML = `<span class="button-icon" aria-hidden="true">↻</span>复习${
    entries.length ? ` ${entries.length}` : ""
  }`;

  if (!entries.length) {
    bookList.innerHTML = `<p class="book-empty">${getModeLabel(state.bookMode)}暂无错词。</p>`;
    return;
  }

  bookList.innerHTML = entries
    .map(
      (item) => `
        <article class="book-item">
          <div class="book-item-top">
            <strong>${escapeHtml(item.word)}</strong>
            <div class="book-item-actions">
              <span>${formatBookDate(item.missedAt)}</span>
              <button type="button" data-remove-book="${escapeHtml(normaliseKey(item.word))}">移除</button>
            </div>
          </div>
          <p>上次答案：${escapeHtml(item.response || "未记录")}</p>
          <small>释义：${escapeHtml(item.meaningZh || "暂无释义")}</small>
          <small>${renderRevealedSentence(item.example || "", item.word)}</small>
        </article>
      `,
    )
    .join("");
}

function formatBookDate(value) {
  if (!value) return "最近错题";
  return new Date(value).toLocaleDateString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
  });
}

function normaliseWord(value) {
  return value.trim().replace(/\s+/g, " ");
}

function normaliseKey(value) {
  return normaliseWord(value)
    .replace(/[.,!?;:]+$/g, "")
    .replace(/[’`]/g, "'")
    .toLocaleLowerCase("en-GB");
}

function hasChinese(value) {
  return /[\u3400-\u9fff]/.test(value);
}

function cleanInputLine(value) {
  let line = String(value || "").trim();
  if (!line || /^```/.test(line) || /^-{3,}$/.test(line) || /^#+\s*/.test(line)) return "";

  line = line
    .replace(/^\s*[-*+]\s+/, "")
    .replace(/^\d+[.)]\s+/, "")
    .replaceAll("**", "")
    .replaceAll("__", "")
    .replaceAll("`", "")
    .trim();

  if (!/[A-Za-z]/.test(line)) return "";
  if (hasChinese(line) && !line.includes("|") && !line.includes("\t")) return "";
  return line;
}

function parseEntries(rawText) {
  const rows = rawText
    .split(/\r?\n/)
    .flatMap((line) => {
      const trimmed = cleanInputLine(line);
      if (!trimmed) return [];
      if (trimmed.includes("|") || trimmed.includes("\t")) return [trimmed.replace(/\t+/g, "|")];
      return trimmed.split(/[,\uFF0C;\uFF1B]/).map(cleanInputLine);
    })
    .map((line) => line.trim())
    .filter(Boolean);

  const entries = [];
  const seen = new Set();

  rows.forEach((line) => {
    const parts = line.split("|").map(normaliseWord);
    const word = normaliseWord(parts[0] || "");
    if (!word) return;

    const key = normaliseKey(word);
    if (seen.has(key)) return;
    seen.add(key);

    const fields = parts.slice(1).filter(Boolean);
    const zhField = fields.find(hasChinese) || "";
    const exampleField =
      fields.find((field) => !hasChinese(field) && isSpecificPracticeExample(field, word)) || "";
    const enField = fields.find((field) => field !== exampleField && !hasChinese(field) && /[A-Za-z]/.test(field)) || "";
    const localNote = findLocalWordNote(word);
    const savedExample = isSpecificPracticeExample(localNote?.example || "", word) ? localNote.example : "";

    const meaningZh = zhField || localNote?.zh || "";
    const meaningEn = enField || localNote?.en || "";
    const example = exampleField || savedExample || "";
    const isManualReady = Boolean(meaningZh && isSpecificPracticeExample(example, word));

    entries.push({
      word,
      example,
      exampleSource: isManualReady ? "manual" : "api",
      meaningZh,
      meaningEn,
      apiError: "",
    });
  });

  return entries;
}

function filterFavoriteEntriesForPractice(entries, mode) {
  if (!skipFavoriteWords.checked) {
    return { entries, skippedCount: 0 };
  }

  const favoriteKeys = new Set(Object.keys(state.favoriteBook[mode] || {}));
  if (!favoriteKeys.size) {
    return { entries, skippedCount: 0 };
  }

  const filteredEntries = entries.filter((entry) => !favoriteKeys.has(normaliseKey(entry.word)));
  return {
    entries: filteredEntries,
    skippedCount: entries.length - filteredEntries.length,
  };
}

function cleanKnownWordsFromInput() {
  const mode = getSelectedMode();
  const knownKeys = new Set(Object.keys(state.correctBook[mode] || {}));
  if (!knownKeys.size) {
    saveStatus.textContent = `${getModeLabel(mode)}还没有可清理的已会单词。`;
    return;
  }

  let removedCount = 0;
  const keptLines = [];

  wordInput.value.split(/\r?\n/).forEach((line) => {
    const cleanedLine = cleanInputLine(line);
    if (!cleanedLine) {
      keptLines.push(line);
      return;
    }

    if (cleanedLine.includes("|") || cleanedLine.includes("\t")) {
      const key = normaliseKey(cleanedLine.replace(/\t+/g, "|").split("|")[0] || "");
      if (knownKeys.has(key)) {
        removedCount += 1;
        return;
      }
      keptLines.push(line);
      return;
    }

    const words = cleanedLine.split(/[,\uFF0C;\uFF1B]/).map(cleanInputLine).filter(Boolean);
    if (words.length <= 1) {
      const key = normaliseKey(words[0] || cleanedLine);
      if (knownKeys.has(key)) {
        removedCount += 1;
        return;
      }
      keptLines.push(line);
      return;
    }

    const keptWords = words.filter((word) => !knownKeys.has(normaliseKey(word)));
    removedCount += words.length - keptWords.length;
    if (keptWords.length) keptLines.push(keptWords.join(", "));
  });

  if (!removedCount) {
    saveStatus.textContent = "当前单词列表里没有已会单词需要清理。";
    return;
  }

  wordInput.value = keptLines.join("\n").trim();
  state.mode = mode;
  saveCurrentModeInput();
  saveStatus.textContent = `已从当前列表清理 ${removedCount} 个已会单词。`;
}

function isSpecificPracticeExample(example, word) {
  const cleaned = normaliseWord(example);
  if (!cleaned || !containsTargetWord(cleaned, word)) return false;

  const escapedWord = escapeRegExp(word).replace(/\s+/g, "\\s+");
  const genericPatterns = [
    /\blearning context\b/i,
    /\bspecific idea\b/i,
    /\btarget word\b/i,
    /\bvocabulary word\b/i,
    /\bthe word\b/i,
    /\bthe term\b/i,
    new RegExp(`\\blecture\\s+focused\\s+on\\s+(a|an|the)?\\s*${escapedWord}\\b`, "i"),
    new RegExp(`\\brole\\s+in\\s+(a|an|the)?\\s*specific\\s+idea\\b`, "i"),
    new RegExp(`\\bmentioned\\s+${escapedWord}\\b`, "i"),
    new RegExp(`\\bused\\s+${escapedWord}\\s+when\\s+describing\\b`, "i"),
    new RegExp(`\\bconnected\\s+${escapedWord}\\s+with\\b`, "i"),
    new RegExp(`\\bdescribed\\s+${escapedWord}\\s+as\\s+a\\s+key\\s+issue\\b`, "i"),
    new RegExp(`\\bexample\\s+of\\s+${escapedWord}\\b`, "i"),
    new RegExp(`\\bthink\\s+carefully\\s+about\\s+${escapedWord}\\b`, "i"),
  ];

  return !genericPatterns.some((pattern) => pattern.test(cleaned));
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getTargetWordPattern(word) {
  const cleaned = normaliseWord(word);
  const escaped = escapeRegExp(cleaned).replace(/\s+/g, "\\s+");
  if (/\s/.test(cleaned) || !/^[A-Za-z][A-Za-z'-]*$/.test(cleaned)) return escaped;

  const forms = new Set([cleaned]);
  forms.add(`${cleaned}s`);
  forms.add(`${cleaned}es`);
  forms.add(`${cleaned}ed`);
  forms.add(`${cleaned}ing`);
  if (cleaned.endsWith("e") && cleaned.length > 2) forms.add(`${cleaned.slice(0, -1)}ing`);
  if (cleaned.endsWith("y") && cleaned.length > 2) {
    forms.add(`${cleaned.slice(0, -1)}ies`);
    forms.add(`${cleaned.slice(0, -1)}ied`);
  }

  return [...forms]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join("|");
}

function targetWordRegex(word, flags = "i") {
  const pattern = getTargetWordPattern(word);
  const prefix = /^[A-Za-z0-9]/.test(word) ? "\\b" : "";
  const suffix = /[A-Za-z0-9]$/.test(word) ? "\\b" : "";
  return new RegExp(`${prefix}(?:${pattern})${suffix}`, flags);
}

function containsTargetWord(example, word) {
  return targetWordRegex(word).test(example);
}

function renderBlankSentence(example, word) {
  const regex = targetWordRegex(word);
  const match = regex.exec(example);
  const blankWord = match ? match[0] : word;
  const blank = `<span class="blank-slot" aria-label="missing word">${makeBlank(blankWord)}</span>`;

  if (!match) return blank;

  return `${escapeHtml(example.slice(0, match.index))}${blank}${escapeHtml(
    example.slice(match.index + match[0].length),
  )}`;
}

function renderRevealedSentence(example, word) {
  const regex = targetWordRegex(word);
  const match = regex.exec(example);

  if (!match) return escapeHtml(example);

  return `${escapeHtml(example.slice(0, match.index))}<mark>${escapeHtml(
    match[0],
  )}</mark>${escapeHtml(example.slice(match.index + match[0].length))}`;
}

function makeBlank(word) {
  const length = Math.max(6, Math.min(16, normaliseWord(word).length + 2));
  return "_".repeat(length);
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildChoices(answer) {
  const count = Number(optionCount.value);
  const pool = [
    ...state.deck.map((entry) => entry.word),
    ...Object.keys(listeningWordNotes),
    ...fallbackWords,
    ...confusableWords,
  ];
  const used = new Set([normaliseKey(answer)]);
  const candidates = [];

  shuffle(pool).forEach((candidate) => {
    const word = normaliseWord(candidate);
    const key = normaliseKey(word);
    if (!word || used.has(key)) return;
    used.add(key);
    candidates.push(word);
  });

  const distractors = pickSimilarDistractors(answer, candidates, count - 1);
  return shuffle([answer, ...distractors]);
}

function buildMeaningChoices(entry) {
  const count = Number(optionCount.value);
  const correctMeaning = getWordNote(entry).zh;
  const used = new Set([normaliseKey(correctMeaning)]);
  const candidates = [];
  const noteEntries = [
    ...state.deck,
    ...Object.entries(state.userNotes).map(([word, note]) => ({ word, meaningZh: note.zh, meaningEn: note.en })),
    ...Object.entries(wordNotes).map(([word, note]) => ({ word, meaningZh: note.zh, meaningEn: note.en })),
  ];

  noteEntries.forEach((item) => {
    const meaning = normaliseWord(getWordNote(item).zh || "");
    const key = normaliseKey(meaning);
    if (!meaning || used.has(key)) return;
    used.add(key);
    candidates.push(meaning);
  });

  return shuffle([correctMeaning, ...shuffle(candidates).slice(0, count - 1)]);
}

function pickSimilarDistractors(answer, candidates, needed) {
  const scored = candidates
    .map((word) => ({ word, score: choiceSimilarityScore(answer, word) }))
    .sort((a, b) => b.score - a.score);
  const closePoolSize = Math.max(needed * 4, 10);
  const closePool = scored.slice(0, closePoolSize).map((item) => item.word);
  const selected = shuffle(closePool).slice(0, needed);

  if (selected.length >= needed) return selected;

  scored.forEach((item) => {
    if (selected.length >= needed) return;
    if (!selected.some((word) => normaliseKey(word) === normaliseKey(item.word))) {
      selected.push(item.word);
    }
  });

  return selected;
}

function choiceSimilarityScore(answer, candidate) {
  const a = normaliseKey(answer).replace(/[^a-z]/g, "");
  const b = normaliseKey(candidate).replace(/[^a-z]/g, "");
  if (!a || !b) return 0;

  const maxLength = Math.max(a.length, b.length);
  const distanceScore = (1 - levenshteinDistance(a, b) / maxLength) * 44;
  const lengthScore = (1 - Math.min(Math.abs(a.length - b.length), maxLength) / maxLength) * 14;
  const prefixScore = (commonPrefixLength(a, b) / maxLength) * 16;
  const suffixScore = (commonSuffixLength(a, b) / maxLength) * 10;
  const vowelScore = patternSimilarity(vowelSignature(a), vowelSignature(b)) * 10;
  const consonantScore = patternSimilarity(consonantSkeleton(a), consonantSkeleton(b)) * 10;
  const firstLastScore = (a[0] === b[0] ? 5 : 0) + (a.at(-1) === b.at(-1) ? 3 : 0);
  const syllableScore = Math.max(0, 4 - Math.abs(roughSyllableCount(a) - roughSyllableCount(b)));

  return (
    distanceScore +
    lengthScore +
    prefixScore +
    suffixScore +
    vowelScore +
    consonantScore +
    firstLastScore +
    syllableScore
  );
}

function levenshteinDistance(a, b) {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  const current = Array.from({ length: b.length + 1 }, () => 0);

  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(previous[j] + 1, current[j - 1] + 1, previous[j - 1] + cost);
    }
    previous.splice(0, previous.length, ...current);
  }

  return previous[b.length];
}

function commonPrefixLength(a, b) {
  let count = 0;
  while (count < a.length && count < b.length && a[count] === b[count]) count += 1;
  return count;
}

function commonSuffixLength(a, b) {
  let count = 0;
  while (count < a.length && count < b.length && a[a.length - count - 1] === b[b.length - count - 1]) {
    count += 1;
  }
  return count;
}

function vowelSignature(word) {
  return word.replace(/[^aeiouy]/g, "").replace(/([aeiouy])\1+/g, "$1");
}

function consonantSkeleton(word) {
  return word.replace(/[aeiouy]/g, "").replace(/(.)\1+/g, "$1");
}

function patternSimilarity(a, b) {
  if (!a || !b) return 0;
  return 1 - levenshteinDistance(a, b) / Math.max(a.length, b.length);
}

function roughSyllableCount(word) {
  return Math.max(1, (word.match(/[aeiouy]+/g) || []).length);
}

function getLookupKeys(word) {
  const key = normaliseKey(word).replace(/[^a-z'\-\s]/g, "");
  const keys = [key];

  if (key.endsWith("'s")) keys.push(key.slice(0, -2));
  if (key.endsWith("ies") && key.length > 4) keys.push(`${key.slice(0, -3)}y`);
  if (key.endsWith("ves") && key.length > 4) {
    keys.push(`${key.slice(0, -3)}f`);
    keys.push(`${key.slice(0, -3)}fe`);
  }
  if (key.endsWith("es") && key.length > 4) keys.push(key.slice(0, -2));
  if (key.endsWith("s") && key.length > 3) keys.push(key.slice(0, -1));
  if (key.endsWith("ing") && key.length > 5) {
    keys.push(key.slice(0, -3));
    keys.push(`${key.slice(0, -3)}e`);
  }
  if (key.endsWith("ed") && key.length > 4) {
    keys.push(key.slice(0, -2));
    keys.push(`${key.slice(0, -1)}e`);
  }

  return [...new Set(keys.filter(Boolean))];
}

function findLocalWordNote(word) {
  for (const key of getLookupKeys(word)) {
    if (state.userNotes[key]) return { ...state.userNotes[key], missing: false, source: "user" };
    if (wordNotes[key]) return { ...wordNotes[key], missing: false, source: "built-in" };
  }
  return null;
}

function getWordNote(entry) {
  const localNote = findLocalWordNote(entry.word);
  if (entry.meaningZh || entry.meaningEn) {
    return {
      en: entry.meaningEn || localNote?.en || "Custom meaning supplied with this word.",
      zh: entry.meaningZh || localNote?.zh || "已使用你输入的自定义释义",
      missing: false,
      source: "entry",
    };
  }

  if (localNote) return localNote;

  return {
    en: "Add a Chinese meaning once and this trainer will remember it locally.",
    zh: "待补充中文释义",
    missing: true,
  };
}

function hasMeaning(entry) {
  const note = getWordNote(entry);
  return Boolean(note && !note.missing && normaliseWord(note.zh));
}

function hasCompletePracticeData(entry) {
  return hasMeaning(entry) && isSpecificPracticeExample(entry.example, entry.word);
}

async function loadApiGeneratedEntries(entries) {
  state.definitionServiceAvailable = true;
  const entriesNeedingApi = entries.filter((entry) => !hasCompletePracticeData(entry));

  entries
    .filter(hasCompletePracticeData)
    .forEach((entry) => {
      saveUserNote(entry.word, getWordNote(entry).zh, getWordNote(entry).en, entry.example);
    });

  if (!entriesNeedingApi.length) {
    return { ok: true };
  }

  for (const [index, entry] of entriesNeedingApi.entries()) {
    roundState.textContent = `正在调用 API 生成释义和例句 ${index + 1} / ${entriesNeedingApi.length}`;

    const note = await fetchGeneratedNote(entry.word);
    const error = getGeneratedNoteError(note, entry.word);
    if (error) {
      entry.apiError = error;
      return { ok: false, entry, error };
    }

    entry.meaningZh = note.zh;
    entry.meaningEn = note.en;
    entry.example = note.example;
    entry.exampleSource = "api";
    entry.apiError = "";
    saveUserNote(entry.word, note.zh, note.en, note.example);
  }

  return { ok: true };
}

function getGeneratedNoteError(note, word) {
  if (!note) return "API 没有返回结果，请检查网络或服务端日志。";
  if (note.serviceUnavailable) return note.error || "OPENAI_API_KEY 未配置，无法调用 API 生成释义和例句。";
  if (note.error) return note.error;
  if (!normaliseWord(note.zh)) return "API 返回结果缺少中文释义。";
  if (!normaliseWord(note.en)) return "API 返回结果缺少英文释义。";
  if (!isSpecificPracticeExample(note.example, word)) {
    return "API 返回的例句不合格：必须自然、符合语法、体现词义，并包含目标单词或短语。";
  }
  return "";
}

function renderApiGenerationError(entry, error) {
  quizTitle.textContent = "API 生成失败";
  roundState.textContent = "本轮未开始";
  blankSentence.textContent = "";
  choices.hidden = true;
  choices.innerHTML = "";
  answerForm.hidden = true;
  reviewPanel.innerHTML = `
    <strong>${escapeHtml(entry?.word || "当前单词")}</strong>
    <p>${escapeHtml(error || "API 没有生成可用的中文释义和例句。")}</p>
    <p class="review-warning">没有 API 时，请按 <code>word|中文释义|English example</code> 的格式批量粘贴。例句需要包含这个单词或常见变形。</p>
  `;
  setAnswerDisabled(true);
  listenButton.disabled = true;
  nextButton.disabled = true;
}

async function fetchGeneratedNote(word) {
  try {
    const response = await fetch(`/define?word=${encodeURIComponent(word)}`, { cache: "no-store" });
    let data = {};
    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (response.status === 404 || response.status === 502 || response.status === 503) {
      return {
        serviceUnavailable: true,
        error: normaliseWord(data.error || ""),
      };
    }
    if (!response.ok) {
      return {
        error: normaliseWord(data.error || `API 请求失败：HTTP ${response.status}`),
      };
    }
    return {
      zh: normaliseWord(data.zh || ""),
      en: normaliseWord(data.en || ""),
      example: normaliseWord(data.example || ""),
    };
  } catch {
    return null;
  }
}

function preferredVoiceScore(voice) {
  const name = `${voice.name} ${voice.lang} ${voice.source || ""}`.toLocaleLowerCase("en-GB");
  let score = 0;
  if (voice.lang.toLocaleLowerCase("en-GB").startsWith("en-gb")) score += 100;
  if (name.includes("natural")) score += 42;
  if (name.includes("neural")) score += 34;
  if (name.includes("online")) score += 22;
  if (name.includes("google uk")) score += 18;
  if (name.includes("google")) score += 12;
  if (name.includes("microsoft")) score += 10;
  if (name.includes("browser")) score += 8;
  if (name.includes("sonia") || name.includes("ryan") || name.includes("libby")) score += 5;
  if (name.includes("hazel") || name.includes("zira")) score -= 6;
  return score;
}

function isBritishVoice(voice) {
  return voice.lang.toLocaleLowerCase("en-GB").startsWith("en-gb");
}

async function loadVoices() {
  state.voices = "speechSynthesis" in window ? window.speechSynthesis.getVoices() : [];
  await loadServerVoices();

  const browserVoices = state.voices.filter(isBritishVoice).map((voice) => ({
    name: voice.name,
    lang: voice.lang,
    source: "browser",
    nativeVoice: voice,
    value: `browser:${voice.name}`,
  }));
  const serverVoices = state.serverVoices.filter(isBritishVoice).map((voice) => ({
    ...voice,
    source: "server",
    value: `server:${voice.name}`,
  }));
  const britishVoices = [...browserVoices, ...serverVoices].sort(
    (a, b) => preferredVoiceScore(b) - preferredVoiceScore(a),
  );

  voiceSelect.innerHTML = "";

  if (!britishVoices.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "未识别 English (United Kingdom)";
    voiceSelect.append(option);
    voiceStatus.textContent = "未识别英式语音";
    voiceStatus.title = "当前浏览器或 Windows 没有提供 en-GB 语音";
    voiceStatus.className = "voice-pill warn";
    return;
  }

  britishVoices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.value;
    option.textContent = `${voice.name} (${voice.lang}, ${voiceSourceLabel(voice)})`;
    voiceSelect.append(option);
  });

  updateVoiceStatus(getSelectedVoice());
}

async function loadServerVoices() {
  try {
    const response = await fetch("/voices", { cache: "no-store" });
    if (!response.ok) return false;

    const data = await response.json();
    state.serverVoices = Array.isArray(data.voices) ? data.voices : [];
    const britishVoices = state.serverVoices
      .filter(isBritishVoice)
      .sort((a, b) => preferredVoiceScore(b) - preferredVoiceScore(a));

    return Boolean(britishVoices.length);
  } catch {
    return false;
  }
}

function getSelectedVoice() {
  if (!voiceSelect.value) return null;

  if (voiceSelect.value.startsWith("server:")) {
    const selectedName = voiceSelect.value.replace(/^server:/, "");
    const voice = state.serverVoices.find((item) => item.name === selectedName && isBritishVoice(item));
    return voice ? { ...voice, source: "server", value: voiceSelect.value } : null;
  }

  const selectedName = voiceSelect.value.replace(/^browser:/, "");
  const voice = state.voices.find((item) => item.name === selectedName && isBritishVoice(item));
  return voice
    ? {
        name: voice.name,
        lang: voice.lang,
        source: "browser",
        value: voiceSelect.value,
        nativeVoice: voice,
      }
    : null;
}

function voiceSourceLabel(voice) {
  return voice.source === "server" ? "Windows" : "浏览器";
}

function updateVoiceStatus(voice) {
  if (!voice) {
    voiceStatus.textContent = "未识别英式语音";
    voiceStatus.title = "当前浏览器没有提供 en-GB 语音";
    voiceStatus.className = "voice-pill warn";
    return;
  }

  const natural = /natural|neural|online|google/i.test(voice.name);
  voiceStatus.textContent = natural ? "自然英式语音" : "英式语音";
  voiceStatus.title = `${voice.name} (${voice.lang}, ${voiceSourceLabel(voice)})`;
  voiceStatus.className = "voice-pill ready";
}

function speak(text) {
  const voice = getSelectedVoice();
  if (!voice) return Promise.resolve(false);

  if (voice.source === "server") {
    return speakWithServerVoice(text, voice);
  }

  return speakWithBrowserVoice(text, voice);
}

function speakWithBrowserVoice(text, selectedVoice) {
  return new Promise((resolve) => {
    if (!("speechSynthesis" in window)) {
      resolve(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB";
    utterance.rate = Number(rateControl.value);
    utterance.pitch = 0.98;
    utterance.volume = 1;
    utterance.voice = selectedVoice.nativeVoice;
    utterance.onend = () => resolve(true);
    utterance.onerror = () => resolve(false);
    window.speechSynthesis.speak(utterance);
  });
}

function speakWithServerVoice(text, selectedVoice) {
  return new Promise(async (resolve) => {
    if (!selectedVoice) {
      resolve(false);
      return;
    }

    stopCurrentAudio();

    try {
      const params = new URLSearchParams({
        text,
        voice: selectedVoice.name,
        rate: rateControl.value,
        cache: String(Date.now()),
      });
      const response = await fetch(`/tts?${params.toString()}`);
      if (!response.ok) {
        resolve(false);
        return;
      }

      const audioUrl = URL.createObjectURL(await response.blob());
      const audio = new Audio(audioUrl);
      state.currentAudio = audio;

      audio.onended = () => {
        if (state.currentAudio === audio) state.currentAudio = null;
        URL.revokeObjectURL(audioUrl);
        resolve(true);
      };
      audio.onerror = () => {
        if (state.currentAudio === audio) state.currentAudio = null;
        URL.revokeObjectURL(audioUrl);
        resolve(false);
      };

      await audio.play();
    } catch {
      resolve(false);
    }
  });
}

function stopCurrentAudio() {
  if (!state.currentAudio) return;
  state.currentAudio.pause();
  state.currentAudio.src = "";
  state.currentAudio = null;
}

function stopRoundSpeech() {
  state.speechRunId += 1;
  state.isSpeaking = false;
  stopCurrentAudio();
  window.speechSynthesis?.cancel();
}

async function speakCurrentRound(forceReplay = false) {
  const current = state.deck[state.currentIndex];
  if (!current || state.isSpeaking) return;
  if (state.heard && !forceReplay) return;

  const runId = state.speechRunId + 1;
  state.speechRunId = runId;
  state.isSpeaking = true;
  state.heard = true;
  renderListeningState("正在朗读");
  listenButton.disabled = true;

  stopCurrentAudio();
  window.speechSynthesis?.cancel();

  const spoken = await speakRoundText(current, runId);
  if (state.speechRunId !== runId || state.answered) return;

  state.isSpeaking = false;
  renderListeningState(
    spoken
      ? state.mode === "dictation"
        ? "请写出空格中的单词"
        : state.mode === "reading"
          ? "请选择这个单词的释义"
          : "请选择你听到的单词"
      : "朗读失败，请检查语音设置",
  );
  updateActionButtons();
  if (state.mode === "dictation") answerInput.focus();
}

async function speakRoundText(current, runId) {
  if (state.mode === "reading") {
    return speak(current.word);
  }

  if (state.mode === "listening") {
    const wordSpoken = await speak(current.word);
    if (state.speechRunId !== runId || state.answered) return wordSpoken;
    await wait(420);
    if (state.speechRunId !== runId || state.answered) return wordSpoken;
    const exampleSpoken = await speak(current.example);
    return wordSpoken && exampleSpoken;
  }

  return speak(current.example);
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function startQuiz() {
  clearRound();
  await loadVoices();

  state.mode = getSelectedMode();
  saveCurrentModeInput();
  state.deck = [];
  state.currentIndex = 0;
  state.answered = false;
  state.retryCurrent = false;
  state.isReviewingWrong = false;
  state.score = 0;
  state.results = [];
  scoreValue.textContent = "0";
  updateScoreBox();

  if (!getSelectedVoice()) {
    quizTitle.textContent = "无法开始";
    roundState.textContent = "未检测到英式语音";
    blankSentence.textContent = "";
    choices.hidden = true;
    choices.innerHTML = "";
    answerForm.hidden = true;
    reviewPanel.innerHTML =
      "<strong>当前浏览器没有识别到 en-GB 英式语音。</strong> 请在 Windows 的“语音”设置里安装 English (United Kingdom) 的 Text-to-speech 语音，然后重启浏览器。";
    setAnswerDisabled(true);
    listenButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  const parsedEntries = parseEntries(wordInput.value);
  const { entries, skippedCount } = filterFavoriteEntriesForPractice(parsedEntries, state.mode);

  if (!entries.length) {
    quizTitle.textContent = parsedEntries.length ? "已跳过收藏本" : "还没有单词";
    roundState.textContent = parsedEntries.length ? "请点收藏本复习" : "请先输入单词";
    blankSentence.textContent = "";
    choices.hidden = true;
    choices.innerHTML = "";
    answerForm.hidden = true;
    reviewPanel.innerHTML = parsedEntries.length
      ? "<strong>输入列表里的单词都在当前模式收藏本里。</strong> 普通练习已跳过它们；需要练这些词时，请点收藏本里的“复习”。"
      : "";
    setAnswerDisabled(true);
    listenButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  if (skippedCount) {
    saveStatus.textContent = `普通练习已跳过收藏本中的 ${skippedCount} 个单词。`;
  }

  const apiResult = await loadApiGeneratedEntries(entries);
  if (!apiResult.ok) {
    renderApiGenerationError(apiResult.entry, apiResult.error);
    return;
  }

  const missingMeaning = entries.find((entry) => !hasCompletePracticeData(entry));
  if (missingMeaning) {
    quizTitle.textContent = "缺少释义或例句";
    roundState.textContent = "请补全后再开始";
    blankSentence.textContent = "";
    choices.hidden = true;
    choices.innerHTML = "";
    answerForm.hidden = true;
    reviewPanel.innerHTML = `<strong>${escapeHtml(missingMeaning.word)}</strong> 还缺少中文释义或合格英文例句。请使用 <code>word|中文释义|English example</code>，例句里要包含这个单词或常见变形。`;
    setAnswerDisabled(true);
    listenButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  state.deck = shuffle(entries);
  state.currentIndex = 0;
  state.score = 0;
  state.results = [];
  scoreValue.textContent = "0";
  updateScoreBox();
  renderRound();
  if (autoSpeak.checked) {
    speakCurrentRound(true);
  } else {
    renderListeningState("点击朗读开始本题");
  }
  saveTraining(false);
}

function clearRound() {
  stopRoundSpeech();
}

function renderRound() {
  const current = state.deck[state.currentIndex];
  state.answered = false;
  state.heard = false;

  quizTitle.textContent = `${getModeLabel()}${state.isReviewingWrong ? "错词回顾" : ""} 第 ${
    state.currentIndex + 1
  } / ${state.deck.length} 题`;
  roundState.textContent = "准备朗读";
  reviewPanel.textContent = "";
  nextButton.disabled = true;
  nextButton.innerHTML = '<span class="button-icon" aria-hidden="true">→</span>下一题';

  renderModeSurface(current);
  updateProgress();
  updateActionButtons();
}

function renderModeSurface(current) {
  if (state.mode === "dictation") {
    choices.hidden = true;
    choices.innerHTML = "";
    answerForm.hidden = false;
    blankSentence.innerHTML = renderBlankSentence(current.example, current.word);
    answerInput.value = "";
    answerInput.classList.remove("correct", "incorrect");
    setAnswerDisabled(false);
    window.setTimeout(() => answerInput.focus(), 0);
    return;
  }

  answerForm.hidden = true;
  setAnswerDisabled(true);
  choices.hidden = false;
  if (state.mode === "reading") {
    blankSentence.innerHTML = renderRevealedSentence(current.example, current.word);
    renderMeaningChoices(current);
    return;
  }

  blankSentence.textContent = "听完后选择你听到的单词";
  renderWordChoices(current.word);
}

function renderWordChoices(answer) {
  choices.innerHTML = "";
  buildChoices(answer).forEach((word, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.disabled = false;
    button.dataset.word = word;
    button.textContent = `${index + 1}. ${word}`;
    button.addEventListener("click", () => selectWordChoice(word));
    choices.append(button);
  });
}

function renderMeaningChoices(current) {
  choices.innerHTML = "";
  const correctMeaning = getWordNote(current).zh;
  buildMeaningChoices(current).forEach((meaning, index) => {
    const button = document.createElement("button");
    button.className = "choice-button meaning-choice";
    button.type = "button";
    button.disabled = false;
    button.dataset.meaning = meaning;
    button.textContent = `${index + 1}. ${meaning}`;
    button.addEventListener("click", () => selectMeaningChoice(meaning, correctMeaning));
    choices.append(button);
  });
}

function renderListeningState(message) {
  roundState.textContent = message;
  listeningStage.classList.toggle("playing", state.isSpeaking);
}

function setAnswerDisabled(disabled) {
  answerInput.disabled = disabled;
  checkButton.disabled = disabled || !normaliseWord(answerInput.value);
}

function updateActionButtons() {
  const hasCurrent = Boolean(state.deck[state.currentIndex]);
  const hasAnswer = Boolean(normaliseWord(answerInput.value));
  listenButton.disabled = !hasCurrent || state.isSpeaking || state.answered;
  checkButton.disabled =
    state.mode !== "dictation" || !hasCurrent || state.isSpeaking || state.answered || !hasAnswer;
  nextButton.disabled = !state.answered;
}

function selectWordChoice(selectedWord) {
  if (state.answered || state.mode !== "listening") return;

  const current = state.deck[state.currentIndex];
  const isCorrect = normaliseKey(selectedWord) === normaliseKey(current.word);
  completeAnswer({
    current,
    isCorrect,
    response: selectedWord,
    mode: "listening",
  });

  [...choices.querySelectorAll("button")].forEach((button) => {
    const buttonWord = button.dataset.word;
    button.disabled = true;
    if (normaliseKey(buttonWord) === normaliseKey(current.word)) {
      button.classList.add("correct");
    } else if (normaliseKey(buttonWord) === normaliseKey(selectedWord)) {
      button.classList.add("incorrect");
    }
  });
}

function selectMeaningChoice(selectedMeaning, correctMeaning) {
  if (state.answered || state.mode !== "reading") return;

  const current = state.deck[state.currentIndex];
  const isCorrect = normaliseKey(selectedMeaning) === normaliseKey(correctMeaning);
  completeAnswer({
    current,
    isCorrect,
    response: selectedMeaning,
    mode: "reading",
  });

  [...choices.querySelectorAll("button")].forEach((button) => {
    const buttonMeaning = button.dataset.meaning;
    button.disabled = true;
    if (normaliseKey(buttonMeaning) === normaliseKey(correctMeaning)) {
      button.classList.add("correct");
    } else if (normaliseKey(buttonMeaning) === normaliseKey(selectedMeaning)) {
      button.classList.add("incorrect");
    }
  });
}

function checkAnswer() {
  if (state.answered || state.mode !== "dictation") return;

  const current = state.deck[state.currentIndex];
  const typedAnswer = normaliseWord(answerInput.value);
  if (!current || !typedAnswer) {
    answerInput.focus();
    return;
  }

  const isCorrect = normaliseKey(typedAnswer) === normaliseKey(current.word);
  completeAnswer({
    current,
    isCorrect,
    response: typedAnswer,
    mode: "dictation",
  });

  blankSentence.innerHTML = renderRevealedSentence(current.example, current.word);
  answerInput.classList.add(isCorrect ? "correct" : "incorrect");
  setAnswerDisabled(true);
}

function completeAnswer({ current, isCorrect, response, mode }) {
  state.answered = true;
  state.retryCurrent = mode === "dictation" && !isCorrect;
  stopRoundSpeech();
  renderListeningState(state.retryCurrent ? "再写一次，直到正确" : isCorrect ? "正确" : "答案已显示");

  if (isCorrect) {
    state.score += 1;
    scoreValue.textContent = String(state.score);
  }

  state.results.push({
    word: current.word,
    example: current.example,
    response,
    correct: isCorrect,
    mode,
  });

  updateFavoriteBook(current, mode, isCorrect, response);
  updateCorrectBook(current, mode, isCorrect, response);
  updateScoreBox();
  renderAnswerReview(current, response, isCorrect, mode);
  updateProgress();
  updateActionButtons();
  saveTraining(false);

  if (state.retryCurrent) {
    nextButton.innerHTML = '<span class="button-icon" aria-hidden="true">↻</span>再写一次';
    return;
  }

  const isLastRound = state.currentIndex === state.deck.length - 1;
  if (isLastRound) {
    nextButton.innerHTML = '<span class="button-icon" aria-hidden="true">✓</span>完成';
  }
}

function renderAnswerReview(current, response, isCorrect, mode) {
  const note = getWordNote(current);
  const word = escapeHtml(current.word);
  const correctKey = escapeHtml(normaliseKey(current.word));
  const correctActions = isCorrect
    ? `
      <div class="correct-item-actions review-word-actions" aria-label="${word} 操作">
        <button class="correct-icon-button" type="button" data-favorite-review-correct="${correctKey}" title="收藏到错题本" aria-label="收藏 ${word} 到错题本">☆</button>
        <button class="correct-icon-button correct-remove-button" type="button" data-remove-review-correct="${correctKey}" title="移除答对记录" aria-label="移除 ${word} 的答对记录">×</button>
      </div>
    `
    : "";
  const responseText =
    mode === "dictation"
      ? `你填写的是 ${escapeHtml(response)}。`
      : mode === "reading"
        ? isCorrect
          ? "你选中了正确释义。"
          : `你选择了 ${escapeHtml(response)}，正确释义是 ${escapeHtml(note.zh)}。`
      : isCorrect
        ? "你选中了正确答案。"
        : `你选择了 ${escapeHtml(response)}，正确答案是 ${escapeHtml(current.word)}。`;
  const missingText = note.missing
    ? `<p class="review-warning">这个词还没有本地中文释义。补充一次后会自动保存，下次只输入英文也会显示。</p>${renderMeaningEditor(current)}`
    : "";

  reviewPanel.innerHTML = `
    <article class="word-review ${isCorrect ? "is-correct" : "is-wrong"}">
      <div class="review-header">
        <div class="review-title">
          <span class="review-status">${isCorrect ? "正确" : "答错了"}</span>
          <strong>${word}</strong>
        </div>
        ${correctActions}
      </div>
      <p class="review-selected">${responseText}</p>
      <dl class="definition-list">
        <div>
          <dt>中文释义</dt>
          <dd>${escapeHtml(note.zh)}</dd>
        </div>
        <div>
          <dt>English definition</dt>
          <dd>${escapeHtml(note.en)}</dd>
        </div>
        <div>
          <dt>Example sentence</dt>
          <dd>${renderRevealedSentence(current.example, current.word)}</dd>
        </div>
      </dl>
      ${missingText}
    </article>
  `;
}

function renderMeaningEditor(current) {
  return `
    <form class="meaning-editor" data-meaning-editor data-word="${escapeHtml(current.word)}">
      <label>
        中文释义
        <input name="meaningZh" type="text" placeholder="例如：不相信；怀疑" required />
      </label>
      <label>
        English definition
        <input name="meaningEn" type="text" placeholder="可选" />
      </label>
      <button class="secondary-button" type="submit">保存释义</button>
    </form>
  `;
}

function saveUserNote(word, zh, en = "", example = "") {
  const key = normaliseKey(word);
  const meaningZh = normaliseWord(zh);
  const meaningEn = normaliseWord(en);
  const practiceExample = normaliseWord(example);
  const existingExample = normaliseWord(state.userNotes[key]?.example || findLocalWordNote(word)?.example || "");
  if (!key || !meaningZh) return false;

  state.userNotes[key] = {
    zh: meaningZh,
    en: meaningEn || "User-supplied Chinese meaning.",
    example: isSpecificPracticeExample(practiceExample, word) ? practiceExample : existingExample,
  };
  saveUserNotes();
  refreshFavoriteBookNote(word);
  return true;
}

function nextRound() {
  if (!state.answered) return;

  if (state.retryCurrent) {
    state.retryCurrent = false;
    renderRound();
    if (autoSpeak.checked) {
      speakCurrentRound(true);
    } else {
      renderListeningState("点击朗读重新练这个单词");
    }
    saveTraining(false);
    return;
  }

  if (state.currentIndex >= state.deck.length - 1) {
    finishQuiz();
    return;
  }

  state.currentIndex += 1;
  renderRound();
  if (autoSpeak.checked) {
    speakCurrentRound(true);
  } else {
    renderListeningState("点击朗读开始本题");
  }
  saveTraining(false);
}

function finishQuiz() {
  stopRoundSpeech();
  const total = state.deck.length;
  const wrongResults = getWrongRoundResults();

  quizTitle.textContent = `${getModeLabel()}${state.isReviewingWrong ? "错词回顾" : ""}完成`;
  roundState.textContent = `${state.score} / ${total}`;
  blankSentence.textContent = "本轮练习已完成";
  choices.hidden = true;
  choices.innerHTML = "";
  answerForm.hidden = true;
  progressBar.style.width = "100%";
  setAnswerDisabled(true);
  listenButton.disabled = true;
  nextButton.disabled = true;
  nextButton.innerHTML = '<span class="button-icon" aria-hidden="true">→</span>下一题';

  if (!wrongResults.length) {
    reviewPanel.innerHTML = "<strong>全部正确。</strong>";
    saveTraining(false);
    return;
  }

  const missedList = wrongResults
    .map(
      (item) =>
        `<li><strong>${escapeHtml(item.word)}</strong><span>你的答案：${escapeHtml(
          item.response,
        )}</span><small>${renderRevealedSentence(item.example, item.word)}</small></li>`,
    )
    .join("");

  reviewPanel.innerHTML = `
    <div class="review-summary-actions">
      <strong>本轮答错过：</strong>
      <button class="primary-button review-missed-button" type="button" data-review-missed>
        <span class="button-icon" aria-hidden="true">↻</span>
        开始错词回顾
      </button>
    </div>
    <ul class="missed-list">${missedList}</ul>
  `;
  saveTraining(false);
}

function getWrongRoundResults() {
  const wrong = new Map();
  state.results.forEach((result) => {
    const key = normaliseKey(result.word);
    if (!result.correct && key && !wrong.has(key)) {
      wrong.set(key, result);
    }
  });
  return [...wrong.values()];
}

function getWrongReviewEntries() {
  return getWrongRoundResults()
    .map((result) => state.deck.find((entry) => normaliseKey(entry.word) === normaliseKey(result.word)))
    .filter(Boolean)
    .map((entry) => ({ ...entry }));
}

function startReviewDeck(entries, mode, emptyMessage = "没有可复习的错词") {
  if (!entries.length) {
    reviewPanel.innerHTML = `<strong>${escapeHtml(emptyMessage)}</strong>`;
    return;
  }

  if (bookModes.includes(mode) && state.mode !== mode) {
    const radio = modeRadios.find((item) => item.value === mode);
    if (radio) radio.checked = true;
    switchModeInput(mode, false);
  }

  state.mode = mode;
  stopRoundSpeech();
  state.deck = shuffle(entries.map((entry) => ({ ...entry })));
  state.currentIndex = 0;
  state.score = 0;
  state.results = [];
  state.answered = false;
  state.retryCurrent = false;
  state.heard = false;
  state.isReviewingWrong = true;
  scoreValue.textContent = "0";
  updateScoreBox();
  renderRound();
  if (autoSpeak.checked) {
    speakCurrentRound(true);
  } else {
    renderListeningState("点击朗读开始错词回顾");
  }
  saveTraining(false);
}

function startWrongReview() {
  startReviewDeck(getWrongReviewEntries(), state.mode, "本轮没有答错过的单词");
}

function favoriteBookItemToEntry(item) {
  const note = getWordNote({ word: item.word, meaningZh: item.meaningZh, meaningEn: item.meaningEn });
  return {
    word: item.word,
    example: item.example || note.example || "",
    exampleSource: "favorite",
    meaningZh: item.meaningZh || note.zh || "",
    meaningEn: item.meaningEn || note.en || "",
    apiError: "",
  };
}

function startFavoriteBookReview() {
  const entries = Object.values(state.favoriteBook[state.bookMode] || {})
    .filter((item) => item.word)
    .sort((a, b) => (b.missedAt || 0) - (a.missedAt || 0))
    .map(favoriteBookItemToEntry)
    .filter(hasCompletePracticeData);

  startReviewDeck(entries, state.bookMode, `${getModeLabel(state.bookMode)}收藏本暂无可复习错词`);
}

function getFinalRoundResults() {
  const latest = new Map();
  state.results.forEach((result) => {
    latest.set(normaliseKey(result.word), result);
  });
  return [...latest.values()];
}

function updateScoreBox() {
  const correctCount = state.results.filter((result) => result.correct).length;
  const savedCount = Object.keys(state.correctBook[state.mode] || {}).length;
  scoreBox.disabled = correctCount === 0 && savedCount === 0;
  scoreBox.setAttribute(
    "aria-label",
    savedCount
      ? `查看${getModeLabel()}已答对的 ${savedCount} 个单词`
      : "当前模式还没有答对的单词",
  );
  scoreBox.title = savedCount ? "查看已答对单词" : "当前模式还没有答对的单词";
}

function renderCorrectAnswers() {
  const correct = Object.values(state.correctBook[state.mode] || {}).sort(
    (a, b) => (b.correctAt || 0) - (a.correctAt || 0),
  );
  if (!correct.length) {
    reviewPanel.innerHTML = `<strong>${getModeLabel()}还没有答对记录。</strong>`;
    return;
  }

  const correctList = correct
    .map((item) => {
      const note = getWordNote(item);
      const key = escapeHtml(normaliseKey(item.word));
      const word = escapeHtml(item.word);
      return `
        <li>
          <div class="correct-item-top">
            <strong>${word}</strong>
            <div class="correct-item-actions" aria-label="${word} 操作">
              <button class="correct-icon-button" type="button" data-favorite-correct="${key}" title="收藏到错题本" aria-label="收藏 ${word} 到错题本">☆</button>
              <button class="correct-icon-button correct-remove-button" type="button" data-remove-correct="${key}" title="移除答对记录" aria-label="移除 ${word} 的答对记录">×</button>
            </div>
          </div>
          <span>你的答案：${escapeHtml(item.response || "未记录")}</span>
          <span>释义：${escapeHtml(note.zh || "暂无释义")}</span>
          <small>${renderRevealedSentence(item.example || "", item.word)}</small>
        </li>
      `;
    })
    .join("");

  reviewPanel.innerHTML = `<strong>${getModeLabel()}已答对：</strong><ul class="correct-list">${correctList}</ul>`;
}

function updateProgress() {
  const total = state.deck.length || 1;
  const completed = state.currentIndex + (state.answered ? 1 : 0);
  progressBar.style.width = `${Math.min(100, (completed / total) * 100)}%`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadSampleWords() {
  wordInput.value = sampleEntries.join("\n");
  saveCurrentModeInput();
  startQuiz();
}

function updateSetupControls() {
  optionCount.disabled = getSelectedMode() === "dictation";
}

modeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) switchModeInput(radio.value);
  });
});
bookTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.bookMode = button.dataset.bookTab;
    renderFavoriteBook();
  });
});
bookList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-book]");
  if (!button) return;
  removeFavoriteBookItem(state.bookMode, button.dataset.removeBook);
});
bookReviewButton.addEventListener("click", startFavoriteBookReview);
exportDataButton.addEventListener("click", exportTrainingData);
importDataButton.addEventListener("click", importTrainingData);
voiceSelect.addEventListener("change", () => updateVoiceStatus(getSelectedVoice()));
startButton.addEventListener("click", startQuiz);
saveTrainingButton.addEventListener("click", () => saveTraining(true));
cleanKnownButton.addEventListener("click", cleanKnownWordsFromInput);
sampleButton.addEventListener("click", loadSampleWords);
listenButton.addEventListener("click", () => speakCurrentRound(true));
nextButton.addEventListener("click", nextRound);
scoreBox.addEventListener("click", renderCorrectAnswers);
autoSpeak.addEventListener("change", updateActionButtons);
wordInput.addEventListener("input", saveCurrentModeInput);
answerInput.addEventListener("input", updateActionButtons);
answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkAnswer();
});
reviewPanel.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-meaning-editor]");
  if (!form) return;

  event.preventDefault();
  const formData = new FormData(form);
  const word = form.dataset.word || "";
  const meaningZh = formData.get("meaningZh") || "";
  const meaningEn = formData.get("meaningEn") || "";

  if (!saveUserNote(word, meaningZh, meaningEn)) return;

  const current = state.deck[state.currentIndex];
  const lastResult = [...state.results].reverse().find((result) => normaliseKey(result.word) === normaliseKey(word));
  if (current && normaliseKey(current.word) === normaliseKey(word) && lastResult) {
    renderAnswerReview(current, lastResult.response, lastResult.correct, lastResult.mode);
  } else {
    form.replaceWith("释义已保存。");
  }
});
reviewPanel.addEventListener("click", (event) => {
  const favoriteReviewButton = event.target.closest("[data-favorite-review-correct]");
  if (favoriteReviewButton) {
    moveCorrectItemToFavoriteBook(state.mode, favoriteReviewButton.dataset.favoriteReviewCorrect, false);
    const actions = favoriteReviewButton.closest(".review-word-actions");
    if (actions) actions.replaceWith("已收藏到错题本。");
    return;
  }

  const removeReviewButton = event.target.closest("[data-remove-review-correct]");
  if (removeReviewButton) {
    removeCorrectBookItem(state.mode, removeReviewButton.dataset.removeReviewCorrect, false);
    const actions = removeReviewButton.closest(".review-word-actions");
    if (actions) actions.replaceWith("已移除答对记录。");
    return;
  }

  const favoriteButton = event.target.closest("[data-favorite-correct]");
  if (favoriteButton) {
    moveCorrectItemToFavoriteBook(state.mode, favoriteButton.dataset.favoriteCorrect);
    return;
  }

  const removeButton = event.target.closest("[data-remove-correct]");
  if (removeButton) {
    removeCorrectBookItem(state.mode, removeButton.dataset.removeCorrect);
    return;
  }

  const button = event.target.closest("[data-review-missed]");
  if (!button) return;

  startWrongReview();
});

document.addEventListener("keydown", (event) => {
  if ((state.mode === "listening" || state.mode === "reading") && /^[1-9]$/.test(event.key)) {
    const button = choices.querySelectorAll("button")[Number(event.key) - 1];
    if (button && !button.disabled) button.click();
  }

  if (event.key === "Enter" && state.answered && !nextButton.disabled) {
    event.preventDefault();
    nextButton.click();
  }
});

state.mode = getSelectedMode();
wordInput.value = state.modeInputs[state.mode] || wordInput.value;
saveCurrentModeInput();
loadVoices();
updateSetupControls();
updateScoreBox();
renderFavoriteBook();
restoreTraining();
if ("speechSynthesis" in window) {
  if (typeof window.speechSynthesis.addEventListener === "function") {
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
  } else {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}
