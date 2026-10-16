"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const read = name => fs.readFileSync(path.join(root, name), "utf8");

test("Netlify can publish the static entrypoint and not the unfinished checkout functions", () => {
  assert.ok(fs.existsSync(path.join(root, "index.html")));
  const config = read("netlify.toml");
  assert.match(config, /publish\s*=\s*"\."/);
  assert.doesNotMatch(config, /functions\s*=/);
  assert.ok(!fs.existsSync(path.join(root, "functions")));
});

test("public preview is explicit about setup and avoids fictitious checkout", () => {
  const html = read("index.html");
  assert.match(html, /<html lang="pt-BR">/);
  assert.match(html, /<main\b/);
  assert.match(html, /Configuração pendente/);
  assert.match(html, /rel="noopener noreferrer"/);
  assert.doesNotMatch(html, /<form|checkout|mercadopago|firebase\.initializeApp/i);
  assert.match(read("styles.css"), /prefers-reduced-motion/);
});
