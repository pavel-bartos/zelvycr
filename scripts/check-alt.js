#!/usr/bin/env node
// Kontrola alt atributů v dist/ — každý <img> musí mít alt (prázdné je OK u dekorativních).

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';

const DIST = 'dist';
const errors = [];

function getHtmlFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...getHtmlFiles(full));
    } else if (entry.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

function checkAlt(file, content) {
  const imgRe = /<img\b([^>]*?)>/gi;
  let m;
  while ((m = imgRe.exec(content)) !== null) {
    const attrs = m[1];
    if (!/\balt\s*=/.test(attrs)) {
      const snippet = m[0].length > 100 ? m[0].slice(0, 97) + '…' : m[0];
      errors.push(`${file}:\n    ${snippet}`);
    }
  }
}

if (!existsSync(DIST)) {
  console.error(`Složka ${DIST}/ neexistuje — spusť nejdřív npm run build`);
  process.exit(1);
}

const files = getHtmlFiles(DIST);
for (const file of files) {
  checkAlt(file, readFileSync(file, 'utf8'));
}

if (errors.length > 0) {
  console.error(`\n<img> bez alt atributu (${errors.length}):`);
  errors.forEach((e) => console.error(e));
  process.exit(1);
}
process.stdout.write(
  `OK: ${files.length} HTML souborů, všechny <img> mají alt atribut.\n`,
);
