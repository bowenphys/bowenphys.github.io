(() => {
  const MAINFRAME_ID = "lab-tech-mainframe";
  const SECTORS_ID = "lab-tech-sectors";
  const LIVEFEED_ID = "lab-tech-livefeed";
  const CANVAS_ID = "lab-tech-canvas";
  const RUNTIME_KEY = "__labTechRuntime";
  const PAGE_CONSOLE_CLASS = "lab-page-console";
  const defaultWorld = {
    zh: {
      badge: "CONDENSED MATTER CONTROL SYSTEM // ONLINE",
      title_prefix: "Condensed Matter",
      title_accent: "Control System",
      identity: "宁波东方理工大学 × 中国科学技术大学 联合培养博士研究生",
      lead: "把模型、数值实验、误差预算与复现实验记录整合到同一套科研操作系统中，持续追踪凝聚态计算理论的演化过程。",
      emphasis: "当前主轴：拓扑量子态、第一性原理计算、量子输运与量子计算",
      command_placeholder: "输入关键词：topological SC / Kubo / DMRG / phase atlas",
      command_button: "启动检索",
      command_hint: "接入站内全文检索，可直达日志、论文、项目与标签。",
      actions: [
        { text: "研究地图", href: "/research/" },
        { text: "论文列表", href: "/publications/" },
        { text: "项目仓库", href: "/projects/" },
        { text: "学术 dossier", href: "/cv/" }
      ],
      tags: ["Topology", "Transport", "Tensor Network", "HPC Workflow", "Error Budget"],
      ticker: [
        "PHASE-ATLAS // RUNNING",
        "KUBO-BENCH // STABLE",
        "TN-GATE // VALIDATING",
        "PAPER-TO-CODE // ACTIVE",
        "REPRODUCIBILITY // 96.8%"
      ],
      side_title: "Research Kernel",
      side_copy: "身份信息保留真实，其余控制台指标与项目编号为占位叙事，用于建立统一的科研可视化语法。",
      stack_title: "Method Stack",
      stack: [
        "Low-energy theory / effective model reduction",
        "Sparse eigensolver / tensor-network numerics",
        "Transport response / Kubo benchmark protocol",
        "Versioned workflow / auto-report / reproducibility checksum"
      ],
      manifesto_title: "System Manifesto",
      manifesto: "问题定义、参数记录、误差来源和结果回放必须处在同一个版本化闭环中。站点不是简历页，而是科研过程本身的监控台。",
      metrics_title: "Live Metrics",
      sectors_kicker: "RESEARCH SECTORS",
      sectors_title: "四条主线并行推进",
      sectors_subtitle: "首页模块卡与研究页面锚点一一对应，既能快速浏览当前科研版图，也能下钻到方法细节与日志。",
      sector_nodes: [
        { name: "Phase Atlas", note: "相图扫描与边界提取" },
        { name: "Transport Bus", note: "输运响应与基准协议" },
        { name: "Tensor Stack", note: "张量网络与误差门控" },
        { name: "Method Forge", note: "paper-to-code 与复现模板" }
      ],
      sectors_cta: "进入研究地图",
      livefeed_kicker: "LIVE FEED",
      livefeed_title: "中枢总线与任务流",
      livefeed_subtitle: "把 timeline、terminal、system logs 与参数面板组合成可读的科研控制室，而不是简单的文章列表前缀。",
      timeline_title: "Milestone Bus",
      terminal_title: "Task Terminal",
      logs_title: "System Logs",
      equations_title: "Protocol Snapshot",
      equation_lines: [
        "H(k)=H_0(k)+\\Delta(k)\\tau_x+V_z\\sigma_z",
        "\\sigma_{xy}(\\omega)\\leftarrow \\mathrm{Tr}[v_x G^R v_y G^A]",
        "\\epsilon_{tot}=\\epsilon_{trunc}+\\epsilon_{iter}+\\epsilon_{L}"
      ],
      note_lines: [
        "目标不是堆叠炫技元素，而是把科研信息密度做成可导航结构。",
        "首页负责建立控制台入口，栏目页负责沉淀长期方法学与项目细节。"
      ]
    },
    en: {
      badge: "CONDENSED MATTER CONTROL SYSTEM // ONLINE",
      title_prefix: "Condensed Matter",
      title_accent: "Control System",
      identity: "PhD student in Physics, joint program between Eastern Institute of Technology, Ningbo and USTC",
      lead: "A research operating system for model building, numerics, error budgeting, and reproducibility in condensed matter computational theory.",
      emphasis: "Current axes: topological quantum states, first-principles calculations, quantum transport, and quantum computing",
      command_placeholder: "Search: topological SC / Kubo / DMRG / phase atlas",
      command_button: "Launch Search",
      command_hint: "Hooks into local full-text search for notes, publications, projects, and tags.",
      actions: [
        { text: "Research Map", href: "/en/research/" },
        { text: "Publications", href: "/en/publications/" },
        { text: "Project Vault", href: "/en/projects/" },
        { text: "Academic Dossier", href: "/en/cv/" }
      ],
      tags: ["Topology", "Transport", "Tensor Network", "HPC Workflow", "Error Budget"],
      ticker: [
        "PHASE-ATLAS // RUNNING",
        "KUBO-BENCH // STABLE",
        "TN-GATE // VALIDATING",
        "PAPER-TO-CODE // ACTIVE",
        "REPRODUCIBILITY // 96.8%"
      ],
      side_title: "Research Kernel",
      side_copy: "Identity and affiliation remain real; operational metrics and system labels are structured placeholders for future replacement.",
      stack_title: "Method Stack",
      stack: [
        "Low-energy theory / effective model reduction",
        "Sparse eigensolver / tensor-network numerics",
        "Transport response / Kubo benchmark protocol",
        "Versioned workflow / auto-report / reproducibility checksum"
      ],
      manifesto_title: "System Manifesto",
      manifesto: "Assumptions, parameters, error sources, and replayable outputs must stay inside one versioned loop. The site is a control surface for research, not a passive profile page.",
      metrics_title: "Live Metrics",
      sectors_kicker: "RESEARCH SECTORS",
      sectors_title: "Four active research sectors",
      sectors_subtitle: "Each front-page module card maps to a stable anchor in the research map, turning the homepage into a real navigation surface.",
      sector_nodes: [
        { name: "Phase Atlas", note: "phase scans and boundary extraction" },
        { name: "Transport Bus", note: "response functions and benchmark protocol" },
        { name: "Tensor Stack", note: "tensor numerics and error gating" },
        { name: "Method Forge", note: "paper-to-code and reproducibility templates" }
      ],
      sectors_cta: "Enter Research Map",
      livefeed_kicker: "LIVE FEED",
      livefeed_title: "Bus traffic and execution panels",
      livefeed_subtitle: "Timeline, task terminal, system logs, and protocol snapshot presented as one condensed matter control room.",
      timeline_title: "Milestone Bus",
      terminal_title: "Task Terminal",
      logs_title: "System Logs",
      equations_title: "Protocol Snapshot",
      equation_lines: [
        "H(k)=H_0(k)+\\Delta(k)\\tau_x+V_z\\sigma_z",
        "\\sigma_{xy}(\\omega)\\leftarrow \\mathrm{Tr}[v_x G^R v_y G^A]",
        "\\epsilon_{tot}=\\epsilon_{trunc}+\\epsilon_{iter}+\\epsilon_{L}"
      ],
      note_lines: [
        "The goal is not visual noise; the goal is a navigable high-density research interface.",
        "The homepage is the console entry, while the section pages store long-lived methodology and project detail."
      ]
    }
  };
  const defaultDashboard = {
    console_title: "Mainframe Execution Bus",
    status_bar: [
      { label: "CORE TEMP", value: "STABLE", tone: "ok" },
      { label: "CLUSTER", value: "128/144 NODES", tone: "warn" },
      { label: "REPRO", value: "96.8%", tone: "ok" },
      { label: "PAPER QUEUE", value: "03 ACTIVE", tone: "ok" }
    ],
    timeline: [
      { phase: "2026 Q1", event: "TopoSC parameter atlas revision", status: "Done" },
      { phase: "2026 Q1", event: "Kubo transport cache layer", status: "Done" },
      { phase: "2026 Q2", event: "Tensor-network gate controller", status: "Running" },
      { phase: "2026 Q2", event: "Auto reproducibility dossier", status: "Validating" }
    ],
    terminal_tasks: [
      { cmd: "phase-atlas --mesh adaptive --checkpoint on", status: "done" },
      { cmd: "transport-bus --kernel kubo --backend cuda", status: "run" },
      { cmd: "tn-gate --budget trunc+iter+finite", status: "run" },
      { cmd: "dossier-sync --source notebooks --target reports", status: "queue" }
    ],
    system_logs: [
      { time: "22:48:05", level: "INFO", message: "Phase boundary extractor wrote atlas snapshot #31" },
      { time: "22:48:31", level: "INFO", message: "Transport cache warmed with 14 benchmark kernels" },
      { time: "22:49:07", level: "WARN", message: "One GPU node reported thermal drift during long sweep" },
      { time: "22:49:22", level: "INFO", message: "Tensor gate controller updated truncation threshold" },
      { time: "22:49:44", level: "INFO", message: "Reproducibility checksum passed for latest dossier build" }
    ]
  };
  const defaultShowcase = {
    zh: {
      section_title: "研究扇区",
      section_subtitle: "每张卡片对应一条长期研究主线：相图、输运、张量网络和方法学，不再只是装饰性推荐位。",
      cta_text: "查看全部研究扇区",
      cta_href: "/research/",
      cards: [
        {
          title: "相图控制塔 / Phase Atlas",
          description: "高维参数空间扫描、相边界自动提取、有限尺寸与收敛误差统一打包进 atlas 报告。",
          metric: "12,480 参数点",
          tags: ["Phase Atlas", "Topology", "Finite Size"],
          href: "/research/#sector-phase-atlas"
        },
        {
          title: "输运总线 / Transport Bus",
          description: "围绕 Kubo 公式构建统一 benchmark protocol，比较求解器、截断策略与缓存层收益。",
          metric: "41% 时间缩短",
          tags: ["Kubo", "Transport", "Benchmark"],
          href: "/research/#sector-transport"
        },
        {
          title: "张量栈 / Tensor Stack",
          description: "把 DMRG、截断阈值、误差预算与自动报告连接起来，形成可回放的张量实验闭环。",
          metric: "复现率 96.8%",
          tags: ["Tensor Network", "DMRG", "Error Budget"],
          href: "/research/#sector-tensor"
        },
        {
          title: "方法铸造厂 / Method Forge",
          description: "从 paper 到 minimal executable case 的标准流程，沉淀成长期可复用的方法模板与脚本骨架。",
          metric: "周均 3 次转译",
          tags: ["Methodology", "Paper-to-Code", "Workflow"],
          href: "/research/#sector-methodology"
        }
      ]
    },
    en: {
      section_title: "Research Sectors",
      section_subtitle: "Each card points to a persistent research sector: phase atlas, transport, tensor networks, and methodology.",
      cta_text: "View All Sectors",
      cta_href: "/en/research/",
      cards: [
        {
          title: "Phase Atlas",
          description: "Dense parameter scans, phase-boundary extraction, and finite-size / convergence diagnostics in one atlas report.",
          metric: "12,480 grid points",
          tags: ["Phase Atlas", "Topology", "Finite Size"],
          href: "/en/research/#sector-phase-atlas"
        },
        {
          title: "Transport Bus",
          description: "A benchmark protocol around the Kubo formula to compare solvers, truncation rules, and cache-layer gains.",
          metric: "41% faster runtime",
          tags: ["Kubo", "Transport", "Benchmark"],
          href: "/en/research/#sector-transport"
        },
        {
          title: "Tensor Stack",
          description: "DMRG routines, truncation budgets, and auto-generated reports wired into a replayable tensor experiment loop.",
          metric: "96.8% reproducibility",
          tags: ["Tensor Network", "DMRG", "Error Budget"],
          href: "/en/research/#sector-tensor"
        },
        {
          title: "Method Forge",
          description: "A repeatable paper-to-code path that turns model reading into executable cases and reusable workflow templates.",
          metric: "3 translations/week",
          tags: ["Methodology", "Paper-to-Code", "Workflow"],
          href: "/en/research/#sector-methodology"
        }
      ]
    }
  };

  const getPath = () => window.location.pathname.replace(/index\.html$/, "");
  const getLocale = () => (getPath().startsWith("/en") ? "en" : "zh");
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
  const toText = (value, fallback) => (typeof value === "string" && value.trim() ? value.trim() : fallback);
  const toList = (value, fallback) => (Array.isArray(value) && value.length ? value : fallback);
  const toHref = (value, fallback) => {
    if (typeof value !== "string" || !value.trim()) return fallback;
    const href = value.trim();
    if (href.startsWith("/") || href.startsWith("http://") || href.startsWith("https://")) return href;
    return fallback;
  };
  const createRuntime = () => ({ rafId: 0, cleanupHandlers: [], particles: [] });

  const cleanup = () => {
    document.getElementById(MAINFRAME_ID)?.remove();
    document.getElementById(SECTORS_ID)?.remove();
    document.getElementById(LIVEFEED_ID)?.remove();
    document.querySelector("#article-container")?.classList.remove(PAGE_CONSOLE_CLASS);
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
    const metricLabels =
      locale === "en"
        ? ["POSTS", "TAGS", "CATEGORIES", "REPRO RATE"]
        : ["文章", "标签", "分类", "复现率"];
    const asideValues = Array.from(document.querySelectorAll("#aside-content .site-data a .length-num")).map((item) => item.textContent.trim());
    const fallbackValues = locale === "en" ? ["24", "10", "2", "96.8%"] : ["24", "10", "2", "96.8%"];
    return metricLabels.map((label, index) => ({
      label,
      value: asideValues[index] || fallbackValues[index] || "--"
    }));
  };

  const normalizeActionList = (value, fallback) =>
    toList(value, fallback).map((item, index) => ({
      text: toText(item?.text, fallback[index % fallback.length].text),
      href: toHref(item?.href, fallback[index % fallback.length].href)
    }));

  const normalizeSectorNodes = (value, fallback) =>
    toList(value, fallback).map((item, index) => ({
      name: toText(item?.name, fallback[index % fallback.length].name),
      note: toText(item?.note, fallback[index % fallback.length].note)
    }));

  const normalizeWorldLocale = (value, fallback) => ({
    badge: toText(value?.badge, fallback.badge),
    title_prefix: toText(value?.title_prefix, fallback.title_prefix),
    title_accent: toText(value?.title_accent, fallback.title_accent),
    identity: toText(value?.identity, fallback.identity),
    lead: toText(value?.lead, fallback.lead),
    emphasis: toText(value?.emphasis, fallback.emphasis),
    command_placeholder: toText(value?.command_placeholder, fallback.command_placeholder),
    command_button: toText(value?.command_button, fallback.command_button),
    command_hint: toText(value?.command_hint, fallback.command_hint),
    actions: normalizeActionList(value?.actions, fallback.actions),
    tags: toList(value?.tags, fallback.tags).map((item) => toText(item, "Tag")),
    ticker: toList(value?.ticker, fallback.ticker).map((item) => toText(item, "ONLINE")),
    side_title: toText(value?.side_title, fallback.side_title),
    side_copy: toText(value?.side_copy, fallback.side_copy),
    stack_title: toText(value?.stack_title, fallback.stack_title),
    stack: toList(value?.stack, fallback.stack).map((item) => toText(item, "Workflow")),
    manifesto_title: toText(value?.manifesto_title, fallback.manifesto_title),
    manifesto: toText(value?.manifesto, fallback.manifesto),
    metrics_title: toText(value?.metrics_title, fallback.metrics_title),
    sectors_kicker: toText(value?.sectors_kicker, fallback.sectors_kicker),
    sectors_title: toText(value?.sectors_title, fallback.sectors_title),
    sectors_subtitle: toText(value?.sectors_subtitle, fallback.sectors_subtitle),
    sector_nodes: normalizeSectorNodes(value?.sector_nodes, fallback.sector_nodes),
    sectors_cta: toText(value?.sectors_cta, fallback.sectors_cta),
    livefeed_kicker: toText(value?.livefeed_kicker, fallback.livefeed_kicker),
    livefeed_title: toText(value?.livefeed_title, fallback.livefeed_title),
    livefeed_subtitle: toText(value?.livefeed_subtitle, fallback.livefeed_subtitle),
    timeline_title: toText(value?.timeline_title, fallback.timeline_title),
    terminal_title: toText(value?.terminal_title, fallback.terminal_title),
    logs_title: toText(value?.logs_title, fallback.logs_title),
    equations_title: toText(value?.equations_title, fallback.equations_title),
    equation_lines: toList(value?.equation_lines, fallback.equation_lines).map((item) => toText(item, "Eq")),
    note_lines: toList(value?.note_lines, fallback.note_lines).map((item) => toText(item, "Note"))
  });

  const normalizeWorld = (payload) => ({
    zh: normalizeWorldLocale(payload?.zh, defaultWorld.zh),
    en: normalizeWorldLocale(payload?.en, defaultWorld.en)
  });

  const normalizeDashboard = (payload) => ({
    console_title: toText(payload?.console_title, defaultDashboard.console_title),
    status_bar: toList(payload?.status_bar, defaultDashboard.status_bar),
    timeline: toList(payload?.timeline, defaultDashboard.timeline),
    terminal_tasks: toList(payload?.terminal_tasks, defaultDashboard.terminal_tasks),
    system_logs: toList(payload?.system_logs, defaultDashboard.system_logs)
  });

  const normalizeShowcaseLocale = (value, fallback) => {
    const cards = toList(value?.cards, fallback.cards).map((item, index) => ({
      title: toText(item?.title, fallback.cards[index % fallback.cards.length].title),
      description: toText(item?.description, fallback.cards[index % fallback.cards.length].description),
      metric: toText(item?.metric, fallback.cards[index % fallback.cards.length].metric),
      tags: toList(item?.tags, fallback.cards[index % fallback.cards.length].tags).map((tag) => toText(tag, "Tag")).slice(0, 4),
      href: toHref(item?.href, fallback.cards[index % fallback.cards.length].href)
    }));
    return {
      section_title: toText(value?.section_title, fallback.section_title),
      section_subtitle: toText(value?.section_subtitle, fallback.section_subtitle),
      cta_text: toText(value?.cta_text, fallback.cta_text),
      cta_href: toHref(value?.cta_href, fallback.cta_href),
      cards
    };
  };

  const normalizeShowcase = (payload) => ({
    zh: normalizeShowcaseLocale(payload?.zh, defaultShowcase.zh),
    en: normalizeShowcaseLocale(payload?.en, defaultShowcase.en)
  });

  const loadJson = async (url, fallback, normalizer) => {
    try {
      const response = await fetch(`${url}?t=${Date.now()}`, { method: "GET", cache: "no-store" });
      if (!response.ok) return fallback;
      const payload = await response.json();
      return normalizer(payload);
    } catch {
      return fallback;
    }
  };

  const loadWorld = () => loadJson("/lab-world.json", defaultWorld, normalizeWorld);
  const loadDashboard = () => loadJson("/lab-dashboard.json", defaultDashboard, normalizeDashboard);
  const loadShowcase = () => loadJson("/lab-showcase.json", defaultShowcase, normalizeShowcase);

  const createMainframe = (locale, world) => {
    const metrics = collectMetrics(locale)
      .map(
        (metric) => `
          <div class="lab-kpi-card">
            <div class="lab-kpi-label">${escapeHtml(metric.label)}</div>
            <div class="lab-kpi-value">${escapeHtml(metric.value)}</div>
          </div>`
      )
      .join("");
    const tags = world.tags.map((tag) => `<span class="lab-mainframe-tag">${escapeHtml(tag)}</span>`).join("");
    const actions = world.actions
      .map(
        (action, index) =>
          `<a class="lab-mainframe-button ${index === 0 ? "is-primary" : ""}" href="${escapeHtml(action.href)}">${escapeHtml(action.text)}</a>`
      )
      .join("");
    const ticker = [...world.ticker, ...world.ticker].map((item) => `<span class="lab-ticker-item">${escapeHtml(item)}</span>`).join("");
    const stack = world.stack.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

    const section = document.createElement("section");
    section.id = MAINFRAME_ID;
    section.className = "lab-mainframe";
    section.innerHTML = `
      <div class="lab-mainframe-grid"></div>
      <canvas id="${CANVAS_ID}" class="lab-mainframe-canvas" aria-hidden="true"></canvas>
      <div class="lab-mainframe-shell">
        <div class="lab-mainframe-copy">
          <span class="lab-frame-badge">${escapeHtml(world.badge)}</span>
          <div class="lab-identity-line">${escapeHtml(world.identity)}</div>
          <h1 class="lab-mainframe-title">
            <span>${escapeHtml(world.title_prefix)}</span>
            <span class="lab-mainframe-accent">${escapeHtml(world.title_accent)}</span>
          </h1>
          <p class="lab-mainframe-lead">${escapeHtml(world.lead)}</p>
          <p class="lab-mainframe-emphasis">${escapeHtml(world.emphasis)}</p>
          <div class="lab-mainframe-tags">${tags}</div>
          <form class="lab-command-search" data-role="lab-command-search" autocomplete="off">
            <input class="lab-command-input" type="text" placeholder="${escapeHtml(world.command_placeholder)}" />
            <button class="lab-command-btn" type="submit">${escapeHtml(world.command_button)}</button>
          </form>
          <p class="lab-command-hint">${escapeHtml(world.command_hint)}</p>
          <div class="lab-mainframe-actions">${actions}</div>
          <div class="lab-ticker" aria-hidden="true">
            <div class="lab-ticker-track">${ticker}</div>
          </div>
        </div>
        <div class="lab-mainframe-side">
          <div class="lab-orbit-panel">
            <div class="lab-orbit-core">
              <span class="lab-orbit-core-label">${escapeHtml(world.side_title)}</span>
              <strong>CMCS</strong>
            </div>
            <p class="lab-orbit-copy">${escapeHtml(world.side_copy)}</p>
          </div>
          <div class="lab-side-panel">
            <div class="lab-side-panel-head">
              <span>${escapeHtml(world.metrics_title)}</span>
              <span class="lab-dot"></span>
            </div>
            <div class="lab-kpi-grid">${metrics}</div>
          </div>
          <div class="lab-side-panel">
            <div class="lab-side-panel-head">
              <span>${escapeHtml(world.stack_title)}</span>
              <span class="lab-side-code">stack.v3</span>
            </div>
            <ul class="lab-stack-list">${stack}</ul>
          </div>
          <div class="lab-side-panel is-manifesto">
            <div class="lab-side-panel-head">
              <span>${escapeHtml(world.manifesto_title)}</span>
              <span class="lab-side-code">manifesto</span>
            </div>
            <p>${escapeHtml(world.manifesto)}</p>
          </div>
        </div>
      </div>
    `;
    return section;
  };

  const createSectorNodes = (items) =>
    items
      .map(
        (item) => `
          <div class="lab-sector-node">
            <div class="lab-sector-node-name">${escapeHtml(item.name)}</div>
            <div class="lab-sector-node-note">${escapeHtml(item.note)}</div>
          </div>`
      )
      .join("");

  const createSectors = (world, showcase) => {
    const cards = showcase.cards
      .map((card, index) => {
        const tags = card.tags.map((tag) => `<span class="lab-skill-tag">${escapeHtml(tag)}</span>`).join("");
        return `
          <article class="lab-skill-card lab-sector-card" data-sector-index="${index + 1}">
            <a class="lab-skill-inner" href="${escapeHtml(card.href)}">
              <div class="lab-sector-card-topline">SECTOR 0${index + 1}</div>
              <div class="lab-skill-head">
                <h3 class="lab-skill-title">${escapeHtml(card.title)}</h3>
                <span class="lab-skill-arrow" aria-hidden="true">→</span>
              </div>
              <p class="lab-skill-description">${escapeHtml(card.description)}</p>
              <div class="lab-skill-footer">
                <span class="lab-skill-metric">${escapeHtml(card.metric)}</span>
                <div class="lab-skill-tags">${tags}</div>
              </div>
            </a>
          </article>`;
      })
      .join("");

    const section = document.createElement("section");
    section.id = SECTORS_ID;
    section.className = "lab-sectors";
    section.innerHTML = `
      <div class="lab-section-heading">
        <div>
          <div class="lab-section-kicker">${escapeHtml(world.sectors_kicker)}</div>
          <h2 class="lab-section-title">${escapeHtml(showcase.section_title || world.sectors_title)}</h2>
          <p class="lab-section-subtitle">${escapeHtml(showcase.section_subtitle || world.sectors_subtitle)}</p>
        </div>
        <a class="lab-section-link" href="${escapeHtml(showcase.cta_href)}">
          <span>${escapeHtml(showcase.cta_text || world.sectors_cta)}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <div class="lab-sector-ribbon">${createSectorNodes(world.sector_nodes)}</div>
      <div class="lab-skill-grid lab-sector-grid">${cards}</div>
    `;
    return section;
  };

  const createStatusItems = (items) =>
    items
      .map((item) => {
        const tone = toText(item?.tone, "ok");
        return `
          <div class="lab-status-item tone-${tone}">
            <div class="lab-status-key">${escapeHtml(toText(item?.label, "STATUS"))}</div>
            <div class="lab-status-value">${escapeHtml(toText(item?.value, "--"))}</div>
          </div>`;
      })
      .join("");

  const createTimeline = (items) =>
    items
      .map(
        (item) => `
          <div class="lab-timeline-item">
            <div class="lab-timeline-main">${escapeHtml(toText(item?.event, "Event"))}</div>
            <div class="lab-timeline-meta">${escapeHtml(toText(item?.phase, "TBD"))} · ${escapeHtml(toText(item?.status, "Pending"))}</div>
          </div>`
      )
      .join("");

  const createTerminal = (items) =>
    items
      .map((item) => {
        const status = toText(item?.status, "queue").toLowerCase();
        return `
          <div class="lab-terminal-line">
            <span class="lab-terminal-prompt">$</span> ${escapeHtml(toText(item?.cmd, "task --pending"))}
            <span class="lab-terminal-status ${status}">${escapeHtml(status.toUpperCase())}</span>
          </div>`;
      })
      .join("");

  const levelClass = (level) => {
    const normalized = String(level || "INFO").toUpperCase();
    if (normalized === "WARN") return "warn";
    if (normalized === "ERROR") return "err";
    return "";
  };

  const createLogs = (items) =>
    items
      .map((item) => {
        const level = toText(item?.level, "INFO").toUpperCase();
        return `
          <li class="lab-log-item">
            <span class="lab-log-time">${escapeHtml(toText(item?.time, "--:--:--"))}</span>
            <span class="lab-log-level ${levelClass(level)}">${escapeHtml(level)}</span>
            <span class="lab-log-text">${escapeHtml(toText(item?.message, "..."))}</span>
          </li>`;
      })
      .join("");

  const createProtocolPanel = (world) => {
    const equations = world.equation_lines.map((item) => `<code>${escapeHtml(item)}</code>`).join("");
    const notes = world.note_lines.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    return `
      <article class="lab-feed-panel is-protocol">
        <div class="lab-feed-panel-head">
          <h3 class="lab-feed-panel-title">${escapeHtml(world.equations_title)}</h3>
          <span class="lab-side-code">protocol</span>
        </div>
        <div class="lab-equation-list">${equations}</div>
        <ul class="lab-note-list">${notes}</ul>
      </article>`;
  };

  const createLivefeed = (world, dashboard) => {
    const section = document.createElement("section");
    section.id = LIVEFEED_ID;
    section.className = "lab-livefeed";
    section.innerHTML = `
      <div class="lab-section-heading">
        <div>
          <div class="lab-section-kicker">${escapeHtml(world.livefeed_kicker)}</div>
          <h2 class="lab-section-title">${escapeHtml(world.livefeed_title)}</h2>
          <p class="lab-section-subtitle">${escapeHtml(world.livefeed_subtitle)}</p>
        </div>
        <div class="lab-livefeed-chip">${escapeHtml(dashboard.console_title)}</div>
      </div>
      <div class="lab-status-bar">${createStatusItems(dashboard.status_bar)}</div>
      <div class="lab-feed-grid">
        <article class="lab-feed-panel">
          <div class="lab-feed-panel-head">
            <h3 class="lab-feed-panel-title">${escapeHtml(world.timeline_title)}</h3>
            <span class="lab-side-code">timeline</span>
          </div>
          ${createTimeline(dashboard.timeline)}
        </article>
        <article class="lab-feed-panel">
          <div class="lab-feed-panel-head">
            <h3 class="lab-feed-panel-title">${escapeHtml(world.terminal_title)}</h3>
            <span class="lab-side-code">terminal</span>
          </div>
          ${createTerminal(dashboard.terminal_tasks)}
        </article>
        <article class="lab-feed-panel is-logs">
          <div class="lab-feed-panel-head">
            <h3 class="lab-feed-panel-title">${escapeHtml(world.logs_title)}</h3>
            <span class="lab-side-code">logs</span>
          </div>
          <ul class="lab-log-list">${createLogs(dashboard.system_logs)}</ul>
        </article>
        ${createProtocolPanel(world)}
      </div>
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

  const bindCommandSearch = (root, runtime) => {
    const form = root.querySelector("[data-role='lab-command-search']");
    const input = root.querySelector(".lab-command-input");
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
    const mainframe = canvas.closest(".lab-mainframe");
    const context = canvas.getContext("2d");
    if (!mainframe || !context) return;

    const resize = () => {
      const rect = mainframe.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * window.devicePixelRatio));
      canvas.height = Math.max(1, Math.floor(rect.height * window.devicePixelRatio));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const buildParticle = (width, height) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.18,
      r: 1 + Math.random() * 1.8
    });

    resize();
    const width = parseFloat(canvas.style.width) || mainframe.clientWidth;
    const height = parseFloat(canvas.style.height) || mainframe.clientHeight;
    const particleCount = window.innerWidth > 1100 ? 36 : 18;
    runtime.particles = Array.from({ length: particleCount }, () => buildParticle(width, height));

    const draw = () => {
      const drawWidth = parseFloat(canvas.style.width) || mainframe.clientWidth;
      const drawHeight = parseFloat(canvas.style.height) || mainframe.clientHeight;
      context.clearRect(0, 0, drawWidth, drawHeight);
      context.fillStyle = "rgba(126, 239, 255, 0.82)";

      runtime.particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > drawWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > drawHeight) particle.vy *= -1;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();
        if (index % 4 === 0) {
          context.beginPath();
          context.strokeStyle = "rgba(111, 255, 201, 0.14)";
          context.moveTo(particle.x, particle.y);
          context.lineTo(particle.x + 30, particle.y + 18);
          context.stroke();
        }
      });

      for (let index = 0; index < runtime.particles.length; index += 1) {
        const current = runtime.particles[index];
        const next = runtime.particles[(index + 9) % runtime.particles.length];
        context.beginPath();
        context.strokeStyle = "rgba(95, 173, 255, 0.12)";
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

  const insertIntoHome = (sections) => {
    const locale = getLocale();
    const recentPosts = document.getElementById("recent-posts");
    const recentPostItems = recentPosts?.querySelector(".recent-post-items");
    if (locale === "zh" && recentPosts && recentPostItems) {
      sections.forEach((section) => recentPosts.insertBefore(section, recentPostItems));
      return true;
    }

    const articleContainer = document.querySelector("#page #article-container");
    if (articleContainer) {
      articleContainer.classList.add(PAGE_CONSOLE_CLASS);
      const fragment = document.createDocumentFragment();
      sections.forEach((section) => fragment.appendChild(section));
      articleContainer.prepend(fragment);
      return true;
    }

    const fallbackContainer = document.querySelector("#page .container") || document.getElementById("page");
    if (!fallbackContainer) return false;
    const fragment = document.createDocumentFragment();
    sections.forEach((section) => fragment.appendChild(section));
    fallbackContainer.prepend(fragment);
    return true;
  };

  const mount = async () => {
    cleanup();
    if (!isHomePage()) return;
    const runtime = createRuntime();
    window[RUNTIME_KEY] = runtime;
    const locale = getLocale();
    const [worldPayload, dashboardPayload, showcasePayload] = await Promise.all([loadWorld(), loadDashboard(), loadShowcase()]);
    const world = worldPayload[locale] || defaultWorld[locale];
    const showcase = showcasePayload[locale] || defaultShowcase[locale];

    const mainframe = createMainframe(locale, world);
    const sectors = createSectors(world, showcase);
    const livefeed = createLivefeed(world, dashboardPayload);
    const inserted = insertIntoHome([mainframe, sectors, livefeed]);
    if (!inserted) {
      cleanup();
      return;
    }
    bindCommandSearch(mainframe, runtime);
    startCanvas(runtime);
  };

  document.addEventListener("DOMContentLoaded", mount);
  document.addEventListener("pjax:complete", mount);
  document.addEventListener("pjax:send", cleanup);
})();
