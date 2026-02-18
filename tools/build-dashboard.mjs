import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yamlModule from "js-yaml";

const { load } = yamlModule;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const siteRoot = path.resolve(__dirname, "..");
const sourcePath = path.join(siteRoot, "source", "_data", "lab_dashboard.yml");
const targetPath = path.join(siteRoot, "source", "lab-dashboard.json");

const main = async () => {
  let raw = "";
  try {
    raw = await fs.readFile(sourcePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(targetPath, "{}\n", "utf8");
      process.stdout.write("[dashboard] No YAML found, emitted empty JSON\n");
      return;
    }
    throw error;
  }

  const parsed = load(raw) || {};
  await fs.writeFile(targetPath, `${JSON.stringify(parsed, null, 2)}\n`, "utf8");
  process.stdout.write("[dashboard] Emitted source/lab-dashboard.json\n");
};

main().catch((error) => {
  process.stderr.write(`[dashboard] ${error.stack}\n`);
  process.exitCode = 1;
});
