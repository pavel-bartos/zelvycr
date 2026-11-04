# Želvy ČR (zelvycr-web) — Backlog

_Last updated: 2026-11-04 | Sprint: 4 aktivní (Galerie — technická kostra) · Sprinty 1–3 ✅ · archiv v `docs/backlog-archive.md`_

Backlog píše Claude (šéf vývoje), implementaci dělá Claude Code. Každý kódovací task má
**Claude Code prompt** a odvolává se na `docs/design-policy.md` (vzhled) a zadání v Claude
projektu (obsah). Fakta o želvách Claude Code **nevymýšlí** — konkrétní hodnoty jsou v tascích.

## Current Sprint — Sprint 4: Galerie (technická kostra)

**Cíl sprintu:** Postavit stránku Galerie jako data-driven mřížku s kategoriemi, zvětšením
a lazy loadingem — připravenou tak, že finální fotky se jen „naládují" do dat, bez přestavby.
Běží paralelně s přípravou obsahu; nezávisí na finálních textech.

| ID       | Task                                                | Size | Priority | Status |
| -------- | --------------------------------------------------- | ---- | -------- | ------ |
| TASK-017 | Galerie (/galerie/) — technická kostra, data-driven | M    | Medium   | ⬜     |
| TASK-024 | Lokální ověření Sprintu 4                           | S    | High     | ⬜     |

---

### TASK-017: Galerie (/galerie/) — technická kostra, data-driven

**Size:** M (3–4 h) · **Status:** ⬜ Pending · **Priority:** Medium
**Goal:** Hotová stránka Galerie, do které se finální fotky jen doplní jako data.

**Acceptance criteria:**

- [ ] `/galerie/` čte seznam fotek z `src/_data/galerie.json` — položky
      `{ soubor, kategorie, popis, alt }`. Přidání fotky = přidání položky + souboru, žádná
      změna šablony.
- [ ] Kategorie dle zadání 4.12: **Želvy · Mláďata a líheň · Zahrada a výběhy · Terária**.
      Filtr/záložky jako progressive enhancement; **bez JS** musí fungovat aspoň nadpisy
      kategorií s kotvami (přenositelnost, design-policy §5).
- [ ] Responzivní mřížka, lazy loading, `width`/`height` u obrázků. Zvětšení po kliknutí:
      baseline = odkaz na plnou velikost (funguje bez JS), lightbox volitelně jako
      progressive enhancement.
- [ ] Dočasně naplněno ~6–10 existujícími chovovými fotkami (ty, co web teď hotlinkuje ze
      `zelvycr.cz`) jako výplň, s komentářem `[VÝPLŇ — finální výběr 40–60 fotek dodá Pavel]`.
- [ ] Případné fotky „Období páření" mají neutrální popisek (zadání 4.12).
- [ ] Design dle `docs/design-policy.md`, 360 px bez vodorovného posouvání, závěrečné CTA
      „Vybrat želvu". Brány zelené.

**Claude Code prompt:**

> Postav stránku Galerie (`/galerie/`) jako data-driven: šablona čte `src/_data/galerie.json`
> (položky `{soubor, kategorie, popis, alt}`) a vykreslí responzivní mřížku s kategoriemi
> Želvy / Mláďata a líheň / Zahrada a výběhy / Terária. Bez JS musí fungovat aspoň kotvy na
> kategorie a odkaz na plnou velikost obrázku; lightbox a filtr dělej jako progressive
> enhancement. Naplň zatím 6–10 existujícími hotlinkovanými chovovými fotkami jako výplň
> (komentář `[VÝPLŇ …]`). Dodrž `docs/design-policy.md` a přenositelnost do Shoptetu (§5).

**Notes:** Finální kurátorský výběr 40–60 fotek a optimalizace na WebP (fotopipeline,
TASK-008) jsou součást grafického sprintu. Tahle kostra na ně jen čeká.

---

### TASK-024: Lokální ověření Sprintu 4

**Size:** S (20–40 min) · **Status:** ⬜ Pending · **Priority:** High
**Goal:** Pavel odklikne, že galerie technicky funguje a je připravená na fotky.

**Jak spustit lokálně:**

> `npm run dev` → otevřít `http://localhost:8080/galerie/`

**Checklist k odkliknutí:**

- [ ] Galerie zobrazuje mřížku fotek rozdělenou do 4 kategorií.
- [ ] Kliknutí na fotku ji zvětší nebo otevře plnou velikost; funguje i s vypnutým JS.
- [ ] Na 360 px žádný vodorovný posun; obrázky se načítají lazy.
- [ ] Je zřejmé, že fotky jsou výplň (`[VÝPLŇ …]`) a finální se jen doplní do
      `src/_data/galerie.json`.
- [ ] Regrese: ostatní stránky fungují; build, lint, format:check a testy zelené.

**Po odkliknutí:**

> otevři PR z feature větve → zelená CI → merge PR.

**Notes:** Manuální task pro Pavla.

---

## ✅ Sprint 3 — Stránky důvěry a Průvodce chovem (uzavřen 2026-11-04)

> Uzavřeno: PR #4 (`feat/sprint-3-duvera-pruvodce`) mergnut do `main`, CI zelená, ověřeno
> Pavlem na produkci. Všechny stránky z navigace a patičky existují. Obsah bude laděn postupně.
> Detail tasků: `docs/backlog-archive.md`.

| ID       | Task                                               | Size | Priority | Status |
| -------- | -------------------------------------------------- | ---- | -------- | ------ |
| TASK-013 | Jak nakoupit (/jak-nakoupit/)                      | M    | High     | ✅     |
| TASK-014 | O nás (/o-nas/) + Kontakty (/kontakty/)            | M    | High     | ✅     |
| TASK-015 | Reklamace a garance + Ochrana osobních údajů       | S    | Medium   | ✅     |
| TASK-016 | Průvodce chovem: rozcestník + 13 article skeletonů | L    | Medium   | ✅     |
| TASK-023 | Ověření Sprintu 3 (Pavel, produkce)                | S    | High     | ✅     |

---

---

## Backlog (Upcoming)

| ID       | Task                                                                                                             | Size | Priority | Status |
| -------- | ---------------------------------------------------------------------------------------------------------------- | ---- | -------- | ------ |
| TASK-018 | Přesměrování 17 starých `.html` adres + kotvy `#6_x` (3.3)                                                       | M    | High     | ⬜     |
| TASK-019 | SEO: sitemap, kanonické adresy, Open Graph, JSON-LD (8.3)                                                        | M    | Medium   | ⬜     |
| TASK-020 | Měření bez cookies + události `click_tel` (8.3/5.5)                                                              | S    | Medium   | ⬜     |
| TASK-008 | Fotopipeline: self-hostované WebP obrázky místo hotlinků na zelvycr.cz                                           | M    | Medium   | ⏸️     |
| TASK-022 | Doplnit `[DOPLNIT]` na detailu zelenavé: náročnost, text „O druhu", věta u T. h. boettgeri (podklady dodá Pavel) | S    | Medium   | ⬜     |

### TASK-008: Fotopipeline — self-hostované optimalizované obrázky

**Size:** M (2–4 h) · **Status:** ⏸️ Deferred · **Priority:** Medium
**Goal:** Nahradit dočasné hotlinky na `zelvycr.cz` vlastními obrázky v repu — optimalizovanými WebP
s rozměry a popisnými alt texty. Web pak nezávisí na starém hostingu a je rychlý.

**Notes:** Odloženo rozhodnutím Pavla 2026-11-04 — hotlinky na zelvycr.cz zatím nevadí, fotopipeline
řešit až v pozdějším sprintu. Fotky v plném rozlišení jsou otevřený bod S4 (přístup k FTP starého
webu nebo manuální stažení). Než to půjde otevřít, Pavel dodá fotky nebo přístup k FTP.

---

## Done ✅

| ID       | Task                                                                                 | Dokončeno  |
| -------- | ------------------------------------------------------------------------------------ | ---------- |
| TASK-000 | Scaffold vibe-process: Eleventy, CI, deploy na Pages, docs, bezpečnostní baseline    | 2026-11-04 |
| TASK-001 | Design policy `docs/design-policy.md` z varianty B (tokeny, komponenty, přístupnost) | 2026-11-04 |
| TASK-002 | Design systém: tokeny, fonty a globální chrome podle varianty B                      | 2026-11-04 |
| TASK-003 | Datový model druhů (`src/_data/druhy.json`)                                          | 2026-11-04 |
| TASK-004 | Úvodní stránka podle 4.1 + varianty B                                                | 2026-11-04 |
| TASK-005 | Stránka „Želvy na prodej" podle 4.2 + varianty B                                     | 2026-11-04 |
| TASK-006 | Šablona detailu druhu + stránka „Želva zelenavá" podle 4.3                           | 2026-11-04 |
| TASK-007 | Lokální ověření Sprintu 1 (Pavel)                                                    | 2026-11-04 |
| TASK-009 | Zbylých 5 detailů druhů (vroubená, žlutohnědá, stepní, pardálí, kloubnatá)           | 2026-11-04 |
| TASK-010 | Startovací sady (/startovaci-sady/)                                                  | 2026-11-04 |
| TASK-011 | Příslušenství (/prislusenstvi/) + Terária na míru (/terarium-na-miru/)               | 2026-11-04 |
| TASK-012 | Lokální ověření Sprintu 2 (Pavel)                                                    | 2026-11-04 |
| TASK-013 | Jak nakoupit (/jak-nakoupit/)                                                        | 2026-11-04 |
| TASK-014 | O nás (/o-nas/) + Kontakty (/kontakty/)                                              | 2026-11-04 |
| TASK-015 | Reklamace a garance + Ochrana osobních údajů                                         | 2026-11-04 |
| TASK-016 | Průvodce chovem: rozcestník + 13 article skeletonů                                   | 2026-11-04 |
| TASK-023 | Ověření Sprintu 3 (Pavel, produkce)                                                  | 2026-11-04 |
| TASK-021 | Branch protection na `main` (ruleset: PR + status check + block force push)          | 2026-11-04 |

## Future / Deferred

| ID  | Položka                            | Poznámka                                                      |
| --- | ---------------------------------- | ------------------------------------------------------------- |
| —   | Migrace obsahu na Shoptet          | Konečný web vzniká souběžně; prototyp dodá HTML bloky a texty |
| —   | Vlastní doména pro prototyp        | Jen pokud Pavel bude chtít; jinak zůstává `*.github.io`       |
| —   | Strukturovaná data FAQPage/Article | Smysluplné až s ostrým (indexovaným) nasazením                |

<!-- Pravidla: statusy ⬜🔵✅🔴⏸️; ID TASK-NNN neměnná; každý sprint končí ověřovacím
taskem (Size S, manuální); DoD = AC + format + lint + testy + CI + revize; závěr sprintu
= otevřít PR → zelená CI → merge (nikdy přímý push do main); uzavřený sprint → archiv. -->
