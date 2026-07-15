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

const writingPatterns = [
  {
    id: "women-sports-reason",
    topic: "women's sports",
    role: "中心句",
    zhPrompt: "女性运动员需要更多媒体报道。",
    targetSentence: "One major reason is that female athletes need more media coverage.",
    safeChunks: ["female athletes", "media coverage", "one major reason"],
  },
  {
    id: "women-sports-cause",
    topic: "women's sports",
    role: "原因句",
    zhPrompt: "曝光能吸引赞助商，并改善训练条件。",
    targetSentence: "This is because exposure can attract sponsors and improve training conditions.",
    safeChunks: ["exposure", "attract sponsors", "training conditions"],
  },
  {
    id: "women-sports-explain",
    topic: "women's sports",
    role: "解释句",
    zhPrompt: "这意味着女子体育能在年轻观众中更可见。",
    targetSentence: "In practice, this means women's sports can become more visible to young audiences.",
    safeChunks: ["women's sports", "young audiences", "more visible"],
  },
  {
    id: "women-sports-example",
    topic: "women's sports",
    role: "例子句",
    zhPrompt: "固定播放时间能让观众熟悉女性运动员。",
    targetSentence: "For example, regular airtime can help viewers become familiar with female athletes.",
    safeChunks: ["regular airtime", "viewers", "female athletes"],
  },
  {
    id: "women-sports-result",
    topic: "women's sports",
    role: "结果句",
    zhPrompt: "结果是，女子体育能获得更高收视率和更多公众支持。",
    targetSentence: "As a result, women's sports can gain higher ratings and more public support.",
    safeChunks: ["higher ratings", "public support", "as a result"],
  },
  {
    id: "media-reason",
    topic: "media coverage",
    role: "中心句",
    zhPrompt: "媒体报道会塑造公众兴趣。",
    targetSentence: "One major reason is that media coverage shapes public interest.",
    safeChunks: ["media coverage", "public interest", "shapes"],
  },
  {
    id: "media-cause",
    topic: "media coverage",
    role: "原因句",
    zhPrompt: "人们更可能关注他们经常看到的体育项目。",
    targetSentence: "This is because people are more likely to follow sports they see regularly.",
    safeChunks: ["more likely to", "follow sports", "regularly"],
  },
  {
    id: "media-explain",
    topic: "media coverage",
    role: "解释句",
    zhPrompt: "这意味着广播公司能影响观众偏好。",
    targetSentence: "In practice, this means broadcasters can influence viewers' preferences.",
    safeChunks: ["broadcasters", "viewers' preferences", "influence"],
  },
  {
    id: "media-example",
    topic: "media coverage",
    role: "例子句",
    zhPrompt: "黄金时段节目能提高收视率。",
    targetSentence: "For example, prime-time programs can increase audience ratings.",
    safeChunks: ["prime-time programs", "audience ratings", "increase"],
  },
  {
    id: "media-result",
    topic: "media coverage",
    role: "结果句",
    zhPrompt: "结果是，团队可以获得更多广告收入。",
    targetSentence: "As a result, teams can earn more advertising revenue.",
    safeChunks: ["advertising revenue", "earn more", "as a result"],
  },
  {
    id: "equality-reason",
    topic: "gender equality",
    role: "中心句",
    zhPrompt: "平等机会能改善社会公平。",
    targetSentence: "One major reason is that equal opportunities can improve social fairness.",
    safeChunks: ["equal opportunities", "social fairness", "improve"],
  },
  {
    id: "equality-cause",
    topic: "gender equality",
    role: "原因句",
    zhPrompt: "女性和男性应该有同样成功的机会。",
    targetSentence: "This is because women and men should have the same chance to succeed.",
    safeChunks: ["women and men", "same chance", "succeed"],
  },
  {
    id: "equality-explain",
    topic: "gender equality",
    role: "解释句",
    zhPrompt: "这意味着学校应该鼓励女孩参加运动。",
    targetSentence: "In practice, this means schools should encourage girls to take part in sport.",
    safeChunks: ["encourage girls", "take part in sport", "schools"],
  },
  {
    id: "equality-example",
    topic: "gender equality",
    role: "例子句",
    zhPrompt: "公平的媒体关注能挑战旧的性别刻板印象。",
    targetSentence: "For example, fair media attention can challenge old gender stereotypes.",
    safeChunks: ["fair media attention", "gender stereotypes", "challenge"],
  },
  {
    id: "equality-result",
    topic: "gender equality",
    role: "结果句",
    zhPrompt: "结果是，社会可能变得更包容、更平衡。",
    targetSentence: "As a result, society may become more inclusive and balanced.",
    safeChunks: ["society", "inclusive", "balanced"],
  },
  {
    id: "education-reason",
    topic: "education and technology",
    role: "中心句",
    zhPrompt: "科技能让教育更容易获得。",
    targetSentence: "One major reason is that technology can make education more accessible.",
    safeChunks: ["technology", "education", "more accessible"],
  },
  {
    id: "education-cause",
    topic: "education and technology",
    role: "原因句",
    zhPrompt: "在线课程让学生按自己的节奏学习。",
    targetSentence: "This is because online lessons allow students to study at their own pace.",
    safeChunks: ["online lessons", "at their own pace", "students"],
  },
  {
    id: "education-explain",
    topic: "education and technology",
    role: "解释句",
    zhPrompt: "这意味着老师能支持有不同需求的学生。",
    targetSentence: "In practice, this means teachers can support students with different needs.",
    safeChunks: ["teachers", "different needs", "support students"],
  },
  {
    id: "health-example",
    topic: "health and habits",
    role: "例子句",
    zhPrompt: "健康应用能提醒人们定期运动。",
    targetSentence: "For example, health apps can remind people to exercise regularly.",
    safeChunks: ["health apps", "exercise regularly", "remind people"],
  },
  {
    id: "health-result",
    topic: "health and habits",
    role: "结果句",
    zhPrompt: "结果是，人们可能逐渐养成更健康的习惯。",
    targetSentence: "As a result, people may develop healthier habits over time.",
    safeChunks: ["healthier habits", "over time", "develop"],
  },
  {
    id: "advertising-revenue-reason",
    topic: "advertising revenue",
    role: "中心句",
    zhPrompt: "广告收入能帮助球队改善训练条件。",
    targetSentence: "One major reason is that advertising revenue can help teams improve training conditions.",
    safeChunks: ["advertising revenue", "improve training conditions", "teams"],
  },
  {
    id: "public-interest-cause",
    topic: "public interest",
    role: "原因句",
    zhPrompt: "持续报道能让公众兴趣逐渐增长。",
    targetSentence: "This is because regular coverage can help public interest grow over time.",
    safeChunks: ["regular coverage", "public interest", "grow over time"],
  },
  {
    id: "public-interest-result",
    topic: "public interest",
    role: "结果句",
    zhPrompt: "结果是，更多人可能参与体育并支持本地球队。",
    targetSentence: "As a result, more people may take part in sport and support local teams.",
    safeChunks: ["take part in sport", "support local teams", "as a result"],
  },
  {
    id: "technology-result",
    topic: "education and technology",
    role: "结果句",
    zhPrompt: "结果是，即使学生在家学习也能获得支持。",
    targetSentence: "As a result, students can receive support even when they study at home.",
    safeChunks: ["receive support", "study at home", "as a result"],
  },
];

const writingPatternPacks = [
  {
    id: "women-sports",
    topic: "Women's sports",
    bodyChain: [
      {
        id: "women-sports-reason",
        role: "中心句",
        zhPrompt: "女性运动员需要更多媒体报道。",
        sentenceFrame: "One major reason is that ____ need more ____.",
        targetSentence: "One major reason is that female athletes need more media coverage.",
        slots: ["female athletes", "media coverage"],
        safeChunks: ["female athletes", "media coverage"],
      },
      {
        id: "women-sports-cause",
        role: "原因句",
        zhPrompt: "曝光能吸引赞助商，并改善训练条件。",
        sentenceFrame: "This is because ____ can attract ____ and improve ____.",
        targetSentence: "This is because exposure can attract sponsors and improve training conditions.",
        slots: ["exposure", "sponsors", "training conditions"],
        safeChunks: ["exposure", "attract sponsors", "training conditions"],
      },
      {
        id: "women-sports-explain",
        role: "解释句",
        zhPrompt: "这意味着女子体育能在年轻观众中更可见。",
        sentenceFrame: "In practice, this means ____ can become more visible to ____.",
        targetSentence: "In practice, this means women's sports can become more visible to young audiences.",
        slots: ["women's sports", "young audiences"],
        safeChunks: ["women's sports", "young audiences", "more visible"],
      },
      {
        id: "women-sports-example",
        role: "例子句",
        zhPrompt: "固定播放时间能让观众熟悉女性运动员。",
        sentenceFrame: "For example, ____ can help ____ become familiar with ____.",
        targetSentence: "For example, regular airtime can help viewers become familiar with female athletes.",
        slots: ["regular airtime", "viewers", "female athletes"],
        safeChunks: ["regular airtime", "viewers", "female athletes"],
      },
      {
        id: "women-sports-result",
        role: "结果句",
        zhPrompt: "结果是，女子体育能获得更高收视率和更多公众支持。",
        sentenceFrame: "As a result, women's sports can gain ____ and more ____.",
        targetSentence: "As a result, women's sports can gain higher ratings and more public support.",
        slots: ["higher ratings", "public support"],
        safeChunks: ["higher ratings", "public support"],
      },
    ],
  },
  {
    id: "media-coverage",
    topic: "Media coverage",
    bodyChain: [
      {
        id: "media-reason",
        role: "中心句",
        zhPrompt: "媒体报道会塑造公众兴趣。",
        sentenceFrame: "One major reason is that ____ shapes ____.",
        targetSentence: "One major reason is that media coverage shapes public interest.",
        slots: ["media coverage", "public interest"],
        safeChunks: ["media coverage", "public interest"],
      },
      {
        id: "media-cause",
        role: "原因句",
        zhPrompt: "人们更可能关注他们经常看到的体育项目。",
        sentenceFrame: "This is because people are more likely to ____ they ____.",
        targetSentence: "This is because people are more likely to follow sports they see regularly.",
        slots: ["follow sports", "see regularly"],
        safeChunks: ["follow sports", "see regularly"],
      },
      {
        id: "media-explain",
        role: "解释句",
        zhPrompt: "这意味着广播公司能影响观众偏好。",
        sentenceFrame: "In practice, this means ____ can influence ____.",
        targetSentence: "In practice, this means broadcasters can influence viewers' preferences.",
        slots: ["broadcasters", "viewers' preferences"],
        safeChunks: ["broadcasters", "viewers' preferences"],
      },
      {
        id: "media-example",
        role: "例子句",
        zhPrompt: "黄金时段节目能提高收视率。",
        sentenceFrame: "For example, ____ can increase ____.",
        targetSentence: "For example, prime-time programs can increase audience ratings.",
        slots: ["prime-time programs", "audience ratings"],
        safeChunks: ["prime-time programs", "audience ratings"],
      },
      {
        id: "media-result",
        role: "结果句",
        zhPrompt: "结果是，团队可以获得更多广告收入。",
        sentenceFrame: "As a result, teams can earn more ____.",
        targetSentence: "As a result, teams can earn more advertising revenue.",
        slots: ["advertising revenue"],
        safeChunks: ["advertising revenue"],
      },
    ],
  },
  {
    id: "education-technology",
    topic: "Education and technology",
    bodyChain: [
      {
        id: "education-reason",
        role: "中心句",
        zhPrompt: "科技能让教育更容易获得。",
        sentenceFrame: "One major reason is that ____ can make ____ more ____.",
        targetSentence: "One major reason is that technology can make education more accessible.",
        slots: ["technology", "education", "accessible"],
        safeChunks: ["technology", "education", "more accessible"],
      },
      {
        id: "education-cause",
        role: "原因句",
        zhPrompt: "在线课程让学生按自己的节奏学习。",
        sentenceFrame: "This is because ____ allow students to study ____.",
        targetSentence: "This is because online lessons allow students to study at their own pace.",
        slots: ["online lessons", "at their own pace"],
        safeChunks: ["online lessons", "at their own pace"],
      },
      {
        id: "education-explain",
        role: "解释句",
        zhPrompt: "这意味着老师能支持有不同需求的学生。",
        sentenceFrame: "In practice, this means ____ can support students with ____.",
        targetSentence: "In practice, this means teachers can support students with different needs.",
        slots: ["teachers", "different needs"],
        safeChunks: ["teachers", "different needs"],
      },
      {
        id: "education-example",
        role: "例子句",
        zhPrompt: "数字平台能给学生即时反馈。",
        sentenceFrame: "For example, ____ can give students ____.",
        targetSentence: "For example, digital platforms can give students immediate feedback.",
        slots: ["digital platforms", "immediate feedback"],
        safeChunks: ["digital platforms", "immediate feedback"],
      },
      {
        id: "education-result",
        role: "结果句",
        zhPrompt: "结果是，即使学生在家学习也能获得支持。",
        sentenceFrame: "As a result, students can ____ even when they ____.",
        targetSentence: "As a result, students can receive support even when they study at home.",
        slots: ["receive support", "study at home"],
        safeChunks: ["receive support", "study at home"],
      },
    ],
  },
  {
    id: "exam-error-sprint",
    topic: "考前错点总包",
    bodyChain: [
      {
        id: "exam-discuss-essay",
        role: "拼写反射",
        zhPrompt: "这篇文章将讨论两种观点。重点练 discuss / essay。",
        sentenceFrame: "This ____ will ____ both views before giving my opinion.",
        targetSentence: "This essay will discuss both views before giving my opinion.",
        slots: ["essay", "discuss"],
        safeChunks: ["essay", "discuss"],
      },
      {
        id: "exam-social-perspective",
        role: "固定搭配",
        zhPrompt: "从社会角度看，公共体育设施很有价值。",
        sentenceFrame: "____, public sports facilities are valuable.",
        targetSentence: "From a social perspective, public sports facilities are valuable.",
        slots: ["From a social perspective"],
        safeChunks: ["From a social perspective"],
      },
      {
        id: "exam-harmful-to",
        role: "固定搭配",
        zhPrompt: "过度使用手机对青少年有害。",
        sentenceFrame: "It is ____ teenagers to spend too much time on mobile phones.",
        targetSentence: "It is harmful to teenagers to spend too much time on mobile phones.",
        slots: ["harmful to"],
        safeChunks: ["harmful to"],
      },
      {
        id: "exam-professional-stadium",
        role: "拼写反射",
        zhPrompt: "专业体育场能吸引更多观众。",
        sentenceFrame: "A ____ can attract more spectators.",
        targetSentence: "A professional stadium can attract more spectators.",
        slots: ["professional stadium"],
        safeChunks: ["professional", "stadium"],
      },
      {
        id: "exam-performance",
        role: "词性选择",
        zhPrompt: "运动员的表现会影响公众兴趣。这里用名词 performance。",
        sentenceFrame: "Athletes' ____ can influence public interest.",
        targetSentence: "Athletes' performance can influence public interest.",
        slots: ["performance"],
        safeChunks: ["performance"],
      },
      {
        id: "exam-admittedly",
        role: "让步句",
        zhPrompt: "诚然，一些体育项目获得的公众关注较少。",
        sentenceFrame: "____, some sports receive less public attention.",
        targetSentence: "Admittedly, some sports receive less public attention.",
        slots: ["Admittedly"],
        safeChunks: ["Admittedly"],
      },
      {
        id: "exam-positive-negative",
        role: "拼写反射",
        zhPrompt: "这个趋势有积极和消极影响。",
        sentenceFrame: "This trend has both ____ and ____ effects.",
        targetSentence: "This trend has both positive and negative effects.",
        slots: ["positive", "negative"],
        safeChunks: ["positive", "negative"],
      },
      {
        id: "exam-occupation-compulsory",
        role: "拼写反射",
        zhPrompt: "学校不应该把具体职业培训设为所有学生的必修内容。",
        sentenceFrame: "Schools should not make training for a specific ____ ____ for all students.",
        targetSentence: "Schools should not make training for a specific occupation compulsory for all students.",
        slots: ["occupation", "compulsory"],
        safeChunks: ["occupation", "compulsory"],
      },
      {
        id: "exam-government-funding",
        role: "固定搭配",
        zhPrompt: "政府资助来自公共资源。",
        sentenceFrame: "____ comes from ____.",
        targetSentence: "Government funding comes from public resources.",
        slots: ["Government funding", "public resources"],
        safeChunks: ["government funding", "public resources"],
      },
      {
        id: "exam-revenue",
        role: "写作表达",
        zhPrompt: "如果广播减少，俱乐部可能失去重要收入来源。",
        sentenceFrame: "If broadcasts decline, clubs may ____.",
        targetSentence: "If broadcasts decline, clubs may lose an important source of revenue.",
        slots: ["lose an important source of revenue"],
        safeChunks: ["lose an important source of revenue"],
      },
      {
        id: "exam-nowadays",
        role: "拼写反射",
        zhPrompt: "如今，许多学生依赖线上学习。",
        sentenceFrame: "____, many students rely on online learning.",
        targetSentence: "Nowadays, many students rely on online learning.",
        slots: ["Nowadays"],
        safeChunks: ["Nowadays"],
      },
      {
        id: "exam-wide-range",
        role: "固定搭配",
        zhPrompt: "学校应该提供广泛的课程。",
        sentenceFrame: "Schools should offer ____ subjects.",
        targetSentence: "Schools should offer a wide range of subjects.",
        slots: ["a wide range of"],
        safeChunks: ["a wide range of"],
      },
      {
        id: "exam-self-driving-position",
        role: "写作表达",
        zhPrompt: "自动驾驶汽车可能改变人们申请新职位所需的技能。",
        sentenceFrame: "____ may change the skills people need to ____.",
        targetSentence: "Self-driving cars may change the skills people need to apply for a new position.",
        slots: ["Self-driving cars", "apply for a new position"],
        safeChunks: ["self-driving cars", "apply for a new position"],
      },
      {
        id: "exam-environment-enterprise",
        role: "拼写反射",
        zhPrompt: "每个企业都应该帮助保护环境。",
        sentenceFrame: "Every ____ should help protect the ____.",
        targetSentence: "Every enterprise should help protect the environment.",
        slots: ["enterprise", "environment"],
        safeChunks: ["enterprise", "environment"],
      },
      {
        id: "exam-motivate-people",
        role: "固定搭配",
        zhPrompt: "体育转播能激励人们参加锻炼。",
        sentenceFrame: "Sports broadcasts can ____ to take part in exercise.",
        targetSentence: "Sports broadcasts can motivate people to take part in exercise.",
        slots: ["motivate people"],
        safeChunks: ["motivate people", "broadcasts"],
      },
      {
        id: "exam-quality-of-life",
        role: "地道表达",
        zhPrompt: "公共设施能提高生活质量。不要写 daily quality of life。",
        sentenceFrame: "Public facilities can ____.",
        targetSentence: "Public facilities can improve quality of life.",
        slots: ["improve quality of life"],
        safeChunks: ["improve quality of life"],
      },
      {
        id: "exam-cultural-diversity",
        role: "固定搭配",
        zhPrompt: "移民可以增加文化多样性。",
        sentenceFrame: "Immigration can increase ____.",
        targetSentence: "Immigration can increase cultural diversity.",
        slots: ["cultural diversity"],
        safeChunks: ["cultural diversity"],
      },
      {
        id: "exam-access-to",
        role: "固定搭配",
        zhPrompt: "学生应该有机会获得数字资源。",
        sentenceFrame: "Students should ____ digital resources.",
        targetSentence: "Students should have access to digital resources.",
        slots: ["have access to"],
        safeChunks: ["have access to"],
      },
      {
        id: "exam-electric-power",
        role: "地道表达",
        zhPrompt: "清洁能源展示了电力的潜力。",
        sentenceFrame: "Clean energy shows ____.",
        targetSentence: "Clean energy shows the potential of electric power.",
        slots: ["the potential of electric power"],
        safeChunks: ["the potential of electric power"],
      },
      {
        id: "exam-to-some-extent-receive",
        role: "固定搭配",
        zhPrompt: "在某种程度上，学生应该获得更多支持。",
        sentenceFrame: "____, students should ____ more support.",
        targetSentence: "To some extent, students should receive more support.",
        slots: ["To some extent", "receive"],
        safeChunks: ["To some extent", "receive"],
      },
      {
        id: "exam-modern-diets",
        role: "固定搭配",
        zhPrompt: "现代饮食会影响人们的健康。",
        sentenceFrame: "____ can affect people's health.",
        targetSentence: "Modern diets can affect people's health.",
        slots: ["Modern diets"],
        safeChunks: ["modern diets"],
      },
      {
        id: "exam-carbon-emissions",
        role: "地道表达",
        zhPrompt: "私家车会产生大量碳排放。不要写 increase large amounts of carbon emissions。",
        sentenceFrame: "Private cars can ____.",
        targetSentence: "Private cars can produce large amounts of carbon emissions.",
        slots: ["produce large amounts of carbon emissions"],
        safeChunks: ["produce large amounts of carbon emissions"],
      },
      {
        id: "exam-improve-skills",
        role: "固定搭配",
        zhPrompt: "志愿工作能提升技能。",
        sentenceFrame: "Voluntary work can help young people ____.",
        targetSentence: "Voluntary work can help young people improve skills.",
        slots: ["improve skills"],
        safeChunks: ["improve skills"],
      },
      {
        id: "exam-vital-role",
        role: "固定搭配",
        zhPrompt: "教育在个人发展中发挥重要作用。",
        sentenceFrame: "Education can ____ in personal development.",
        targetSentence: "Education can play a vital role in personal development.",
        slots: ["play a vital role"],
        safeChunks: ["play a vital role"],
      },
      {
        id: "exam-sufficient-phenomenon",
        role: "拼写反射",
        zhPrompt: "在线学习已经成为一种全球现象，但一些学校缺乏足够资源。",
        sentenceFrame: "Online learning has become a global ____, but some schools lack ____ resources.",
        targetSentence: "Online learning has become a global phenomenon, but some schools lack sufficient resources.",
        slots: ["phenomenon", "sufficient"],
        safeChunks: ["phenomenon", "sufficient"],
      },
      {
        id: "exam-daily",
        role: "拼写反射",
        zhPrompt: "锻炼应该成为学生日常生活的一部分。",
        sentenceFrame: "Exercise should become part of students' ____ routine.",
        targetSentence: "Exercise should become part of students' daily routine.",
        slots: ["daily"],
        safeChunks: ["daily"],
      },
    ],
  },
];

const BOOK_STORAGE_KEY = "ieltsTrainerFavoriteBookV1";
const USER_NOTES_STORAGE_KEY = "ieltsTrainerUserNotesV1";
const MODE_INPUT_STORAGE_KEY = "ieltsTrainerModeInputsV1";
const CORRECT_STORAGE_KEY = "ieltsTrainerCorrectBookV1";
const TRAINING_SNAPSHOT_STORAGE_KEY = "ieltsTrainerSnapshotV1";
const WRITING_MISTAKE_STORAGE_KEY = "ieltsTrainerWritingMistakesV1";
const WRITING_FAVORITE_STORAGE_KEY = "ieltsTrainerWritingFavoriteBookV1";
const WRITING_STATS_STORAGE_KEY = "ieltsTrainerWritingStatsV1";
const WRITING_STUDIO_STORAGE_KEY = "ieltsTrainerWritingStudioV2";
const WRITING_SPLIT_STORAGE_KEY = "ieltsTrainerWritingSplitRatioV1";
const SHORTCUT_STORAGE_KEY = "ieltsTrainerShortcutsV1";
const SIDEBAR_STORAGE_KEY = "ieltsTrainerSidebarCollapsedV1";
const LISTENING_MISTAKE_STORAGE_KEY = "ieltsListeningMistakeLibraryV1";
const READING_MISTAKE_STORAGE_KEY = "ieltsReadingMistakeLibraryV1";
const READING_MISTAKE_DELETED_STORAGE_KEY = "ieltsReadingMistakeDeletedIdsV1";
const SPEECH_SETTINGS_STORAGE_KEY = "ieltsTrainerSpeechSettingsV1";
const TESSERACT_SCRIPT_URL = "https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/tesseract.min.js";
const LISTENING_OCR_MODEL_TIMEOUT_MS = 50_000;
const LISTENING_OCR_WORKER_IDLE_MS = 15 * 60_000;
const LISTENING_TRANSCRIPT_OCR_MAX_SIDE = 1200;
const LUCIDE_SCRIPT_URL = "https://cdn.jsdelivr.net/npm/lucide@0.468.0/dist/umd/lucide.min.js";
const listeningMistakeErrorLabels = {
  word: "单词没反应",
  passage: "长段听不懂",
  paraphrase: "同义替换没反应",
  distractor: "干扰项被骗",
  spelling: "单复数/拼写错误",
};
const listeningMistakeStatusLabels = {
  unmastered: "未掌握",
  reviewing: "复习中",
  mastered: "已掌握",
};
const listeningMistakeMethodLabels = {
  relisten: "重听原题",
  dictation: "精听听写",
  transcript: "对照 transcript",
  shadowing: "影子跟读",
};
const readingMistakeQuestionTypeLabels = {
  trueFalseNotGiven: "True / False / Not Given",
  yesNoNotGiven: "Yes / No / Not Given",
  multipleChoice: "选择题",
  matchingHeadings: "段落标题匹配",
  matchingInformation: "信息匹配",
  completion: "填空题",
  shortAnswer: "简答题",
  other: "其他",
};
const readingMistakeErrorLabels = {
  location: "定位错",
  paraphrase: "同义替换没看出",
  falseNotGiven: "False/Not Given 混淆",
  choiceTrap: "选择题陷阱",
  mainIdea: "段落主旨抓偏",
  timePressure: "时间压力乱选",
};
const readingMistakeQuestionTypeOrder = Object.keys(readingMistakeQuestionTypeLabels);
const bookModes = ["listening", "dictation", "reading"];
const defaultShortcutSettings = {
  advance: "Enter",
  replay: "KeyR",
  favorite: "KeyE",
  reveal: "Escape",
  retry: "KeyF",
};
const shortcutLabels = {
  Enter: "Enter",
  Space: "Space",
  Escape: "Esc",
  KeyR: "R",
  KeyE: "E",
  KeyF: "F",
  KeyJ: "J",
  KeyK: "K",
  ArrowRight: "→",
};
const appShell = document.querySelector(".app-shell");
const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebarSearchButton = document.querySelector("#sidebarSearchButton");
const sidebarRail = document.querySelector("#sidebarRail");
const sidebarRailModeButtons = [...document.querySelectorAll("[data-sidebar-rail-mode]")];
const sidebarRailSurfaceButtons = [...document.querySelectorAll("[data-sidebar-rail-surface]")];
const sidebarRailFavoritesButton = document.querySelector("#sidebarRailFavoritesButton");
const sidebarRailSettingsButton = document.querySelector("#sidebarRailSettingsButton");
const favoritesDrawer = document.querySelector("#favoritesDrawer");
const writingModeNavButton = document.querySelector("#writingModeNavButton");
const listeningMistakeNavButton = document.querySelector("#listeningMistakeNavButton");
const listeningMistakeNavCount = document.querySelector("#listeningMistakeNavCount");
const readingMistakeNavButton = document.querySelector("#readingMistakeNavButton");
const readingMistakeNavCount = document.querySelector("#readingMistakeNavCount");
const settingsNavButton = document.querySelector("#settingsNavButton");
const quizPanel = document.querySelector(".quiz-panel");
const listeningMistakePanel = document.querySelector(".listening-mistake-panel");
const readingMistakePanel = document.querySelector(".reading-mistake-panel");
const writingPanel = document.querySelector(".writing-panel");
const settingsPanel = document.querySelector(".settings-panel");
const settingsPracticeMount = document.querySelector("#settingsPracticeMount");
const settingsVoiceMount = document.querySelector("#settingsVoiceMount");
const settingsShortcutMount = document.querySelector("#settingsShortcutMount");
const toolDrawer = document.querySelector(".tool-drawer");
const modeRadios = [...document.querySelectorAll('input[name="quizMode"]')];
const wordInput = document.querySelector("#wordInput");
const optionCount = document.querySelector("#optionCount");
const rateControl = document.querySelector("#rateControl");
const voiceSelect = document.querySelector("#voiceSelect");
const speechStyle = document.querySelector("#speechStyle");
const intonationControl = document.querySelector("#intonationControl");
const speechPreviewButton = document.querySelector("#speechPreviewButton");
const autoSpeak = document.querySelector("#autoSpeak");
const favoriteReviewAutoSpeak = document.querySelector("#favoriteReviewAutoSpeak");
const skipFavoriteWords = document.querySelector("#skipFavoriteWords");
const advanceShortcut = document.querySelector("#advanceShortcut");
const replayShortcut = document.querySelector("#replayShortcut");
const favoriteShortcut = document.querySelector("#favoriteShortcut");
const revealShortcut = document.querySelector("#revealShortcut");
const retryShortcut = document.querySelector("#retryShortcut");
const shortcutStatus = document.querySelector("#shortcutStatus");
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
const revealAnswerButton = document.querySelector("#revealAnswerButton");
const listenButton = document.querySelector("#listenButton");
const nextButton = document.querySelector("#nextButton");
const reviewPanel = document.querySelector("#reviewPanel");
const voiceStatus = document.querySelector("#voiceStatus");
const quizTitle = document.querySelector("#quiz-title");
const bookTabs = [...document.querySelectorAll("[data-book-tab]")];
const bookCounts = [...document.querySelectorAll("[data-book-count]")];
const bookList = document.querySelector("#bookList");
const bookSearchInput = document.querySelector("#bookSearchInput");
const bookPracticeReviewButton = document.querySelector("#bookPracticeReviewButton");
const bookListReviewButton = document.querySelector("#bookListReviewButton");
const favoriteReviewScreen = document.querySelector("#favoriteReviewScreen");
const favoriteReviewMode = document.querySelector("#favoriteReviewMode");
const favoriteReviewTitle = document.querySelector("#favoriteReviewTitle");
const favoriteReviewProgress = document.querySelector("#favoriteReviewProgress");
const favoriteReviewProgressBar = document.querySelector("#favoriteReviewProgressBar");
const favoriteListReviewMain = document.querySelector("#favoriteListReviewMain");
const favoriteReviewClose = document.querySelector("#favoriteReviewClose");
const favoriteListReviewSearch = document.querySelector("#favoriteListReviewSearch");
const favoriteListReviewSort = document.querySelector("#favoriteListReviewSort");
const favoriteListLayoutButtons = [...document.querySelectorAll("[data-favorite-list-layout]")];
const favoriteModePracticeButton = document.querySelector("#favoriteModePracticeButton");
const favoriteListReviewCount = document.querySelector("#favoriteListReviewCount");
const favoriteListReviewRows = document.querySelector("#favoriteListReviewRows");
const favoriteListReviewStatus = document.querySelector("#favoriteListReviewStatus");
const imagePasteZones = [...document.querySelectorAll("[data-image-paste-zone]")];
const clipboardImageButtons = [...document.querySelectorAll("[data-clipboard-image]")];
const exportDataButton = document.querySelector("#exportDataButton");
const importDataButton = document.querySelector("#importDataButton");
const wordDetailDialog = document.querySelector("#wordDetailDialog");
const wordDetailClose = document.querySelector("#wordDetailClose");
const wordDetailMeta = document.querySelector("#wordDetailMeta");
const wordDetailTitle = document.querySelector("#wordDetailTitle");
const wordDetailZh = document.querySelector("#wordDetailZh");
const wordDetailEn = document.querySelector("#wordDetailEn");
const wordDetailExample = document.querySelector("#wordDetailExample");
const wordDetailResponse = document.querySelector("#wordDetailResponse");
const wordDetailSpeakWord = document.querySelector("#wordDetailSpeakWord");
const wordDetailSpeakExample = document.querySelector("#wordDetailSpeakExample");
const wordDetailStatus = document.querySelector("#wordDetailStatus");
const writingStartButton = document.querySelector("#writingStartButton");
const writingAllButton = document.querySelector("#writingAllButton");
const writingReviewButton = document.querySelector("#writingReviewButton");
const writingPackSelect = document.querySelector("#writingPackSelect");
const writingPhaseButtons = [...document.querySelectorAll("[data-writing-phase]")];
const writingAccuracy = document.querySelector("#writingAccuracy");
const writingSpeed = document.querySelector("#writingSpeed");
const writingErrorCount = document.querySelector("#writingErrorCount");
const writingTopic = document.querySelector("#writingTopic");
const writingRole = document.querySelector("#writingRole");
const writingPrompt = document.querySelector("#writingPrompt");
const writingFrame = document.querySelector("#writingFrame");
const writingChunks = document.querySelector("#writingChunks");
const writingInputLabel = document.querySelector('label[for="writingInput"]');
const writingInput = document.querySelector("#writingInput");
const writingSpeakButton = document.querySelector("#writingSpeakButton");
const writingFavoriteButton = document.querySelector("#writingFavoriteButton");
const writingCheckButton = document.querySelector("#writingCheckButton");
const writingNextButton = document.querySelector("#writingNextButton");
const writingResult = document.querySelector("#writingResult");
const writingBookTabs = [...document.querySelectorAll("[data-writing-book-tab]")];
const writingMistakeCount = document.querySelector("#writingMistakeCount");
const writingFavoriteCount = document.querySelector("#writingFavoriteCount");
const writingMistakeList = document.querySelector("#writingMistakeList");
const writingStudio = document.querySelector("#writingStudio");
const writingStudioDashboard = document.querySelector("#writingStudioDashboard");
const writingStudioSession = document.querySelector("#writingStudioSession");
const writingSessionSplitter = document.querySelector("#writingSessionSplitter");
const writingStudioResumeButton = document.querySelector("#writingStudioResumeButton");
const writingStudioDiscardButton = document.querySelector("#writingStudioDiscardButton");
const writingStudioMissionButtons = [...document.querySelectorAll("[data-writing-studio-mission]")];
const writingTemplateLibrary = document.querySelector("#writingTemplateLibrary");
const writingTemplateCaseView = document.querySelector("#writingTemplateCaseView");
const writingTemplateCaseContent = document.querySelector("#writingTemplateCaseContent");
const writingTemplateOpenButton = document.querySelector("#writingTemplateOpenButton");
const writingTemplateCloseButton = document.querySelector("#writingTemplateCloseButton");
const writingTemplateCaseCloseButton = document.querySelector("#writingTemplateCaseCloseButton");
const writingTemplateAddButton = document.querySelector("#writingTemplateAddButton");
const writingTemplateTabs = document.querySelector("#writingTemplateTabs");
const writingTemplateList = document.querySelector("#writingTemplateList");
const writingTemplateDetail = document.querySelector("#writingTemplateDetail");
const writingTemplateForm = document.querySelector("#writingTemplateForm");
const writingTemplateFormKind = document.querySelector("#writingTemplateFormKind");
const writingTemplateFormTitle = document.querySelector("#writingTemplateFormTitle");
const writingTemplateFormFocus = document.querySelector("#writingTemplateFormFocus");
const writingTemplateFormContent = document.querySelector("#writingTemplateFormContent");
const writingTemplateFormVocabulary = document.querySelector("#writingTemplateFormVocabulary");
const writingTemplateFormSampleEssay = document.querySelector("#writingTemplateFormSampleEssay");
const writingTemplateExamplePromptImageInput = document.querySelector("#writingTemplateExamplePromptImageInput");
const writingTemplateExamplePromptImageStatus = document.querySelector("#writingTemplateExamplePromptImageStatus");
const writingTemplateExamplePromptImagePreview = document.querySelector("#writingTemplateExamplePromptImagePreview");
const writingTemplateExamplePromptImage = document.querySelector("#writingTemplateExamplePromptImage");
const writingTemplateExamplePromptImageRemove = document.querySelector("#writingTemplateExamplePromptImageRemove");
const writingTemplateFormCancel = document.querySelector("#writingTemplateFormCancel");
const writingTemplateFormSubmit = document.querySelector("#writingTemplateFormSubmit");
const writingDueRewriteButton = document.querySelector("#writingDueRewriteButton");
const writingDueRewriteTitle = document.querySelector("#writingDueRewriteTitle");
const writingStudioHistory = document.querySelector("#writingStudioHistory");
const writingStudioErrors = document.querySelector("#writingStudioErrors");
const writingLegacyRuntime = document.querySelector("#writingLegacyRuntime");
const writingLegacyDrillButton = document.querySelector("#writingLegacyDrillButton");
const writingLegacyCloseButton = document.querySelector("#writingLegacyCloseButton");
const writingSessionLabel = document.querySelector("#writingSessionLabel");
const writingSessionTitle = document.querySelector("#writingSessionTitle");
const writingSessionTimer = document.querySelector("#writingSessionTimer");
const writingSessionCloseButton = document.querySelector("#writingSessionCloseButton");
const writingSessionTemplateButton = document.querySelector("#writingSessionTemplateButton");
const writingStageProgressBar = document.querySelector("#writingStageProgressBar");
const writingStudioStageButtons = [...document.querySelectorAll("[data-writing-studio-stage]")];
const writingStudioStagePanels = [...document.querySelectorAll("[data-writing-stage-panel]")];
const writingStagePreviousButton = document.querySelector("#writingStagePreviousButton");
const writingStageNextButton = document.querySelector("#writingStageNextButton");
const writingSaveProgressButton = document.querySelector("#writingSaveProgressButton");
const writingAutosaveStatus = document.querySelector("#writingAutosaveStatus");
const writingStudioTaskKind = document.querySelector("#writingStudioTaskKind");
const writingStudioTargetBand = document.querySelector("#writingStudioTargetBand");
const writingStudioTimeLimit = document.querySelector("#writingStudioTimeLimit");
const writingStudioTimeSummary = document.querySelector("#writingStudioTimeSummary");
const writingStudioQuickPlan = document.querySelector("#writingStudioQuickPlan");
const writingQuickPlanLabel = document.querySelector("#writingQuickPlanLabel");
const writingQuickPlanHint = document.querySelector("#writingQuickPlanHint");
const writingPromptReferenceTitle = document.querySelector("#writingPromptReferenceTitle");
const writingPromptImageToggle = document.querySelector("#writingPromptImageToggle");
const writingPromptReferenceImage = document.querySelector("#writingPromptReferenceImage");
const writingPromptReferenceImagePreview = document.querySelector("#writingPromptReferenceImagePreview");
const writingPromptImageDialog = document.querySelector("#writingPromptImageDialog");
const writingPromptImageDialogPreview = document.querySelector("#writingPromptImageDialogPreview");
const writingPromptImageDialogViewport = document.querySelector("#writingPromptImageDialogViewport");
const writingPromptImageDialogClose = document.querySelector("#writingPromptImageDialogClose");
const writingPromptZoomOutButton = document.querySelector("#writingPromptZoomOutButton");
const writingPromptZoomInButton = document.querySelector("#writingPromptZoomInButton");
const writingPromptZoomControl = document.querySelector("#writingPromptZoomControl");
const writingPromptImageInput = document.querySelector("#writingPromptImageInput");
const writingPromptImageStatus = document.querySelector("#writingPromptImageStatus");
const writingPromptUploadPreview = document.querySelector("#writingPromptUploadPreview");
const writingPromptUploadImage = document.querySelector("#writingPromptUploadImage");
const writingPromptRemoveImageButton = document.querySelector("#writingPromptRemoveImageButton");
const writingStudioDraft = document.querySelector("#writingStudioDraft");
const writingStudioTask1Draft = document.querySelector("#writingStudioTask1Draft");
const writingDraftWordCount = document.querySelector("#writingDraftWordCount");
const writingDraftLabel = document.querySelector("#writingDraftLabel");
const writingStudioChecklist = document.querySelector("#writingStudioChecklist");
const writingStudioSelfErrors = document.querySelector("#writingStudioSelfErrors");
const writingCopyFeedbackPromptButton = document.querySelector("#writingCopyFeedbackPromptButton");
const writingFeedbackCopyStatus = document.querySelector("#writingFeedbackCopyStatus");
const writingStudioFeedbackInput = document.querySelector("#writingStudioFeedbackInput");
const writingImportFeedbackButton = document.querySelector("#writingImportFeedbackButton");
const writingFeedbackSummary = document.querySelector("#writingFeedbackSummary");
const writingRewriteBrief = document.querySelector("#writingRewriteBrief");
const writingRewriteOriginal = document.querySelector("#writingRewriteOriginal");
const writingRewriteDraft = document.querySelector("#writingRewriteDraft");
const writingRewriteResolved = document.querySelector("#writingRewriteResolved");
const writingCompleteSessionButton = document.querySelector("#writingCompleteSessionButton");
const addListeningMistakeButton = document.querySelector("#addListeningMistakeButton");
const listeningMistakeTotal = document.querySelector("#listeningMistakeTotal");
const listeningMistakeReviewing = document.querySelector("#listeningMistakeReviewing");
const listeningMistakeMastered = document.querySelector("#listeningMistakeMastered");
const listeningMistakeReviews = document.querySelector("#listeningMistakeReviews");
const listeningMistakeSearch = document.querySelector("#listeningMistakeSearch");
const listeningMistakeErrorFilter = document.querySelector("#listeningMistakeErrorFilter");
const listeningMistakeStatusFilter = document.querySelector("#listeningMistakeStatusFilter");
const listeningMistakeMethodFilter = document.querySelector("#listeningMistakeMethodFilter");
const listeningMistakeList = document.querySelector("#listeningMistakeList");
const listeningMistakeDetail = document.querySelector("#listeningMistakeDetail");
const listeningMistakeDialog = document.querySelector("#listeningMistakeDialog");
const listeningMistakeForm = document.querySelector("#listeningMistakeForm");
const listeningMistakeDialogTitle = document.querySelector("#listeningMistakeDialogTitle");
const listeningMistakeDialogClose = document.querySelector("#listeningMistakeDialogClose");
const listeningMistakeCancel = document.querySelector("#listeningMistakeCancel");
const listeningMistakeId = document.querySelector("#listeningMistakeId");
const listeningMistakeTitle = document.querySelector("#listeningMistakeTitle");
const listeningMistakeErrorType = document.querySelector("#listeningMistakeErrorType");
const listeningMistakeStatus = document.querySelector("#listeningMistakeStatus");
const listeningMistakeMethod = document.querySelector("#listeningMistakeMethod");
const listeningQuestionImage = document.querySelector("#listeningQuestionImage");
const listeningQuestionPreview = document.querySelector("#listeningQuestionPreview");
const listeningQuestionOcrStatus = document.querySelector("#listeningQuestionOcrStatus");
const listeningTranscriptImage = document.querySelector("#listeningTranscriptImage");
const listeningTranscriptPreview = document.querySelector("#listeningTranscriptPreview");
const listeningTranscriptText = document.querySelector("#listeningTranscriptText");
const listeningTranscriptOcrStatus = document.querySelector("#listeningTranscriptOcrStatus");
const listeningMistakeNote = document.querySelector("#listeningMistakeNote");
const listeningMistakeFormStatus = document.querySelector("#listeningMistakeFormStatus");
const addReadingMistakeButton = document.querySelector("#addReadingMistakeButton");
const readingMistakeTotal = document.querySelector("#readingMistakeTotal");
const readingMistakeReviewing = document.querySelector("#readingMistakeReviewing");
const readingMistakeMastered = document.querySelector("#readingMistakeMastered");
const readingMistakeReviews = document.querySelector("#readingMistakeReviews");
const readingMistakeSearch = document.querySelector("#readingMistakeSearch");
const readingMistakeQuestionFilter = document.querySelector("#readingMistakeQuestionFilter");
const readingMistakeErrorFilter = document.querySelector("#readingMistakeErrorFilter");
const readingMistakeStatusFilter = document.querySelector("#readingMistakeStatusFilter");
const readingMistakeList = document.querySelector("#readingMistakeList");
const readingMistakeDetail = document.querySelector("#readingMistakeDetail");
const readingMistakeDialog = document.querySelector("#readingMistakeDialog");
const readingMistakeForm = document.querySelector("#readingMistakeForm");
const readingMistakeDialogTitle = document.querySelector("#readingMistakeDialogTitle");
const readingMistakeDialogClose = document.querySelector("#readingMistakeDialogClose");
const readingMistakeCancel = document.querySelector("#readingMistakeCancel");
const readingMistakeId = document.querySelector("#readingMistakeId");
const readingMistakeTitle = document.querySelector("#readingMistakeTitle");
const readingMistakeQuestionType = document.querySelector("#readingMistakeQuestionType");
const readingMistakeErrorType = document.querySelector("#readingMistakeErrorType");
const readingMistakeCustomErrorField = document.querySelector("#readingMistakeCustomErrorField");
const readingMistakeCustomErrorType = document.querySelector("#readingMistakeCustomErrorType");
const readingMistakeStatus = document.querySelector("#readingMistakeStatus");
const readingQuestionImage = document.querySelector("#readingQuestionImage");
const readingEvidenceImage = document.querySelector("#readingEvidenceImage");
const readingQuestionPreview = document.querySelector("#readingQuestionPreview");
const readingEvidencePreview = document.querySelector("#readingEvidencePreview");
const readingQuestionImageStatus = document.querySelector("#readingQuestionImageStatus");
const readingEvidenceImageStatus = document.querySelector("#readingEvidenceImageStatus");
const removeReadingQuestionImage = document.querySelector("#removeReadingQuestionImage");
const removeReadingEvidenceImage = document.querySelector("#removeReadingEvidenceImage");
const readingMistakeNote = document.querySelector("#readingMistakeNote");
const readingMistakeFormStatus = document.querySelector("#readingMistakeFormStatus");

const state = {
  mode: "listening",
  bookMode: "listening",
  bookSearch: "",
  favoriteBook: loadFavoriteBook(),
  correctBook: loadCorrectBook(),
  userNotes: loadUserNotes(),
  modeInputs: loadModeInputs(),
  shortcutSettings: loadShortcutSettings(),
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
  reviewSource: "",
  detailEntry: null,
  activeSurface: "quiz",
  writingMistakeBook: loadWritingMistakeBook(),
  writingFavoriteBook: loadWritingFavoriteBook(),
  writingBookMode: "mistakes",
  writingLastResultSpeech: { input: "", target: "" },
  writingStats: loadWritingStats(),
  writingDeck: [],
  writingIndex: 0,
  writingCurrent: null,
  writingPackId: writingPatternPacks[0]?.id || "",
  writingPhase: "slot",
  writingChainIndex: 0,
  writingAllMode: false,
  writingReviewing: false,
  writingStartedAt: 0,
  writingChecked: false,
  writingStudio: loadWritingStudioState(),
  favoriteReviewItems: [],
  favoriteReviewMode: "listening",
  favoriteReviewSort: "newest",
  favoriteReviewLayout: "list",
  favoriteReviewRevealedWords: new Set(),
  favoriteReviewQuery: "",
  sidebarCollapsed: false,
  listeningMistakes: loadListeningMistakes(),
  listeningMistakeSelectedId: "",
  listeningMistakeQuery: "",
  listeningMistakeErrorFilter: "all",
  listeningMistakeStatusFilter: "all",
  listeningMistakeMethodFilter: "all",
  readingMistakes: loadReadingMistakes(),
  readingMistakeSelectedId: "",
  readingMistakeQuery: "",
  readingMistakeQuestionFilter: "all",
  readingMistakeErrorFilter: "all",
  readingMistakeStatusFilter: "all",
  readingMistakeDeletedIds: loadReadingMistakeDeletedIds(),
};

let listeningOcrScriptPromise = null;
let listeningOcrWorkerPromise = null;
let listeningOcrQueue = Promise.resolve();
let listeningOcrStatusTarget = null;
let listeningOcrIdleTimer = 0;
let listeningQuestionImageData = null;
let listeningTranscriptImageData = null;
let listeningTranscriptOcrToken = 0;
let listeningTranscriptOcrInProgress = false;
let readingMediaDatabasePromise = null;
let readingQuestionImageChanges = [];
let readingEvidenceImageChanges = [];
let readingFormPreviewUrls = [];
let readingDetailPreviewUrls = [];

function getSelectedMode() {
  return modeRadios.find((radio) => radio.checked)?.value || "listening";
}

function getModeLabel(mode = state.mode) {
  if (mode === "dictation") return "填空模式";
  if (mode === "reading") return "阅读模式";
  return "听力模式";
}

function loadSidebarCollapsed() {
  try {
    return window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function mountSidebarRailIcons() {
  const renderIcons = () => {
    if (!window.lucide?.createIcons) return;
    window.lucide.createIcons({ attrs: { "stroke-width": 1.75 } });
    document.documentElement.classList.add("lucide-ready");
    sidebarRail?.classList.add("icons-ready");
  };
  if (window.lucide?.createIcons) {
    renderIcons();
    return;
  }
  const script = document.createElement("script");
  script.src = LUCIDE_SCRIPT_URL;
  script.async = true;
  script.onload = renderIcons;
  document.head.append(script);
}

function updateSidebarRailActive() {
  if (!sidebarRail) return;
  sidebarRailModeButtons.forEach((button) => {
    const active = state.activeSurface === "quiz" && button.dataset.sidebarRailMode === state.mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });
  sidebarRailSurfaceButtons.forEach((button) => {
    const active = button.dataset.sidebarRailSurface === state.activeSurface;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });
}

function setSidebarCollapsed(collapsed, persist = true) {
  state.sidebarCollapsed = Boolean(collapsed);
  appShell.classList.toggle("sidebar-collapsed", state.sidebarCollapsed);
  sidebarToggle.setAttribute("aria-expanded", String(!state.sidebarCollapsed));
  sidebarToggle.setAttribute("aria-label", state.sidebarCollapsed ? "展开侧边栏" : "收起侧边栏");
  sidebarToggle.title = state.sidebarCollapsed ? "展开侧边栏" : "收起侧边栏";
  updateSidebarRailActive();

  if (!persist) return;
  try {
    window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(state.sidebarCollapsed));
  } catch {
    // The layout still works when browser storage is unavailable.
  }
}

function mountSettingsControls() {
  const setupGrid = document.querySelector(".setup-grid");
  const practiceControls = [
    optionCount.closest(".control"),
    autoSpeak.closest(".switch"),
    skipFavoriteWords.closest(".switch"),
  ].filter(Boolean);
  const voiceControls = [
    rateControl.closest(".control"),
    voiceSelect.closest(".control"),
    speechStyle.closest(".control"),
    intonationControl.closest(".control"),
    speechPreviewButton.closest(".control"),
    favoriteReviewAutoSpeak.closest(".switch"),
  ].filter(Boolean);

  practiceControls.forEach((control) => settingsPracticeMount.append(control));
  voiceStatus.classList.add("settings-voice-status");
  settingsVoiceMount.append(voiceStatus);
  voiceControls.forEach((control) => settingsVoiceMount.append(control));
  settingsShortcutMount.append(toolDrawer);
  setupGrid?.remove();
}

function setPrimarySurface(surface, shouldScroll = false) {
  const requestedSurface = ["quiz", "writing", "settings", "listeningMistakes", "readingMistakes"].includes(surface)
    ? surface
    : "quiz";
  let activeSurface = requestedSurface;
  if (requestedSurface === "listeningMistakes" && state.mode !== "listening") activeSurface = "quiz";
  if (requestedSurface === "readingMistakes" && state.mode !== "reading") activeSurface = "quiz";
  const writingActive = activeSurface === "writing";
  const settingsActive = activeSurface === "settings";
  const listeningMistakesActive = activeSurface === "listeningMistakes";
  const readingMistakesActive = activeSurface === "readingMistakes";
  state.activeSurface = activeSurface;
  appShell.classList.toggle("writing-nav-active", writingActive);
  appShell.classList.toggle("settings-nav-active", settingsActive);
  appShell.classList.toggle("listening-mistake-nav-active", listeningMistakesActive);
  appShell.classList.toggle("reading-mistake-nav-active", readingMistakesActive);
  writingModeNavButton.classList.toggle("active", writingActive);
  writingModeNavButton.setAttribute("aria-current", writingActive ? "page" : "false");
  listeningMistakeNavButton.classList.toggle("active", listeningMistakesActive);
  listeningMistakeNavButton.setAttribute("aria-current", listeningMistakesActive ? "page" : "false");
  listeningMistakeNavButton.hidden = getSelectedMode() !== "listening" || writingActive || settingsActive;
  readingMistakeNavButton.classList.toggle("active", readingMistakesActive);
  readingMistakeNavButton.setAttribute("aria-current", readingMistakesActive ? "page" : "false");
  readingMistakeNavButton.hidden = getSelectedMode() !== "reading" || writingActive || settingsActive;
  settingsNavButton.classList.toggle("active", settingsActive);
  settingsNavButton.setAttribute("aria-current", settingsActive ? "page" : "false");
  quizPanel.hidden = activeSurface !== "quiz";
  listeningMistakePanel.hidden = !listeningMistakesActive;
  readingMistakePanel.hidden = !readingMistakesActive;
  writingPanel.hidden = !writingActive;
  settingsPanel.hidden = !settingsActive;
  updateSidebarRailActive();

  if (!shouldScroll) return;
  window.scrollTo({ top: 0, behavior: "auto" });
}

function normaliseListeningMistakeImage(image) {
  if (!image || typeof image !== "object" || !String(image.dataUrl || "").startsWith("data:image/")) return null;
  return {
    dataUrl: String(image.dataUrl),
    width: Math.max(0, Number(image.width) || 0),
    height: Math.max(0, Number(image.height) || 0),
    name: String(image.name || "截图"),
    updatedAt: Number(image.updatedAt) || Date.now(),
  };
}

function normaliseListeningMistake(record = {}) {
  const errorType = listeningMistakeErrorLabels[record.errorType] ? record.errorType : "word";
  const status = listeningMistakeStatusLabels[record.status] ? record.status : "unmastered";
  const reviewMethod = listeningMistakeMethodLabels[record.reviewMethod] ? record.reviewMethod : "relisten";
  return {
    id: String(record.id || ""),
    title: String(record.title || "").trim(),
    errorType,
    note: String(record.note || "").trim(),
    status,
    reviewMethod,
    questionText: String(record.questionText || "").trim(),
    questionImage: normaliseListeningMistakeImage(record.questionImage),
    transcriptText: String(record.transcriptText || "").trim(),
    transcriptImage: normaliseListeningMistakeImage(record.transcriptImage),
    createdAt: Number(record.createdAt) || Date.now(),
    updatedAt: Number(record.updatedAt) || Number(record.createdAt) || Date.now(),
    lastReviewedAt: Number(record.lastReviewedAt) || 0,
    reviewCount: Math.max(0, Number(record.reviewCount) || 0),
  };
}

function loadListeningMistakes() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(LISTENING_MISTAKE_STORAGE_KEY) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved
      .map(normaliseListeningMistake)
      .filter((item) => item.id && item.title)
      .sort((a, b) => b.createdAt - a.createdAt);
  } catch {
    return [];
  }
}

function saveListeningMistakes() {
  try {
    window.localStorage.setItem(LISTENING_MISTAKE_STORAGE_KEY, JSON.stringify(state.listeningMistakes));
    return true;
  } catch {
    listeningMistakeFormStatus.textContent = "保存失败：浏览器本地存储不可用。";
    return false;
  }
}

function mergeListeningMistakes(primary = [], secondary = []) {
  const merged = new Map();
  [...secondary, ...primary].forEach((record) => {
    const item = normaliseListeningMistake(record);
    if (!item.id || !item.title) return;
    const existing = merged.get(item.id);
    if (!existing || item.updatedAt >= existing.updatedAt) merged.set(item.id, item);
  });
  return [...merged.values()].sort((a, b) => b.createdAt - a.createdAt);
}

function createListeningMistakeId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `listening-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function formatListeningMistakeDate(timestamp) {
  if (!timestamp) return "尚未复习";
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(timestamp));
}

function renderListeningMistakeText(text, fallback = "未填写") {
  if (!text) return `<span class="listening-mistake-placeholder">${escapeHtml(fallback)}</span>`;
  return escapeHtml(text).replace(/\n/g, "<br>");
}

function renderListeningMistakeImage(image, label) {
  const normalised = normaliseListeningMistakeImage(image);
  if (!normalised) return `<span class="listening-mistake-placeholder">尚未添加${escapeHtml(label)}</span>`;
  return `
    <figure class="listening-mistake-screenshot">
      <img src="${normalised.dataUrl}" alt="${escapeHtml(label)}" />
    </figure>
  `;
}

function getFilteredListeningMistakes() {
  const query = normaliseKey(state.listeningMistakeQuery || "");
  return state.listeningMistakes.filter((item) => {
    const matchesQuery = !query || [item.title, item.note]
      .map((value) => normaliseKey(value || ""))
      .some((value) => value.includes(query));
    const matchesError = state.listeningMistakeErrorFilter === "all"
      || item.errorType === state.listeningMistakeErrorFilter;
    const matchesStatus = state.listeningMistakeStatusFilter === "all"
      || item.status === state.listeningMistakeStatusFilter;
    const matchesMethod = state.listeningMistakeMethodFilter === "all"
      || item.reviewMethod === state.listeningMistakeMethodFilter;
    return matchesQuery && matchesError && matchesStatus && matchesMethod;
  });
}

function updateListeningMistakeNavVisibility() {
  const listeningModeActive = getSelectedMode() === "listening";
  const readingModeActive = getSelectedMode() === "reading";
  listeningMistakeNavButton.hidden = !listeningModeActive;
  readingMistakeNavButton.hidden = !readingModeActive;
  if (!listeningModeActive && state.activeSurface === "listeningMistakes") {
    setPrimarySurface("quiz");
  }
  if (!readingModeActive && state.activeSurface === "readingMistakes") {
    setPrimarySurface("quiz");
  }
}

function renderListeningMistakeSummary() {
  const total = state.listeningMistakes.length;
  const reviewing = state.listeningMistakes.filter((item) => item.status === "reviewing").length;
  const mastered = state.listeningMistakes.filter((item) => item.status === "mastered").length;
  const reviews = state.listeningMistakes.reduce((sum, item) => sum + item.reviewCount, 0);
  listeningMistakeTotal.textContent = String(total);
  listeningMistakeReviewing.textContent = String(reviewing);
  listeningMistakeMastered.textContent = String(mastered);
  listeningMistakeReviews.textContent = String(reviews);
  listeningMistakeNavCount.textContent = String(total);
}

function renderListeningMistakeList() {
  const items = getFilteredListeningMistakes();
  if (!items.length) {
    listeningMistakeList.innerHTML = `
      <div class="listening-mistake-list-empty">
        <strong>${state.listeningMistakes.length ? "没有符合筛选条件的错题" : "还没有听力错题"}</strong>
        <span>${state.listeningMistakes.length ? "调整筛选条件后再试。" : "上传截图，OCR 后只保存文字。"}</span>
      </div>
    `;
    return;
  }

  listeningMistakeList.innerHTML = items
    .map((item) => `
      <button
        class="listening-mistake-list-item${item.id === state.listeningMistakeSelectedId ? " active" : ""}"
        type="button"
        data-listening-mistake-open="${encodeURIComponent(item.id)}"
      >
        <span class="listening-mistake-list-index">${String(state.listeningMistakes.indexOf(item) + 1).padStart(2, "0")}</span>
        <span class="listening-mistake-list-copy">
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.note || "暂无备注")}</small>
          <span>
            <em>${escapeHtml(listeningMistakeErrorLabels[item.errorType])}</em>
            <em class="status-${item.status}">${escapeHtml(listeningMistakeStatusLabels[item.status])}</em>
          </span>
        </span>
        <time datetime="${new Date(item.createdAt).toISOString()}">${formatListeningMistakeDate(item.createdAt)}</time>
      </button>
    `)
    .join("");
}

function renderListeningMistakeDetail() {
  const item = state.listeningMistakes.find((entry) => entry.id === state.listeningMistakeSelectedId);
  if (!item) {
    listeningMistakeDetail.innerHTML = `
      <div class="listening-mistake-empty">
        <span aria-hidden="true">01</span>
        <h3>选择一条错题</h3>
        <p>查看识别文字、错因和复习记录。</p>
      </div>
    `;
    return;
  }

  listeningMistakeDetail.innerHTML = `
    <header class="listening-mistake-detail-header">
      <div>
        <p class="eyebrow">${escapeHtml(listeningMistakeErrorLabels[item.errorType])}</p>
        <h3>${escapeHtml(item.title)}</h3>
      </div>
      <div class="listening-mistake-detail-actions">
        <button class="secondary-button" type="button" data-listening-mistake-edit="${encodeURIComponent(item.id)}">编辑</button>
        <button class="listening-mistake-delete" type="button" data-listening-mistake-delete="${encodeURIComponent(item.id)}">删除</button>
      </div>
    </header>

    <div class="listening-mistake-detail-meta">
      <label>
        <span>掌握状态</span>
        <select data-listening-mistake-status="${encodeURIComponent(item.id)}">
          ${Object.entries(listeningMistakeStatusLabels).map(([value, label]) =>
            `<option value="${value}"${item.status === value ? " selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>
      <div><span>复习方式</span><strong>${escapeHtml(listeningMistakeMethodLabels[item.reviewMethod])}</strong></div>
      <div><span>建立日期</span><strong>${formatListeningMistakeDate(item.createdAt)}</strong></div>
      <div><span>最近复习</span><strong>${formatListeningMistakeDate(item.lastReviewedAt)}</strong></div>
      <div><span>复习次数</span><strong>${item.reviewCount} 次</strong></div>
    </div>

    <section class="listening-mistake-detail-section">
      <h4>题目截图</h4>
      ${renderListeningMistakeImage(item.questionImage, "题目截图")}
      ${item.questionText ? `<p class="listening-mistake-legacy-text">${renderListeningMistakeText(item.questionText)}</p>` : ""}
    </section>

    <section class="listening-mistake-detail-section">
      <div class="listening-mistake-detail-section-title">
        <h4>Transcript</h4>
        <button class="secondary-button" type="button" data-listening-mistake-speak="${encodeURIComponent(item.id)}"${item.transcriptText ? "" : " disabled"}>
          <span class="button-icon" aria-hidden="true">♪</span>
          朗读复习
        </button>
      </div>
      ${renderListeningMistakeImage(item.transcriptImage, "Transcript 截图")}
      <p>${renderListeningMistakeText(item.transcriptText, "没有 transcript 文本")}</p>
    </section>

    <section class="listening-mistake-detail-section listening-mistake-note-section">
      <h4>简短备注</h4>
      <p>${renderListeningMistakeText(item.note, "没有备注")}</p>
    </section>

    <footer class="listening-mistake-review-footer">
      <div>
        <strong>完成一次复习</strong>
        <span>自动更新日期，并将复习次数加 1。</span>
      </div>
      <button class="primary-button" type="button" data-listening-mistake-review="${encodeURIComponent(item.id)}">
        <span class="button-icon" aria-hidden="true">✓</span>
        完成一次复习
      </button>
    </footer>
  `;
}

function renderListeningMistakeLibrary() {
  renderListeningMistakeSummary();
  renderListeningMistakeList();
  renderListeningMistakeDetail();
}

function openListeningMistakeForm(item = null) {
  listeningMistakeForm.reset();
  listeningTranscriptOcrToken += 1;
  listeningTranscriptOcrInProgress = false;
  listeningMistakeId.value = item?.id || "";
  listeningMistakeTitle.value = item?.title || "";
  listeningMistakeErrorType.value = item?.errorType || "word";
  listeningMistakeStatus.value = item?.status || "unmastered";
  listeningMistakeMethod.value = item?.reviewMethod || "relisten";
  listeningTranscriptText.value = item?.transcriptText || "";
  listeningMistakeNote.value = item?.note || "";
  listeningQuestionImage.value = "";
  listeningTranscriptImage.value = "";
  listeningQuestionOcrStatus.textContent = "";
  listeningTranscriptOcrStatus.textContent = "";
  setListeningMistakeFormImage("question", item?.questionImage || null);
  setListeningMistakeFormImage("transcript", item?.transcriptImage || null);
  listeningMistakeFormStatus.textContent = "";
  listeningMistakeDialogTitle.textContent = item ? "编辑听力错题" : "新建听力错题";
  listeningMistakeDialog.hidden = false;
  document.body.classList.add("listening-mistake-dialog-open");
  listeningMistakeTitle.focus();
  // Start the one-time English model load while the form is being filled.
  // This keeps pasting a transcript responsive without saving the model to disk.
  void getListeningOcrWorker()
    .then(() => {
      if (!listeningMistakeDialog.hidden && !listeningTranscriptImageData && !listeningTranscriptOcrInProgress) {
        listeningTranscriptOcrStatus.textContent = "英文识别已就绪，粘贴 transcript 截图后会直接识别。";
      }
    })
    .catch(() => {});
}

function closeListeningMistakeForm() {
  if (listeningMistakeDialog.hidden) return;
  listeningTranscriptOcrToken += 1;
  listeningTranscriptOcrInProgress = false;
  listeningMistakeDialog.hidden = true;
  document.body.classList.remove("listening-mistake-dialog-open");
  addListeningMistakeButton.focus();
}

function submitListeningMistakeForm(event) {
  event.preventDefault();
  if (listeningTranscriptOcrInProgress) {
    listeningMistakeFormStatus.textContent = "英文正在识别，请稍候完成后再保存。";
    return;
  }
  const title = listeningMistakeTitle.value.trim();
  if (!title) {
    listeningMistakeFormStatus.textContent = "请填写来源标题。";
    listeningMistakeTitle.focus();
    return;
  }

  const existing = state.listeningMistakes.find((item) => item.id === listeningMistakeId.value);
  const now = Date.now();
  const record = normaliseListeningMistake({
    id: existing?.id || createListeningMistakeId(),
    title,
    errorType: listeningMistakeErrorType.value,
    status: listeningMistakeStatus.value,
    reviewMethod: listeningMistakeMethod.value,
    questionText: existing?.questionText || "",
    questionImage: listeningQuestionImageData,
    transcriptText: listeningTranscriptText.value,
    transcriptImage: listeningTranscriptImageData,
    note: listeningMistakeNote.value,
    createdAt: existing?.createdAt || now,
    updatedAt: now,
    lastReviewedAt: existing?.lastReviewedAt || 0,
    reviewCount: existing?.reviewCount || 0,
  });

  if (existing) {
    state.listeningMistakes = state.listeningMistakes.map((item) => item.id === record.id ? record : item);
  } else {
    state.listeningMistakes.unshift(record);
  }
  state.listeningMistakeSelectedId = record.id;
  if (!saveListeningMistakes()) return;
  void saveTraining(false);
  closeListeningMistakeForm();
  renderListeningMistakeLibrary();
}

function updateListeningMistakeStatus(id, status) {
  if (!listeningMistakeStatusLabels[status]) return;
  const item = state.listeningMistakes.find((entry) => entry.id === id);
  if (!item) return;
  item.status = status;
  item.updatedAt = Date.now();
  saveListeningMistakes();
  void saveTraining(false);
  renderListeningMistakeLibrary();
}

function completeListeningMistakeReview(id) {
  const item = state.listeningMistakes.find((entry) => entry.id === id);
  if (!item) return;
  item.lastReviewedAt = Date.now();
  item.reviewCount += 1;
  item.updatedAt = Date.now();
  saveListeningMistakes();
  void saveTraining(false);
  renderListeningMistakeLibrary();
}

function deleteListeningMistake(id) {
  const item = state.listeningMistakes.find((entry) => entry.id === id);
  if (!item || !window.confirm(`确定删除“${item.title}”吗？此操作无法撤销。`)) return;
  state.listeningMistakes = state.listeningMistakes.filter((entry) => entry.id !== id);
  state.listeningMistakeSelectedId = state.listeningMistakes[0]?.id || "";
  saveListeningMistakes();
  void saveTraining(false);
  renderListeningMistakeLibrary();
}

function loadListeningOcrScript() {
  if (window.Tesseract?.createWorker) return Promise.resolve(window.Tesseract);
  if (listeningOcrScriptPromise) return listeningOcrScriptPromise;

  listeningOcrScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = TESSERACT_SCRIPT_URL;
    script.async = true;
    script.onload = () => window.Tesseract?.createWorker
      ? resolve(window.Tesseract)
      : reject(new Error("OCR 组件加载不完整"));
    script.onerror = () => reject(new Error("OCR 组件下载失败"));
    document.head.append(script);
  }).catch((error) => {
    listeningOcrScriptPromise = null;
    throw error;
  });

  return listeningOcrScriptPromise;
}

function updateListeningOcrProgress(message) {
  if (!listeningOcrStatusTarget || !message) return;
  const stageLabels = {
    "loading tesseract core": "加载识别核心",
    "initializing tesseract": "初始化识别器",
    "loading language traineddata": "加载英文模型",
    "initializing api": "准备识别",
    "recognizing text": "识别文字",
  };
  const label = stageLabels[message.status] || "处理截图";
  const progress = Number.isFinite(message.progress) ? ` ${Math.round(message.progress * 100)}%` : "";
  const firstLoadHint = message.status === "loading language traineddata" && Number(message.progress) === 0
    ? "（首次加载，只需一次）"
    : "";
  listeningOcrStatusTarget.textContent = `${label}${progress}${firstLoadHint}`;
}

function createListeningOcrTimeoutError() {
  return new Error("英文识别模型加载超时。请检查网络后重试；截图已保留，不会丢失。");
}

async function createListeningOcrWorker(Tesseract) {
  let timedOut = false;
  let timer = 0;
  const creation = Tesseract.createWorker("eng", 1, {
    // Keep the model in memory for this session. Persistent browser caching may write to the system drive.
    cacheMethod: "none",
    langPath: "https://tessdata.projectnaptha.com/4.0.0_fast",
    logger: updateListeningOcrProgress,
  }).then(async (worker) => {
    if (timedOut) {
      await worker.terminate();
      throw createListeningOcrTimeoutError();
    }
    await worker.setParameters({ tessedit_pageseg_mode: "6" });
    return worker;
  });

  try {
    return await Promise.race([
      creation,
      new Promise((_, reject) => {
        timer = window.setTimeout(() => {
          timedOut = true;
          reject(createListeningOcrTimeoutError());
        }, LISTENING_OCR_MODEL_TIMEOUT_MS);
      }),
    ]);
  } finally {
    window.clearTimeout(timer);
  }
}

async function getListeningOcrWorker() {
  window.clearTimeout(listeningOcrIdleTimer);
  if (listeningOcrWorkerPromise) return listeningOcrWorkerPromise;
  listeningOcrWorkerPromise = loadListeningOcrScript()
    .then((Tesseract) => createListeningOcrWorker(Tesseract))
    .catch((error) => {
      listeningOcrWorkerPromise = null;
      throw error;
    });
  return listeningOcrWorkerPromise;
}

function scheduleListeningOcrWorkerRelease() {
  window.clearTimeout(listeningOcrIdleTimer);
  listeningOcrIdleTimer = window.setTimeout(async () => {
    const workerPromise = listeningOcrWorkerPromise;
    listeningOcrWorkerPromise = null;
    if (!workerPromise) return;
    try {
      const worker = await workerPromise;
      await worker.terminate();
    } catch {}
  }, LISTENING_OCR_WORKER_IDLE_MS);
}

function cleanListeningOcrText(text) {
  return String(text || "")
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function createClipboardImageFile(blob) {
  const mimeType = blob?.type?.startsWith("image/") ? blob.type : "image/png";
  const extension = mimeType.split("/")[1]?.replace("jpeg", "jpg") || "png";
  return new File([blob], `clipboard-${Date.now()}.${extension}`, {
    type: mimeType,
    lastModified: Date.now(),
  });
}

function getPastedImageFile(dataTransfer) {
  const item = [...(dataTransfer?.items || [])].find((entry) => entry.type?.startsWith("image/"));
  const file = item?.getAsFile?.();
  if (file) return createClipboardImageFile(file);
  const fallback = [...(dataTransfer?.files || [])].find((entry) => entry.type?.startsWith("image/"));
  return fallback ? createClipboardImageFile(fallback) : null;
}

function setImagePasteStatus(target, message, tone = "") {
  if (target === "writing-prompt") {
    setWritingPromptImageStatus(message, tone);
    return;
  }
  const statusTargets = {
    "listening-question": listeningQuestionOcrStatus,
    "listening-transcript": listeningTranscriptOcrStatus,
    "reading-question": readingQuestionImageStatus,
    "reading-evidence": readingEvidenceImageStatus,
  };
  if (statusTargets[target]) statusTargets[target].textContent = message;
}

function processClipboardImage(target, file) {
  if (!file) return;
  if (target === "writing-prompt") {
    void handleWritingPromptImageUpload(file);
    return;
  }
  if (target === "writing-template-example-prompt") {
    void handleWritingTemplateExamplePromptImageUpload(file);
    return;
  }
  if (target === "listening-question") {
    void handleListeningMistakeImage(file, "question");
    return;
  }
  if (target === "listening-transcript") {
    void handleListeningMistakeImage(file, "transcript");
    return;
  }
  if (target === "reading-question") {
    void handleReadingImageSelection(file, "question");
    return;
  }
  if (target === "reading-evidence") void handleReadingImageSelection(file, "evidence");
}

async function pasteImageFromClipboard(target, button) {
  if (!navigator.clipboard?.read) {
    setImagePasteStatus(target, "浏览器不允许直接读取剪贴板，请点击此区域后按 Ctrl+V。", "error");
    return;
  }
  button.disabled = true;
  setImagePasteStatus(target, "正在读取剪贴板…", "working");
  try {
    const clipboardItems = await navigator.clipboard.read();
    for (const clipboardItem of clipboardItems) {
      const imageType = clipboardItem.types.find((type) => type.startsWith("image/"));
      if (!imageType) continue;
      const blob = await clipboardItem.getType(imageType);
      processClipboardImage(target, createClipboardImageFile(blob));
      return;
    }
    setImagePasteStatus(target, "剪贴板里没有图片，请先复制截图。", "error");
  } catch {
    setImagePasteStatus(target, "无法直接读取剪贴板，请点击此区域后按 Ctrl+V。", "error");
  } finally {
    button.disabled = false;
  }
}

function renderListeningMistakeFormImage(kind) {
  const image = kind === "question" ? listeningQuestionImageData : listeningTranscriptImageData;
  const preview = kind === "question" ? listeningQuestionPreview : listeningTranscriptPreview;
  if (!preview) return;
  const label = kind === "question" ? "题目截图" : "Transcript 截图";
  if (!image) {
    preview.innerHTML = `<span>尚未添加${label}</span>`;
    return;
  }
  const dimensions = image.width && image.height ? `${image.width} × ${image.height}` : "已保存";
  preview.innerHTML = `
    <figure class="listening-form-image-item">
      <img src="${image.dataUrl}" alt="${label}" />
      <figcaption>${escapeHtml(image.name || label)} · ${dimensions}</figcaption>
      <button class="listening-form-image-remove" type="button" data-listening-form-image-remove="${kind}">移除图片</button>
    </figure>
  `;
}

function setListeningMistakeFormImage(kind, image = null) {
  const normalised = normaliseListeningMistakeImage(image);
  if (kind === "question") {
    listeningQuestionImageData = normalised;
    listeningQuestionImage.value = "";
  } else {
    listeningTranscriptImageData = normalised;
    listeningTranscriptImage.value = "";
  }
  renderListeningMistakeFormImage(kind);
}

function compressListeningMistakeImage(file, maxSide = 1600) {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      try {
        const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
        const width = Math.max(1, Math.round(image.naturalWidth * scale));
        const height = Math.max(1, Math.round(image.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d", { alpha: false });
        if (!context) throw new Error("浏览器无法处理这张图片");
        context.fillStyle = "#fffefa";
        context.fillRect(0, 0, width, height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(image, 0, 0, width, height);
        resolve({ dataUrl: canvas.toDataURL("image/webp", 0.8), width, height });
      } catch (error) {
        reject(error);
      } finally {
        URL.revokeObjectURL(objectUrl);
      }
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("无法读取这张图片"));
    };
    image.src = objectUrl;
  });
}

async function recogniseListeningTranscriptImage(image, token) {
  listeningTranscriptOcrInProgress = true;
  listeningTranscriptOcrStatus.textContent = "正在识别英文…";
  const recognise = async () => {
    listeningOcrStatusTarget = listeningTranscriptOcrStatus;
    const worker = await getListeningOcrWorker();
    const result = await worker.recognize(image.dataUrl);
    const text = cleanListeningOcrText(result?.data?.text);
    if (token !== listeningTranscriptOcrToken) return;
    listeningTranscriptText.value = text;
    listeningTranscriptOcrStatus.textContent = text
      ? `已识别 ${countWords(text)} 个英文词，可直接保存并朗读。`
      : "没有识别到英文，请换一张更清晰的截图。";
  };

  const queued = listeningOcrQueue.then(recognise, recognise);
  listeningOcrQueue = queued.catch(() => {});
  try {
    await queued;
  } catch (error) {
    if (token === listeningTranscriptOcrToken) {
      listeningTranscriptOcrStatus.textContent = "英文识别失败，截图已保留。请检查网络后重新粘贴截图。";
    }
  } finally {
    if (token === listeningTranscriptOcrToken) {
      listeningTranscriptOcrInProgress = false;
      listeningOcrStatusTarget = null;
      scheduleListeningOcrWorkerRelease();
    }
  }
}

async function handleListeningMistakeImage(file, kind) {
  const status = kind === "question" ? listeningQuestionOcrStatus : listeningTranscriptOcrStatus;
  const input = kind === "question" ? listeningQuestionImage : listeningTranscriptImage;
  if (!file || !file.type.startsWith("image/")) {
    status.textContent = "请选择 PNG、JPG、WebP 或 BMP 图片。";
    input.value = "";
    return;
  }
  if (file.size > 15 * 1024 * 1024) {
    status.textContent = "图片超过 15MB，请先裁剪后再添加。";
    input.value = "";
    return;
  }

  status.textContent = "正在压缩并保存截图…";
  input.disabled = true;
  try {
    const compressed = await compressListeningMistakeImage(
      file,
      kind === "transcript" ? LISTENING_TRANSCRIPT_OCR_MAX_SIDE : 1600,
    );
    const image = { ...compressed, name: file.name || "截图", updatedAt: Date.now() };
    setListeningMistakeFormImage(kind, image);
    if (kind === "question") {
      status.textContent = "题目截图已保存，复习时会直接显示。";
    } else {
      const token = ++listeningTranscriptOcrToken;
      await recogniseListeningTranscriptImage(image, token);
    }
  } catch (error) {
    status.textContent = error?.message || "图片处理失败，请重新粘贴。";
  } finally {
    input.disabled = false;
    input.value = "";
  }
}

function speakListeningMistakeTranscript(id) {
  const item = state.listeningMistakes.find((entry) => entry.id === id);
  if (!item?.transcriptText) return;
  stopRoundSpeech();
  void speak(item.transcriptText, { kind: "passage" });
}

function normaliseReadingMistake(record = {}) {
  const questionType = readingMistakeQuestionTypeLabels[record.questionType]
    ? record.questionType
    : "trueFalseNotGiven";
  const requestedErrorType = String(record.errorType || "").trim();
  const hasBuiltInErrorType = Boolean(readingMistakeErrorLabels[requestedErrorType]);
  const errorType = !requestedErrorType ? "location" : hasBuiltInErrorType ? requestedErrorType : "custom";
  const customErrorType = String(
    record.customErrorType || (requestedErrorType && requestedErrorType !== "custom" && !hasBuiltInErrorType ? requestedErrorType : ""),
  ).trim();
  const status = listeningMistakeStatusLabels[record.status] ? record.status : "unmastered";
  const questionImageKeys = normaliseReadingMistakeImageKeys(record.questionImageKeys, record.questionImageKey);
  const evidenceImageKeys = normaliseReadingMistakeImageKeys(record.evidenceImageKeys, record.evidenceImageKey);
  return {
    id: String(record.id || ""),
    title: String(record.title || "").trim(),
    questionType,
    errorType,
    customErrorType,
    note: String(record.note || "").trim(),
    status,
    questionImageKeys,
    evidenceImageKeys,
    questionImageKey: questionImageKeys[0] || "",
    evidenceImageKey: evidenceImageKeys[0] || "",
    createdAt: Number(record.createdAt) || Date.now(),
    updatedAt: Number(record.updatedAt) || Number(record.createdAt) || Date.now(),
    lastReviewedAt: Number(record.lastReviewedAt) || 0,
    reviewCount: Math.max(0, Number(record.reviewCount) || 0),
  };
}

function normaliseReadingMistakeImageKeys(keys, legacyKey = "") {
  const source = Array.isArray(keys) ? keys : [];
  return [...new Set([...source, legacyKey].map((key) => String(key || "").trim()).filter(Boolean))];
}

function getReadingMistakeImageKeys(item, kind) {
  return normaliseReadingMistakeImageKeys(item?.[`${kind}ImageKeys`], item?.[`${kind}ImageKey`]);
}

function loadReadingMistakes() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(READING_MISTAKE_STORAGE_KEY) || "[]");
    const deletedIds = new Set(loadReadingMistakeDeletedIds());
    if (!Array.isArray(saved)) return [];
    return sortReadingMistakesByQuestionType(saved
      .map(normaliseReadingMistake)
      .filter((item) => item.id && !deletedIds.has(item.id)));
  } catch {
    return [];
  }
}

function getReadingMistakeQuestionTypeLabel(item) {
  return readingMistakeQuestionTypeLabels[item?.questionType] || readingMistakeQuestionTypeLabels.trueFalseNotGiven;
}

function getReadingMistakeErrorLabel(item) {
  if (item?.errorType === "custom") return item.customErrorType || "自定义错因";
  return readingMistakeErrorLabels[item?.errorType] || readingMistakeErrorLabels.location;
}

function getReadingMistakeDisplayTitle(item) {
  return String(item?.title || "").trim() || `${getReadingMistakeQuestionTypeLabel(item)}错题`;
}

function sortReadingMistakesByQuestionType(items = []) {
  return [...items].sort((a, b) => {
    const typeDifference = readingMistakeQuestionTypeOrder.indexOf(a.questionType) - readingMistakeQuestionTypeOrder.indexOf(b.questionType);
    if (typeDifference) return typeDifference;
    return Number(b.createdAt || 0) - Number(a.createdAt || 0);
  });
}

function loadReadingMistakeDeletedIds() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(READING_MISTAKE_DELETED_STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? [...new Set(saved.map(String).filter(Boolean))] : [];
  } catch {
    return [];
  }
}

function saveReadingMistakeDeletedIds() {
  try {
    window.localStorage.setItem(
      READING_MISTAKE_DELETED_STORAGE_KEY,
      JSON.stringify(state.readingMistakeDeletedIds),
    );
  } catch {}
}

function saveReadingMistakes() {
  try {
    window.localStorage.setItem(READING_MISTAKE_STORAGE_KEY, JSON.stringify(state.readingMistakes));
    return true;
  } catch {
    readingMistakeFormStatus.textContent = "保存失败：浏览器本地存储不可用。";
    return false;
  }
}

function mergeReadingMistakes(primary = [], secondary = []) {
  const merged = new Map();
  const deletedIds = new Set(state.readingMistakeDeletedIds || []);
  [...secondary, ...primary].forEach((record) => {
    const item = normaliseReadingMistake(record);
    if (!item.id || deletedIds.has(item.id)) return;
    const existing = merged.get(item.id);
    if (!existing || item.updatedAt >= existing.updatedAt) merged.set(item.id, item);
  });
  return sortReadingMistakesByQuestionType([...merged.values()]);
}

function createReadingMistakeId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `reading-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function openReadingMediaDatabase() {
  if (readingMediaDatabasePromise) return readingMediaDatabasePromise;
  readingMediaDatabasePromise = new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("当前浏览器不支持图片存储"));
      return;
    }
    const request = window.indexedDB.open("ieltsTrainerMediaV1", 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains("readingMistakeImages")) {
        database.createObjectStore("readingMistakeImages");
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("图片存储初始化失败"));
  }).catch((error) => {
    readingMediaDatabasePromise = null;
    throw error;
  });
  return readingMediaDatabasePromise;
}

async function writeReadingMedia(key, blob) {
  const database = await openReadingMediaDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction("readingMistakeImages", "readwrite");
    transaction.objectStore("readingMistakeImages").put(blob, key);
    transaction.oncomplete = () => resolve(true);
    transaction.onerror = () => reject(transaction.error || new Error("图片保存失败"));
  });
}

async function readReadingMedia(key) {
  if (!key) return null;
  const database = await openReadingMediaDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction("readingMistakeImages", "readonly");
    const request = transaction.objectStore("readingMistakeImages").get(key);
    request.onsuccess = () => resolve(request.result instanceof Blob ? request.result : null);
    request.onerror = () => reject(request.error || new Error("图片读取失败"));
  });
}

async function deleteReadingMedia(key) {
  if (!key) return;
  try {
    const database = await openReadingMediaDatabase();
    await new Promise((resolve, reject) => {
      const transaction = database.transaction("readingMistakeImages", "readwrite");
      transaction.objectStore("readingMistakeImages").delete(key);
      transaction.oncomplete = () => resolve(true);
      transaction.onerror = () => reject(transaction.error || new Error("图片删除失败"));
    });
  } catch {}
}

function revokeReadingPreviewUrls(target) {
  target.splice(0).forEach((url) => URL.revokeObjectURL(url));
}

async function compressReadingScreenshot(file) {
  if (!file?.type?.startsWith("image/")) throw new Error("请选择 PNG、JPG、WebP 或 BMP 图片");
  if (file.size > 15 * 1024 * 1024) throw new Error("图片超过 15MB，请先裁剪");
  const bitmap = await window.createImageBitmap(file);
  const scale = Math.min(1, 1800 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const context = canvas.getContext("2d", { alpha: false });
  context.fillStyle = "#fff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close?.();
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/webp", 0.9));
  if (!blob) throw new Error("图片压缩失败");
  return blob;
}

function createReadingFormImageAttachment({ key = "", blob = null } = {}) {
  return {
    id: key ? `saved:${key}` : `pending:${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    key,
    blob,
  };
}

function getReadingFormImageChanges(kind) {
  return kind === "question" ? readingQuestionImageChanges : readingEvidenceImageChanges;
}

function setReadingFormImageChanges(kind, attachments) {
  if (kind === "question") readingQuestionImageChanges = attachments;
  else readingEvidenceImageChanges = attachments;
}

function getReadingImageFormParts(kind) {
  const isQuestion = kind === "question";
  return {
    container: isQuestion ? readingQuestionPreview : readingEvidencePreview,
    removeButton: isQuestion ? removeReadingQuestionImage : removeReadingEvidenceImage,
    status: isQuestion ? readingQuestionImageStatus : readingEvidenceImageStatus,
    emptyText: isQuestion ? "尚未上传题目截图" : "尚未上传原文证据截图",
  };
}

function renderReadingFormImages() {
  revokeReadingPreviewUrls(readingFormPreviewUrls);
  ["question", "evidence"].forEach((kind) => {
    const { container, removeButton, emptyText } = getReadingImageFormParts(kind);
    const attachments = getReadingFormImageChanges(kind);
    removeButton.hidden = attachments.length === 0;
    removeButton.textContent = attachments.length > 1 ? `清空全部（${attachments.length}）` : "清空全部";
    if (!attachments.length) {
      container.innerHTML = `<span>${emptyText}</span>`;
      return;
    }
    container.innerHTML = attachments.map((attachment, index) => {
      const src = attachment.blob ? URL.createObjectURL(attachment.blob) : "";
      if (src) readingFormPreviewUrls.push(src);
      return `
        <figure class="reading-form-image-item${src ? "" : " is-loading"}">
          ${src ? `<img src="${src}" alt="${kind === "question" ? "题目" : "原文证据"}截图 ${index + 1}">` : "<span>正在加载图片…</span>"}
          <figcaption>截图 ${index + 1}</figcaption>
          <button type="button" class="reading-form-image-remove" data-reading-form-image-remove="${kind}" data-reading-form-image-id="${encodeURIComponent(attachment.id)}" aria-label="移除截图 ${index + 1}">×</button>
        </figure>`;
    }).join("");
  });
}

async function loadReadingFormImages(kind, expectedId) {
  const attachments = getReadingFormImageChanges(kind);
  await Promise.all(attachments.map(async (attachment) => {
    if (!attachment.key || attachment.blob) return;
    try {
      const blob = await readReadingMedia(attachment.key);
      if (readingMistakeDialog.hidden || readingMistakeId.value !== expectedId) return;
      const currentAttachment = getReadingFormImageChanges(kind).find((entry) => entry.id === attachment.id);
      if (currentAttachment) currentAttachment.blob = blob;
    } catch {}
  }));
  if (!readingMistakeDialog.hidden && readingMistakeId.value === expectedId) renderReadingFormImages();
}

async function handleReadingImageSelection(file, kind) {
  if (!file) return;
  const isQuestion = kind === "question";
  const input = isQuestion ? readingQuestionImage : readingEvidenceImage;
  const { status } = getReadingImageFormParts(kind);
  const attachment = createReadingFormImageAttachment();
  getReadingFormImageChanges(kind).push(attachment);
  input.disabled = true;
  status.textContent = "正在压缩图片…";
  renderReadingFormImages();
  try {
    const blob = await compressReadingScreenshot(file);
    const currentAttachment = getReadingFormImageChanges(kind).find((entry) => entry.id === attachment.id);
    if (!currentAttachment) return;
    currentAttachment.blob = blob;
    status.textContent = `已添加第 ${getReadingFormImageChanges(kind).length} 张，压缩后 ${Math.max(1, Math.round(blob.size / 1024))} KB。`;
  } catch (error) {
    setReadingFormImageChanges(kind, getReadingFormImageChanges(kind).filter((entry) => entry.id !== attachment.id));
    status.textContent = error?.message || "图片处理失败";
  } finally {
    input.disabled = false;
    input.value = "";
    renderReadingFormImages();
  }
}

function removeReadingFormImage(kind, attachmentId = "") {
  const attachments = getReadingFormImageChanges(kind);
  const nextAttachments = attachmentId
    ? attachments.filter((attachment) => attachment.id !== attachmentId)
    : [];
  setReadingFormImageChanges(kind, nextAttachments);
  const { status } = getReadingImageFormParts(kind);
  status.textContent = attachmentId ? "保存后会移除这张图片。" : "保存后会清空这一组图片。";
  renderReadingFormImages();
}

async function persistReadingImageChanges(id, kind, attachments, existingKeys) {
  const retainedKeys = [];
  for (const attachment of attachments) {
    if (attachment.key) {
      retainedKeys.push(attachment.key);
      continue;
    }
    if (!attachment.blob) continue;
    const key = `reading:${id}:${kind}:${createReadingMistakeId()}`;
    await writeReadingMedia(key, attachment.blob);
    retainedKeys.push(key);
  }
  const uniqueKeys = [...new Set(retainedKeys)];
  await Promise.all((existingKeys || [])
    .filter((key) => key && !uniqueKeys.includes(key))
    .map((key) => deleteReadingMedia(key)));
  return uniqueKeys;
}

function getFilteredReadingMistakes() {
  const query = normaliseKey(state.readingMistakeQuery || "");
  return sortReadingMistakesByQuestionType(state.readingMistakes.filter((item) => {
    const matchesQuery = !query || [item.title, item.note, item.customErrorType]
      .map((value) => normaliseKey(value || ""))
      .some((value) => value.includes(query));
    const matchesQuestion = state.readingMistakeQuestionFilter === "all"
      || item.questionType === state.readingMistakeQuestionFilter;
    const matchesError = state.readingMistakeErrorFilter === "all"
      || item.errorType === state.readingMistakeErrorFilter;
    const matchesStatus = state.readingMistakeStatusFilter === "all"
      || item.status === state.readingMistakeStatusFilter;
    return matchesQuery && matchesQuestion && matchesError && matchesStatus;
  }));
}

function renderReadingMistakeSummary() {
  const total = state.readingMistakes.length;
  readingMistakeTotal.textContent = String(total);
  readingMistakeReviewing.textContent = String(state.readingMistakes.filter((item) => item.status === "reviewing").length);
  readingMistakeMastered.textContent = String(state.readingMistakes.filter((item) => item.status === "mastered").length);
  readingMistakeReviews.textContent = String(state.readingMistakes.reduce((sum, item) => sum + item.reviewCount, 0));
  readingMistakeNavCount.textContent = String(total);
}

function renderReadingMistakeList() {
  const items = getFilteredReadingMistakes();
  if (!items.length) {
    readingMistakeList.innerHTML = `
      <div class="listening-mistake-list-empty">
        <strong>${state.readingMistakes.length ? "没有符合筛选条件的错题" : "还没有阅读错题"}</strong>
        <span>${state.readingMistakes.length ? "调整筛选条件后再试。" : "保存题目和证据截图，建立可回看的错题记录。"}</span>
      </div>
    `;
    return;
  }
  readingMistakeList.innerHTML = items.map((item, index) => `
    <button
      class="listening-mistake-list-item${item.id === state.readingMistakeSelectedId ? " active" : ""}"
      type="button"
      data-reading-mistake-open="${encodeURIComponent(item.id)}"
    >
      <span class="listening-mistake-list-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="listening-mistake-list-copy">
        <strong>${escapeHtml(getReadingMistakeDisplayTitle(item))}</strong>
        <small>${escapeHtml(item.note || "暂无备注")}</small>
        <span>
          <em>${escapeHtml(getReadingMistakeQuestionTypeLabel(item))}</em>
          <em>${escapeHtml(getReadingMistakeErrorLabel(item))}</em>
          <em class="status-${item.status}">${escapeHtml(listeningMistakeStatusLabels[item.status])}</em>
        </span>
      </span>
      <time datetime="${new Date(item.createdAt).toISOString()}">${formatListeningMistakeDate(item.createdAt)}</time>
    </button>
  `).join("");
}

function renderReadingImageSection(title, imageKeys, target, alt) {
  if (!imageKeys.length) {
    return `<section class="listening-mistake-detail-section reading-mistake-image-section"><h4>${title}</h4><div class="reading-detail-image-empty">未上传图片</div></section>`;
  }
  return `
    <section class="listening-mistake-detail-section reading-mistake-image-section">
      <h4>${title}<small>${imageKeys.length} 张</small></h4>
      <div class="reading-detail-image-grid">
        ${imageKeys.map((key, index) => `
          <div class="reading-detail-image" data-reading-image-target="${target}" data-reading-image-index="${index}">
            <span>正在加载图片…</span>
            <img alt="${alt} ${index + 1}" hidden />
          </div>`).join("")}
      </div>
    </section>
  `;
}

async function hydrateReadingMistakeImages(item) {
  revokeReadingPreviewUrls(readingDetailPreviewUrls);
  const pairs = [
    ...getReadingMistakeImageKeys(item, "question").map((key, index) => ["question", key, index]),
    ...getReadingMistakeImageKeys(item, "evidence").map((key, index) => ["evidence", key, index]),
  ];
  await Promise.all(pairs.map(async ([target, key, index]) => {
    if (!key) return;
    const container = readingMistakeDetail.querySelector(`[data-reading-image-target="${target}"][data-reading-image-index="${index}"]`);
    if (!container) return;
    try {
      const blob = await readReadingMedia(key);
      if (state.readingMistakeSelectedId !== item.id || !container.isConnected) return;
      if (!blob) {
        container.innerHTML = "<span>图片数据已丢失，可在编辑中重新上传。</span>";
        return;
      }
      const url = URL.createObjectURL(blob);
      readingDetailPreviewUrls.push(url);
      const image = container.querySelector("img");
      image.src = url;
      image.hidden = false;
      container.querySelector("span").hidden = true;
    } catch {
      if (container.isConnected) container.innerHTML = "<span>图片读取失败。</span>";
    }
  }));
}

function renderReadingMistakeDetail() {
  revokeReadingPreviewUrls(readingDetailPreviewUrls);
  const item = state.readingMistakes.find((entry) => entry.id === state.readingMistakeSelectedId);
  if (!item) {
    readingMistakeDetail.innerHTML = `
      <div class="listening-mistake-empty">
        <span aria-hidden="true">01</span>
        <h3>选择一条阅读错题</h3>
        <p>查看题目、原文证据和复习记录。</p>
      </div>
    `;
    return;
  }
  readingMistakeDetail.innerHTML = `
    <header class="listening-mistake-detail-header">
      <div>
        <p class="eyebrow">${escapeHtml(getReadingMistakeErrorLabel(item))}</p>
        <h3>${escapeHtml(getReadingMistakeDisplayTitle(item))}</h3>
      </div>
      <div class="listening-mistake-detail-actions">
        <button class="secondary-button" type="button" data-reading-mistake-edit="${encodeURIComponent(item.id)}">编辑</button>
        <button class="listening-mistake-delete" type="button" data-reading-mistake-delete="${encodeURIComponent(item.id)}">删除</button>
      </div>
    </header>
    <div class="listening-mistake-detail-meta reading-mistake-detail-meta">
      <label>
        <span>掌握状态</span>
        <select data-reading-mistake-status="${encodeURIComponent(item.id)}">
          ${Object.entries(listeningMistakeStatusLabels).map(([value, label]) =>
            `<option value="${value}"${item.status === value ? " selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>
      <div><span>题型</span><strong>${escapeHtml(getReadingMistakeQuestionTypeLabel(item))}</strong></div>
      <div><span>建立日期</span><strong>${formatListeningMistakeDate(item.createdAt)}</strong></div>
      <div><span>最近复习</span><strong>${formatListeningMistakeDate(item.lastReviewedAt)}</strong></div>
      <div><span>复习次数</span><strong>${item.reviewCount} 次</strong></div>
    </div>
    ${renderReadingImageSection("题目截图", getReadingMistakeImageKeys(item, "question"), "question", "阅读题目截图")}
    ${renderReadingImageSection("原文证据截图", getReadingMistakeImageKeys(item, "evidence"), "evidence", "阅读原文证据截图")}
    <section class="listening-mistake-detail-section listening-mistake-note-section">
      <h4>简短备注</h4>
      <p>${renderListeningMistakeText(item.note, "没有备注")}</p>
    </section>
    <footer class="listening-mistake-review-footer">
      <div>
        <strong>完成一次复习</strong>
        <span>自动更新日期，并将复习次数加 1。</span>
      </div>
      <button class="primary-button" type="button" data-reading-mistake-review="${encodeURIComponent(item.id)}">
        <span class="button-icon" aria-hidden="true">✓</span>
        完成一次复习
      </button>
    </footer>
  `;
  void hydrateReadingMistakeImages(item);
}

function renderReadingMistakeLibrary() {
  renderReadingMistakeSummary();
  renderReadingMistakeList();
  renderReadingMistakeDetail();
}

function syncReadingMistakeCustomErrorField() {
  const isCustom = readingMistakeErrorType.value === "custom";
  readingMistakeCustomErrorField.hidden = !isCustom;
  readingMistakeCustomErrorType.required = isCustom;
  if (!isCustom) readingMistakeCustomErrorType.value = "";
}

function openReadingMistakeForm(item = null) {
  readingMistakeForm.reset();
  revokeReadingPreviewUrls(readingFormPreviewUrls);
  readingQuestionImageChanges = getReadingMistakeImageKeys(item, "question")
    .map((key) => createReadingFormImageAttachment({ key }));
  readingEvidenceImageChanges = getReadingMistakeImageKeys(item, "evidence")
    .map((key) => createReadingFormImageAttachment({ key }));
  readingMistakeId.value = item?.id || "";
  readingMistakeTitle.value = item?.title || "";
  readingMistakeQuestionType.value = item?.questionType || "trueFalseNotGiven";
  readingMistakeErrorType.value = item?.errorType || "location";
  readingMistakeCustomErrorType.value = item?.customErrorType || "";
  syncReadingMistakeCustomErrorField();
  readingMistakeStatus.value = item?.status || "unmastered";
  readingMistakeNote.value = item?.note || "";
  readingQuestionImageStatus.textContent = "";
  readingEvidenceImageStatus.textContent = "";
  readingMistakeFormStatus.textContent = "";
  renderReadingFormImages();
  readingMistakeDialogTitle.textContent = item ? "编辑阅读错题" : "新建阅读错题";
  readingMistakeDialog.hidden = false;
  document.body.classList.add("listening-mistake-dialog-open");
  if (item) {
    void loadReadingFormImages("question", item.id);
    void loadReadingFormImages("evidence", item.id);
  }
  readingMistakeTitle.focus();
}

function closeReadingMistakeForm() {
  if (readingMistakeDialog.hidden) return;
  readingMistakeDialog.hidden = true;
  document.body.classList.remove("listening-mistake-dialog-open");
  revokeReadingPreviewUrls(readingFormPreviewUrls);
  addReadingMistakeButton.focus();
}

async function submitReadingMistakeForm(event) {
  event.preventDefault();
  const title = readingMistakeTitle.value.trim();
  const errorType = readingMistakeErrorType.value;
  const customErrorType = readingMistakeCustomErrorType.value.trim();
  if (errorType === "custom" && !customErrorType) {
    readingMistakeFormStatus.textContent = "请填写自定义错因。";
    readingMistakeCustomErrorType.focus();
    return;
  }
  const existing = state.readingMistakes.find((item) => item.id === readingMistakeId.value);
  const id = existing?.id || createReadingMistakeId();
  readingMistakeFormStatus.textContent = "正在保存…";
  try {
    const [questionImageKeys, evidenceImageKeys] = await Promise.all([
      persistReadingImageChanges(id, "question", readingQuestionImageChanges, getReadingMistakeImageKeys(existing, "question")),
      persistReadingImageChanges(id, "evidence", readingEvidenceImageChanges, getReadingMistakeImageKeys(existing, "evidence")),
    ]);
    const now = Date.now();
    const record = normaliseReadingMistake({
      id,
      title,
      questionType: readingMistakeQuestionType.value,
      errorType,
      customErrorType,
      status: readingMistakeStatus.value,
      note: readingMistakeNote.value,
      questionImageKeys,
      evidenceImageKeys,
      createdAt: existing?.createdAt || now,
      updatedAt: now,
      lastReviewedAt: existing?.lastReviewedAt || 0,
      reviewCount: existing?.reviewCount || 0,
    });
    state.readingMistakes = sortReadingMistakesByQuestionType(existing
      ? state.readingMistakes.map((item) => item.id === record.id ? record : item)
      : [record, ...state.readingMistakes]);
    state.readingMistakeSelectedId = record.id;
    if (!saveReadingMistakes()) return;
    void saveTraining(false);
    closeReadingMistakeForm();
    renderReadingMistakeLibrary();
  } catch (error) {
    readingMistakeFormStatus.textContent = error?.message || "保存失败，请重试。";
  }
}

function updateReadingMistakeStatus(id, status) {
  if (!listeningMistakeStatusLabels[status]) return;
  const item = state.readingMistakes.find((entry) => entry.id === id);
  if (!item) return;
  item.status = status;
  item.updatedAt = Date.now();
  saveReadingMistakes();
  void saveTraining(false);
  renderReadingMistakeLibrary();
}

function completeReadingMistakeReview(id) {
  const item = state.readingMistakes.find((entry) => entry.id === id);
  if (!item) return;
  item.lastReviewedAt = Date.now();
  item.reviewCount += 1;
  item.updatedAt = Date.now();
  saveReadingMistakes();
  void saveTraining(false);
  renderReadingMistakeLibrary();
}

async function deleteReadingMistake(id) {
  const item = state.readingMistakes.find((entry) => entry.id === id);
  if (!item || !window.confirm(`确定删除“${getReadingMistakeDisplayTitle(item)}”吗？此操作无法撤销。`)) return;
  await Promise.all([
    ...getReadingMistakeImageKeys(item, "question"),
    ...getReadingMistakeImageKeys(item, "evidence"),
  ].map((key) => deleteReadingMedia(key)));
  state.readingMistakeDeletedIds = [...new Set([...state.readingMistakeDeletedIds, id])];
  state.readingMistakes = state.readingMistakes.filter((entry) => entry.id !== id);
  state.readingMistakeSelectedId = state.readingMistakes[0]?.id || "";
  saveReadingMistakes();
  saveReadingMistakeDeletedIds();
  void saveTraining(false);
  renderReadingMistakeLibrary();
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
    mnemonic: note.mnemonic || "",
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
      const mnemonic = normaliseMnemonic(note?.mnemonic || "");
      if (key && zh) {
        notes[key] = {
          zh,
          en: en || "User-supplied Chinese meaning.",
          example,
          mnemonic,
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

function normaliseShortcutSettings(settings) {
  const validCodes = Object.keys(shortcutLabels);
  const next = { ...defaultShortcutSettings };
  Object.entries(settings || {}).forEach(([action, code]) => {
    if (action in next && validCodes.includes(code)) next[action] = code;
  });

  if (next.advance === next.replay) next.replay = defaultShortcutSettings.replay;
  if (next.favorite === next.advance) next.favorite = defaultShortcutSettings.favorite;
  if (next.favorite === next.replay) next.favorite = defaultShortcutSettings.favorite;
  if (next.reveal === next.advance) next.reveal = defaultShortcutSettings.reveal;
  if (next.reveal === next.replay) next.reveal = defaultShortcutSettings.reveal;
  if (next.reveal === next.favorite) next.reveal = defaultShortcutSettings.reveal;
  if (next.retry === next.advance) next.retry = defaultShortcutSettings.retry;
  if (next.retry === next.replay) next.retry = defaultShortcutSettings.retry;
  if (next.retry === next.favorite) next.retry = defaultShortcutSettings.retry;
  if (next.retry === next.reveal) next.retry = defaultShortcutSettings.retry;
  return next;
}

function loadShortcutSettings() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(SHORTCUT_STORAGE_KEY) || "{}");
    return normaliseShortcutSettings(saved);
  } catch {
    return { ...defaultShortcutSettings };
  }
}

function saveShortcutSettings() {
  try {
    window.localStorage.setItem(SHORTCUT_STORAGE_KEY, JSON.stringify(state.shortcutSettings));
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

function createDefaultWritingStats() {
  return {
    dayKey: "",
    packsCompletedToday: 0,
    slotAttempts: 0,
    slotCorrect: 0,
    dangerErrors: 0,
    attempts: 0,
    correct: 0,
    totalSeconds: 0,
    totalWords: 0,
    grammarErrors: 0,
    spellingErrors: 0,
    phraseErrors: 0,
    repeatedErrors: {},
    lastPracticedAt: 0,
  };
}

function loadWritingMistakeBook() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(WRITING_MISTAKE_STORAGE_KEY) || "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function loadWritingFavoriteBook() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(WRITING_FAVORITE_STORAGE_KEY) || "{}");
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function loadWritingStats() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(WRITING_STATS_STORAGE_KEY) || "{}");
    return {
      ...createDefaultWritingStats(),
      ...(saved && typeof saved === "object" ? saved : {}),
      repeatedErrors: saved?.repeatedErrors && typeof saved.repeatedErrors === "object" ? saved.repeatedErrors : {},
    };
  } catch {
    return createDefaultWritingStats();
  }
}

function saveWritingMistakeBook() {
  try {
    window.localStorage.setItem(WRITING_MISTAKE_STORAGE_KEY, JSON.stringify(state.writingMistakeBook));
  } catch {}
}

function saveWritingFavoriteBook() {
  try {
    window.localStorage.setItem(WRITING_FAVORITE_STORAGE_KEY, JSON.stringify(state.writingFavoriteBook));
  } catch {}
}

function saveWritingStats() {
  try {
    window.localStorage.setItem(WRITING_STATS_STORAGE_KEY, JSON.stringify(state.writingStats));
  } catch {}
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
    isReviewingWrong: state.isReviewingWrong,
    reviewSource: state.reviewSource,
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
    shortcutSettings: state.shortcutSettings,
    sessions: state.savedSessions,
    writingMistakeBook: state.writingMistakeBook,
    writingFavoriteBook: state.writingFavoriteBook,
    writingStats: state.writingStats,
    writingPackId: state.writingPackId,
    writingPhase: state.writingPhase,
    writingStudio: state.writingStudio,
    listeningMistakes: state.listeningMistakes,
    readingMistakes: state.readingMistakes,
    readingMistakeDeletedIds: state.readingMistakeDeletedIds,
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
  state.shortcutSettings = normaliseShortcutSettings({
    ...state.shortcutSettings,
    ...(snapshot.shortcutSettings || {}),
  });
  state.savedSessions = { ...createEmptyBook(), ...(snapshot.sessions || {}) };
  state.writingPackId =
    typeof snapshot.writingPackId === "string" && writingPatternPacks.some((pack) => pack.id === snapshot.writingPackId)
      ? snapshot.writingPackId
      : state.writingPackId;
  state.writingPhase =
    typeof snapshot.writingPhase === "string" && writingPhaseLabels[snapshot.writingPhase]
      ? snapshot.writingPhase
      : state.writingPhase;
  state.writingMistakeBook =
    snapshot.writingMistakeBook && typeof snapshot.writingMistakeBook === "object"
      ? { ...state.writingMistakeBook, ...snapshot.writingMistakeBook }
      : state.writingMistakeBook;
  state.writingFavoriteBook =
    snapshot.writingFavoriteBook && typeof snapshot.writingFavoriteBook === "object"
      ? { ...snapshot.writingFavoriteBook, ...state.writingFavoriteBook }
      : state.writingFavoriteBook;
  state.writingStats =
    snapshot.writingStats && typeof snapshot.writingStats === "object"
      ? {
          ...state.writingStats,
          ...snapshot.writingStats,
          repeatedErrors: {
            ...(state.writingStats?.repeatedErrors || {}),
            ...(snapshot.writingStats.repeatedErrors || {}),
          },
        }
      : state.writingStats;
  if (snapshot.writingStudio && typeof snapshot.writingStudio === "object") {
    state.writingStudio = mergeWritingStudioState(state.writingStudio, snapshot.writingStudio);
    saveWritingStudioState();
  }
  state.listeningMistakes = mergeListeningMistakes(state.listeningMistakes, snapshot.listeningMistakes);
  state.readingMistakeDeletedIds = [...new Set([
    ...state.readingMistakeDeletedIds,
    ...(Array.isArray(snapshot.readingMistakeDeletedIds) ? snapshot.readingMistakeDeletedIds.map(String).filter(Boolean) : []),
  ])];
  state.readingMistakes = mergeReadingMistakes(state.readingMistakes, snapshot.readingMistakes);
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
  saveShortcutSettings();
  saveWritingMistakeBook();
  saveWritingFavoriteBook();
  saveWritingStats();
  saveListeningMistakes();
  saveReadingMistakes();
  saveReadingMistakeDeletedIds();
  renderShortcutSettings();
  populateWritingPackSelect();
  setWritingPhase(state.writingPhase);
  renderWritingStats();
  renderWritingMistakeBook();
  renderWritingStudioDashboard();
  state.listeningMistakeSelectedId = state.listeningMistakes[0]?.id || "";
  state.readingMistakeSelectedId = state.readingMistakes[0]?.id || "";
  renderListeningMistakeLibrary();
  renderReadingMistakeLibrary();
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
  return "/save-state";
}

async function saveTraining(manual = false) {
  const snapshot = buildTrainingSnapshot();
  const localSaved = saveSnapshotToLocal(snapshot);

  if (window.location.protocol === "file:") {
    if (manual) {
      saveStatus.textContent = localSaved
        ? "训练已保存到当前本地 HTML 的浏览器数据。"
        : "保存失败：浏览器本地存储不可用。";
    }
    return localSaved;
  }

  let serverSaved = false;

  try {
    const payload = btoa(unescape(encodeURIComponent(JSON.stringify(snapshot))));
    const response = await fetch(getSaveStateEndpoint(), {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: payload,
      mode: "same-origin",
    });
    serverSaved = response.ok;
  } catch {
    serverSaved = false;
  }

  if (manual) {
    saveStatus.textContent = serverSaved
      ? "训练已保存到本地项目文件。"
      : "训练已保存到当前浏览器。";
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
    saveStatus.textContent = "导出数据已复制，可以在本页面点导入恢复。";
    return;
  }

  window.prompt("复制下面的数据，之后在本页面点导入粘贴。", exportText);
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
  const importText = window.prompt("粘贴导出的训练数据。");
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
  updateListeningMistakeNavVisibility();
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
  state.isReviewingWrong = Boolean(session.isReviewingWrong);
  state.reviewSource = typeof session.reviewSource === "string" ? session.reviewSource : state.isReviewingWrong ? "wrong" : "";
  state.results = Array.isArray(session.results) ? session.results : [];
  const wasAnswered = state.answered;
  scoreValue.textContent = String(state.score);
  renderRound();
  if (wasAnswered) {
    state.answered = true;
    const current = state.deck[state.currentIndex];
    const lastResult = [...state.results].reverse().find((result) => normaliseKey(result.word) === normaliseKey(current.word));
    if (lastResult) {
      renderAnswerReview(current, lastResult.response, lastResult.correct, lastResult.mode, lastResult.revealed);
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
  updateListeningMistakeNavVisibility();
  updateSidebarRailActive();
  if (resetSurface) restoreSavedSessionForMode(nextMode);
}

function resetPracticeSurface(message = "等待开始") {
  stopRoundSpeech();
  state.deck = [];
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.heard = false;
  state.isReviewingWrong = false;
  state.reviewSource = "";
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
    mnemonic: state.favoriteBook[mode][key]?.mnemonic || note.mnemonic || "",
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
      item.mnemonic = note.mnemonic || item.mnemonic || "";
      if (note.example) item.example = note.example;
      changed = true;
    }

    const correctItem = state.correctBook[mode]?.[key];
    if (correctItem) {
      correctItem.meaningZh = note.zh;
      correctItem.meaningEn = note.en;
      correctItem.mnemonic = note.mnemonic || correctItem.mnemonic || "";
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

function addEntryToFavoriteBook(mode, entry, response = "") {
  if (!bookModes.includes(mode)) return false;

  const key = normaliseKey(entry.word);
  if (!key) return false;

  const note = getWordNote(entry);
  state.favoriteBook[mode][key] = {
    word: entry.word,
    example: entry.example,
    meaningZh: entry.meaningZh || note.zh,
    meaningEn: entry.meaningEn || note.en,
    mnemonic: entry.mnemonic || note.mnemonic || "",
    response,
    missedAt: Date.now(),
  };
  saveFavoriteBook();
  renderFavoriteBook();
  return true;
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
    mnemonic: item.mnemonic || note.mnemonic || "",
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
  const query = normaliseKey(state.bookSearch || "");
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
  const visibleEntries = query
    ? entries.filter((item) =>
        [item.word, item.response, item.meaningZh, item.meaningEn, item.example]
          .map((value) => normaliseKey(String(value || "")))
          .some((value) => value.includes(query)),
      )
    : entries;

  const practiceEntries = getFavoritePracticeEntries(entries);
  bookPracticeReviewButton.disabled = practiceEntries.entries.length === 0;
  bookPracticeReviewButton.title = practiceEntries.entries.length
    ? `按${getModeLabel(state.bookMode)}练习 ${practiceEntries.entries.length} 个收藏词`
    : `${getModeLabel(state.bookMode)}暂无可练习收藏词`;
  bookPracticeReviewButton.setAttribute("aria-label", bookPracticeReviewButton.title);
  bookPracticeReviewButton.innerHTML = `<span class="button-icon" aria-hidden="true">▶</span>做题${
    practiceEntries.entries.length ? ` ${practiceEntries.entries.length}` : ""
  }`;

  bookListReviewButton.disabled = entries.length === 0;
  bookListReviewButton.title = entries.length
    ? `排序复习${getModeLabel(state.bookMode)}收藏本里的 ${entries.length} 个单词`
    : `${getModeLabel(state.bookMode)}暂无错词`;
  bookListReviewButton.setAttribute("aria-label", bookListReviewButton.title);
  bookListReviewButton.innerHTML = `<span class="button-icon" aria-hidden="true">≡</span>排序${
    entries.length ? ` ${entries.length}` : ""
  }`;

  if (!entries.length) {
    bookList.innerHTML = `<p class="book-empty">${getModeLabel(state.bookMode)}暂无错词。</p>`;
    return;
  }

  if (!visibleEntries.length) {
    bookList.innerHTML = `<p class="book-empty">没有找到“${escapeHtml(state.bookSearch)}”相关的收藏词。</p>`;
    return;
  }

  bookList.innerHTML = visibleEntries
    .map(
      (item) => {
        const key = escapeHtml(normaliseKey(item.word));
        return `
        <article class="book-item">
          <div class="book-item-top">
            <strong>${escapeHtml(item.word)}</strong>
            <div class="book-item-actions">
              <span>${formatBookDate(item.missedAt)}</span>
              <button class="book-detail-button" type="button" data-open-word-detail data-detail-source="favorite" data-detail-mode="${state.bookMode}" data-detail-key="${key}">详情</button>
              <button type="button" data-remove-book="${key}">移除</button>
            </div>
          </div>
          <p>上次答案：${escapeHtml(item.response || "未记录")}</p>
          <small>释义：${escapeHtml(item.meaningZh || "暂无释义")}</small>
          <small>${renderRevealedSentence(item.example || "", item.word)}</small>
        </article>
      `;
      },
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

function getCurrentDetailItem(mode, key) {
  const current = state.deck[state.currentIndex];
  if (!current || normaliseKey(current.word) !== key) return null;

  const lastResult = [...state.results].reverse().find((result) => normaliseKey(result.word) === key);
  return {
    ...current,
    response: lastResult?.response || "",
    sourceLabel: state.isReviewingWrong ? "回顾中" : "当前题",
    mode,
  };
}

function getWordDetailItem(mode, key, source = "") {
  if (!bookModes.includes(mode) || !key) return null;

  if (source === "favorite" && state.favoriteBook[mode]?.[key]) {
    return { ...state.favoriteBook[mode][key], sourceLabel: "收藏本", mode };
  }

  if (source === "correct" && state.correctBook[mode]?.[key]) {
    return { ...state.correctBook[mode][key], sourceLabel: "已答对", mode };
  }

  if (source === "current") {
    const currentItem = getCurrentDetailItem(mode, key);
    if (currentItem) return currentItem;
  }

  if (state.favoriteBook[mode]?.[key]) {
    return { ...state.favoriteBook[mode][key], sourceLabel: "收藏本", mode };
  }

  if (state.correctBook[mode]?.[key]) {
    return { ...state.correctBook[mode][key], sourceLabel: "已答对", mode };
  }

  return getCurrentDetailItem(mode, key);
}

function normaliseMnemonic(value) {
  return String(value || "")
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function openWordDetail(mode, key, source = "") {
  const item = getWordDetailItem(mode, key, source);
  if (!item) return;

  const note = getWordNote(item);
  const example = item.example || "";
  state.detailEntry = {
    word: item.word,
    example,
    meaningZh: note.zh || "",
    meaningEn: note.en || "",
    mnemonic: item.mnemonic || note.mnemonic || "",
  };

  wordDetailMeta.textContent = `${getModeLabel(mode)} · ${item.sourceLabel || "单词详情"}`;
  wordDetailTitle.textContent = item.word;
  wordDetailZh.textContent = note.zh || "暂无释义";
  wordDetailEn.textContent = note.en || "No English definition yet.";
  wordDetailExample.innerHTML = example ? renderRevealedSentence(example, item.word) : "暂无例句";
  wordDetailResponse.textContent = item.response || "未记录";
  wordDetailStatus.textContent = "";
  wordDetailSpeakExample.disabled = !example;
  wordDetailDialog.hidden = false;
  wordDetailClose.focus();
  if (favoriteReviewAutoSpeak.checked) void speakWordDetail("word");
}

function closeWordDetail() {
  wordDetailDialog.hidden = true;
  state.detailEntry = null;
  wordDetailStatus.textContent = "";
}

async function speakWordDetail(kind) {
  const detail = state.detailEntry;
  if (!detail) return;

  const text = kind === "example" ? detail.example : detail.word;
  if (!normaliseWord(text)) return;

  state.speechRunId += 1;
  state.isSpeaking = false;
  stopCurrentAudio();
  window.speechSynthesis?.cancel();
  wordDetailStatus.textContent = kind === "example" ? "正在朗读例句" : "正在朗读单词";

  const spoken = await speak(text, { kind: kind === "example" ? "sentence" : "word" });
  wordDetailStatus.textContent = spoken ? "朗读完成。" : "朗读失败，请检查语音设置。";
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
      mnemonic: localNote?.mnemonic || "",
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
      mnemonic: entry.mnemonic || localNote?.mnemonic || "",
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
      saveUserNote(entry.word, getWordNote(entry).zh, getWordNote(entry).en, entry.example, entry.mnemonic);
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
    saveUserNote(entry.word, note.zh, note.en, note.example, entry.mnemonic);
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

function loadSpeechSettings() {
  const defaults = {
    voiceValue: "",
    rate: "0.95",
    style: "ielts",
    intonation: "0.75",
    favoriteReviewAutoSpeak: false,
  };
  try {
    const saved = JSON.parse(window.localStorage.getItem(SPEECH_SETTINGS_STORAGE_KEY) || "{}");
    return { ...defaults, ...(saved && typeof saved === "object" ? saved : {}) };
  } catch {
    return defaults;
  }
}

function saveSpeechSettings() {
  try {
    window.localStorage.setItem(
      SPEECH_SETTINGS_STORAGE_KEY,
      JSON.stringify({
        voiceValue: voiceSelect.value,
        rate: rateControl.value,
        style: speechStyle.value,
        intonation: intonationControl.value,
        favoriteReviewAutoSpeak: favoriteReviewAutoSpeak.checked,
      }),
    );
  } catch {}
}

function applySpeechSettings() {
  const settings = loadSpeechSettings();
  rateControl.value = String(Math.max(0.65, Math.min(1.1, Number(settings.rate) || 0.95)));
  speechStyle.value = ["ielts", "clear", "original"].includes(settings.style) ? settings.style : "ielts";
  intonationControl.value = String(Math.max(0.25, Math.min(1, Number(settings.intonation) || 0.75)));
  favoriteReviewAutoSpeak.checked = Boolean(settings.favoriteReviewAutoSpeak);
  return settings;
}

function preferredVoiceScore(voice) {
  const name = `${voice.name} ${voice.lang} ${voice.source || ""}`.toLocaleLowerCase("en-GB");
  let score = 0;
  if (voice.lang.toLocaleLowerCase("en-GB").startsWith("en-gb")) score += 100;
  if (name.includes("natural")) score += 58;
  if (name.includes("neural")) score += 48;
  if (name.includes("online")) score += 30;
  if (voice.localService === false) score += 24;
  if (name.includes("google uk")) score += 28;
  if (name.includes("google")) score += 16;
  if (name.includes("microsoft")) score += 12;
  if (name.includes("sonia") || name.includes("libby")) score += 18;
  if (name.includes("ryan")) score += 16;
  if (name.includes("george")) score += 8;
  if (name.includes("hazel") || name.includes("zira") || name.includes("desktop")) score -= 18;
  if (voice.source === "server") score -= 12;
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
    localService: voice.localService,
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
    const quality = preferredVoiceScore(voice) >= 145 ? "自然" : "基础";
    option.textContent = `${voice.name} · ${quality}英式`;
    voiceSelect.append(option);
  });

  const savedVoice = loadSpeechSettings().voiceValue;
  if (savedVoice && [...voiceSelect.options].some((option) => option.value === savedVoice)) {
    voiceSelect.value = savedVoice;
  }

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
        localService: voice.localService,
        value: voiceSelect.value,
        nativeVoice: voice,
      }
    : null;
}

function getPreferredBrowserVoice() {
  const voice = state.voices.filter(isBritishVoice).sort((a, b) => preferredVoiceScore(b) - preferredVoiceScore(a))[0];
  return voice
    ? {
        name: voice.name,
        lang: voice.lang,
        source: "browser",
        localService: voice.localService,
        value: `browser:${voice.name}`,
        nativeVoice: voice,
      }
    : null;
}

async function resolveSpeechVoice() {
  let voice = getSelectedVoice();
  if (voice) return voice;
  await loadVoices();
  voice = getSelectedVoice();
  return voice || getPreferredBrowserVoice();
}

function voiceSourceLabel(voice) {
  return voice.source === "server" ? "Windows" : "浏览器";
}

function updateVoiceStatus(voice) {
  if (!voice) {
    voiceStatus.textContent = "未识别英式语音";
    voiceStatus.title = "当前浏览器没有提供 en-GB 语音";
    voiceStatus.className = "voice-pill settings-voice-status warn";
    return;
  }

  const natural = preferredVoiceScore(voice) >= 145;
  const styleLabel = speechStyle.value === "clear" ? "清晰慢速" : speechStyle.value === "original" ? "原声音色" : "IELTS 语调";
  voiceStatus.textContent = natural ? `自然英式 · ${styleLabel}` : `基础英式 · ${styleLabel}`;
  voiceStatus.title = `${voice.name} (${voice.lang}, ${voiceSourceLabel(voice)})`;
  voiceStatus.className = "voice-pill settings-voice-status ready";
}

function clampSpeechValue(value, minimum, maximum) {
  return Math.max(minimum, Math.min(maximum, value));
}

function detectSpeechKind(text, requestedKind = "auto") {
  if (["word", "sentence", "passage"].includes(requestedKind)) return requestedKind;
  const cleanText = String(text || "").trim();
  const wordCount = cleanText.split(/\s+/).filter(Boolean).length;
  const sentenceCount = (cleanText.match(/[.!?]+(?:\s|$)/g) || []).length;
  if (wordCount <= 3 && !/[.!?]/.test(cleanText)) return "word";
  if (sentenceCount > 1 || cleanText.length > 180 || /\n/.test(cleanText)) return "passage";
  return "sentence";
}

function prepareSpeechText(text, kind) {
  let prepared = String(text || "")
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\s*\n+\s*/g, (match) => (/\n{2,}/.test(match) ? ". " : " "))
    .replace(/\.{2,}/g, ".")
    .trim();
  if (kind !== "word" && prepared && !/[.!?]["']?$/.test(prepared)) prepared += ".";
  return prepared;
}

function getSpeechProfile(text, options = {}) {
  const kind = detectSpeechKind(text, options.kind);
  const style = ["ielts", "clear", "original"].includes(speechStyle.value) ? speechStyle.value : "ielts";
  const baseRate = clampSpeechValue(Number(rateControl.value) || 0.95, 0.65, 1.1);
  const intonation = clampSpeechValue(Number(intonationControl.value) || 0.75, 0.25, 1);
  const kindRate = kind === "word" ? 0.9 : kind === "passage" ? 0.98 : 1;

  if (style === "original") {
    return { kind, style, rate: baseRate, pitch: 1, intonation: 0, pause: 90 };
  }
  if (style === "clear") {
    return {
      kind,
      style,
      rate: clampSpeechValue(baseRate * kindRate * 0.9, 0.6, 1.05),
      pitch: 0.99,
      intonation: intonation * 0.45,
      pause: kind === "passage" ? 230 : 140,
    };
  }
  return {
    kind,
    style,
    rate: clampSpeechValue(baseRate * kindRate, 0.62, 1.12),
    pitch: kind === "word" ? 1 : 1.01,
    intonation,
    pause: kind === "passage" ? 155 : 100,
  };
}

function splitSpeechUnits(text, profile) {
  if (profile.kind !== "passage") return [text];
  const sentences = text.match(/[^.!?]+(?:[.!?]+["']?|$)/g)?.map((item) => item.trim()).filter(Boolean) || [];
  return sentences.length ? sentences : [text];
}

function getSpeechUnitProsody(unit, index, total, profile) {
  if (profile.style === "original") return { rate: profile.rate, pitch: profile.pitch };
  const isQuestion = /\?["']?$/.test(unit);
  const isExclamation = /!["']?$/.test(unit);
  const isFinal = index === total - 1;
  const lift = isQuestion ? 0.075 : isExclamation ? 0.035 : isFinal ? -0.025 : 0.012;
  const pace = isQuestion ? 0.98 : isFinal ? 0.985 : index % 2 ? 1.008 : 1;
  return {
    rate: clampSpeechValue(profile.rate * pace, 0.6, 1.15),
    pitch: clampSpeechValue(profile.pitch + lift * profile.intonation, 0.88, 1.12),
  };
}

async function speak(text, options = {}) {
  const voice = await resolveSpeechVoice();
  if (!voice) return Promise.resolve(false);
  const profile = getSpeechProfile(text, options);
  const preparedText = prepareSpeechText(text, profile.kind);
  if (!preparedText) return Promise.resolve(false);

  if (voice.source === "server") {
    const serverSpoken = await speakWithServerVoice(preparedText, voice, profile);
    if (serverSpoken) return true;
    const browserVoice = getPreferredBrowserVoice();
    if (browserVoice) return speakWithBrowserVoice(preparedText, browserVoice, profile);
    return false;
  }

  return speakWithBrowserVoice(preparedText, voice, profile);
}

function speakBrowserUnit(text, selectedVoice, prosody) {
  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      resolve(result);
    };
    const timeoutId = window.setTimeout(
      () => finish(false),
      clampSpeechValue(text.length * 160, 4000, 30000),
    );
    utterance.lang = "en-GB";
    utterance.rate = prosody.rate;
    utterance.pitch = prosody.pitch;
    utterance.volume = 1;
    utterance.voice = selectedVoice.nativeVoice;
    utterance.onend = () => finish(true);
    utterance.onerror = () => finish(false);
    window.speechSynthesis.speak(utterance);
  });
}

async function speakWithBrowserVoice(text, selectedVoice, profile) {
  if (!("speechSynthesis" in window)) return false;
  window.speechSynthesis.cancel();
  const units = splitSpeechUnits(text, profile);
  for (let index = 0; index < units.length; index += 1) {
    const prosody = getSpeechUnitProsody(units[index], index, units.length, profile);
    const spoken = await speakBrowserUnit(units[index], selectedVoice, prosody);
    if (!spoken) return false;
    if (index < units.length - 1) await wait(profile.pause);
  }
  return true;
}

function speakWithServerVoice(text, selectedVoice, profile) {
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
        rate: String(profile.rate),
        style: profile.style,
        kind: profile.kind,
        intonation: String(profile.intonation),
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

async function previewSpeechStyle() {
  if (!getSelectedVoice() || speechPreviewButton.disabled) return;
  stopCurrentAudio();
  window.speechSynthesis?.cancel();
  speechPreviewButton.disabled = true;
  speechPreviewButton.innerHTML = '<span class="button-icon" aria-hidden="true">♪</span> 正在试听';
  await speak(
    "Good morning. Today, we'll examine how public transport has changed in British cities. Why has this shift happened? Let's look at the evidence.",
    { kind: "passage" },
  );
  speechPreviewButton.disabled = false;
  speechPreviewButton.innerHTML = '<span class="button-icon" aria-hidden="true">♪</span> 试听 IELTS 语调';
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
  if (state.speechRunId !== runId) return;

  state.isSpeaking = false;
  if (state.answered) {
    const lastResult = getLastResultForCurrent();
    renderListeningState(state.retryCurrent ? "再写一次，直到正确" : lastResult?.correct ? "正确" : "答案已显示");
    updateActionButtons();
    return;
  }

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
    return speak(current.word, { kind: "word" });
  }

  if (state.mode === "listening") {
    const wordSpoken = await speak(current.word, { kind: "word" });
    if (state.speechRunId !== runId) return wordSpoken;
    await wait(420);
    if (state.speechRunId !== runId) return wordSpoken;
    const exampleSpoken = await speak(current.example, { kind: "sentence" });
    return wordSpoken && exampleSpoken;
  }

  return speak(current.example, { kind: "sentence" });
}

async function speakCurrentWord() {
  const current = state.deck[state.currentIndex];
  if (!current || state.isSpeaking) return;

  const runId = state.speechRunId + 1;
  state.speechRunId = runId;
  state.isSpeaking = true;
  renderListeningState("正在朗读单词");
  listenButton.disabled = true;

  stopCurrentAudio();
  window.speechSynthesis?.cancel();

  await speak(current.word, { kind: "word" });
  if (state.speechRunId !== runId) return;

  state.isSpeaking = false;
  if (state.answered) {
    const lastResult = getLastResultForCurrent();
    renderListeningState(state.retryCurrent ? "再写一次，直到正确" : lastResult?.correct ? "正确" : "答案已显示");
  } else {
    renderListeningState(state.mode === "dictation" ? "请写出空格中的单词" : "请选择你听到的单词");
  }
  updateActionButtons();
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
  state.reviewSource = "";
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

function getActiveReviewLabel() {
  if (state.reviewSource === "favorite") return "收藏本复习";
  if (state.isReviewingWrong || state.reviewSource === "wrong") return "错词回顾";
  return "";
}

function renderRound() {
  const current = state.deck[state.currentIndex];
  state.answered = false;
  state.heard = false;
  const reviewLabel = getActiveReviewLabel();

  quizTitle.textContent = `${getModeLabel()}${reviewLabel} 第 ${
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
  revealAnswerButton.disabled = disabled || state.mode !== "dictation";
}

function updateActionButtons() {
  const hasCurrent = Boolean(state.deck[state.currentIndex]);
  const hasAnswer = Boolean(normaliseWord(answerInput.value));
  listenButton.disabled = !hasCurrent || state.isSpeaking;
  checkButton.disabled =
    state.mode !== "dictation" || !hasCurrent || state.isSpeaking || state.answered || !hasAnswer;
  revealAnswerButton.disabled = state.mode !== "dictation" || !hasCurrent || state.isSpeaking || state.answered;
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

function revealAnswer() {
  if (state.answered || state.mode !== "dictation") return;

  const current = state.deck[state.currentIndex];
  if (!current) return;

  const typedAnswer = normaliseWord(answerInput.value);
  answerInput.value = current.word;
  blankSentence.innerHTML = renderRevealedSentence(current.example, current.word);
  answerInput.classList.remove("correct");
  answerInput.classList.add("incorrect");

  completeAnswer({
    current,
    isCorrect: false,
    response: typedAnswer || "显示答案",
    mode: "dictation",
    revealed: true,
  });

  setAnswerDisabled(true);
}

function retryCurrentWord() {
  if (!state.answered || !state.deck[state.currentIndex]) return;

  state.retryCurrent = false;
  renderRound();
  if (autoSpeak.checked) {
    speakCurrentRound(true);
  } else {
    renderListeningState("点击朗读重新练这个单词");
  }
  saveTraining(false);
}

function completeAnswer({ current, isCorrect, response, mode, revealed = false }) {
  state.answered = true;
  state.retryCurrent = mode === "dictation" && !isCorrect && !revealed;
  stopRoundSpeech();
  renderListeningState(revealed ? "已显示答案" : state.retryCurrent ? "再写一次，直到正确" : isCorrect ? "正确" : "答案已显示");

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
    revealed,
  });

  updateFavoriteBook(current, mode, isCorrect, response);
  updateCorrectBook(current, mode, isCorrect, response);
  updateScoreBox();
  renderAnswerReview(current, response, isCorrect, mode, revealed);
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

function renderAnswerReview(current, response, isCorrect, mode, revealed = false) {
  const note = getWordNote(current);
  const word = escapeHtml(current.word);
  const rawKey = normaliseKey(current.word);
  const correctKey = escapeHtml(rawKey);
  const isFavorited = Boolean(state.favoriteBook[mode]?.[rawKey]);
  const favoriteTitle = isFavorited ? "移出收藏本" : "收藏到错题本";
  const retryShortcutLabel = shortcutLabels[state.shortcutSettings.retry] || "F";
  const retryButton = revealed
    ? `<button class="correct-detail-button retry-current-button" type="button" data-retry-current-word title="再练一次这个词（${retryShortcutLabel}）" aria-label="再练一次 ${word}">再练 ${retryShortcutLabel}</button>`
    : "";
  const reviewActions = `
    <div class="correct-item-actions review-word-actions" aria-label="${word} 操作">
      ${retryButton}
      <button class="correct-detail-button" type="button" data-speak-review-word title="朗读单词" aria-label="朗读 ${word}">读单词</button>
      <button class="correct-detail-button" type="button" data-open-word-detail data-detail-source="current" data-detail-mode="${mode}" data-detail-key="${correctKey}" title="查看详细" aria-label="查看 ${word} 的详细信息">详情</button>
      <button class="correct-icon-button favorite-toggle-button ${
        isFavorited ? "is-favorite" : ""
      }" type="button" data-toggle-review-favorite="${correctKey}" title="${favoriteTitle}" aria-label="${favoriteTitle}：${word}" aria-pressed="${String(
        isFavorited,
      )}">${isFavorited ? "★" : "☆"}</button>
      ${
        isCorrect
          ? `<button class="correct-icon-button correct-remove-button" type="button" data-remove-review-correct="${correctKey}" title="移除答对记录" aria-label="移除 ${word} 的答对记录">×</button>`
          : ""
      }
    </div>
  `;
  const responseText =
    mode === "dictation"
      ? revealed
        ? `你选择显示答案，正确单词是 ${escapeHtml(current.word)}。`
        : `你填写的是 ${escapeHtml(response)}。`
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
        ${reviewActions}
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

function saveUserNote(word, zh, en = "", example = "", mnemonic = "") {
  const key = normaliseKey(word);
  const meaningZh = normaliseWord(zh);
  const meaningEn = normaliseWord(en);
  const practiceExample = normaliseWord(example);
  const existingExample = normaliseWord(state.userNotes[key]?.example || findLocalWordNote(word)?.example || "");
  const existingMnemonic = normaliseMnemonic(state.userNotes[key]?.mnemonic || findLocalWordNote(word)?.mnemonic || "");
  const suppliedMnemonic = normaliseMnemonic(mnemonic);
  if (!key || !meaningZh) return false;

  state.userNotes[key] = {
    zh: meaningZh,
    en: meaningEn || "User-supplied Chinese meaning.",
    example: isSpecificPracticeExample(practiceExample, word) ? practiceExample : existingExample,
    mnemonic: suppliedMnemonic || existingMnemonic,
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
  const reviewLabel = getActiveReviewLabel();

  quizTitle.textContent = `${getModeLabel()}${reviewLabel}完成`;
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

function startReviewDeck(entries, mode, emptyMessage = "没有可复习的错词", source = "wrong") {
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
  state.isReviewingWrong = source === "wrong";
  state.reviewSource = source;
  scoreValue.textContent = "0";
  updateScoreBox();
  setPrimarySurface("quiz", true);
  renderRound();
  if (autoSpeak.checked) {
    speakCurrentRound(true);
  } else {
    renderListeningState(source === "favorite" ? "点击朗读开始收藏本复习" : "点击朗读开始错词回顾");
  }
  saveTraining(false);
}

function startWrongReview() {
  startReviewDeck(getWrongReviewEntries(), state.mode, "本轮没有答错过的单词", "wrong");
}

function favoriteBookItemToEntry(item) {
  const note = getWordNote({ word: item.word, meaningZh: item.meaningZh, meaningEn: item.meaningEn });
  return {
    word: item.word,
    example: item.example || note.example || "",
    exampleSource: "favorite",
    meaningZh: item.meaningZh || note.zh || "",
    meaningEn: item.meaningEn || note.en || "",
    mnemonic: item.mnemonic || note.mnemonic || "",
    apiError: "",
  };
}

function getFavoritePracticeEntries(items = getFavoriteReviewItems()) {
  const entries = items.map(favoriteBookItemToEntry).filter((entry) => entry.word);
  const readyEntries = entries.filter(hasCompletePracticeData);
  return {
    entries: readyEntries,
    skippedCount: entries.length - readyEntries.length,
  };
}

async function startFavoriteBookPractice(items = getFavoriteReviewItems(state.bookMode), mode = state.bookMode) {
  const { entries, skippedCount } = getFavoritePracticeEntries(items);
  if (!entries.length) {
    saveStatus.textContent = `${getModeLabel(mode)}收藏本暂无可练习单词，请先补全中文释义和例句。`;
    reviewPanel.innerHTML = `<strong>${escapeHtml(getModeLabel(mode))}收藏本暂无可练习单词。</strong>`;
    return;
  }

  await loadVoices();
  if (!getSelectedVoice()) {
    setPrimarySurface("quiz", true);
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

  if (!favoriteReviewScreen.hidden) closeFavoriteBookReview(false);
  startReviewDeck(entries, mode, `${getModeLabel(mode)}收藏本暂无可练习单词`, "favorite");
  saveStatus.textContent = `正在用${getModeLabel(mode)}复习 ${entries.length} 个收藏词${
    skippedCount ? `，已跳过 ${skippedCount} 个资料不完整的词` : ""
  }。`;
}

function getFavoriteReviewItems(mode = state.bookMode) {
  return Object.values(state.favoriteBook[mode] || {})
    .filter((item) => item.word)
    .sort((a, b) => (b.missedAt || 0) - (a.missedAt || 0))
    .map((item) => {
      const note = getWordNote(item);
      return {
        ...item,
        meaningZh: item.meaningZh || note.zh || "",
        meaningEn: item.meaningEn || note.en || "",
        mnemonic: item.mnemonic || note.mnemonic || "",
        example: item.example || note.example || "",
      };
    });
}

function startFavoriteBookReview() {
  const entries = getFavoriteReviewItems();
  if (!entries.length) return;

  stopRoundSpeech();
  state.favoriteReviewItems = entries;
  state.favoriteReviewMode = state.bookMode;
  state.favoriteReviewQuery = "";
  state.favoriteReviewRevealedWords = new Set();
  favoriteListReviewSearch.value = "";
  favoriteListReviewSort.value = state.favoriteReviewSort;
  favoriteListLayoutButtons.forEach((button) => {
    const active = button.dataset.favoriteListLayout === state.favoriteReviewLayout;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  favoriteReviewScreen.hidden = false;
  document.body.classList.add("favorite-review-open");
  favoriteReviewTitle.textContent = "收藏本复习";
  favoriteReviewMode.textContent = `${getModeLabel(state.favoriteReviewMode)} · 收藏本复习`;
  renderFavoriteReviewList();
  favoriteReviewClose.focus();
}

function closeFavoriteBookReview(restoreFocus = true) {
  if (favoriteReviewScreen.hidden) return;
  favoriteReviewScreen.hidden = true;
  document.body.classList.remove("favorite-review-open");
  favoriteListReviewStatus.textContent = "";
  state.favoriteReviewItems = [];
  state.favoriteReviewRevealedWords = new Set();
  stopRoundSpeech();
  if (!restoreFocus) return;
  if (bookListReviewButton.disabled) {
    bookSearchInput.focus();
  } else {
    bookListReviewButton.focus();
  }
}

function getSortedFavoriteReviewItems() {
  const query = normaliseKey(state.favoriteReviewQuery || "");
  const items = state.favoriteReviewItems.filter((item) => {
    if (!query) return true;
    return [item.word, item.meaningZh, item.meaningEn, item.example, item.response]
      .map((value) => normaliseKey(String(value || "")))
      .some((value) => value.includes(query));
  });

  return items.sort((a, b) => {
    if (state.favoriteReviewSort === "oldest") return (a.missedAt || 0) - (b.missedAt || 0);
    if (state.favoriteReviewSort === "az") return a.word.localeCompare(b.word, "en", { sensitivity: "base" });
    if (state.favoriteReviewSort === "za") return b.word.localeCompare(a.word, "en", { sensitivity: "base" });
    return (b.missedAt || 0) - (a.missedAt || 0);
  });
}

function setFavoriteReviewLayout(layout) {
  state.favoriteReviewLayout = layout === "grid" ? "grid" : "list";
  favoriteListLayoutButtons.forEach((button) => {
    const active = button.dataset.favoriteListLayout === state.favoriteReviewLayout;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderFavoriteReviewList();
}

function toggleFavoriteReviewWord(word) {
  const key = normaliseKey(word);
  if (!key) return;
  if (state.favoriteReviewRevealedWords.has(key)) {
    state.favoriteReviewRevealedWords.delete(key);
    renderFavoriteReviewList();
    return;
  }
  state.favoriteReviewRevealedWords.add(key);
  renderFavoriteReviewList();

  if (!favoriteReviewAutoSpeak.checked) return;
  const speakButton = [...favoriteListReviewRows.querySelectorAll("[data-favorite-list-speak]")].find(
    (button) => normaliseKey(decodeURIComponent(button.dataset.favoriteListSpeak)) === key,
  );
  if (speakButton) void speakFavoriteListWord(word, speakButton);
}

function renderFavoriteReviewList() {
  const items = getSortedFavoriteReviewItems();
  const practiceEntries = getFavoritePracticeEntries(items);
  favoriteReviewProgress.textContent = `${items.length} 个词`;
  favoriteReviewProgressBar.style.width = items.length ? "100%" : "0%";
  favoriteListReviewCount.textContent = `${items.length} 个单词`;
  favoriteListReviewStatus.textContent = "";
  favoriteModePracticeButton.disabled = practiceEntries.entries.length === 0;
  favoriteModePracticeButton.title = practiceEntries.entries.length
    ? `按${getModeLabel(state.favoriteReviewMode)}练习当前 ${practiceEntries.entries.length} 个收藏词`
    : "当前筛选结果没有可练习单词";
  favoriteModePracticeButton.setAttribute("aria-label", favoriteModePracticeButton.title);
  favoriteModePracticeButton.innerHTML = `<span class="button-icon" aria-hidden="true">▶</span>${getModeLabel(
    state.favoriteReviewMode,
  )}做题${practiceEntries.entries.length ? ` ${practiceEntries.entries.length}` : ""}`;
  favoriteListReviewRows.classList.toggle("layout-grid", state.favoriteReviewLayout === "grid");
  favoriteListReviewRows.classList.toggle("layout-list", state.favoriteReviewLayout !== "grid");

  if (!items.length) {
    favoriteListReviewRows.innerHTML = `<p class="favorite-list-review-empty">没有找到与“${escapeHtml(
      state.favoriteReviewQuery,
    )}”相关的收藏词。</p>`;
    return;
  }

  favoriteListReviewRows.innerHTML = items
    .map(
      (item, index) => {
        const wordKey = normaliseKey(item.word);
        const encodedWord = encodeURIComponent(item.word);
        const revealed = state.favoriteReviewRevealedWords.has(wordKey);
        return `
        <article class="favorite-list-review-row${revealed ? " is-revealed" : ""}">
          <span class="favorite-list-review-index">${String(index + 1).padStart(2, "0")}</span>
          <div class="favorite-list-review-word">
            <strong>${escapeHtml(item.word)}</strong>
            <small>收藏于 ${formatBookDate(item.missedAt)}</small>
          </div>
          <button
            class="favorite-list-review-detail"
            type="button"
            data-favorite-list-reveal="${encodedWord}"
            aria-expanded="${revealed}"
            aria-label="${revealed ? "隐藏" : "显示"} ${escapeHtml(item.word)} 的释义与例句"
          >
            ${
              revealed
                ? `<span class="favorite-list-review-meaning">${escapeHtml(
                    item.meaningZh || "暂无中文释义",
                  )}</span><span class="favorite-list-review-example">${
                    item.example ? renderRevealedSentence(item.example, item.word) : "暂无例句"
                  }</span>`
                : `<span class="favorite-list-review-concealed">点击显示释义与例句</span>`
            }
          </button>
          <div class="favorite-list-review-actions">
            <button
              class="favorite-list-speak-button"
              type="button"
              data-favorite-list-speak="${encodedWord}"
              aria-label="朗读 ${escapeHtml(item.word)}"
              title="朗读单词"
            ><i data-lucide="volume-2" aria-hidden="true"></i><span class="icon-fallback" aria-hidden="true">♪</span></button>
            <button
              class="favorite-list-remove-button"
              type="button"
              data-favorite-list-remove="${encodedWord}"
              aria-label="从收藏本移除 ${escapeHtml(item.word)}"
              title="从收藏本移除"
            ><i data-lucide="trash-2" aria-hidden="true"></i><span class="icon-fallback" aria-hidden="true">×</span></button>
          </div>
        </article>
      `;
      },
    )
    .join("");

  if (window.lucide?.createIcons) window.lucide.createIcons();
}

async function speakFavoriteListWord(word, button) {
  if (!word || button.disabled) return;
  stopRoundSpeech();
  button.disabled = true;
  favoriteListReviewStatus.textContent = `正在朗读 ${word}`;
  const spoken = await speak(word, { kind: "word" });
  if (favoriteReviewScreen.hidden) return;
  button.disabled = false;
  favoriteListReviewStatus.textContent = spoken ? `已朗读 ${word}` : "朗读失败，请检查语音设置。";
}

function removeFavoriteReviewWord(word) {
  const key = normaliseKey(word);
  if (!key || !state.favoriteBook[state.favoriteReviewMode]?.[key]) return;

  stopRoundSpeech();
  removeFavoriteBookItem(state.favoriteReviewMode, key);
  state.favoriteReviewItems = state.favoriteReviewItems.filter((item) => normaliseKey(item.word) !== key);

  if (!state.favoriteReviewItems.length) {
    closeFavoriteBookReview();
    return;
  }
  renderFavoriteReviewList();
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
              <button class="correct-detail-button" type="button" data-open-word-detail data-detail-source="correct" data-detail-mode="${state.mode}" data-detail-key="${key}" title="查看详细" aria-label="查看 ${word} 的详细信息">详情</button>
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

const writingKnownMisspellings = {
  admitedly: "admittedly",
  boradcast: "broadcast",
  brodcast: "broadcast",
  complusory: "compulsory",
  culturual: "cultural",
  daliy: "daily",
  dicuss: "discuss",
  disscuss: "discuss",
  eassy: "essay",
  enterprize: "enterprise",
  recieve: "receive",
  staduim: "stadium",
  happend: "happen / happened",
  happended: "happened",
  negetive: "negative",
  nowdays: "nowadays",
  nowaday: "nowadays",
  occupasion: "occupation",
  ocupation: "occupation",
  perfomance: "performance",
  performence: "performance",
  phenomemon: "phenomenon",
  phenomenonon: "phenomenon",
  potencial: "potential",
  proffesional: "professional",
  profesional: "professional",
  footable: "football",
  perfor: "perform",
  sponsers: "sponsors",
  athelete: "athlete",
  atheletes: "athletes",
  advertisment: "advertisement",
  oppotunity: "opportunity",
  oppotunities: "opportunities",
  intrest: "interest",
  goverment: "government",
  enviroment: "environment",
  benifit: "benefit",
  benifits: "benefits",
  seperate: "separate",
  sufficent: "sufficient",
  sufficiant: "sufficient",
  developping: "developing",
  tecnology: "technology",
  knowlege: "knowledge",
  competitve: "competitive",
};

const writingDangerRules = [
  {
    pattern: /\bwoman\s+have\b/i,
    wrong: "woman have",
    correction: "women have",
    type: "高频语法",
    safer: "women have equal opportunities",
    note: "表达复数女性时用 women，后面接 have。",
  },
  {
    pattern: /\bman\s+have\b/i,
    wrong: "man have",
    correction: "men have",
    type: "高频语法",
    safer: "men and women have equal rights",
    note: "表达复数男性时用 men，后面接 have。",
  },
  {
    pattern: /\bwomen\s+has\b/i,
    wrong: "women has",
    correction: "women have",
    type: "主谓一致",
    safer: "women have more opportunities",
    note: "women 是复数主语，动词用 have。",
  },
  {
    pattern: /\bmen\s+has\b/i,
    wrong: "men has",
    correction: "men have",
    type: "主谓一致",
    safer: "men have more opportunities",
    note: "men 是复数主语，动词用 have。",
  },
  {
    pattern: /\bwoman's sports\b/i,
    wrong: "woman's sports",
    correction: "women's sports",
    type: "高频语法",
    safer: "women's sports",
    note: "表示女子体育时用复数所有格 women's sports。",
  },
  {
    pattern: /\bman's sports\b/i,
    wrong: "man's sports",
    correction: "men's sports",
    type: "高频语法",
    safer: "men's sports",
    note: "表示男子体育时用复数所有格 men's sports。",
  },
  {
    pattern: /\bentertaining favors\b/i,
    wrong: "entertaining favors",
    correction: "viewers' preferences",
    type: "危险表达",
    safer: "viewers' preferences",
    note: "这里要表达观众偏好，不要按中文现场造词。",
  },
  {
    pattern: /\bbody\s+countfront\b/i,
    wrong: "body countfront",
    correction: "physical contact",
    type: "危险表达",
    safer: "physical contact",
    note: "身体对抗更稳定的表达是 physical contact。",
  },
  {
    pattern: /\bshow times\b/i,
    wrong: "show times",
    correction: "airtime",
    type: "危险表达",
    safer: "airtime",
    note: "节目播放时间在写作里可直接用 airtime。",
  },
  {
    pattern: /\bin social\b/i,
    wrong: "in social",
    correction: "in society",
    type: "危险表达",
    safer: "in society / at the social level",
    note: "social 通常作形容词，不能直接说 in social。",
  },
  {
    pattern: /\bfirm believe\b/i,
    wrong: "firm believe",
    correction: "firmly believe",
    type: "词性错误",
    safer: "firmly believe",
    note: "修饰动词 believe 需要副词 firmly。",
  },
];

function getWritingMistakes() {
  return Object.values(state.writingMistakeBook || {}).sort(
    (a, b) => (b.lastPracticedAt || 0) - (a.lastPracticedAt || 0),
  );
}

function legacyNormaliseWritingText(value) {
  return String(value || "")
    .replace(/[’‘`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[.,!?;:()[\]{}]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("en-GB");
}

function legacyGetWritingTokens(value) {
  const normalised = normaliseWritingText(value);
  return normalised ? normalised.split(" ").filter(Boolean) : [];
}

function countTokens(tokens) {
  return tokens.reduce((map, token) => {
    map[token] = (map[token] || 0) + 1;
    return map;
  }, {});
}

function getTokenDifference(sourceTokens, compareTokens) {
  const compareCounts = countTokens(compareTokens);
  return sourceTokens.filter((token) => {
    const remaining = compareCounts[token] || 0;
    if (remaining > 0) {
      compareCounts[token] -= 1;
      return false;
    }
    return true;
  });
}

function hasSameTokenCounts(a, b) {
  if (a.length !== b.length) return false;
  const aCounts = countTokens(a);
  const bCounts = countTokens(b);
  return Object.keys(aCounts).every((token) => aCounts[token] === bCounts[token]);
}

function longestCommonSubsequenceLength(a, b) {
  const rows = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      rows[i][j] =
        a[i - 1] === b[j - 1] ? rows[i - 1][j - 1] + 1 : Math.max(rows[i - 1][j], rows[i][j - 1]);
    }
  }
  return rows[a.length][b.length];
}

function dedupeWritingErrors(errors) {
  const seen = new Set();
  return errors.filter((error) => {
    const key = `${error.type}:${error.wrong}:${error.correction}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function findLikelySpellingErrors(inputTokens, targetTokens) {
  const targetSet = new Set(targetTokens);
  const extraTokens = getTokenDifference(inputTokens, targetTokens);

  return extraTokens
    .map((token) => {
      const knownCorrection = writingKnownMisspellings[token];
      if (knownCorrection) {
        return {
          type: "拼写错误",
          wrong: token,
          correction: knownCorrection,
          safer: knownCorrection,
          note: targetSet.has(knownCorrection)
            ? "这个拼写在目标句中有明确对应词。"
            : "这是写作中常见的拼写错误。",
        };
      }

      const closest = targetTokens
        .map((target) => ({
          target,
          distance: levenshteinDistance(token, target),
        }))
        .sort((a, b) => a.distance - b.distance)[0];

      if (
        closest &&
        closest.distance > 0 &&
        closest.distance <= 2 &&
        token[0] === closest.target[0] &&
        Math.max(token.length, closest.target.length) >= 5
      ) {
        return {
          type: "拼写错误",
          wrong: token,
          correction: closest.target,
          safer: closest.target,
          note: "这个词和目标词很接近，优先按拼写错误处理。",
        };
      }

      return null;
    })
    .filter(Boolean);
}

function legacyDetectWritingErrors(input, pattern) {
  const target = pattern.targetSentence;
  const inputNormalised = normaliseWritingText(input);
  const targetNormalised = normaliseWritingText(target);
  const inputTokens = getWritingTokens(input);
  const targetTokens = getWritingTokens(target);
  const errors = [];
  const correct = Boolean(inputNormalised) && inputNormalised === targetNormalised;

  writingDangerRules.forEach((rule) => {
    if (rule.pattern.test(input)) errors.push({ ...rule });
  });

  const modalMatch = input.match(
    /\b(can|could|may|might|must|should|will|would)\s+([a-z]+(?:s|ed))\b/i,
  );
  if (modalMatch) {
    errors.push({
      type: "动词形式",
      wrong: modalMatch[0],
      correction: `${modalMatch[1].toLowerCase()} + 动词原形`,
      safer: "modal verb + base verb",
      note: "情态动词后面不要接第三人称单数或过去式。",
    });
  }

  errors.push(...findLikelySpellingErrors(inputTokens, targetTokens));

  if (!correct) {
    const missingTokens = [...new Set(getTokenDifference(targetTokens, inputTokens))];
    const extraTokens = [...new Set(getTokenDifference(inputTokens, targetTokens))];

    if (missingTokens.length) {
      errors.push({
        type: "漏词",
        wrong: "未输入",
        correction: missingTokens.slice(0, 8).join(", "),
        safer: pattern.safeChunks?.[0] || target,
        note: "目标句中的这些词没有完整出现。",
      });
    }

    const spellingWrongSet = new Set(errors.filter((error) => error.type === "拼写错误").map((error) => error.wrong));
    const unsafeExtraTokens = extraTokens.filter((token) => !spellingWrongSet.has(token));
    if (unsafeExtraTokens.length) {
      errors.push({
        type: "多词",
        wrong: unsafeExtraTokens.slice(0, 8).join(", "),
        correction: "删掉或替换为目标句表达",
        safer: pattern.safeChunks?.[0] || target,
        note: "这些词不在稳定目标句里，可能是现场造句带来的不安全表达。",
      });
    }

    if (!missingTokens.length && !extraTokens.length && hasSameTokenCounts(inputTokens, targetTokens)) {
      errors.push({
        type: "词序错误",
        wrong: input,
        correction: target,
        safer: target,
        note: "词都出现了，但顺序和稳定句不一致。",
      });
    }
  }

  if (!correct && !errors.length) {
    errors.push({
      type: "表达不稳定",
      wrong: input || "空白",
      correction: target,
      safer: target,
      note: "请先按目标句完整打出，不在第一版里自由改写。",
    });
  }

  const lcs = longestCommonSubsequenceLength(inputTokens, targetTokens);
  const accuracy = targetTokens.length ? Math.round((lcs / targetTokens.length) * 100) : 0;

  return {
    correct,
    errors: correct ? [] : dedupeWritingErrors(errors),
    accuracy: correct ? 100 : Math.max(0, Math.min(99, accuracy)),
    inputTokens,
    targetTokens,
  };
}

function legacyGetWritingErrorBucket(error) {
  if (error.type === "拼写错误") return "spellingErrors";
  if (error.type === "危险表达" || error.type === "表达不稳定" || error.type === "多词") return "phraseErrors";
  return "grammarErrors";
}

function legacyUpdateWritingStats(result, elapsedSeconds) {
  state.writingStats = {
    ...createDefaultWritingStats(),
    ...state.writingStats,
    repeatedErrors: state.writingStats?.repeatedErrors || {},
  };
  state.writingStats.attempts += 1;
  state.writingStats.correct += result.correct ? 1 : 0;
  state.writingStats.totalSeconds += elapsedSeconds;
  state.writingStats.totalWords += result.targetTokens.length;
  state.writingStats.lastPracticedAt = Date.now();

  result.errors.forEach((error) => {
    const bucket = getWritingErrorBucket(error);
    state.writingStats[bucket] += 1;
    const key = `${error.type}: ${error.wrong} -> ${error.correction}`;
    state.writingStats.repeatedErrors[key] = (state.writingStats.repeatedErrors[key] || 0) + 1;
  });
}

function legacyRenderWritingStats() {
  const stats = { ...createDefaultWritingStats(), ...(state.writingStats || {}) };
  const accuracy = stats.attempts ? Math.round((stats.correct / stats.attempts) * 100) : 0;
  const minutes = stats.totalSeconds / 60;
  const speed = minutes > 0 ? Math.round(stats.totalWords / minutes) : 0;
  writingAccuracy.textContent = `${accuracy}%`;
  writingSpeed.textContent = String(speed);
}

function legacyUpsertWritingMistake(pattern, input, result) {
  const existing = state.writingMistakeBook[pattern.id] || {};
  state.writingMistakeBook[pattern.id] = {
    id: pattern.id,
    topic: pattern.topic,
    role: pattern.role,
    zhPrompt: pattern.zhPrompt,
    targetSentence: pattern.targetSentence,
    safeChunks: pattern.safeChunks || [],
    lastInput: input,
    errors: result.errors.map((error) => ({
      type: error.type,
      wrong: error.wrong,
      correction: error.correction,
      note: error.note,
      safer: error.safer,
    })),
    repeatCount: (existing.repeatCount || 0) + 1,
    attempts: (existing.attempts || 0) + 1,
    streak: 0,
    lastPracticedAt: Date.now(),
  };
}

function legacyRecordWritingReviewCorrect(pattern) {
  const mistake = state.writingMistakeBook[pattern.id];
  if (!mistake) return false;
  mistake.streak = (mistake.streak || 0) + 1;
  mistake.attempts = (mistake.attempts || 0) + 1;
  mistake.lastPracticedAt = Date.now();

  if (mistake.streak >= 2) {
    delete state.writingMistakeBook[pattern.id];
    return true;
  }
  return false;
}

function legacyRenderWritingMistakeBook() {
  const mistakes = getWritingMistakes();
  writingMistakeCount.textContent = String(mistakes.length);
  writingReviewButton.disabled = mistakes.length === 0;

  if (!mistakes.length) {
    writingMistakeList.innerHTML = `<p class="empty-state">暂无写作错句。普通训练答错后会自动收进这里。</p>`;
    return;
  }

  writingMistakeList.innerHTML = mistakes
    .map((item) => {
      const errorSummary = (item.errors || [])
        .slice(0, 3)
        .map((error) => `${escapeHtml(error.type)}：${escapeHtml(error.wrong)} → ${escapeHtml(error.correction)}`)
        .join("<br>");

      return `
        <article class="writing-mistake-item">
          <div class="writing-mistake-meta">
            <strong>${escapeHtml(item.role || "Body sentence")}</strong>
            <span>${escapeHtml(item.topic || "")}</span>
          </div>
          <p>${escapeHtml(item.zhPrompt || "")}</p>
          <p class="writing-target">${escapeHtml(item.targetSentence || "")}</p>
          <p class="writing-last-input">上次输入：${escapeHtml(item.lastInput || "未记录")}</p>
          <p class="writing-error-summary">${errorSummary || "需要再次完整打出目标句。"}</p>
          <div class="writing-mistake-actions">
            <span>重复 ${item.repeatCount || 1} · 连对 ${item.streak || 0}/2</span>
            <button class="secondary-button" type="button" data-writing-review-one="${escapeHtml(item.id)}">练这一句</button>
            <button class="remove-button" type="button" data-writing-remove-mistake="${escapeHtml(item.id)}">移除</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function legacySetWritingEmpty(message) {
  state.writingCurrent = null;
  state.writingStartedAt = 0;
  state.writingChecked = false;
  writingTopic.textContent = "Topic";
  writingRole.textContent = "Body sentence";
  writingPrompt.textContent = message;
  writingChunks.innerHTML = "";
  writingInput.value = "";
  writingInput.disabled = true;
  writingCheckButton.disabled = true;
  writingNextButton.disabled = true;
  writingErrorCount.textContent = "0";
  writingResult.className = "writing-result";
  writingResult.innerHTML = "";
}

function legacyRenderWritingCard() {
  const current = state.writingDeck[state.writingIndex];
  if (!current) {
    setWritingEmpty(state.writingReviewing ? "写作错句本为空，先做普通训练。" : "点击普通训练，开始练稳定句型。");
    return;
  }

  state.writingCurrent = current;
  state.writingStartedAt = performance.now();
  state.writingChecked = false;
  writingTopic.textContent = current.topic || "IELTS Writing";
  writingRole.textContent = current.role || "Body sentence";
  writingPrompt.textContent = current.zhPrompt || "";
  writingChunks.innerHTML = (current.safeChunks || [])
    .map((chunk) => `<span>${escapeHtml(chunk)}</span>`)
    .join("");
  writingInput.value = "";
  writingInput.disabled = false;
  writingCheckButton.disabled = false;
  writingNextButton.disabled = false;
  writingErrorCount.textContent = "0";
  writingResult.className = "writing-result";
  writingResult.innerHTML = "";
  writingInput.focus();
}

function legacyStartWritingPractice(review = false, singleId = "") {
  state.writingReviewing = review;
  state.writingDeck = review
    ? singleId
      ? getWritingMistakes().filter((item) => item.id === singleId)
      : getWritingMistakes()
    : shuffle(writingPatterns);
  state.writingIndex = 0;

  if (!state.writingDeck.length) {
    setWritingEmpty(review ? "写作错句本为空，先做普通训练。" : "没有可用写作句型。");
    writingResult.innerHTML = review ? `<p class="empty-state">暂无需要复习的错句。</p>` : "";
    return;
  }

  renderWritingCard();
}

function legacyRenderWritingResult(pattern, input, result, elapsedSeconds, removedFromMistakes) {
  const speed = elapsedSeconds > 0 ? Math.round((result.targetTokens.length / elapsedSeconds) * 60) : 0;
  writingErrorCount.textContent = String(result.errors.length);
  writingResult.className = `writing-result ${result.correct ? "is-correct" : "is-wrong"}`;

  if (result.correct) {
    writingResult.innerHTML = `
      <strong>正确</strong>
      <p>用时 ${elapsedSeconds.toFixed(1)} 秒 · 本句速度 ${speed} 词/分钟</p>
      <p>${removedFromMistakes ? "已连续答对 2 次，已从写作错句本移除。" : "这句没有进入写作错句本。"}</p>
    `;
    return;
  }

  const errorList = result.errors
    .map(
      (error) => `
        <li>
          <strong>${escapeHtml(error.type)}</strong>
          <span>${escapeHtml(error.wrong)} → ${escapeHtml(error.correction)}</span>
          <small>${escapeHtml(error.note || "按目标句重打一次。")}</small>
          <em>下次替换词块：${escapeHtml(error.safer || pattern.safeChunks?.[0] || pattern.targetSentence)}</em>
        </li>
      `,
    )
    .join("");

  writingResult.innerHTML = `
    <strong>需要重写</strong>
    <p>匹配度 ${result.accuracy}% · 用时 ${elapsedSeconds.toFixed(1)} 秒 · 本句速度 ${speed} 词/分钟</p>
    <p class="writing-target">目标句：${escapeHtml(pattern.targetSentence)}</p>
    <p class="writing-last-input">你的输入：${escapeHtml(input || "空白")}</p>
    <ul class="writing-error-list">${errorList}</ul>
  `;
}

function legacyCheckWritingAnswer() {
  const pattern = state.writingCurrent;
  if (!pattern || state.writingChecked) return;

  const input = normaliseWord(writingInput.value || "");
  const elapsedSeconds = Math.max(1, (performance.now() - state.writingStartedAt) / 1000);
  const result = detectWritingErrors(input, pattern);
  state.writingChecked = true;
  writingCheckButton.disabled = true;

  updateWritingStats(result, elapsedSeconds);
  let removedFromMistakes = false;

  if (result.correct) {
    if (state.writingReviewing) {
      removedFromMistakes = recordWritingReviewCorrect(pattern);
      if (removedFromMistakes) {
        state.writingDeck = state.writingDeck.filter((item) => item.id !== pattern.id);
        if (state.writingIndex >= state.writingDeck.length) state.writingIndex = 0;
      }
    }
  } else {
    upsertWritingMistake(pattern, input, result);
  }

  renderWritingResult(pattern, input, result, elapsedSeconds, removedFromMistakes);
  renderWritingStats();
  renderWritingMistakeBook();
  saveWritingStats();
  saveWritingMistakeBook();
  saveWritingFavoriteBook();
  void saveTraining(false);
}

function legacyNextWritingPrompt() {
  if (state.writingReviewing && !state.writingDeck.length) {
    startWritingPractice(true);
    return;
  }

  if (!state.writingDeck.length) {
    startWritingPractice(false);
    return;
  }

  state.writingIndex = (state.writingIndex + 1) % state.writingDeck.length;
  renderWritingCard();
}

function legacyRemoveWritingMistake(id) {
  if (!state.writingMistakeBook[id]) return;
  delete state.writingMistakeBook[id];
  if (state.writingCurrent?.id === id && state.writingReviewing) {
    state.writingDeck = state.writingDeck.filter((item) => item.id !== id);
    if (state.writingIndex >= state.writingDeck.length) state.writingIndex = 0;
    renderWritingCard();
  }
  renderWritingMistakeBook();
  saveWritingMistakeBook();
  void saveTraining(false);
}

function removeWritingFavorite(id) {
  if (!state.writingFavoriteBook[id]) return;
  delete state.writingFavoriteBook[id];
  renderWritingMistakeBook();
  updateWritingFavoriteButton();
  saveWritingFavoriteBook();
  void saveTraining(false);
}

function startWritingSinglePractice(item) {
  if (!item) return;
  state.writingReviewing = true;
  state.writingAllMode = false;
  state.writingChecked = false;
  state.writingDeck = [item];
  state.writingIndex = 0;
  renderWritingCard();
}

const writingPhaseLabels = {
  copy: "跟打",
  slot: "填槽",
  chain: "连句",
};

const writingCriticalRules = [
  {
    pattern: /\bwoman\s+have\b/i,
    type: "高频语法",
    wrong: "woman have",
    correction: "women have",
    note: "复数女性用 women，后面接 have。",
  },
  {
    pattern: /\bman\s+have\b/i,
    type: "高频语法",
    wrong: "man have",
    correction: "men have",
    note: "复数男性用 men，后面接 have。",
  },
  {
    pattern: /\bwomen\s+has\b/i,
    type: "主谓一致",
    wrong: "women has",
    correction: "women have",
    note: "women 是复数主语，不能接 has。",
  },
  {
    pattern: /\bmen\s+has\b/i,
    type: "主谓一致",
    wrong: "men has",
    correction: "men have",
    note: "men 是复数主语，不能接 has。",
  },
  {
    pattern: /\bwoman's sports\b/i,
    type: "高频语法",
    wrong: "woman's sports",
    correction: "women's sports",
    note: "女子体育用 women's sports。",
  },
  {
    pattern: /\bman's sports\b/i,
    type: "高频语法",
    wrong: "man's sports",
    correction: "men's sports",
    note: "男子体育用 men's sports。",
  },
  {
    pattern: /\bshow times\b/i,
    type: "危险表达",
    wrong: "show times",
    correction: "airtime",
    note: "播放时间在这个语境中用 airtime 更稳。",
  },
  {
    pattern: /\bentertaining favors\b/i,
    type: "危险表达",
    wrong: "entertaining favors",
    correction: "viewers' preferences",
    note: "观众偏好不要直译造词，用 viewers' preferences。",
  },
  {
    pattern: /\bbody\s+countfront\b/i,
    type: "危险表达",
    wrong: "body countfront",
    correction: "physical contact",
    note: "身体对抗用 physical contact。",
  },
  {
    pattern: /\bin social\b/i,
    type: "危险表达",
    wrong: "in social",
    correction: "in society",
    note: "social 是形容词，这里用 in society。",
  },
  {
    pattern: /\bin a social perspective\b/i,
    type: "固定搭配",
    wrong: "in a social perspective",
    correction: "from a social perspective",
    note: "表示“从……角度看”用 from a ... perspective。",
  },
  {
    pattern: /\bin some extent\b/i,
    type: "固定搭配",
    wrong: "in some extent",
    correction: "to some extent",
    note: "固定表达是 to some extent。",
  },
  {
    pattern: /\bdaily quality of life\b/i,
    type: "地道表达",
    wrong: "daily quality of life",
    correction: "quality of life / daily lives",
    note: "quality of life 本身已经是生活质量，不要加 daily。",
  },
  {
    pattern: /\bincrease large amounts of carbon emissions\b/i,
    type: "地道表达",
    wrong: "increase large amounts of carbon emissions",
    correction: "produce large amounts of carbon emissions",
    note: "大量排放通常用 produce large amounts of carbon emissions。",
  },
  {
    pattern: /\bpotential electric power\b/i,
    type: "地道表达",
    wrong: "potential electric power",
    correction: "the potential of electric power",
    note: "表达“电力的潜力”用 the potential of electric power。",
  },
  {
    pattern: /\bmodern\s*,\s*diets\b/i,
    type: "标点错误",
    wrong: "modern, diets",
    correction: "modern diets",
    note: "形容词和名词之间不要加逗号。",
  },
];

function getWritingDayKey() {
  return new Date().toLocaleDateString("en-CA");
}

function ensureWritingStatsToday() {
  state.writingStats = {
    ...createDefaultWritingStats(),
    ...state.writingStats,
    repeatedErrors: state.writingStats?.repeatedErrors || {},
  };

  const today = getWritingDayKey();
  if (state.writingStats.dayKey !== today) {
    state.writingStats.dayKey = today;
    state.writingStats.packsCompletedToday = 0;
    state.writingStats.slotAttempts = 0;
    state.writingStats.slotCorrect = 0;
    state.writingStats.dangerErrors = 0;
  }
}

function populateWritingPackSelect() {
  writingPackSelect.innerHTML = writingPatternPacks
    .map((pack) => `<option value="${escapeHtml(pack.id)}">${escapeHtml(pack.topic)}</option>`)
    .join("");
  if (!writingPatternPacks.some((pack) => pack.id === state.writingPackId)) {
    state.writingPackId = writingPatternPacks[0]?.id || "";
  }
  writingPackSelect.value = state.writingPackId;
}

function getSelectedWritingPack() {
  return writingPatternPacks.find((pack) => pack.id === state.writingPackId) || writingPatternPacks[0];
}

function getAllWritingPackItems() {
  return writingPatternPacks.flatMap((pack) =>
    (pack.bodyChain || []).map((item) => ({
      ...item,
      packId: pack.id,
      topic: pack.topic,
    })),
  );
}

function setWritingPhase(phase) {
  state.writingPhase = writingPhaseLabels[phase] ? phase : "slot";
  writingPhaseButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.writingPhase === state.writingPhase);
  });
  if (state.writingCurrent && !state.writingReviewing) renderWritingCard();
}

function getWritingPracticeItem() {
  if (state.writingReviewing || state.writingAllMode) return state.writingDeck[state.writingIndex] || null;
  const pack = getSelectedWritingPack();
  return pack?.bodyChain?.[state.writingChainIndex] || null;
}

function getWritingMistakeKey(item) {
  return item.favoriteKey || item.mistakeKey || `${item.packId || state.writingPackId || "pack"}:${item.id}`;
}

function getWritingFavorites() {
  return Object.values(state.writingFavoriteBook || {}).sort((a, b) => (b.favoritedAt || 0) - (a.favoritedAt || 0));
}

function getWritingTargetChunks(item = state.writingCurrent) {
  if (!item) return [];
  const phase = item === state.writingCurrent && !state.writingReviewing ? state.writingPhase : item.phase || "slot";
  if (phase === "copy" && item.targetSentence) return [item.targetSentence];
  const chunks = item.slots?.length ? item.slots : item.safeChunks?.length ? item.safeChunks : [];
  if (chunks.length) return chunks;
  return [item.targetSentence || item.sentenceFrame || ""].filter(Boolean);
}

function getWritingTargetSpeechText(item = state.writingCurrent) {
  return getWritingTargetChunks(item)
    .map((chunk) => normaliseWord(chunk))
    .filter(Boolean)
    .join(". ");
}

function createWritingBookEntry(item, extras = {}) {
  const pack = getSelectedWritingPack();
  const key = getWritingMistakeKey(item);
  return {
    favoriteKey: key,
    mistakeKey: item.mistakeKey || key,
    id: item.id,
    packId: item.packId || pack?.id || state.writingPackId,
    topic: item.topic || pack?.topic || "",
    role: item.role,
    zhPrompt: item.zhPrompt,
    sentenceFrame: item.sentenceFrame,
    targetSentence: item.targetSentence,
    slots: item.slots || [],
    safeChunks: item.safeChunks || [],
    phase: item.phase || (state.writingReviewing ? "slot" : state.writingPhase),
    ...extras,
  };
}

function findWritingBookItem(key) {
  return state.writingMistakeBook[key] || state.writingFavoriteBook[key] || null;
}

function isWritingFavorite(item = state.writingCurrent) {
  return Boolean(item && state.writingFavoriteBook[getWritingMistakeKey(item)]);
}

function updateWritingFavoriteButton() {
  if (!writingFavoriteButton) return;

  const hasCurrent = Boolean(state.writingCurrent);
  writingFavoriteButton.disabled = !hasCurrent;
  writingFavoriteButton.classList.toggle("is-favorite", hasCurrent && isWritingFavorite(state.writingCurrent));
  writingFavoriteButton.setAttribute("aria-pressed", hasCurrent && isWritingFavorite(state.writingCurrent) ? "true" : "false");
  writingFavoriteButton.textContent = hasCurrent && isWritingFavorite(state.writingCurrent) ? "★ 已收藏" : "☆ 收藏";
}

function toggleWritingFavorite(item = state.writingCurrent) {
  if (!item) return;

  const key = getWritingMistakeKey(item);
  if (state.writingFavoriteBook[key]) {
    delete state.writingFavoriteBook[key];
  } else {
    state.writingFavoriteBook[key] = createWritingBookEntry(item, {
      favoritedAt: Date.now(),
      lastInput: item.lastInput || writingInput?.value || "",
    });
  }

  saveWritingFavoriteBook();
  renderWritingMistakeBook();
  updateWritingFavoriteButton();
  void saveTraining(false);
}

async function speakWritingText(text, fallbackMessage = "未检测到可朗读的写作词块。") {
  const speechText = normaliseWord(text || "");
  if (!speechText) {
    if (!state.writingChecked) writingResult.innerHTML = `<p class="empty-state">${escapeHtml(fallbackMessage)}</p>`;
    return false;
  }

  if (!getSelectedVoice()) {
    if (!state.writingChecked) writingResult.innerHTML = `<p class="empty-state">未检测到可用英式语音，请先检查发音设置。</p>`;
    return false;
  }

  const runId = state.speechRunId + 1;
  state.speechRunId = runId;
  state.isSpeaking = false;
  stopCurrentAudio();
  window.speechSynthesis?.cancel();
  return speak(speechText);
}

function speakCurrentWritingTarget() {
  return speakWritingText(getWritingTargetSpeechText(state.writingCurrent), "当前没有可重听的写作词块。");
}

function renderWritingBookTabs() {
  const mistakeCount = getWritingMistakes().length;
  const favoriteCount = getWritingFavorites().length;
  writingMistakeCount.textContent = String(mistakeCount);
  if (writingFavoriteCount) writingFavoriteCount.textContent = String(favoriteCount);
  writingReviewButton.disabled = mistakeCount === 0;
  writingBookTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.writingBookTab === state.writingBookMode);
  });
}

function normaliseWritingText(value) {
  return String(value || "")
    .replace(/[\u2018\u2019`]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[.,!?;:()[\]{}]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("en-GB");
}

function getWritingTokens(value) {
  const normalised = normaliseWritingText(value);
  return normalised ? normalised.split(" ").filter(Boolean) : [];
}

function parseWritingSlotInput(input) {
  return String(input || "")
    .split(/\n|\/|;|；|\|/)
    .map((part) => normaliseWord(part))
    .filter(Boolean);
}

function detectCriticalWritingErrors(input) {
  const errors = writingCriticalRules
    .filter((rule) => rule.pattern.test(input))
    .map((rule) => ({
      type: rule.type,
      wrong: rule.wrong,
      correction: rule.correction,
      note: rule.note,
    }));

  const modalMatch = input.match(/\b(can|could|may|might|must|should|will|would)\s+([a-z]+(?:s|ed))\b/i);
  if (modalMatch) {
    errors.push({
      type: "动词形式",
      wrong: modalMatch[0],
      correction: `${modalMatch[1].toLowerCase()} + 动词原形`,
      note: "情态动词后面接动词原形。",
    });
  }

  return errors;
}

function detectSlotSpelling(inputPart, targetSlot) {
  const inputTokens = getWritingTokens(inputPart);
  const targetTokens = getWritingTokens(targetSlot);
  const errors = [];

  inputTokens.forEach((token) => {
    const knownCorrection = writingKnownMisspellings[token];
    if (knownCorrection) {
      errors.push({
        type: "拼写错误",
        wrong: token,
        correction: knownCorrection,
        note: "这是写作中常见的拼写错误。",
      });
      return;
    }

    const closest = targetTokens
      .map((target) => ({
        target,
        distance: levenshteinDistance(token, target),
      }))
      .sort((a, b) => a.distance - b.distance)[0];

    if (closest && closest.distance > 0 && closest.distance <= 2 && token[0] === closest.target[0]) {
      errors.push({
        type: "拼写错误",
        wrong: token,
        correction: closest.target,
        note: "这个词和目标词很接近，优先按拼写错误处理。",
      });
    }
  });

  return errors;
}

function slotAppearsInInput(input, slot) {
  return normaliseWritingText(input).includes(normaliseWritingText(slot));
}

function detectWritingErrors(input, item) {
  const phase = state.writingReviewing ? "slot" : state.writingPhase;
  const slots = item.slots?.length ? item.slots : item.safeChunks || [];
  const errors = detectCriticalWritingErrors(input);
  let slotCorrectCount = 0;

  if (phase === "copy") {
    const correct = normaliseWritingText(input) === normaliseWritingText(item.targetSentence);
    slotCorrectCount = correct ? slots.length : slots.filter((slot) => slotAppearsInInput(input, slot)).length;
    if (!correct) {
      errors.push({
        type: "跟打不完整",
        wrong: input || "空白",
        correction: item.targetSentence,
        note: "跟打阶段先完整抄打一遍目标句，练速度和拼写。",
      });
      errors.push(...detectSlotSpelling(input, item.targetSentence));
    }
    return {
      correct: correct && errors.length === 0,
      errors: dedupeWritingErrors(errors),
      accuracy: slots.length ? Math.round((slotCorrectCount / slots.length) * 100) : 0,
      slotCorrectCount,
      slotTotal: slots.length || 1,
      dangerCount: errors.filter((error) => error.type !== "拼写错误" && error.type !== "跟打不完整").length,
      targetTokens: getWritingTokens(item.targetSentence),
    };
  }

  const parts = parseWritingSlotInput(input);
  slots.forEach((slot, index) => {
    const part = parts[index] || "";
    const matchesPart = normaliseWritingText(part) === normaliseWritingText(slot);
    const appearsInFullInput = parts.length !== slots.length && slotAppearsInInput(input, slot);

    if (matchesPart || appearsInFullInput) {
      slotCorrectCount += 1;
      return;
    }

    const spellingErrors = detectSlotSpelling(part || input, slot);
    if (spellingErrors.length) {
      errors.push(...spellingErrors);
      return;
    }

    errors.push({
      type: "词块错误",
      wrong: part || "未输入",
      correction: slot,
      note: `第 ${index + 1} 个槽位要用稳定词块。`,
    });
  });

  if (parts.length > slots.length) {
    errors.push({
      type: "多余词块",
      wrong: parts.slice(slots.length).join(" / "),
      correction: "只保留本句槽位需要的词块",
      note: "临考训练先不要扩写，减少现场造句。",
    });
  }

  const correct = slotCorrectCount === slots.length && errors.length === 0;
  return {
    correct,
    errors: dedupeWritingErrors(errors),
    accuracy: slots.length ? Math.round((slotCorrectCount / slots.length) * 100) : 0,
    slotCorrectCount,
    slotTotal: slots.length || 1,
    dangerCount: errors.filter((error) => error.type !== "拼写错误" && error.type !== "词块错误").length,
    targetTokens: slots.flatMap(getWritingTokens),
  };
}

function getWritingErrorBucket(error) {
  if (error.type === "拼写错误") return "spellingErrors";
  if (error.type === "危险表达" || error.type === "多余词块") return "phraseErrors";
  return "grammarErrors";
}

function updateWritingStats(result, elapsedSeconds) {
  ensureWritingStatsToday();
  state.writingStats.attempts += 1;
  state.writingStats.correct += result.correct ? 1 : 0;
  state.writingStats.totalSeconds += elapsedSeconds;
  state.writingStats.totalWords += result.targetTokens.length;
  state.writingStats.slotAttempts += result.slotTotal;
  state.writingStats.slotCorrect += result.slotCorrectCount;
  state.writingStats.dangerErrors += result.dangerCount;
  state.writingStats.lastPracticedAt = Date.now();

  result.errors.forEach((error) => {
    const bucket = getWritingErrorBucket(error);
    state.writingStats[bucket] += 1;
    const key = `${error.type}: ${error.wrong} -> ${error.correction}`;
    state.writingStats.repeatedErrors[key] = (state.writingStats.repeatedErrors[key] || 0) + 1;
  });
}

function renderWritingStats() {
  ensureWritingStatsToday();
  const slotAccuracy = state.writingStats.slotAttempts
    ? Math.round((state.writingStats.slotCorrect / state.writingStats.slotAttempts) * 100)
    : 0;
  writingAccuracy.textContent = String(state.writingStats.packsCompletedToday || 0);
  writingSpeed.textContent = `${slotAccuracy}%`;
  writingErrorCount.textContent = String(state.writingStats.dangerErrors || 0);
}

function upsertWritingMistake(item, input, result) {
  const key = getWritingMistakeKey(item);
  const existing = state.writingMistakeBook[key] || {};
  const pack = getSelectedWritingPack();
  state.writingMistakeBook[key] = {
    mistakeKey: key,
    id: item.id,
    packId: item.packId || pack?.id || state.writingPackId,
    topic: item.topic || pack?.topic || "",
    role: item.role,
    zhPrompt: item.zhPrompt,
    sentenceFrame: item.sentenceFrame,
    targetSentence: item.targetSentence,
    slots: item.slots || [],
    safeChunks: item.safeChunks || [],
    phase: state.writingReviewing ? "slot" : state.writingPhase,
    lastInput: input,
    errors: result.errors.map((error) => ({
      type: error.type,
      wrong: error.wrong,
      correction: error.correction,
      note: error.note,
    })),
    repeatCount: (existing.repeatCount || 0) + 1,
    attempts: (existing.attempts || 0) + 1,
    streak: 0,
    lastPracticedAt: Date.now(),
  };
}

function recordWritingReviewCorrect(item) {
  const key = getWritingMistakeKey(item);
  const mistake = state.writingMistakeBook[key];
  if (!mistake) return false;
  mistake.streak = (mistake.streak || 0) + 1;
  mistake.attempts = (mistake.attempts || 0) + 1;
  mistake.lastPracticedAt = Date.now();

  if (mistake.streak >= 2) {
    delete state.writingMistakeBook[key];
    return true;
  }
  return false;
}

function renderWritingMistakeBook() {
  renderWritingBookTabs();
  const showingFavorites = state.writingBookMode === "favorites";
  const items = showingFavorites ? getWritingFavorites() : getWritingMistakes();

  if (!items.length) {
    writingMistakeList.innerHTML = showingFavorites
      ? `<p class="empty-state">收藏本为空。点击当前写作题或错词块里的收藏按钮后会保存在这里。</p>`
      : `<p class="empty-state">暂无错词块。填槽或连句答错后会自动收进这里。</p>`;
    return;
  }

  writingMistakeList.innerHTML = items
    .map((item) => {
      const key = getWritingMistakeKey(item);
      const isFavorite = Boolean(state.writingFavoriteBook[key]);
      const errorSummary = (item.errors || [])
        .slice(0, 3)
        .map((error) => `${escapeHtml(error.type)}：${escapeHtml(error.wrong)} -> ${escapeHtml(error.correction)}`)
        .join("<br>");
      const statusText = showingFavorites
        ? item.favoritedAt
          ? `收藏于 ${new Date(item.favoritedAt).toLocaleDateString("zh-CN")}`
          : "已收藏"
        : `重复 ${item.repeatCount || 1} · 连对 ${item.streak || 0}/2`;

      return `
        <article class="writing-mistake-item">
          <div class="writing-mistake-meta">
            <strong>${escapeHtml(item.role || "Body sentence")}</strong>
            <span>${escapeHtml(item.topic || "")}</span>
          </div>
          <p>${escapeHtml(item.zhPrompt || "")}</p>
          <p class="writing-target">${escapeHtml(item.sentenceFrame || item.targetSentence || "")}</p>
          <p class="writing-last-input">上次输入：${escapeHtml(item.lastInput || "未记录")}</p>
          <p class="writing-error-summary">${errorSummary || "记住并打对目标词块。"}</p>
          <div class="writing-mistake-actions">
            <span>${escapeHtml(statusText)}</span>
            <button class="secondary-button" type="button" data-writing-review-one="${escapeHtml(key)}">练这一句</button>
            <button class="secondary-button" type="button" data-writing-speak-item="${escapeHtml(key)}">朗读</button>
            <button
              class="secondary-button writing-favorite-action ${isFavorite ? "is-favorite" : ""}"
              type="button"
              data-writing-toggle-favorite="${escapeHtml(key)}"
            >${isFavorite ? "★ 已收藏" : "☆ 收藏"}</button>
            ${
              showingFavorites
                ? `<button class="remove-button" type="button" data-writing-remove-favorite="${escapeHtml(key)}">移除</button>`
                : `<button class="remove-button" type="button" data-writing-remove-mistake="${escapeHtml(key)}">移除</button>`
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function setWritingEmpty(message) {
  state.writingCurrent = null;
  state.writingStartedAt = 0;
  state.writingChecked = false;
  writingTopic.textContent = "Topic";
  writingRole.textContent = writingPhaseLabels[state.writingPhase] || "填槽";
  writingPrompt.textContent = message;
  writingFrame.textContent = "";
  writingChunks.innerHTML = "";
  writingInput.value = "";
  writingInput.disabled = true;
  writingSpeakButton.disabled = true;
  writingFavoriteButton.disabled = true;
  writingCheckButton.disabled = true;
  writingNextButton.disabled = true;
  writingInputLabel.textContent = "输入本句要填的词块";
  writingResult.className = "writing-result";
  writingResult.innerHTML = "";
  updateWritingFavoriteButton();
}

function getWritingEmptyMessage() {
  if (state.writingReviewing) return "错词块本为空，先做填槽训练。";
  if (state.writingAllMode) return "考前全练已完成。";
  return "选择主题包后开始，先练 5 句 Body 段骨架。";
}

function renderWritingCard() {
  const current = getWritingPracticeItem();
  if (!current) {
    setWritingEmpty(getWritingEmptyMessage());
    return;
  }

  const pack = getSelectedWritingPack();
  const phase = state.writingReviewing ? "slot" : state.writingPhase;
  state.writingCurrent = {
    ...current,
    packId: current.packId || pack?.id || state.writingPackId,
    topic: current.topic || pack?.topic || "",
  };
  state.writingStartedAt = performance.now();
  state.writingChecked = false;

  writingTopic.textContent = state.writingCurrent.topic || "IELTS Writing";
  if (state.writingReviewing) {
    writingRole.textContent = `错词块复习 · 第 ${state.writingIndex + 1}/${state.writingDeck.length} 句 · ${
      state.writingCurrent.role || ""
    }`;
  } else if (state.writingAllMode) {
    writingRole.textContent = `考前全练 · 第 ${state.writingIndex + 1}/${state.writingDeck.length} 句 · ${
      state.writingCurrent.role || ""
    }`;
  } else {
    writingRole.textContent = `${writingPhaseLabels[phase]} · 第 ${state.writingChainIndex + 1}/5 句 · ${
      state.writingCurrent.role
    }`;
  }
  writingPrompt.textContent = state.writingCurrent.zhPrompt || "";
  writingFrame.textContent = phase === "copy" ? state.writingCurrent.targetSentence : state.writingCurrent.sentenceFrame;

  if (phase === "chain") {
    writingChunks.innerHTML = `<span>${state.writingCurrent.slots.length} 个槽位，按顺序输入</span>`;
  } else {
    writingChunks.innerHTML = (state.writingCurrent.safeChunks || state.writingCurrent.slots || [])
      .map((chunk) => `<span>${escapeHtml(chunk)}</span>`)
      .join("");
  }

  writingInput.value = "";
  writingInput.disabled = false;
  writingSpeakButton.disabled = false;
  writingCheckButton.disabled = false;
  writingNextButton.disabled = false;
  writingCheckButton.textContent = phase === "copy" ? "检查跟打" : "检查词块";
  writingInputLabel.textContent = phase === "copy" ? "完整跟打目标句" : "输入本句要填的词块";
  writingInput.placeholder =
    phase === "copy" ? "完整抄打一遍上方英文句。" : "每个词块一行，或用 / 分隔。";
  writingResult.className = "writing-result";
  writingResult.innerHTML = "";
  updateWritingFavoriteButton();
  writingInput.focus();
}

function startWritingPractice(review = false, singleId = "") {
  state.writingReviewing = review;
  state.writingAllMode = false;
  state.writingChecked = false;

  if (review) {
    state.writingDeck = singleId
      ? getWritingMistakes().filter((item) => (item.mistakeKey || item.id) === singleId)
      : getWritingMistakes();
    state.writingIndex = 0;
    if (!state.writingDeck.length) {
      setWritingEmpty("错词块本为空，先做填槽训练。");
      writingResult.innerHTML = `<p class="empty-state">暂无需要复习的错词块。</p>`;
      return;
    }
  } else {
    state.writingPackId = writingPackSelect.value || writingPatternPacks[0]?.id || "";
    state.writingChainIndex = 0;
    state.writingDeck = [];
    state.writingIndex = 0;
  }

  renderWritingCard();
}

function startWritingAllPractice() {
  state.writingReviewing = false;
  state.writingAllMode = true;
  state.writingChecked = false;
  state.writingDeck = getAllWritingPackItems();
  state.writingIndex = 0;
  state.writingChainIndex = 0;

  if (!state.writingDeck.length) {
    setWritingEmpty("没有可用写作句型。");
    writingResult.innerHTML = `<p class="empty-state">暂无可练习的写作词块。</p>`;
    return;
  }

  renderWritingCard();
}

function completeWritingAllPractice() {
  ensureWritingStatsToday();
  state.writingStats.packsCompletedToday += writingPatternPacks.length;
  state.writingAllMode = false;
  state.writingDeck = [];
  state.writingIndex = 0;
  saveWritingStats();
  renderWritingStats();
  setWritingEmpty("考前全练已完成。");
  writingResult.innerHTML = `
    <strong>本轮考前全练完成</strong>
    <p>本轮已经覆盖全部 ${writingPatternPacks.length} 个写作包。答错的词块已进入右侧错词块本，接下来点“复习错词块”。</p>
  `;
  void saveTraining(false);
}

function renderWritingResult(item, input, result, elapsedSeconds, removedFromMistakes) {
  const speed = elapsedSeconds > 0 ? Math.round((result.targetTokens.length / elapsedSeconds) * 60) : 0;
  const targetSpeech = getWritingTargetSpeechText(item);
  const audioButtons = `
    <div class="writing-result-actions">
      ${
        normaliseWord(input)
          ? `<button class="secondary-button" type="button" data-writing-speak-result="input">读我的输入</button>`
          : ""
      }
      <button class="secondary-button" type="button" data-writing-speak-result="target">读正确词块</button>
    </div>
  `;
  state.writingLastResultSpeech = {
    input,
    target: targetSpeech,
  };
  writingResult.className = `writing-result ${result.correct ? "is-correct" : "is-wrong"}`;

  if (result.correct) {
    const continueMessage = removedFromMistakes
      ? "已连续答对 2 次，已从错词块本移除。"
      : state.writingAllMode
        ? state.writingIndex >= state.writingDeck.length - 1
          ? "这是考前全练最后一句，点击下一句完成本轮。"
          : "点击下一句继续考前全练。"
        : "按下一句继续 5 句链。";
    writingResult.innerHTML = `
      <strong>正确</strong>
      <p>本句词块 ${result.slotCorrectCount}/${result.slotTotal} · 用时 ${elapsedSeconds.toFixed(1)} 秒 · ${speed} 词/分钟</p>
      <p class="writing-target">${escapeHtml(item.targetSentence)}</p>
      <p>${continueMessage}</p>
      ${audioButtons}
    `;
    return;
  }

  const errorList = result.errors
    .map(
      (error) => `
        <li>
          <strong>${escapeHtml(error.type)}</strong>
          <span>${escapeHtml(error.wrong)} -> ${escapeHtml(error.correction)}</span>
          <small>${escapeHtml(error.note || "按目标词块重打一次。")}</small>
        </li>
      `,
    )
    .join("");

  writingResult.innerHTML = `
    <strong>需要收敛</strong>
    <p>本句词块 ${result.slotCorrectCount}/${result.slotTotal} · 用时 ${elapsedSeconds.toFixed(1)} 秒 · ${speed} 词/分钟</p>
    <p class="writing-target">目标词块：${escapeHtml((item.slots || []).join(" / "))}</p>
    <p class="writing-last-input">你的输入：${escapeHtml(input || "空白")}</p>
    ${audioButtons}
    <ul class="writing-error-list">${errorList}</ul>
  `;
}

function checkWritingAnswer() {
  const item = state.writingCurrent;
  if (!item || state.writingChecked) return;

  const input = normaliseWord(writingInput.value || "");
  const elapsedSeconds = Math.max(1, (performance.now() - state.writingStartedAt) / 1000);
  const result = detectWritingErrors(input, item);
  state.writingChecked = true;
  writingCheckButton.disabled = true;

  updateWritingStats(result, elapsedSeconds);
  let removedFromMistakes = false;

  if (result.correct) {
    if (state.writingReviewing) {
      removedFromMistakes = recordWritingReviewCorrect(item);
      if (removedFromMistakes) {
        const key = getWritingMistakeKey(item);
        state.writingDeck = state.writingDeck.filter((mistake) => (mistake.mistakeKey || mistake.id) !== key);
        if (state.writingIndex >= state.writingDeck.length) state.writingIndex = 0;
      }
    }
  } else {
    upsertWritingMistake(item, input, result);
  }

  renderWritingResult(item, input, result, elapsedSeconds, removedFromMistakes);
  renderWritingStats();
  renderWritingMistakeBook();
  saveWritingStats();
  saveWritingMistakeBook();
  saveWritingFavoriteBook();
  void saveTraining(false);
}

function completeWritingPackIfNeeded() {
  if (state.writingReviewing || state.writingAllMode || !state.writingChecked) return;
  const pack = getSelectedWritingPack();
  if (state.writingChainIndex === (pack?.bodyChain?.length || 1) - 1) {
    ensureWritingStatsToday();
    state.writingStats.packsCompletedToday += 1;
    saveWritingStats();
  }
}

function nextWritingPrompt() {
  if (state.writingAllMode) {
    if (!state.writingDeck.length) {
      completeWritingAllPractice();
      return;
    }
    if (state.writingIndex >= state.writingDeck.length - 1) {
      completeWritingAllPractice();
      return;
    }
    state.writingIndex += 1;
    renderWritingCard();
    void saveTraining(false);
    return;
  }

  if (state.writingReviewing) {
    if (!state.writingDeck.length) {
      startWritingPractice(true);
      return;
    }
    state.writingIndex = (state.writingIndex + 1) % state.writingDeck.length;
    renderWritingCard();
    return;
  }

  completeWritingPackIfNeeded();
  const pack = getSelectedWritingPack();
  const length = pack?.bodyChain?.length || 1;
  state.writingChainIndex = (state.writingChainIndex + 1) % length;
  renderWritingStats();
  renderWritingCard();
  void saveTraining(false);
}

function removeWritingMistake(id) {
  if (!state.writingMistakeBook[id]) return;
  delete state.writingMistakeBook[id];
  if (state.writingCurrent && getWritingMistakeKey(state.writingCurrent) === id && state.writingReviewing) {
    state.writingDeck = state.writingDeck.filter((item) => (item.mistakeKey || item.id) !== id);
    if (state.writingIndex >= state.writingDeck.length) state.writingIndex = 0;
    renderWritingCard();
  }
  renderWritingMistakeBook();
  saveWritingMistakeBook();
  void saveTraining(false);
}

const writingStudioStages = ["prepare", "draft", "review"];
const writingStudioStageTitles = {
  prepare: "准备本次训练",
  draft: "完成限时写作",
  review: "完成快速复盘",
};
const writingStudioMissionConfig = {
  task1: { label: "Task 1 · 限时练习", minutes: 20, taskKind: "task1" },
  task2: { label: "Task 2 · 完整练习", minutes: 40, taskKind: "task2" },
  paragraph: { label: "Task 2 · 主体段练习", minutes: 15, taskKind: "paragraph" },
  mock: { label: "60分钟完整模考", minutes: 60, taskKind: "task2" },
};

const writingTemplateCatalog = [
  {
    id: "task1-trend",
    kind: "task1",
    tag: "趋势图",
    title: "变化趋势图",
    description: "折线图、动态柱状图或面积图。先抓总趋势，再写关键起伏。",
    focus: "Overview 必须先说整体走向和最明显的变化，不逐年报数。",
    structure: ["改写题目：图表比较什么、覆盖什么时间", "Overview：总体升降 + 最大变化 / 反转", "细节段 1：一组走势相近的数据", "细节段 2：另一组数据 + 关键对比"],
    vocabulary: ["rise from ... to ...", "decline gradually", "remain stable", "overtake", "reach a peak", "by contrast"],
    prompt: "The line graph shows the percentage of people who used three different forms of transport in a city between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    planHint: "Overview：总体谁上升、谁下降，最后谁最高。",
  },
  {
    id: "task1-comparison",
    kind: "task1",
    tag: "静态图表",
    title: "柱状、饼图与表格",
    description: "同一时间点的分类比较。先分组，再指出最大差距与例外。",
    focus: "不要按图表顺序逐项罗列；用类别分组组织比较。",
    structure: ["改写题目：数据对象、单位和时间", "Overview：最大 / 最小项与显著差异", "细节段 1：相近或同一类别的数据", "细节段 2：剩余类别 + 对照与例外"],
    vocabulary: ["account for", "respectively", "the highest proportion", "roughly twice as much as", "a similar figure", "whereas"],
    prompt: "The table compares the proportions of household expenditure on five categories in five countries in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    planHint: "Overview：最突出的类别与最明显的国家差异。",
  },
  {
    id: "task1-process",
    kind: "task1",
    tag: "流程图",
    title: "流程与制造过程",
    description: "按阶段写清起点、关键转换和终点，注意主动与被动语态。",
    focus: "不要解释原因或评价流程；只准确说明顺序和变化。",
    structure: ["改写题目：流程产物与整体阶段数", "Overview：起点、终点与是否为循环过程", "细节段 1：前半流程，按顺序描述", "细节段 2：后半流程，说明最终产物"],
    vocabulary: ["initially", "is then transported to", "undergoes", "is converted into", "subsequently", "the final product"],
    prompt: "The diagram below shows how used glass bottles are recycled. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    planHint: "Overview：从回收到再制成新瓶的线性阶段。",
  },
  {
    id: "task1-map",
    kind: "task1",
    tag: "地图图",
    title: "地图变化",
    description: "比较两个时间点的布局变化，先写总体改造方向，再写区域细节。",
    focus: "用方位和变化动词，不要把地图上的每个物体都孤立列出。",
    structure: ["改写题目：地点与两个时间点", "Overview：总体发展方向和保留部分", "细节段 1：一侧 / 一个区域的变化", "细节段 2：另一侧 / 另一片区域的变化"],
    vocabulary: ["was replaced by", "was converted into", "was expanded", "to the north of", "remained unchanged", "a new ... was constructed"],
    prompt: "The maps below show a town centre 20 years ago and how it looks today. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    planHint: "Overview：商业设施增加，交通与公共空间被重新规划。",
  },
  {
    id: "task2-opinion",
    kind: "task2",
    tag: "Opinion",
    title: "同意与否题",
    description: "明确立场，再用两个独立理由展开；不需要假装绝对客观。",
    focus: "开头直接表态，两个主体段都必须服务于同一个立场。",
    structure: ["引言：改写题目 + 明确同意程度", "主体段 1：第一个理由 + 因果解释 + 例子", "主体段 2：第二个理由 + 解释 + 例子 / 让步", "结论：重申立场，不引入新观点"],
    vocabulary: ["I largely agree that", "a primary reason is that", "this is because", "for instance", "outweigh the drawbacks", "it is therefore clear that"],
    prompt: "Some people believe that governments should spend more money on public transport than on building new roads. To what extent do you agree or disagree?",
    planHint: "立场：大体同意；理由一是效率与拥堵，理由二是环境与公平。",
  },
  {
    id: "task2-discussion",
    kind: "task2",
    tag: "Discussion",
    title: "讨论双方观点题",
    description: "公平呈现两方观点，再给出自己的判断，而不是只写单方。",
    focus: "题目要求 discuss both views 时，两方都需要一个完整解释。",
    structure: ["引言：改写争议 + 给出自己的立场", "主体段 1：解释观点 A 为什么有说服力", "主体段 2：解释观点 B，并说明自己更认同哪方", "结论：简洁总结两方与个人判断"],
    vocabulary: ["supporters of this view argue", "from this perspective", "however", "a more convincing argument is that", "I would argue that", "in conclusion"],
    prompt: "Some people think that children should begin formal education at a very early age, while others believe they should not start school until they are at least seven years old. Discuss both views and give your own opinion.",
    planHint: "立场：认可早期学习价值，但更支持七岁前以游戏和社交发展为主。",
  },
  {
    id: "task2-advantages",
    kind: "task2",
    tag: "Advantages / disadvantages",
    title: "利弊与利大于弊",
    description: "先判断题目是否要求权衡，再把每个影响写透。",
    focus: "如果问 outweigh，必须在引言和结论中做清楚的权衡判断。",
    structure: ["引言：改写趋势 + 给出总体判断", "主体段 1：主要好处 / 主要坏处", "主体段 2：另一面影响，并完成权衡", "结论：明确回答利是否大于弊"],
    vocabulary: ["bring about", "a notable benefit", "a potential drawback", "place pressure on", "be offset by", "on balance"],
    prompt: "More people are choosing to work from home rather than travel to an office every day. Do the advantages of this development outweigh the disadvantages?",
    planHint: "判断：利大于弊；效率与弹性超过孤立感和协作难度。",
  },
  {
    id: "task2-solution",
    kind: "task2",
    tag: "Problems / solutions",
    title: "问题与解决方案",
    description: "问题和方案必须一一对应，方案要写清执行者和作用机制。",
    focus: "不要只列政策名称；说明谁做、怎么做、为何有效。",
    structure: ["引言：改写问题 + 概述将讨论原因或方案", "主体段 1：一个核心问题及其后果", "主体段 2：对应方案、执行者和效果", "结论：重申最有效的解决路径"],
    vocabulary: ["give rise to", "a contributing factor", "address this issue", "introduce incentives", "enforce regulations", "a long-term solution"],
    prompt: "In many cities, the number of people who use private cars is increasing. What problems does this cause, and what measures can be taken to solve them?",
    planHint: "问题：拥堵和污染；方案：公共交通投资与拥堵收费。",
  },
  {
    id: "task2-two-part",
    kind: "task2",
    tag: "Two-part question",
    title: "双问题题",
    description: "逐问作答，每一个问题都至少需要一个完整主体段。",
    focus: "先在草稿中拆成 Q1 / Q2，避免只回答题目的一半。",
    structure: ["引言：改写现象 + 预告两个问题都会回答", "主体段 1：回答第一个问题，给原因或解释", "主体段 2：回答第二个问题，给影响或措施", "结论：压缩总结两个答案"],
    vocabulary: ["there are several reasons why", "one explanation is that", "this can lead to", "in response to this", "a practical measure would be", "overall"],
    prompt: "In many countries, people are spending less time reading printed newspapers. Why is this happening, and is this a positive or negative development?",
    planHint: "Q1：数字媒体更快更便宜；Q2：总体积极，但需注意信息质量。",
  },
];
let writingTemplateKind = "task1";
let writingTemplateExamplePromptImageData = null;
let writingStudioTimerId = null;
let writingStudioServerSaveTimer = null;
let writingPromptImageBaseWidth = 0;

function getWritingTemplate(templateId) {
  const templates = getAllWritingTemplates();
  return templates.find((template) => template.id === templateId) || templates[0] || null;
}

function getWritingTemplatesForKind(kind = writingTemplateKind) {
  return getAllWritingTemplates().filter((template) => template.kind === kind);
}

function getAllWritingTemplates() {
  const studio = state.writingStudio || createWritingStudioState();
  const hidden = new Set(studio.hiddenTemplateIds || []);
  const overrides = studio.templateOverrides || {};
  return [
    ...writingTemplateCatalog.filter((template) => !hidden.has(template.id)).map((template) => ({ ...template, ...(overrides[template.id] || {}) })),
    ...(studio.templates || []),
  ];
}

function openWritingTemplateLibrary() {
  if (state.writingStudio.currentSession) captureWritingStudioForm();
  const selected = getWritingTemplate(state.writingStudio.settings.selectedTemplateId);
  writingTemplateKind = selected?.kind || "task1";
  writingTemplateCaseView.hidden = true;
  writingStudioDashboard.hidden = true;
  writingStudioSession.hidden = true;
  writingTemplateLibrary.hidden = false;
  writingTemplateCloseButton.textContent = state.writingStudio.currentSession ? "返回当前训练" : "返回写作首页";
  renderWritingTemplateLibrary();
}

function closeWritingTemplateLibrary() {
  writingTemplateLibrary.hidden = true;
  writingTemplateCaseView.hidden = true;
  if (state.writingStudio.currentSession) {
    openWritingStudioSession();
    return;
  }
  writingStudioDashboard.hidden = false;
  renderWritingStudioDashboard();
}

function openWritingTemplateCaseView(templateId) {
  const template = getWritingTemplate(templateId);
  if (!template || !writingTemplateCaseView || !writingTemplateCaseContent) return;
  state.writingStudio.settings.selectedTemplateId = template.id;
  writingTemplateLibrary.hidden = true;
  writingTemplateCaseView.hidden = false;
  renderWritingTemplateCaseView(template);
}

function closeWritingTemplateCaseView() {
  if (!writingTemplateCaseView) return;
  writingTemplateCaseView.hidden = true;
  writingTemplateLibrary.hidden = false;
  renderWritingTemplateLibrary();
}

function renderWritingTemplateCaseView(template) {
  if (!writingTemplateCaseContent || !template) return;
  const prompt = String(template.examplePrompt || template.prompt || "").trim();
  const promptImage = normaliseWritingTemplateExampleImage(template.examplePromptImage);
  const sampleEssay = String(template.sampleEssay || "").trim();
  const vocabulary = Array.isArray(template.vocabulary) ? template.vocabulary : [];
  const structure = Array.isArray(template.structure) ? template.structure : [];

  writingTemplateCaseContent.innerHTML = `
    <aside class="writing-template-case-reference">
      <p class="eyebrow">${escapeHtml(template.kind === "task1" ? "Academic Task 1" : "Academic Task 2")} · ${escapeHtml(template.tag || "我的模板")}</p>
      <h4>${escapeHtml(template.title)}</h4>
      <section>
        <strong>模板重点</strong>
        <p>${escapeHtml(template.focus || "按模板复习结构、表达和关键词。")}</p>
      </section>
      <section>
        <strong>段落结构</strong>
        <ol>${structure.length ? structure.map((step) => `<li>${escapeHtml(step)}</li>`).join("") : "<li>尚未填写结构。</li>"}</ol>
      </section>
      <section>
        <strong>关键词汇</strong>
        <div class="writing-template-vocabulary">${vocabulary.length ? vocabulary.map((term) => `<code>${escapeHtml(term)}</code>`).join("") : "<span class=\"writing-template-empty-copy\">尚未添加关键词汇。</span>"}</div>
      </section>
    </aside>
    <main class="writing-template-case-reading">
      <section class="writing-template-case-prompt">
        <span>例题题目</span>
        ${promptImage ? `<figure class="writing-template-case-image"><img src="${promptImage.dataUrl}" alt="${escapeHtml(template.title)} 例题截图"></figure>` : `<p>${prompt ? escapeHtml(prompt) : "尚未添加例题截图。返回模板库，点击编辑模板后粘贴截图。"}</p>`}
      </section>
      <section class="writing-template-case-sample">
        <span>范文</span>
        <div>${sampleEssay ? escapeHtml(sampleEssay).replace(/\n/g, "<br>") : "尚未添加范文。返回模板库，点击编辑模板后粘贴范文。"}</div>
      </section>
    </main>
  `;
}

function renderWritingTemplateLibrary() {
  if (!writingTemplateList || !writingTemplateDetail) return;
  const templates = getWritingTemplatesForKind(writingTemplateKind);
  let selected = getWritingTemplate(state.writingStudio.settings.selectedTemplateId);
  if (!selected || selected.kind !== writingTemplateKind) selected = templates[0];
  if (!selected) {
    writingTemplateList.innerHTML = "<p class=\"empty-state\">这一类模板已清空。可以添加自己的模板。</p>";
    writingTemplateDetail.innerHTML = "<p class=\"empty-state\">请选择另一类题型，或添加一个新的模板。</p>";
    return;
  }
  state.writingStudio.settings.selectedTemplateId = selected.id;

  writingTemplateTabs?.querySelectorAll("[data-writing-template-kind]").forEach((button) => {
    button.classList.toggle("active", button.dataset.writingTemplateKind === writingTemplateKind);
  });

  writingTemplateList.innerHTML = templates
    .map(
      (template) => `
        <button class="writing-template-item ${template.id === selected.id ? "active" : ""}" type="button" data-writing-template-id="${template.id}" aria-pressed="${template.id === selected.id}">
          <span>${escapeHtml(template.tag)}</span>
          <strong>${escapeHtml(template.title)}</strong>
          <small>${escapeHtml(template.description)}</small>
        </button>
      `,
    )
    .join("");

  writingTemplateDetail.innerHTML = `
    <div class="writing-template-detail-heading">
      <span>${escapeHtml(selected.kind === "task1" ? "Academic Task 1" : "Academic Task 2")} · ${escapeHtml(selected.tag)}</span>
      <div class="writing-template-detail-title-row"><h4>${escapeHtml(selected.title)}</h4><div class="writing-template-detail-actions"><button class="secondary-button writing-template-case-button" type="button" data-writing-template-case="${escapeHtml(selected.id)}">查看本模板例题</button><button class="icon-button" type="button" data-writing-template-edit="${escapeHtml(selected.id)}" title="编辑模板" aria-label="编辑模板"><i data-lucide="pencil" aria-hidden="true"></i></button><button class="icon-button danger" type="button" data-writing-template-delete="${escapeHtml(selected.id)}" title="删除模板" aria-label="删除模板"><i data-lucide="trash-2" aria-hidden="true"></i></button></div></div>
      <p>${escapeHtml(selected.description)}</p>
    </div>
    <section class="writing-template-focus"><strong>${selected.isCustom ? "我的模板" : "本模板的得分关键"}</strong><p>${escapeHtml(selected.focus)}</p></section>
    <div class="writing-template-detail-grid">
      <section>
        <h5>段落结构</h5>
        <ol>${selected.structure.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
      </section>
      <section>
        <h5>可用关键词汇</h5>
        <div class="writing-template-vocabulary">${selected.vocabulary.map((term) => `<code>${escapeHtml(term)}</code>`).join("")}</div>
      </section>
    </div>
    <section class="writing-template-case">
      <span>${selected.isCustom ? "模板原文" : "代表题"}</span>
      <p>${escapeHtml(selected.isCustom ? selected.templateContent : selected.prompt)}</p>
      ${selected.isCustom ? "" : `<small>练习提醒：${escapeHtml(selected.planHint)}</small>`}
    </section>
  `;
  if (window.lucide?.createIcons) window.lucide.createIcons({ attrs: { "stroke-width": 1.75 } });
  saveWritingStudioState();
}

function saveCustomWritingTemplate() {
  const title = writingTemplateFormTitle.value.trim();
  const templateContent = writingTemplateFormContent.value.trim();
  if (!title || !templateContent) return;
  const vocabulary = writingTemplateFormVocabulary.value
    .split(/[\n,，]/)
    .map((item) => item.trim())
    .filter(Boolean);
  const kind = writingTemplateFormKind.value === "task2" ? "task2" : "task1";
  const editingId = writingTemplateForm.dataset.editingId || "";
  const focus = writingTemplateFormFocus.value.trim() || "按自己的模板复习结构、表达和关键词。";
  const sampleEssay = writingTemplateFormSampleEssay.value.trim();
  const examplePromptImage = normaliseWritingTemplateExampleImage(writingTemplateExamplePromptImageData);
  const structure = templateContent.split(/\n+/).map((line) => line.trim()).filter(Boolean).slice(0, 12);
  if (editingId) {
    const existing = getWritingTemplate(editingId);
    const updated = {
      ...existing,
      id: editingId,
      kind,
      title,
      focus,
      structure,
      vocabulary,
      templateContent,
      examplePrompt: existing?.examplePrompt || "",
      examplePromptImage,
      sampleEssay,
      isCustom: Boolean(existing?.isCustom),
    };
    if (existing?.isCustom) {
      state.writingStudio.templates = (state.writingStudio.templates || []).map((item) => (item.id === editingId ? updated : item));
    } else {
      state.writingStudio.templateOverrides = { ...(state.writingStudio.templateOverrides || {}), [editingId]: updated };
      state.writingStudio.hiddenTemplateIds = (state.writingStudio.hiddenTemplateIds || []).filter((id) => id !== editingId);
    }
    state.writingStudio.settings.selectedTemplateId = editingId;
    writingTemplateKind = kind;
    writingTemplateForm.dataset.editingId = "";
    writingTemplateFormSubmit.textContent = "保存模板";
    writingTemplateForm.reset();
    resetWritingTemplateExamplePromptImage();
    writingTemplateForm.hidden = true;
    saveWritingStudioState();
    renderWritingTemplateLibrary();
    return;
  }
  const template = {
    id: `custom-template-${Date.now()}`,
    kind,
    tag: "我的模板",
    title,
    description: "由你保存，可随时在模板库查看。",
    focus,
    structure,
    vocabulary,
    templateContent,
    examplePrompt: "",
    examplePromptImage,
    sampleEssay,
    isCustom: true,
  };
  state.writingStudio.templates = [...(state.writingStudio.templates || []), template];
  state.writingStudio.settings.selectedTemplateId = template.id;
  writingTemplateKind = kind;
  writingTemplateForm.reset();
  resetWritingTemplateExamplePromptImage();
  writingTemplateForm.hidden = true;
  saveWritingStudioState();
  renderWritingTemplateLibrary();
}

function editWritingTemplate(templateId) {
  const template = getWritingTemplate(templateId);
  if (!template) return;
  writingTemplateForm.dataset.editingId = template.id;
  writingTemplateFormKind.value = template.kind;
  writingTemplateFormTitle.value = template.title || "";
  writingTemplateFormFocus.value = template.focus || "";
  writingTemplateFormContent.value = template.templateContent || (template.structure || []).join("\n");
  writingTemplateFormVocabulary.value = (template.vocabulary || []).join("\n");
  writingTemplateFormSampleEssay.value = template.sampleEssay || "";
  resetWritingTemplateExamplePromptImage(template.examplePromptImage);
  writingTemplateFormSubmit.textContent = "保存修改";
  writingTemplateForm.hidden = false;
  writingTemplateForm.scrollIntoView({ behavior: "smooth", block: "start" });
  writingTemplateFormTitle.focus();
}

function deleteWritingTemplate(templateId) {
  const template = getWritingTemplate(templateId);
  if (!template || !window.confirm(`确定删除“${template.title}”吗？`)) return;
  if (template.isCustom) {
    state.writingStudio.templates = (state.writingStudio.templates || []).filter((item) => item.id !== templateId);
  } else {
    state.writingStudio.hiddenTemplateIds = [...new Set([...(state.writingStudio.hiddenTemplateIds || []), templateId])];
    const overrides = { ...(state.writingStudio.templateOverrides || {}) };
    delete overrides[templateId];
    state.writingStudio.templateOverrides = overrides;
  }
  const firstTemplate = getWritingTemplatesForKind(writingTemplateKind)[0] || getAllWritingTemplates()[0];
  state.writingStudio.settings.selectedTemplateId = firstTemplate?.id || "";
  if (firstTemplate) writingTemplateKind = firstTemplate.kind;
  saveWritingStudioState();
  renderWritingTemplateLibrary();
}

function createWritingStudioState() {
  return {
    version: 5,
    currentSession: null,
    sessions: [],
    errors: [],
    templates: [],
    templateOverrides: {},
    hiddenTemplateIds: [],
    settings: { targetBand: "7", selectedTemplateId: "task1-trend" },
  };
}

function normaliseWritingStudioStage(stage) {
  if (writingStudioStages.includes(stage)) return stage;
  if (["setup", "analysis", "plan"].includes(stage)) return "prepare";
  if (["check", "feedback", "rewrite"].includes(stage)) return "review";
  return "prepare";
}

function normaliseWritingPromptImage(image) {
  if (!image || typeof image !== "object" || !String(image.dataUrl || "").startsWith("data:image/")) return null;
  return {
    dataUrl: String(image.dataUrl),
    name: String(image.name || "题目截图"),
    ocrText: String(image.ocrText || ""),
    width: Math.max(0, Number(image.width) || 0),
    height: Math.max(0, Number(image.height) || 0),
    updatedAt: Number(image.updatedAt) || Date.now(),
  };
}

function normaliseWritingStudioSession(session) {
  if (!session || typeof session !== "object") return null;
  return {
    id: String(session.id || `writing-${Date.now()}`),
    mission: writingStudioMissionConfig[session.mission] ? session.mission : session.taskKind || "task2",
    label: session.label || writingStudioMissionConfig[session.mission]?.label || "写作训练",
    taskKind: session.taskKind === "task1" || session.taskKind === "paragraph" ? session.taskKind : "task2",
    stage: normaliseWritingStudioStage(session.stage),
    targetBand: String(session.targetBand || "7"),
    prompt: String(session.prompt || ""),
    templateId: String(session.templateId || ""),
    promptImage: normaliseWritingPromptImage(session.promptImage),
    promptImageExpanded: Boolean(session.promptImageExpanded),
    task1Prompt: String(session.task1Prompt || ""),
    visualNotes: String(session.visualNotes || ""),
    quickPlan: String(session.quickPlan || session.analysis?.position || session.plan?.overview || session.plan?.thesis || ""),
    analysis: {
      topic: "",
      questionType: "opinion",
      instructions: "",
      limits: "",
      requirements: "",
      position: "",
      ...(session.analysis || {}),
    },
    plan: {
      thesis: "",
      body1Claim: "",
      body1Reason: "",
      body1Example: "",
      body2Claim: "",
      body2Reason: "",
      body2Example: "",
      task1Intro: "",
      overview: "",
      detailGroup1: "",
      detailGroup2: "",
      aiFeedback: "",
      ...(session.plan || {}),
    },
    draft: String(session.draft || ""),
    task1Draft: String(session.task1Draft || ""),
    checklist: { ...(session.checklist || {}) },
    selfErrors: String(session.selfErrors || ""),
    feedbackInput: String(session.feedbackInput || ""),
    feedback: session.feedback && typeof session.feedback === "object" ? session.feedback : null,
    rewrite: {
      brief: "",
      original: "",
      draft: "",
      resolved: false,
      ...(session.rewrite || {}),
    },
    timeLimitSeconds: Number(session.timeLimitSeconds) || 2400,
    elapsedSeconds: Number(session.elapsedSeconds) || 0,
    timerStartedAt: Number(session.timerStartedAt) || 0,
    status: session.status === "complete" ? "complete" : "active",
    createdAt: Number(session.createdAt) || Date.now(),
    updatedAt: Number(session.updatedAt) || Date.now(),
    completedAt: Number(session.completedAt) || 0,
    metrics: session.metrics && typeof session.metrics === "object" ? session.metrics : {},
  };
}

function mergeWritingStudioCollections(currentItems, incomingItems) {
  const merged = new Map();
  [...(incomingItems || []), ...(currentItems || [])].forEach((item) => {
    if (!item?.id) return;
    const existing = merged.get(String(item.id));
    const itemTimestamp = Number(item.updatedAt || item.createdAt || 0);
    const existingTimestamp = Number(existing?.updatedAt || existing?.createdAt || 0);
    if (!existing || itemTimestamp >= existingTimestamp) {
      merged.set(
        String(item.id),
        !item.promptImage && existing?.promptImage && itemTimestamp === existingTimestamp
          ? { ...item, promptImage: existing.promptImage }
          : item,
      );
    }
  });
  return [...merged.values()];
}

function mergeWritingStudioState(current, incoming) {
  const base = createWritingStudioState();
  const currentSession = normaliseWritingStudioSession(current?.currentSession);
  const incomingSession = normaliseWritingStudioSession(incoming?.currentSession);
  const selectedSession = !currentSession
    ? incomingSession
    : !incomingSession
      ? currentSession
      : currentSession.updatedAt >= incomingSession.updatedAt
        ? currentSession
        : incomingSession;
  const alternateSession = selectedSession === currentSession ? incomingSession : currentSession;
  const newestSession = selectedSession
    ? {
        ...selectedSession,
        promptImage:
          selectedSession.promptImage ||
          (alternateSession && alternateSession.updatedAt === selectedSession.updatedAt ? alternateSession.promptImage : null),
      }
    : null;
  return {
    ...base,
    ...incoming,
    ...current,
    version: 5,
    currentSession: newestSession,
    sessions: mergeWritingStudioCollections(current?.sessions, incoming?.sessions)
      .map(normaliseWritingStudioSession)
      .filter(Boolean)
      .sort((a, b) => (b.completedAt || b.updatedAt) - (a.completedAt || a.updatedAt)),
    errors: mergeWritingStudioCollections(current?.errors, incoming?.errors)
      .filter(Boolean)
      .sort((a, b) => Number(a.dueAt || 0) - Number(b.dueAt || 0)),
    templates: mergeWritingStudioCollections(current?.templates, incoming?.templates).filter(Boolean),
    templateOverrides: { ...(incoming?.templateOverrides || {}), ...(current?.templateOverrides || {}) },
    hiddenTemplateIds: [...new Set([...(incoming?.hiddenTemplateIds || []), ...(current?.hiddenTemplateIds || [])])],
    settings: { ...base.settings, ...(incoming?.settings || {}), ...(current?.settings || {}) },
  };
}

function loadWritingStudioState() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(WRITING_STUDIO_STORAGE_KEY) || "null");
    return mergeWritingStudioState(createWritingStudioState(), saved || {});
  } catch {
    return createWritingStudioState();
  }
}

function saveWritingStudioState() {
  if (!state?.writingStudio) return;
  try {
    window.localStorage.setItem(WRITING_STUDIO_STORAGE_KEY, JSON.stringify(state.writingStudio));
  } catch {
    try {
      const compactState = structuredClone(state.writingStudio);
      [compactState.currentSession, ...(compactState.sessions || [])].filter(Boolean).forEach((session) => {
        if (session.promptImage) session.promptImage = null;
      });
      window.localStorage.setItem(WRITING_STUDIO_STORAGE_KEY, JSON.stringify(compactState));
    } catch {}
  }
}

function scheduleWritingStudioServerSave() {
  window.clearTimeout(writingStudioServerSaveTimer);
  writingStudioServerSaveTimer = window.setTimeout(() => {
    void saveTraining(false);
  }, 1600);
}

function setWritingPromptImageStatus(message, tone = "") {
  if (!writingPromptImageStatus) return;
  writingPromptImageStatus.textContent = message;
  writingPromptImageStatus.classList.remove("is-working", "is-success", "is-error");
  if (tone) writingPromptImageStatus.classList.add(`is-${tone}`);
}

function compressWritingPromptImage(file) {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      try {
        const maxSide = 2400;
        const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
        const width = Math.max(1, Math.round(image.naturalWidth * scale));
        const height = Math.max(1, Math.round(image.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d", { alpha: false });
        if (!context) throw new Error("浏览器无法处理这张图片");
        context.fillStyle = "#fffefa";
        context.fillRect(0, 0, width, height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(image, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/webp", 0.9);
        resolve({ dataUrl, width, height });
      } catch (error) {
        reject(error);
      } finally {
        URL.revokeObjectURL(objectUrl);
      }
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("无法读取这张图片"));
    };
    image.src = objectUrl;
  });
}

function normaliseWritingTemplateExampleImage(image) {
  if (!image || typeof image.dataUrl !== "string" || !image.dataUrl.startsWith("data:image/")) return null;
  return {
    dataUrl: image.dataUrl,
    width: Number(image.width) || 0,
    height: Number(image.height) || 0,
    name: String(image.name || "例题截图"),
    updatedAt: Number(image.updatedAt) || Date.now(),
  };
}

function renderWritingTemplateExamplePromptImage() {
  const image = normaliseWritingTemplateExampleImage(writingTemplateExamplePromptImageData);
  writingTemplateExamplePromptImagePreview.hidden = !image;
  if (!image) {
    writingTemplateExamplePromptImage.removeAttribute("src");
    writingTemplateExamplePromptImageStatus.textContent = "尚未添加例题截图。";
    return;
  }
  writingTemplateExamplePromptImage.src = image.dataUrl;
  const dimensions = image.width && image.height ? `${image.width} × ${image.height}` : "已保存";
  writingTemplateExamplePromptImageStatus.textContent = `例题截图已保存（${dimensions}）。`;
}

function resetWritingTemplateExamplePromptImage(image = null) {
  writingTemplateExamplePromptImageData = normaliseWritingTemplateExampleImage(image);
  renderWritingTemplateExamplePromptImage();
  if (writingTemplateExamplePromptImageInput) writingTemplateExamplePromptImageInput.value = "";
}

async function handleWritingTemplateExamplePromptImageUpload(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    writingTemplateExamplePromptImageStatus.textContent = "请选择 PNG、JPG、WebP 或 BMP 图片。";
    return;
  }
  if (file.size > 15 * 1024 * 1024) {
    writingTemplateExamplePromptImageStatus.textContent = "图片超过 15MB，请先裁剪后再添加。";
    return;
  }
  writingTemplateExamplePromptImageStatus.textContent = "正在压缩例题截图…";
  writingTemplateExamplePromptImageInput.disabled = true;
  try {
    const compressed = await compressWritingPromptImage(file);
    writingTemplateExamplePromptImageData = {
      ...compressed,
      name: file.name || "例题截图",
      updatedAt: Date.now(),
    };
    renderWritingTemplateExamplePromptImage();
  } catch (error) {
    writingTemplateExamplePromptImageStatus.textContent = error?.message || "图片处理失败，请重新添加。";
  } finally {
    writingTemplateExamplePromptImageInput.disabled = false;
    writingTemplateExamplePromptImageInput.value = "";
  }
}

function renderWritingPromptReference() {
  const session = getWritingStudioSession();
  if (!session || !writingPromptReferenceTitle) return;
  const image = session.promptImage;
  const promptText = String(session.prompt || "").trim();
  writingPromptReferenceTitle.textContent = promptText || "请先上传题目截图，或从模板库选择一个代表题。";
  writingPromptReferenceTitle.parentElement.hidden = Boolean(image) && !promptText;
  writingPromptImageToggle.hidden = !image;
  writingPromptReferenceImage.hidden = !image;
  writingPromptUploadPreview.hidden = !image;
  if (image) {
    writingPromptReferenceImagePreview.src = image.dataUrl;
    writingPromptUploadImage.src = image.dataUrl;
    writingPromptImageDialogPreview.src = image.dataUrl;
    if (!writingPromptImageStatus.classList.contains("is-working")) {
      const dimensions = image.width && image.height ? `${image.width} × ${image.height}` : "已压缩";
      setWritingPromptImageStatus(`题图已保存（${dimensions}）。后续步骤将直接显示这张截图。`, "success");
    }
  } else {
    writingPromptReferenceImagePreview.removeAttribute("src");
    writingPromptUploadImage.removeAttribute("src");
    writingPromptImageDialogPreview.removeAttribute("src");
    setWritingPromptImageStatus(promptText ? "已使用模板代表题，可直接开始写作。" : "尚未上传题图。");
  }
}

function setWritingPromptImageZoom(value) {
  if (!writingPromptImageDialogPreview || !writingPromptZoomControl) return;
  const zoom = Math.min(2.5, Math.max(0.75, Number(value) || 1));
  writingPromptZoomControl.value = String(zoom);
  const baseWidth = writingPromptImageBaseWidth || Math.max(900, writingPromptImageDialogPreview.naturalWidth || 0);
  writingPromptImageDialogPreview.style.width = `${Math.round(baseWidth * zoom)}px`;
}

function openWritingPromptImageDialog() {
  const session = getWritingStudioSession();
  if (!session?.promptImage?.dataUrl || !writingPromptImageDialog) return;
  writingPromptImageDialogPreview.src = session.promptImage.dataUrl;
  if (typeof writingPromptImageDialog.showModal === "function") {
    if (!writingPromptImageDialog.open) writingPromptImageDialog.showModal();
  } else {
    writingPromptImageDialog.setAttribute("open", "");
  }
  window.requestAnimationFrame(() => {
    const availableWidth = Math.max(320, writingPromptImageDialogViewport.clientWidth - 48);
    const naturalWidth = writingPromptImageDialogPreview.naturalWidth || session.promptImage.width || 900;
    writingPromptImageBaseWidth = Math.min(availableWidth, Math.max(900, naturalWidth));
    setWritingPromptImageZoom(1);
    writingPromptImageDialogViewport.scrollTop = 0;
    writingPromptImageDialogViewport.scrollLeft = 0;
  });
}

function closeWritingPromptImageDialog() {
  if (!writingPromptImageDialog?.open) return;
  writingPromptImageDialog.close();
}

async function handleWritingPromptImageUpload(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    setWritingPromptImageStatus("请选择 PNG、JPG、WebP 或 BMP 图片。", "error");
    return;
  }
  if (file.size > 15 * 1024 * 1024) {
    setWritingPromptImageStatus("图片超过 15MB，请先裁剪后上传。", "error");
    return;
  }
  const session = getWritingStudioSession();
  if (!session) return;
  setWritingPromptImageStatus("正在压缩并保存题图…", "working");
  writingPromptImageInput.disabled = true;
  try {
    const compressed = await compressWritingPromptImage(file);
    session.promptImage = {
      ...compressed,
      name: file.name || "题目截图",
      updatedAt: Date.now(),
    };
    session.promptImageExpanded = true;
    session.updatedAt = Date.now();
    renderWritingPromptReference();
    saveWritingStudioState();
    await saveTraining(false);
    setWritingPromptImageStatus(`题图已保存（${compressed.width} × ${compressed.height}）。后续步骤将直接显示这张截图。`, "success");
  } catch (error) {
    setWritingPromptImageStatus(`${error?.message || "图片处理失败"}。`, "error");
  } finally {
    writingPromptImageInput.disabled = false;
    writingPromptImageInput.value = "";
  }
}

function createWritingStudioId(prefix = "writing") {
  if (window.crypto?.randomUUID) return `${prefix}-${window.crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function countWritingWords(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function formatWritingStudioDate(timestamp) {
  if (!timestamp) return "未完成";
  return new Date(timestamp).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" });
}

function getWritingStudioElapsed(session) {
  if (!session) return 0;
  const runningSeconds = session.timerStartedAt ? Math.max(0, (Date.now() - session.timerStartedAt) / 1000) : 0;
  return Math.max(0, Number(session.elapsedSeconds || 0) + runningSeconds);
}

function pauseWritingStudioTimer() {
  const session = state.writingStudio.currentSession;
  if (!session) return;
  if (session.timerStartedAt) {
    session.elapsedSeconds = getWritingStudioElapsed(session);
    session.timerStartedAt = 0;
  }
  if (writingStudioTimerId) window.clearInterval(writingStudioTimerId);
  writingStudioTimerId = null;
  renderWritingStudioTimer();
}

function startWritingStudioTimer() {
  const session = state.writingStudio.currentSession;
  if (!session || session.status === "complete" || session.timerStartedAt) return;
  session.timerStartedAt = Date.now();
  if (writingStudioTimerId) window.clearInterval(writingStudioTimerId);
  writingStudioTimerId = window.setInterval(renderWritingStudioTimer, 1000);
  renderWritingStudioTimer();
}

function renderWritingStudioTimer() {
  const session = state.writingStudio.currentSession;
  if (!session || !writingSessionTimer) return;
  const remaining = Math.round(session.timeLimitSeconds - getWritingStudioElapsed(session));
  const sign = remaining < 0 ? "+" : "";
  const absolute = Math.abs(remaining);
  const minutes = Math.floor(absolute / 60);
  const seconds = absolute % 60;
  writingSessionTimer.textContent = `${sign}${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  writingSessionTimer.classList.toggle("is-over", remaining < 0);
}

const WRITING_SPLIT_DEFAULT_RATIO = 0.42;
const WRITING_SPLIT_MIN_RATIO = 0.25;
const WRITING_SPLIT_MAX_RATIO = 0.7;
const WRITING_SPLIT_MIN_PROMPT = 320;
const WRITING_SPLIT_MIN_WORK = 420;
const WRITING_SPLITTER_WIDTH = 12;

function loadWritingSplitRatio() {
  try {
    const saved = Number(window.localStorage.getItem(WRITING_SPLIT_STORAGE_KEY));
    return Number.isFinite(saved)
      ? Math.min(WRITING_SPLIT_MAX_RATIO, Math.max(WRITING_SPLIT_MIN_RATIO, saved))
      : WRITING_SPLIT_DEFAULT_RATIO;
  } catch {
    return WRITING_SPLIT_DEFAULT_RATIO;
  }
}

let writingSplitRatio = loadWritingSplitRatio();

function applyWritingSplitRatio(ratio = writingSplitRatio, persist = false) {
  if (!writingStudioSession || !writingSessionSplitter || window.matchMedia("(max-width: 980px)").matches) return;
  const width = writingStudioSession.clientWidth;
  if (!width) return;
  const minimumPrompt = Math.min(WRITING_SPLIT_MIN_PROMPT, width * 0.4);
  const maximumPrompt = Math.max(minimumPrompt, width - WRITING_SPLIT_MIN_WORK - WRITING_SPLITTER_WIDTH);
  const requested = width * Math.min(WRITING_SPLIT_MAX_RATIO, Math.max(WRITING_SPLIT_MIN_RATIO, ratio));
  const promptWidth = Math.min(maximumPrompt, Math.max(minimumPrompt, requested));
  writingSplitRatio = promptWidth / width;
  writingStudioSession.style.setProperty("--writing-prompt-pane", `${Math.round(promptWidth)}px`);
  writingSessionSplitter.setAttribute("aria-valuenow", String(Math.round(writingSplitRatio * 100)));
  if (persist) {
    try {
      window.localStorage.setItem(WRITING_SPLIT_STORAGE_KEY, String(writingSplitRatio));
    } catch {
      // The current split remains usable even when browser storage is unavailable.
    }
  }
}

function resetWritingSplitRatio() {
  writingSplitRatio = WRITING_SPLIT_DEFAULT_RATIO;
  applyWritingSplitRatio(writingSplitRatio, true);
}

function initialiseWritingSessionSplitter() {
  if (!writingSessionSplitter || !writingStudioSession) return;
  let activePointerId = null;
  let sessionRect = null;

  writingSessionSplitter.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    activePointerId = event.pointerId;
    sessionRect = writingStudioSession.getBoundingClientRect();
    writingSessionSplitter.setPointerCapture(activePointerId);
    writingSessionSplitter.classList.add("is-dragging");
    document.body.classList.add("is-writing-resizing");
  });

  writingSessionSplitter.addEventListener("pointermove", (event) => {
    if (event.pointerId !== activePointerId || !sessionRect?.width) return;
    applyWritingSplitRatio((event.clientX - sessionRect.left) / sessionRect.width);
  });

  const finishDrag = (event) => {
    if (event.pointerId !== activePointerId) return;
    if (writingSessionSplitter.hasPointerCapture(activePointerId)) {
      writingSessionSplitter.releasePointerCapture(activePointerId);
    }
    activePointerId = null;
    sessionRect = null;
    writingSessionSplitter.classList.remove("is-dragging");
    document.body.classList.remove("is-writing-resizing");
    applyWritingSplitRatio(writingSplitRatio, true);
  };

  writingSessionSplitter.addEventListener("pointerup", finishDrag);
  writingSessionSplitter.addEventListener("pointercancel", finishDrag);
  writingSessionSplitter.addEventListener("dblclick", resetWritingSplitRatio);
  writingSessionSplitter.addEventListener("keydown", (event) => {
    const step = event.shiftKey ? 0.05 : 0.02;
    if (event.key === "ArrowLeft") writingSplitRatio -= step;
    else if (event.key === "ArrowRight") writingSplitRatio += step;
    else if (event.key === "Home") writingSplitRatio = WRITING_SPLIT_MIN_RATIO;
    else if (event.key === "End") writingSplitRatio = WRITING_SPLIT_MAX_RATIO;
    else if (event.key === "Enter" || event.key === " ") resetWritingSplitRatio();
    else return;
    event.preventDefault();
    applyWritingSplitRatio(writingSplitRatio, true);
  });

  window.addEventListener("resize", () => {
    if (!writingStudioSession.hidden) applyWritingSplitRatio(writingSplitRatio);
  });
}

function createWritingStudioSession(mission) {
  const config = writingStudioMissionConfig[mission] || writingStudioMissionConfig.task2;
  const isMock = mission === "mock";
  return normaliseWritingStudioSession({
    id: createWritingStudioId("session"),
    mission,
    label: config.label,
    taskKind: config.taskKind,
    targetBand: state.writingStudio.settings.targetBand || "7",
    prompt: "",
    task1Prompt: "",
    stage: "prepare",
    timeLimitSeconds: config.minutes * 60,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });
}

function getWritingStudioSession() {
  return state.writingStudio.currentSession;
}

function getWritingStudioSessionType(session) {
  return session?.mission === "mock" ? "mock" : session?.taskKind || "task2";
}

function applyWritingStudioSessionType(session, value, resetTime = false) {
  const config = writingStudioMissionConfig[value] || writingStudioMissionConfig.task2;
  session.mission = value === "mock" ? "mock" : value;
  session.taskKind = config.taskKind;
  session.label = config.label;
  if (resetTime) session.timeLimitSeconds = config.minutes * 60;
  session.updatedAt = Date.now();
}

function captureWritingStudioForm() {
  const session = getWritingStudioSession();
  if (!session) return;
  applyWritingStudioSessionType(session, writingStudioTaskKind.value, false);
  session.targetBand = writingStudioTargetBand.value;
  session.timeLimitSeconds = Number(writingStudioTimeLimit.value) || session.timeLimitSeconds;
  session.quickPlan = writingStudioQuickPlan.value.trim();
  session.draft = writingStudioDraft.value;
  session.task1Draft = writingStudioTask1Draft.value;
  session.checklist = Object.fromEntries(
    [...writingStudioChecklist.querySelectorAll("[data-writing-check]")].map((input) => [input.dataset.writingCheck, input.checked]),
  );
  session.selfErrors = writingStudioSelfErrors.value.trim();
  session.feedbackInput = writingStudioFeedbackInput.value.trim();
  session.rewrite = {
    ...session.rewrite,
    original: writingRewriteOriginal.value,
    draft: writingRewriteDraft.value,
    resolved: writingRewriteResolved.checked,
  };
  session.updatedAt = Date.now();
  state.writingStudio.settings.targetBand = session.targetBand;
  saveWritingStudioState();
  scheduleWritingStudioServerSave();
  renderWritingPromptReference();
  if (writingAutosaveStatus) writingAutosaveStatus.textContent = "已自动保存";
}

function fillWritingStudioForm(session) {
  writingStudioTaskKind.value = getWritingStudioSessionType(session);
  writingStudioTargetBand.value = session.targetBand;
  writingStudioTimeLimit.value = String(session.timeLimitSeconds);
  writingStudioQuickPlan.value = session.quickPlan || "";
  writingStudioDraft.value = session.draft;
  writingStudioTask1Draft.value = session.task1Draft;
  [...writingStudioChecklist.querySelectorAll("[data-writing-check]")].forEach((input) => {
    input.checked = Boolean(session.checklist[input.dataset.writingCheck]);
  });
  writingStudioSelfErrors.value = session.selfErrors;
  writingStudioFeedbackInput.value = session.feedbackInput;
  writingRewriteOriginal.value = session.rewrite.original;
  writingRewriteDraft.value = session.rewrite.draft;
  writingRewriteResolved.checked = Boolean(session.rewrite.resolved);
  renderWritingStudioTaskFields();
  renderWritingDraftCount();
  renderWritingFeedbackSummary();
  renderWritingRewriteBrief();
  renderWritingPromptReference();
}

function renderWritingStudioTaskFields() {
  const session = getWritingStudioSession();
  if (!session) return;
  const isTask1 = session.taskKind === "task1";
  const isMock = session.mission === "mock";
  writingSessionLabel.textContent = session.label;
  writingStudioTaskKind.value = getWritingStudioSessionType(session);
  writingStudioTimeLimit.value = String(session.timeLimitSeconds);
  writingStudioTimeSummary.textContent = `${Math.round(session.timeLimitSeconds / 60)} 分钟`;
  writingDraftLabel.textContent = isTask1 ? "Task 1 正文" : session.taskKind === "paragraph" ? "Task 2 主体段" : "Task 2 正文";
  writingQuickPlanLabel.textContent = isTask1 ? "一句 Overview（可跳过）" : isMock ? "一句思路（可跳过）" : "一句立场或全文主线（可跳过）";
  writingQuickPlanHint.textContent = isTask1 ? "例如：总体趋势 / 最明显的变化。" : isMock ? "可先写 Task 2 立场或 Task 1 Overview。" : "例如：我的立场是……，两个主体段将分别说明……。";
  writingStudioTask1Draft.closest("label")?.toggleAttribute("hidden", !isMock);
}

function validateWritingStudioStage(stage) {
  captureWritingStudioForm();
  const session = getWritingStudioSession();
  if (!session) return false;
  if (stage === "prepare" && !session.promptImage?.dataUrl && !String(session.prompt || "").trim()) {
    writingAutosaveStatus.textContent = "请先粘贴题目截图，或从模板库选择一个代表题";
    document.querySelector('[data-image-paste-zone="writing-prompt"]')?.focus();
    return false;
  }
  // 字数目标只用于考试提醒，不能阻止保存、关闭或进入复盘。
  if (stage === "draft") {
    writingAutosaveStatus.textContent = "草稿已保存，可随时继续或进入复盘";
  }
  if (stage === "review" && Object.values(session.checklist || {}).filter(Boolean).length < 4) {
    writingAutosaveStatus.textContent = "请完成四项快速确认";
    return false;
  }
  return true;
}

function setWritingStudioStage(stage, options = {}) {
  const session = getWritingStudioSession();
  if (!session || !writingStudioStages.includes(stage)) return;
  const currentIndex = writingStudioStages.indexOf(session.stage);
  const nextIndex = writingStudioStages.indexOf(stage);
  if (!options.force && nextIndex > currentIndex && !validateWritingStudioStage(session.stage)) return;
  captureWritingStudioForm();
  session.stage = stage;
  session.updatedAt = Date.now();
  writingStudioSession.dataset.activeStage = stage;
  if (stage === "draft" && !session.timerStartedAt) startWritingStudioTimer();
  if (stage === "review") pauseWritingStudioTimer();
  writingStudioStagePanels.forEach((panel) => { panel.hidden = panel.dataset.writingStagePanel !== stage; });
  writingStudioStageButtons.forEach((button, index) => {
    button.classList.toggle("active", button.dataset.writingStudioStage === stage);
    button.classList.toggle("complete", index < nextIndex);
  });
  writingStageProgressBar.style.width = `${((nextIndex + 1) / writingStudioStages.length) * 100}%`;
  writingSessionTitle.textContent = writingStudioStageTitles[stage];
  writingStagePreviousButton.disabled = nextIndex === 0;
  writingStageNextButton.hidden = stage === "review";
  writingStageNextButton.textContent = stage === "prepare" ? "开始写作" : "进入复盘";
  renderWritingStudioTaskFields();
  renderWritingStudioTimer();
  saveWritingStudioState();
}

function startWritingStudioMission(mission) {
  if (state.writingStudio.currentSession) {
    openWritingStudioSession();
    writingAutosaveStatus.textContent = "请先完成或放弃上次训练";
    return;
  }
  pauseWritingStudioTimer();
  state.writingStudio.currentSession = createWritingStudioSession(mission);
  writingStudio.classList.add("session-active");
  writingTemplateLibrary.hidden = true;
  writingStudioDashboard.hidden = true;
  writingStudioSession.hidden = false;
  writingLegacyRuntime.hidden = true;
  fillWritingStudioForm(state.writingStudio.currentSession);
  writingSessionLabel.textContent = state.writingStudio.currentSession.label;
  setWritingStudioStage("prepare", { force: true });
  window.requestAnimationFrame(() => applyWritingSplitRatio(writingSplitRatio));
  saveWritingStudioState();
}

function openWritingStudioSession(sessionId = "") {
  if (sessionId) {
    const stored = state.writingStudio.sessions.find((item) => item.id === sessionId);
    if (stored) {
      state.writingStudio.currentSession = normaliseWritingStudioSession({ ...stored, status: "active" });
      state.writingStudio.sessions = state.writingStudio.sessions.filter((item) => item.id !== sessionId);
    }
  }
  const session = getWritingStudioSession();
  if (!session) return;
  writingStudio.classList.add("session-active");
  writingTemplateLibrary.hidden = true;
  writingStudioDashboard.hidden = true;
  writingStudioSession.hidden = false;
  writingLegacyRuntime.hidden = true;
  fillWritingStudioForm(session);
  writingSessionLabel.textContent = session.label;
  setWritingStudioStage(session.stage, { force: true });
  window.requestAnimationFrame(() => applyWritingSplitRatio(writingSplitRatio));
  if (session.stage === "draft") {
    startWritingStudioTimer();
  }
}

function closeWritingStudioSession() {
  captureWritingStudioForm();
  pauseWritingStudioTimer();
  writingStudio.classList.remove("session-active");
  writingStudioSession.hidden = true;
  writingStudioDashboard.hidden = false;
  renderWritingStudioDashboard();
}

function openWritingLegacyDrill() {
  pauseWritingStudioTimer();
  writingStudio.hidden = true;
  writingLegacyRuntime.hidden = false;
  renderWritingMistakeBook();
}

function closeWritingLegacyDrill() {
  writingLegacyRuntime.hidden = true;
  writingStudio.hidden = false;
  renderWritingStudioDashboard();
}

function renderWritingDraftCount() {
  const session = getWritingStudioSession();
  const draftWords = countWritingWords(writingStudioDraft.value);
  const task1Words = countWritingWords(writingStudioTask1Draft.value);
  if (session?.mission === "mock") {
    writingDraftWordCount.textContent = `Task 2 ${draftWords} / 250 · Task 1 ${task1Words} / 150`;
  } else {
    const target = session?.taskKind === "task1" ? 150 : session?.taskKind === "paragraph" ? 80 : 250;
    writingDraftWordCount.textContent = `${draftWords} / ${target} 词`;
  }
  renderWritingLiveWordCounts();
}

function getWritingTextareaTarget(textarea) {
  if (textarea === writingStudioTask1Draft) return 150;
  if (textarea !== writingStudioDraft) return 0;
  const taskKind = getWritingStudioSession()?.taskKind;
  if (taskKind === "task1") return 150;
  if (taskKind === "paragraph") return 80;
  return 250;
}

function renderWritingLiveWordCounts() {
  writingStudioSession?.querySelectorAll("textarea").forEach((textarea) => {
    const counter = textarea.parentElement?.querySelector(`.writing-live-word-count[data-for="${textarea.id}"]`);
    if (!counter) return;
    const words = countWritingWords(textarea.value);
    const target = getWritingTextareaTarget(textarea);
    counter.classList.toggle("has-target", Boolean(target));
    counter.classList.toggle("is-complete", Boolean(target) && words >= target);
    counter.textContent = target
      ? `${words} 词 · 目标 ${target} 词${words >= target ? " · 已达标" : ` · 还差 ${target - words} 词`}`
      : `${words} 词`;
  });
}

function initialiseWritingLiveWordCounts() {
  writingStudioSession?.querySelectorAll("textarea[id]").forEach((textarea) => {
    if (textarea.parentElement?.querySelector(`.writing-live-word-count[data-for="${textarea.id}"]`)) return;
    const counter = document.createElement("span");
    counter.className = "writing-live-word-count";
    counter.dataset.for = textarea.id;
    counter.id = `${textarea.id}WordCount`;
    counter.setAttribute("aria-live", textarea.classList.contains("writing-draft-editor") ? "polite" : "off");
    textarea.insertAdjacentElement("afterend", counter);
    const describedBy = textarea.getAttribute("aria-describedby");
    textarea.setAttribute("aria-describedby", [describedBy, counter.id].filter(Boolean).join(" "));
  });
  renderWritingLiveWordCounts();
}

async function copyWritingText(text, statusElement, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  if (statusElement) statusElement.textContent = successMessage;
}

function buildWritingFeedbackPrompt(session) {
  const draftText = session.mission === "mock"
    ? `Task 1答案：\n${session.task1Draft}\n\nTask 2答案：\n${session.draft}`
    : session.draft;
  const promptContext = String(session.prompt || "").trim()
    ? `题目文字：\n${session.prompt}`
    : "完整题目请查看我与这段请求一起上传的截图。请先准确读取截图中的题目要求，再评估文章。";
  return `你是严格但克制的IELTS Academic Writing反馈教练。依据IELTS官方四项标准分析，不代写。\n\n目标分数：${session.targetBand}\n训练类型：${session.mission === "mock" ? "完整写作模考" : session.taskKind}\n${promptContext}\n\n我的一句思路（可能为空）：${session.quickPlan || "未填写"}\n写作用时：${Math.round(getWritingStudioElapsed(session) / 60)}分钟\n文章：\n${draftText}\n\n要求：\n1. 必须引用我的原句作为证据。\n2. 分别估计TR/TA、CC、LR、GRA和overall，并给出confidence。\n3. 只列最影响分数的三个瓶颈。\n4. 对句子只做最小必要修改，不替换我的核心观点，不重写全文。\n5. 给出一个明确的段落重写任务。\n6. 只输出合法JSON，不要Markdown代码围栏。\n\nJSON格式：\n{"bands":{"TR":0,"CC":0,"LR":0,"GRA":0,"overall":0},"confidence":"low|medium|high","coverage":[{"requirement":"","status":"met|partial|missing","evidence":""}],"top_bottlenecks":[{"criterion":"TR|CC|LR|GRA","issue":"","evidence":"","action":""}],"sentence_issues":[{"type":"","original":"","minimal_fix":"","reason":""}],"rewrite_assignment":{"focus":"","original":"","instruction":""}}`;
}

function parseWritingFeedback(value) {
  const text = String(value || "").trim();
  if (!text) return null;
  const withoutFence = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
  const start = withoutFence.indexOf("{");
  const end = withoutFence.lastIndexOf("}");
  if (start === -1 || end <= start) return { raw: text };
  try {
    return JSON.parse(withoutFence.slice(start, end + 1));
  } catch {
    return { raw: text };
  }
}

function createWritingErrorsFromFeedback(session) {
  const issues = Array.isArray(session.feedback?.sentence_issues) ? session.feedback.sentence_issues : [];
  const bottlenecks = Array.isArray(session.feedback?.top_bottlenecks) ? session.feedback.top_bottlenecks : [];
  const sourceItems = issues.length
    ? issues.map((issue) => ({
        criterion: issue.type || "语言准确性",
        issue: issue.reason || issue.type || "需要修正",
        original: issue.original || "",
        correction: issue.minimal_fix || "",
      }))
    : bottlenecks.map((item) => ({
        criterion: item.criterion || "写作",
        issue: item.issue || "需要修正",
        original: item.evidence || "",
        correction: item.action || "",
      }));
  sourceItems.slice(0, 8).forEach((item) => {
    const duplicate = state.writingStudio.errors.find(
      (error) => !error.mastered && error.original === item.original && error.issue === item.issue,
    );
    if (duplicate) {
      duplicate.updatedAt = Date.now();
      duplicate.sessionId = session.id;
      return;
    }
    state.writingStudio.errors.push({
      id: createWritingStudioId("error"),
      sessionId: session.id,
      criterion: item.criterion,
      issue: item.issue,
      original: item.original,
      correction: item.correction,
      reviews: 0,
      mastered: false,
      dueAt: Date.now() + 24 * 60 * 60 * 1000,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  });
}

function importWritingStudioFeedback() {
  captureWritingStudioForm();
  const session = getWritingStudioSession();
  if (!session) return;
  session.feedback = parseWritingFeedback(session.feedbackInput);
  if (!session.feedback) {
    writingFeedbackCopyStatus.textContent = "请先粘贴AI反馈";
    return;
  }
  const assignment = session.feedback.rewrite_assignment || {};
  session.rewrite.brief = assignment.instruction || assignment.focus || "选择最影响分数的一段，按反馈进行定向重写。";
  session.rewrite.original = assignment.original || session.rewrite.original || session.draft.split(/\n\s*\n/)[0] || session.draft;
  createWritingErrorsFromFeedback(session);
  session.updatedAt = Date.now();
  fillWritingStudioForm(session);
  saveWritingStudioState();
  renderWritingStudioDashboard();
  writingFeedbackCopyStatus.textContent = session.feedback.raw ? "已保存文字反馈" : "已导入结构化反馈";
}

function renderWritingFeedbackSummary() {
  const session = getWritingStudioSession();
  const feedback = session?.feedback;
  if (!feedback) {
    writingFeedbackSummary.innerHTML = `<p class="writing-studio-empty">导入后会在这里显示四项分数、三个瓶颈和重写任务。</p>`;
    return;
  }
  if (feedback.raw) {
    writingFeedbackSummary.innerHTML = `<div class="writing-rewrite-brief">${escapeHtml(feedback.raw)}</div>`;
    return;
  }
  const bands = feedback.bands || {};
  const bandItems = ["TR", "CC", "LR", "GRA", "overall"];
  const bottlenecks = Array.isArray(feedback.top_bottlenecks) ? feedback.top_bottlenecks.slice(0, 3) : [];
  writingFeedbackSummary.innerHTML = `
    <div class="writing-feedback-bands">
      ${bandItems.map((key) => `<div><strong>${escapeHtml(String(bands[key] ?? "—"))}</strong><span>${key === "overall" ? "Overall" : key}</span></div>`).join("")}
    </div>
    <ol class="writing-feedback-list">
      ${bottlenecks.map((item) => `<li><strong>${escapeHtml(item.criterion || "问题")}</strong> ${escapeHtml(item.issue || "")}<br><small>${escapeHtml(item.action || "")}</small></li>`).join("") || "<li>反馈中没有结构化瓶颈。</li>"}
    </ol>`;
}

function renderWritingRewriteBrief() {
  const session = getWritingStudioSession();
  if (!session) return;
  writingRewriteBrief.textContent = session.rewrite.brief || "尚未导入反馈。你也可以手动选择一个最差段落进行重写。";
}

function saveWritingSelfReflectionError(session) {
  const issue = String(session.selfErrors || "").trim();
  if (!issue) return;
  const existing = state.writingStudio.errors.find(
    (error) => !error.mastered && error.sessionId === session.id && error.issue === issue,
  );
  if (existing) {
    existing.updatedAt = Date.now();
    return;
  }
  state.writingStudio.errors.push({
    id: createWritingStudioId("error"),
    sessionId: session.id,
    criterion: "本次重点",
    issue,
    original: "",
    correction: "下次写作前先回顾这一点。",
    reviews: 0,
    mastered: false,
    dueAt: Date.now() + 24 * 60 * 60 * 1000,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });
}

function calculateWritingStudioMetrics(session) {
  const checkCount = Object.values(session.checklist || {}).filter(Boolean).length;
  const bands = session.feedback?.bands || {};
  const coverage = Array.isArray(session.feedback?.coverage)
    ? Math.round((session.feedback.coverage.filter((item) => item.status === "met").length / Math.max(1, session.feedback.coverage.length)) * 100)
    : session.checklist.task
      ? 100
      : 0;
  const words = countWritingWords(session.draft) + countWritingWords(session.task1Draft);
  const errorCount = Array.isArray(session.feedback?.sentence_issues)
    ? session.feedback.sentence_issues.length
    : session.selfErrors.split("\n").filter(Boolean).length;
  return {
    coverage,
    position: session.checklist.structure ? 100 : 0,
    paragraph: session.checklist.structure ? 100 : 0,
    majorErrorsPer100: words ? Number(((errorCount / words) * 100).toFixed(1)) : 0,
    completedInTime: getWritingStudioElapsed(session) <= session.timeLimitSeconds,
    rewriteCompleted: Boolean(session.rewrite.resolved && session.rewrite.draft.trim()),
    checklistCompletion: Math.round((checkCount / 4) * 100),
    overallBand: Number(bands.overall) || 0,
  };
}

function completeWritingStudioSession() {
  captureWritingStudioForm();
  const session = getWritingStudioSession();
  if (!session) return;
  const checked = Object.values(session.checklist || {}).filter(Boolean).length;
  if (checked < 4 || !session.selfErrors.trim()) {
    writingAutosaveStatus.textContent = checked < 4
      ? "请完成四项快速确认"
      : "请记录本次最该改的一个问题";
    return;
  }
  pauseWritingStudioTimer();
  saveWritingSelfReflectionError(session);
  session.metrics = calculateWritingStudioMetrics(session);
  session.status = "complete";
  session.completedAt = Date.now();
  session.updatedAt = Date.now();
  state.writingStudio.sessions = [session, ...state.writingStudio.sessions.filter((item) => item.id !== session.id)].slice(0, 100);
  state.writingStudio.currentSession = null;
  saveWritingStudioState();
  writingStudio.classList.remove("session-active");
  writingStudioSession.hidden = true;
  writingStudioDashboard.hidden = false;
  renderWritingStudioDashboard();
  void saveTraining(false);
}

function reviewWritingStudioError(errorId) {
  const error = state.writingStudio.errors.find((item) => item.id === errorId);
  if (!error) return;
  const intervals = [1, 3, 7, 14];
  error.reviews = Number(error.reviews || 0) + 1;
  error.mastered = error.reviews >= intervals.length;
  const days = intervals[Math.min(error.reviews, intervals.length - 1)];
  error.dueAt = Date.now() + days * 24 * 60 * 60 * 1000;
  error.updatedAt = Date.now();
  saveWritingStudioState();
  renderWritingStudioDashboard();
}

function removeWritingStudioError(errorId) {
  state.writingStudio.errors = state.writingStudio.errors.filter((item) => item.id !== errorId);
  saveWritingStudioState();
  renderWritingStudioDashboard();
}

function renderWritingStudioDashboard() {
  const studio = state.writingStudio;
  if (!studio || !writingStudioDashboard) return;
  const sessions = studio.sessions.filter((session) => session.status === "complete");
  const active = studio.currentSession;
  writingStudioResumeButton.hidden = !active;
  writingStudioDiscardButton.hidden = !active;
  if (active) writingStudioResumeButton.textContent = `继续：${active.label}`;
  const dueErrors = studio.errors.filter((error) => !error.mastered && Number(error.dueAt || 0) <= Date.now());
  const rewriteSession = active?.stage === "review" ? active : null;
  writingDueRewriteButton.hidden = !rewriteSession && dueErrors.length === 0;
  if (!writingDueRewriteButton.hidden) {
    writingDueRewriteTitle.textContent = rewriteSession
      ? `${rewriteSession.label}可继续复盘`
      : `${dueErrors.length}个高频错误到期`;
    writingDueRewriteButton.dataset.sessionId = rewriteSession?.status === "complete" ? rewriteSession.id : "";
  }

  writingStudioHistory.innerHTML = sessions.length
    ? sessions.slice(0, 6).map((session) => `
        <article class="writing-history-item">
          <div><strong>${escapeHtml(session.label)}</strong><span>${escapeHtml(session.quickPlan || session.selfErrors || session.promptImage?.name || "截图题目")}</span><small>${formatWritingStudioDate(session.completedAt)} · ${countWritingWords(session.draft) + countWritingWords(session.task1Draft)} words${session.metrics?.overallBand ? ` · AI ${session.metrics.overallBand}` : ""}</small></div>
          <div class="writing-history-actions"><button type="button" data-writing-open-session="${escapeHtml(session.id)}">查看 / 复盘</button><button type="button" data-writing-delete-session="${escapeHtml(session.id)}">删除</button></div>
        </article>`).join("")
    : `<p class="writing-studio-empty">完成第一轮后，这里会显示每次的限时结果、重点问题和 AI 反馈。</p>`;

  const visibleErrors = studio.errors.filter((error) => !error.mastered).slice(0, 8);
  writingStudioErrors.innerHTML = visibleErrors.length
    ? visibleErrors.map((error) => `
        <article class="writing-error-item">
          <div><strong>${escapeHtml(error.criterion || "写作错误")}</strong><span>${escapeHtml(error.issue || error.original || "待复习")}</span><small>${error.reviews || 0}/4次 · ${Number(error.dueAt || 0) <= Date.now() ? "现在复习" : `${formatWritingStudioDate(error.dueAt)}到期`}</small></div>
          <div class="writing-error-actions"><button type="button" data-writing-review-error="${escapeHtml(error.id)}">已复习</button><button type="button" data-writing-remove-error="${escapeHtml(error.id)}">移除</button></div>
        </article>`).join("")
    : `<p class="writing-studio-empty">每次复盘记录的重点问题，以及 AI 反馈中的错误，会进入这里按 1、3、7、14 天复习。</p>`;
}

function mountWritingStudio() {
  if (!writingStudio) return;
  initialiseWritingSessionSplitter();
  initialiseWritingLiveWordCounts();
  writingStudioTargetBand.value = state.writingStudio.settings.targetBand || "7";
  renderWritingStudioDashboard();
  writingStudioMissionButtons.forEach((button) => {
    button.addEventListener("click", () => startWritingStudioMission(button.dataset.writingStudioMission));
  });
  writingTemplateOpenButton?.addEventListener("click", openWritingTemplateLibrary);
  writingSessionTemplateButton?.addEventListener("click", openWritingTemplateLibrary);
  writingTemplateCloseButton?.addEventListener("click", closeWritingTemplateLibrary);
  writingTemplateCaseCloseButton?.addEventListener("click", closeWritingTemplateCaseView);
  writingTemplateAddButton?.addEventListener("click", () => {
    writingTemplateForm.dataset.editingId = "";
    writingTemplateFormSubmit.textContent = "保存模板";
    writingTemplateForm.reset();
    resetWritingTemplateExamplePromptImage();
    writingTemplateForm.hidden = !writingTemplateForm.hidden;
    if (!writingTemplateForm.hidden) {
      writingTemplateFormKind.value = writingTemplateKind;
      writingTemplateFormTitle.focus();
    }
  });
  writingTemplateFormCancel?.addEventListener("click", () => {
    writingTemplateForm.reset();
    resetWritingTemplateExamplePromptImage();
    writingTemplateForm.dataset.editingId = "";
    writingTemplateFormSubmit.textContent = "保存模板";
    writingTemplateForm.hidden = true;
  });
  writingTemplateForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    saveCustomWritingTemplate();
  });
  writingTemplateExamplePromptImageInput?.addEventListener("change", () => {
    void handleWritingTemplateExamplePromptImageUpload(writingTemplateExamplePromptImageInput.files?.[0]);
  });
  writingTemplateExamplePromptImageRemove?.addEventListener("click", () => resetWritingTemplateExamplePromptImage());
  writingTemplateTabs?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-writing-template-kind]");
    if (!button) return;
    writingTemplateKind = button.dataset.writingTemplateKind === "task2" ? "task2" : "task1";
    const firstTemplate = getWritingTemplatesForKind(writingTemplateKind)[0];
    if (firstTemplate) state.writingStudio.settings.selectedTemplateId = firstTemplate.id;
    renderWritingTemplateLibrary();
  });
  writingTemplateList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-writing-template-id]");
    if (!button) return;
    state.writingStudio.settings.selectedTemplateId = button.dataset.writingTemplateId;
    renderWritingTemplateLibrary();
  });
  writingTemplateDetail?.addEventListener("click", (event) => {
    const caseButton = event.target.closest("[data-writing-template-case]");
    if (caseButton) {
      openWritingTemplateCaseView(caseButton.dataset.writingTemplateCase);
      return;
    }
    const editButton = event.target.closest("[data-writing-template-edit]");
    if (editButton) {
      editWritingTemplate(editButton.dataset.writingTemplateEdit);
      return;
    }
    const deleteButton = event.target.closest("[data-writing-template-delete]");
    if (deleteButton) deleteWritingTemplate(deleteButton.dataset.writingTemplateDelete);
  });
  writingStudioResumeButton.addEventListener("click", () => openWritingStudioSession());
  writingStudioDiscardButton.addEventListener("click", () => {
    pauseWritingStudioTimer();
    state.writingStudio.currentSession = null;
    writingStudio.classList.remove("session-active");
    saveWritingStudioState();
    renderWritingStudioDashboard();
  });
  writingSessionCloseButton.addEventListener("click", closeWritingStudioSession);
  writingSaveProgressButton.addEventListener("click", async () => {
    captureWritingStudioForm();
    const saved = await saveTraining(false);
    writingAutosaveStatus.textContent =
      window.location.protocol === "file:" || !saved ? "已保存到当前浏览器" : "已保存到项目文件";
  });
  writingStagePreviousButton.addEventListener("click", () => {
    const session = getWritingStudioSession();
    const index = writingStudioStages.indexOf(session?.stage);
    if (index > 0) setWritingStudioStage(writingStudioStages[index - 1], { force: true });
  });
  writingStageNextButton.addEventListener("click", () => {
    const session = getWritingStudioSession();
    const index = writingStudioStages.indexOf(session?.stage);
    if (index >= 0 && index < writingStudioStages.length - 1) setWritingStudioStage(writingStudioStages[index + 1]);
  });
  writingStudioStageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const session = getWritingStudioSession();
      const requested = button.dataset.writingStudioStage;
      if (writingStudioStages.indexOf(requested) <= writingStudioStages.indexOf(session?.stage)) {
        setWritingStudioStage(requested, { force: true });
      }
    });
  });
  writingStudioTaskKind.addEventListener("change", () => {
    const session = getWritingStudioSession();
    if (!session) return;
    applyWritingStudioSessionType(session, writingStudioTaskKind.value, true);
    writingStudioTimeLimit.value = String(session.timeLimitSeconds);
    renderWritingStudioTaskFields();
    renderWritingDraftCount();
    captureWritingStudioForm();
  });
  writingStudioTimeLimit.addEventListener("change", () => {
    const session = getWritingStudioSession();
    if (!session) return;
    session.timeLimitSeconds = Number(writingStudioTimeLimit.value) || session.timeLimitSeconds;
    renderWritingStudioTaskFields();
    renderWritingStudioTimer();
    captureWritingStudioForm();
  });
  writingStudioTargetBand.addEventListener("change", () => {
    state.writingStudio.settings.targetBand = writingStudioTargetBand.value;
    const session = getWritingStudioSession();
    if (session) session.targetBand = writingStudioTargetBand.value;
    saveWritingStudioState();
    void saveTraining(false);
  });
  writingPromptImageInput.addEventListener("change", () => {
    const [file] = writingPromptImageInput.files || [];
    void handleWritingPromptImageUpload(file);
  });
  writingPromptImageToggle.addEventListener("click", () => {
    openWritingPromptImageDialog();
  });
  writingPromptReferenceImagePreview.addEventListener("click", openWritingPromptImageDialog);
  writingPromptUploadImage.addEventListener("click", openWritingPromptImageDialog);
  writingPromptImageDialogClose.addEventListener("click", closeWritingPromptImageDialog);
  writingPromptImageDialog.addEventListener("click", (event) => {
    if (event.target === writingPromptImageDialog) closeWritingPromptImageDialog();
  });
  writingPromptZoomControl.addEventListener("input", () => setWritingPromptImageZoom(writingPromptZoomControl.value));
  writingPromptZoomOutButton.addEventListener("click", () => {
    setWritingPromptImageZoom(Number(writingPromptZoomControl.value) - 0.25);
  });
  writingPromptZoomInButton.addEventListener("click", () => {
    setWritingPromptImageZoom(Number(writingPromptZoomControl.value) + 0.25);
  });
  writingPromptRemoveImageButton.addEventListener("click", () => {
    const session = getWritingStudioSession();
    if (!session?.promptImage || !window.confirm("移除当前题目截图？")) return;
    session.promptImage = null;
    session.promptImageExpanded = false;
    session.updatedAt = Date.now();
    renderWritingPromptReference();
    saveWritingStudioState();
    void saveTraining(false);
  });
  const persistWritingStudioInput = () => {
    captureWritingStudioForm();
    renderWritingDraftCount();
  };
  writingStudioSession.addEventListener("input", persistWritingStudioInput);
  writingStudioSession.addEventListener("change", persistWritingStudioInput);
  writingCopyFeedbackPromptButton.addEventListener("click", () => {
    captureWritingStudioForm();
    void copyWritingText(buildWritingFeedbackPrompt(getWritingStudioSession()), writingFeedbackCopyStatus, "完整反馈请求已复制");
  });
  writingImportFeedbackButton.addEventListener("click", importWritingStudioFeedback);
  writingCompleteSessionButton.addEventListener("click", completeWritingStudioSession);
  writingLegacyDrillButton.addEventListener("click", openWritingLegacyDrill);
  writingLegacyCloseButton.addEventListener("click", closeWritingLegacyDrill);
  writingDueRewriteButton.addEventListener("click", () => {
    const sessionId = writingDueRewriteButton.dataset.sessionId;
    if (sessionId) {
      openWritingStudioSession(sessionId);
      setWritingStudioStage("review", { force: true });
    } else if (state.writingStudio.currentSession?.stage === "review") {
      openWritingStudioSession();
      setWritingStudioStage("review", { force: true });
    } else {
      writingStudioErrors.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  writingStudioHistory.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-writing-open-session]");
    const deleteButton = event.target.closest("[data-writing-delete-session]");
    if (openButton) {
      openWritingStudioSession(openButton.dataset.writingOpenSession);
      setWritingStudioStage("review", { force: true });
    }
    if (deleteButton) {
      state.writingStudio.sessions = state.writingStudio.sessions.filter((session) => session.id !== deleteButton.dataset.writingDeleteSession);
      saveWritingStudioState();
      renderWritingStudioDashboard();
    }
  });
  writingStudioErrors.addEventListener("click", (event) => {
    const reviewButton = event.target.closest("[data-writing-review-error]");
    const removeButton = event.target.closest("[data-writing-remove-error]");
    if (reviewButton) reviewWritingStudioError(reviewButton.dataset.writingReviewError);
    if (removeButton) removeWritingStudioError(removeButton.dataset.writingRemoveError);
  });
}

function renderShortcutSettings() {
  advanceShortcut.value = state.shortcutSettings.advance;
  replayShortcut.value = state.shortcutSettings.replay;
  favoriteShortcut.value = state.shortcutSettings.favorite;
  revealShortcut.value = state.shortcutSettings.reveal;
  retryShortcut.value = state.shortcutSettings.retry;
  shortcutStatus.textContent = `${shortcutLabels[state.shortcutSettings.advance]} 检查/下一题 · ${
    shortcutLabels[state.shortcutSettings.replay]
  } 重听 · ${shortcutLabels[state.shortcutSettings.favorite]} 收藏 · ${
    shortcutLabels[state.shortcutSettings.reveal]
  } 显示答案 · ${shortcutLabels[state.shortcutSettings.retry]} 再练`;
}

function updateShortcutSetting(action, code) {
  if (!(action in defaultShortcutSettings) || !(code in shortcutLabels)) return;
  const previous = state.shortcutSettings[action];

  Object.keys(state.shortcutSettings).forEach((key) => {
    if (key !== action && state.shortcutSettings[key] === code) {
      state.shortcutSettings[key] = previous;
    }
  });

  state.shortcutSettings[action] = code;
  state.shortcutSettings = normaliseShortcutSettings(state.shortcutSettings);
  saveShortcutSettings();
  renderShortcutSettings();
  void saveTraining(false);
}

function isEditableShortcutTarget(target) {
  return Boolean(target?.closest?.("input, textarea, select, [contenteditable='true']"));
}

function shouldIgnoreGlobalShortcut(event) {
  if (event.ctrlKey || event.altKey || event.metaKey) return true;
  if (!isEditableShortcutTarget(event.target)) return false;

  const isAnsweredQuizInput = event.target === answerInput && answerInput.disabled && state.answered;
  return !isAnsweredQuizInput;
}

function shortcutMatches(event, action) {
  return event.code === state.shortcutSettings[action];
}

function getLastResultForCurrent() {
  const current = state.deck[state.currentIndex];
  if (!current) return null;
  const key = normaliseKey(current.word);
  return [...state.results].reverse().find((result) => normaliseKey(result.word) === key) || null;
}

function refreshCurrentReviewAfterFavoriteChange() {
  const current = state.deck[state.currentIndex];
  const lastResult = getLastResultForCurrent();
  if (current && state.answered && lastResult) {
    renderAnswerReview(current, lastResult.response, lastResult.correct, lastResult.mode, lastResult.revealed);
  }
}

function toggleCurrentFavoriteShortcut() {
  const current = state.deck[state.currentIndex];
  if (!current || !bookModes.includes(state.mode)) return false;

  const key = normaliseKey(current.word);
  if (!key) return false;

  if (state.favoriteBook[state.mode]?.[key]) {
    removeFavoriteBookItem(state.mode, key);
    refreshCurrentReviewAfterFavoriteChange();
    saveStatus.textContent = `已将 ${current.word} 移出收藏本。`;
    void saveTraining(false);
    return true;
  }

  const lastResult = getLastResultForCurrent();
  if (state.correctBook[state.mode]?.[key]) {
    moveCorrectItemToFavoriteBook(state.mode, key, false);
  } else {
    addEntryToFavoriteBook(state.mode, current, lastResult?.response || "");
  }

  refreshCurrentReviewAfterFavoriteChange();
  saveStatus.textContent = `已将 ${current.word} 加入收藏本。`;
  void saveTraining(false);
  return true;
}

function handleAdvanceShortcut() {
  if (state.mode === "dictation" && !state.answered && !checkButton.disabled) {
    checkAnswer();
    return true;
  }

  if (state.answered && !nextButton.disabled) {
    nextRound();
    return true;
  }

  return false;
}

function handleRevealShortcut() {
  if (state.mode === "dictation" && !state.answered && !revealAnswerButton.disabled) {
    revealAnswer();
    return true;
  }

  return false;
}

function handleRetryShortcut() {
  const lastResult = getLastResultForCurrent();
  if (state.mode === "dictation" && state.answered && lastResult?.revealed) {
    retryCurrentWord();
    return true;
  }

  return false;
}

function handleGlobalShortcut(event) {
  if (shouldIgnoreGlobalShortcut(event)) return;
  if (["settings", "listeningMistakes", "readingMistakes"].includes(state.activeSurface)) return;
  const inWritingPanel = Boolean(event.target?.closest?.(".writing-panel")) || state.activeSurface === "writing";

  if (shortcutMatches(event, "retry")) {
    if (handleRetryShortcut()) event.preventDefault();
    return;
  }

  if (shortcutMatches(event, "reveal")) {
    if (handleRevealShortcut()) event.preventDefault();
    return;
  }

  if (shortcutMatches(event, "replay")) {
    if (inWritingPanel && state.writingCurrent) {
      event.preventDefault();
      void speakCurrentWritingTarget();
      return;
    }

    if (!listenButton.disabled) {
      event.preventDefault();
      if (state.answered) {
        void speakCurrentWord();
      } else {
        speakCurrentRound(true);
      }
    }
    return;
  }

  if (shortcutMatches(event, "favorite")) {
    if (inWritingPanel && state.writingCurrent) {
      event.preventDefault();
      toggleWritingFavorite(state.writingCurrent);
      return;
    }

    if (toggleCurrentFavoriteShortcut()) event.preventDefault();
    return;
  }

  if (shortcutMatches(event, "advance")) {
    if (handleAdvanceShortcut()) event.preventDefault();
  }
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
    if (radio.checked) {
      setPrimarySurface("quiz", true);
      switchModeInput(radio.value);
    }
  });
});
sidebarToggle.addEventListener("click", () => setSidebarCollapsed(!state.sidebarCollapsed));
sidebarSearchButton.addEventListener("click", () => {
  setSidebarCollapsed(false);
  favoritesDrawer.open = true;
  bookSearchInput.focus();
});
sidebarRailModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const radio = modeRadios.find((item) => item.value === button.dataset.sidebarRailMode);
    if (!radio) return;
    radio.checked = true;
    radio.dispatchEvent(new Event("change", { bubbles: true }));
  });
});
sidebarRailSurfaceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.sidebarRailSurface === "writing") writingModeNavButton.click();
    if (button.dataset.sidebarRailSurface === "settings") settingsNavButton.click();
  });
});
sidebarRailFavoritesButton.addEventListener("click", () => sidebarSearchButton.click());
writingModeNavButton.addEventListener("click", () => {
  setPrimarySurface("writing", true);
  if (window.matchMedia("(max-width: 920px)").matches) setSidebarCollapsed(true);
});
listeningMistakeNavButton.addEventListener("click", () => {
  setPrimarySurface("listeningMistakes", true);
  renderListeningMistakeLibrary();
});
readingMistakeNavButton.addEventListener("click", () => {
  setPrimarySurface("readingMistakes", true);
  renderReadingMistakeLibrary();
});
settingsNavButton.addEventListener("click", () => setPrimarySurface("settings", true));
addListeningMistakeButton.addEventListener("click", () => openListeningMistakeForm());
listeningMistakeSearch.addEventListener("input", () => {
  state.listeningMistakeQuery = listeningMistakeSearch.value;
  renderListeningMistakeList();
});
listeningMistakeErrorFilter.addEventListener("change", () => {
  state.listeningMistakeErrorFilter = listeningMistakeErrorFilter.value;
  renderListeningMistakeList();
});
listeningMistakeStatusFilter.addEventListener("change", () => {
  state.listeningMistakeStatusFilter = listeningMistakeStatusFilter.value;
  renderListeningMistakeList();
});
listeningMistakeMethodFilter.addEventListener("change", () => {
  state.listeningMistakeMethodFilter = listeningMistakeMethodFilter.value;
  renderListeningMistakeList();
});
listeningMistakeList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-listening-mistake-open]");
  if (!button) return;
  state.listeningMistakeSelectedId = decodeURIComponent(button.dataset.listeningMistakeOpen);
  renderListeningMistakeList();
  renderListeningMistakeDetail();
});
listeningMistakeDetail.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-listening-mistake-edit]");
  if (editButton) {
    const id = decodeURIComponent(editButton.dataset.listeningMistakeEdit);
    const item = state.listeningMistakes.find((entry) => entry.id === id);
    if (item) openListeningMistakeForm(item);
    return;
  }

  const deleteButton = event.target.closest("[data-listening-mistake-delete]");
  if (deleteButton) {
    deleteListeningMistake(decodeURIComponent(deleteButton.dataset.listeningMistakeDelete));
    return;
  }

  const reviewButton = event.target.closest("[data-listening-mistake-review]");
  if (reviewButton) {
    completeListeningMistakeReview(decodeURIComponent(reviewButton.dataset.listeningMistakeReview));
    return;
  }

  const speakButton = event.target.closest("[data-listening-mistake-speak]");
  if (speakButton) speakListeningMistakeTranscript(decodeURIComponent(speakButton.dataset.listeningMistakeSpeak));
});
listeningMistakeDetail.addEventListener("change", (event) => {
  const select = event.target.closest("[data-listening-mistake-status]");
  if (!select) return;
  updateListeningMistakeStatus(decodeURIComponent(select.dataset.listeningMistakeStatus), select.value);
});
listeningMistakeForm.addEventListener("submit", submitListeningMistakeForm);
listeningMistakeDialogClose.addEventListener("click", closeListeningMistakeForm);
listeningMistakeCancel.addEventListener("click", closeListeningMistakeForm);
listeningMistakeDialog.addEventListener("click", (event) => {
  if (event.target === listeningMistakeDialog) closeListeningMistakeForm();
});
listeningMistakeForm.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-listening-form-image-remove]");
  if (!removeButton) return;
  const kind = removeButton.dataset.listeningFormImageRemove;
  if (kind === "question") {
    setListeningMistakeFormImage("question");
    listeningQuestionOcrStatus.textContent = "已移除题目截图。";
  }
  if (kind === "transcript") {
    listeningTranscriptOcrToken += 1;
    listeningTranscriptOcrInProgress = false;
    setListeningMistakeFormImage("transcript");
    listeningTranscriptText.value = "";
    listeningTranscriptOcrStatus.textContent = "已移除 Transcript 截图。";
  }
});
listeningQuestionImage.addEventListener("change", () => {
  void handleListeningMistakeImage(listeningQuestionImage.files?.[0], "question");
});
listeningTranscriptImage.addEventListener("change", () => {
  void handleListeningMistakeImage(listeningTranscriptImage.files?.[0], "transcript");
});
addReadingMistakeButton.addEventListener("click", () => openReadingMistakeForm());
readingMistakeSearch.addEventListener("input", () => {
  state.readingMistakeQuery = readingMistakeSearch.value;
  renderReadingMistakeList();
});
readingMistakeQuestionFilter.addEventListener("change", () => {
  state.readingMistakeQuestionFilter = readingMistakeQuestionFilter.value;
  renderReadingMistakeList();
});
readingMistakeErrorFilter.addEventListener("change", () => {
  state.readingMistakeErrorFilter = readingMistakeErrorFilter.value;
  renderReadingMistakeList();
});
readingMistakeStatusFilter.addEventListener("change", () => {
  state.readingMistakeStatusFilter = readingMistakeStatusFilter.value;
  renderReadingMistakeList();
});
readingMistakeErrorType.addEventListener("change", syncReadingMistakeCustomErrorField);
readingMistakeList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-reading-mistake-open]");
  if (!button) return;
  state.readingMistakeSelectedId = decodeURIComponent(button.dataset.readingMistakeOpen);
  renderReadingMistakeList();
  renderReadingMistakeDetail();
});
readingMistakeDetail.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-reading-mistake-edit]");
  if (editButton) {
    const id = decodeURIComponent(editButton.dataset.readingMistakeEdit);
    const item = state.readingMistakes.find((entry) => entry.id === id);
    if (item) openReadingMistakeForm(item);
    return;
  }
  const deleteButton = event.target.closest("[data-reading-mistake-delete]");
  if (deleteButton) {
    void deleteReadingMistake(decodeURIComponent(deleteButton.dataset.readingMistakeDelete));
    return;
  }
  const reviewButton = event.target.closest("[data-reading-mistake-review]");
  if (reviewButton) completeReadingMistakeReview(decodeURIComponent(reviewButton.dataset.readingMistakeReview));
});
readingMistakeDetail.addEventListener("change", (event) => {
  const select = event.target.closest("[data-reading-mistake-status]");
  if (!select) return;
  updateReadingMistakeStatus(decodeURIComponent(select.dataset.readingMistakeStatus), select.value);
});
readingMistakeForm.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-reading-form-image-remove]");
  if (!removeButton) return;
  removeReadingFormImage(
    removeButton.dataset.readingFormImageRemove,
    decodeURIComponent(removeButton.dataset.readingFormImageId || ""),
  );
});
readingMistakeForm.addEventListener("submit", submitReadingMistakeForm);
readingMistakeDialogClose.addEventListener("click", closeReadingMistakeForm);
readingMistakeCancel.addEventListener("click", closeReadingMistakeForm);
readingMistakeDialog.addEventListener("click", (event) => {
  if (event.target === readingMistakeDialog) closeReadingMistakeForm();
});
readingQuestionImage.addEventListener("change", () => {
  void handleReadingImageSelection(readingQuestionImage.files?.[0], "question");
});
readingEvidenceImage.addEventListener("change", () => {
  void handleReadingImageSelection(readingEvidenceImage.files?.[0], "evidence");
});
imagePasteZones.forEach((zone) => {
  zone.addEventListener("paste", (event) => {
    const file = getPastedImageFile(event.clipboardData);
    if (!file) return;
    event.preventDefault();
    processClipboardImage(zone.dataset.imagePasteZone, file);
  });
  zone.addEventListener("pointerdown", (event) => {
    if (!event.target.closest("button, input, textarea, select, label, a")) zone.focus();
  });
});
clipboardImageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    void pasteImageFromClipboard(button.dataset.clipboardImage, button);
  });
});
removeReadingQuestionImage.addEventListener("click", () => removeReadingFormImage("question"));
removeReadingEvidenceImage.addEventListener("click", () => removeReadingFormImage("evidence"));
bookTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.bookMode = button.dataset.bookTab;
    renderFavoriteBook();
  });
});
bookList.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-open-word-detail]");
  if (detailButton) {
    openWordDetail(detailButton.dataset.detailMode, detailButton.dataset.detailKey, detailButton.dataset.detailSource);
    return;
  }

  const button = event.target.closest("[data-remove-book]");
  if (!button) return;
  removeFavoriteBookItem(state.bookMode, button.dataset.removeBook);
});
bookPracticeReviewButton.addEventListener("click", () => {
  void startFavoriteBookPractice(getFavoriteReviewItems(state.bookMode), state.bookMode);
});
bookListReviewButton.addEventListener("click", startFavoriteBookReview);
favoriteReviewClose.addEventListener("click", closeFavoriteBookReview);
favoriteModePracticeButton.addEventListener("click", () => {
  void startFavoriteBookPractice(getSortedFavoriteReviewItems(), state.favoriteReviewMode);
});
favoriteListReviewSearch.addEventListener("input", () => {
  state.favoriteReviewQuery = favoriteListReviewSearch.value;
  renderFavoriteReviewList();
});
favoriteListReviewSort.addEventListener("change", () => {
  state.favoriteReviewSort = favoriteListReviewSort.value;
  renderFavoriteReviewList();
});
favoriteListLayoutButtons.forEach((button) => {
  button.addEventListener("click", () => setFavoriteReviewLayout(button.dataset.favoriteListLayout));
});
favoriteListReviewRows.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-favorite-list-remove]");
  if (removeButton) {
    removeFavoriteReviewWord(decodeURIComponent(removeButton.dataset.favoriteListRemove));
    return;
  }

  const speakButton = event.target.closest("[data-favorite-list-speak]");
  if (speakButton) {
    void speakFavoriteListWord(decodeURIComponent(speakButton.dataset.favoriteListSpeak), speakButton);
    return;
  }

  const revealButton = event.target.closest("[data-favorite-list-reveal]");
  if (revealButton) toggleFavoriteReviewWord(decodeURIComponent(revealButton.dataset.favoriteListReveal));
});
exportDataButton.addEventListener("click", exportTrainingData);
importDataButton.addEventListener("click", importTrainingData);
voiceSelect.addEventListener("change", () => {
  saveSpeechSettings();
  updateVoiceStatus(getSelectedVoice());
});
rateControl.addEventListener("input", saveSpeechSettings);
speechStyle.addEventListener("change", () => {
  saveSpeechSettings();
  updateVoiceStatus(getSelectedVoice());
});
intonationControl.addEventListener("input", saveSpeechSettings);
favoriteReviewAutoSpeak.addEventListener("change", saveSpeechSettings);
speechPreviewButton.addEventListener("click", () => {
  void previewSpeechStyle();
});
startButton.addEventListener("click", startQuiz);
saveTrainingButton.addEventListener("click", () => saveTraining(true));
cleanKnownButton.addEventListener("click", cleanKnownWordsFromInput);
sampleButton.addEventListener("click", loadSampleWords);
listenButton.addEventListener("click", () => speakCurrentRound(true));
nextButton.addEventListener("click", nextRound);
revealAnswerButton.addEventListener("click", revealAnswer);
scoreBox.addEventListener("click", renderCorrectAnswers);
autoSpeak.addEventListener("change", updateActionButtons);
advanceShortcut.addEventListener("change", () => updateShortcutSetting("advance", advanceShortcut.value));
replayShortcut.addEventListener("change", () => updateShortcutSetting("replay", replayShortcut.value));
favoriteShortcut.addEventListener("change", () => updateShortcutSetting("favorite", favoriteShortcut.value));
revealShortcut.addEventListener("change", () => updateShortcutSetting("reveal", revealShortcut.value));
retryShortcut.addEventListener("change", () => updateShortcutSetting("retry", retryShortcut.value));
wordInput.addEventListener("input", saveCurrentModeInput);
answerInput.addEventListener("input", updateActionButtons);
answerInput.addEventListener("keydown", (event) => {
  if (!shortcutMatches(event, "reveal")) return;
  if (handleRevealShortcut()) event.preventDefault();
});
bookSearchInput.addEventListener("input", () => {
  state.bookSearch = bookSearchInput.value;
  renderFavoriteBook();
});
document.addEventListener(
  "pointerdown",
  (event) => {
    if (event.target?.closest?.(".writing-panel")) {
      setPrimarySurface("writing");
    } else if (event.target?.closest?.(".listening-mistake-panel")) {
      setPrimarySurface("listeningMistakes");
    } else if (event.target?.closest?.(".reading-mistake-panel")) {
      setPrimarySurface("readingMistakes");
    } else if (event.target?.closest?.(".settings-panel")) {
      setPrimarySurface("settings");
    } else if (event.target?.closest?.(".quiz-panel")) {
      setPrimarySurface("quiz");
    }
  },
  true,
);
document.addEventListener(
  "focusin",
  (event) => {
    if (event.target?.closest?.(".writing-panel")) {
      setPrimarySurface("writing");
    } else if (event.target?.closest?.(".listening-mistake-panel")) {
      setPrimarySurface("listeningMistakes");
    } else if (event.target?.closest?.(".reading-mistake-panel")) {
      setPrimarySurface("readingMistakes");
    } else if (event.target?.closest?.(".settings-panel")) {
      setPrimarySurface("settings");
    } else if (event.target?.closest?.(".quiz-panel")) {
      setPrimarySurface("quiz");
    }
  },
  true,
);
wordDetailClose.addEventListener("click", closeWordDetail);
wordDetailDialog.addEventListener("click", (event) => {
  if (event.target === wordDetailDialog) closeWordDetail();
});
wordDetailSpeakWord.addEventListener("click", () => speakWordDetail("word"));
wordDetailSpeakExample.addEventListener("click", () => speakWordDetail("example"));
writingStartButton.addEventListener("click", () => startWritingPractice(false));
writingAllButton.addEventListener("click", startWritingAllPractice);
writingReviewButton.addEventListener("click", () => startWritingPractice(true));
writingPackSelect.addEventListener("change", () => {
  state.writingPackId = writingPackSelect.value;
  if (!state.writingReviewing) {
    state.writingChainIndex = 0;
    renderWritingCard();
  }
  void saveTraining(false);
});
writingPhaseButtons.forEach((button) => {
  button.addEventListener("click", () => setWritingPhase(button.dataset.writingPhase));
});
writingBookTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.writingBookMode = button.dataset.writingBookTab === "favorites" ? "favorites" : "mistakes";
    renderWritingMistakeBook();
  });
});
writingSpeakButton.addEventListener("click", () => {
  void speakCurrentWritingTarget();
});
writingFavoriteButton.addEventListener("click", () => toggleWritingFavorite(state.writingCurrent));
writingCheckButton.addEventListener("click", checkWritingAnswer);
writingNextButton.addEventListener("click", nextWritingPrompt);
writingResult.addEventListener("click", (event) => {
  const button = event.target.closest("[data-writing-speak-result]");
  if (!button) return;

  const kind = button.dataset.writingSpeakResult;
  const text = kind === "input" ? state.writingLastResultSpeech.input : state.writingLastResultSpeech.target;
  void speakWritingText(text, kind === "input" ? "你的输入为空，无法朗读。" : "当前没有可朗读的正确词块。");
});
writingInput.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    checkWritingAnswer();
    return;
  }

  if ((event.ctrlKey || event.metaKey) && (event.code === "KeyR" || shortcutMatches(event, "replay"))) {
    event.preventDefault();
    void speakCurrentWritingTarget();
  }
});
writingMistakeList.addEventListener("click", (event) => {
  const reviewButton = event.target.closest("[data-writing-review-one]");
  if (reviewButton) {
    startWritingSinglePractice(findWritingBookItem(reviewButton.dataset.writingReviewOne));
    return;
  }

  const speakButton = event.target.closest("[data-writing-speak-item]");
  if (speakButton) {
    void speakWritingText(getWritingTargetSpeechText(findWritingBookItem(speakButton.dataset.writingSpeakItem)));
    return;
  }

  const favoriteButton = event.target.closest("[data-writing-toggle-favorite]");
  if (favoriteButton) {
    toggleWritingFavorite(findWritingBookItem(favoriteButton.dataset.writingToggleFavorite));
    return;
  }

  const removeFavoriteButton = event.target.closest("[data-writing-remove-favorite]");
  if (removeFavoriteButton) {
    removeWritingFavorite(removeFavoriteButton.dataset.writingRemoveFavorite);
    return;
  }

  const removeButton = event.target.closest("[data-writing-remove-mistake]");
  if (removeButton) removeWritingMistake(removeButton.dataset.writingRemoveMistake);
});
answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (state.answered && !nextButton.disabled) {
    nextRound();
    return;
  }

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
    renderAnswerReview(current, lastResult.response, lastResult.correct, lastResult.mode, lastResult.revealed);
  } else {
    form.replaceWith("释义已保存。");
  }
});
reviewPanel.addEventListener("click", (event) => {
  const retryCurrentWordButton = event.target.closest("[data-retry-current-word]");
  if (retryCurrentWordButton) {
    retryCurrentWord();
    return;
  }

  const speakReviewWordButton = event.target.closest("[data-speak-review-word]");
  if (speakReviewWordButton) {
    void speakCurrentWord();
    return;
  }

  const detailButton = event.target.closest("[data-open-word-detail]");
  if (detailButton) {
    openWordDetail(detailButton.dataset.detailMode, detailButton.dataset.detailKey, detailButton.dataset.detailSource);
    return;
  }

  const favoriteReviewButton = event.target.closest("[data-toggle-review-favorite]");
  if (favoriteReviewButton) {
    const key = favoriteReviewButton.dataset.toggleReviewFavorite;
    const current = state.deck[state.currentIndex];
    const isFavorited = Boolean(state.favoriteBook[state.mode]?.[key]);

    if (isFavorited) {
      removeFavoriteBookItem(state.mode, key);
      favoriteReviewButton.classList.remove("is-favorite");
      favoriteReviewButton.textContent = "☆";
      favoriteReviewButton.title = "收藏到错题本";
      favoriteReviewButton.setAttribute("aria-label", `收藏 ${current?.word || "当前单词"} 到错题本`);
      favoriteReviewButton.setAttribute("aria-pressed", "false");
      return;
    }

    let didFavorite = false;
    if (state.correctBook[state.mode]?.[key]) {
      moveCorrectItemToFavoriteBook(state.mode, key, false);
      didFavorite = true;
    } else if (current && normaliseKey(current.word) === key) {
      const lastResult = [...state.results].reverse().find((result) => normaliseKey(result.word) === key);
      didFavorite = addEntryToFavoriteBook(state.mode, current, lastResult?.response || "");
    }

    if (!didFavorite) return;

    favoriteReviewButton.classList.add("is-favorite");
    favoriteReviewButton.textContent = "★";
    favoriteReviewButton.title = "移出收藏本";
    favoriteReviewButton.setAttribute("aria-label", `移出收藏本：${current?.word || "当前单词"}`);
    favoriteReviewButton.setAttribute("aria-pressed", "true");
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
  if (!readingMistakeDialog.hidden) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeReadingMistakeForm();
    }
    return;
  }

  if (!listeningMistakeDialog.hidden) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeListeningMistakeForm();
    }
    return;
  }

  if (!favoriteReviewScreen.hidden) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeFavoriteBookReview();
    }
    return;
  }

  if (!wordDetailDialog.hidden) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeWordDetail();
    }
    return;
  }

  handleGlobalShortcut(event);
  if (event.defaultPrevented || isEditableShortcutTarget(event.target)) return;

  if ((state.mode === "listening" || state.mode === "reading") && /^[1-9]$/.test(event.key)) {
    const button = choices.querySelectorAll("button")[Number(event.key) - 1];
    if (button && !button.disabled) {
      event.preventDefault();
      button.click();
    }
  }
});

function mountSiteIntro() {
  const intro = document.querySelector("#siteIntro");
  if (!intro) {
    document.documentElement.classList.remove("site-intro-active");
    return;
  }

  const removeIntro = () => {
    document.documentElement.classList.remove("site-intro-active");
    intro.remove();
  };

  const dismissIntro = () => {
    if (!intro.isConnected || intro.classList.contains("is-dismissed")) return;
    intro.classList.add("is-dismissed");
  };

  intro.addEventListener("click", dismissIntro);
  intro.addEventListener("animationend", (event) => {
    if (event.animationName === "siteIntroExit" || event.animationName === "siteIntroQuickExit") {
      removeIntro();
    }
  });
  window.setTimeout(removeIntro, 3200);
}

mountSiteIntro();
mountSettingsControls();
applySpeechSettings();
state.mode = getSelectedMode();
state.listeningMistakeSelectedId = state.listeningMistakes[0]?.id || "";
state.readingMistakeSelectedId = state.readingMistakes[0]?.id || "";
setSidebarCollapsed(loadSidebarCollapsed(), false);
window.requestAnimationFrame(() => appShell.classList.add("sidebar-motion-ready"));
mountSidebarRailIcons();
setPrimarySurface("quiz");
updateListeningMistakeNavVisibility();
wordInput.value = state.modeInputs[state.mode] || wordInput.value;
saveCurrentModeInput();
loadVoices();
updateSetupControls();
updateScoreBox();
renderFavoriteBook();
renderShortcutSettings();
populateWritingPackSelect();
setWritingPhase(state.writingPhase);
renderWritingStats();
renderWritingMistakeBook();
renderListeningMistakeLibrary();
renderReadingMistakeLibrary();
setWritingEmpty("选择主题包后开始，先练 5 句 Body 段骨架。");
restoreTraining();
mountWritingStudio();
updateListeningMistakeNavVisibility();
window.addEventListener("pagehide", () => {
  captureWritingStudioForm();
  pauseWritingStudioTimer();
  saveWritingStudioState();
  window.clearTimeout(writingStudioServerSaveTimer);
  window.clearTimeout(listeningOcrIdleTimer);
  listeningOcrWorkerPromise?.then((worker) => worker.terminate()).catch(() => {});
});
if ("speechSynthesis" in window) {
  if (typeof window.speechSynthesis.addEventListener === "function") {
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
  } else {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}
