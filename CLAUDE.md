# Želvy ČR (zelvycr-web) — pravidla pro Claude Code

Statický prototyp nového webu **zelvycr.cz** — rodinný chov suchozemských želv
(Haltufovi, 45 let, dvě generace). Prodává jistotu laikovi, který uvažuje o první želvě;
**jediná konverze je telefonát** na 774 579 582. Jazyk UI i dokumentace: **čeština**.

## Kontext: co je tenhle web a co není

Tohle je **pracovní prototyp a dočasná náhrada** starého webu. Souběžně vzniká konečný web
(statická část + e-shop) na **Shoptetu**, který tenhle statický web později nahradí.

Z toho plyne pravidlo, které drž u každého rozhodnutí:

- **Výstupem musí být čisté, přenositelné HTML.** Komponenta, kterou nejde vzít jako blok
  HTML+CSS a vložit do stránky Shoptetu, je špatně navržená komponenta.
- **Žádný runtime JavaScript jako nutnost.** FAQ = `<details>`, žádný framework. JS jen tam,
  kde bez něj věc nefunguje, a stránka musí dávat smysl i bez něj.
- **Obsah (texty, data o druzích, články) je to cenné** — přežije migraci na Shoptet.
  Drž ho v `src/_data/` a v Markdownu, ne natvrdo v šablonách.
- Prototyp je `noindex` (`site.prototyp: true` v `src/_data/site.json`) + `robots.txt`
  zakazuje indexaci. **Nikdy to nevypínej bez výslovného pokynu** — duplicitní obsah
  s běžícím zelvycr.cz by poškodil pozice ostrého webu.

Zdroj pravdy pro obsah a strukturu: **zadání webu Želvy ČR** (dokument v Claude projektu
„Zelvy CR", `claude/zadani-webu-zelvycr.md`) — 25 stránek, 6 druhů želv, 13 článků.
Zadání popisuje realizaci na Shoptetu; **tady z něj bereme obsah a strukturu, ne postup
nastavení Shoptetu**.

## Stack a struktura

- **Eleventy 3** (`eleventy.config.js`), šablony Nunjucks, build do `dist/`. Žádný framework.
- `src/_includes/layouts/` — layouty · `src/_includes/partials/` — hlavička, patička, CTA pruh, sticky „Zavolat"
- `src/_data/` — `site.json` (kontakty, telefon, ceny), `navigace.json`; sem patří i data druhů a článků
- `src/assets/css/style.css` — jediný stylesheet, design tokeny v `:root`
- `src/static/` — kopíruje se do kořene `dist/` (`robots.txt`, `.nojekyll`)
- `lib/filtry.js` — čisté funkce registrované jako Eleventy filtry (testovatelné)
- `test/` — vitest · `docs/` — rozcestník níže

Hosting: **GitHub Pages** z workflow `deploy.yml`, web běží v podadresáři `/<repo>/`.

## Příkazy

```bash
npm run dev          # lokální server s watchem (http://localhost:8080)
npm run build        # build do dist/
npm run lint         # eslint
npm run format       # prettier --write
npm run format:check # prettier --check (brána v CI)
npm test             # vitest run
```

## Guardraily (neporušovat)

- **Secrets:** projekt žádné nemá a mít nemá — je to statický web bez backendu. `.env*`
  je v `.gitignore`; nikdy necommituj credential, token ani klíč. Objeví-li se potřeba
  secretu, je to signál, že návrh je špatně.
- **`noindex` zůstává zapnutý**, dokud Pavel neřekne jinak (viz výše — ochrana pozic
  ostrého webu).
- **Interní odkazy vždy přes filtr `url`:** `{{ "/o-nas/" | url }}`. Natvrdo psané `/o-nas/`
  se na GitHub Pages rozbije, protože web běží v podadresáři.
- **Do `main` jen přes PR se zelenou CI.** Nikdy přímý push do `main`.
- **Telefon na jednom místě** — `site.json`. Nikdy ho nepiš natvrdo do šablony; změna čísla
  se musí projevit všude jednou úpravou.
- **Každý odkaz `tel:` má třídu `js-tel-<umístění>`** (`js-tel-hlavicka`, `js-tel-sticky`,
  `js-tel-cta`, …) — podle ní se měří, odkud se volá. Nový `tel:` odkaz bez třídy = chyba.
- **Přístupnost:** tlačítka min. 44 × 44 px, alt texty česky a popisné, kontrast,
  žádné vodorovné posouvání na 360 px.
- **Fakta o želvách nevymýšlej.** Údaje o druzích, teplotách a velikostech pocházejí ze
  zadání a z praxe chovatele. Chybí-li údaj, označ `[DOPLNIT]` a zeptej se — nedohledávej
  ho na internetu bez vědomí Pavla a nikdy ho netipuj.
- **Recenze se nevymýšlejí ani nepřepisují** — jen skutečné, se souhlasem autora.
- **Vzhled se řídí `docs/design-policy.md`** (schválená varianta B). Je to závazný zdroj
  pravdy pro barvy, typografii a komponenty. Nezaváděj nový vizuální jazyk; chybí-li pravidlo,
  dopiš ho do policy (přes task), ne potichu do kódu.

## Kontrolní a údržbový plán

_Povaha projektu: **nárazový** (pracuje se ve vlnách, sezónní špičky Vánoce a jaro) ·
rozhodnuto 2026-11-04_

- **CI (format/lint/testy/build):** continuous — na každý PR a push do `main`
- **Bezpečnost & závislosti (`npm audit`, `npm outdated`):** event-triggered — v rámci preflightu
- **Preflight připravenosti:** event-triggered — před nasazením a před sezónou (listopad, březen)
- **Aktuálnost tech/modelů:** při preflightu
- **Audit oprávnění (vibe-secure):** on-demand
- **Soulad dokumentace s realitou:** při uzavření každého sprintu

Žádné crony — u nárazového projektu by jen šuměly.

## Git a práce

- `main` = nasazený prototyp (deploy na Pages běží z `main`). Práce na feature větvi.
- **Bez pushe nebo mergeru do `main` bez pokynu uživatele**; merge jen přes PR se zelenou CI.
- Backlog `docs/backlog.md` (statusy ⬜🔵✅🔴⏸️, ID neměnná). Každý sprint končí ověřovacím taskem.
- Commity stručně, prefix `feat:` / `fix:` / `docs:` / `chore:`.
- Definition of Done: AC + format + lint + testy + zelená CI + revize diffu.

## Dokumentace

- Stav a rozhodnutí: `docs/PROJECT_STATE.md` · Backlog: `docs/backlog.md` · Roadmapa: `docs/04-roadmap.md`
- **Design policy (závazná pro vzhled): `docs/design-policy.md`**
- Proces a DoD: `docs/07-process.md` · Review rubrika: `docs/review-rubric.md`
- Bezpečnostní baseline a co zbývá nastavit: `docs/security-baseline.md`
- Architektura `docs/03-architecture.md` a UX `docs/02-ux-spec.md` zatím nevznikly — UX
  a strukturu nese zadání v Claude projektu.
