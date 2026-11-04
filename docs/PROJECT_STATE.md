# Želvy ČR (zelvycr-web) — Project State

_Last updated: 2026-11-04_

## Aktuální fáze

**Fáze 4 → 5: scaffold hotový, čeká se na založení repozitáře a první sprint.**
Proces, Eleventy kostra, CI a deploy na GitHub Pages stojí. Obsah a stránky se zatím
nestavěly — to je náplň Sprintu 1.

## Stav fází

| Fáze                 | Stav | Dokument                            | Poznámka                                                                               |
| -------------------- | ---- | ----------------------------------- | -------------------------------------------------------------------------------------- |
| 0 Discovery          | ✅   | —                                   | Proběhlo mimo repo: procházka starého webu (19 stránek, ~200 fotek) + odpovědi klienta |
| 1 PRD                | ✅   | zadání v Claude projektu „Zelvy CR" | Strategie, persony, cesta zákazníka, USP, KPI                                          |
| 2 UX                 | ✅   | zadání, kap. 3–4                    | IA (6 položek menu), 25 stránek, specifikace sekcí po stránkách                        |
| 3 Architektura       | ✅   | CLAUDE.md                           | Eleventy 3 + Nunjucks, statický výstup, GitHub Pages                                   |
| 4 Roadmapa & backlog | 🔵   | docs/04-roadmap.md, docs/backlog.md | Roadmapa hotová, backlog Sprintu 1 se plní                                             |
| 5+ Implementace      | ⬜   | docs/backlog.md                     | sprint: —                                                                              |

## Klíčová rozhodnutí (append-only)

- 2026-11-04: **Stavíme statický prototyp bez Shoptetu.** Vznikne pracovní a dočasná nová verze webu. Souběžně začne vznikat konečný web (statický + e-shop) na Shoptetu, který tohle dočasné řešení nahradí. Důsledek: výstup musí být čisté přenositelné HTML.
- 2026-11-04: **Stack Eleventy (11ty) + Nunjucks.** Důvod: 25 stránek se sdílenou hlavičkou, patičkou a CTA pruhem, 6 druhů a 13 článků ze šablon; výstup je „holé" HTML nejblíž tomu, co půjde vložit do Shoptetu. Bez JS frameworku.
- 2026-11-04: **Hosting GitHub Pages**, deploy z `main` přes workflow. Web běží v podadresáři → pathPrefix řízený proměnnou `PATH_PREFIX`.
- 2026-11-04: **Prototyp je `noindex`** (meta + robots.txt), aby nekonkuroval běžícímu zelvycr.cz ve vyhledávání.
- 2026-11-04: **Povaha projektu: nárazový** → CI continuous, preflight event-triggered před nasazením a před sezónou. Žádné crony.
- 2026-11-04: Repozitář na GitHubu zakládá Pavel ručně; scaffold vznikl mimo něj a vkládá se jako první commit.

## Otevřené otázky / TODO konzistence

- [ ] Název a owner repozitáře na GitHubu → promítnout do README a ověřit pathPrefix v deploy workflow
- [ ] Fotky: jak je dostat ze starého webu do repa (velikost, formát, pojmenování podle obsahu)
- [ ] Rozsah prototypu — všech 25 stránek, nebo užší výběr pro schválení designu? (vstup do roadmapy)
- [ ] Texty pro želvu pardálí a kloubnatou zatím neexistují (zadání, kap. 4.3)
- [ ] Údaje o druzích dohledané z internetu čekají na kontrolu klientem (zadání, otevřený bod 5)
