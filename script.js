/**
 * RAPHAEL RAMOS — PORTFOLIO JAVASCRIPT
 * Features:
 * - Full i18n Translation (PT-BR / EN)
 * - Interactive BINGO Radio Telescope Spectrometer Canvas (FFT Simulation)
 * - Dark / Light Theme Toggle
 * - Copy-to-Clipboard with Toast Notifications
 * - Responsive Mobile Menu & Smooth Navigation
 */

// =============================================================================
// 1. Translations Dictionary (i18n)
// =============================================================================
const translations = {
  pt: {
    "nav.status": "Disponível para contratação",
    "nav.telemetry": "Telemetria",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.experience": "Trajetória",
    "nav.contact": "Contato",

    "hero.badge": "Backend • Telemetria • Clean Architecture",
    "hero.role": "Software Engineer • Backend, Data Systems & Distributed Telemetry",
    "hero.description": "Desenvolvo sistemas de software robustos para alta taxa de transferência, pipelines de telemetria em tempo real e arquiteturas modulares. Engenharia Mecatrônica (USP) e Ciência da Computação (UFCG), atuando na vanguarda da computação científica com o <strong>Telescópio BINGO</strong>.",
    "hero.cta_telemetry": "Explorar Telemetria",
    "hero.download_cv": "Baixar CV (PDF)",
    "hero.copy_email": "Copiar E-mail",

    "stats.project": "Projeto Principal",
    "stats.project_sub": "Espectrômetro de Radioastronomia",
    "stats.stack": "Especialidade",
    "stats.stack_sub": "Python, C++, Linux & HDF5",
    "stats.acad": "Formação • UFCG & USP",
    "stats.acad_sub": "Ex-Mecatrônica USP • Monitor ATAL/ADSI",
    "stats.languages": "Idiomas",
    "stats.languages_sub": "Português, Inglês (Fluente), FR & ES",

    "telemetry.title": "Console Tático de Radioastronomia (BINGO)",
    "telemetry.desc": "Simulador interativo do console desenvolvido para o espectrômetro <strong>MiniHorn do Telescópio BINGO</strong>. Demonstra processamento de sinais de radiofrequência em tempo real, integração com hardware SDR USRP, efemérides astronômicas e persistência HDF5.",
    
    "hud.center_freq": "FREQ. CENTRAL",
    "hud.sample_rate": "TAXA DE AMOSTRAGEM",
    "hud.sdr_gain": "GANHO SDR",
    "hud.celestial": "COORD. CELESTES (SKYFIELD)",
    "hud.storage": "PIPELINE HDF5",

    "controls.pause": "Pausar Fluxo",
    "controls.resume": "Retomar Fluxo",
    "controls.inject": "Injetar Pulso de Sinal",
    "controls.reset": "Calibrar Ruído Base",
    "controls.preset": "Preset da Banda:",

    "projects.title": "Projetos em Destaque",
    "projects.desc": "Sistemas distribuídos, pipelines de dados de alta taxa e arquiteturas de backend com foco em consistência, escalabilidade e rigor científico.",

    "projects.b1.badge": "Projeto Principal • Radioastronomia",
    "projects.b1.title": "Telescópio BINGO — Espectrômetro de Radioastronomia MiniHorn",
    "projects.b1.subtitle": "Colaboração Internacional de Radioastronomia • Campina Grande, Brasil (2026 – Presente)",
    "projects.b1.desc": "Projetei e desenvolvi a infraestrutura de software e console tático em Python para o espectrômetro de radioastronomia MiniHorn do Telescópio BINGO. Arquitetura modular sob <strong>Clean Architecture</strong> (camadas de Domínio, Aplicação e Infraestrutura), integrando hardware SDR USRP para controle em tempo real de frequência central, ganho e amostragem.",
    "projects.b1.h1": "<strong>Clean Architecture:</strong> Desacoplamento total entre drivers de hardware (USRP), lógica de processamento de sinal e camadas de visualização.",
    "projects.b1.h2": "<strong>Streaming de Alta Performance:</strong> Pipeline de aquisição gravando telemetria em formato binário <strong>HDF5</strong> com sub-second write cycles e taxa zero de perda de amostras.",
    "projects.b1.h3": "<strong>Cômputo Astronômico:</strong> Integração com a biblioteca <strong>Skyfield</strong> para cálculo dinâmico de efemérides celestes e apontamento astronômico.",

    "projects.b2.badge": "Data Science & Pesquisa Quantitativa",
    "projects.b2.title": "Pipeline de Inferência Estatística & Machine Learning",
    "projects.b2.subtitle": "Pesquisa Quantitativa Aplicada • Campina Grande, Brasil",
    "projects.b2.desc": "Desenvolvi modelos de análise quantitativa e testes de hipóteses estatísticas em Python para extração de padrões em sinais complexos e modelagem preditiva em bases de dados multidimensionais.",
    "projects.b2.h1": "Testes de hipóteses e modelos de regressão/classificação para validação de convergência.",
    "projects.b2.h2": "Feature selection avançada através de análise de variância (ANOVA) e métricas de informação.",
    "projects.b2.h3": "Otimização de pipelines com computação vetorializada via NumPy, SciPy e Scikit-Learn.",

    "projects.b3.badge": "Engenharia de Banco de Dados • Backend",
    "projects.b3.title": "Sistema de Gerenciamento Transacional & Banco Relacional",
    "projects.b3.subtitle": "Sistemas de Bancos de Dados • Campina Grande, Brasil",
    "projects.b3.desc": "Construí uma aplicação completa de gerenciamento transacional em Python integrada ao PostgreSQL, com modelagem relacional normalizada em 3FN e otimização de índices para garantir consistência ACID e alta vazão em consultas concorrentes.",
    "projects.b3.h1": "Modelagem relacional estrita com garantia de integridade referencial e isolamento de transações.",
    "projects.b3.h2": "Otimização de planos de execução de queries SQL com análise de EXPLAIN ANALYZE.",
    "projects.b3.h3": "Backend modular com controle transacional e testes de carga.",

    "projects.b4.badge": "Full-Stack & Web Systems",
    "projects.b4.title": "Aplicação Web Desacoplada & APIs RESTful",
    "projects.b4.subtitle": "Projeto de Engenharia Web • Campina Grande, Brasil",
    "projects.b4.desc": "Desenvolvi uma arquitetura web full-stack desacoplada utilizando React.js e Node.js/Express com MongoDB, implementando endpoints RESTful eficientes, gerenciamento de estado em tempo real e autenticação.",
    "projects.b4.h1": "Arquitetura cliente-servidor desacoplada com consumo assíncrono de APIs RESTful.",
    "projects.b4.h2": "Modelagem de dados flexível com MongoDB e persistência orientada a documentos.",
    "projects.b4.h3": "Interface responsiva e dinâmica construída em React.js.",

    "skills.title": "Habilidades Técnicas & Ferramentas",
    "skills.desc": "Domínio aprofundado em linguagens de baixo e alto nível, computação científica, telemetria em tempo real e infraestrutura Linux.",
    "skills.cat1": "Linguagens de Programação",
    "skills.cat2": "Telemetria & Computação Científica",
    "skills.cat3": "Sistemas, Dados & Infraestrutura",
    "skills.cat4": "Fundamentos & Algoritmos",

    "experience.title": "Experiência Acadêmica & Educação",
    "experience.desc": "Base teórica sólida combinando engenharia e computação, aliada à experiência de ensino e liderança técnica na universidade.",
    
    "timeline.bingo.role": "Software Engineer • Projeto Telescópio BINGO",
    "timeline.bingo.org": "Colaboração Internacional de Radioastronomia • Campina Grande, Brasil",
    "timeline.bingo.text": "Responsável pelo desenvolvimento do console de visualização científica, arquitetura limpa de software para controle de hardware SDR USRP e pipelines de gravação de telemetria astronômica em HDF5.",

    "timeline.atal.role": "Monitor Acadêmico • Análise e Técnicas de Algoritmos (LEDA / ATAL)",
    "timeline.atal.text": "Instruí graduandos em técnicas avançadas de algoritmos (algoritmos em grafos, programação dinâmica, recursão, análise rigorosa de complexidade assintótica de tempo e memória) e estruturas de dados de alta eficiência.",

    "timeline.adsi.role": "Monitor Acadêmico • Administração de Sistemas (ADSI)",
    "timeline.adsi.text": "Orientei estudantes em administração avançada de sistemas Linux, automação via Shell Scripts, escalonamento de processos do kernel, serviços de rede e configuração de segurança de infraestrutura.",

    "timeline.ufcg.role": "Bacharelado em Ciência da Computação",
    "timeline.ufcg.text": "Foco em Estruturas de Dados, Algoritmos Avançados, Inteligência Artificial, Sistemas Operacionais, Banco de Dados e Redes de Computadores.",

    "timeline.usp.role": "Engenharia Mecatrônica (Transferência)",
    "timeline.usp.text": "Sólida base em Cálculo Avançado, Física Geral, Controle e Dinâmica de Sistemas, Álgebra Linear, Eletrônica Digital e Analógica.",

    "lang.title": "Proficiência em Idiomas",
    "lang.pt": "Português",
    "lang.pt_level": "Nativo",
    "lang.en": "Inglês",
    "lang.en_level": "Fluente • C2 Proficiente",
    "lang.fr": "Francês",
    "lang.fr_level": "Bom Domínio",
    "lang.es": "Espanhol",
    "lang.es_level": "Bom Domínio",

    "contact.title": "Pronto para construir sistemas de alto impacto?",
    "contact.desc": "Estou disponível para oportunidades técnicas em engenharia de software, sistemas de dados, computação científica e infraestrutura de telemetria. Entre em contato diretamente:",
    "contact.email_label": "E-mail Principal:",
    "contact.phone_label": "Telefone / WhatsApp:",

    "footer.built_with": "Construído com HTML5 semântico, CSS moderno & Canvas",
    "toast.copied": "E-mail copiado para a área de transferência!"
  },

  en: {
    "nav.status": "Available for opportunities",
    "nav.telemetry": "Telemetry",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.badge": "Backend • Telemetry • Clean Architecture",
    "hero.role": "Software Engineer • Backend, Data Systems & Distributed Telemetry",
    "hero.description": "Engineering high-throughput software systems, real-time telemetry pipelines, and modular architectures. Mechatronic Engineering background (USP) and Computer Science (UFCG), working at the cutting edge of scientific computing with the <strong>BINGO Telescope</strong>.",
    "hero.cta_telemetry": "Explore Telemetry",
    "hero.download_cv": "Download Resume (PDF)",
    "hero.copy_email": "Copy Email",

    "stats.project": "Featured Project",
    "stats.project_sub": "Radio Astronomy Spectrometer",
    "stats.stack": "Core Stack",
    "stats.stack_sub": "Python, C++, Linux & HDF5",
    "stats.acad": "Education • UFCG & USP",
    "stats.acad_sub": "Ex-Mechatronics USP • TA in Algorithms & SysAdmin",
    "stats.languages": "Languages",
    "stats.languages_sub": "Portuguese, English (Fluent C2), FR & ES",

    "telemetry.title": "Tactical Radio Astronomy Console (BINGO)",
    "telemetry.desc": "Interactive simulator of the tactical dashboard engineered for the <strong>BINGO Telescope MiniHorn spectrometer</strong>. Demonstrates real-time RF signal processing, SDR USRP hardware integration, astronomical ephemeris calculations, and HDF5 storage.",

    "hud.center_freq": "CENTER FREQUENCY",
    "hud.sample_rate": "SAMPLE RATE",
    "hud.sdr_gain": "SDR GAIN",
    "hud.celestial": "CELESTIAL COORDS (SKYFIELD)",
    "hud.storage": "HDF5 PIPELINE",

    "controls.pause": "Pause Stream",
    "controls.resume": "Resume Stream",
    "controls.inject": "Inject Signal Pulse",
    "controls.reset": "Calibrate Baseline Noise",
    "controls.preset": "Band Preset:",

    "projects.title": "Featured Engineering Projects",
    "projects.desc": "Distributed systems, high-throughput data pipelines, and backend architectures designed for transactional consistency, scalability, and scientific rigor.",

    "projects.b1.badge": "Lead Project • Radio Astronomy",
    "projects.b1.title": "BINGO Telescope — MiniHorn Radio Astronomy Spectrometer",
    "projects.b1.subtitle": "International Radio Astronomy Collaboration • Campina Grande, Brazil (2026 – Present)",
    "projects.b1.desc": "Designed and built the software infrastructure and tactical visualization console in Python for the BINGO Telescope MiniHorn spectrometer. Architected under <strong>Clean Architecture</strong> (Domain, Application, Infrastructure layers), integrating USRP SDR hardware for real-time frequency, gain, and sampling control.",
    "projects.b1.h1": "<strong>Clean Architecture:</strong> Decoupled SDR hardware drivers from signal processing algorithms and visualization layers.",
    "projects.b1.h2": "<strong>High-Throughput Streaming:</strong> Acquisition pipeline streaming RF telemetry directly into binary <strong>HDF5</strong> storage with sub-second write cycles and zero sample loss.",
    "projects.b1.h3": "<strong>Celestial Pointing:</strong> Integrated <strong>Skyfield</strong> astronomical library for dynamic celestial ephemeris calculations and coordinate transformations.",

    "projects.b2.badge": "Data Science & Quantitative Research",
    "projects.b2.title": "Statistical Inference & Machine Learning Pipeline",
    "projects.b2.subtitle": "Applied Quantitative Research • Campina Grande, Brazil",
    "projects.b2.desc": "Developed quantitative analysis models and statistical hypothesis testing pipelines in Python to extract signal patterns and perform predictive modeling on complex high-dimensional datasets.",
    "projects.b2.h1": "Hypothesis testing and regression/classification models benchmarking statistical convergence.",
    "projects.b2.h2": "Advanced feature selection via Analysis of Variance (ANOVA) and information metrics.",
    "projects.b2.h3": "Vectorized pipeline optimization using NumPy, SciPy, and Scikit-Learn.",

    "projects.b3.badge": "Database Engineering • Backend",
    "projects.b3.title": "Transactional Inventory System & Relational Database",
    "projects.b3.subtitle": "Database Systems Engineering Project • Campina Grande, Brazil",
    "projects.b3.desc": "Engineered a transactional backend application in Python backed by PostgreSQL, designing a 3NF normalized schema with optimized indexes and complex queries ensuring ACID compliance and high query throughput.",
    "projects.b3.h1": "Strict relational modeling ensuring referential integrity and transaction isolation.",
    "projects.b3.h2": "SQL query execution plan optimization leveraging EXPLAIN ANALYZE.",
    "projects.b3.h3": "Modular backend service with transactional control and load testing.",

    "projects.b4.badge": "Full-Stack & Web Systems",
    "projects.b4.title": "Decoupled Web Application & RESTful APIs",
    "projects.b4.subtitle": "Web Systems Engineering Project • Campina Grande, Brazil",
    "projects.b4.desc": "Architected a decoupled full-stack web service with React.js, Node.js/Express, and MongoDB, implementing high-throughput RESTful endpoints, asynchronous request pipelines, and state synchronization.",
    "projects.b4.h1": "Decoupled client-server architecture consuming asynchronous RESTful endpoints.",
    "projects.b4.h2": "Flexible document data modeling using MongoDB.",
    "projects.b4.h3": "Responsive, dynamic frontend interface engineered with React.js.",

    "skills.title": "Technical Skills & Tooling",
    "skills.desc": "In-depth proficiency in low and high-level languages, scientific computing, real-time telemetry, and Linux systems administration.",
    "skills.cat1": "Programming Languages",
    "skills.cat2": "Telemetry & Scientific Computing",
    "skills.cat3": "Systems, Data & Infrastructure",
    "skills.cat4": "Foundations & Algorithms",

    "experience.title": "Teaching & Academic Experience",
    "experience.desc": "Rigorous scientific foundation combining engineering and computer science, backed by academic mentoring and technical leadership.",

    "timeline.bingo.role": "Software Engineer • BINGO Telescope Project",
    "timeline.bingo.org": "International Radio Astronomy Collaboration • Campina Grande, Brazil",
    "timeline.bingo.text": "Engineering tactical scientific visualization dashboards, clean software architecture for USRP SDR hardware control, and real-time HDF5 astronomical telemetry recording pipelines.",

    "timeline.atal.role": "Teaching Assistant • Analysis and Techniques of Algorithms (LEDA / ATAL)",
    "timeline.atal.text": "Mentored undergraduates in advanced algorithmic problem solving (graph algorithms, dynamic programming, divide-and-conquer, greedy approaches) and rigorous asymptotic time/space complexity analysis.",

    "timeline.adsi.role": "Teaching Assistant • Systems Administration (ADSI)",
    "timeline.adsi.text": "Guided students in Linux internals, Bash automation scripting, system process scheduling, network protocol configuration, and infrastructure containerization with Docker.",

    "timeline.ufcg.role": "Bachelor of Science in Computer Science",
    "timeline.ufcg.text": "Focus on Data Structures, Advanced Algorithms, Artificial Intelligence, Operating Systems, Database Systems, and Computer Networks.",

    "timeline.usp.role": "Mechatronic Engineering (Transferred)",
    "timeline.usp.text": "Scientific foundation in Advanced Calculus, General Physics, System Dynamics & Control, Linear Algebra, Digital and Analog Electronics.",

    "lang.title": "Language Proficiency",
    "lang.pt": "Portuguese",
    "lang.pt_level": "Native",
    "lang.en": "English",
    "lang.en_level": "Fluent • C2 Full Professional",
    "lang.fr": "French",
    "lang.fr_level": "Good Working Knowledge",
    "lang.es": "Spanish",
    "lang.es_level": "Good Working Knowledge",

    "contact.title": "Ready to build high-impact systems?",
    "contact.desc": "I am open to technical opportunities in backend engineering, data systems, scientific computing, and telemetry infrastructure. Reach out directly:",
    "contact.email_label": "Direct Email:",
    "contact.phone_label": "Phone / WhatsApp:",

    "footer.built_with": "Built with semantic HTML5, modern CSS & Canvas",
    "toast.copied": "Email address copied to clipboard!"
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

  // Update all DOM elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update button text in telemetry controls
  const btnStreamText = document.getElementById("btnStreamText");
  if (btnStreamText) {
    btnStreamText.textContent = isStreamPaused 
      ? (translations[lang]["controls.resume"]) 
      : (translations[lang]["controls.pause"]);
  }
}

// =============================================================================
// 2. Theme Toggle (Dark / Light)
// =============================================================================
const themeToggleBtn = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("portfolio_theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio_theme", newTheme);
  });
}

// =============================================================================
// 3. Language Switcher Trigger
// =============================================================================
const langToggleBtn = document.getElementById("langToggle");
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    const newLang = currentLanguage === "pt" ? "en" : "pt";
    setLanguage(newLang);
    showToast(newLang === "pt" ? "Idioma alterado para Português" : "Language switched to English");
  });
}

// =============================================================================
// 4. Toast Notification & Copy Email
// =============================================================================
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const msg = translations[currentLanguage]["toast.copied"] || "Copiado para a área de transferência!";
    showToast(msg);
  }).catch(() => {
    showToast("Email: " + text);
  });
}

document.querySelectorAll("[data-email]").forEach(btn => {
  btn.addEventListener("click", () => {
    const email = btn.getAttribute("data-email") || "raphaelramosc@gmail.com";
    copyToClipboard(email);
  });
});

// =============================================================================
// 5. CV Dropdown & Mobile Menu
// =============================================================================
const cvDropdownBtn = document.getElementById("cvDropdownBtn");
const cvDropdownMenu = document.getElementById("cvDropdownMenu");

if (cvDropdownBtn && cvDropdownMenu) {
  cvDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    cvDropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    cvDropdownMenu.classList.remove("show");
  });
}

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("mobile-active");
  });

  navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("mobile-active");
    });
  });
}

// Active Nav Link On Scroll
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset + 120;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionId = current.getAttribute("id");
    const link = document.querySelector(`.nav-link[href*="${sectionId}"]`);
    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});

// =============================================================================
// 6. Interactive BINGO Radio Telescope Spectrometer Canvas (FFT Simulator)
// =============================================================================
const canvas = document.getElementById("spectrumCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;

let isStreamPaused = false;
let centerFrequency = 1100.0; // MHz
let sdrGain = 42.5; // dB
let injectedPulseTime = 0; // for transient signals
let noiseBaseline = -85; // dBm
let animationFrameId;

// HUD Elements
const hudFreq = document.getElementById("hudFreq");
const hudGain = document.getElementById("hudGain");
const canvasPeakText = document.getElementById("canvasPeakText");
const btnToggleStream = document.getElementById("btnToggleStream");
const btnStreamText = document.getElementById("btnStreamText");
const btnInjectSignal = document.getElementById("btnInjectSignal");
const btnResetBaseline = document.getElementById("btnResetBaseline");
const presetButtons = document.querySelectorAll(".preset-btn");

function resizeCanvas() {
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
}

window.addEventListener("resize", resizeCanvas);

// Simulated Spectral Calculation
function getPowerSpectrum(points, time) {
  const spectrum = new Float32Array(points);
  const bandwidth = 20.0; // 20 MHz
  const freqStart = centerFrequency - bandwidth / 2;
  const freqStep = bandwidth / points;

  let maxVal = -120;
  let peakFreq = centerFrequency;

  // Signal parameters based on band
  let signalCenter = centerFrequency + 2.4; // slight offset
  if (Math.abs(centerFrequency - 1420.4) < 10) {
    signalCenter = 1420.405; // 21cm Hydrogen line
  }

  for (let i = 0; i < points; i++) {
    const f = freqStart + i * freqStep;
    
    // Thermal Johnson-Nyquist Noise Floor (-85 dBm to -82 dBm)
    const noise = noiseBaseline + (Math.random() * 4 - 2) + Math.sin(i * 0.05 + time * 0.002) * 1.5;

    // Main cosmic signal peak (e.g. Neutral Hydrogen or Galactic Synchrotron)
    const dist = f - signalCenter;
    const peakSignal = 32.0 * Math.exp(-(dist * dist) / (2 * 0.4 * 0.4)); // Gaussian peak

    // Transient injected pulse (e.g. Pulsar / FRB simulation)
    let injectedSignal = 0;
    if (injectedPulseTime > 0) {
      const pDist = f - (centerFrequency - 4.2);
      const pulseDecay = Math.max(0, 1 - (Date.now() - injectedPulseTime) / 3000);
      injectedSignal = 40.0 * pulseDecay * Math.exp(-(pDist * pDist) / (2 * 0.25 * 0.25));
    }

    const totalPower = noise + peakSignal + injectedSignal;
    spectrum[i] = totalPower;

    if (totalPower > maxVal) {
      maxVal = totalPower;
      peakFreq = f;
    }
  }

  return { spectrum, maxVal, peakFreq };
}

function renderSpectrometer(time) {
  if (!ctx || !canvas) return;

  const w = canvas.width;
  const h = canvas.height;
  const numPoints = 256;

  ctx.clearRect(0, 0, w, h);

  // Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
  bgGrad.addColorStop(0, "rgba(6, 9, 16, 0.95)");
  bgGrad.addColorStop(1, "rgba(4, 6, 10, 1)");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // Draw Grid Lines (Frequency & Power dBm)
  ctx.strokeStyle = "rgba(56, 189, 248, 0.08)";
  ctx.lineWidth = 1;

  // Horizontal dBm grid (-30 dBm to -90 dBm)
  const minDbm = -95;
  const maxDbm = -35;
  for (let db = -40; db >= -90; db -= 10) {
    const y = ((maxDbm - db) / (maxDbm - minDbm)) * h;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();

    ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
    ctx.font = `${10 * window.devicePixelRatio}px 'Fira Code', monospace`;
    ctx.fillText(`${db} dBm`, 12 * window.devicePixelRatio, y - 4);
  }

  // Vertical Frequency grid (5 columns)
  const bandwidth = 20.0;
  for (let i = 0; i <= 4; i++) {
    const x = (i / 4) * w;
    const f = (centerFrequency - bandwidth / 2 + (i / 4) * bandwidth).toFixed(1);
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();

    ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
    ctx.font = `${10 * window.devicePixelRatio}px 'Fira Code', monospace`;
    ctx.fillText(`${f} MHz`, x + 6, h - 10 * window.devicePixelRatio);
  }

  // Get Simulated Data
  const { spectrum, maxVal, peakFreq } = getPowerSpectrum(numPoints, time);

  // Draw Spectrum Curve (Cyan Glow)
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

  // Stroke with Neon Cyan
  ctx.strokeStyle = "#38bdf8";
  ctx.lineWidth = 2 * window.devicePixelRatio;
  ctx.shadowColor = "rgba(56, 189, 248, 0.6)";
  ctx.shadowBlur = 12;
  ctx.stroke();

  // Fill gradient below curve
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  const fillGrad = ctx.createLinearGradient(0, 0, 0, h);
  fillGrad.addColorStop(0, "rgba(56, 189, 248, 0.2)");
  fillGrad.addColorStop(1, "rgba(56, 189, 248, 0.0)");
  ctx.fillStyle = fillGrad;
  ctx.fill();
  ctx.shadowBlur = 0; // reset shadow

  // Update Peak Detector Text
  if (canvasPeakText) {
    const isPT = currentLanguage === "pt";
    const label = isPT ? "Pico Detectado" : "Peak Detected";
    canvasPeakText.textContent = `${label}: ${peakFreq.toFixed(2)} MHz (${maxVal.toFixed(1)} dBm)`;
  }

  if (!isStreamPaused) {
    animationFrameId = requestAnimationFrame(renderSpectrometer);
  }
}

// Control Event Listeners
if (btnToggleStream) {
  btnToggleStream.addEventListener("click", () => {
    isStreamPaused = !isStreamPaused;
    btnToggleStream.classList.toggle("active", !isStreamPaused);

    if (btnStreamText) {
      const isPT = currentLanguage === "pt";
      btnStreamText.textContent = isStreamPaused 
        ? (isPT ? "Retomar Fluxo" : "Resume Stream") 
        : (isPT ? "Pausar Fluxo" : "Pause Stream");
    }

    if (!isStreamPaused) {
      animationFrameId = requestAnimationFrame(renderSpectrometer);
    }
  });
}

if (btnInjectSignal) {
  btnInjectSignal.addEventListener("click", () => {
    injectedPulseTime = Date.now();
    showToast(currentLanguage === "pt" ? "Pulso de sinal cósmico injetado!" : "Cosmic signal pulse injected!");
  });
}

if (btnResetBaseline) {
  btnResetBaseline.addEventListener("click", () => {
    noiseBaseline = -85;
    injectedPulseTime = 0;
    showToast(currentLanguage === "pt" ? "Calibração de ruído efetuada." : "Baseline noise recalibrated.");
  });
}

presetButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    presetButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    centerFrequency = parseFloat(btn.getAttribute("data-freq")) || 1100.0;
    if (hudFreq) {
      hudFreq.textContent = `${centerFrequency.toFixed(2)} MHz`;
    }
  });
});

// =============================================================================
// 7. Initialization
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLanguage);
  resizeCanvas();
  animationFrameId = requestAnimationFrame(renderSpectrometer);
});
