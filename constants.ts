import { Lang, Translation } from './types';

// Helper to generate consistent alliance data structure
const getAlliances = (t: any) => [
  {
    tag: "KOR",
    name: "Korean Dynasty",
    motto: "Discipline & Honor.",
    desc: "A highly disciplined force that values precision. [KOR] is perfect for players who appreciate structured gameplay and strong coordination during SvS.",
    schedule: [
      { label: t.bearHunt, time: '13:00 • 19:00' },
      { label: t.foundry, time: '14:00' },
      { label: t.canyon, time: '14:00' }
    ],
    reqs: ["FC5+ Preferred", "SvS Focused", "Discord Mandatory"],
    coords: "X:580 Y:460"
  },
  {
    tag: "ONE",
    name: "The One",
    motto: "United We Stand.",
    desc: "The heart of our community. [ONE] balances competitive drive with a welcoming atmosphere, ensuring every member grows, learns, and wins together.",
    schedule: [
      { label: t.bearHunt, time: '02:00 • 13:00' },
      { label: t.foundry, time: '14:00 • 19:00' },
      { label: t.canyon, time: '14:00 • 19:00' }
    ],
    reqs: ["Furnace FC4+", "Daily Active", "Team Player"],
    coords: "X:589 Y:461"
  },
  {
    tag: "AFK",
    name: "AFK Legion",
    motto: "Actions Speak Louder.",
    desc: "For those who prefer results over politics. [AFK] is a focused, efficient machine designed for experienced players who get the job done without the noise.",
    schedule: [
      { label: t.bearHunt, time: '13:00' },
      { label: t.foundry, time: '19:00' },
      { label: t.crazyJoe, time: '15:00' }
    ],
    reqs: ["High Activity", "Battle Ready", "Self-Sufficient"],
    coords: "X:595 Y:455"
  },
  {
    tag: "GOD",
    name: "Gods of War",
    motto: "Force of the North.",
    desc: "A powerhouse of military strength. [GOD] attracts warriors who love the thrill of battle and want to be at the forefront of every state victory.",
    schedule: [
      { label: t.bearHunt, time: '13:00 • 18:30' },
      { label: t.foundry, time: '14:00' },
      { label: t.mercenaries, time: '15:00' }
    ],
    reqs: ["High Power", "PvP Oriented", "Loyalty"],
    coords: "X:575 Y:470"
  }
];

const EVENTS_ENG = { bearHunt: "Bear Hunt", foundry: "Foundry", canyon: "Canyon", crazyJoe: "Crazy Joe", mercenaries: "Mercenaries" };
const EVENTS_RUS = { bearHunt: "Медведь", foundry: "Литейная", canyon: "Каньон", crazyJoe: "Джо", mercenaries: "Наемники" };
const EVENTS_KOR = { bearHunt: "베어 헌트", foundry: "파운드리", canyon: "캐니언", crazyJoe: "크레이지 조", mercenaries: "용병" };
const EVENTS_CHI = { bearHunt: "熊猎", foundry: "铸造厂", canyon: "峡谷", crazyJoe: "疯狂乔", mercenaries: "雇佣兵" };
const EVENTS_DEU = { bearHunt: "Bärenjagd", foundry: "Gießerei", canyon: "Canyon", crazyJoe: "Crazy Joe", mercenaries: "Söldner" };

export const COPY: Record<Lang, Translation> = {
  [Lang.ENG]: {
    nav: { about: "State", nap: "NAP", reasons: "Why Us", alliances: "Alliances", apply: "Apply" },
    hero: { title: "STATE 2528", subtitle: "The Golden Standard", slogan: "A United State. A Winning Community." },
    events: EVENTS_ENG,
    about: {
      status: { active: "STATUS: ACTIVE", nap: "NAP: STABLE", coord: "COORDINATION: HIGH" },
      kicker: "About 2528",
      title: "More Than Just a Server",
      shortIntro: "State 2528 is built on a simple principle: respect inside, domination outside. It's a place where you can grow safely, make friends, and fight alongside a coordinated team in global events.",
      shortApproach: "We value fair play and smart strategy. No drama, just good gameplay."
    },
    nap: {
      kicker: "Our Rules",
      title: "Safe Growth & Fair Play",
      desc: "We believe in a peaceful state where everyone can prepare for SvS without fear of being attacked by neighbors. Our NAP is simple, transparent, and strictly enforced.",
      rulesTitle: "State Guidelines",
      napAlliancesTitle: "NAP Alliances",
      rules: [
        "No attacks on cities or gathering tiles within the state.",
        "Castle rotation is shared fairly among top alliances.",
        "Leadership resolves disputes privately — no world chat drama.",
        "Zero tolerance for toxicity or harassment.",
      ],
      rotationTitle: "Fair Rotations",
      rotationDesc: "We rotate the Sunfire Castle and Forts to ensure everyone gets rewards and buffs. It's about state power, not individual ego.",
      fortsDesc: "Strongholds are assigned based on contribution to preparation phases."
    },
    reasons: {
      kicker: "Why Transfer?",
      title: "Your New Home Awaits",
      items: [
        { title: "Global Community", desc: "Players from all over the world, united by a love for the game and mutual respect." },
        { title: "Smart Leadership", desc: "Experienced leaders who plan strategies, manage buffs, and organize events efficiently." },
        { title: "Active Discord", desc: "Our state Discord is the hub for guides, event planning, and just hanging out." },
        { title: "SvS Focused", desc: "Everything we do — from NAP to training — is to win State vs State battles." },
        { title: "Organized Events", desc: "Bear Hunt, Foundry, and Canyon are scheduled to maximize participation." },
        { title: "Mature Atmosphere", desc: "We play to have fun. We don't tolerate drama, bullying, or childish behavior." },
      ]
    },
    alliances: {
      kicker: "Top Alliances",
      title: "Find Your Squad",
      subtitle: "Different playstyles, one goal. Choose the team that fits you best.",
      reqTitle: "Looking For",
      scheduleTitle: "Key Events (UTC)",
      coordsTitle: "Location",
      cards: getAlliances(EVENTS_ENG)
    },
    apply: {
      note: "We check all applications to ensure a good fit.",
      kicker: "Join Us",
      title: "Ready to make the move?",
      desc: "If you're an active player looking for a stable, winning home, we'd love to have you. Let's start the conversation.",
      button: "Start Transfer Process →"
    },
    footer: { line: "STATE 2528 • The Golden Standard", small: "Unity. Strategy. Victory." }
  },
  [Lang.RUS]: {
    nav: { about: "О штате", nap: "Правила", reasons: "Преимущества", alliances: "Альянсы", apply: "Трансфер" },
    hero: { title: "STATE 2528", subtitle: "Золотой Стандарт", slogan: "Единый штат. Побеждающее сообщество." },
    events: EVENTS_RUS,
    about: {
      status: { active: "СТАТУС: АКТИВЕН", nap: "NAP: СТАБИЛЕН", coord: "КООРДИНАЦИЯ: ТОП" },
      kicker: "О штате 2528",
      title: "Больше, чем просто сервер",
      shortIntro: "Мы построили 2528 на простом принципе: уважение внутри, доминирование снаружи. Это место, где можно спокойно расти и сражаться плечом к плечу с друзьями в глобальных событиях.",
      shortApproach: "Мы ценим честную игру и умную стратегию. Никакой драмы, только качественный геймплей."
    },
    nap: {
      kicker: "Наши правила",
      title: "Безопасный рост и честная игра",
      desc: "Мы верим в мирный штат, где каждый может готовиться к SvS, не боясь атак соседей. Наш NAP прост, прозрачен и строго соблюдается.",
      rulesTitle: "Принципы штата",
      napAlliancesTitle: "Альянсы NAP",
      rules: ["Никаких атак на города или плитки внутри штата.", "Ротация Замка честно распределяется между топ-альянсами.", "Лидеры решают споры лично — без скандалов в мировом чате.", "Нулевая терпимость к токсичности и оскорблениям."],
      rotationTitle: "Честная ротация",
      rotationDesc: "Мы ротируем Замок и Форты, чтобы все получали награды и баффы. Главное — сила штата, а не личные амбиции.",
      fortsDesc: "Крепости распределяются на основе вклада в фазу подготовки."
    },
    reasons: {
      kicker: "Зачем переезжать?",
      title: "Твой новый дом ждет",
      items: [
        { title: "Глобальное комьюнити", desc: "Игроки со всего мира, объединенные любовью к игре и взаимным уважением." },
        { title: "Умное руководство", desc: "Опытные лидеры, которые планируют стратегии и эффективно организуют ивенты." },
        { title: "Активный Discord", desc: "Наш дискорд — центр общения, гайдов и планирования событий." },
        { title: "Фокус на SvS", desc: "Всё, что мы делаем — от NAP до тренировок — ради победы в Битве Штатов." },
        { title: "Организация ивентов", desc: "Медведь, Литейная и Каньон проходят по расписанию для максимального онлайна." },
        { title: "Взрослая атмосфера", desc: "Мы играем ради удовольствия. Драма и детское поведение здесь не приветствуются." },
      ]
    },
    alliances: {
      kicker: "Топ Альянсы",
      title: "Найди свою команду",
      subtitle: "Разные стили игры, одна цель. Выбери коллектив, который подходит именно тебе.",
      reqTitle: "Мы ищем",
      scheduleTitle: "События (UTC)",
      coordsTitle: "Координаты",
      cards: [
        {
            tag: "KOR",
            name: "Korean Dynasty",
            motto: "Дисциплина и честь.",
            desc: "Высокодисциплинированная сила, ценящая точность. [KOR] идеален для игроков, которые любят структурированный геймплей и четкую координацию на SvS.",
            schedule: [
              { label: EVENTS_RUS.bearHunt, time: '13:00 • 19:00' },
              { label: EVENTS_RUS.foundry, time: '14:00' },
              { label: EVENTS_RUS.canyon, time: '14:00' }
            ],
            reqs: ["Печь FC5+", "Фокус на SvS", "Дискорд обязателен"],
            coords: "X:580 Y:460"
        },
        {
            tag: "ONE",
            name: "The One",
            motto: "Вместе мы сила.",
            desc: "Сердце нашего комьюнити. [ONE] балансирует соревновательный дух с дружелюбной атмосферой, помогая каждому расти и побеждать.",
            schedule: [
              { label: EVENTS_RUS.bearHunt, time: '02:00 • 13:00' },
              { label: EVENTS_RUS.foundry, time: '14:00 • 19:00' },
              { label: EVENTS_RUS.canyon, time: '14:00 • 19:00' }
            ],
            reqs: ["Печь FC4+", "Ежедневный актив", "Командный игрок"],
            coords: "X:589 Y:461"
        },
        {
            tag: "AFK",
            name: "AFK Legion",
            motto: "Дела громче слов.",
            desc: "Для тех, кто предпочитает результат политике. [AFK] — это эффективная машина для опытных игроков, которые делают работу без лишнего шума.",
            schedule: [
              { label: EVENTS_RUS.bearHunt, time: '13:00' },
              { label: EVENTS_RUS.foundry, time: '19:00' },
              { label: EVENTS_RUS.crazyJoe, time: '15:00' }
            ],
            reqs: ["Высокая активность", "Готовность к бою", "Самостоятельность"],
            coords: "X:595 Y:455"
        },
        {
            tag: "GOD",
            name: "Gods of War",
            motto: "Сила Севера.",
            desc: "Военная мощь штата. [GOD] привлекает воинов, которые любят азарт битвы и хотят быть в авангарде каждой победы штата.",
            schedule: [
              { label: EVENTS_RUS.bearHunt, time: '13:00 • 18:30' },
              { label: EVENTS_RUS.foundry, time: '14:00' },
              { label: EVENTS_RUS.mercenaries, time: '15:00' }
            ],
            reqs: ["Высокая мощь", "PvP ориентир", "Лояльность"],
            coords: "X:575 Y:470"
        }
      ]
    },
    apply: {
      note: "Мы просматриваем все заявки лично.",
      kicker: "Присоединяйся",
      title: "Готов к переезду?",
      desc: "Если ты активный игрок и ищешь стабильный, побеждающий дом — мы будем рады тебя видеть. Давай начнем.",
      button: "Начать процесс трансфера →"
    },
    footer: { line: "STATE 2528 • Золотой Стандарт", small: "Единство. Стратегия. Победа." }
  },
  [Lang.KOR]: {
    nav: { about: "국가", nap: "NAP", reasons: "장점", alliances: "연맹", apply: "지원" },
    hero: { title: "STATE 2528", subtitle: "골든 스탠다드", slogan: "단합된 국가. 승리하는 커뮤니티." },
    events: EVENTS_KOR,
    about: {
      status: { active: "상태: 활성", nap: "NAP: 안정", coord: "협력: 최상" },
      kicker: "국가 소개",
      title: "단순한 서버 그 이상",
      shortIntro: "State 2528은 간단한 원칙 위에 세워졌습니다: 내부는 존중, 외부는 지배. 안전하게 성장하고 친구들과 함께 싸울 수 있는 곳입니다.",
      shortApproach: "우리는 공정한 플레이와 스마트한 전략을 중요하게 생각합니다. 드라마는 없고, 좋은 게임 플레이만 있습니다."
    },
    nap: {
      kicker: "규칙",
      title: "안전한 성장과 공정함",
      desc: "이웃의 공격 걱정 없이 SvS를 준비할 수 있는 평화로운 국가를 지향합니다. 우리의 NAP는 투명하고 철저하게 지켜집니다.",
      rulesTitle: "국가 가이드라인",
      napAlliancesTitle: "NAP 연맹",
      rules: ["국가 내 도시 및 채집 타일 공격 금지.", "성 로테이션은 상위 연맹 간 공정하게 분배.", "분쟁은 비공개로 해결 — 월드 채팅 분쟁 금지.", "비매너 및 괴롭힘 무관용."],
      rotationTitle: "공정한 로테이션",
      rotationDesc: "모두가 보상을 받을 수 있도록 성과 요새를 로테이션합니다. 개인의 욕심보다 국가의 힘이 우선입니다.",
      fortsDesc: "요새는 준비 단계 기여도에 따라 배정됩니다."
    },
    reasons: {
      kicker: "이주해야 하는 이유",
      title: "당신의 새로운 집",
      items: [
        { title: "글로벌 커뮤니티", desc: "전 세계 플레이어들이 게임에 대한 열정과 상호 존중으로 뭉쳤습니다." },
        { title: "스마트한 운영진", desc: "전략을 세우고 버프를 관리하며 이벤트를 효율적으로 조직하는 숙련된 리더들." },
        { title: "활발한 디스코드", desc: "가이드, 이벤트 계획, 소통의 중심이 되는 국가 디스코드." },
        { title: "SvS 중심", desc: "NAP부터 훈련까지 모든 것은 SvS 승리를 위해 존재합니다." },
        { title: "체계적인 이벤트", desc: "베어 헌트, 파운드리, 캐니언은 참여율을 극대화하기 위해 스케줄링됩니다." },
        { title: "성숙한 분위기", desc: "우리는 즐거움을 위해 게임합니다. 드라마나 유치한 행동은 용납하지 않습니다." },
      ]
    },
    alliances: {
      kicker: "탑 연맹",
      title: "당신의 팀을 찾으세요",
      subtitle: "목표는 하나지만 스타일은 다릅니다. 당신에게 맞는 팀을 선택하세요.",
      reqTitle: "모집 조건",
      scheduleTitle: "주요 이벤트 (UTC)",
      coordsTitle: "위치",
      cards: getAlliances(EVENTS_KOR)
    },
    apply: {
      note: "모든 지원서를 꼼꼼히 검토합니다.",
      kicker: "합류하기",
      title: "이주할 준비가 되셨나요?",
      desc: "안정적이고 승리하는 집을 찾는 활동적인 플레이어라면 환영합니다.",
      button: "이주 절차 시작하기 →"
    },
    footer: { line: "STATE 2528 • 골든 스탠다드", small: "단합. 전략. 승리." }
  },
  [Lang.CHI]: {
    nav: { about: "国家", nap: "NAP", reasons: "优势", alliances: "联盟", apply: "申请" },
    hero: { title: "STATE 2528", subtitle: "黄金标准", slogan: "团结的国家，胜利的社区。" },
    events: EVENTS_CHI,
    about: {
      status: { active: "状态：活跃", nap: "NAP：稳定", coord: "协作：极高" },
      kicker: "关于 2528",
      title: "不仅仅是一个服务器",
      shortIntro: "2528 建立在一个简单的原则之上：对内尊重，对外统治。在这里你可以安全发育，与朋友并肩作战。",
      shortApproach: "我们重视公平竞争和明智的策略。没有戏剧性冲突，只有高质量的游戏体验。"
    },
    nap: {
      kicker: "规则",
      title: "安全发育与公平竞争",
      desc: "我们相信和平的国家环境，让每个人都能安心备战 SvS。我们的 NAP 简单、透明且严格执行。",
      rulesTitle: "国家准则",
      napAlliancesTitle: "NAP 联盟",
      rules: ["禁止攻击国家内的城市或采集点。", "城堡轮换在顶级联盟之间公平分配。", "管理层私下解决纠纷——禁止在世界频道争吵。", "对恶意行为零容忍。"],
      rotationTitle: "公平轮换",
      rotationDesc: "我们轮换城堡和要塞，确保每个人都能获得奖励。国家实力高于个人私利。",
      fortsDesc: "据点根据备战阶段的贡献进行分配。"
    },
    reasons: {
      kicker: "为什么移民？",
      title: "你的新家在等你",
      items: [
        { title: "全球社区", desc: "来自世界各地的玩家，因热爱游戏和相互尊重而团结在一起。" },
        { title: "明智的领导", desc: "经验丰富的领导层，制定战略、管理增益并高效组织活动。" },
        { title: "活跃的 Discord", desc: "我们的国家 Discord 是攻略、活动规划和交流的中心。" },
        { title: "专注 SvS", desc: "我们做的一切——从 NAP 到训练——都是为了赢得跨服战。" },
        { title: "有序的活动", desc: "熊猎、铸造厂和峡谷按计划进行，以最大化参与度。" },
        { title: "成熟的氛围", desc: "我们为了乐趣而玩。不容忍戏剧性冲突或幼稚行为。" },
      ]
    },
    alliances: {
      kicker: "顶级联盟",
      title: "找到你的队伍",
      subtitle: "不同的风格，同一个目标。选择最适合你的团队。",
      reqTitle: "招募要求",
      scheduleTitle: "关键活动 (UTC)",
      coordsTitle: "位置",
      cards: getAlliances(EVENTS_CHI)
    },
    apply: {
      note: "我们会认真审核每一份申请。",
      kicker: "加入我们",
      title: "准备好行动了吗？",
      desc: "如果你是一名正在寻找稳定、胜利之家的活跃玩家，我们热烈欢迎。",
      button: "开始移民流程 →"
    },
    footer: { line: "STATE 2528 • 黄金标准", small: "团结。策略。胜利。" }
  },
  [Lang.DEU]: {
    nav: { about: "Staat", nap: "NAP", reasons: "Warum wir", alliances: "Allianzen", apply: "Bewerben" },
    hero: { title: "STATE 2528", subtitle: "Der Goldstandard", slogan: "Ein Staat. Eine Community. Ein Sieg." },
    events: EVENTS_DEU,
    about: {
      status: { active: "STATUS: AKTIV", nap: "NAP: STABIL", coord: "KOORDINATION: HOCH" },
      kicker: "Über 2528",
      title: "Mehr als nur ein Server",
      shortIntro: "State 2528 basiert auf einem einfachen Prinzip: Respekt im Inneren, Dominanz nach außen. Ein Ort zum sicheren Wachsen und gemeinsamen Kämpfen.",
      shortApproach: "Wir schätzen Fairplay und kluge Strategien. Kein Drama, nur gutes Gameplay."
    },
    nap: {
      kicker: "Unsere Regeln",
      title: "Sicheres Wachstum & Fairplay",
      desc: "Wir glauben an einen friedlichen Staat, in dem sich jeder ohne Angst auf das SvS vorbereiten kann. Unser NAP ist einfach, transparent und strikt.",
      rulesTitle: "Richtlinien",
      napAlliancesTitle: "NAP-Allianzen",
      rules: ["Keine Angriffe auf Städte oder Ressourcen im Staat.", "Burg-Rotation wird fair unter den Top-Allianzen geteilt.", "Führung löst Konflikte privat — kein World-Chat-Drama.", "Null Toleranz für Toxizität."],
      rotationTitle: "Faire Rotation",
      rotationDesc: "Wir rotieren Burg und Festungen, damit jeder Belohnungen erhält. Die Stärke des Staates steht über dem Ego.",
      fortsDesc: "Festungen werden basierend auf dem Beitrag zur Vorbereitung vergeben."
    },
    reasons: {
      kicker: "Warum wechseln?",
      title: "Dein neues Zuhause",
      items: [
        { title: "Globale Community", desc: "Spieler aus aller Welt, vereint durch das Spiel und gegenseitigen Respekt." },
        { title: "Kluge Führung", desc: "Erfahrene Leader, die Strategien planen und Events effizient organisieren." },
        { title: "Aktives Discord", desc: "Unser Discord ist das Zentrum für Guides, Planung und Unterhaltung." },
        { title: "SvS-Fokus", desc: "Alles, was wir tun — vom NAP bis zum Training — dient dem Sieg im SvS." },
        { title: "Organisierte Events", desc: "Bärenjagd, Gießerei und Canyon sind für maximale Teilnahme geplant." },
        { title: "Reife Atmosphäre", desc: "Wir spielen aus Spaß. Drama oder kindisches Verhalten werden nicht toleriert." },
      ]
    },
    alliances: {
      kicker: "Top Allianzen",
      title: "Finde dein Team",
      subtitle: "Unterschiedliche Stile, ein Ziel. Wähle das Team, das zu dir passt.",
      reqTitle: "Wir suchen",
      scheduleTitle: "Events (UTC)",
      coordsTitle: "Standort",
      cards: getAlliances(EVENTS_DEU)
    },
    apply: {
      note: "Wir prüfen jede Bewerbung persönlich.",
      kicker: "Beitreten",
      title: "Bereit für den Wechsel?",
      desc: "Wenn du ein aktiver Spieler bist, der ein stabiles, erfolgreiches Zuhause sucht, bist du willkommen.",
      button: "Transfer starten →"
    },
    footer: { line: "STATE 2528 • Der Goldstandard", small: "Einheit. Strategie. Sieg." }
  }
};