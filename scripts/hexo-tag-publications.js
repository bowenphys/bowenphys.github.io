"use strict";

const { escapeHTML } = require("hexo-util");

const parseOptions = (args = []) => {
  const options = { lang: "zh" };
  args.forEach((arg) => {
    const [rawKey, ...rest] = String(arg).split(":");
    const key = String(rawKey || "").trim();
    const value = rest.join(":").trim();
    if (!key || !value) return;
    options[key] = value;
  });
  return options;
};

const renderLinks = (links, lang) => {
  const labels =
    lang === "en"
      ? { doi: "DOI", arxiv: "arXiv", code: "Code", url: "Link" }
      : { doi: "DOI", arxiv: "arXiv", code: "代码", url: "链接" };

  const candidates = [
    { key: "doi", value: links?.doi },
    { key: "arxiv", value: links?.arxiv },
    { key: "code", value: links?.code },
    { key: "url", value: links?.url }
  ].filter((item) => item.value);

  if (!candidates.length) return "";
  const linksHtml = candidates
    .map(
      (item) =>
        `<a class="pub-link" href="${escapeHTML(item.value)}" target="_blank" rel="noopener">${labels[item.key]}</a>`
    )
    .join(" · ");
  return `<div class="pub-links">${linksHtml}</div>`;
};

hexo.extend.tag.register("publications", function publicationsTag(args) {
  const { lang } = parseOptions(args);
  const dataStore = hexo.locals.get("data") || {};
  const publications = Array.isArray(dataStore.publications) ? dataStore.publications : [];
  if (!publications.length) {
    const emptyText =
      lang === "en"
        ? "No publication entries found. Please update data/publications.bib."
        : "尚未发现论文条目，请先维护 data/publications.bib。";
    return `<p>${escapeHTML(emptyText)}</p>`;
  }

  const counterText =
    lang === "en"
      ? `Total ${publications.length} entries`
      : `共 ${publications.length} 条`;

  const itemsHtml = publications
    .map((item, index) => {
      const title = escapeHTML(item.title || "Untitled");
      const authors =
        Array.isArray(item.authors) && item.authors.length
          ? escapeHTML(item.authors.join(", "))
          : lang === "en"
            ? "Unknown Authors"
            : "未知作者";
      const venue = item.venue ? escapeHTML(item.venue) : "";
      const year = item.year ? escapeHTML(String(item.year)) : "";
      const venueLine = [venue, year].filter(Boolean).join(" · ");
      const metaHtml = venueLine ? `<div class="pub-meta">${venueLine}</div>` : "";
      const linksHtml = renderLinks(item.links, lang);

      return `
<li class="pub-item">
  <div class="pub-title">${index + 1}. ${title}</div>
  <div class="pub-authors">${authors}</div>
  ${metaHtml}
  ${linksHtml}
</li>`.trim();
    })
    .join("\n");

  return `
<div class="pub-container">
  <p class="pub-counter">${escapeHTML(counterText)}</p>
  <ol class="pub-list">
${itemsHtml}
  </ol>
</div>
  `.trim();
});
