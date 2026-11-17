import fx from './assets/effects/fx.js';
import './assets/moments/moments.js';

// Mount dealt ambient canvas effect ([data-fx="gradient-mesh"] in hero)
fx.mountAll(document);

// ─── I18N Dictionary ───
const dict = {
  pt: {
    'nav.skip': 'Pular para o conteúdo',
    'nav.journey': 'Trajetória',
    'nav.projects': 'Projetos',
    'nav.extras': 'IA e Copa',
    'nav.personal': 'Perfil',
    'nav.cta': 'Baixar currículo',

    'hero.cat': 'Software, dados e agentes de IA',
    'hero.title': 'Software, dados e agentes de IA.',
    'hero.lead': 'Raphael Ramos, formado em Ciência da Computação (UFCG, Out 2026). Transformo tarefas manuais e dados soltos em programas simples e robôs de IA, com a disciplina diária da natação competitiva.',
    'hero.cta': 'Baixar currículo',
    'hero.alt': 'Ver exemplos na prática',
    'hero.pool_status': 'Minha raia (25m)',
    'hero.pool_turn': 'Inverter direção',
    'hero.pool_pause': 'Pausar nado',
    'hero.pool_resume': 'Retomar nado',

    'stmt.title': 'IA, dados e software claro',
    'stmt.sub': 'Em palavras simples: crio programas e assistentes com inteligência artificial para tirar tarefas repetitivas da mão das pessoas e organizar informações bagunçadas para quem não é de TI.',
    'fact.f1_lbl': 'Antena espacial (BINGO)',
    'fact.f1_val': '113 checagens automáticas',
    'fact.f2_lbl': 'Arquivo organizado',
    'fact.f2_val': '105.582 linhas sem erro',
    'fact.f3_lbl': 'Leitura automática',
    'fact.f3_val': '33 PDFs viraram tabela',
    'fact.f4_lbl': 'Ajuda a colegas (UFCG)',
    'fact.f4_val': '75+ alunos orientados',

    'journey.title': 'Minha história no software, da USP até a IA',
    'journey.sub': 'Uma historinha em 4 capítulos com dicas para quem não é de TI entender o que eu fiz em cada fase.',
    'journey.prev': 'Capítulo anterior',
    'journey.next': 'Próximo capítulo',

    'proj.title': 'Projetos de software: BINGO e Banco de Dados',
    'proj.sub': 'Cada cartão traz uma analogia simples para leigos. Clique nos botões para testar como funciona.',
    'proj.c1_title': 'Software para uma Antena Espacial (BINGO)',
    'proj.c1_desc': 'Um radiotelescópio manda tantos sinais por segundo que travava a tela de controle. Dica: separei as contas pesadas para os bastidores (como a cozinha preparando pedidos enquanto o garçom atende), com 113 checagens automáticas.',
    'proj.c2_title': 'Leitor de PDFs e Estante Digital (Banco de Dados)',
    'proj.c2_desc': 'Para achar dados no meio de 33 apostilas em PDF soltas, fiz um robô que lê tudo sozinho, apaga repetições e organiza 105.582 fichas no PostgreSQL (dica: banco de dados é como uma estante onde tudo se acha em segundos).',

    'ext.title': 'Agentes de IA no Dia a Dia e Simulador Copa 2026',
    'ext.sub': 'Dica para leigos: agentes de IA são assistentes que checam regras reais antes de agir, e modelos calculam chances de jogos. Teste abaixo.',
    'ext.c1_title': 'Simulador de Jogos · Copa 2026',
    'ext.c1_desc': 'Escolha duas seleções e a distância de viagem até o estádio. Dica: o programa cruza o histórico de gols com o desgaste da viagem para estimar na hora quem tem mais chance.',
    'ext.c2_title': 'Agentes de IA no Dia a Dia e Vagas',
    'ext.c2_desc': 'Uso inteligência artificial diariamente no trabalho para programar e automatizar rotinas. Dica: diferente de um chat comum que só responde, meus agentes checam regras e entregam vagas filtradas num painel pronto.',

    'pers.title': 'Natação competitiva, monitoria e idiomas',
    'pers.sub': 'O que eu faço fora das telas e como isso facilita conversar com qualquer equipe.',
    'pers.swim_title': 'Natação Competitiva (25m)',
    'pers.swim_desc': 'Pratico natação competitiva porque gosto muito do esporte e de treinar em piscina de 25 metros. Controlar ritmo e viradas todo dia me dá calma para resolver problemas difíceis.',
    'pers.swim_btn': 'Ver outra série',
    'pers.lang_title': 'Monitoria UFCG (75+ alunos) e 4 Idiomas',
    'pers.lang_desc': 'Na UFCG fui monitor (tutor que tira dúvidas fora da aula) ajudando 40+ alunos em lógica e 35+ em sistemas, sempre explicando sem "tecniquês". Falo Português, Inglês avançado, Francês e Espanhol.',

    'close.title': 'Contato para vagas de software, dados e IA',
    'close.sub': 'Formado em Ciência da Computação pela UFCG em outubro de 2026.',
    'close.cta': 'Baixar currículo',
    'close.copy': 'Copiar e-mail',
    'close.copied': 'E-mail copiado',
    'close.github': 'GitHub',
    'close.linkedin': 'LinkedIn'
  },
  en: {
    'nav.skip': 'Skip to content',
    'nav.journey': 'Journey',
    'nav.projects': 'Projects',
    'nav.extras': 'AI & World Cup',
    'nav.personal': 'Profile',
    'nav.cta': 'Download resume',

    'hero.cat': 'Software, data and AI agents',
    'hero.title': 'Software, data and AI agents.',
    'hero.lead': 'Raphael Ramos, Computer Science graduate (UFCG, Oct 2026). I turn manual tasks and messy data into easy software and AI helpers, built with competitive swimming discipline.',
    'hero.cta': 'Download resume',
    'hero.alt': 'Try live examples',
    'hero.pool_status': 'My lane (25m)',
    'hero.pool_turn': 'Flip turn',
    'hero.pool_pause': 'Pause swim',
    'hero.pool_resume': 'Resume swim',

    'stmt.title': 'AI, data and clear software',
    'stmt.sub': 'In plain English: I build software and AI helpers that take repetitive work off people’s hands and organize messy data so non-technical teams can use it right away.',
    'fact.f1_lbl': 'Space antenna (BINGO)',
    'fact.f1_val': '113 automated checks',
    'fact.f2_lbl': 'Clean data warehouse',
    'fact.f2_val': '105,582 verified rows',
    'fact.f3_lbl': 'Automatic PDF reader',
    'fact.f3_val': '33 reports structured',
    'fact.f4_lbl': 'Peer mentoring (UFCG)',
    'fact.f4_val': '75+ students guided',

    'journey.title': 'My story from engineering to software and AI',
    'journey.sub': 'A 4-chapter story with non-technical tips explaining what each step means in real life.',
    'journey.prev': 'Previous chapter',
    'journey.next': 'Next chapter',

    'proj.title': 'Software projects: BINGO and Data Pipeline',
    'proj.sub': 'Each card includes a simple real-world analogy. Click the buttons to test how it works inside.',
    'proj.c1_title': 'Software for a Space Antenna (BINGO)',
    'proj.c1_desc': 'A radio telescope sends so many live signals it used to freeze the operator screen. Tip: I moved heavy math backstage (like a kitchen prepping orders while the waiter stays free), backed by 113 automated checks.',
    'proj.c2_title': 'PDF Reader and Organized Library (Database)',
    'proj.c2_desc': 'To find answers across 33 dense PDFs, I built a Python tool that cleans duplicates and stores 105,582 entries in PostgreSQL (tip: a database is like an indexed library where any answer comes back in seconds).',

    'ext.title': 'Daily AI Agents and World Cup 2026 Predictor',
    'ext.sub': 'Plain tip: AI agents are digital helpers that verify rules before acting, while statistical math estimates match odds. Try both below.',
    'ext.c1_title': 'World Cup 2026 · Match Predictor',
    'ext.c1_desc': 'Pick two national teams and travel distance to the stadium. Tip: the model blends historical goal strength with travel fatigue to compute win or draw odds live.',
    'ext.c2_title': 'Daily AI Agents and Job Organizer',
    'ext.c2_desc': 'I rely on AI daily to code faster and automate routines. Tip: unlike a plain chatbot that guesses, my agents follow strict checks to filter tech jobs into a clean dashboard.',

    'pers.title': 'Competitive swimming, mentoring and languages',
    'pers.sub': 'My life outside the screen and how teaching and sports help me work calmly with any team.',
    'pers.swim_title': 'Competitive Swimming (25m)',
    'pers.swim_desc': 'I train competitive swimming because I genuinely love the sport and 25m pool discipline. Controlling pacing and wall turns every day keeps me calm when solving tough bugs.',
    'pers.swim_btn': 'Next training set',
    'pers.lang_title': 'UFCG Mentoring (75+ students) & 4 Languages',
    'pers.lang_desc': 'I tutored 40+ algorithms and 35+ systems students at UFCG, turning tech jargon into plain examples. Fluent in Portuguese & English, intermediate French & Spanish.',

    'close.title': 'Contact for software, data and AI teams',
    'close.sub': 'B.Sc. in Computer Science from UFCG in October 2026.',
    'close.cta': 'Download resume',
    'close.copy': 'Copy email',
    'close.copied': 'Email copied',
    'close.github': 'GitHub',
    'close.linkedin': 'LinkedIn'
  }
};

let currentLang = 'pt';
const htmlEl = document.documentElement;

function syncBackgroundMode(mode) {
  htmlEl.dataset.mode = mode;
  htmlEl.dataset.tone = mode;
}

function applyTheme(theme) {
  const isLight = theme === 'light';
  if (isLight) {
    htmlEl.dataset.theme = 'light';
    syncBackgroundMode('light');
  } else {
    delete htmlEl.dataset.theme;
    syncBackgroundMode('dark');
  }
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', isLight ? '#eef0f3' : '#0a0d14');
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) toggleBtn.setAttribute('aria-pressed', String(isLight));
  try { localStorage.setItem('portfolio_theme', theme); } catch {}
}

function applyLanguage(lang) {
  currentLang = lang;
  htmlEl.lang = lang === 'en' ? 'en' : 'pt-BR';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const txt = dict[lang][key];
    if (txt) el.textContent = txt;
  });

  const cvHref = lang === 'en' ? 'assets/Curriculo_Raphael_Ramos_EN.pdf' : 'assets/Curriculo_Raphael_Ramos_PT.pdf';
  document.querySelectorAll('.js-cv-link').forEach((link) => {
    link.setAttribute('href', cvHref);
  });

  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
    langBtn.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para Português');
  }
  const langBtnMob = document.getElementById('langToggleMobile');
  if (langBtnMob) {
    langBtnMob.textContent = lang === 'pt' ? 'English' : 'Português';
  }

  renderStoryChapter(activeStoryIdx);
  renderSwimNote(true);
  renderBingoState();
  renderEtlState();
  renderCopaMini();
  renderAiState();
}

const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
[themeToggle, themeToggleMobile].filter(Boolean).forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = htmlEl.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });
});

const langToggle = document.getElementById('langToggle');
const langToggleMobile = document.getElementById('langToggleMobile');
[langToggle, langToggleMobile].filter(Boolean).forEach((btn) => {
  btn.addEventListener('click', () => {
    applyLanguage(currentLang === 'pt' ? 'en' : 'pt');
  });
});

// ─── Interactive 25m Swimming Pool ───
const poolMedia = document.getElementById('heroPoolFrame');
const poolSvg = document.getElementById('heroPoolSvg');
const swimmerGroup = document.getElementById('swimmerGroup');
const swimmerRig = document.getElementById('swimmerRig');
const rippleLayer = document.getElementById('poolRipples');
const btnFlipTurn = document.getElementById('btnFlipTurn');
const btnPoolPause = document.getElementById('btnPoolPause');
const poolStatusEl = document.getElementById('poolStatusText');

const POOL_LEFT_WALL = 74;
const POOL_RIGHT_WALL = 306;
let swimX = 110;
let swimDir = 1;
let swimPaused = false;
let lapCount = 1;
let lastFrameTime = null;
const SWIM_SPEED_PX_SEC = 58;

function setSwimmerOrientation(dir) {
  if (!poolMedia) return;
  poolMedia.classList.toggle('is-flipped', dir < 0);
}

function updateSwimmerPos() {
  if (!swimmerGroup || !swimmerRig) return;
  swimmerGroup.setAttribute('transform', `translate(${swimX.toFixed(2)}, 99)`);
  const bob = Math.sin(swimX * 0.08) * 1.4;
  swimmerRig.setAttribute('transform', `translate(0, ${bob.toFixed(2)})`);
}

function stepPoolAnimation(ts) {
  if (lastFrameTime === null) lastFrameTime = ts;
  const dt = Math.min(0.05, (ts - lastFrameTime) / 1000);
  lastFrameTime = ts;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!swimPaused && !reduced) {
    swimX += swimDir * SWIM_SPEED_PX_SEC * dt;
    if (swimX >= POOL_RIGHT_WALL && swimDir === 1) {
      swimX = POOL_RIGHT_WALL;
      swimDir = -1;
      lapCount += 1;
      setSwimmerOrientation(swimDir);
      spawnPoolRipple(POOL_RIGHT_WALL, 99, 2);
      refreshPoolStatus();
    } else if (swimX <= POOL_LEFT_WALL && swimDir === -1) {
      swimX = POOL_LEFT_WALL;
      swimDir = 1;
      lapCount += 1;
      setSwimmerOrientation(swimDir);
      spawnPoolRipple(POOL_LEFT_WALL, 99, 2);
      refreshPoolStatus();
    }
    updateSwimmerPos();
  }
  requestAnimationFrame(stepPoolAnimation);
}

function refreshPoolStatus() {
  if (!poolStatusEl) return;
  const prefix = dict[currentLang]['hero.pool_status'];
  const lapLabel = currentLang === 'pt' ? `Volta ${lapCount}` : `Lap ${lapCount}`;
  poolStatusEl.textContent = `${prefix} · ${lapLabel}`;
}

function spawnPoolRipple(x, y, count = 3) {
  if (!rippleLayer) return;
  for (let i = 0; i < count; i += 1) {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '0');
    circle.setAttribute('cy', '0');
    circle.setAttribute('r', '5');
    circle.setAttribute('class', 'pool-ripple-ring');
    circle.style.animationDelay = `${i * 0.14}s`;
    g.appendChild(circle);
    rippleLayer.appendChild(g);
    circle.addEventListener('animationend', () => g.remove(), { once: true });
    setTimeout(() => g.remove(), 1600);
  }
}

if (poolSvg) {
  poolSvg.addEventListener('pointerdown', (e) => {
    const ctm = poolSvg.getScreenCTM();
    if (!ctm) return;
    const pt = poolSvg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgPt = pt.matrixTransform(ctm.inverse());
    const clampedX = Math.max(46, Math.min(334, svgPt.x));
    const clampedY = Math.max(30, Math.min(168, svgPt.y));
    spawnPoolRipple(clampedX, clampedY, 3);
  });
}

if (btnFlipTurn) {
  btnFlipTurn.addEventListener('click', () => {
    swimDir *= -1;
    lapCount += 1;
    setSwimmerOrientation(swimDir);
    spawnPoolRipple(swimX, 99, 3);
    refreshPoolStatus();
  });
}

if (btnPoolPause) {
  btnPoolPause.addEventListener('click', () => {
    swimPaused = !swimPaused;
    if (poolMedia) poolMedia.classList.toggle('is-paused', swimPaused);
    btnPoolPause.setAttribute('aria-pressed', String(swimPaused));
    btnPoolPause.textContent = swimPaused ? dict[currentLang]['hero.pool_resume'] : dict[currentLang]['hero.pool_pause'];
  });
}

if (poolSvg) {
  setSwimmerOrientation(swimDir);
  updateSwimmerPos();
  requestAnimationFrame(stepPoolAnimation);
}

// ─── Interactive Story Timeline (USP -> Scrub Up -> UFCG -> Dados e IA) ───
const storyChapters = [
  {
    pt: {
      tag: 'Capítulo 01 · O começo no código',
      period: 'Jan 2018 – Jun 2019 · Poli-USP',
      title: '1. Comecei na Mecatrônica na USP e descobri o gosto por programar',
      body: 'Entrei na Engenharia Mecatrônica na USP, curso que mistura mecânica e eletrônica para criar máquinas. Nos trabalhos de aula, vi que minha parte favorita não eram peças físicas, e sim escrever os comandos no computador.',
      takeaway: 'Dica (o que é programar): é como escrever uma receita passo a passo para o computador trabalhar sozinho sem cansar.'
    },
    en: {
      tag: 'Chapter 01 · First steps in code',
      period: 'Jan 2018 – Jun 2019 · USP',
      title: '1. Started in Mechatronics at USP and discovered a taste for coding',
      body: 'I entered USP studying Mechatronics, engineering that combines mechanics and electronics to build machines. In class projects, though, I noticed my favorite part was writing instructions for computers.',
      takeaway: 'Plain tip (what coding means): writing a step-by-step recipe a computer runs on its own without getting tired.'
    }
  },
  {
    pt: {
      tag: 'Capítulo 02 · Entendendo quem usa o sistema',
      period: '2020 – 2024 · Scrub Up',
      title: '2. Trabalhei com vendas na Scrub Up e vi o software pela visão do cliente',
      body: 'Por quatro anos coordenei a rotina comercial da Scrub Up: organizar listas de clientes, acompanhar metas diárias e atender pedidos. Vi de perto como telas confusas atrasam quem trabalha com pressa.',
      takeaway: 'Dica (o que é funil comercial): é acompanhar o cliente do primeiro "oi" até a compra, o que me ensinou a nunca complicar sistemas.'
    },
    en: {
      tag: 'Chapter 02 · Learning from real users',
      period: '2020 – 2024 · Scrub Up',
      title: '2. Worked in sales at Scrub Up and saw software through users’ eyes',
      body: 'For four years I ran commercial operations at Scrub Up: organizing leads, daily targets and customer orders. Seeing how clunky tools slow busy workers taught me to keep interfaces simple.',
      takeaway: 'Plain tip (what a sales funnel is): tracking each buyer from hello to closed order, reminding me never to overbuild screens.'
    }
  },
  {
    pt: {
      tag: 'Capítulo 03 · Base técnica e ensinar pessoas',
      period: '2021 – Out 2026 · UFCG',
      title: '3. Me formei na UFCG e ajudei mais de 75 alunos a entender código',
      body: 'Concluí Ciência da Computação na UFCG em outubro de 2026, estudando como aplicativos, sites e bancos de dados funcionam por dentro. Também fui monitor (tutor fora da aula) de 40+ alunos em lógica e 35+ em sistemas.',
      takeaway: 'Dica (por que monitoria importa): treinei traduzir assuntos difíceis para português comum, a mesma clareza que levo para projetos.'
    },
    en: {
      tag: 'Chapter 03 · Solid CS foundation & teaching',
      period: '2021 – Oct 2026 · UFCG',
      title: '3. Graduated at UFCG and helped 75+ classmates understand software',
      body: 'Completed Computer Science at UFCG in October 2026, learning how apps and databases work behind the screen. I also served as a peer tutor for 40+ logic students and 35+ systems students.',
      takeaway: 'Plain tip (why mentoring helps teams): translating hard tech terms into everyday examples carries straight into working with clients.'
    }
  },
  {
    pt: {
      tag: 'Capítulo 04 · Dados reais e robôs de IA',
      period: '2025 – 2026 · Hoje',
      title: '4. Criei sistemas para uma antena espacial, bancos e agentes de IA',
      body: 'Apliquei tudo em projetos reais: melhorei o painel do radiotelescópio BINGO para não travar com dados ao vivo e fiz um leitor de PDFs. Hoje uso IA todo dia e foco em agentes de IA para automatizar tarefas.',
      takeaway: 'Dica (o que é agente de IA): não é só um bate-papo; é um assistente digital que lê dados, checa regras seguras e entrega tudo pronto.'
    },
    en: {
      tag: 'Chapter 04 · Real data & AI agents today',
      period: '2025 – 2026 · Today',
      title: '4. Built systems for a space antenna, large databases and AI agents',
      body: 'Applied everything on real projects: kept the BINGO radio telescope screen responsive and automated PDF cleanup. Today I use AI daily and build rule-checked AI agents that complete multi-step workflows.',
      takeaway: 'Plain tip (what an AI agent is): more than chat, it is a digital assistant that reads inputs, checks guardrails and finishes work safely.'
    }
  }
];

let activeStoryIdx = 0;
const storyActivePath = document.getElementById('storyActivePath');
const storyNodes = document.querySelectorAll('.story-node');
const storyTabs = document.querySelectorAll('.story-tab');
const storyTag = document.getElementById('storyDetailTag');
const storyPeriod = document.getElementById('storyDetailPeriod');
const storyTitle = document.getElementById('storyDetailTitle');
const storyBody = document.getElementById('storyDetailBody');
const storyTakeaway = document.getElementById('storyDetailTakeaway');
const btnPrevStory = document.getElementById('btnPrevStory');
const btnNextStory = document.getElementById('btnNextStory');

const storyPathTotalLen = storyActivePath && typeof storyActivePath.getTotalLength === 'function'
  ? Math.ceil(storyActivePath.getTotalLength())
  : 520;

if (storyActivePath) {
  storyActivePath.style.strokeDasharray = String(storyPathTotalLen);
}

function renderStoryChapter(idx) {
  if (!storyTitle || !storyBody) return;
  activeStoryIdx = ((idx % storyChapters.length) + storyChapters.length) % storyChapters.length;
  const item = storyChapters[activeStoryIdx][currentLang];
  if (storyTag) storyTag.textContent = item.tag;
  if (storyPeriod) storyPeriod.textContent = item.period;
  storyTitle.textContent = item.title;
  storyBody.textContent = item.body;
  if (storyTakeaway) storyTakeaway.textContent = item.takeaway;

  storyNodes.forEach((node) => {
    const step = Number(node.dataset.step);
    node.classList.toggle('is-active', step === activeStoryIdx);
  });

  storyTabs.forEach((tab) => {
    const step = Number(tab.dataset.step);
    tab.setAttribute('aria-selected', String(step === activeStoryIdx));
  });

  if (storyActivePath) {
    const progress = activeStoryIdx / (storyChapters.length - 1);
    storyActivePath.style.strokeDashoffset = String(Math.round(storyPathTotalLen * (1 - progress)));
  }
}

storyTabs.forEach((tab) => {
  tab.addEventListener('click', () => renderStoryChapter(Number(tab.dataset.step)));
});

storyNodes.forEach((node) => {
  node.addEventListener('click', () => renderStoryChapter(Number(node.dataset.step)));
});

if (btnPrevStory) btnPrevStory.addEventListener('click', () => renderStoryChapter(activeStoryIdx - 1));
if (btnNextStory) btnNextStory.addEventListener('click', () => renderStoryChapter(activeStoryIdx + 1));

// Track active nav section on scroll (nav-current)
const navSectionIds = ['jornada', 'projetos', 'sistemas', 'pessoal'];
if ('IntersectionObserver' in window) {
  const navLinks = document.querySelectorAll('.nav__links .nav__link');
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.id;
        navLinks.forEach((a) => {
          if (a.getAttribute('href') === `#${id}`) a.setAttribute('aria-current', 'page');
          else a.removeAttribute('aria-current');
        });
      }
    },
    { threshold: 0.45 }
  );
  navSectionIds.forEach((id) => {
    const sec = document.getElementById(id);
    if (sec) io.observe(sec);
  });
}

// ─── Interactive Project 1: BINGO Async Toggle ───
let bingoAsync = true;
const btnBingoToggle = document.getElementById('btnBingoToggle');
const bingoReadout = document.getElementById('bingoReadout');
const bingoWire2 = document.getElementById('bingoWire2');
const bingoMidBox = document.getElementById('bingoMidBox');
const bingoMidTitle = document.getElementById('bingoMidTitle');
const bingoMidSub = document.getElementById('bingoMidSub');
const bingoEndBox = document.getElementById('bingoEndBox');
const bingoEndSub = document.getElementById('bingoEndSub');

function renderBingoState() {
  if (!btnBingoToggle || !bingoReadout) return;
  if (bingoAsync) {
    btnBingoToggle.textContent = currentLang === 'pt' ? 'Simular tela sem fila' : 'Simulate blocking UI';
    bingoReadout.textContent = currentLang === 'pt'
      ? 'Modo atual: 2º plano ativo (tela fluida)'
      : 'Current: background queue active (smooth UI)';
    if (bingoMidBox) { bingoMidBox.classList.add('schema-box--accent'); bingoMidBox.classList.remove('schema-box--warn'); }
    if (bingoEndBox) bingoEndBox.classList.remove('schema-box--warn');
    if (bingoWire2) bingoWire2.classList.remove('schema-wire--warn');
    if (bingoMidTitle) bingoMidTitle.textContent = currentLang === 'pt' ? '2º Plano' : 'Worker';
    if (bingoMidSub) bingoMidSub.textContent = currentLang === 'pt' ? 'Fila isolada' : 'Queue active';
    if (bingoEndSub) bingoEndSub.textContent = currentLang === 'pt' ? '113 testes OK' : '113 tests OK';
  } else {
    btnBingoToggle.textContent = currentLang === 'pt' ? 'Ativar 2º plano (BINGO)' : 'Enable background worker';
    bingoReadout.textContent = currentLang === 'pt'
      ? 'Sem fila: cálculo pesado trava a tela!'
      : 'Blocking mode: heavy math freezes UI!';
    if (bingoMidBox) { bingoMidBox.classList.remove('schema-box--accent'); bingoMidBox.classList.add('schema-box--warn'); }
    if (bingoEndBox) bingoEndBox.classList.add('schema-box--warn');
    if (bingoWire2) bingoWire2.classList.add('schema-wire--warn');
    if (bingoMidTitle) bingoMidTitle.textContent = currentLang === 'pt' ? 'Na Tela' : 'Main UI';
    if (bingoMidSub) bingoMidSub.textContent = currentLang === 'pt' ? 'Sem fila' : 'No queue';
    if (bingoEndSub) bingoEndSub.textContent = currentLang === 'pt' ? 'Tela travada' : 'UI frozen';
  }
}

if (btnBingoToggle) {
  btnBingoToggle.addEventListener('click', () => {
    bingoAsync = !bingoAsync;
    renderBingoState();
  });
}

// ─── Interactive Project 2: PDF Extractor & PostgreSQL Stepper ───
let etlStepIdx = 0;
const btnEtlStep = document.getElementById('btnEtlStep');
const etlReadout = document.getElementById('etlReadout');
const etlSteps = [
  document.getElementById('etlStep0'),
  document.getElementById('etlStep1'),
  document.getElementById('etlStep2')
];

function renderEtlState() {
  if (!etlReadout) return;
  if (btnEtlStep) {
    btnEtlStep.textContent = currentLang === 'pt' ? 'Simular próxima etapa' : 'Simulate next step';
  }
  const labelsPt = [
    'Etapa 1/3: Lendo 33 relatórios em PDF',
    'Etapa 2/3: Removendo linhas repetidas',
    'Etapa 3/3: 105.582 registros salvos no banco'
  ];
  const labelsEn = [
    'Step 1/3: Reading 33 PDF reports',
    'Step 2/3: Cleaning duplicate records',
    'Step 3/3: 105,582 rows saved in PostgreSQL'
  ];
  etlReadout.textContent = currentLang === 'pt' ? labelsPt[etlStepIdx] : labelsEn[etlStepIdx];
  etlSteps.forEach((el, idx) => {
    if (!el) return;
    el.classList.toggle('is-dim', idx !== etlStepIdx);
    const rect = el.querySelector('rect');
    if (rect) rect.classList.toggle('schema-box--accent', idx === etlStepIdx);
  });
}

if (btnEtlStep) {
  btnEtlStep.addEventListener('click', () => {
    etlStepIdx = (etlStepIdx + 1) % 3;
    renderEtlState();
  });
}

// ─── Interactive Copa 2026 Predictor ───
const teamData = {
  BRA: { name: 'Brasil', att: 1.55, def: 0.72 },
  ARG: { name: 'Argentina', att: 1.48, def: 0.70 },
  FRA: { name: 'França', att: 1.52, def: 0.75 },
  ESP: { name: 'Espanha', att: 1.44, def: 0.78 },
  ENG: { name: 'Inglaterra', att: 1.38, def: 0.79 },
  GER: { name: 'Alemanha', att: 1.40, def: 0.84 }
};

const selTeamA = document.getElementById('teamA');
const selTeamB = document.getElementById('teamB');
const travelRange = document.getElementById('travelDist');
const travelReadout = document.getElementById('travelDistVal');
const copaSvgTitle = document.getElementById('copaSvgTitle');
const copaSvgSub = document.getElementById('copaSvgSub');
const copaBarA = document.getElementById('copaBarA');
const copaBarB = document.getElementById('copaBarB');

function poisson(k, lambda) {
  let fact = 1;
  for (let i = 2; i <= k; i += 1) fact *= i;
  return (Math.pow(lambda, k) * Math.exp(-lambda)) / fact;
}

function renderCopaMini() {
  if (!selTeamA || !selTeamB || !copaSvgTitle) return;
  const a = teamData[selTeamA.value] || teamData.BRA;
  const b = teamData[selTeamB.value] || teamData.ARG;
  const km = Number(travelRange ? travelRange.value : 1500);
  if (travelReadout) travelReadout.textContent = `${km} km`;

  const fatiguePenalty = 1 - Math.min(0.18, (km / 10000) * 0.14);
  const lamA = Math.max(0.25, a.att * b.def * 1.15);
  const lamB = Math.max(0.25, b.att * a.def * fatiguePenalty);

  let winA = 0;
  let draw = 0;
  let winB = 0;
  for (let ga = 0; ga <= 4; ga += 1) {
    for (let gb = 0; gb <= 4; gb += 1) {
      const p = poisson(ga, lamA) * poisson(gb, lamB);
      if (ga > gb) winA += p;
      else if (ga === gb) draw += p;
      else winB += p;
    }
  }
  const tot = winA + draw + winB || 1;
  const pA = Math.round((winA / tot) * 100);
  const pD = Math.round((draw / tot) * 100);
  const pB = 100 - pA - pD;

  const drawLabel = currentLang === 'pt' ? 'Empate' : 'Draw';
  copaSvgTitle.textContent = `${a.name} ${pA}% · ${drawLabel} ${pD}% · ${b.name} ${pB}%`;
  if (copaSvgSub) {
    copaSvgSub.textContent = currentLang === 'pt'
      ? `Força histórica e ${km} km de viagem`
      : `Historical strength and ${km} km travel`;
  }
  const totalW = 380;
  const wA = Math.round((pA / 100) * totalW);
  const wB = Math.round((pB / 100) * totalW);
  if (copaBarA) copaBarA.setAttribute('width', String(wA));
  if (copaBarB) {
    copaBarB.setAttribute('x', String(40 + totalW - wB));
    copaBarB.setAttribute('width', String(wB));
  }
}

if (selTeamA && selTeamB && travelRange) {
  selTeamA.addEventListener('change', renderCopaMini);
  selTeamB.addEventListener('change', renderCopaMini);
  travelRange.addEventListener('input', renderCopaMini);
}

// ─── Interactive AI Agents & Jobs Stepper ───
let aiStepIdx = 0;
const btnAiStep = document.getElementById('btnAiStep');
const aiReadout = document.getElementById('aiReadout');
const aiSteps = [
  document.getElementById('aiStep0'),
  document.getElementById('aiStep1'),
  document.getElementById('aiStep2')
];

function renderAiState() {
  if (!aiReadout) return;
  if (btnAiStep) {
    btnAiStep.textContent = currentLang === 'pt' ? 'Testar passo do agente' : 'Run next agent step';
  }
  const labelsPt = [
    'Passo 1/3: Recebe vaga ou pedido',
    'Passo 2/3: Agente de IA valida regras',
    'Passo 3/3: Organiza painel pronto para uso'
  ];
  const labelsEn = [
    'Step 1/3: Reads job feed or user request',
    'Step 2/3: AI Agent checks structured rules',
    'Step 3/3: Delivers sorted action board'
  ];
  aiReadout.textContent = currentLang === 'pt' ? labelsPt[aiStepIdx] : labelsEn[aiStepIdx];
  aiSteps.forEach((el, idx) => {
    if (!el) return;
    el.classList.toggle('is-dim', idx !== aiStepIdx);
    const rect = el.querySelector('rect');
    if (rect) rect.classList.toggle('schema-box--accent', idx === aiStepIdx);
  });
}

if (btnAiStep) {
  btnAiStep.addEventListener('click', () => {
    aiStepIdx = (aiStepIdx + 1) % 3;
    renderAiState();
  });
}

// ─── Personal Cards: Swimming & Language Passport ───
const swimNotes = {
  pt: [
    '50m Livre · 25m piscina · Foco em saída limpa e ritmo constante.',
    '100m Livre · Controle de respiração + viradas rápidas na parede.',
    'Série aeróbica 8x100m · Consistência física que levo para o código.'
  ],
  en: [
    '50m Freestyle · 25m pool · Clean start and steady pace focus.',
    '100m Freestyle · Breathing rhythm + tight wall flip turns.',
    '8x100m aerobic set · Physical consistency carried into engineering.'
  ]
};
let swimNoteIdx = 0;
const btnSwimMood = document.getElementById('btnSwimMood');
const swimMoodDisplay = document.getElementById('swimMoodDisplay');

if (btnSwimMood && swimMoodDisplay) {
  btnSwimMood.addEventListener('click', () => {
    swimNoteIdx = (swimNoteIdx + 1) % swimNotes[currentLang].length;
    swimMoodDisplay.textContent = swimNotes[currentLang][swimNoteIdx];
  });
}

function renderSwimNote(skipIncrement) {
  if (!swimMoodDisplay) return;
  if (!skipIncrement) swimNoteIdx = 0;
  swimMoodDisplay.textContent = swimNotes[currentLang][swimNoteIdx];
}

const passportQuotes = {
  pt: 'Português (Nativo): Comunicação clara para alinhar requisitos e ensinar colegas.',
  en: 'English (Advanced): Fluent technical discussions, writing specs and daily collaboration with global teams.',
  fr: 'Français (Intermédiaire): Leitura de documentação e conversação estruturada no trabalho.',
  es: 'Español (Intermedio): Comunicación diaria e interacción fluida con equipos hispanohablantes.'
};

const stampBtns = document.querySelectorAll('.stamp-btn');
const passportQuoteEl = document.getElementById('passportQuote');
stampBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    stampBtns.forEach((b) => {
      b.classList.remove('is-active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-pressed', 'true');
    if (passportQuoteEl) passportQuoteEl.textContent = passportQuotes[btn.dataset.lang] || passportQuotes.pt;
  });
});

// ─── Copy Email Action ───
const copyEmailBtn = document.getElementById('copyEmailBtn');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('raphaelramosc@gmail.com');
      copyEmailBtn.textContent = dict[currentLang]['close.copied'];
      setTimeout(() => {
        copyEmailBtn.textContent = dict[currentLang]['close.copy'];
      }, 2200);
    } catch {
      window.location.href = 'mailto:raphaelramosc@gmail.com';
    }
  });
}

// Initial state
try {
  const savedTheme = localStorage.getItem('portfolio_theme');
  applyTheme(savedTheme === 'light' ? 'light' : 'dark');
} catch {
  applyTheme('dark');
}
applyLanguage('pt');
document.documentElement.dataset.appReady = '1';
