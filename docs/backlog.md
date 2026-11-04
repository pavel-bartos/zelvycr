# Želvy ČR (zelvycr-web) — Backlog

_Last updated: 2026-11-05 | Sprint: 4 🔵 Galerie · detaily archivů v `docs/backlog-archive.md`_

Backlog píše Claude (šéf vývoje), implementaci dělá Claude Code. Každý kódovací task má
**Claude Code prompt** a odvolává se na `docs/design-policy.md` (vzhled) a zadání v Claude
projektu (obsah). Fakta o želvách Claude Code **nevymýšlí** — konkrétní hodnoty jsou v tascích.

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

## 🔵 Sprint 4 — Galerie

> **Cíl:** Stránka `/galerie/` existuje, zobrazuje fotky v responzivní mřížce s popisnými
> alt texty a odkazem na plnou velikost (bez JS lightboxu).

| ID       | Task                                | Size | Priority | Status |
| -------- | ----------------------------------- | ---- | -------- | ------ |
| TASK-017 | Galerie (/galerie/)                 | M    | Medium   | 🔵     |
| TASK-024 | Ověření Sprintu 4 (Pavel, produkce) | S    | High     | ⬜     |

### TASK-017: Galerie (/galerie/)

**Size:** M (2–4 h) · **Status:** 🔵 In Progress · **Priority:** Medium
**Goal:** Postavit stránku `/galerie/` s responzivní fotomřížkou, popisnými alt texty a odkazem
na plnou velikost každé fotky — bez JS lightboxu (policy §5), přenositelné na Shoptet (§5).

**Acceptance criteria:**

- [ ] Stránka `/galerie/` existuje a je dostupná na produkci
- [ ] Fotky jsou v responzivní CSS mřížce (min. 2 sloupce na tabletu, 3 na desktopu, 1 na mobilu)
- [ ] Každá fotka má popisný `alt` text (ne „fotografie N z M", ne prázdný)
- [ ] Každá fotka je odkaz na plnou velikost (`<a href="..."><img …></a>`) — bez JS lightboxu
- [ ] Galerie je rozdělena do pojmenovaných kategorií (dle designu sekce — hairline + kicker)
- [ ] Nový `tel:` odkaz v CTA pruhu má třídu `js-tel-galerie`
- [ ] Stránka je v navigaci nebo patičce (dle `navigace.json`)
- [ ] Lint + testy zelené + CI prošla
- [ ] Revize diffu bez kritických nálezů

**Claude Code prompt:**

> Postav stránku `/galerie/` podle `docs/design-policy.md` §7.1 (nová sekce pro galerii) a TASK-017.
> Data fotek v `src/_data/galerie.json` (vytvořit). Fotky hotlinkují ze starého webu (TASK-008 je
> odložen). Bez JS lightboxu — každá fotka je `<a href="…"><img …></a>`. CSS třídy
> `.galerie-stranka`, `.galerie-kategorie`, `.galerie-mrizka`, `.galerie-polozka` do `style.css`.
> Specifikaci komponenty dopsat do `docs/design-policy.md` §7 (nová podsekce). Číslo telefonu
> vždy z `site.json`. Nový `tel:` odkaz s třídou `js-tel-galerie`.

**Notes:** Fotky jsou dočasné hotlinky ze `zelvycr.cz` — TASK-008 (fotopipeline) je ⏸️ Deferred.
Výběr 40–60 nejlepších fotek je otevřený bod 8 zadání; zatím použít dostupné foto-URL z
`detailyDruhu.json` a co najdeme na starém webu. Novou komponentu `.galerie-mrizka` zapiš do
design-policy.md.

---

### TASK-024: Lokální ověření Sprintu 4 — Galerie

**Size:** S (30–60 min) · **Status:** ⬜ Pending · **Priority:** High
**Goal:** Uživatel na běžící aplikaci odklikne, že sprint splnil cíl, a teprve pak se nasazuje.

**Jak spustit lokálně:**

> `npm run dev`

**Checklist k odkliknutí:**

- [ ] Přejdi na `/galerie/` — stránka se načte bez chyby
- [ ] Fotky jsou zobrazeny v mřížce (ne za sebou v řadě)
- [ ] Každá fotka je klikatelná a otevírá plnou velikost (nový tab nebo totéž okno)
- [ ] Alt texty jsou popisné — otevři DevTools, zkontroluj `alt` atribut u 2–3 fotek (nesmí být „fotografie N z M" ani prázdné)
- [ ] Stránka vypadá rozumně na mobilu (zúži prohlížeč na 360 px) — 1 sloupec, žádné vodorovné posouvání
- [ ] Regrese: úvodní stránka, detail zelenavé a Průvodce chovem fungují beze změny

**Po odkliknutí všech bodů:**

> otevři PR z feature větve (`git push -u origin feat/sprint-4-galerie` → `gh pr create`) →
> počkej na zelenou CI → **merge PR** (ne přímý push do main; viz CLAUDE.md).

**Notes:** Manuální task pro uživatele, ne pro Claude Code.

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
