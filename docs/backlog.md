# Želvy ČR (zelvycr-web) — Backlog

_Last updated: 2026-11-04 | Sprint: 1 — Vizuální základ a výřez stránek_

Backlog píše Claude (šéf vývoje), implementaci dělá Claude Code. Každý kódovací task má
**Claude Code prompt** a odvolává se na `docs/design-policy.md` (vzhled) a zadání v Claude
projektu (obsah). Fakta o želvách Claude Code **nevymýšlí** — konkrétní hodnoty jsou v tascích.

## Current Sprint — Sprint 1: Vizuální základ a výřez stránek

**Cíl sprintu:** Z neutrální kostry udělat vizuálně hotový web ve variantě B na užším výřezu
stránek (úvod, Želvy na prodej, jeden detail druhu). Výstup slouží ke schválení designu
a obsahu dřív, než se postaví zbývajících ~21 stránek.

| ID       | Task                                                            | Size | Priority | Status |
| -------- | --------------------------------------------------------------- | ---- | -------- | ------ |
| TASK-002 | Design systém: tokeny, fonty a globální chrome podle varianty B | L    | Critical | ⬜     |
| TASK-003 | Datový model druhů (`src/_data/druhy.json`)                     | S    | High     | ⬜     |
| TASK-004 | Úvodní stránka podle 4.1 + varianty B                           | L    | High     | ⬜     |
| TASK-005 | Stránka „Želvy na prodej" podle 4.2 + varianty B                | L    | High     | ⬜     |
| TASK-006 | Šablona detailu druhu + stránka „Želva zelenavá" podle 4.3      | L    | High     | ⬜     |
| TASK-007 | Lokální ověření Sprintu 1                                       | S    | High     | ⬜     |

---

### TASK-002: Design systém — tokeny, fonty a globální chrome podle varianty B

**Size:** L (3–5 h) · **Status:** ⬜ Pending · **Priority:** Critical
**Goal:** Nahradit neutrální kostru vizuálním jazykem varianty B tak, aby každá další stránka
už stavěla v cílovém vzhledu.

**Acceptance criteria:**

- [ ] V `src/assets/css/style.css` jsou všechny tokeny z `docs/design-policy.md` §2 (barvy,
      písma, rozměry) jako custom properties v `:root`. Hodnoty přesně dle policy.
- [ ] Načtena písma Bricolage Grotesque (600, 800) a Public Sans (400, 600, 700) jedním
      `<link>` na Google Fonts s `preconnect`. Mono je systémové.
- [ ] Tlačítka `.btn` + varianty `--tel`, `--tma`, `--obrys` a velké CTA dle §3.1, vč.
      telefonní SVG ikony u `tel:` tlačítek.
- [ ] Globální partials přepsány do varianty B: **hlavička** (logo symbol + „Želvy ČR."
      s olivovou tečkou, menu 6 položek, jantarové „Zavolat"), **oznamovací pruh** akce
      (olivový, zobrazitelný/skrytelný přes data), **patička** (4 sloupce + legal řádek),
      **sticky „Zavolat"** (mobil), **závěrečné CTA** `.cta-pruh` (jantarový pruh, jeden partial).
- [ ] Loga z `src/assets/img/logo/` (symbol do hlavičky, celé do patičky). Pokud soubory
      nejsou v repu, založ `[DOPLNIT logo]` placeholder a nahlas — logo dodá Pavel.
- [ ] Všechny `tel:` odkazy mají třídu `js-tel-<umístění>` dle policy §6; číslo z `site.json`.
- [ ] Žádný JS jako podmínka funkce. 360 px bez vodorovného posouvání. Kontrast a cílové
      plochy dle policy §4.
- [ ] `npm run build`, `npm run lint`, `npm run format:check`, `npm test` zelené.

**Claude Code prompt:**

> Přečti `docs/design-policy.md` celou a `CLAUDE.md`. Přepiš neutrální kostru (layout
> `base.njk` a partials v `src/_includes/partials/`) a `src/assets/css/style.css` do schválené
> varianty B podle policy §2 (tokeny) a §3 (komponenty 3.1, 3.2, 3.10, 3.11, 3.14).
> Nech obsah úvodní stránky zatím jak je — stránky řeší navazující tasky; teď jde o tokeny,
> fonty, tlačítka a globální chrome (hlavička, oznamovací pruh, patička, sticky, CTA pruh).
> Dodrž přenositelnost do Shoptetu (policy §5): komponenty jako CSS třídy, ne inline styly.
> Logo hledej v `src/assets/img/logo/`; když chybí, dej placeholder a napiš to do PR.

**Notes:** Varianta B: `~/Documents/Claude/Projects/Zelvy CR/navrhy/uvod-varianta-b.html`
(referenční mockup; styluj ale třídami, ne inline). Loga zatím v repu nejsou — otevřený bod.

---

### TASK-003: Datový model druhů (`src/_data/druhy.json`)

**Size:** S (1–2 h) · **Status:** ⬜ Pending · **Priority:** High
**Goal:** Jedno místo s daty 6 druhů, ze kterého čerpá úvod, „Želvy na prodej" i detaily.

**Acceptance criteria:**

- [ ] `src/_data/druhy.json` obsahuje 6 druhů v pořadí níže, s poli: `slug`, `nazev`,
      `latinsky`, `velikost`, `chov`, `zimuje`, `registrace`, `stitky` (pole z Byt/Zahrada/
      Začátečník), `dostupnost` (`skladem`/`na-dotaz`/`neni`), `poznamka`, `foto`.
- [ ] Hodnoty **přesně** podle tabulky níže (ze zadání 4.2). Nic nedoplňuj z internetu.
- [ ] Rozpětí ceny se needituje per druh — je globální „500–2 500 Kč" v `site.json`.

**Data (zdroj: zadání 4.2 a 4.3 — přepiš, neměň):**

| slug             | nazev            | latinsky              | velikost                                              | chov                                                         | zimuje                   | registrace                | štítky                   | pozn.                                           |
| ---------------- | ---------------- | --------------------- | ----------------------------------------------------- | ------------------------------------------------------------ | ------------------------ | ------------------------- | ------------------------ | ----------------------------------------------- |
| zelva-zelenava   | Želva zelenavá   | Testudo hermanni      | samci ~12 cm, samice ~15 cm; některé formy přes 25 cm | byt i zahrada                                                | ano                      | ano (CITES, EU příloha A) | Byt, Zahrada, Začátečník | nejoblíbenější, menší formy vhodné do terária   |
| zelva-vroubena   | Želva vroubená   | Testudo marginata     | 30–35 cm                                              | hlavně zahrada                                               | ano                      | ano (CITES, EU příloha A) | Zahrada                  | nezahrabává se, vhodná pro volný chov           |
| zelva-zlutohneda | Želva žlutohnědá | Testudo graeca        | 15–40 cm podle formy                                  | byt i zahrada                                                | ano (podle původu)       | ano (CITES, EU příloha A) | Byt, Zahrada             | velmi kontaktní, pamatuje si lidi               |
| zelva-stepni     | Želva stepní     | Testudo horsfieldii   | samci ~13–20 cm, samice až 25 cm                      | byt i zahrada, plot zapustit do země                         | ano, dlouhé období klidu | ne (CITES, EU příloha B)  | Byt, Zahrada             | hrabe, ve skupině dominantnější                 |
| zelva-pardali    | Želva pardálí    | Stigmochelys pardalis | krunýř 30–50 cm, dospělí 13–20 kg                     | mládě terárium; dospělá velký vytápěný prostor + letní výběh | ne (africký druh)        | ne (CITES, EU příloha B)  | —                        | velký druh — pro chovatele s prostorem          |
| zelva-kloubnata  | Želva kloubnatá  | Kinixys belliana      | krunýř do ~22 cm                                      | terárium, v létě výběh                                       | ne (africký druh)        | ne (CITES, EU příloha B)  | —                        | všežravá, aktivní ráno a večer, kloub v krunýři |

**Foto (dočasně hotlink z webu, v buildu se self-hostuje — řeší pozdější task):** zelenavá
`/foto/foto4.jpg`, vroubená `/foto/foto5.jpg`, žlutohnědá `/foto/foto6.jpg`, stepní
`/foto/foto7.jpg`, pardálí `/foto/foto10.jpg`, kloubnatá `/foto/foto11.jpg` (relativně k
`https://www.zelvycr.cz`).

**Claude Code prompt:**

> Vytvoř `src/_data/druhy.json` přesně podle tabulky v TASK-003. Hodnoty needituj ani
> nedoplňuj — jsou to podklady od chovatele. Dostupnost nastav všem na `na-dotaz`, dokud
> Pavel neřekne jinak. Přidej jednoduchý vitest, že soubor má 6 druhů a každý má povinná pole.

**Notes:** Blokuje TASK-004, 005, 006 (všechny čtou druhy). Dělej hned po TASK-002.

---

### TASK-004: Úvodní stránka podle 4.1 + varianty B

**Size:** L (4–6 h) · **Status:** ⬜ Pending · **Priority:** High
**Goal:** Hotová úvodní stránka ve variantě B — do 10 sekund vysvětlí, kdo jsme, a pošle
k výběru želvy nebo k telefonu.

**Acceptance criteria:**

- [ ] Sekce v pořadí dle zadání 4.1 a mockupu varianty B: hero (foto + tmavý panel, H1
      „Suchozemské želvy z rodinného chovu", 2 CTA) · lišta důvěry (45 / 2 / 9 / 1× měsíčně)
      · „Jakou želvu si vybrat" (6 karet druhů z `druhy.json` + odkaz Porovnat) · startovací
      sada (cena 5 999 Kč) · „Jak u nás koupit" (4 kroky) · tmavá sekce Rodina · „Z průvodce
      chovem" (3 karty článků) · FAQ (5 otázek) · závěrečné CTA.
- [ ] Texty **přesně** ze zadání 4.1 (hero podtitulek, 4 čísla, 5 FAQ otázek a odpovědí).
- [ ] Sekce Akce i Recenze jsou v šabloně, ale **skryté** (akce řídí data, recenze dokud
      nejsou — zadání 4.1 sekce 3 a 8).
- [ ] Title a meta description dle 4.1. Komponenty z design systému (TASK-002), žádný nový
      vizuální jazyk. FAQ jako `<details name="faq">` bez JS.
- [ ] 360 px bez posunu, přístupnost dle policy §4, brány zelené.

**Claude Code prompt:**

> Postav úvodní stránku (`src/index.njk`) podle zadání kap. 4.1 (v Claude projektu „Zelvy CR",
> `claude/zadani-webu-zelvycr.md`) a mockupu `uvod-varianta-b.html`. Skládej z komponent
> design systému (TASK-002) a karet druhů z `src/_data/druhy.json`. Texty ber doslovně ze
> zadání 4.1 — nic nepřepisuj ani nevymýšlej; chybějící označ `[DOPLNIT]`. Akci a recenze dej
> do šablony, ale skryté. Dodrž `docs/design-policy.md`.

**Notes:** Blokováno TASK-002 a TASK-003. Fotky zatím hotlink z webu (optimalizace později).

---

### TASK-005: Stránka „Želvy na prodej" podle 4.2 + varianty B

**Size:** L (4–6 h) · **Status:** ⬜ Pending · **Priority:** High
**Goal:** Rozcestník druhů s porovnávací tabulkou, který pomůže vybrat a dovede k telefonu
nebo na detail druhu.

**Acceptance criteria:**

- [ ] Sekce dle zadání 4.2 a mockupu `B-zelvy-na-prodej.html`: úvod + CTA · „Jak vybrat"
      (3 rady) · výpis 6 druhů s **badge dostupnosti** · **porovnávací tabulka** druhů ·
      ročník mláďat · CITES info box · odkaz na vybavení · závěrečné CTA.
- [ ] Porovnávací tabulka z `druhy.json`, na mobilu posuvná (`overflow-x: auto`), bez posunu
      celé stránky (policy §3.13).
- [ ] Badge dostupnosti 3 stavy dle policy §3.12, vždy s textem.
- [ ] Texty ze zadání 4.2 (úvod, 3 rady, CITES box). Title/description dle 4.2.
- [ ] Stránka na URL `/zelvy-na-prodej/`. Brány zelené, 360 px OK.

**Claude Code prompt:**

> Postav stránku „Želvy na prodej" (`src/zelvy-na-prodej.njk`, permalink `/zelvy-na-prodej/`)
> podle zadání 4.2 a mockupu `B-zelvy-na-prodej.html`. Porovnávací tabulku a karty generuj
> z `src/_data/druhy.json`. Použij badge dostupnosti a tabulku z `docs/design-policy.md`
> (§3.12, §3.13). Texty doslovně ze zadání 4.2. Odkazy na detaily druhů přes filtr `url`.

**Notes:** Blokováno TASK-002, 003.

---

### TASK-006: Šablona detailu druhu + stránka „Želva zelenavá" podle 4.3

**Size:** L (4–6 h) · **Status:** ⬜ Pending · **Priority:** High
**Goal:** Jedna šablona detailu druhu (použitelná pro všech 6) + naplněná pro želvu zelenavou
jako vzor ke schválení.

**Acceptance criteria:**

- [ ] Šablona (Eleventy pagination nebo layout) generuje stránku z `druhy.json`; vytvořena
      zatím jen `/zelva-zelenava/`, ostatní se doplní v dalším sprintu.
- [ ] Sekce dle zadání 4.3: hlavička druhu (galerie 3–5 fotek + panel: H1 „Želva zelenavá
      (Testudo hermanni)", shrnutí, štítky, dostupnost, „Cena 500–2 500 Kč", tlačítko Zavolat)
      · „V kostce" (tabulka parametrů) · „O druhu" · „Formy, které chováme" · „Co bude
      potřebovat" + odkaz na sadu · související články · další druhy · závěrečné CTA.
- [ ] **Nová vizuální pravidla** (galerie+panel, tabulka „V kostce", boxy) se před stavbou
      dopíšou do `docs/design-policy.md §7` a odvodí z existujících komponent — žádný nový
      vizuální jazyk.
- [ ] Data zelenavé z `druhy.json` + formy a text „O druhu" ze zadání 4.3 (tabulka podkladů).
      Co chybí → `[DOPLNIT]`, netipovat.
- [ ] Title/H1 dle 4.3. Brány zelené, 360 px OK.

**Claude Code prompt:**

> Nejdřív doplň do `docs/design-policy.md` §7 pravidla pro detail druhu (galerie + panel,
> tabulka „V kostce", sekce) odvozená z existujících komponent, a nech si je Pavlem/Claudem
> odsouhlasit v PR. Pak postav šablonu detailu druhu podle zadání 4.3 a naplň ji pro želvu
> zelenavou (`/zelva-zelenava/`) z `src/_data/druhy.json` a podkladů 4.3. Formy zelenavé:
> T. h. boettgeri; T. h. hermanni (Toskánsko, tmavší, ~15 cm); boettgeri Chalkidiki (žlutá
> forma). Text „O druhu" přepiš ze zadání, nevymýšlej fakta.

**Notes:** Blokováno TASK-002, 003. Rozšíření na zbylých 5 druhů je samostatný task příštího
sprintu.

---

### TASK-007: Lokální ověření Sprintu 1

**Size:** S (30–60 min) · **Status:** ⬜ Pending · **Priority:** High
**Goal:** Pavel na běžící aplikaci odklikne, že sprint splnil cíl, a teprve pak se merguje.

**Jak spustit lokálně:**

> `npm run dev` → otevřít `http://localhost:8080/`

**Checklist k odkliknutí:**

- [ ] Web vypadá jako varianta B: paleta (papír, oliva, jantarové „Zavolat"), displejová
      typografie, číslované sekce, tenké linky.
- [ ] Hlavička, patička, sticky „Zavolat" na mobilu a závěrečný jantarový CTA pruh jsou všude.
- [ ] Úvodní stránka má všechny sekce ze zadání 4.1; akce a recenze skryté.
- [ ] „Želvy na prodej" má 6 druhů, badge dostupnosti a porovnávací tabulku; tabulka se na
      úzkém okně posouvá, stránka ne.
- [ ] „Želva zelenavá" má galerii, panel s cenou „500–2 500 Kč" a tlačítko Zavolat.
- [ ] Všechna tlačítka „Zavolat" vytáčejí +420 774 579 582 (desktop i mobil).
- [ ] Na šířce 360 px není vodorovný posun; velké nadpisy se lámou pěkně.
- [ ] Žádný `[DOPLNIT]`, který neznáš / nečekáš; žádné vymyšlené údaje o želvách.
- [ ] Regrese: build, lint, format:check a testy jsou zelené (`npm run build && npm run lint && npm test`).

**Po odkliknutí všech bodů:**

> otevři PR z feature větve (`git push -u origin <větev>` → `gh pr create`) → počkej na
> zelenou CI → **merge PR** (ne přímý push do main; viz `docs/07-process.md` a security-baseline).

**Notes:** Manuální task pro Pavla, ne pro Claude Code.

---

## Backlog (Upcoming)

Sestaví se do Sprintu 2+ přes `vibe-backlog`, až bude Sprint 1 schválený.

| ID       | Task                                                                                        | Size | Priority | Status |
| -------- | ------------------------------------------------------------------------------------------- | ---- | -------- | ------ |
| TASK-010 | Rozšířit detail druhu na zbylých 5 druhů (vroubená, žlutohnědá, stepní, pardálí, kloubnatá) | M    | High     | ⬜     |
| TASK-011 | Fotky: stáhnout ze starého webu, zmenšit, WebP/AVIF, self-hostovat, popisné alt texty       | M    | High     | ⬜     |
| TASK-012 | Startovací sady (/startovaci-sady/) podle 4.4                                               | M    | Medium   | ⬜     |
| TASK-013 | Příslušenství (/prislusenstvi/) podle 4.5                                                   | M    | Medium   | ⬜     |
| TASK-014 | Terária na míru (/terarium-na-miru/) podle 4.6                                              | S    | Medium   | ⬜     |
| TASK-015 | Jak nakoupit, O nás, Kontakt, Reklamace a garance (4.10–4.15)                               | L    | Medium   | ⬜     |
| TASK-016 | Průvodce chovem: rozcestník + 13 článků (4.7–4.9)                                           | XL   | Medium   | ⬜     |
| TASK-017 | Galerie (4.12)                                                                              | M    | Low      | ⬜     |
| TASK-018 | Přesměrování 17 starých `.html` adres + kotvy `#6_x` (3.3)                                  | M    | High     | ⬜     |
| TASK-019 | SEO: sitemap, kanonické adresy, Open Graph, JSON-LD (8.3)                                   | M    | Medium   | ⬜     |
| TASK-020 | Měření bez cookies + události `click_tel` (8.3/5.5)                                         | S    | Medium   | ⬜     |
| TASK-021 | Zapnout GitHub Pages + branch protection na `main` (Pavel)                                  | S    | High     | ⬜     |

## Done ✅

| ID       | Task                                                                                 | Dokončeno  |
| -------- | ------------------------------------------------------------------------------------ | ---------- |
| TASK-000 | Scaffold vibe-process: Eleventy, CI, deploy na Pages, docs, bezpečnostní baseline    | 2026-11-04 |
| TASK-001 | Design policy `docs/design-policy.md` z varianty B (tokeny, komponenty, přístupnost) | 2026-11-04 |

## Future / Deferred

| ID  | Položka                            | Poznámka                                                      |
| --- | ---------------------------------- | ------------------------------------------------------------- |
| —   | Migrace obsahu na Shoptet          | Konečný web vzniká souběžně; prototyp dodá HTML bloky a texty |
| —   | Vlastní doména pro prototyp        | Jen pokud Pavel bude chtít; jinak zůstává `*.github.io`       |
| —   | Strukturovaná data FAQPage/Article | Smysluplné až s ostrým (indexovaným) nasazením                |

<!-- Pravidla: statusy ⬜🔵✅🔴⏸️; ID TASK-NNN neměnná; každý sprint končí ověřovacím
taskem (Size S, manuální); DoD = AC + format + lint + testy + CI + revize; závěr sprintu
= otevřít PR → zelená CI → merge (nikdy přímý push do main); uzavřený sprint → archiv. -->
