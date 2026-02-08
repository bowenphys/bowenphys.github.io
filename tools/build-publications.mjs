import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Cite from "citation-js";
import "@citation-js/plugin-bibtex";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const siteRoot = path.resolve(__dirname, "..");
const bibPath = path.join(siteRoot, "data", "publications.bib");
const outputDir = path.join(siteRoot, "source", "_data");
const outputPath = path.join(outputDir, "publications.json");

const readBib = async () => {
  try {
    return await fs.readFile(bibPath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return "";
    throw error;
  }
};

const cleanText = (text) =>
  String(text || "")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const formatNames = (people = []) =>
  people
    .map((person) => {
      const given = cleanText(person.given);
      const family = cleanText(person.family);
      if (given && family) return `${given} ${family}`;
      return given || family || "";
    })
    .filter(Boolean);

const getYear = (entry) => {
  const dateParts = entry?.issued?.["date-parts"];
  if (Array.isArray(dateParts) && Array.isArray(dateParts[0]) && dateParts[0][0]) {
    return Number(dateParts[0][0]);
  }
  const rawYear = Number(entry?.year);
  if (!Number.isNaN(rawYear) && rawYear > 0) return rawYear;
  return null;
};

const getVenue = (entry) =>
  cleanText(
    entry["container-title"] ||
      entry["collection-title"] ||
      entry["publisher"] ||
      entry["event"] ||
      ""
  );

const parseCodeLinkFromText = (text) => {
  const raw = String(text || "");
  const match = raw.match(/(?:^|[;,\s])code:\s*(https?:\/\/\S+)/i);
  return match ? cleanText(match[1]) : "";
};

const parseArxivFromUrl = (url) => {
  const raw = String(url || "").trim();
  const match = raw.match(/arxiv\.org\/abs\/([^?#\s]+)/i);
  return match ? cleanText(match[1]) : "";
};

const normalizeEntry = (entry, index) => {
  const id = cleanText(entry.id) || `entry-${index + 1}`;
  const title = cleanText(entry.title) || "Untitled";
  const authors = formatNames(entry.author || []);
  const year = getYear(entry);
  const venue = getVenue(entry);
  const doi = cleanText(entry.DOI || entry.doi || "");
  const url = cleanText(entry.URL || entry.url || "");
  const note = cleanText(entry.note || "");
  const arxiv =
    cleanText(entry.arxiv || entry.eprint || "") ||
    parseArxivFromUrl(url);
  const code =
    cleanText(entry.code || entry.repository || entry.github || "") ||
    parseCodeLinkFromText(note);

  return {
    id,
    title,
    authors,
    year,
    venue,
    type: cleanText(entry.type || ""),
    links: {
      doi: doi ? `https://doi.org/${doi}` : "",
      url,
      arxiv: arxiv
        ? arxiv.startsWith("http")
          ? arxiv
          : `https://arxiv.org/abs/${arxiv}`
        : "",
      code
    }
  };
};

const main = async () => {
  const bibContent = await readBib();
  let entries = [];
  const hasBibEntries =
    /@\s*(article|book|inproceedings|misc|phdthesis|mastersthesis|techreport|unpublished|incollection|proceedings|manual|dataset)\s*\{/i.test(
      bibContent
    );

  if (bibContent.trim() && hasBibEntries) {
    const cite = new Cite(bibContent);
    entries = cite.data || [];
  }

  const publications = entries
    .map(normalizeEntry)
    .sort((left, right) => {
      const yearA = left.year ?? 0;
      const yearB = right.year ?? 0;
      if (yearA !== yearB) return yearB - yearA;
      return left.title.localeCompare(right.title, "en");
    });

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(publications, null, 2)}\n`, "utf8");
  process.stdout.write(`[publications] Generated ${publications.length} entries\n`);
};

main().catch((error) => {
  process.stderr.write(`[publications] ${error.stack}\n`);
  process.exitCode = 1;
});
