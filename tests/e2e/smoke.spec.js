// Smoke testy — strukturální ověření klíčových stránek.
// Testuje strukturu a chování, ne konkrétní texty.

import { test, expect } from '@playwright/test';

// 1 — Klíčové stránky se načtou a mají <h1>
const klicoveStranky = [
  { url: '/', label: 'Úvod' },
  { url: '/zelvy-na-prodej/', label: 'Želvy na prodej' },
  { url: '/zelva-zelenava/', label: 'Detail druhu' },
  { url: '/pruvodce-chovem/je-zelva-pro-me/', label: 'Článek průvodce' },
  { url: '/kontakty/', label: 'Kontakty' },
];

for (const { url, label } of klicoveStranky) {
  test(`${label} (${url}) — načte se, má <h1>`, async ({ page }) => {
    const response = await page.goto(url);
    expect(response.status()).toBe(200);
    await expect(page.locator('h1').first()).toBeVisible();
  });
}

// 2 — Hlavní menu má všechny položky (dle navigace.json)
test('Hlavní menu má 7 položek', async ({ page }) => {
  await page.goto('/');
  const polozky = page.locator('#hlavni-nav a');
  await expect(polozky).toHaveCount(7);
});

// 3 — tel: odkazy mají správný tvar a třídu js-tel-*
test('tel: odkazy — správný formát a třída js-tel-*', async ({ page }) => {
  await page.goto('/');
  const telOdkazy = page.locator('a[href^="tel:"]');
  const pocet = await telOdkazy.count();
  expect(pocet).toBeGreaterThan(0);

  for (let i = 0; i < pocet; i++) {
    const href = await telOdkazy.nth(i).getAttribute('href');
    expect(href).toBe('tel:+420774579582');

    const cls = await telOdkazy.nth(i).getAttribute('class');
    expect(cls).toMatch(/js-tel-/);
  }
});

// 4 — FAQ <details> lze otevřít (klik na summary)
// Pozn.: homepage FAQ používá name="faq" (exclusive accordion) — první položka je open by default.
// Locator musí být stabilní (nth, ne :not([open])) kvůli znovu-vyhodnocení po kliknutí.
test('FAQ <details> na homepage lze otevřít', async ({ page }) => {
  await page.goto('/');
  const faqItems = page.locator('details[name="faq"]');
  await expect(faqItems).not.toHaveCount(0);

  // Druhá položka je zavřená (první je open by default)
  const druhaPolozka = faqItems.nth(1);
  await expect(druhaPolozka).not.toHaveAttribute('open', '');
  await druhaPolozka.locator('summary').click();
  await expect(druhaPolozka).toHaveAttribute('open', '');
});

// 5 — Sticky „Zavolat" je viditelná na mobilním viewportu
test('Sticky „Zavolat" je viditelná na 375 px', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const sticky = page.locator('.sticky-zavolat');
  await expect(sticky).toBeVisible();
});

// 6 — Responzivita: na 360 px žádný vodorovný posun (3 stránky)
const responzivniStranky = [
  { url: '/', label: 'Úvod' },
  { url: '/zelvy-na-prodej/', label: 'Želvy na prodej' },
  { url: '/pruvodce-chovem/je-zelva-pro-me/', label: 'Článek průvodce' },
];

for (const { url, label } of responzivniStranky) {
  test(`Responzivita 360 px — bez vodorovného posunu: ${label}`, async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto(url);
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
}
