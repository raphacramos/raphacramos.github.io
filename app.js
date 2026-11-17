import fx from './assets/effects/fx.js';
import './assets/moments/moments.js';

// Mount dealt ambient canvas effect ([data-fx="gradient-mesh"] in hero)
fx.mountAll(document);

// ─── I18N Dictionary ───
const dict = {
  pt: {
    'nav.skip': 'Pular para o conteúdo',
    'nav.journey': 'Trajetória',
    'nav.lab': 'Simuladores',
    'nav.projects': 'Projetos',
    'nav.personal': 'Perfil',
    'nav.cta': 'Baixar currículo',

    'hero.cat': 'Engenharia de software, dados e telemetria',
    'hero.title': 'Sistemas distribuídos e dados em produção.',
    'hero.lead': 'Raphael Ramos. Engenheiro de Computação pela UFCG com foco em Python, pipelines em PostgreSQL e agentes de IA.',
    'hero.cta': 'Baixar currículo',
    'hero.alt': 'Explorar simuladores',
    'hero.pool_status': 'Raia 4 · 25m',
    'hero.pool_turn': 'Inverter direção',
    'hero.pool_pause': 'Pausar nado',
    'hero.pool_resume': 'Retomar nado',

    'stmt.title': 'Sistemas em Python e PostgreSQL',
    'stmt.sub': 'Da coleta de sinais de rádio em Python até pipelines deduplicados em PostgreSQL e agentes autônomos com contratos estruturados.',

    'journey.title': 'Engenharia na USP, Scrub Up e UFCG',
    'journey.sub': 'Da USP à engenharia de software na UFCG e pesquisa aplicada.',
    'journey.prev': 'Capítulo anterior',
    'journey.next': 'Próximo capítulo',

    'lab.title': 'Simuladores de engenharia em tempo real',
    'lab.sub': 'Telemetria, grafos de agentes, predição estatística e roteamento em rede.',
    'lab.tab1': 'BINGO SDR',
    'lab.tab2': 'LangGraph',
    'lab.tab3': 'Copa 2026',
    'lab.tab4': 'Malha RIP',
    'lab.p1_title': 'Analisador de telemetria BINGO SDR',
    'lab.p1_desc': 'Workers assíncronos por sessão isolam processamento de sinal e exclusividade de hardware, validados por 113 testes em pytest.',
    'lab.p2_title': 'Agente de software LangGraph',
    'lab.p2_desc': 'Grafo de estados em Python com esquemas Pydantic tipados, validação estrutural e execução segura de plano de recuperação.',
    'lab.p3_title': 'Preditor Dixon-Coles Copa 2026',
    'lab.p3_desc': 'Matriz bivariada de placares com ponderação temporal, Pi-Ratings dinâmicos e penalidade por deslocamento Haversine.',
    'lab.p4_title': 'Malha RIP R1 a R12 com Split Horizon',
    'lab.p4_desc': 'Simule falha em qualquer enlace clicando na aresta e acompanhe o recálculo imediato da melhor rota.',
    'lab.rfi': 'Injetar RFI',
    'lab.sound': 'Ouvir espectro',
    'lab.sound_off': 'Parar áudio',
    'lab.chaos_ok': 'Executar nominal',
    'lab.chaos_retry': 'Simular falha leve',
    'lab.chaos_block': 'Simular falha crítica',
    'lab.rip_reset': 'Restaurar enlaces',

    'proj.title': 'Arquitetura BINGO e ETL em PostgreSQL',
    'proj.sub': 'Repositórios públicos construídos em Python, PostgreSQL, Docker e FastAPI.',
    'proj.c1_title': 'BINGO-PB · Telemetria SDR',
    'proj.c1_desc': 'Receptor WebSDR em arquitetura limpa com HDF5, Skyfield e 113 testes automatizados em pytest.',
    'proj.c1_term_title': 'pytest — rfstream',
    'proj.c2_title': 'Pipeline ETL em PostgreSQL',
    'proj.c2_desc': 'Extração de 33 relatórios em PDF e deduplicação em 105.582 registros via SQLAlchemy com suíte Scikit-Learn.',
    'proj.c5_title': 'Simulador Wonderlic (490 questões)',
    'proj.c5_desc': 'Banco interativo com 490 questões cronometradas sem dependências externas.',
    'proj.iris_title': 'Engenharia de software LangGraph e Wonderlic',
    'proj.iris_desc': 'Orquestração de tarefas em StateGraph com saída validada em Pydantic e fallback determinístico em cada etapa.',
    'proj.iris_cta': 'Abrir simulador Wonderlic',

    'pers.title': 'Engenharia, natação, idiomas e monitoria UFCG',
    'pers.sub': 'Rotina fora do terminal aplicada à engenharia colaborativa.',
    'pers.swim_title': 'Natação 25m e Monitoria UFCG (75+ alunos)',
    'pers.swim_desc': 'Treinos diários em piscina curta aliados à monitoria de ATAL (40+ alunos) e ADSI (35+ alunos) na UFCG.',
    'pers.swim_btn': 'Registrar parcial',
    'pers.lang_title': 'Idiomas PT, EN, FR e ES',
    'pers.lang_desc': 'Português nativo, Inglês avançado, Francês e Espanhol intermediários para times internacionais.',

    'close.title': 'Contato para equipes de engenharia e dados',
    'close.sub': 'Graduado em Engenharia de Computação pela UFCG em outubro de 2026.',
    'close.cta': 'Baixar currículo',
    'close.copy': 'Copiar e-mail',
    'close.copied': 'E-mail copiado',
    'close.github': 'GitHub',
    'close.linkedin': 'LinkedIn',
    'close.wonderlic': 'Wonderlic'
  },
  en: {
    'nav.skip': 'Skip to content',
    'nav.journey': 'Trajectory',
    'nav.lab': 'Lab',
    'nav.projects': 'Projects',
    'nav.personal': 'Profile',
    'nav.cta': 'Download resume',

    'hero.cat': 'Software, data and telemetry engineering',
    'hero.title': 'Distributed systems and data in production.',
    'hero.lead': 'Raphael Ramos. Computer Engineer (UFCG) focused on Python backends, PostgreSQL pipelines and AI agents.',
    'hero.cta': 'Download resume',
    'hero.alt': 'Explore lab',
    'hero.pool_status': 'Lane 4 · 25m',
    'hero.pool_turn': 'Flip turn',
    'hero.pool_pause': 'Pause',
    'hero.pool_resume': 'Resume',

    'stmt.title': 'Measurable engineering, tested code and deterministic paths.',
    'stmt.sub': 'From SDR telemetry workers to typed agent contracts.',

    'journey.title': 'Engineering and business trajectory',
    'journey.sub': 'From USP to software engineering at UFCG and applied research.',
    'journey.prev': 'Previous chapter',
    'journey.next': 'Next chapter',

    'lab.title': 'Four interactive simulators in the browser',
    'lab.sub': 'RF telemetry, stateful agent graphs, Dixon-Coles probabilities and RIP routing.',
    'lab.tab1': 'BINGO SDR',
    'lab.tab2': 'LangGraph',
    'lab.tab3': 'World Cup 2026',
    'lab.tab4': 'RIP Mesh',
    'lab.p1_title': 'Real-time spectrum and waterfall',
    'lab.p1_desc': 'Per-session background workers isolate numerical signal processing and hardware access, verified with 113 pytest tests.',
    'lab.p2_title': 'Routing with deterministic fallback',
    'lab.p2_desc': 'Python StateGraph with typed Pydantic schemas, schema verification and safe recovery execution.',
    'lab.p3_title': 'Dixon-Coles statistical engine',
    'lab.p3_desc': 'Bivariate scoreline probability matrix with time decay, dynamic Pi-Ratings and Haversine travel adjustment.',
    'lab.p4_title': 'R1 to R12 RIP topology with Split Horizon',
    'lab.p4_desc': 'Click any edge to toggle link faults and inspect immediate shortest-path convergence.',
    'lab.rfi': 'Inject RFI',
    'lab.sound': 'Listen audio',
    'lab.sound_off': 'Stop audio',
    'lab.chaos_ok': 'Run nominal',
    'lab.chaos_retry': 'Minor fault',
    'lab.chaos_block': 'Critical fault',
    'lab.rip_reset': 'Restore links',

    'proj.title': 'Verified architecture across research and shipping',
    'proj.sub': 'Public repositories built with Python, PostgreSQL, Docker and FastAPI.',
    'proj.c1_title': 'BINGO-PB · SDR Telemetry',
    'proj.c1_desc': 'Clean Architecture WebSDR receiver using HDF5, Skyfield and 113 automated pytest tests.',
    'proj.c1_term_title': 'pytest — rfstream',
    'proj.c2_title': 'PostgreSQL ETL Pipeline',
    'proj.c2_desc': 'Extraction from 33 PDF reports into 105,582 deduplicated SQLAlchemy rows with Scikit-Learn suite.',
    'proj.c3_title': 'World Cup 2026 Predictor',
    'proj.c3_desc': 'Dixon-Coles and Pi-Ratings probability service in FastAPI for tournament forecasting.',
    'proj.c4_title': 'Job Prospector',
    'proj.c4_desc': 'Automated Python aggregator with SQLite persistence and structured ingestion.',
    'proj.c5_title': 'Wonderlic Simulator',
    'proj.c5_desc': 'Zero-dependency timed 490-question training platform served statically.',
    'proj.iris_title': 'Autonomous agent with strict validation',
    'proj.iris_desc': 'Task orchestration via StateGraph with Pydantic schemas and deterministic fallback paths.',
    'proj.iris_cta': 'Open Wonderlic simulator',

    'pers.title': 'Pool discipline, languages and mentoring',
    'pers.sub': 'Habits outside the IDE applied to team engineering.',
    'pers.swim_title': 'Competitive swimming · 25m',
    'pers.swim_desc': 'Steady pacing across short-course daily sets. Each lap tracks cadence and focus.',
    'pers.swim_btn': 'Log split',
    'pers.lang_title': 'Technical communication in four languages',
    'pers.lang_desc': 'Native Portuguese, Advanced English, Intermediate French and Spanish for global engineering teams.',
    'pers.teach_title': 'Academic teaching assistant at UFCG',
    'pers.teach_desc': 'Supported 40+ students in Algorithms & Data Structures (ATAL) and 35+ students in Systems Analysis (ADSI).',

    'close.title': 'Ready to join software and data engineering teams',
    'close.sub': 'Computer Engineering graduate from UFCG in October 2026.',
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
  renderSonar(true);
  renderSonar(false);
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

// ─── Interactive Story Timeline ───
const storyChapters = [
  {
    pt: { tag: 'Capítulo 01 · Base Analítica', period: '2018 – 2019 · USP', title: 'Economia e dados na USP (2018–2019)', body: 'Formação inicial com modelagem quantitativa, estatística e microeconomia antes de migrar integralmente para Engenharia de Computação.', takeaway: 'Rigor estatístico e leitura de sistemas complexos aplicados a software.' },
    en: { tag: 'Chapter 01 · Quantitative Base', period: '2018 – 2019 · USP', title: 'Economics & Data at USP (2018–2019)', body: 'Initial undergraduate training in quantitative modeling and statistics prior to moving full-time into Computer Engineering.', takeaway: 'Statistical rigor applied directly to data and software architecture.' }
  },
  {
    pt: { tag: 'Capítulo 02 · Operação Real', period: '2020 – 2024 · Scrub Up', title: 'Operação de dados comerciais · Scrub Up (2020–2024)', body: 'Coordenação de equipe comercial, estruturação de funil e desenho de metas diárias para operação de vendas recorrentes.', takeaway: 'Clareza de negócio que orienta decisões técnicas em produção.' },
    en: { tag: 'Chapter 02 · Operations', period: '2020 – 2024 · Scrub Up', title: 'Commercial Data Operations · Scrub Up (2020–2024)', body: 'Led commercial operations, pipeline structuring and KPI discipline for recurring revenue teams.', takeaway: 'Business fluency guiding pragmatic architectural trade-offs.' }
  },
  {
    pt: { tag: 'Capítulo 03 · Engenharia na UFCG', period: '2021 – 2026 · UFCG', title: 'Engenharia de Computação na UFCG (2021–2026)', body: 'Conclusão prevista para out/2026 com pesquisa em radioastronomia (BINGO), pipeline ETL em PostgreSQL e orientação de mais de 75 alunos.', takeaway: 'Base sólida em algoritmos, arquitetura limpa e engenharia de dados.' },
    en: { tag: 'Chapter 03 · UFCG Engineering', period: '2021 – 2026 · UFCG', title: 'Computer Engineering at UFCG (2021–2026)', body: 'Graduating Oct 2026 with research in radio astronomy (BINGO), PostgreSQL ETL pipelines and mentoring for 75+ students.', takeaway: 'Strong foundation in algorithms, Clean Architecture and data pipelines.' }
  },
  {
    pt: { tag: 'Capítulo 04 · Produção e IA', period: '2025 – 2026 · Sistemas', title: 'Software, telemetria e agentes (2025–2026)', body: 'Projetos públicos unindo Python, FastAPI, Docker, Pydantic, LangGraph e modelagem probabilística com suíte de testes automatizados.', takeaway: 'Entregas verificáveis desde o protocolo de entrada até a observabilidade.' },
    en: { tag: 'Chapter 04 · Production & AI', period: '2025 – 2026 · Systems', title: 'Software, Telemetry & Agents (2025–2026)', body: 'Public projects uniting Python, FastAPI, Docker, Pydantic, LangGraph and statistical engines under automated tests.', takeaway: 'Verified end-to-end delivery from ingestion schema to test suite.' }
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

function renderStoryChapter(idx) {
  if (!storyTag) return;
  activeStoryIdx = ((idx % storyChapters.length) + storyChapters.length) % storyChapters.length;
  const item = storyChapters[activeStoryIdx][currentLang];
  storyTag.textContent = item.tag;
  storyPeriod.textContent = item.period;
  storyTitle.textContent = item.title;
  storyBody.textContent = item.body;
  storyTakeaway.textContent = item.takeaway;

  storyNodes.forEach((node) => {
    const step = Number(node.dataset.step);
    node.classList.toggle('is-active', step === activeStoryIdx);
  });

  storyTabs.forEach((tab) => {
    const step = Number(tab.dataset.step);
    tab.setAttribute('aria-selected', String(step === activeStoryIdx));
  });

  if (storyActivePath) {
    const totalLen = 760;
    const progress = activeStoryIdx / (storyChapters.length - 1);
    storyActivePath.style.strokeDashoffset = String(Math.round(totalLen * (1 - progress)));
  }
}

storyTabs.forEach((tab) => {
  tab.addEventListener('click', () => renderStoryChapter(Number(tab.dataset.step)));
});

// Track active nav section on scroll (nav-current)
const navSectionIds = ['jornada', 'laboratorio', 'projetos', 'pessoal'];
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

if (btnPrevStory) btnPrevStory.addEventListener('click', () => renderStoryChapter(activeStoryIdx - 1));
if (btnNextStory) btnNextStory.addEventListener('click', () => renderStoryChapter(activeStoryIdx + 1));

// ─── Lab 1: BINGO SDR + Waterfall Canvas ───
const specCanvas = document.getElementById('spectrumCanvas');
const wfCanvas = document.getElementById('waterfallCanvas');
const crosshairReadout = document.getElementById('crosshairReadout');
const hudPeak = document.getElementById('hudPeak');
const hudSnr = document.getElementById('hudSnr');
const hudState = document.getElementById('hudState');
const btnRfi = document.getElementById('btnInjectRfi');
const btnSound = document.getElementById('btnSonarSound');

let rfiEnabled = false;
let audioCtx = null;
let audioOsc = null;
let audioGain = null;
let pointerRatioX = 0.5;
const waterfallRows = [];

function resizeLabCanvases() {
  if (!specCanvas || !wfCanvas) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const sW = specCanvas.clientWidth;
  const sH = specCanvas.clientHeight;
  if (sW > 0 && sH > 0) {
    specCanvas.width = Math.round(sW * dpr);
    specCanvas.height = Math.round(sH * dpr);
  }
  const wW = wfCanvas.clientWidth;
  const wH = wfCanvas.clientHeight;
  if (wW > 0 && wH > 0) {
    wfCanvas.width = Math.round(wW * dpr);
    wfCanvas.height = Math.round(wH * dpr);
  }
}

function drawBingoLoop(timeMs) {
  if (!specCanvas || !wfCanvas) return;
  const screenEl = document.getElementById('screen-1');
  if (screenEl && !screenEl.hidden) {
    if (specCanvas.width === 0 || specCanvas.width !== Math.round(specCanvas.clientWidth * Math.min(window.devicePixelRatio || 1, 2))) {
      resizeLabCanvases();
    }
    const t = timeMs / 1000;
    const sCtx = specCanvas.getContext('2d');
    const wCtx = wfCanvas.getContext('2d');
    const sw = specCanvas.width;
    const sh = specCanvas.height;
    const ww = wfCanvas.width;
    const wh = wfCanvas.height;

    if (sw > 0 && sh > 0 && sCtx && wCtx) {
      const N = 128;
      const bins = new Float32Array(N);
      let peakBin = 0;
      let peakDb = -120;
      for (let i = 0; i < N; i += 1) {
        const u = i / (N - 1);
        const hi = 24 * Math.exp(-(((u - 0.52) / 0.045) ** 2));
        const rfiSpike = rfiEnabled ? 34 * Math.exp(-(((u - (0.28 + Math.sin(t * 1.3) * 0.05)) / 0.014) ** 2)) : 0;
        const ripple = Math.sin(u * 26 + t * 2.1) * 1.8 + Math.cos(u * 53 - t * 3.2) * 1.4;
        const db = -96 + hi + rfiSpike + ripple;
        bins[i] = db;
        if (db > peakDb) {
          peakDb = db;
          peakBin = i;
        }
      }

      const freqMhz = (1418 + (peakBin / N) * 4.8).toFixed(2);
      if (hudPeak) hudPeak.textContent = `${freqMhz} MHz`;
      if (hudSnr) hudSnr.textContent = `+${(peakDb + 96).toFixed(1)} dB`;
      if (hudState) hudState.textContent = rfiEnabled ? 'RFI ALERT' : 'NOMINAL';

      sCtx.fillStyle = '#070a10';
      sCtx.fillRect(0, 0, sw, sh);

      sCtx.strokeStyle = 'rgba(255,255,255,0.08)';
      sCtx.lineWidth = 1;
      for (let g = 1; g < 4; g += 1) {
        const y = (sh / 4) * g;
        sCtx.beginPath();
        sCtx.moveTo(0, y);
        sCtx.lineTo(sw, y);
        sCtx.stroke();
      }

      sCtx.beginPath();
      for (let i = 0; i < N; i += 1) {
        const x = (i / (N - 1)) * sw;
        const norm = Math.max(0, Math.min(1, (bins[i] + 105) / 50));
        const y = sh - norm * (sh - 18) - 8;
        if (i === 0) sCtx.moveTo(x, y);
        else sCtx.lineTo(x, y);
      }
      sCtx.strokeStyle = rfiEnabled ? '#f97316' : '#5ab9fc';
      sCtx.lineWidth = 2;
      sCtx.stroke();

      const cursorX = pointerRatioX * sw;
      sCtx.strokeStyle = 'rgba(233, 237, 243, 0.25)';
      sCtx.beginPath();
      sCtx.moveTo(cursorX, 0);
      sCtx.lineTo(cursorX, sh);
      sCtx.stroke();

      const cursorFreq = (1418 + pointerRatioX * 4.8).toFixed(2);
      const cursorBin = Math.min(N - 1, Math.max(0, Math.round(pointerRatioX * (N - 1))));
      if (crosshairReadout) crosshairReadout.textContent = `${cursorFreq} MHz · ${bins[cursorBin].toFixed(1)} dBm`;

      waterfallRows.unshift(bins);
      if (waterfallRows.length > 36) waterfallRows.pop();

      const rowH = Math.max(2, wh / 36);
      wCtx.fillStyle = '#070a10';
      wCtx.fillRect(0, 0, ww, wh);
      for (let r = 0; r < waterfallRows.length; r += 1) {
        const row = waterfallRows[r];
        const y = r * rowH;
        const colW = ww / N;
        for (let c = 0; c < N; c += 1) {
          const val = Math.max(0, Math.min(1, (row[c] + 102) / 48));
          wCtx.fillStyle = rfiEnabled && val > 0.72
            ? `rgba(249, 115, 22, ${val.toFixed(2)})`
            : `rgba(90, 185, 252, ${val.toFixed(2)})`;
          wCtx.fillRect(c * colW, y, Math.ceil(colW), Math.ceil(rowH));
        }
      }
    }
  }
  requestAnimationFrame(drawBingoLoop);
}

if (specCanvas) {
  specCanvas.addEventListener('pointermove', (e) => {
    const rect = specCanvas.getBoundingClientRect();
    pointerRatioX = Math.max(0, Math.min(1, (e.clientX - rect.left) / Math.max(1, rect.width)));
  });
  window.addEventListener('resize', resizeLabCanvases);
  requestAnimationFrame(drawBingoLoop);
}

if (btnRfi) {
  btnRfi.addEventListener('click', () => {
    rfiEnabled = !rfiEnabled;
    btnRfi.setAttribute('aria-pressed', String(rfiEnabled));
  });
}

if (btnSound) {
  btnSound.addEventListener('click', () => {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      audioCtx = new AC();
      audioOsc = audioCtx.createOscillator();
      audioGain = audioCtx.createGain();
      audioOsc.type = 'sine';
      audioOsc.frequency.value = 340;
      audioGain.gain.value = 0.03;
      audioOsc.connect(audioGain).connect(audioCtx.destination);
      audioOsc.start();
      btnSound.setAttribute('aria-pressed', 'true');
      btnSound.textContent = dict[currentLang]['lab.sound_off'];
    } else {
      audioOsc.stop();
      audioCtx.close();
      audioCtx = null;
      btnSound.setAttribute('aria-pressed', 'false');
      btnSound.textContent = dict[currentLang]['lab.sound'];
    }
  });
}

// Re-measure canvases whenever Lab tabs change
document.querySelectorAll('#laboratorio .tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    requestAnimationFrame(resizeLabCanvases);
  });
});

// ─── Lab 2: LangGraph Chaos Sandbox ───
const lgPacket = document.getElementById('lgPacket');
const lgLog = document.getElementById('lgTraceLog');
const lgCoords = {
  in: [72, 95],
  val: [204, 95],
  exec: [340, 58],
  fb: [340, 140],
  out: [460, 95]
};

function runChaosScenario(mode) {
  if (!lgPacket || !lgLog) return;
  const nodes = {
    in: document.getElementById('lgN1'),
    val: document.getElementById('lgN2'),
    exec: document.getElementById('lgN3'),
    fb: document.getElementById('lgN4'),
    out: document.getElementById('lgN5')
  };
  Object.values(nodes).forEach((el) => el?.classList.remove('is-lit', 'is-warn'));
  document.querySelectorAll('.lg-edge').forEach((el) => el.classList.remove('is-lit'));

  const seq = mode === 'ok'
    ? [['in', 'ok'], ['val', 'ok'], ['exec', 'ok'], ['out', 'ok']]
    : mode === 'retry'
      ? [['in', 'ok'], ['val', 'warn'], ['exec', 'warn'], ['fb', 'ok'], ['out', 'ok']]
      : [['in', 'ok'], ['val', 'warn'], ['fb', 'warn'], ['out', 'warn']];

  const logMsgs = {
    ok: '[INPUT] payload recebido -> [SCHEMA] Pydantic OK -> [EXEC] ação concluída -> [SAÍDA] contrato validado.',
    retry: '[INPUT] timeout parcial -> [SCHEMA] revalidação -> [FALLBACK] rota segura acionada -> [SAÍDA] resposta estável.',
    block: '[INPUT] payload inválido -> [SCHEMA] bloqueado pelo validador -> [FALLBACK] resposta determinística -> [SAÍDA] seguro.'
  };

  lgLog.textContent = logMsgs[mode];
  lgPacket.classList.toggle('is-warn', mode !== 'ok');

  seq.forEach(([key, state], stepIdx) => {
    setTimeout(() => {
      const [cx, cy] = lgCoords[key];
      lgPacket.setAttribute('cx', String(cx));
      lgPacket.setAttribute('cy', String(cy));
      nodes[key]?.classList.add(state === 'warn' ? 'is-warn' : 'is-lit');
    }, stepIdx * 260);
  });
}

document.querySelectorAll('[data-chaos]').forEach((btn) => {
  btn.addEventListener('click', () => runChaosScenario(btn.dataset.chaos));
});

// ─── Lab 3: Copa 2026 Dixon-Coles ───
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
const heatmapEl = document.getElementById('copaHeatmap');
const barA = document.getElementById('barWinA');
const barD = document.getElementById('barDraw');
const barB = document.getElementById('barWinB');
const lblCopa = document.getElementById('copaProbSummary');

function fact(n) {
  let r = 1;
  for (let i = 2; i <= n; i += 1) r *= i;
  return r;
}

function poisson(k, lambda) {
  return (Math.pow(lambda, k) * Math.exp(-lambda)) / fact(k);
}

function renderCopaMatrix() {
  if (!selTeamA || !selTeamB || !heatmapEl) return;
  const a = teamData[selTeamA.value] || teamData.BRA;
  const b = teamData[selTeamB.value] || teamData.ARG;
  const km = Number(travelRange ? travelRange.value : 0);
  if (travelReadout) travelReadout.textContent = `${km} km`;

  const fatiguePenalty = 1 - Math.min(0.18, (km / 10000) * 0.14);
  const lamA = Math.max(0.25, a.att * b.def * 1.15);
  const lamB = Math.max(0.25, b.att * a.def * fatiguePenalty);

  let winA = 0;
  let draw = 0;
  let winB = 0;
  heatmapEl.innerHTML = '';

  const corner = document.createElement('div');
  corner.className = 'hm-axis';
  corner.textContent = 'A\\B';
  heatmapEl.appendChild(corner);

  for (let col = 0; col <= 4; col += 1) {
    const ax = document.createElement('div');
    ax.className = 'hm-axis';
    ax.textContent = String(col);
    heatmapEl.appendChild(ax);
  }

  for (let ga = 0; ga <= 4; ga += 1) {
    const rowAx = document.createElement('div');
    rowAx.className = 'hm-axis';
    rowAx.textContent = String(ga);
    heatmapEl.appendChild(rowAx);

    for (let gb = 0; gb <= 4; gb += 1) {
      const p = poisson(ga, lamA) * poisson(gb, lamB);
      if (ga > gb) winA += p;
      else if (ga === gb) draw += p;
      else winB += p;

      const cell = document.createElement('div');
      cell.className = 'hm-cell';
      const pct = Math.round(p * 100);
      cell.style.background = `color-mix(in oklab, var(--accent) ${Math.min(75, Math.round(p * 320))}%, transparent)`;
      cell.textContent = `${pct}%`;
      heatmapEl.appendChild(cell);
    }
  }

  const tot = winA + draw + winB || 1;
  const pA = Math.round((winA / tot) * 100);
  const pD = Math.round((draw / tot) * 100);
  const pB = 100 - pA - pD;

  if (barA) barA.style.width = `${pA}%`;
  if (barD) barD.style.width = `${pD}%`;
  if (barB) barB.style.width = `${pB}%`;
  if (lblCopa) lblCopa.textContent = `${a.name} ${pA}% · Empate ${pD}% · ${b.name} ${pB}%`;
}

if (selTeamA && selTeamB && travelRange) {
  selTeamA.addEventListener('change', renderCopaMatrix);
  selTeamB.addEventListener('change', renderCopaMatrix);
  travelRange.addEventListener('input', renderCopaMatrix);
  renderCopaMatrix();
}

// ─── Lab 4: RIP Network Mesh R1..R12 ───
const ripEdges = Array.from(document.querySelectorAll('.rip-edge'));
const ripLogEl = document.getElementById('ripPathLog');
const btnResetRip = document.getElementById('btnResetRip');

function recomputeRipPath() {
  if (!ripEdges.length || !ripLogEl) return;
  const adj = new Map();
  ripEdges.forEach((edge) => {
    edge.classList.remove('is-path');
    if (edge.classList.contains('is-cut')) return;
    const u = edge.dataset.u;
    const v = edge.dataset.v;
    if (!adj.has(u)) adj.set(u, []);
    if (!adj.has(v)) adj.set(v, []);
    adj.get(u).push({ to: v, edge });
    adj.get(v).push({ to: u, edge });
  });

  const queue = [['R1']];
  const visited = new Set(['R1']);
  let foundPath = null;
  while (queue.length) {
    const path = queue.shift();
    const cur = path[path.length - 1];
    if (cur === 'R12') {
      foundPath = path;
      break;
    }
    for (const next of adj.get(cur) || []) {
      if (!visited.has(next.to)) {
        visited.add(next.to);
        queue.push([...path, next.to]);
      }
    }
  }

  if (foundPath) {
    for (let i = 0; i < foundPath.length - 1; i += 1) {
      const a = foundPath[i];
      const b = foundPath[i + 1];
      const hit = ripEdges.find(
        (e) => !e.classList.contains('is-cut') && ((e.dataset.u === a && e.dataset.v === b) || (e.dataset.u === b && e.dataset.v === a))
      );
      if (hit) hit.classList.add('is-path');
    }
    ripLogEl.textContent = `Rota RIP ativa (${foundPath.length - 1} saltos): ${foundPath.join(' -> ')}`;
  } else {
    ripLogEl.textContent = 'Sem rota alcançável entre R1 e R12 (Split Horizon isolado).';
  }
}

ripEdges.forEach((edge) => {
  edge.addEventListener('click', () => {
    edge.classList.toggle('is-cut');
    recomputeRipPath();
  });
});

if (btnResetRip) {
  btnResetRip.addEventListener('click', () => {
    ripEdges.forEach((e) => e.classList.remove('is-cut'));
    recomputeRipPath();
  });
}
if (ripEdges.length) recomputeRipPath();

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

function renderSonar(skipIncrement) {
  if (!swimMoodDisplay) return;
  if (!skipIncrement) swimNoteIdx = 0;
  swimMoodDisplay.textContent = swimNotes[currentLang][swimNoteIdx];
}

const passportQuotes = {
  pt: 'Português (Nativo): Documentação técnica e revisão de arquitetura em português.',
  en: 'English (Advanced): Fluent technical discussions, RFC writing and international delivery.',
  fr: 'Français (Intermédiaire): Lecture fluide et conversation technique structurée.',
  es: 'Español (Intermedio): Comunicación técnica y coordinación diaria de proyectos.'
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
      await navigator.clipboard.writeText('raphacramos@gmail.com');
      copyEmailBtn.textContent = dict[currentLang]['close.copied'];
      setTimeout(() => {
        copyEmailBtn.textContent = dict[currentLang]['close.copy'];
      }, 2200);
    } catch {
      window.location.href = 'mailto:raphacramos@gmail.com';
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
