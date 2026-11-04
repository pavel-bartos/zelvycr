# Želvy ČR (zelvycr-web) — Project State

_Last updated: 2026-11-04 (zahájení Sprintu 2)_

## Aktuální fáze

**Fáze 5: Sprint 2 aktivní — kompletní katalog a fotky.**
Sprint 1 je uzavřený (PR #1 a #2 mergnuty, detail v `docs/backlog-archive.md`). Sprint 2 staví
fotopipeline, zbylých 5 detailů druhů, startovací sady, příslušenství a terária na míru
(TASK-008 až TASK-011), končí ověřením TASK-012. Web běží na GitHub Pages jako `noindex` prototyp.
Souběžně čeká TASK-022 (podklady pro tři `[DOPLNIT]` na detailu zelenavé).

**Režim práce:** Claude (šéf vývoje) píše backlog a dokumentaci do repa. Implementaci dělá
Claude Code (včetně dokumentace sprintu na pokyn). Design policy je závazný zdroj pro vzhled.

## Stav fází

| Fáze                 | Stav | Dokument                            | Poznámka                                                                               |
| -------------------- | ---- | ----------------------------------- | -------------------------------------------------------------------------------------- |
| 0 Discovery          | ✅   | —                                   | Proběhlo mimo repo: procházka starého webu (19 stránek, ~200 fotek) + odpovědi klienta |
| 1 PRD                | ✅   | zadání v Claude projektu „Zelvy CR" | Strategie, persony, cesta zákazníka, USP, KPI                                          |
| 2 UX                 | ✅   | zadání, kap. 3–4                    | IA (6 položek menu), 25 stránek, specifikace sekcí po stránkách                        |
| 3 Architektura       | ✅   | CLAUDE.md                           | Eleventy 3 + Nunjucks, statický výstup, GitHub Pages                                   |
| 4 Roadmapa & backlog | ✅   | docs/04-roadmap.md, docs/backlog.md | Roadmapa hotová, Sprint 1 a 2 rozepsané                                                |
| 5+ Implementace      | 🔵   | docs/backlog.md                     | Sprint 1 ✅ uzavřen · Sprint 2 🔵 aktivní                                              |

## Klíčová rozhodnutí (append-only)

- 2026-11-04: **Stavíme statický prototyp bez Shoptetu.** Vznikne pracovní a dočasná nová verze webu. Souběžně začne vznikat konečný web (statický + e-shop) na Shoptetu, který tohle dočasné řešení nahradí. Důsledek: výstup musí být čisté přenositelné HTML.
- 2026-11-04: **Stack Eleventy (11ty) + Nunjucks.** Důvod: 25 stránek se sdílenou hlavičkou, patičkou a CTA pruhem, 6 druhů a 13 článků ze šablon; výstup je „holé" HTML nejblíž tomu, co půjde vložit do Shoptetu. Bez JS frameworku.
- 2026-11-04: **Hosting GitHub Pages**, deploy z `main` přes workflow. Web běží v podadresáři → pathPrefix řízený proměnnou `PATH_PREFIX`.
- 2026-11-04: **Prototyp je `noindex`** (meta + robots.txt), aby nekonkuroval běžícímu zelvycr.cz ve vyhledávání.
- 2026-11-04: **Povaha projektu: nárazový** → CI continuous, preflight event-triggered před nasazením a před sezónou. Žádné crony.
- 2026-11-04: Repozitář na GitHubu zakládá Pavel ručně; scaffold vznikl mimo něj a vkládá se jako první commit.
- 2026-11-04: Repo **pavel-bartos/zelvycr** založeno, scaffold nahraný, lokální klon na Macu v „Dev projects/Zelvycr". Pages a branch protection zatím **nezapnuté** (deploy do té doby padá — nevadí). _(Aktualizováno 2026-11-04: Pages jsou zapnuté, branch protection pořád chybí.)_
- 2026-11-04: **Režim práce:** Claude píše jen backlog a docs (ne kód), implementaci dělá Claude Code.
- 2026-11-04: **Design = schválená varianta B** (mockupy úvod + Želvy na prodej), kodifikovaná do `docs/design-policy.md`. Webdesigner se nezapojuje — policy stačí jako zdroj pravdy.
- 2026-11-04: **Sprint 1 = užší výřez + design-first:** nejdřív design systém, pak úvod, Želvy na prodej a jeden detail druhu (zelenavá). Schválení designu na výřezu před stavbou zbylých stránek.
- 2026-11-04: **Sprint 2 připraven** (nezahájen): kompletní katalog a fotky — zbylých 5 druhů, startovací sady, příslušenství, terária na míru, fotopipeline. Stránky důvěry a průvodce chovem jsou Sprint 3+.
- 2026-11-04: **Sprint 1 uzavřen.** PR #1 mergnut, TASK-007 schválen Pavlem. Zbývají `[DOPLNIT]` na detailu zelenavé (TASK-022), hotlinkované fotky (TASK-008) a odkazy na zatím nepostavené stránky (404).
- 2026-11-04: **Push jde přes `gh` účet `pavel-bartos`:** Pavel spustil `gh auth setup-git`, git už nepoužívá klíčenku s účtem bez oprávnění. Claude Code při chybě 403 nic neobchází, zastaví se a řekne.
- 2026-11-04: **Sprint 2 zahájen.** Detail Sprintu 1 přesunut do `docs/backlog-archive.md`, živý backlog drží aktivní sprint, upcoming a Done.
- 2026-11-04: **Repo je veřejné** — zadání (interní klientský dokument) se proto do repa nevkládá; tasky nesou potřebný obsah v sobě. Doporučeno zvážit přepnutí na privátní.

## Otevřené otázky / TODO konzistence

- [ ] **Veřejné vs. privátní repo** — teď veřejné; u klientského projektu zvážit privátní (pak lze vložit zadání jako zdroj pravdy)

- [x] Název a owner repozitáře na GitHubu → pavel-bartos/zelvycr, Pages běží (ověřeno nasazením)
- [ ] Fotky: jak je dostat ze starého webu do repa (velikost, formát, pojmenování podle obsahu)
- [x] Rozsah prototypu — rozhodnuto: užší výřez ve Sprintu 1, zbytek ve Sprintech 2+
- [ ] Texty pro želvu pardálí a kloubnatou zatím neexistují (zadání, kap. 4.3)
- [ ] Údaje o druzích dohledané z internetu čekají na kontrolu klientem (zadání, otevřený bod 5)
