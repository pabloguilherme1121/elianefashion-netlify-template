"use strict";
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "dist");
const allowlist = ["index.html", "styles.css"];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
for (const file of allowlist) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}
console.log("Prévia estática criada:", allowlist.join(", "));
