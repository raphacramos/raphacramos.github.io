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
    'nav.extras': 'Sistemas',
    'nav.personal': 'Perfil',
    'nav.cta': 'Baixar currículo',

    'hero.cat': 'Software, dados e sistemas',
    'hero.title': 'Software e dados em sistemas reais.',
    'hero.lead': 'Raphael Ramos, formado em Ciência da Computação pela UFCG (Out 2026). Transformo dados brutos e problemas complexos em software claro de usar.',
    'hero.cta': 'Baixar currículo',
    'hero.alt': 'Ver projetos explicados',
    'hero.pool_status': 'Raia 4 · 25m',
    'hero.pool_turn': 'Inverter direção',
    'hero.pool_pause': 'Pausar nado',
    'hero.pool_resume': 'Retomar nado',

    'stmt.title': 'Software simples para problemas reais',
    'stmt.sub': 'Meu foco é pegar processos confusos, arquivos dispersos ou sinais científicos e transformá-los em sistemas rápidos e fáceis de operar.',

    'journey.title': 'Trajetória de software na USP, Scrub Up e UFCG',
    'journey.sub': 'Clique nos círculos do mapa ou nos botões para acompanhar cada fase.',
    'journey.prev': 'Capítulo anterior',
    'journey.next': 'Próximo capítulo',

    'proj.title': 'Projetos de software: BINGO e Banco de Dados',
    'proj.sub': 'Explicação direta do que cada projeto resolve na prática, sem jargão.',
    'proj.c1_title': 'Software para o Radiotelescópio BINGO',
    'proj.c1_desc': 'O radiotelescópio gera grande volume de sinais ao vivo. Antes, fazer essas contas travava a tela de controle. Passei o trabalho pesado para segundo plano e criei 113 testes automáticos para tudo rodar fluido e seguro.',
    'proj.c2_title': 'Leitor de Relatórios PDF e Banco de Dados',
    'proj.c2_desc': 'Desenvolvi um programa que lê 33 relatórios extensos em PDF, corrige dados repetidos e organiza 105.582 linhas limpas no banco PostgreSQL para consultas e análises rápidas.',

    'ext.title': 'Sistemas práticos: Copa, Vagas e Wonderlic',
    'ext.sub': 'Projetos menores para resolver problemas do dia a dia com dados e navegador.',
    'ext.c1_title': 'Preditor Copa 2026 e Monitor de Vagas',
    'ext.c1_desc': 'Sistema estatístico que estima placares levando em conta o histórico das seleções e a distância de viagem entre sedes, além de um robô pessoal que organiza vagas num único painel.',
    'ext.c2_title': 'Simulador Wonderlic (490 questões)',
    'ext.c2_desc': 'Treinador aberto no navegador para praticar provas de raciocínio lógico cronometradas em 12 minutos, sem precisar instalar nada.',
    'ext.c2_cta': 'Abrir simulador Wonderlic',

    'pers.title': 'Software, natação, idiomas e monitoria na UFCG',
    'pers.sub': 'Rotina fora do código aplicada ao trabalho em equipe.',
    'pers.swim_title': 'Natação 25m e Monitoria UFCG (75+ alunos)',
    'pers.swim_desc': 'Treinos diários em piscina curta aliados à monitoria ajudando mais de 40 alunos em algoritmos e mais de 35 em sistemas.',
    'pers.swim_btn': 'Registrar parcial',
    'pers.lang_title': 'Idiomas PT, EN, FR e ES',
    'pers.lang_desc': 'Português nativo, Inglês avançado, Francês e Espanhol intermediários para times internacionais.',

    'close.title': 'Contato para equipes de software e dados',
    'close.sub': 'Formado em Ciência da Computação pela UFCG em outubro de 2026.',
    'close.cta': 'Baixar currículo',
    'close.copy': 'Copiar e-mail',
    'close.copied': 'E-mail copiado',
    'close.github': 'GitHub',
    'close.linkedin': 'LinkedIn',
    'close.wonderlic': 'Wonderlic'
  },
  en: {
    'nav.skip': 'Skip to content',
    'nav.journey': 'Journey',
    'nav.projects': 'Projects',
    'nav.extras': 'Systems',
    'nav.personal': 'Profile',
    'nav.cta': 'Download resume',

    'hero.cat': 'Software, data and systems',
    'hero.title': 'Software and data in real systems.',
    'hero.lead': 'Raphael Ramos, Computer Science graduate from UFCG (Oct 2026). I turn raw data and messy workflows into clear, reliable software.',
    'hero.cta': 'Download resume',
    'hero.alt': 'See explained projects',
    'hero.pool_status': 'Lane 4 · 25m',
    'hero.pool_turn': 'Flip turn',
    'hero.pool_pause': 'Pause swim',
    'hero.pool_resume': 'Resume swim',

    'stmt.title': 'Simple software for real-world problems',
    'stmt.sub': 'I focus on turning messy manual workflows, scattered PDFs and scientific signals into fast, reliable tools anyone can run.',

    'journey.title': 'Software journey across USP, Scrub Up and UFCG',
    'journey.sub': 'Click the map nodes or chapter buttons to explore each stage.',
    'journey.prev': 'Previous chapter',
    'journey.next': 'Next chapter',

    'proj.title': 'Software projects: BINGO and Data Pipeline',
    'proj.sub': 'Plain-language breakdown of what each system solves in practice.',
    'proj.c1_title': 'Software for the BINGO Radio Telescope',
    'proj.c1_desc': 'Live telescope telemetry used to freeze the operator screen. I moved heavy math into isolated background workers and verified everything with 113 automated tests.',
    'proj.c2_title': 'PDF Report Extractor and Database',
    'proj.c2_desc': 'Automated script that reads 33 dense PDF reports, removes duplicate records and stores 105,582 clean rows inside PostgreSQL.',

    'ext.title': 'Applied systems: World Cup, Jobs and Wonderlic',
    'ext.sub': 'Practical browser and statistical tools built for real everyday tasks.',
    'ext.c1_title': 'World Cup 2026 Predictor & Job Organizer',
    'ext.c1_desc': 'Statistical model estimating match scores using team strength and stadium travel distance, paired with an automated personal job board.',
    'ext.c2_title': 'Wonderlic Simulator (490 questions)',
    'ext.c2_desc': 'Zero-install browser trainer to practice 12-minute timed reasoning tests with 490 real questions.',
    'ext.c2_cta': 'Open Wonderlic simulator',

    'pers.title': 'Software, swimming, languages and UFCG mentoring',
    'pers.sub': 'Discipline outside the editor applied to engineering teams.',
    'pers.swim_title': '25m Swimming & UFCG Mentoring (75+ students)',
    'pers.swim_desc': 'Daily short-course training paired with teaching assistantship supporting 40+ algorithms and 35+ systems students.',
    'pers.swim_btn': 'Log split',
    'pers.lang_title': 'Languages PT, EN, FR and ES',
    'pers.lang_desc': 'Native Portuguese, Advanced English, Intermediate French and Spanish for global teams.',

    'close.title': 'Contact for software and data teams',
    'close.sub': 'B.Sc. in Computer Science from UFCG in October 2026.',
    'close.cta': 'Download resume',
    'close.copy': 'Copy email',
    'close.copied': 'Email copied',
    'close.github': 'GitHub',
    'close.linkedin': 'LinkedIn',
    'close.wonderlic': 'Wonderlic'
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

// ─── Interactive Story Timeline (USP -> Scrub Up -> UFCG -> BINGO & Dados) ───
const storyChapters = [
  {
    pt: {
      tag: 'Capítulo 01 · Início na Poli-USP',
      period: 'Jan 2018 – Jun 2019 · USP',
      title: 'Engenharia Mecatrônica na USP (2018–2019)',
      body: 'Cursei o ciclo básico de Engenharia Mecatrônica na USP. Foi programando nos projetos da faculdade que percebi que construir software era o que mais fazia sentido, o que motivou minha mudança para a computação.',
      takeaway: 'Base forte em lógica matemática e transição consciente para computação.'
    },
    en: {
      tag: 'Chapter 01 · Starting at USP',
      period: 'Jan 2018 – Jun 2019 · USP',
      title: 'Mechatronics Engineering at USP (2018–2019)',
      body: 'Completed the foundational Mechatronics curriculum at USP. Coding in university projects showed me software was what I enjoyed most, motivating my switch to Computer Science.',
      takeaway: 'Strong quantitative math foundation guiding software architecture.'
    }
  },
  {
    pt: {
      tag: 'Capítulo 02 · Operação Real',
      period: '2020 – 2024 · Scrub Up',
      title: 'Gestão comercial e dados na Scrub Up (2020–2024)',
      body: 'Coordenei rotina comercial, organização de funil de clientes e metas diárias em vendas recorrentes. Isso me ensinou a enxergar software pelo olho de quem realmente vai usar no dia a dia.',
      takeaway: 'Visão prática de negócios para nunca complicar sistemas sem necessidade.'
    },
    en: {
      tag: 'Chapter 02 · Real Operations',
      period: '2020 – 2024 · Scrub Up',
      title: 'Commercial management at Scrub Up (2020–2024)',
      body: 'Managed daily sales workflows, customer funnels and team targets. Working outside pure code taught me to design tools around real end-user needs.',
      takeaway: 'Practical business fluency that avoids unnecessary technical complexity.'
    }
  },
  {
    pt: {
      tag: 'Capítulo 03 · Ciência da Computação',
      period: '2021 – Out 2026 · UFCG',
      title: 'Ciência da Computação e Monitoria na UFCG (2021–2026)',
      body: 'Formado em outubro de 2026 em Ciência da Computação pela UFCG. Durante o curso apoiei mais de 40 alunos na monitoria de algoritmos (ATAL) e mais de 35 em análise e projeto de sistemas (ADSI).',
      takeaway: 'Formação sólida em algoritmos, bancos de dados e ensino colaborativo.'
    },
    en: {
      tag: 'Chapter 03 · Computer Science',
      period: '2021 – Oct 2026 · UFCG',
      title: 'Computer Science & Mentoring at UFCG (2021–2026)',
      body: 'Graduated in Computer Science (Oct 2026) at UFCG. Mentored 40+ students in Algorithms and Data Structures and 35+ students in Systems Analysis.',
      takeaway: 'Solid algorithms, databases and collaborative engineering mentoring.'
    }
  },
  {
    pt: {
      tag: 'Capítulo 04 · Sistemas em Produção',
      period: '2025 – 2026 · Software e Dados',
      title: 'Software no Radiotelescópio BINGO e Banco de Dados (2025–2026)',
      body: 'Atuei no software do radiotelescópio BINGO mantendo telas fluidas com 113 testes automáticos, e criei um leitor de PDFs no TCC que organizou 105.582 linhas limpas no PostgreSQL.',
      takeaway: 'Sistemas testados ponta a ponta para transformar dados complexos em respostas claras.'
    },
    en: {
      tag: 'Chapter 04 · Production Systems',
      period: '2025 – 2026 · Software & Data',
      title: 'BINGO Telescope Software & PostgreSQL ETL (2025–2026)',
      body: 'Built non-blocking background workers with 113 automated tests for BINGO radio astronomy, plus a 105,582-row PostgreSQL pipeline from 33 PDF reports.',
      takeaway: 'Tested systems turning raw data into clean, understandable tools.'
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

// ─── Personal Cards: Swimming & Language Passport ───
const swimNotes = {
  pt: [
    '50m Livre · 25m piscina · Parcial registrada com ritmo constante.',
    '100m Livre · Saída limpa + 3 viradas rápidas.',
    'Série aeróbica 8x100m · Foco em eficiência de braçada.'
  ],
  en: [
    '50m Freestyle · 25m pool · Consistent split cadence logged.',
    '100m Freestyle · Clean break + 3 tight flip turns.',
    '8x100m aerobic set · Stroke efficiency focus.'
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
  pt: 'Português (Nativo): Documentação clara e comunicação objetiva com qualquer área da empresa.',
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
