(() => {
  const BRIDGE_ATTR = "data-hero-bridge";

  const applyHeroBridgeVariant = () => {
    const root = document.documentElement;
    const variant = new URLSearchParams(window.location.search).get("bridge");
    if (!variant) {
      root.removeAttribute(BRIDGE_ATTR);
      return;
    }
    if (["soft", "mist", "grid"].includes(variant)) {
      root.setAttribute(BRIDGE_ATTR, variant);
      return;
    }
    root.removeAttribute(BRIDGE_ATTR);
  };

  const enhanceHomeSiteTitle = () => {
    const siteTitle = document.querySelector("#page-header.full_page #site-title");
    if (!siteTitle || siteTitle.dataset.labStyled === "true") return;
    siteTitle.dataset.labStyled = "true";
    siteTitle.classList.add("lab-home-title");
    siteTitle.innerHTML = `
      <span class="lab-home-title-en">Where Quantum Complexity Condenses into Order</span>
      <span class="lab-home-title-zh">于量子繁复之中，见凝聚有序之形</span>
    `;
  };

  const isHomePage = () => {
    const path = window.location.pathname.replace(/index\\.html$/, "");
    return path === "/" || path === "" || path === "/en" || path === "/en/";
  };

  const mount = () => {
    applyHeroBridgeVariant();
    if (!isHomePage()) return;
    enhanceHomeSiteTitle();
  };

  document.addEventListener("DOMContentLoaded", mount);
  document.addEventListener("pjax:complete", mount);
})();
