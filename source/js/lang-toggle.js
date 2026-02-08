(() => {
  const EN_HOME = "/en/";
  const ZH_HOME = "/";

  const normalizePath = (pathname) => {
    if (!pathname) return "/";
    if (!pathname.startsWith("/")) return `/${pathname}`;
    return pathname;
  };

  const toEnglishPath = (pathname) => {
    const path = normalizePath(pathname);
    if (path === "/" || path === "/en" || path === "/en/") return EN_HOME;
    if (path.startsWith("/en/")) return path;
    return `/en${path}`;
  };

  const toChinesePath = (pathname) => {
    const path = normalizePath(pathname);
    if (path === "/en" || path === "/en/") return ZH_HOME;
    if (!path.startsWith("/en/")) return path;
    const stripped = path.slice(3);
    return stripped || ZH_HOME;
  };

  const checkPathExists = async (path) => {
    try {
      const response = await fetch(path, { method: "HEAD", cache: "no-store" });
      if (response.ok) return true;
      if (response.status !== 405) return false;
      const fallback = await fetch(path, { method: "GET", cache: "no-store" });
      return fallback.ok;
    } catch {
      return false;
    }
  };

  const getSwitchAnchors = () =>
    Array.from(document.querySelectorAll("a")).filter((anchor) => {
      const label = (anchor.textContent || "").trim();
      const href = anchor.getAttribute("href") || "";
      return (
        label === "EN" ||
        label === "中文" ||
        href === "/en/" ||
        href === "/en"
      );
    });

  const init = async () => {
    const currentPath = normalizePath(window.location.pathname);
    const isEnglish = currentPath === "/en" || currentPath.startsWith("/en/");
    const targetPath = isEnglish
      ? toChinesePath(currentPath)
      : toEnglishPath(currentPath);
    const fallbackPath = isEnglish ? ZH_HOME : EN_HOME;
    const exists = await checkPathExists(targetPath);
    const finalTarget = exists ? targetPath : fallbackPath;
    const targetLabel = isEnglish ? "中文" : "EN";
    const targetTitle = isEnglish ? "切换到中文" : "Switch to English";

    getSwitchAnchors().forEach((anchor) => {
      anchor.setAttribute("href", finalTarget);
      anchor.textContent = targetLabel;
      anchor.setAttribute("title", targetTitle);
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    init();
  });
})();
