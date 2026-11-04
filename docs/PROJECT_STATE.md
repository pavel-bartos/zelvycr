# Želvy ČR (zelvycr-web) — Project State

_Last updated: 2026-11-04_

## Aktuální fáze

**Fáze 5: Sprint 1 nadefinován, čeká se na implementaci (Claude Code).**
Proces, Eleventy kostra, CI a deploy na GitHub Pages stojí. Repo je na GitHubu a napojené na
Pavlův Mac. Schválená varianta B je kodifikovaná v `docs/design-policy.md`. Sprint 1 (vizuální
základ + úvod + Želvy na prodej + detail druhu zelenavá) je rozepsaný v backlogu s AC a prompty
pro Claude Code. Obsah a stránky se zatím nestavěly — to je náplň Sprintu 1.

**Režim práce:** Claude (šéf vývoje) píše backlog a dokumentaci do repa, ale **nepíše kód**.
Veškerou implementaci dělá Claude Code. Design policy je závazný zdroj pravdy pro vzhled.

## Stav fází

| Fáze                 | Stav | Dokument                            | Poznámka                                                                               |
| -------------------- | ---- | ----------------------------------- | -------------------------------------------------------------------------------------- |
| 0 Discovery          | ✅   | —                                   | Proběhlo mimo repo: procházka starého webu (19 stránek, ~200 fotek) + odpovědi klienta |
| 1 PRD                | ✅   | zadání v Claude projektu „Zelvy CR" | Strategie, persony, cesta zákazníka, USP, KPI                                          |
| 2 UX                 | ✅   | zadání, kap. 3–4                    | IA (6 položek menu), 25 stránek, specifikace sekcí po stránkách                        |
| 3 Architektura       | ✅   | CLAUDE.md                           | Eleventy 3 + Nunjucks, statický výstup, GitHub Pages                                   |
| 4 Roadmapa & backlog | ✅   | docs/04-roadmap.md, docs/backlog.md | Roadmapa hotová, Sprint 1 rozepsaný                                                    |
| 5+ Implementace      | 🔵   | docs/backlog.md                     | sprint: 1 (čeká na Claude Code)                                                        |

## Klíčová rozhodnutí (append-only)

- 2026-11-04: **Stavíme statický prototyp bez Shoptetu.** Vznikne pracovní a dočasná nová verze webu. Souběžně začne vznikat konečný web (statický + e-shop) na Shoptetu, který tohle dočasné řešení nahradí. Důsledek: výstup musí být čisté přenositelné HTML.
- 2026-11-04: **Stack Eleventy (11ty) + Nunjucks.** Důvod: 25 stránek se sdílenou hlavičkou, patičkou a CTA pruhem, 6 druhů a 13 článků ze šablon; výstup je „holé" HTML nejblíž tomu, co půjde vložit do Shoptetu. Bez JS frameworku.
- 2026-11-04: **Hosting GitHub Pages**, deploy z `main` přes workflow. Web běží v podadresáři → pathPrefix řízený proměnnou `PATH_PREFIX`.
- 2026-11-04: **Prototyp je `noindex`** (meta + robots.txt), aby nekonkuroval běžícímu zelvycr.cz ve vyhledávání.
- 2026-11-04: **Povaha projektu: nárazový** → CI continuous, preflight event-triggered před nasazením a před sezónou. Žádné crony.
- 2026-11-04: Repozitář na GitHubu zakládá Pavel ručně; scaffold vznikl mimo něj a vkládá se jako první commit.
- 2026-11-04: Repo **pavel-bartos/zelvycr** založeno, scaffold nahraný, lokální klon na Macu v „Dev projects/Zelvycr". Pages a branch protection zatím **nezapnuté** (deploy do té doby padá — nevadí).
- 2026-11-04: **Režim práce:** Claude píše jen backlog a docs (ne kód), implementaci dělá Claude Code.
- 2026-11-04: **Design = schválená varianta B** (mockupy úvod + Želvy na prodej), kodifikovaná do `docs/design-policy.md`. Webdesigner se nezapojuje — policy stačí jako zdroj pravdy.
- 2026-11-04: **Sprint 1 = užší výřez + design-first:** nejdřív design systém, pak úvod, Želvy na prodej a jeden detail druhu (zelenavá). Schválení designu na výřezu před stavbou zbylých stránek.
- 2026-11-04: **Sprint 2 připraven** (nezahájen): kompletní katalog a fotky — zbylých 5 druhů, startovací sady, příslušenství, terária na míru, fotopipeline. Stránky důvěry a průvodce chovem jsou Sprint 3+.
- 2026-11-04: **Repo je veřejné** — zadání (interní klientský dokument) se proto do repa nevkládá; tasky nesou potřebný obsah v sobě. Doporučeno zvážit přepnutí na privátní.

## Otevřené otázky / TODO konzistence

- [ ] **Veřejné vs. privátní repo** — teď veřejné; u klientského projektu zvážit privátní (pak lze vložit zadání jako zdroj pravdy)

- [ ] Název a owner repozitáře na GitHubu → promítnout do README a ověřit pathPrefix v deploy workflow
- [ ] Fotky: jak je dostat ze starého webu do repa (velikost, formát, pojmenování podle obsahu)
- [ ] Rozsah prototypu — všech 25 stránek, nebo užší výběr pro schválení designu? (vstup do roadmapy)
- [ ] Texty pro želvu pardálí a kloubnatou zatím neexistují (zadání, kap. 4.3)
- [ ] Údaje o druzích dohledané z internetu čekají na kontrolu klientem (zadání, otevřený bod 5)
