(() => {
  const RUNTIME_KEY = "__labTechEffectsRuntime";
  const ROOT_MOBILE_CLASS = "lab-v2-mobile";
  const MOBILE_QUERY = "(max-width: 900px)";
  const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

  const addListener = (runtime, target, type, handler, options) => {
    target.addEventListener(type, handler, options);
    runtime.listeners.push(() => target.removeEventListener(type, handler, options));
  };

  const cleanup = () => {
    const runtime = window[RUNTIME_KEY];
    if (!runtime) return;
    runtime.listeners.forEach((dispose) => dispose());
    runtime.observer?.disconnect();
    runtime.bgLayer?.remove();
    runtime.beamLayer?.remove();
    runtime.cardCleanup.forEach((dispose) => dispose());
    document.documentElement.classList.remove(ROOT_MOBILE_CLASS);
    window[RUNTIME_KEY] = null;
  };

  const isMobileViewport = () => window.matchMedia(MOBILE_QUERY).matches;
  const isReducedMotion = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;

  const mountBackgroundLayers = (runtime) => {
    const existing = document.querySelector(".lab-v2-bg-layer");
    if (existing) existing.remove();
    const existingBeam = document.querySelector(".lab-v2-beam-layer");
    if (existingBeam) existingBeam.remove();

    const bgLayer = document.createElement("div");
    bgLayer.className = "lab-v2-bg-layer";
    const beamLayer = document.createElement("div");
    beamLayer.className = "lab-v2-beam-layer";
    document.body.appendChild(bgLayer);
    document.body.appendChild(beamLayer);

    runtime.bgLayer = bgLayer;
    runtime.beamLayer = beamLayer;
  };

  const bindCursorGlow = (runtime) => {
    const onMove = (event) => {
      const root = document.documentElement;
      root.style.setProperty("--lab-v2-cursor-x", `${event.clientX}px`);
      root.style.setProperty("--lab-v2-cursor-y", `${event.clientY}px`);
    };
    addListener(runtime, window, "mousemove", onMove, { passive: true });
  };

  const bindCardMagnet = (runtime) => {
    if (isMobileViewport() || isReducedMotion()) return;
    const targets = Array.from(document.querySelectorAll(".recent-post-item, .card-widget, .pub-item, .lab-skill-card"));
    targets.forEach((target) => {
      const onMove = (event) => {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (event.clientX - centerX) / Math.max(rect.width, 1);
        const deltaY = (event.clientY - centerY) / Math.max(rect.height, 1);
        target.style.transform = `translateY(-3px) rotateX(${(-deltaY * 5).toFixed(2)}deg) rotateY(${(deltaX * 6).toFixed(2)}deg)`;
      };
      const onLeave = () => {
        target.style.transform = "";
      };
      target.addEventListener("mousemove", onMove, { passive: true });
      target.addEventListener("mouseleave", onLeave, { passive: true });
      runtime.cardCleanup.push(() => {
        target.removeEventListener("mousemove", onMove);
        target.removeEventListener("mouseleave", onLeave);
        target.style.transform = "";
      });
    });
  };

  const bindReveal = (runtime, reducedMotion) => {
    const revealTargets = Array.from(
      document.querySelectorAll(".lab-hero, .lab-dashboard, .lab-showcase, .lab-skill-card, .recent-post-item, .card-widget, #article-container > *")
    );
    if (!revealTargets.length) return;

    revealTargets.forEach((item) => item.classList.remove("lab-reveal-ready", "is-visible"));

    if (reducedMotion) {
      revealTargets.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealTargets.forEach((item) => {
      item.classList.add("lab-reveal-ready");
      observer.observe(item);
    });

    runtime.observer = observer;
  };

  const mount = () => {
    cleanup();
    const reducedMotion = isReducedMotion();
    const mobile = isMobileViewport();
    const runtime = { listeners: [], cardCleanup: [], observer: null, bgLayer: null, beamLayer: null };
    window[RUNTIME_KEY] = runtime;
    if (mobile) {
      document.documentElement.classList.add(ROOT_MOBILE_CLASS);
    }
    mountBackgroundLayers(runtime);
    if (!mobile && !reducedMotion) {
      bindCursorGlow(runtime);
    }
    bindCardMagnet(runtime);
    bindReveal(runtime, reducedMotion);
  };

  document.addEventListener("DOMContentLoaded", mount);
  document.addEventListener("pjax:complete", mount);
  document.addEventListener("pjax:send", cleanup);
})();
