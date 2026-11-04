# Želvy ČR — statický prototyp webu

Pracovní prototyp nového webu **zelvycr.cz** (rodinný chov suchozemských želv Haltufovi).
Postaveno na [Eleventy](https://www.11ty.dev/), hostováno na GitHub Pages.

> **Tohle není ostrý web.** Je to dočasná pracovní verze pro schválení struktury, obsahu
> a designu. Konečný web (statická část + e-shop) vzniká souběžně na Shoptetu a tenhle
> prototyp později nahradí. Prototyp je proto `noindex` — nesmí konkurovat běžícímu
> zelvycr.cz ve vyhledávání.

## Spuštění

```bash
npm install
npm run dev     # http://localhost:8080
```

## Příkazy

| Příkaz                 | Co dělá                       |
| ---------------------- | ----------------------------- |
| `npm run dev`          | lokální server s watchem      |
| `npm run build`        | build do `dist/`              |
| `npm run lint`         | eslint                        |
| `npm run format`       | prettier --write              |
| `npm run format:check` | kontrola formátu (brána v CI) |
| `npm test`             | vitest                        |

## Nasazení

Push do `main` spustí `.github/workflows/deploy.yml` → build → GitHub Pages.
Web běží v podadresáři `/<repo>/`, proto **všechny interní odkazy přes filtr `url`**:
`{{ "/o-nas/" | url }}`. Hodnotu `PATH_PREFIX` dodává `actions/configure-pages`.

Jednorázové zapnutí: **Settings → Pages → Source: GitHub Actions**.

## Dokumentace

| Soubor                                                   | Obsah                                                  |
| -------------------------------------------------------- | ------------------------------------------------------ |
| [`CLAUDE.md`](CLAUDE.md)                                 | pravidla a guardraily pro Claude Code — **začni tady** |
| [`docs/PROJECT_STATE.md`](docs/PROJECT_STATE.md)         | aktuální fáze, rozhodnutí, otevřené otázky             |
| [`docs/backlog.md`](docs/backlog.md)                     | sprinty a úkoly                                        |
| [`docs/04-roadmap.md`](docs/04-roadmap.md)               | Now / Next / Later                                     |
| [`docs/07-process.md`](docs/07-process.md)               | pipeline, DoD, kontrolní plán                          |
| [`docs/review-rubric.md`](docs/review-rubric.md)         | rubrika pro revizi diffu                               |
| [`docs/security-baseline.md`](docs/security-baseline.md) | bezpečnostní baseline a co zbývá nastavit              |

Zadání webu (persony, strategie, specifikace 25 stránek) žije v Claude projektu „Zelvy CR".

## Struktura

```
src/
  _data/        site.json (kontakty, telefon), navigace.json
  _includes/
    layouts/    base.njk
    partials/   header, footer, cta, sticky-call
  assets/css/   style.css — jediný stylesheet, tokeny v :root
  static/       robots.txt, .nojekyll → kopíruje se do kořene dist/
lib/filtry.js   čisté funkce registrované jako Eleventy filtry
test/           vitest
```
