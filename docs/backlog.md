# Želvy ČR (zelvycr-web) — Backlog

_Last updated: 2026-11-04 | Sprint: —_

## Current Sprint

_Zatím nezahájen. Sprint 1 se sestaví přes `vibe-backlog`, až bude repozitář na GitHubu
a bude rozhodnutý rozsah prototypu (viz otevřené otázky v PROJECT_STATE)._

## Backlog (Upcoming)

Hrubý rozpad podle zadání. Velikosti jsou odhad, pořadí není závazné —
sprinty sestavuje `vibe-backlog`.

| ID       | Task                                                                               | Size | Priority | Status |
| -------- | ---------------------------------------------------------------------------------- | ---- | -------- | ------ |
| TASK-001 | Založit repo na GitHubu, vložit scaffold, zapnout Pages a branch protection        | S    | P0       | ⬜     |
| TASK-002 | Vizuální směr: barvy z loga, typografie, design tokeny v `style.css`               | M    | P0       | ⬜     |
| TASK-003 | Hlavička, patička, sticky „Zavolat" a CTA pruh do finální podoby                   | M    | P0       | ⬜     |
| TASK-004 | Fotky ze starého webu: stáhnout, zmenšit, převést na WebP, pojmenovat podle obsahu | M    | P0       | ⬜     |
| TASK-005 | Datový model druhů (`src/_data/druhy.json`) podle zadání kap. 4.3                  | S    | P0       | ⬜     |
| TASK-006 | Šablona detailu druhu + 6 stránek druhů                                            | L    | P1       | ⬜     |
| TASK-007 | Stránka Želvy na prodej (rozcestník + porovnávací tabulka)                         | M    | P1       | ⬜     |
| TASK-008 | Úvodní stránka podle zadání kap. 4.1 (11 sekcí)                                    | L    | P1       | ⬜     |
| TASK-009 | Startovací sady, Příslušenství, Terária na míru                                    | M    | P1       | ⬜     |
| TASK-010 | Jak nakoupit, O nás, Kontakt, Reklamace a garance                                  | M    | P1       | ⬜     |
| TASK-011 | Průvodce chovem: rozcestník + 13 článků z Markdownu                                | L    | P2       | ⬜     |
| TASK-012 | Galerie (40–60 fotek, mřížka, lazy loading)                                        | M    | P2       | ⬜     |
| TASK-013 | Přístupnost a mobil: kontrola na 360 px, kontrast, alt texty, 44 × 44 px           | M    | P2       | ⬜     |

## Done ✅

| ID       | Task                                                                              | Dokončeno  |
| -------- | --------------------------------------------------------------------------------- | ---------- |
| TASK-000 | Scaffold vibe-process: Eleventy, CI, deploy na Pages, docs, bezpečnostní baseline | 2026-11-04 |

## Future / Deferred

| ID  | Položka                                  | Poznámka                                                      |
| --- | ---------------------------------------- | ------------------------------------------------------------- |
| —   | Migrace obsahu na Shoptet                | Konečný web vzniká souběžně; prototyp dodá HTML bloky a texty |
| —   | Měření (GA4 / GTM, události `click_tel`) | Na prototypu bez cookie lišty nemá smysl; řeší ostrý web      |
| —   | 301 přesměrování starých `.html` adres   | Patří k ostrému webu, ne k prototypu na Pages                 |
| —   | Vlastní doména pro prototyp              | Jen pokud Pavel bude chtít; jinak zůstává `*.github.io`       |

<!-- Pravidla: statusy ⬜🔵✅🔴⏸️; ID TASK-NNN neměnná; každý sprint končí ověřovacím
taskem (Size S, manuální); DoD = AC + format + lint + testy + CI + revize; závěr sprintu
= otevřít PR → zelená CI → merge (nikdy přímý push do main); uzavřený sprint → archiv. -->
