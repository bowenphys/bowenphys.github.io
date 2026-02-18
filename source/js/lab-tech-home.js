(() => {
  const HERO_ID = "lab-tech-hero";
  const DASHBOARD_ID = "lab-tech-dashboard";
  const SHOWCASE_ID = "lab-tech-showcase";
  const CANVAS_ID = "lab-tech-canvas";
  const RUNTIME_KEY = "__labTechRuntime";
  const localeCopy = {
    zh: {
      badge: "SYSTEM STATUS: OPERATIONAL",
      title_prefix: "Condensed Matter",
      title_accent: "Intelligence Console",
      subtitle: "聚焦拓扑量子态、非常规超导与高性能数值模拟，持续输出可复现科研流程与可执行方法学。",
      chips: ["Topological Phases", "Unconventional SC", "Tensor Network", "Quantum Transport", "HPC Workflow"],
      actions: [
        { text: "研究", href: "/research/" },
        { text: "论文", href: "/publications/" },
        { text: "项目", href: "/projects/" },
        { text: "简历", href: "/cv/" }
      ],
      metric_labels: ["文章", "标签", "分类", "复现率"],
      fallbackMetrics: [
        { label: "文章", value: "24" },
        { label: "项目", value: "07" },
        { label: "复现率", value: "96.4%" },
        { label: "在线", value: "1973 DAYS" }
      ],
      search_placeholder: "搜索关键词：拓扑超导 / DMRG / Kubo / Tensor Network",
      search_button: "启动检索",
      search_hint: "连接站内全文检索与标签命中",
      dashboard_task_title: "任务终端",
      dashboard_logs_title: "系统日志"
    },
    en: {
      badge: "SYSTEM STATUS: OPERATIONAL",
      title_prefix: "Condensed Matter",
      title_accent: "Intelligence Console",
      subtitle:
        "Tracking topological phases, unconventional superconductivity, and high-throughput numerics with reproducible workflows.",
      chips: ["Topological Phases", "Unconventional SC", "Tensor Network", "Quantum Transport", "HPC Workflow"],
      actions: [
        { text: "Research", href: "/en/research/" },
        { text: "Publications", href: "/en/publications/" },
        { text: "Projects", href: "/en/projects/" },
        { text: "CV", href: "/en/cv/" }
      ],
      metric_labels: ["POSTS", "TAGS", "CATEGORIES", "REPRO RATE"],
      fallbackMetrics: [
        { label: "POSTS", value: "24" },
        { label: "PROJECTS", value: "07" },
        { label: "REPRO RATE", value: "96.4%" },
        { label: "UPTIME", value: "1973 DAYS" }
      ],
      search_placeholder: "Search: Topological SC / DMRG / Kubo / Tensor Network",
      search_button: "Launch Search",
      search_hint: "Connected to local full-text and tag search",
      dashboard_task_title: "Task Terminal",
      dashboard_logs_title: "System Logs"
    }
  };

  const defaultDashboard = {
    console_title: "Research Operations Console",
    status_bar: [
      { label: "PIPELINE", value: "PASS", tone: "ok" },
      { label: "CLUSTER", value: "87% UTIL", tone: "warn" },
      { label: "QUEUE", value: "23 JOBS", tone: "ok" },
      { label: "RISK", value: "LOW", tone: "ok" }
    ],
    timeline: [
      { phase: "2026 Q1", event: "Topological SC Scan Engine v2", status: "Done" },
      { phase: "2026 Q1", event: "Transport Kubo Benchmark Suite", status: "Done" },
      { phase: "2026 Q2", event: "Tensor Network Error Budget AutoReport", status: "Running" },
      { phase: "2026 Q2", event: "Hybrid DMRG-GPU Pipeline", status: "Testing" }
    ],
    terminal_tasks: [
      { cmd: "scan-toposc --grid dense --seed 42", status: "done" },
      { cmd: "benchmark-kubo --backend cuda --batch 32", status: "run" },
      { cmd: "report-merge --source logs --target dashboard", status: "queue" }
    ],
    system_logs: [
      { time: "22:31:05", level: "INFO", message: "Phase atlas export completed" },
      { time: "22:31:17", level: "INFO", message: "Kubo benchmark submitted to cluster queue" },
      { time: "22:31:42", level: "WARN", message: "One node reported thermal throttling" },
      { time: "22:32:06", level: "INFO", message: "Auto-report pipeline synced with latest figures" },
      { time: "22:32:19", level: "INFO", message: "Reproducibility checksum passed" }
    ]
  };

  const defaultShowcase = {
    zh: {
      section_title: "精选研究模块",
      section_subtitle: "借鉴技能市场的卡片编排方式，展示当前高价值研究任务与可复用工具链。",
      cta_text: "查看全部研究轨道",
      cta_href: "/research/",
      cards: [
        {
          title: "拓扑相图自动化管线",
          description: "面向参数海量扫描，自动生成相边界、误差区间和复现实验记录。",
          metric: "12,480 参数点",
          tags: ["Topology", "Automation", "Reproducibility"],
          href: "/projects/"
        },
        {
          title: "Kubo 输运基准套件",
          description: "统一比较不同求解器和截断策略在输运响应计算中的稳定性与耗时。",
          metric: "误差下降 41%",
          tags: ["Kubo", "Benchmark", "HPC"],
          href: "/publications/"
        },
        {
          title: "Tensor Network 误差预算",
          description: "将截断误差、迭代误差和有限尺寸误差纳入自动报告，支持版本追踪。",
          metric: "复现率 95.8%",
          tags: ["Tensor Network", "DMRG", "Error Budget"],
          href: "/research/"
        },
        {
          title: "Paper-to-Code 快速转译",
          description: "从论文模型到最小可运行算例的结构化流程，缩短验证周期。",
          metric: "周均 3 篇",
          tags: ["Methodology", "Workflow", "Codegen"],
          href: "/about/"
        }
      ]
    },
    en: {
      section_title: "Featured Research Modules",
      section_subtitle: "A skill-market-inspired card layout for high-value research tasks and reusable computational stacks.",
      cta_text: "View All Research Tracks",
      cta_href: "/en/research/",
      cards: [
        {
          title: "Topological Phase Mapping Pipeline",
          description: "Automates dense parameter scans with phase boundaries, uncertainty bands, and reproducibility snapshots.",
          metric: "12,480 grid points",
          tags: ["Topology", "Automation", "Reproducibility"],
          href: "/en/projects/"
        },
        {
          title: "Kubo Transport Benchmark Suite",
          description: "Compares solvers and truncation strategies for transport response accuracy and runtime stability.",
          metric: "41% error reduction",
          tags: ["Kubo", "Benchmark", "HPC"],
          href: "/en/publications/"
        },
        {
          title: "Tensor-Network Error Budget",
          description: "Tracks truncation, iteration, and finite-size errors in an auto-generated versioned report.",
          metric: "95.8% reproducibility",
          tags: ["Tensor Network", "DMRG", "Error Budget"],
          href: "/en/research/"
        },
        {
          title: "Paper-to-Code Accelerator",
          description: "Structured path from model reading to minimal executable experiments for rapid verification.",
          metric: "3 papers/week",
          tags: ["Methodology", "Workflow", "Codegen"],
          href: "/en/about/"
        }
      ]
    }
  };

  const getPath = () => window.location.pathname.replace(/index\.html$/, "");
  const getLocale = () => (getPath().startsWith("/en") ? "en" : "zh");
  const createRuntime = () => ({ rafId: 0, cleanupHandlers: [], particles: [] });

  const isHomePage = () => {
    const path = getPath();
    return path === "/" || path === "" || path === "/en" || path === "/en/";
  };

  const escapeHtml = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const cleanup = () => {
    const oldHero = document.getElementById(HERO_ID);
    if (oldHero) oldHero.remove();
    const oldDashboard = document.getElementById(DASHBOARD_ID);
    if (oldDashboard) oldDashboard.remove();
    const oldShowcase = document.getElementById(SHOWCASE_ID);
    if (oldShowcase) oldShowcase.remove();
    const runtime = window[RUNTIME_KEY];
    if (runtime?.rafId) cancelAnimationFrame(runtime.rafId);
    runtime?.cleanupHandlers?.forEach((dispose) => {
      try {
        dispose();
      } catch {}
    });
    window[RUNTIME_KEY] = null;
  };

  const collectMetrics = (locale) => {
    const cards = Array.from(document.querySelectorAll("#aside-content .site-data a .length-num"));
    const labels = localeCopy[locale].metric_labels;
    if (cards.length >= 3) {
      return [
        { label: labels[0], value: cards[0].textContent.trim() || "00" },
        { label: labels[1], value: cards[1].textContent.trim() || "00" },
        { label: labels[2], value: cards[2].textContent.trim() || "00" },
        { label: labels[3], value: "96.4%" }
      ];
    }
    return localeCopy[locale].fallbackMetrics;
  };

  const createHero = (locale) => {
    const copy = localeCopy[locale];
    const metrics = collectMetrics(locale);
    const chips = copy.chips.map((chip) => `<span class="lab-chip">${escapeHtml(chip)}</span>`).join("");
    const metricCards = metrics
      .map(
        (item) => `
      <div class="lab-metric-card">
        <div class="lab-metric-label">${escapeHtml(item.label)}</div>
        <div class="lab-metric-value">${escapeHtml(item.value)}</div>
      </div>`
      )
      .join("");
    const actions = copy.actions
      .map((action) => `<a class="lab-cta" href="${escapeHtml(action.href)}">${escapeHtml(action.text)}</a>`)
      .join("");

    const hero = document.createElement("section");
    hero.id = HERO_ID;
    hero.className = "lab-hero";
    hero.setAttribute("data-locale", locale);
    hero.innerHTML = `
      <div class="lab-hero-grid"></div>
      <canvas id="${CANVAS_ID}" class="lab-canvas" aria-hidden="true"></canvas>
      <div class="lab-hero-head">
        <span class="lab-badge">${escapeHtml(copy.badge)}</span>
        <h2 class="lab-title">
          <span>${escapeHtml(copy.title_prefix)}</span>
          <span class="lab-title-accent">${escapeHtml(copy.title_accent)}</span>
        </h2>
        <p class="lab-subtitle">${escapeHtml(copy.subtitle)}</p>
        <form class="lab-command-search" data-role="lab-command-search" autocomplete="off">
          <input class="lab-command-input" type="text" placeholder="${escapeHtml(copy.search_placeholder)}" />
          <button class="lab-command-btn" type="submit">${escapeHtml(copy.search_button)}</button>
        </form>
        <p class="lab-command-hint">${escapeHtml(copy.search_hint)}</p>
        <div class="lab-chip-row">${chips}</div>
        <div class="lab-metrics">${metricCards}</div>
        <div class="lab-actions">${actions}</div>
      </div>
    `;
    return hero;
  };

  const toList = (value, fallback) => (Array.isArray(value) && value.length ? value : fallback);
  const toText = (value, fallback) => (typeof value === "string" && value.trim() ? value.trim() : fallback);
  const toHref = (value, fallback) => {
    if (typeof value !== "string" || !value.trim()) return fallback;
    const href = value.trim();
    if (href.startsWith("/") || href.startsWith("http://") || href.startsWith("https://")) return href;
    return fallback;
  };

  const normalizeDashboard = (payload) => ({
    console_title: toText(payload?.console_title, defaultDashboard.console_title),
    status_bar: toList(payload?.status_bar, defaultDashboard.status_bar),
    timeline: toList(payload?.timeline, defaultDashboard.timeline),
    terminal_tasks: toList(payload?.terminal_tasks, defaultDashboard.terminal_tasks),
    system_logs: toList(payload?.system_logs, defaultDashboard.system_logs)
  });

  const loadDashboard = async () => {
    try {
      const response = await fetch(`/lab-dashboard.json?t=${Date.now()}`, {
        method: "GET",
        cache: "no-store"
      });
      if (!response.ok) return defaultDashboard;
      const payload = await response.json();
      return normalizeDashboard(payload);
    } catch {
      return defaultDashboard;
    }
  };

  const normalizeShowcaseLocale = (value, fallback) => {
    const sourceCards = Array.isArray(value?.cards) && value.cards.length ? value.cards : fallback.cards;
    return {
      section_title: toText(value?.section_title, fallback.section_title),
      section_subtitle: toText(value?.section_subtitle, fallback.section_subtitle),
      cta_text: toText(value?.cta_text, fallback.cta_text),
      cta_href: toHref(value?.cta_href, fallback.cta_href),
      cards: sourceCards.map((card, index) => ({
        title: toText(card?.title, fallback.cards[index % fallback.cards.length].title),
        description: toText(card?.description, fallback.cards[index % fallback.cards.length].description),
        metric: toText(card?.metric, fallback.cards[index % fallback.cards.length].metric),
        tags: toList(card?.tags, fallback.cards[index % fallback.cards.length].tags)
          .map((item) => toText(item, "Tag"))
          .slice(0, 4),
        href: toHref(card?.href, fallback.cards[index % fallback.cards.length].href)
      }))
    };
  };

  const normalizeShowcase = (payload) => ({
    zh: normalizeShowcaseLocale(payload?.zh, defaultShowcase.zh),
    en: normalizeShowcaseLocale(payload?.en, defaultShowcase.en)
  });

  const loadShowcase = async () => {
    try {
      const response = await fetch(`/lab-showcase.json?t=${Date.now()}`, {
        method: "GET",
        cache: "no-store"
      });
      if (!response.ok) return defaultShowcase;
      const payload = await response.json();
      return normalizeShowcase(payload);
    } catch {
      return defaultShowcase;
    }
  };

  const createStatusItems = (items) =>
    items
      .map((item) => {
        const tone = toText(item.tone, "ok");
        return `
<div class="lab-status-item tone-${tone}">
  <div class="lab-status-key">${escapeHtml(toText(item.label, "STATUS"))}</div>
  <div class="lab-status-value">${escapeHtml(toText(item.value, "--"))}</div>
</div>`.trim();
      })
      .join("");

  const createTimeline = (items) =>
    items
      .map(
        (item) => `
<div class="lab-timeline-item">
  <div class="lab-timeline-main">${escapeHtml(toText(item.event, "Event"))}</div>
  <div class="lab-timeline-meta">${escapeHtml(toText(item.phase, "TBD"))} · ${escapeHtml(toText(item.status, "Pending"))}</div>
</div>`.trim()
      )
      .join("");

  const createTerminal = (items) =>
    items
      .map((item) => {
        const status = toText(item.status, "queue").toLowerCase();
        const statusText = status.toUpperCase();
        return `
<div class="lab-terminal-line">
  <span class="lab-terminal-prompt">$</span> ${escapeHtml(toText(item.cmd, "task --pending"))}
  <span class="lab-terminal-status ${status}">${statusText}</span>
</div>`.trim();
      })
      .join("");

  const levelClass = (level) => {
    const value = String(level || "INFO").toUpperCase();
    if (value === "WARN") return "warn";
    if (value === "ERROR") return "err";
    return "";
  };

  const createLogs = (items) =>
    items
      .map((item) => {
        const level = toText(item.level, "INFO").toUpperCase();
        const cls = levelClass(level);
        return `
<li class="lab-log-item">
  <span class="lab-log-time">${escapeHtml(toText(item.time, "--:--:--"))}</span>
  <span class="lab-log-level ${cls}">${level}</span>
  <span class="lab-log-text">${escapeHtml(toText(item.message, "..."))}</span>
</li>`.trim();
      })
      .join("");

  const createDashboard = (dashboard, locale) => {
    const copy = localeCopy[locale];
    const section = document.createElement("section");
    section.id = DASHBOARD_ID;
    section.className = "lab-dashboard";
    section.innerHTML = `
      <div class="lab-status-bar">${createStatusItems(dashboard.status_bar)}</div>
      <div class="lab-dashboard-grid">
        <div class="lab-panel">
          <h3 class="lab-panel-title">${escapeHtml(dashboard.console_title)}</h3>
          ${createTimeline(dashboard.timeline)}
        </div>
        <div class="lab-panel">
          <h3 class="lab-panel-title">${escapeHtml(copy.dashboard_task_title)}</h3>
          ${createTerminal(dashboard.terminal_tasks)}
        </div>
      </div>
      <div class="lab-panel" style="margin-top: 0.62rem;">
        <h3 class="lab-panel-title">${escapeHtml(copy.dashboard_logs_title)}</h3>
        <ul class="lab-log-list">${createLogs(dashboard.system_logs)}</ul>
      </div>
    `;
    return section;
  };

  const createShowcase = (data) => {
    const cards = data.cards
      .map((card, index) => {
        const delay = (0.45 + (index % 5) * 0.66).toFixed(2);
        const duration = (4.8 + (index % 4) * 1.3).toFixed(2);
        const delay2 = (Number(delay) + 1.15).toFixed(2);
        const duration2 = (Number(duration) + 1.75).toFixed(2);
        const tags = card.tags.map((tag) => `<span class="lab-skill-tag">${escapeHtml(tag)}</span>`).join("");
        return `
  <article class="lab-skill-card" style="--meteor-delay:${delay}s;--meteor-duration:${duration}s;--meteor-delay-2:${delay2}s;--meteor-duration-2:${duration2}s;">
    <a class="lab-skill-inner" href="${escapeHtml(card.href)}">
      <div class="lab-skill-head">
        <h4 class="lab-skill-title">${escapeHtml(card.title)}</h4>
        <span class="lab-skill-arrow" aria-hidden="true">→</span>
      </div>
      <p class="lab-skill-description">${escapeHtml(card.description)}</p>
      <div class="lab-skill-footer">
        <span class="lab-skill-metric">${escapeHtml(card.metric)}</span>
        <div class="lab-skill-tags">${tags}</div>
      </div>
    </a>
  </article>`.trim();
      })
      .join("");

    const section = document.createElement("section");
    section.id = SHOWCASE_ID;
    section.className = "lab-showcase";
    section.innerHTML = `
      <div class="lab-showcase-head">
        <h3 class="lab-showcase-title"><span class="lab-showcase-icon">✦</span>${escapeHtml(data.section_title)}</h3>
        <a class="lab-showcase-link" href="${escapeHtml(data.cta_href)}">
          <span>${escapeHtml(data.cta_text)}</span>
          <span class="lab-showcase-link-arrow" aria-hidden="true">→</span>
        </a>
      </div>
      <p class="lab-showcase-subtitle">${escapeHtml(data.section_subtitle)}</p>
      <div class="lab-skill-grid">${cards}</div>
    `;
    return section;
  };

  const triggerLocalSearch = (keyword) => {
    const trigger = document.querySelector("#search-button > .search");
    if (!trigger) return;
    trigger.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));

    const writeKeyword = (retry = 14) => {
      const input = document.querySelector(".local-search-input input");
      if (!input) {
        if (retry > 0) setTimeout(() => writeKeyword(retry - 1), 70);
        return;
      }
      input.focus();
      input.value = keyword;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    };

    setTimeout(() => writeKeyword(), 40);
  };

  const bindHeroSearch = (hero, runtime) => {
    const form = hero.querySelector("[data-role='lab-command-search']");
    const input = hero.querySelector(".lab-command-input");
    if (!form || !input) return;

    const onSubmit = (event) => {
      event.preventDefault();
      triggerLocalSearch(input.value.trim());
    };
    form.addEventListener("submit", onSubmit);
    runtime.cleanupHandlers.push(() => form.removeEventListener("submit", onSubmit));
  };

  const startCanvas = (runtime) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = document.getElementById(CANVAS_ID);
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const hero = canvas.closest(".lab-hero");
    if (!hero) return;

    const particleCount = window.innerWidth > 900 ? 32 : 16;

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * window.devicePixelRatio));
      canvas.height = Math.max(1, Math.floor(rect.height * window.devicePixelRatio));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const randomParticle = (width, height) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.18,
      r: 1 + Math.random() * 1.6
    });

    resize();
    const width = parseFloat(canvas.style.width) || hero.clientWidth;
    const height = parseFloat(canvas.style.height) || hero.clientHeight;
    runtime.particles = Array.from({ length: particleCount }, () => randomParticle(width, height));

    const draw = () => {
      const drawWidth = parseFloat(canvas.style.width) || hero.clientWidth;
      const drawHeight = parseFloat(canvas.style.height) || hero.clientHeight;
      context.clearRect(0, 0, drawWidth, drawHeight);

      context.fillStyle = "rgba(120, 248, 255, 0.8)";
      runtime.particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > drawWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > drawHeight) particle.vy *= -1;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();
      });

      context.strokeStyle = "rgba(108, 255, 184, 0.2)";
      for (let index = 0; index < runtime.particles.length; index += 1) {
        const current = runtime.particles[index];
        const next = runtime.particles[(index + 7) % runtime.particles.length];
        context.beginPath();
        context.moveTo(current.x, current.y);
        context.lineTo(next.x, next.y);
        context.stroke();
      }

      runtime.rafId = requestAnimationFrame(draw);
    };

    const onResize = () => resize();
    window.addEventListener("resize", onResize, { passive: true });
    runtime.cleanupHandlers.push(() => window.removeEventListener("resize", onResize));
    draw();
  };

  const insertIntoHome = (hero, dashboardSection, showcaseSection) => {
    const posts = document.getElementById("recent-posts");
    const postsItems = posts?.querySelector(".recent-post-items");
    if (posts && postsItems) {
      posts.insertBefore(hero, postsItems);
      posts.insertBefore(dashboardSection, postsItems);
      posts.insertBefore(showcaseSection, postsItems);
      return true;
    }

    const container =
      document.querySelector("#page #article-container") || document.querySelector("#page .container") || document.getElementById("page");
    if (!container) return false;
    const fragment = document.createDocumentFragment();
    fragment.append(hero, dashboardSection, showcaseSection);
    container.prepend(fragment);
    return true;
  };

  const mount = async () => {
    cleanup();
    if (!isHomePage()) return;
    const locale = getLocale();
    const runtime = createRuntime();
    window[RUNTIME_KEY] = runtime;

    const [dashboard, showcaseRaw] = await Promise.all([loadDashboard(), loadShowcase()]);
    const showcaseData = showcaseRaw[locale] || defaultShowcase[locale];
    const hero = createHero(locale);
    const dashboardSection = createDashboard(dashboard, locale);
    const showcaseSection = createShowcase(showcaseData);
    const inserted = insertIntoHome(hero, dashboardSection, showcaseSection);

    if (!inserted) {
      cleanup();
      return;
    }
    bindHeroSearch(hero, runtime);
    startCanvas(runtime);
  };

  document.addEventListener("DOMContentLoaded", mount);
  document.addEventListener("pjax:complete", mount);
  document.addEventListener("pjax:send", cleanup);
})();
