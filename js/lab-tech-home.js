(() => {
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
    if (!isHomePage()) return;
    enhanceHomeSiteTitle();
  };

  document.addEventListener("DOMContentLoaded", mount);
  document.addEventListener("pjax:complete", mount);
})();
