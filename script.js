/**
 * RAPHAEL RAMOS — PORTFOLIO INTERACTIVE ENGINE
 * Modular Vanilla JS: i18n, Theme, SVG Journey, 4 Interactive Labs, Personal Cards, Dialogs.
 */

// =============================================================================
// 1. i18n Dictionary (PT / EN)
// =============================================================================
const i18n = {
  pt: {
    "header.badge": "Campina Grande · PB",
    "nav.story": "Jornada",
    "nav.lab": "Laboratório",
    "nav.projects": "Projetos",
    "nav.personal": "Fora do Terminal",
    "controls.blueprint": "Raio-X",
    "controls.pause_anim": "Pausar",
    "controls.resume_anim": "Animar",
    "controls.pause": "Pausar",
    "controls.resume": "Retomar",
    "controls.pulse": "Injetar pulso",
    "controls.rfi": "Simular RFI",
    "controls.sound": "Som: Off",
    "controls.sound_on": "Som: On",
    "controls.preset": "Banda:",
    "hero.status": "Ciência da Computação (UFCG) · Ex-Mecatrônica (USP)",
    "hero.headline": 'Código em Python pela manhã, piscina à noite e <span class="headline-accent">ondas de rádio</span> no resto do tempo.',
    "hero.bio": 'Sou o <strong>Raphael Ramos</strong>. Desenvolvo sistemas de telemetria em tempo real para o radiotelescópio <strong>BINGO</strong>, pipelines de dados em escala e arquiteturas de agentes com LangGraph. Fora do editor, treino natação competitiva e ajudo alunos de graduação com algoritmos e Linux.',
    "hero.copy_email": "Copiar e-mail",
    "hero.cv": "Currículo (PDF)",
    "hero.scene_mode": "RAIA 4 · 25M · NADO LIVRE",
    "hero.flip_btn": "Virada",
    "hero.scene_caption": "Clique na água para gerar ondas ou acione a virada olímpica.",
    "hero.scene_flipped": "Virada na placa. Próxima parcial: baixar o tempo nos 50m e manter a UI fluida.",
    "story.kicker": "01 · HISTÓRIA EM TRAÇO",
    "story.title": "Da raia da piscina às ondas de rádio",
    "story.hint": "Clique nos nós do mapa SVG para abrir cada capítulo.",
    "lab.kicker": "02 · LABORATÓRIO VIVO",
    "lab.title": "Toque nos sistemas em vez de só ler sobre eles",
    "lab.hint": "Quatro simuladores rodando 100% no navegador.",
    "lab.tab_bingo": "BINGO SDR + Waterfall",
    "lab.tab_langgraph": "LangGraph Chaos",
    "lab.tab_copa": "Dixon-Coles (Copa)",
    "lab.tab_rip": "Malha RIP (R1–R12)",
    "lab.waterfall_lbl": "Espectrograma Waterfall (histórico)",
    "hud.freq": "FREQ. CENTRAL",
    "hud.worker": "WORKER",
    "hud.coords": "APONTAMENTO",
    "hud.tests": "SUÍTE",
    "crosshair.default": "Passe o cursor no espectro",
    "lg.log_head": "TRACE DO GRAFO (STATEGRAPH)",
    "lg.btn_normal": "Fluxo nominal",
    "lg.btn_bad": "Injetar JSON inválido",
    "lg.btn_timeout": "Simular timeout",
    "lg.note": "Esquemas tipados em Pydantic + testes pytest",
    "copa.team_a": "Seleção A",
    "copa.team_b": "Seleção B",
    "copa.shrinkage": "Regularização L2 (Bayesian Shrinkage)",
    "copa.haversine": "Desgaste Geodésico (Haversine km)",
    "rip.log_head": "TABELA DE ROTEAMENTO · R1 → R12",
    "rip.split_on": "Split Horizon: ON",
    "rip.split_off": "Split Horizon: OFF",
    "rip.step": "Propagar rodada RIP",
    "rip.reset": "Restaurar malha",
    "rip.note": "12 roteadores (R1–R12) · clique nos links para simular falha",
    "projects.kicker": "03 · ENGENHARIA VERIFICADA",
    "projects.title": "Projetos em produção, pesquisa & código aberto",
    "projects.hint": "Cada card resume problema real, arquitetura e evidência em commit.",
    "proj.bingo.title": "Aquisição e Monitoramento em Tempo Real (Projeto BINGO)",
    "proj.bingo.desc": 'Desacoplei o processamento numérico e a leitura contínua de espectros SDHDF/HDF5 para <strong>workers em background por sessão</strong> com filas limitadas e descarte de quadros obsoletos, evitando travamentos na interface Panel/Bokeh.',
    "proj.bingo.b1": "Isolamento de sessões no servidor, autenticação com cookies assinados e controle exclusivo de hardware por processo.",
    "proj.bingo.b2": "Arquitetura em camadas validada com <strong>113 testes automatizados em pytest</strong> e tipagem estática (mypy).",
    "proj.tcc.title": "Pipeline ETL & Modelagem Estatística (TCC)",
    "proj.tcc.desc": 'Extraí 33 relatórios complexos em PDF com máquina de estados finitos e regex, resolvi duplicações por chave composta e carreguei <strong>105.582 registros</strong> no PostgreSQL via SQLAlchemy.',
    "proj.tcc.b1": "Suíte de validação de integridade (pytest) e modelagem com Scikit-Learn e SciPy (ANOVA e qui-quadrado) sobre estratégias de prova na natação.",
    "proj.agent.title": "Orquestração de Agentes com LangGraph",
    "proj.agent.desc": 'Estruturei um fluxo modular em <strong>StateGraph</strong> com roteamento condicional e <strong>rotas de fallback determinísticas</strong> para manter a execução contínua quando o LLM gera saídas inválidas.',
    "proj.agent.b1": "Módulo de tool calling com esquemas estritos em Pydantic e testes automatizados em pytest.",
    "proj.copa.title": "Preditor Probabilístico da Copa 2026",
    "proj.copa.desc": 'Motor preditivo combinando modelo bivariado de Poisson (<strong>Dixon-Coles</strong>), <strong>Pi-Ratings</strong> dinâmicos, regularização L2 com Bayesian Shrinkage e desgaste de viagem via fórmula de Haversine.',
    "proj.prospector.title": "Prospector de Vagas via APIs REST",
    "proj.prospector.desc": "Mineração modular integrando APIs públicas (Greenhouse, Lever, Ashby, GitHub e Hacker News), persistência em SQLite com migrações e fila priorizada em painel local.",
    "proj.wonderlic.title": "Wonderlic Simulator (Demo ao vivo)",
    "proj.wonderlic.desc": "Aplicação web sem dependências externas com banco normalizado de 490 questões cronometradas, 9 exames simulados e módulos de treino analítico.",
    "proj.wonderlic.cta": "Abrir simulador no navegador ↗",
    "proj.redes.title": "Simulador de Roteamento RIP",
    "proj.redes.desc": "Simulação em Python do protocolo RIP com e sem Split Horizon e sumarização de rotas sobre topologia em malha de 12 roteadores (R1–R12).",
    "personal.kicker": "04 · FORA DO TERMINAL",
    "personal.title": "O lado humano por trás dos commits",
    "personal.hint": "Porque ninguém vive só de pull request.",
    "personal.swim_btn": "Bater parcial",
    "personal.swim_title": "Natação Competitiva",
    "personal.swim_body": "Treino competitivo e sigo de perto estratégias de prova: meu TCC nasceu justamente da mania de analisar splits de piscina até o último centésimo. É onde desligo a tela e recarrego a cabeça.",
    "personal.lang_title": "Passaporte de Idiomas",
    "personal.teach_title": "Monitoria & Ensino na UFCG",
    "personal.teach_body": "Fui monitor de <strong>Algoritmos (LEDA/ATAL)</strong> para +40 alunos e de <strong>Administração de Sistemas Linux (ADSI)</strong> para +35 alunos: de programação dinâmica a serviços systemd.",
    "stack.langs": "Linguagens & Dados",
    "stack.ai": "Engenharia de Dados & IA",
    "stack.infra": "Arquitetura & Infra",
    "footer.made": "Feito com HTML, CSS, SVG e curiosidade",
    "cmd.title": "Paleta de Comandos",
    "toast.copied": "E-mail copiado: raphaelramosc@gmail.com"
  },
  en: {
    "header.badge": "Campina Grande · Brazil",
    "nav.story": "Journey",
    "nav.lab": "Interactive Lab",
    "nav.projects": "Projects",
    "nav.personal": "Beyond Code",
    "controls.blueprint": "X-Ray",
    "controls.pause_anim": "Pause",
    "controls.resume_anim": "Animate",
    "controls.pause": "Pause",
    "controls.resume": "Resume",
    "controls.pulse": "Inject pulse",
    "controls.rfi": "Simulate RFI",
    "controls.sound": "Audio: Off",
    "controls.sound_on": "Audio: On",
    "controls.preset": "Band:",
    "hero.status": "Computer Science (UFCG) · Former Mechatronics (USP)",
    "hero.headline": 'Python code in the morning, lap pool at night, and <span class="headline-accent">radio waves</span> in between.',
    "hero.bio": "I'm <strong>Raphael Ramos</strong>. I engineer real-time telemetry systems for the <strong>BINGO</strong> radio telescope, large-scale data pipelines, and LangGraph agent workflows. Outside the editor, I train competitive swimming and mentor students in algorithms and Linux.",
    "hero.copy_email": "Copy email",
    "hero.cv": "Resume (PDF)",
    "hero.scene_mode": "LANE 4 · 25M · FREESTYLE",
    "hero.flip_btn": "Flip turn",
    "hero.scene_caption": "Click the water to spawn ripples or trigger a flip turn at the wall.",
    "hero.scene_flipped": "Turn nailed on the touchpad. Next split: keep UI latency low and drop my 50m time.",
    "story.kicker": "01 · ILLUSTRATED STORY",
    "story.title": "From pool lanes to radio waves",
    "story.hint": "Click any SVG node to step through each chapter.",
    "lab.kicker": "02 · LIVE LAB",
    "lab.title": "Play with the systems instead of just reading bullets",
    "lab.hint": "Four client-side simulators running right in your browser.",
    "lab.tab_bingo": "BINGO SDR + Waterfall",
    "lab.tab_langgraph": "LangGraph Chaos",
    "lab.tab_copa": "Dixon-Coles (World Cup)",
    "lab.tab_rip": "RIP Mesh (R1–R12)",
    "lab.waterfall_lbl": "Waterfall Spectrogram (history)",
    "hud.freq": "CENTER FREQ.",
    "hud.worker": "WORKER",
    "hud.coords": "POINTING",
    "hud.tests": "SUITE",
    "crosshair.default": "Hover over spectrum",
    "lg.log_head": "STATEGRAPH EXECUTION TRACE",
    "lg.btn_normal": "Nominal flow",
    "lg.btn_bad": "Inject invalid JSON",
    "lg.btn_timeout": "Simulate timeout",
    "lg.note": "Typed Pydantic schemas + pytest coverage",
    "copa.team_a": "Team A",
    "copa.team_b": "Team B",
    "copa.shrinkage": "L2 Regularization (Bayesian Shrinkage)",
    "copa.haversine": "Travel Fatigue (Haversine km)",
    "rip.log_head": "ROUTING TABLE · R1 → R12",
    "rip.split_on": "Split Horizon: ON",
    "rip.split_off": "Split Horizon: OFF",
    "rip.step": "Propagate RIP round",
    "rip.reset": "Reset mesh",
    "rip.note": "12 routers (R1–R12) · click any link to simulate failure",
    "projects.kicker": "03 · VERIFIED ENGINEERING",
    "projects.title": "Production systems, research & open source",
    "projects.hint": "Every card highlights the real bottleneck, architecture, and commit evidence.",
    "proj.bingo.title": "Real-Time Telemetry & Acquisition (BINGO Telescope)",
    "proj.bingo.desc": "Decoupled numerical processing and continuous SDHDF/HDF5 spectrum reads into <strong>per-session background workers</strong> with bounded queues and stale-frame coalescing so the Panel/Bokeh UI never freezes.",
    "proj.bingo.b1": "Server session isolation, signed-cookie authentication, and per-process hardware ownership guards.",
    "proj.bingo.b2": "Clean Architecture layers backed by <strong>113 automated pytest tests</strong> and static typing (mypy).",
    "proj.tcc.title": "ETL Pipeline & Statistical Modeling (Thesis)",
    "proj.tcc.desc": "Parsed 33 complex multi-page PDF reports with a finite state machine and regex, resolved composite-key merge duplicates, and loaded <strong>105,582 records</strong> into PostgreSQL via SQLAlchemy.",
    "proj.tcc.b1": "Automated data-integrity test suite (pytest) plus Scikit-Learn & SciPy (ANOVA / chi-square) modeling on swimming pacing strategies.",
    "proj.agent.title": "Autonomous Agent Orchestration with LangGraph",
    "proj.agent.desc": "Architected a modular <strong>StateGraph</strong> with conditional routing and <strong>deterministic fallback paths</strong> so execution recovers cleanly whenever an LLM emits malformed outputs.",
    "proj.agent.b1": "Typed tool-calling layer built with strict Pydantic schemas and automated pytest tests.",
    "proj.copa.title": "2026 World Cup Probabilistic Predictor",
    "proj.copa.desc": "Predictive engine combining bivariate Poisson (<strong>Dixon-Coles</strong>), dynamic <strong>Pi-Ratings</strong>, L2 Bayesian Shrinkage, and geodesic travel fatigue via the Haversine formula.",
    "proj.prospector.title": "Job Prospector via REST APIs",
    "proj.prospector.desc": "Modular data collector integrating public APIs (Greenhouse, Lever, Ashby, GitHub, Hacker News) with SQLite schema migrations and a local triage board.",
    "proj.wonderlic.title": "Wonderlic Simulator (Live Demo)",
    "proj.wonderlic.desc": "Zero-dependency client-side web app featuring a normalized bank of 490 timed questions, 9 mock exams, and analytical drill modes.",
    "proj.wonderlic.cta": "Launch simulator in browser ↗",
    "proj.redes.title": "RIP Routing Mesh Simulator",
    "proj.redes.desc": "Python simulation of the RIP routing protocol with and without Split Horizon and route summarization across a 12-router mesh (R1–R12).",
    "personal.kicker": "04 · BEYOND THE TERMINAL",
    "personal.title": "The human side behind the commits",
    "personal.hint": "Life outside pull requests.",
    "personal.swim_btn": "Hit split ⏱",
    "personal.swim_title": "Competitive Swimming",
    "personal.swim_body": "I train competitively and obsess over race pacing — my B.Sc. thesis literally came from analyzing pool splits down to hundredths of a second. It's where I unplug and reset.",
    "personal.lang_title": "Language Passport",
    "personal.teach_title": "Teaching Assistant at UFCG",
    "personal.teach_body": "Mentored 40+ students in <strong>Algorithms & Graphs (LEDA/ATAL)</strong> and 35+ students in <strong>Linux Systems Administration (ADSI)</strong> — from dynamic programming to systemd.",
    "stack.langs": "Languages & Data",
    "stack.ai": "Data Engineering & AI",
    "stack.infra": "Architecture & Infra",
    "footer.made": "Built with HTML, CSS, SVG, and curiosity",
    "cmd.title": "Command Palette",
    "toast.copied": "Email copied: raphaelramosc@gmail.com"
  }
};

let currentLang = localStorage.getItem("portfolio_lang") || "pt";

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  const langBtn = document.getElementById("currentLang");
  if (langBtn) langBtn.textContent = lang === "pt" ? "EN" : "PT";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang]?.[key]) el.innerHTML = i18n[lang][key];
  });

  const cvLink = document.getElementById("cvDownloadLink");
  if (cvLink) {
    if (lang === "pt") {
      cvLink.href = "assets/Curriculo_Raphael_Ramos_PT.pdf";
      cvLink.download = "Curriculo_Raphael_Ramos_PT.pdf";
    } else {
      cvLink.href = "assets/Curriculo_Raphael_Ramos_EN.pdf";
      cvLink.download = "Resume_Raphael_Ramos_EN.pdf";
    }
  }

  renderStoryChapter(activeChapterIndex);
  updateAudioButtonLabel();
  updateSplitHorizonLabel();
  renderCopaModel();
}

// =============================================================================
// 2. Theme Management (Modern Web Guidance: meta color-scheme + light-dark())
// =============================================================================
function getSystemScheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getEffectiveScheme() {
  const meta = document.querySelector('meta[name="color-scheme"]');
  const content = meta?.getAttribute("content") || "light dark";
  if (content === "dark" || content === "light") return content;
  return getSystemScheme();
}

function toggleTheme() {
  const meta = document.querySelector('meta[name="color-scheme"]');
  const current = getEffectiveScheme();
  const target = current === "dark" ? "light" : "dark";
  const system = getSystemScheme();

  const apply = () => {
    if (target === system) {
      try { localStorage.removeItem("color-scheme"); } catch (_) {}
      meta.setAttribute("content", "light dark");
    } else {
      try { localStorage.setItem("color-scheme", target); } catch (_) {}
      meta.setAttribute("content", target);
    }
  };

  if (document.startViewTransition) {
    document.startViewTransition(apply);
  } else {
    apply();
  }
}

window.addEventListener("storage", (e) => {
  if (e.key === "color-scheme") {
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) meta.setAttribute("content", e.newValue || "light dark");
  }
});

// =============================================================================
// 3. Toast Helper & Native Dialog Outside-Click Polyfill (Safari fallback)
// =============================================================================
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function installClosedByFallback() {
  if ("closedBy" in HTMLDialogElement.prototype) return;
  const outside = (e, dialog) => {
    const r = dialog.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };
  document.querySelectorAll('dialog[closedby="any"]').forEach((dialog) => {
    let pressedOutside = false;
    dialog.addEventListener("pointerdown", (e) => {
      pressedOutside = outside(e, dialog);
    });
    dialog.addEventListener("pointerup", (e) => {
      if (pressedOutside && outside(e, dialog)) dialog.close();
    });
  });
}

// =============================================================================
// 4. Interactive SVG Story Timeline
// =============================================================================
const storyChapters = {
  pt: [
    {
      tag: "Capítulo 01 · São Paulo",
      period: "Jan 2018 – Jun 2019",
      title: "Mecatrônica na USP: quando o código ganhou do ferro de solda",
      body: "Comecei em Engenharia Mecatrônica na Poli-USP entre equações diferenciais, circuitos e controle dinâmico. Foi lá que percebi que minha parte favorita de qualquer projeto não era montar a placa, e sim escrever a lógica que fazia tudo conversar. Daí veio a virada para Ciência da Computação.",
      takeaway: "Aprendizado: base matemática sólida + certeza de que software era o meu lugar."
    },
    {
      tag: "Capítulo 02 · Operação Real",
      period: "2020 – 2024",
      title: "Quatro anos no mundo real antes de voltar 100% ao código",
      body: "Na Scrub Up, toquei cotações, fornecedores, fluxo de caixa e atendimento direto a clientes. Esse período fora da bolha acadêmica mudou o jeito como projeto sistemas hoje: primeiro entendo o gargalo operacional e o usuário; só depois escolho a abstração.",
      takeaway: "Aprendizado: software bom resolve dor concreta, não é só arquitetura bonita no papel."
    },
    {
      tag: "Capítulo 03 · Campina Grande (UFCG)",
      period: "2024 – Out 2026",
      title: "Algoritmos, Linux, piscina e 105.582 registros no TCC",
      body: "Na UFCG, mergulhei em sistemas e fui monitor de Algoritmos (ATAL) e Administração de Sistemas Linux (ADSI). Na mesma época, juntei a minha rotina na natação competitiva com engenharia de dados no TCC: um pipeline ETL em Python + PostgreSQL analisando estratégias de prova.",
      takeaway: "Aprendizado: ensinar +75 alunos me forçou a simplificar conceitos difíceis."
    },
    {
      tag: "Capítulo 04 · BINGO & IA",
      period: "2026 – Presente",
      title: "Telemetria de radiotelescópio e agentes resilientes",
      body: "Hoje desenvolvo a arquitetura de aquisição em tempo real do MiniHorn (BINGO) com workers assíncronos por sessão e 113 testes em pytest, além de sistemas de agentes com LangGraph e modelos bayesianos de previsão.",
      takeaway: "Foco atual: sistemas concorrentes confiáveis, dados e IA com fallbacks determinísticos."
    }
  ],
  en: [
    {
      tag: "Chapter 01 · São Paulo",
      period: "Jan 2018 – Jun 2019",
      title: "Mechatronics at USP: when software beat the soldering iron",
      body: "I started in Mechatronic Engineering at USP surrounded by differential equations, circuits, and control theory. That's where I noticed my favorite part of every build wasn't wiring hardware — it was writing the logic that tied it all together.",
      takeaway: "Takeaway: strong math foundations + realizing software was home."
    },
    {
      tag: "Chapter 02 · Real-World Ops",
      period: "2020 – 2024",
      title: "Four years in commercial operations before going all-in on code",
      body: "At Scrub Up, I handled supplier negotiations, inventory turnover, cash flow, and customers directly. Stepping outside the academic bubble taught me to understand the human bottleneck first and choose technology second.",
      takeaway: "Takeaway: good software solves real bottlenecks, not imaginary benchmarks."
    },
    {
      tag: "Chapter 03 · Campina Grande (UFCG)",
      period: "2024 – Oct 2026",
      title: "Algorithms, Linux labs, pool splits, and 105,582 rows in my thesis",
      body: "At UFCG, I mentored 75+ peers as a TA in Algorithms (ATAL) and Linux Systems Administration (ADSI). My thesis merged my competitive swimming life with data engineering: a Python + PostgreSQL ETL pipeline modeling race pacing.",
      takeaway: "Takeaway: teaching forces crystal-clear mental models."
    },
    {
      tag: "Chapter 04 · BINGO & AI Agents",
      period: "2026 – Present",
      title: "Radio telescope telemetry and deterministic agent guardrails",
      body: "I currently engineer real-time acquisition for the BINGO radio telescope using per-session async workers (113 pytest tests), alongside LangGraph agent workflows and Bayesian forecasting models.",
      takeaway: "Current focus: reliable concurrent systems, data pipelines, and resilient AI."
    }
  ]
};

let activeChapterIndex = 0;

function renderStoryChapter(index) {
  const list = storyChapters[currentLang];
  activeChapterIndex = (index + list.length) % list.length;
  const item = list[activeChapterIndex];

  const tagEl = document.getElementById("storyTag");
  const periodEl = document.getElementById("storyPeriod");
  const titleEl = document.getElementById("storyDetailTitle");
  const bodyEl = document.getElementById("storyDetailBody");
  const takeEl = document.getElementById("storyTakeaway");

  if (tagEl) tagEl.textContent = item.tag;
  if (periodEl) periodEl.textContent = item.period;
  if (titleEl) titleEl.textContent = item.title;
  if (bodyEl) bodyEl.textContent = item.body;
  if (takeEl) takeEl.textContent = item.takeaway;

  document.querySelectorAll(".story-node").forEach((node, idx) => {
    const isActive = idx === activeChapterIndex;
    node.classList.toggle("is-active", isActive);
    node.setAttribute("aria-pressed", String(isActive));
  });

  const activePath = document.getElementById("storyActivePath");
  if (activePath && typeof activePath.getTotalLength === "function") {
    const len = activePath.getTotalLength();
    const stops = [0.02, 0.34, 0.67, 1.0];
    activePath.style.strokeDasharray = `${len}`;
    activePath.style.strokeDashoffset = `${len * (1 - stops[activeChapterIndex])}`;
  }
}

// =============================================================================
// 5. Accessible Tabs Controller (with focusgroup fallback + beforematch)
// =============================================================================
function initTabs() {
  const tablist = document.querySelector(".lab-tablist");
  if (!tablist) return;
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  const panels = tabs.map((t) => document.querySelector(`[aria-labelledby="${t.id}"]`));

  function selectTab(targetTab, moveFocus = false) {
    tabs.forEach((tab, idx) => {
      const selected = tab === targetTab;
      tab.setAttribute("aria-selected", String(selected));
      tab.toggleAttribute("focusgroupstart", selected);
      const panel = panels[idx];
      if (panel) {
        if (selected) {
          panel.removeAttribute("hidden");
          panel.setAttribute("tabindex", "0");
        } else {
          panel.setAttribute("hidden", "until-found");
          panel.removeAttribute("tabindex");
        }
      }
    });

    targetTab.scrollIntoView({ block: "nearest", inline: "nearest" });
    if (moveFocus) targetTab.focus();
    if (targetTab.id === "tab-bingo") resizeBingoCanvases();
  }

  tabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (e) => {
      let nextIdx = null;
      if (e.key === "ArrowRight") nextIdx = (idx + 1) % tabs.length;
      else if (e.key === "ArrowLeft") nextIdx = (idx - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") nextIdx = 0;
      else if (e.key === "End") nextIdx = tabs.length - 1;
      if (nextIdx !== null) {
        e.preventDefault();
        selectTab(tabs[nextIdx], true);
      }
    });
  });

  panels.forEach((panel, idx) => {
    if (!panel) return;
    panel.addEventListener("beforematch", () => selectTab(tabs[idx]));
  });
}

// =============================================================================
// 6. Lab 1: BINGO SDR Spectrum + Waterfall + RFI + Web Audio
// =============================================================================
const spectrumCanvas = document.getElementById("spectrumCanvas");
const waterfallCanvas = document.getElementById("waterfallCanvas");
const specCtx = spectrumCanvas ? spectrumCanvas.getContext("2d") : null;
const wfCtx = waterfallCanvas ? waterfallCanvas.getContext("2d") : null;
const crosshairReadout = document.getElementById("crosshairReadout");

let isStreamPaused = false;
let centerFrequency = 1100.0;
let injectedPulseTime = 0;
let rfiActive = false;
let audioEnabled = false;
let audioCtx = null;
let noiseGainNode = null;
let isMouseOverCanvas = false;
let mouseCanvasX = -1;
let lastFrameTime = 0;

function resizeBingoCanvases() {
  [spectrumCanvas, waterfallCanvas].forEach((c) => {
    if (!c) return;
    const rect = c.getBoundingClientRect();
    if (rect.width === 0) return;
    const dpr = window.devicePixelRatio || 1;
    c.width = Math.round(rect.width * dpr);
    c.height = Math.round(rect.height * dpr);
  });
}

function toggleSonification() {
  audioEnabled = !audioEnabled;
  if (audioEnabled) {
    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) {
      audioEnabled = false;
      showToast("Web Audio indisponível neste navegador.");
      return;
    }
    if (!audioCtx) {
      audioCtx = new AudioContextCtor();
      const bufferSize = audioCtx.sampleRate * 2;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.14;

      const src = audioCtx.createBufferSource();
      src.buffer = buffer;
      src.loop = true;

      const filter = audioCtx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 620;
      filter.Q.value = 1.6;

      noiseGainNode = audioCtx.createGain();
      noiseGainNode.gain.value = 0.035;

      src.connect(filter);
      filter.connect(noiseGainNode);
      noiseGainNode.connect(audioCtx.destination);
      src.start();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    if (noiseGainNode) noiseGainNode.gain.value = 0.035;
  } else if (noiseGainNode) {
    noiseGainNode.gain.value = 0;
  }
  updateAudioButtonLabel();
}

function playPulseChime() {
  if (!audioEnabled || !audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(880, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(340, audioCtx.currentTime + 0.35);
  gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.36);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.37);
}

function updateAudioButtonLabel() {
  const btn = document.getElementById("btnToggleAudio");
  if (!btn) return;
  btn.setAttribute("aria-pressed", String(audioEnabled));
  btn.textContent = audioEnabled ? i18n[currentLang]["controls.sound_on"] : i18n[currentLang]["controls.sound"];
}

function computeSpectrum(numPoints, time) {
  const spectrum = new Float32Array(numPoints);
  const bandwidth = 20.0;
  const freqStart = centerFrequency - bandwidth / 2;
  const freqStep = bandwidth / numPoints;
  const signalCenter = Math.abs(centerFrequency - 1420) < 10 ? 1420.405 : centerFrequency + 2.15;

  for (let i = 0; i < numPoints; i++) {
    const f = freqStart + i * freqStep;
    const noise = -84.0 + (Math.random() * 3.0 - 1.5) + Math.sin(i * 0.09 + time * 0.0015) * 1.1;
    const dist = f - signalCenter;
    const peak = 33.0 * Math.exp(-(dist * dist) / (2 * 0.36 * 0.36));

    let pulse = 0;
    if (injectedPulseTime > 0) {
      const pDist = f - (centerFrequency - 3.6);
      const decay = Math.max(0, 1 - (Date.now() - injectedPulseTime) / 2400);
      pulse = 40.0 * decay * Math.exp(-(pDist * pDist) / (2 * 0.22 * 0.22));
    }

    let rfi = 0;
    if (rfiActive) {
      const rfiCenter = centerFrequency + Math.sin(time * 0.002) * 5.2;
      const rDist = f - rfiCenter;
      rfi = 28.0 * Math.exp(-(rDist * rDist) / (2 * 0.14 * 0.14));
    }

    spectrum[i] = noise + peak + pulse + rfi;
  }
  return spectrum;
}

function colorForDbm(dbm) {
  const norm = Math.max(0, Math.min(1, (dbm + 92) / 52));
  if (norm < 0.35) {
    const t = norm / 0.35;
    return `rgb(${Math.round(9 + t * 8)}, ${Math.round(14 + t * 48)}, ${Math.round(30 + t * 90)})`;
  }
  if (norm < 0.72) {
    const t = (norm - 0.35) / 0.37;
    return `rgb(${Math.round(17 + t * 40)}, ${Math.round(62 + t * 130)}, ${Math.round(120 + t * 128)})`;
  }
  const t = (norm - 0.72) / 0.28;
  return `rgb(${Math.round(57 + t * 195)}, ${Math.round(192 - t * 40)}, ${Math.round(248 - t * 170)})`;
}

function drawBingoFrame(time) {
  if (!specCtx || !spectrumCanvas || spectrumCanvas.width === 0) return;

  const w = spectrumCanvas.width;
  const h = spectrumCanvas.height;
  const dpr = window.devicePixelRatio || 1;
  const numPoints = 220;
  const minDbm = -95;
  const maxDbm = -35;

  specCtx.fillStyle = "#080c13";
  specCtx.fillRect(0, 0, w, h);

  specCtx.lineWidth = 1 * dpr;
  for (let db = -45; db >= -90; db -= 15) {
    const y = Math.round(((maxDbm - db) / (maxDbm - minDbm)) * h);
    specCtx.strokeStyle = "rgba(148, 163, 184, 0.1)";
    specCtx.beginPath();
    specCtx.moveTo(0, y);
    specCtx.lineTo(w, y);
    specCtx.stroke();

    specCtx.fillStyle = "rgba(148, 163, 184, 0.55)";
    specCtx.font = `${9 * dpr}px 'JetBrains Mono', monospace`;
    specCtx.fillText(`${db} dBm`, 8 * dpr, y - 4 * dpr);
  }

  const spectrum = computeSpectrum(numPoints, time);

  specCtx.beginPath();
  for (let i = 0; i < numPoints; i++) {
    const x = (i / (numPoints - 1)) * w;
    const y = Math.max(0, Math.min(h, ((maxDbm - spectrum[i]) / (maxDbm - minDbm)) * h));
    if (i === 0) specCtx.moveTo(x, y);
    else specCtx.lineTo(x, y);
  }
  specCtx.strokeStyle = rfiActive ? "#fb923c" : "#38bdf8";
  specCtx.lineWidth = 1.6 * dpr;
  specCtx.stroke();

  if (isMouseOverCanvas && mouseCanvasX >= 0) {
    const normX = Math.max(0, Math.min(1, mouseCanvasX / spectrumCanvas.clientWidth));
    const idx = Math.round(normX * (numPoints - 1));
    const freqAtX = (centerFrequency - 10 + normX * 20).toFixed(2);
    const pwrAtX = spectrum[idx].toFixed(1);
    const cx = normX * w;
    const cy = Math.max(0, Math.min(h, ((maxDbm - spectrum[idx]) / (maxDbm - minDbm)) * h));

    specCtx.strokeStyle = "rgba(255, 255, 255, 0.35)";
    specCtx.setLineDash([4 * dpr, 4 * dpr]);
    specCtx.beginPath();
    specCtx.moveTo(cx, 0);
    specCtx.lineTo(cx, h);
    specCtx.stroke();
    specCtx.setLineDash([]);

    specCtx.fillStyle = "#ffffff";
    specCtx.beginPath();
    specCtx.arc(cx, cy, 3 * dpr, 0, Math.PI * 2);
    specCtx.fill();

    if (crosshairReadout) crosshairReadout.textContent = `${freqAtX} MHz | ${pwrAtX} dBm`;
  }

  // Update scrolling thermal Waterfall every ~45ms
  if (wfCtx && waterfallCanvas && waterfallCanvas.width > 0 && time - lastFrameTime > 45) {
    lastFrameTime = time;
    const ww = waterfallCanvas.width;
    const wh = waterfallCanvas.height;
    const rowH = Math.max(2, Math.round(3 * dpr));
    wfCtx.drawImage(waterfallCanvas, 0, 0, ww, wh - rowH, 0, rowH, ww, wh - rowH);
    const segW = ww / numPoints;
    for (let i = 0; i < numPoints; i++) {
      wfCtx.fillStyle = colorForDbm(spectrum[i]);
      wfCtx.fillRect(Math.floor(i * segW), 0, Math.ceil(segW) + 1, rowH);
    }
  }
}

function tickBingoLoop(time) {
  if (!isStreamPaused) {
    drawBingoFrame(time);
    requestAnimationFrame(tickBingoLoop);
  }
}

// =============================================================================
// 7. Lab 2: LangGraph Chaos Sandbox
// =============================================================================
function runLangGraphScenario(mode) {
  const packet = document.getElementById("lgPacket");
  const log = document.getElementById("lgLogOutput");
  const nodes = {
    state: document.getElementById("lg-n-state"),
    router: document.getElementById("lg-n-router"),
    pydantic: document.getElementById("lg-n-pydantic"),
    fallback: document.getElementById("lg-n-fallback"),
    done: document.getElementById("lg-n-done")
  };
  const edges = {
    start: document.getElementById("lg-e-start"),
    ok: document.getElementById("lg-e-ok"),
    tool: document.getElementById("lg-e-tool"),
    fail: document.getElementById("lg-e-fail"),
    recover: document.getElementById("lg-e-recover")
  };

  Object.values(nodes).forEach((n) => n?.classList.remove("is-lit", "is-warn"));
  Object.values(edges).forEach((e) => e?.classList.remove("is-lit"));
  packet?.classList.remove("is-warn");

  const steps = mode === "normal"
    ? [
        { cx: 56, cy: 110, lit: [nodes.state], text: "[1/4] State inicial carregado." },
        { cx: 198, cy: 110, lit: [edges.start, nodes.router], text: "[2/4] Roteador condicional avaliou contexto -> rota Tool Call." },
        { cx: 365, cy: 62, lit: [edges.ok, nodes.pydantic], text: "[3/4] Schema Pydantic validou parâmetros com sucesso." },
        { cx: 490, cy: 110, lit: [edges.tool, nodes.done], text: "[4/4] Output entregue sem erros. Execução concluída." }
      ]
    : [
        { cx: 56, cy: 110, lit: [nodes.state], text: "[1/4] State inicial carregado." },
        { cx: 198, cy: 110, lit: [edges.start, nodes.router], warn: true, text: mode === "bad_json" ? "[2/4] Falha: LLM retornou JSON malformado -> Pydantic rejeitou." : "[2/4] Falha: Loop / timeout detectado no nó de geração." },
        { cx: 365, cy: 170, lit: [edges.fail, nodes.fallback], warn: true, text: "[3/4] Roteador desviou para Fallback Determinístico (política segura)." },
        { cx: 490, cy: 110, lit: [edges.recover, nodes.done], warn: true, text: "[4/4] Output recuperado via fallback. Agente permaneceu operacional." }
      ];

  let traceText = "";
  steps.forEach((step, idx) => {
    setTimeout(() => {
      if (packet) {
        packet.setAttribute("cx", String(step.cx));
        packet.setAttribute("cy", String(step.cy));
        packet.classList.toggle("is-warn", Boolean(step.warn));
      }
      step.lit.forEach((el) => el?.classList.add(step.warn ? "is-warn" : "is-lit"));
      traceText += (idx ? "\n" : "") + step.text;
      if (log) log.textContent = traceText;
    }, idx * 420);
  });
}

// =============================================================================
// 8. Lab 3: Dixon-Coles Copa 2026 Live Matrix
// =============================================================================
const teamStrengths = {
  BRA: { namePt: "Brasil", nameEn: "Brazil", atk: 1.72, def: 0.78 },
  FRA: { namePt: "França", nameEn: "France", atk: 1.80, def: 0.76 },
  ARG: { namePt: "Argentina", nameEn: "Argentina", atk: 1.74, def: 0.72 },
  ESP: { namePt: "Espanha", nameEn: "Spain", atk: 1.78, def: 0.80 },
  JPN: { namePt: "Japão", nameEn: "Japan", atk: 1.48, def: 0.92 },
  MAR: { namePt: "Marrocos", nameEn: "Morocco", atk: 1.38, def: 0.74 }
};

function poissonPmf(k, lambda) {
  let fact = 1;
  for (let i = 2; i <= k; i++) fact *= i;
  return (Math.pow(lambda, k) * Math.exp(-lambda)) / fact;
}

function renderCopaModel() {
  const selA = document.getElementById("copaTeamA");
  const selB = document.getElementById("copaTeamB");
  const sShrink = document.getElementById("sliderShrinkage");
  const sHav = document.getElementById("sliderHaversine");
  const heatmap = document.getElementById("copaHeatmap");
  if (!selA || !selB || !sShrink || !sHav || !heatmap) return;

  const teamA = teamStrengths[selA.value];
  const teamB = teamStrengths[selB.value];
  const shrink = parseFloat(sShrink.value);
  const havKm = parseFloat(sHav.value);

  const valS = document.getElementById("valShrinkage");
  const valH = document.getElementById("valHaversine");
  if (valS) valS.textContent = shrink.toFixed(2);
  if (valH) valH.textContent = `${havKm} km`;

  const avgAtk = 1.45;
  const fatiguePenalty = 1 - Math.min(0.18, (havKm / 6000) * 0.14);
  const rawLambdaA = (teamA.atk * teamB.def) * fatiguePenalty;
  const rawLambdaB = teamB.atk * teamA.def;

  const lambdaA = (1 - shrink) * rawLambdaA + shrink * avgAtk;
  const lambdaB = (1 - shrink) * rawLambdaB + shrink * avgAtk;
  const rho = -0.09;

  const grid = [];
  let winA = 0, draw = 0, winB = 0, maxCell = 0;

  for (let a = 0; a <= 4; a++) {
    for (let b = 0; b <= 4; b++) {
      let tau = 1;
      if (a === 0 && b === 0) tau = 1 - lambdaA * lambdaB * rho;
      else if (a === 0 && b === 1) tau = 1 + lambdaA * rho;
      else if (a === 1 && b === 0) tau = 1 + lambdaB * rho;
      else if (a === 1 && b === 1) tau = 1 - rho;

      const p = Math.max(0, poissonPmf(a, lambdaA) * poissonPmf(b, lambdaB) * tau);
      grid.push({ a, b, p });
      if (p > maxCell) maxCell = p;
      if (a > b) winA += p;
      else if (a === b) draw += p;
      else winB += p;
    }
  }

  const total = winA + draw + winB || 1;
  const pA = Math.round((winA / total) * 100);
  const pD = Math.round((draw / total) * 100);
  const pB = Math.max(0, 100 - pA - pD);

  const nameA = currentLang === "pt" ? teamA.namePt : teamA.nameEn;
  const nameB = currentLang === "pt" ? teamB.namePt : teamB.nameEn;
  const drawLbl = currentLang === "pt" ? "Empate" : "Draw";

  const lbl = document.getElementById("copaOutcomeLabels");
  if (lbl) lbl.textContent = `${nameA} ${pA}% · ${drawLbl} ${pD}% · ${nameB} ${pB}%`;
  document.getElementById("barWinA")?.style.setProperty("width", `${pA}%`);
  document.getElementById("barDraw")?.style.setProperty("width", `${pD}%`);
  document.getElementById("barWinB")?.style.setProperty("width", `${pB}%`);

  heatmap.innerHTML = "";
  const corner = document.createElement("div");
  corner.className = "hm-axis";
  corner.textContent = "A\\B";
  heatmap.appendChild(corner);

  for (let b = 0; b <= 4; b++) {
    const colHdr = document.createElement("div");
    colHdr.className = "hm-axis";
    colHdr.textContent = String(b);
    heatmap.appendChild(colHdr);
  }

  for (let a = 0; a <= 4; a++) {
    const rowHdr = document.createElement("div");
    rowHdr.className = "hm-axis";
    rowHdr.textContent = String(a);
    heatmap.appendChild(rowHdr);

    for (let b = 0; b <= 4; b++) {
      const cellData = grid[a * 5 + b];
      const pct = (cellData.p * 100).toFixed(1);
      const intensity = maxCell > 0 ? cellData.p / maxCell : 0;
      const cell = document.createElement("div");
      cell.className = "hm-cell";
      cell.textContent = `${pct}%`;
      cell.title = `${nameA} ${a} x ${b} ${nameB}: ${pct}%`;
      cell.style.backgroundColor = `rgba(3, 105, 161, ${(0.08 + intensity * 0.55).toFixed(2)})`;
      if (intensity > 0.65) cell.style.color = "#ffffff";
      heatmap.appendChild(cell);
    }
  }
}

// =============================================================================
// 9. Lab 4: RIP 12-Router Mesh Simulator (R1–R12)
// =============================================================================
const ripNodes = [
  { id: "R1", x: 54, y: 120 }, { id: "R2", x: 135, y: 52 }, { id: "R3", x: 135, y: 188 },
  { id: "R4", x: 225, y: 84 }, { id: "R5", x: 225, y: 156 }, { id: "R6", x: 300, y: 44 },
  { id: "R7", x: 300, y: 196 }, { id: "R8", x: 375, y: 92 }, { id: "R9", x: 375, y: 156 },
  { id: "R10", x: 445, y: 56 }, { id: "R11", x: 445, y: 184 }, { id: "R12", x: 498, y: 120 }
];

const ripEdgeDefs = [
  ["R1", "R2"], ["R1", "R3"], ["R2", "R4"], ["R3", "R5"], ["R4", "R5"],
  ["R2", "R6"], ["R4", "R8"], ["R5", "R9"], ["R3", "R7"], ["R6", "R8"],
  ["R7", "R9"], ["R8", "R9"], ["R6", "R10"], ["R8", "R10"], ["R9", "R11"],
  ["R7", "R11"], ["R10", "R12"], ["R11", "R12"]
];

let cutEdges = new Set();
let splitHorizonOn = true;

function computeShortestPath(startId, goalId) {
  const adj = {};
  ripNodes.forEach((n) => (adj[n.id] = []));
  ripEdgeDefs.forEach(([a, b], idx) => {
    if (cutEdges.has(idx)) return;
    adj[a].push(b);
    adj[b].push(a);
  });

  const queue = [[startId]];
  const visited = new Set([startId]);
  while (queue.length) {
    const path = queue.shift();
    const cur = path[path.length - 1];
    if (cur === goalId) return path;
    for (const next of adj[cur]) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([...path, next]);
      }
    }
  }
  return null;
}

function renderRipMesh(stepNote = null) {
  const edgesLayer = document.getElementById("ripEdgesLayer");
  const nodesLayer = document.getElementById("ripNodesLayer");
  const log = document.getElementById("ripLogOutput");
  if (!edgesLayer || !nodesLayer) return;

  const path = computeShortestPath("R1", "R12");
  const pathPairs = new Set();
  if (path) {
    for (let i = 0; i < path.length - 1; i++) {
      pathPairs.add(`${path[i]}-${path[i + 1]}`);
      pathPairs.add(`${path[i + 1]}-${path[i]}`);
    }
  }

  edgesLayer.innerHTML = "";
  ripEdgeDefs.forEach(([aId, bId], idx) => {
    const a = ripNodes.find((n) => n.id === aId);
    const b = ripNodes.find((n) => n.id === bId);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", a.x);
    line.setAttribute("y1", a.y);
    line.setAttribute("x2", b.x);
    line.setAttribute("y2", b.y);
    line.classList.add("rip-edge");
    if (cutEdges.has(idx)) line.classList.add("is-cut");
    else if (pathPairs.has(`${aId}-${bId}`)) line.classList.add("is-path");
    line.addEventListener("click", () => {
      if (cutEdges.has(idx)) cutEdges.delete(idx);
      else cutEdges.add(idx);
      renderRipMesh(`Link ${aId}↔${bId} ${cutEdges.has(idx) ? "cortado" : "restaurado"}.`);
    });
    edgesLayer.appendChild(line);
  });

  nodesLayer.innerHTML = "";
  ripNodes.forEach((n) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("transform", `translate(${n.x}, ${n.y})`);
    g.classList.add("rip-router");
    if (n.id === "R1" || n.id === "R12") g.classList.add("is-endpoint");

    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("r", "15");
    const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.setAttribute("text-anchor", "middle");
    t.setAttribute("y", "3.5");
    t.textContent = n.id;

    g.appendChild(c);
    g.appendChild(t);
    nodesLayer.appendChild(g);
  });

  if (log) {
    const header = stepNote ? `${stepNote}\n` : "";
    if (!path) {
      log.textContent = `${header}R12 inalcançável (métrica = 16 / infinito).\n${splitHorizonOn ? "Split Horizon preveniu loop de contagem ao infinito." : "ALERTA: Sem Split Horizon, tabelas oscilam antes de atingir hop 16."}`;
    } else {
      log.textContent = `${header}Melhor rota ativa: ${path.join(" → ")}\nSaltos (hops): ${path.length - 1} · Split Horizon: ${splitHorizonOn ? "Ativo (convergência limpa)" : "Desativado (risco de routing loop)"}`;
    }
  }
}

function updateSplitHorizonLabel() {
  const btn = document.getElementById("btnRipSplitHorizon");
  if (!btn) return;
  btn.setAttribute("aria-pressed", String(splitHorizonOn));
  btn.classList.toggle("active", splitHorizonOn);
  btn.textContent = splitHorizonOn ? i18n[currentLang]["rip.split_on"] : i18n[currentLang]["rip.split_off"];
}

// =============================================================================
// 10. Personal Cards (Swimming Mood & 4-Language Passport)
// =============================================================================
const swimNotes = {
  pt: [
    "Parcial fechada! Na piscina ou no código, consistência no ritmo vence sprint desesperado no último quarto.",
    "Virada limpa vale mais que braçada afobada: exatamente como desacoplar I/O da thread da interface.",
    "Treino competitivo e sigo de perto estratégias de prova: meu TCC nasceu justamente da mania de analisar splits de piscina até o último centésimo."
  ],
  en: [
    "Split locked! In the pool or in code, steady pacing beats panicking on the final lap.",
    "A clean flip turn saves more energy than thrashing harder — just like moving blocking I/O off the UI thread.",
    "I train competitively and obsess over race pacing — my B.Sc. thesis literally came from analyzing pool splits down to hundredths of a second."
  ]
};
let swimNoteIdx = 0;

const passportQuotes = {
  pt: '"Escrevo código em Python, penso em português e ainda arrisco pedir um croissant direitinho em francês."',
  en: '"Comfortable reading docs, reviewing PRs, and discussing system architecture in English every day."',
  fr: '"Deux ans de français — assez pour discuter de science, de natation et commander un bon café."',
  es: '"Buen dominio de español para colaborar con equipos de Latinoamérica y leer documentación sin trabas."'
};

// =============================================================================
// 11. Command Palette (⌘K) & ADSI Terminal (>_)
// =============================================================================
const commands = [
  { labelPt: "Ir para Jornada em SVG", labelEn: "Jump to SVG Journey", kbd: "#jornada", run: () => document.getElementById("jornada")?.scrollIntoView() },
  { labelPt: "Abrir Laboratório: BINGO SDR", labelEn: "Open Lab: BINGO SDR", kbd: "Tab 01", run: () => document.getElementById("tab-bingo")?.click() },
  { labelPt: "Abrir Laboratório: LangGraph Chaos", labelEn: "Open Lab: LangGraph Chaos", kbd: "Tab 02", run: () => document.getElementById("tab-langgraph")?.click() },
  { labelPt: "Abrir Laboratório: Dixon-Coles Copa", labelEn: "Open Lab: Dixon-Coles", kbd: "Tab 03", run: () => document.getElementById("tab-copa")?.click() },
  { labelPt: "Abrir Laboratório: Malha RIP", labelEn: "Open Lab: RIP Mesh", kbd: "Tab 04", run: () => document.getElementById("tab-rip")?.click() },
  { labelPt: "Alternar Modo Blueprint (Raio-X)", labelEn: "Toggle Blueprint (X-Ray)", kbd: "X-Ray", run: () => document.getElementById("blueprintToggle")?.click() },
  { labelPt: "Alternar Tema Claro / Escuro", labelEn: "Toggle Light / Dark Theme", kbd: "Theme", run: () => toggleTheme() },
  { labelPt: "Copiar e-mail (raphaelramosc@gmail.com)", labelEn: "Copy email", kbd: "Copy", run: () => document.getElementById("copyEmailBtn")?.click() },
  { labelPt: "Abrir Wonderlic Simulator", labelEn: "Open Wonderlic Simulator", kbd: "/wonderlic", run: () => window.location.assign("wonderlic/") }
];

function renderCommandList(filter = "") {
  const list = document.getElementById("cmdResultsList");
  if (!list) return;
  list.innerHTML = "";
  const q = filter.trim().toLowerCase();
  commands
    .filter((c) => {
      const txt = `${c.labelPt} ${c.labelEn} ${c.kbd}`.toLowerCase();
      return !q || txt.includes(q);
    })
    .forEach((cmd) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cmd-item-btn";
      btn.innerHTML = `<span>${currentLang === "pt" ? cmd.labelPt : cmd.labelEn}</span><span class="cmd-kbd">${cmd.kbd}</span>`;
      btn.addEventListener("click", () => {
        document.getElementById("cmdDialog")?.close();
        cmd.run();
      });
      li.appendChild(btn);
      list.appendChild(li);
    });
}

function handleTerminalCommand(raw) {
  const out = document.getElementById("termOutput");
  if (!out) return;
  const cmd = raw.trim().toLowerCase();
  const appendLine = (text) => {
    const div = document.createElement("div");
    div.textContent = text;
    out.appendChild(div);
    out.scrollTop = out.scrollHeight;
  };
  appendLine(`rapha@ufcg:~$ ${raw}`);

  if (cmd === "help") {
    appendLine("Comandos: whoami | ls | swim | ping r12 | xray | cv | clear");
  } else if (cmd === "whoami") {
    appendLine("Raphael Ramos · CS @ UFCG · Ex-Mechatronics @ USP · Telemetry & AI Systems.");
  } else if (cmd === "ls" || cmd === "ls projects") {
    appendLine("bingo-rfstream/  tcc-etl-105k/  langgraph-agent/  copa-2026-bayes/  prospector/  rip-mesh/  wonderlic/");
  } else if (cmd === "swim") {
    appendLine("Raia 4 ativa: natação competitiva + pacing analysis no TCC.");
  } else if (cmd === "ping r12") {
    const p = computeShortestPath("R1", "R12");
    appendLine(p ? `64 bytes via ${p.join(" -> ")} (hops=${p.length - 1})` : "Destination host unreachable.");
  } else if (cmd === "xray") {
    document.getElementById("blueprintToggle")?.click();
    appendLine("Blueprint X-Ray toggled.");
  } else if (cmd === "cv") {
    document.getElementById("cvDownloadLink")?.click();
    appendLine("Iniciando download do currículo...");
  } else if (cmd === "clear") {
    out.innerHTML = "";
  } else {
    appendLine(`zsh: command not found: ${cmd}. Digite 'help'.`);
  }
}

// =============================================================================
// 12. Init & Wiring
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  installClosedByFallback();

  // Header controls
  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
  document.getElementById("langToggle")?.addEventListener("click", () => {
    applyLanguage(currentLang === "pt" ? "en" : "pt");
  });

  const bpBtn = document.getElementById("blueprintToggle");
  bpBtn?.addEventListener("click", () => {
    const next = !document.body.classList.contains("blueprint-mode");
    document.body.classList.toggle("blueprint-mode", next);
    bpBtn.setAttribute("aria-pressed", String(next));
  });

  // Hero actions
  document.getElementById("copyEmailBtn")?.addEventListener("click", (e) => {
    const email = e.currentTarget.getAttribute("data-email") || "raphaelramosc@gmail.com";
    navigator.clipboard?.writeText(email).catch(() => {});
    showToast(i18n[currentLang]["toast.copied"]);
  });

  const heroAside = document.querySelector(".hero-illustration");
  const poolSvg = document.getElementById("heroStorySvg");
  const rippleLayer = document.getElementById("poolRippleLayer");
  const splitClockEl = document.getElementById("poolSplitClock");
  let splitSeconds = 24.84;

  function spawnPoolRipple(x, y) {
    if (!rippleLayer) return;
    [0, 140].forEach((delay) => {
      setTimeout(() => {
        const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ring.setAttribute("cx", String(x));
        ring.setAttribute("cy", String(y));
        ring.setAttribute("r", "4");
        ring.classList.add("pool-ripple");
        rippleLayer.appendChild(ring);
        setTimeout(() => ring.remove(), 1100);
      }, delay);
    });
  }

  poolSvg?.addEventListener("click", (e) => {
    const rect = poolSvg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 380;
    const y = ((e.clientY - rect.top) / rect.height) * 270;
    spawnPoolRipple(Math.max(24, Math.min(356, x)), Math.max(24, Math.min(246, y)));
  });

  document.getElementById("btnFlipTurn")?.addEventListener("click", () => {
    if (!heroAside) return;
    const flipped = heroAside.classList.toggle("is-flipped");
    spawnPoolRipple(flipped ? 334 : 46, 135);
    splitSeconds = Math.max(23.85, +(splitSeconds - 0.14).toFixed(2));
    if (splitClockEl) splitClockEl.textContent = `00:${splitSeconds.toFixed(2)}`;
    const cap = document.getElementById("heroSceneCaption");
    if (cap) {
      cap.textContent = flipped ? i18n[currentLang]["hero.scene_flipped"] : i18n[currentLang]["hero.scene_caption"];
    }
  });

  const pauseSceneBtn = document.getElementById("btnToggleSceneMotion");
  pauseSceneBtn?.addEventListener("click", () => {
    if (!heroAside) return;
    const paused = heroAside.classList.toggle("is-paused");
    pauseSceneBtn.textContent = paused ? i18n[currentLang]["controls.resume_anim"] : i18n[currentLang]["controls.pause_anim"];
  });

  // Story SVG nodes
  document.querySelectorAll(".story-node").forEach((node) => {
    const idx = parseInt(node.getAttribute("data-chapter") || "0", 10);
    node.addEventListener("click", () => renderStoryChapter(idx));
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        renderStoryChapter(idx);
      }
    });
  });
  document.getElementById("storyPrevBtn")?.addEventListener("click", () => renderStoryChapter(activeChapterIndex - 1));
  document.getElementById("storyNextBtn")?.addEventListener("click", () => renderStoryChapter(activeChapterIndex + 1));

  // Tabs & 4 Labs
  initTabs();

  // Lab 1: BINGO
  resizeBingoCanvases();
  window.addEventListener("resize", resizeBingoCanvases);
  requestAnimationFrame(tickBingoLoop);

  spectrumCanvas?.addEventListener("mouseenter", () => { isMouseOverCanvas = true; });
  spectrumCanvas?.addEventListener("mousemove", (e) => {
    const rect = spectrumCanvas.getBoundingClientRect();
    mouseCanvasX = e.clientX - rect.left;
    if (isStreamPaused) drawBingoFrame(performance.now());
  });
  spectrumCanvas?.addEventListener("mouseleave", () => {
    isMouseOverCanvas = false;
    mouseCanvasX = -1;
    if (crosshairReadout) crosshairReadout.textContent = i18n[currentLang]["crosshair.default"];
  });

  document.getElementById("btnToggleStream")?.addEventListener("click", (e) => {
    isStreamPaused = !isStreamPaused;
    e.currentTarget.classList.toggle("active", !isStreamPaused);
    const txt = document.getElementById("btnStreamText");
    if (txt) txt.textContent = isStreamPaused ? i18n[currentLang]["controls.resume"] : i18n[currentLang]["controls.pause"];
    if (!isStreamPaused) requestAnimationFrame(tickBingoLoop);
  });

  document.getElementById("btnInjectSignal")?.addEventListener("click", () => {
    injectedPulseTime = Date.now();
    playPulseChime();
    if (isStreamPaused) drawBingoFrame(performance.now());
  });

  document.getElementById("btnToggleRfi")?.addEventListener("click", (e) => {
    rfiActive = !rfiActive;
    e.currentTarget.setAttribute("aria-pressed", String(rfiActive));
    const wk = document.getElementById("hudWorker");
    if (wk) wk.textContent = rfiActive ? "Coalescing RFI!" : "Async · Coalesced";
  });

  document.getElementById("btnToggleAudio")?.addEventListener("click", toggleSonification);

  document.querySelectorAll(".preset-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".preset-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      centerFrequency = parseFloat(chip.getAttribute("data-freq") || "1100");
      const hudFreq = document.getElementById("hudFreq");
      if (hudFreq) hudFreq.textContent = `${centerFrequency.toFixed(2)} MHz`;
      if (isStreamPaused) drawBingoFrame(performance.now());
    });
  });

  // Lab 2: LangGraph
  document.getElementById("btnLgNormal")?.addEventListener("click", () => runLangGraphScenario("normal"));
  document.getElementById("btnLgBadJson")?.addEventListener("click", () => runLangGraphScenario("bad_json"));
  document.getElementById("btnLgTimeout")?.addEventListener("click", () => runLangGraphScenario("timeout"));

  // Lab 3: Copa 2026
  ["copaTeamA", "copaTeamB", "sliderShrinkage", "sliderHaversine"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", renderCopaModel);
  });

  // Lab 4: RIP
  document.getElementById("btnRipSplitHorizon")?.addEventListener("click", () => {
    splitHorizonOn = !splitHorizonOn;
    updateSplitHorizonLabel();
    renderRipMesh("Política Split Horizon alterada.");
  });
  document.getElementById("btnRipStep")?.addEventListener("click", () => renderRipMesh("Rodada de atualização RIP propagada."));
  document.getElementById("btnRipReset")?.addEventListener("click", () => {
    cutEdges.clear();
    renderRipMesh("Todos os enlaces restaurados.");
  });
  renderRipMesh();

  // Personal cards
  document.getElementById("btnSwimMood")?.addEventListener("click", () => {
    const el = document.getElementById("swimMoodText");
    if (!el) return;
    swimNoteIdx = (swimNoteIdx + 1) % swimNotes[currentLang].length;
    el.textContent = swimNotes[currentLang][swimNoteIdx];
  });

  document.querySelectorAll(".stamp-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".stamp-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const code = btn.getAttribute("data-lang-card") || "pt";
      const quote = document.getElementById("langPassportQuote");
      if (quote) quote.textContent = passportQuotes[code];
    });
  });

  // Card cursor spotlight
  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  // Command Palette & Terminal Dialogs
  const cmdDialog = document.getElementById("cmdDialog");
  const cmdInput = document.getElementById("cmdSearchInput");
  document.getElementById("cmdTrigger")?.addEventListener("click", () => {
    renderCommandList("");
    cmdDialog?.showModal();
    if (cmdInput) { cmdInput.value = ""; cmdInput.focus(); }
  });
  cmdInput?.addEventListener("input", (e) => renderCommandList(e.target.value));
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      renderCommandList("");
      cmdDialog?.showModal();
      if (cmdInput) { cmdInput.value = ""; cmdInput.focus(); }
    }
  });

  const termDialog = document.getElementById("termDialog");
  document.getElementById("terminalTrigger")?.addEventListener("click", () => {
    termDialog?.showModal();
    document.getElementById("termInput")?.focus();
  });
  document.getElementById("termForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("termInput");
    if (!input || !input.value.trim()) return;
    handleTerminalCommand(input.value);
    input.value = "";
  });

  applyLanguage(currentLang);
});
