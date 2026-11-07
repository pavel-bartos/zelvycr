#!/usr/bin/env node
// Kontrola interních odkazů v dist/ — spouští se po `npm run build`.
// Každý href začínající `/` (ne `//`) musí mít odpovídající soubor v dist/.

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

const IGNORE_PREFIXES = ['mailto:', 'tel:', 'http:', 'https:', '#', 'javascript:'];

function checkLinks(file, content) {
  const hrefRe = /\bhref="([^"]+)"/g;
  let m;
  while ((m = hrefRe.exec(content)) !== null) {
    const href = m[1];
    if (IGNORE_PREFIXES.some((p) => href.startsWith(p))) continue;
    if (!href.startsWith('/') || href.startsWith('//')) continue;

    const stripped = href.split('?')[0].split('#')[0];

    const candidates = [
      join(DIST, stripped),
      join(DIST, stripped + 'index.html'),
      join(DIST, stripped.replace(/\/$/, '') + '.html'),
      join(DIST, stripped.replace(/\/$/, '') + '/index.html'),
    ];

    if (!candidates.some(existsSync)) {
      errors.push(`${file}: odkaz "${href}" nenalezen v ${DIST}/`);
    }
  }
}

if (!existsSync(DIST)) {
  console.error(`Složka ${DIST}/ neexistuje — spusť nejdřív npm run build`);
  process.exit(1);
}

const files = getHtmlFiles(DIST);
for (const file of files) {
  checkLinks(file, readFileSync(file, 'utf8'));
}

if (errors.length > 0) {
  console.error(`\nRozbité interní odkazy (${errors.length}):`);
  errors.forEach((e) => console.error('  ' + e));
  process.exit(1);
}
process.stdout.write(`OK: ${files.length} HTML souborů, žádné rozbité interní odkazy.\n`);
