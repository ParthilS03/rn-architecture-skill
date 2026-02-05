#!/usr/bin/env node

import { mkdir, readdir, copyFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rulesPath = path.join(__dirname, "../rules");

console.log("Installing AI project setup skills...");

await mkdir(".cursor/rules", { recursive: true });

const files = await readdir(rulesPath);

for (const file of files) {
  await copyFile(path.join(rulesPath, file), path.join(".cursor/rules", file));
}

console.log("✅ Skills installed successfully!");
