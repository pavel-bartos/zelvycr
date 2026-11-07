#!/usr/bin/env node
// Jednoduchý statický server pro dist/ — používá Playwright e2e testy.

import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, extname } from 'path';

const PORT = Number(process.env.PORT) || 8888;
const DIST = 'dist';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

createServer((req, res) => {
  const url = req.url.split('?')[0];
  const candidates = [
    join(DIST, url),
    join(DIST, url, 'index.html'),
    join(DIST, url.replace(/\/$/, '') + '/index.html'),
    join(DIST, url.replace(/\/$/, '') + '.html'),
  ];

  for (const file of candidates) {
    if (existsSync(file) && !file.endsWith('/')) {
      const mime = MIME[extname(file)] ?? 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime });
      res.end(readFileSync(file));
      return;
    }
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
}).listen(PORT, () => {
  process.stdout.write(`Serving dist/ on http://localhost:${PORT}\n`);
});
