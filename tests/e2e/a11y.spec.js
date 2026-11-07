// Přístupnostní testy (axe-core) — WCAG 2.2 AA, serious/critical porušení.
// Vědomé výjimky: žádné (přidávat sem s komentářem + odkazem na issue).

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const stranky = [
  { url: '/', label: 'Úvod' },
  { url: '/zelvy-na-prodej/', label: 'Želvy na prodej' },
  { url: '/zelva-zelenava/', label: 'Detail druhu' },
  { url: '/pruvodce-chovem/je-zelva-pro-me/', label: 'Článek průvodce' },
];

for (const { url, label } of stranky) {
  test(`${label} — žádná serious/critical a11y porušení`, async ({ page }) => {
    await page.goto(url);

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    const vaznaPoruseni = results.violations.filter(
      (v) => v.impact === 'serious' || v.impact === 'critical',
    );

    if (vaznaPoruseni.length > 0) {
      const popis = vaznaPoruseni
        .map((v) => `[${v.impact}] ${v.id}: ${v.description}`)
        .join('\n');
      expect.soft(vaznaPoruseni, `A11y porušení na ${url}:\n${popis}`).toHaveLength(0);
    }

    expect(vaznaPoruseni).toHaveLength(0);
  });
}
