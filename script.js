/**
 * RAPHAEL RAMOS — PORTFOLIO SCRIPT
 * Features:
 * - Humanized i18n translation (PT-BR / EN)
 * - Scientific Spectrum Analyzer with Interactive Crosshair (BINGO Telescope)
 * - Dark / Light theme persistence (Radix Zinc palette)
 * - Subtle clipboard copy & feedback
 */

// =============================================================================
// 1. Translations (Humanizer applied: direct, factual, zero marketing filler)
// =============================================================================
const translations = {
  pt: {
    "header.role": "Engenheiro de Software",
    "intro.greeting": "Sistemas backend, telemetria e computação científica.",
    "intro.bio": "Trabalho com arquitetura de software para processamento de sinais e dados científicos no radiotelescópio <strong>BINGO</strong>. Graduando em Ciência da Computação pela UFCG e ex-aluno de Engenharia Mecatrônica pela USP, com atuação como monitor de algoritmos avançados e administração de sistemas Linux.",
    "intro.copy_email": "Copiar e-mail",

    "section.telemetry": "Telemetria em Tempo Real · Radiotelescópio BINGO",
    "instrument.live": "FLUXO ATIVO",
    "hud.freq": "FREQ. CENTRAL",
    "hud.rate": "AMOSTRAGEM",
    "hud.coords": "COORD. CELESTES",
    "hud.storage": "STORAGE",
    "controls.pause": "Pausar",
    "controls.resume": "Retomar",
    "controls.pulse": "Injetar pulso",
    "controls.reset": "Calibrar base",
    "controls.preset": "Banda:",
    "crosshair.default": "Passe o cursor no espectro",

    "section.projects": "Projetos Selecionados",
    "proj.bingo.title": "Espectrômetro de Radioastronomia MiniHorn (Telescópio BINGO)",
    "proj.bingo.desc": "Desenvolvi a infraestrutura de software e o console de visualização para a análise em tempo real do espectro eletromagnético captado pelo instrumento MiniHorn do radiotelescópio BINGO.",
    "proj.bingo.n1": "Separação de responsabilidades sob Clean Architecture, desacoplando o driver de hardware USRP SDR da lógica de processamento e da interface.",
    "proj.bingo.n2": "Pipeline de persistência gravando telemetria RF em formato binário HDF5 com ciclos de escrita sub-segundo e tolerância zero a perda de amostras.",
    "proj.bingo.n3": "Cálculo de efemérides celestes e apontamento astronômico integrado via biblioteca Skyfield.",

    "proj.stats.title": "Pipeline de Inferência Estatística e Aprendizado de Máquina",
    "proj.stats.desc": "Modelagem quantitativa e testes de hipóteses estatísticas para extração de padrões em sinais e análise preditiva de bases de dados multidimensionais.",
    "proj.stats.n1": "Seleção de variáveis (feature selection) baseada em análise de variância (ANOVA) e métricas de informação.",
    "proj.stats.n2": "Computação vetorizada para otimizar tempo de convergência e validação cruzada dos modelos.",

    "proj.db.title": "Sistema de Gerenciamento Transacional e Banco Relacional",
    "proj.db.desc": "Aplicação de controle de estoque com modelagem relacional estrita em 3ª Forma Normal (3FN), garantindo propriedades ACID em cenários de concorrência.",
    "proj.db.n1": "Análise de planos de execução de consultas complexas via EXPLAIN ANALYZE para redução de custo de I/O.",
    "proj.db.n2": "Controle transacional com isolamento de leituras e integridade referencial.",

    "proj.web.title": "Serviço Web Desacoplado e APIs RESTful",
    "proj.web.desc": "Arquitetura cliente-servidor desacoplada com endpoints RESTful assíncronos e sincronização de estado no cliente.",
    "proj.web.n1": "Estrutura de dados flexível com MongoDB para persistência de documentos de catálogo.",
    "proj.web.n2": "Interface responsiva construída com componentes funcionais e consumo assíncrono.",

    "section.skills": "Domínio Técnico",
    "skill.languages": "Linguagens",
    "skill.scientific": "Telemetria e Dados",
    "skill.systems": "Sistemas e Infraestrutura",
    "skill.algorithms": "Fundamentos Teóricos",

    "section.experience": "Trajetória Acadêmica e Monitoria",
    "exp.atal.role": "Monitor · Análise e Técnicas de Algoritmos (LEDA / ATAL)",
    "exp.atal.desc": "Orientação a estudantes em projeto e análise de algoritmos avançados (grafos, divisão e conquista, programação dinâmica e complexidade assintótica de tempo e espaço).",
    "exp.adsi.role": "Monitor · Administração de Sistemas (ADSI)",
    "exp.adsi.desc": "Instrução prática em administração de servidores Linux, automação via Shell Scripts, processos do kernel, redes e gerenciamento de permissões.",
    "exp.ufcg.role": "Bacharelado em Ciência da Computação",
    "exp.ufcg.desc": "Disciplinas: Estruturas de Dados, Inteligência Artificial, Banco de Dados, Redes de Computadores, Sistemas Operacionais.",
    "exp.usp.role": "Engenharia Mecatrônica (Transferência)",
    "exp.usp.desc": "Fundamentos de Cálculo Diferencial e Integral, Física Geral, Controle e Dinâmica de Sistemas, Álgebra Linear e Circuitos Elétricos.",

    "lang.pt": "Português",
    "lang.pt_desc": "Nativo",
    "lang.en": "Inglês",
    "lang.en_desc": "Fluente (C2)",
    "lang.fr": "Francês",
    "lang.fr_desc": "Bom domínio",
    "lang.es": "Espanhol",
    "lang.es_desc": "Bom domínio",

    "toast.copied": "E-mail copiado: raphaelramosc@gmail.com",
    "cv.label": "Currículo (PDF)"
  },

  en: {
    "header.role": "Software Engineer",
    "intro.greeting": "Backend systems, telemetry & scientific computing.",
    "intro.bio": "Engineering software infrastructure for real-time signal processing and scientific data at the <strong>BINGO</strong> radio telescope. Computer Science undergraduate at UFCG and former Mechatronic Engineering student at USP. Teaching assistant in advanced algorithms and Linux systems administration.",
    "intro.copy_email": "Copy email",

    "section.telemetry": "Real-Time Telemetry · BINGO Radio Telescope",
    "instrument.live": "LIVE STREAM",
    "hud.freq": "CENTER FREQ.",
    "hud.rate": "SAMPLE RATE",
    "hud.coords": "CELESTIAL COORDS",
    "hud.storage": "STORAGE",
    "controls.pause": "Pause",
    "controls.resume": "Resume",
    "controls.pulse": "Inject pulse",
    "controls.reset": "Calibrate baseline",
    "controls.preset": "Band:",
    "crosshair.default": "Hover over spectrum",

    "section.projects": "Selected Projects",
    "proj.bingo.title": "MiniHorn Radio Astronomy Spectrometer (BINGO Telescope)",
    "proj.bingo.desc": "Designed and built the software infrastructure and visualization console for real-time RF spectrum analysis captured by the MiniHorn instrument of the BINGO radio telescope.",
    "proj.bingo.n1": "Clean Architecture separation, decoupling USRP SDR hardware drivers from signal processing routines and visual interfaces.",
    "proj.bingo.n2": "Persistence pipeline recording RF telemetry into binary HDF5 format with sub-second write cycles and zero sample loss.",
    "proj.bingo.n3": "Astronomical celestial pointing and ephemeris computation integrated via the Skyfield library.",

    "proj.stats.title": "Statistical Inference & Machine Learning Pipeline",
    "proj.stats.desc": "Quantitative modeling and statistical hypothesis testing for signal pattern extraction and predictive analysis on high-dimensional datasets.",
    "proj.stats.n1": "Feature selection based on Analysis of Variance (ANOVA) and information metrics.",
    "proj.stats.n2": "Vectorized computation to optimize model convergence and cross-validation throughput.",

    "proj.db.title": "Transactional Inventory System & Relational Database",
    "proj.db.desc": "Inventory control service designed with strict 3rd Normal Form (3NF) relational modeling, enforcing ACID properties under concurrent workloads.",
    "proj.db.n1": "Query execution plan analysis using EXPLAIN ANALYZE to reduce disk I/O overhead.",
    "proj.db.n2": "Transactional control with isolation guarantees and referential integrity.",

    "proj.web.title": "Decoupled Web Service & RESTful APIs",
    "proj.web.desc": "Decoupled client-server architecture with asynchronous RESTful endpoints and client-side state synchronization.",
    "proj.web.n1": "Flexible document modeling with MongoDB for catalog data storage.",
    "proj.web.n2": "Responsive frontend built with functional components and asynchronous API consumption.",

    "section.skills": "Technical Foundations",
    "skill.languages": "Languages",
    "skill.scientific": "Telemetry & Scientific Computing",
    "skill.systems": "Systems & Infrastructure",
    "skill.algorithms": "Theoretical Foundations",

    "section.experience": "Academic Background & Teaching",
    "exp.atal.role": "Teaching Assistant · Analysis & Techniques of Algorithms (LEDA / ATAL)",
    "exp.atal.desc": "Mentoring undergraduates in advanced algorithm design (graphs, divide-and-conquer, dynamic programming, and asymptotic time/space complexity analysis).",
    "exp.adsi.role": "Teaching Assistant · Systems Administration (ADSI)",
    "exp.adsi.desc": "Practical instruction in Linux server administration, Bash automation, kernel process management, networking, and access control.",
    "exp.ufcg.role": "Bachelor of Science in Computer Science",
    "exp.ufcg.desc": "Relevant coursework: Data Structures, Artificial Intelligence, Database Systems, Computer Networks, Operating Systems.",
    "exp.usp.role": "Mechatronic Engineering (Transferred)",
    "exp.usp.desc": "Foundations in Calculus, General Physics, System Dynamics & Control, Linear Algebra, and Electric Circuits.",

    "lang.pt": "Portuguese",
    "lang.pt_desc": "Native",
    "lang.en": "English",
    "lang.en_desc": "Fluent (C2)",
    "lang.fr": "French",
    "lang.fr_desc": "Good working knowledge",
    "lang.es": "Spanish",
    "lang.es_desc": "Good working knowledge",

    "toast.copied": "Email copied: raphaelramosc@gmail.com",
    "cv.label": "Resume (PDF)"
  }
};

let currentLanguage = localStorage.getItem("portfolio_lang") || "pt";

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("portfolio_lang", lang);
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  const langTag = document.getElementById("currentLang");
  if (langTag) {
    langTag.textContent = lang === "pt" ? "EN" : "PT";
  }

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update CV download link
  const cvLink = document.getElementById("cvDownloadLink");
  if (cvLink) {
    if (lang === "pt") {
      cvLink.href = "assets/Curriculo_Raphael_Ramos_PT.pdf";
      cvLink.download = "Curriculo_Raphael_Ramos_PT.pdf";
      cvLink.textContent = "Currículo (PDF)";
    } else {
      cvLink.href = "assets/Curriculo_Raphael_Ramos_EN.pdf";
      cvLink.download = "Resume_Raphael_Ramos_EN.pdf";
      cvLink.textContent = "Resume (PDF)";
    }
  }

  // Update stream toggle button text
  const btnStreamText = document.getElementById("btnStreamText");
  if (btnStreamText) {
    btnStreamText.textContent = isStreamPaused 
      ? (translations[lang]["controls.resume"]) 
      : (translations[lang]["controls.pause"]);
  }

  // Reset crosshair text if mouse not currently over canvas
  if (!isMouseOverCanvas) {
    const readout = document.getElementById("crosshairReadout");
    if (readout) readout.textContent = translations[lang]["crosshair.default"];
  }
}

// =============================================================================
// 2. Theme Management (Radix Zinc Palette)
// =============================================================================
const themeToggleBtn = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("portfolio_theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = activeTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio_theme", nextTheme);
  });
}

// =============================================================================
// 3. Language Toggle
// =============================================================================
const langToggleBtn = document.getElementById("langToggle");
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    setLanguage(currentLanguage === "pt" ? "en" : "pt");
  });
}

// =============================================================================
// 4. Subtle Toast & Clipboard
// =============================================================================
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 2400);
}

const copyEmailBtn = document.getElementById("copyEmailBtn");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    const email = copyEmailBtn.getAttribute("data-email") || "raphaelramosc@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      showToast(translations[currentLanguage]["toast.copied"]);
    }).catch(() => {
      showToast(email);
    });
  });
}

// =============================================================================
// 5. Scientific Spectrum Analyzer Canvas (High Precision Instrument)
// =============================================================================
const canvas = document.getElementById("spectrumCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
const crosshairReadout = document.getElementById("crosshairReadout");

let isStreamPaused = false;
let centerFrequency = 1100.0; // MHz
let noiseBaseline = -84.0; // dBm
let injectedPulseTime = 0;
let animationFrameId;

let isMouseOverCanvas = false;
let mouseCanvasX = -1;
let lastSpectrumData = null;

function resizeCanvas() {
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
}

window.addEventListener("resize", resizeCanvas);

// Generate Realistic RF Spectrum
function computeSpectrum(numPoints, time) {
  const spectrum = new Float32Array(numPoints);
  const bandwidth = 20.0; // MHz
  const freqStart = centerFrequency - bandwidth / 2;
  const freqStep = bandwidth / numPoints;

  let signalCenter = centerFrequency + 2.15;
  if (Math.abs(centerFrequency - 1420.4) < 10) {
    signalCenter = 1420.405; // 21cm Neutral Hydrogen line
  }

  for (let i = 0; i < numPoints; i++) {
    const f = freqStart + i * freqStep;
    
    // Thermal Johnson-Nyquist noise (-84 dBm baseline with slight ripple)
    const noise = noiseBaseline + (Math.random() * 3.2 - 1.6) + Math.sin(i * 0.08 + time * 0.001) * 1.2;

    // Cosmic signal peak (Gaussian profile)
    const dist = f - signalCenter;
    const peakPower = 34.0 * Math.exp(-(dist * dist) / (2 * 0.35 * 0.35));

    // Injected transient pulse (decaying over 2.5s)
    let injectedPower = 0;
    if (injectedPulseTime > 0) {
      const pDist = f - (centerFrequency - 3.8);
      const decay = Math.max(0, 1 - (Date.now() - injectedPulseTime) / 2500);
      injectedPower = 42.0 * decay * Math.exp(-(pDist * pDist) / (2 * 0.2 * 0.2));
    }

    spectrum[i] = noise + peakPower + injectedPower;
  }

  return spectrum;
}

function renderInstrument(time) {
  if (!ctx || !canvas) return;

  const w = canvas.width;
  const h = canvas.height;
  const numPoints = 256;
  const dpr = window.devicePixelRatio || 1;

  ctx.clearRect(0, 0, w, h);

  // Deep neutral background
  ctx.fillStyle = "#09090b";
  ctx.fillRect(0, 0, w, h);

  // Precise 1px Grid Lines
  const minDbm = -95;
  const maxDbm = -35;
  ctx.lineWidth = 1 * dpr;

  // Horizontal Power lines (-40 to -90 dBm)
  for (let db = -40; db >= -90; db -= 15) {
    const y = Math.round(((maxDbm - db) / (maxDbm - minDbm)) * h);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();

    ctx.fillStyle = "rgba(161, 161, 170, 0.5)";
    ctx.font = `${9 * dpr}px 'JetBrains Mono', monospace`;
    ctx.fillText(`${db} dBm`, 10 * dpr, y - 4 * dpr);
  }

  // Vertical Frequency lines
  const bandwidth = 20.0;
  for (let i = 0; i <= 4; i++) {
    const x = Math.round((i / 4) * w);
    const f = (centerFrequency - bandwidth / 2 + (i / 4) * bandwidth).toFixed(1);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();

    ctx.fillStyle = "rgba(161, 161, 170, 0.5)";
    ctx.font = `${9 * dpr}px 'JetBrains Mono', monospace`;
    ctx.fillText(`${f} MHz`, x + 6 * dpr, h - 8 * dpr);
  }

  // Calculate & Draw Spectrum Trace
  const spectrum = computeSpectrum(numPoints, time);
  lastSpectrumData = spectrum;

  ctx.beginPath();
  for (let i = 0; i < numPoints; i++) {
    const x = (i / (numPoints - 1)) * w;
    const val = spectrum[i];
    const y = Math.max(0, Math.min(h, ((maxDbm - val) / (maxDbm - minDbm)) * h));

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  // Thin, clean 1px hairline stroke (Phosphor Amber / Cyan)
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  ctx.strokeStyle = isDark ? "#38bdf8" : "#0284c7";
  ctx.lineWidth = 1.2 * dpr;
  ctx.stroke();

  // Draw Crosshair on Mouse Hover
  if (isMouseOverCanvas && mouseCanvasX >= 0) {
    const normX = Math.max(0, Math.min(1, mouseCanvasX / canvas.clientWidth));
    const ptIndex = Math.round(normX * (numPoints - 1));
    const freqAtX = (centerFrequency - bandwidth / 2 + normX * bandwidth).toFixed(2);
    const powerAtX = spectrum[ptIndex].toFixed(1);

    const canvasX = normX * w;
    const canvasY = Math.max(0, Math.min(h, ((maxDbm - spectrum[ptIndex]) / (maxDbm - minDbm)) * h));

    // Vertical Hairline
    ctx.strokeStyle = "rgba(244, 244, 245, 0.4)";
    ctx.lineWidth = 1 * dpr;
    ctx.setLineDash([4 * dpr, 4 * dpr]);
    ctx.beginPath();
    ctx.moveTo(canvasX, 0);
    ctx.lineTo(canvasX, h);
    ctx.stroke();
    ctx.setLineDash([]);

    // Intersection Indicator Dot
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(canvasX, canvasY, 3 * dpr, 0, Math.PI * 2);
    ctx.fill();

    // Update Readout Text
    if (crosshairReadout) {
      crosshairReadout.textContent = `${freqAtX} MHz  |  ${powerAtX} dBm`;
    }
  }

  if (!isStreamPaused) {
    animationFrameId = requestAnimationFrame(renderInstrument);
  }
}

// Mouse Crosshair Listeners
if (canvas) {
  canvas.addEventListener("mouseenter", () => {
    isMouseOverCanvas = true;
  });

  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseCanvasX = e.clientX - rect.left;
    if (isStreamPaused) {
      renderInstrument(performance.now());
    }
  });

  canvas.addEventListener("mouseleave", () => {
    isMouseOverCanvas = false;
    mouseCanvasX = -1;
    if (crosshairReadout) {
      crosshairReadout.textContent = translations[currentLanguage]["crosshair.default"];
    }
    if (isStreamPaused) {
      renderInstrument(performance.now());
    }
  });
}

// Controls
const btnToggleStream = document.getElementById("btnToggleStream");
const btnStreamText = document.getElementById("btnStreamText");
const btnInjectSignal = document.getElementById("btnInjectSignal");
const btnResetBaseline = document.getElementById("btnResetBaseline");
const presetChips = document.querySelectorAll(".preset-chip");
const hudFreq = document.getElementById("hudFreq");

if (btnToggleStream) {
  btnToggleStream.addEventListener("click", () => {
    isStreamPaused = !isStreamPaused;
    btnToggleStream.classList.toggle("active", !isStreamPaused);

    if (btnStreamText) {
      const isPT = currentLanguage === "pt";
      btnStreamText.textContent = isStreamPaused 
        ? (translations[currentLanguage]["controls.resume"]) 
        : (translations[currentLanguage]["controls.pause"]);
    }

    if (!isStreamPaused) {
      animationFrameId = requestAnimationFrame(renderInstrument);
    }
  });
}

if (btnInjectSignal) {
  btnInjectSignal.addEventListener("click", () => {
    injectedPulseTime = Date.now();
    showToast(currentLanguage === "pt" ? "Pulso transitório injetado." : "Transient pulse injected.");
    if (isStreamPaused) renderInstrument(performance.now());
  });
}

if (btnResetBaseline) {
  btnResetBaseline.addEventListener("click", () => {
    noiseBaseline = -84.0;
    injectedPulseTime = 0;
    showToast(currentLanguage === "pt" ? "Base de ruído calibrada." : "Baseline recalibrated.");
    if (isStreamPaused) renderInstrument(performance.now());
  });
}

presetChips.forEach(chip => {
  chip.addEventListener("click", () => {
    presetChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    centerFrequency = parseFloat(chip.getAttribute("data-freq")) || 1100.0;
    if (hudFreq) {
      hudFreq.textContent = `${centerFrequency.toFixed(2)} MHz`;
    }
    if (isStreamPaused) renderInstrument(performance.now());
  });
});

// =============================================================================
// 6. Init
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLanguage);
  resizeCanvas();
  animationFrameId = requestAnimationFrame(renderInstrument);
});
