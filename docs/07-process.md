# Želvy ČR (zelvycr-web) — Vývojový proces

Pipeline: idea → backlog task (AC + prompt) → implementace (Claude Code) → format + lint +
testy + CI → revize diffu (LLM-as-judge / dev-auditor proti AC a `docs/review-rubric.md`) →
lokální ověření (Pavel, checklist) → **PR → zelená CI → merge** → deploy na GitHub Pages.

## Branch strategie

- `main` = nasazený prototyp; deploy workflow běží z `main`.
- Práce vždy na feature větvi (`feat/nazev`, `fix/nazev`).
- **Do `main` jen přes PR se zelenou CI. Nikdy přímý push do `main`** — hlídá to
  branch protection na GitHubu i `git-push-guard` hook z `vibe-secure`.

## Definition of Done

AC splněna + `npm run format:check` a `npm run lint` zelené + `npm test` prochází +
CI zelená + revize diffu bez kritických nálezů + Pavel to viděl v prohlížeči.

## Role

Orchestrátor (plán, architektura, rozhodnutí) · Claude Code (implementace) ·
reviewer (judge proti rubrice) · Pavel (schválení, obsahová fakta o želvách).

## Model matrix

Orchestrace a návrh = silný model (Opus, u velkých návrhů vyšší reasoning).
Implementace tasků = Sonnet.

## Kontrolní a údržbový plán

_Povaha projektu: **nárazový** · rozhodnuto 2026-11-04_

| Kontrola                                              | Trigger                                                                |
| ----------------------------------------------------- | ---------------------------------------------------------------------- |
| Format, lint, testy, build (CI brána)                 | **continuous** — každý PR a push do `main`                             |
| Bezpečnost a závislosti (`npm audit`, `npm outdated`) | **event-triggered** — součást preflightu                               |
| Preflight připravenosti (`vibe-preflight`)            | **event-triggered** — před nasazením a před sezónou (listopad, březen) |
| Aktuálnost tech a modelů                              | při preflightu                                                         |
| Audit always-allow oprávnění (`vibe-secure`)          | **on-demand**                                                          |
| Hloubkový audit kódu (`dev-auditor`)                  | on-demand / při milníku                                                |
| Soulad dokumentace s realitou                         | při uzavření sprintu                                                   |

Žádné scheduled tasky — projekt se používá nárazově, cron by jen šuměl.

## Spolupráce více agentů

Na repu pracují souběžně tři agenti (šéf vývoje, Claude Code, copywriter). Pravidla proti
kolizím jsou v `CONTRIBUTING.md`: každý svůj pracovní strom, svůj jmenný prostor větví
(`docs/*` · `feat/*`,`fix/*` · `content/*`), své soubory; `main` jen přes PR. Nikdo nesahá
do cizího pracovního stromu ani cizí větve.
