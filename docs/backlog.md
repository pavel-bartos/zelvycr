# Želvy ČR (zelvycr-web) — Backlog

_Last updated: 2026-11-07 | Sprint: 6 ✅ Testovací brána · Sprint 5 ✅ Texty · Sprinty 1–4 ✅ · archiv v `docs/backlog-archive.md`_

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

## ✅ Sprint 4 — Galerie (uzavřen 2026-11-05)

> Uzavřeno: TASK-017 (galerie) mergnuta, TASK-024 ověřena Pavlem. Stránka `/galerie/` je
> data-driven a čeká jen na finální fotky (grafický sprint).

> **Cíl:** Stránka `/galerie/` existuje, zobrazuje fotky v responzivní mřížce s popisnými
> alt texty a odkazem na plnou velikost (bez JS lightboxu).

| ID       | Task                                | Size | Priority | Status |
| -------- | ----------------------------------- | ---- | -------- | ------ |
| TASK-017 | Galerie (/galerie/)                 | M    | Medium   | ✅     |
| TASK-024 | Ověření Sprintu 4 (Pavel, produkce) | S    | High     | ✅     |

### TASK-017: Galerie (/galerie/)

**Size:** M (2–4 h) · **Status:** ✅ Done · **Priority:** Medium
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

## 🔵 Sprint 6 — Testovací brána (aktuální sprint)

**Cíl sprintu:** Rozšířit CI z jednoduché rychlé brány na **vícevrstvou bránu s path-filtrovaným
spouštěním** — obsahové PR neběží zbytečně těžké testy, strukturální PR jsou chráněné e2e,
responzivitou a přístupností. Jeden agregační `gate` job řeší past „přeskočený required check
blokuje merge".

_Běží jako infrastruktura souběžně se Sprintem 5 (texty). Lighthouse/CWV a vizuální regrese
sem NEpatří — ty jsou v nasazovacím sprintu (preflight)._

| ID       | Task                                                               | Size | Priority | Status |
| -------- | ------------------------------------------------------------------ | ---- | -------- | ------ |
| TASK-027 | CI architektura: rychlá brána + strukturální (path filtr) + `gate` | M    | High     | ✅     |
| TASK-028 | Strukturální testy: Playwright e2e smoke + responzivita 360 px     | L    | High     | ✅     |
| TASK-029 | Přístupnost (axe-core) + kontrola odkazů a alt textů               | M    | Medium   | ✅     |
| TASK-030 | Lokální ověření Sprintu 6                                          | S    | High     | ✅     |

---

### TASK-027: CI architektura — rychlá brána + strukturální (path filtr) + agregační `gate`

**Size:** M (2–4 h) · **Status:** ✅ Done (2026-11-07) · **PR:** #33 · **Priority:** High
**Goal:** CI pouští těžké testy jen tam, kde dávají smysl, a merge se nikdy nezasekne na
přeskočeném required checku.

**Acceptance criteria:**

- [ ] CI má tři joby: **`rychla-brana`** (vždy), **`strukturalni`** (podmíněně), **`gate`** (agregace).
- [ ] `rychla-brana` běží na **každý PR**: `format:check`, `lint`, unit (`vitest`), `build`,
      kontrola odkazů a kontrola, že každý `<img>` má `alt` (implementace v TASK-029).
- [ ] `strukturalni` běží **jen když PR mění** `src/_includes/**`, `src/assets/**`, `**/*.njk`,
      `lib/**`, `eleventy.config.js`, `src/_data/**` nebo `.github/workflows/**` (path filtr —
      `paths:` na triggeru nebo `dorny/paths-filter`). Na čistě obsahový/`docs/` PR se přeskočí.
- [ ] Štítek PR **`run-full-suite`** vynutí `strukturalni` i na jinak přeskočeném PR.
- [ ] `gate` job: `needs: [rychla-brana, strukturalni]`, `if: always()`; **uspěje, jen když
      žádný potřebný job neselhal** (přeskočený = OK, failed = ne). Je to **jediný required
      status check** v branch protection.
- [ ] Mapa „cesta → vrstva testů" je zdokumentovaná v komentáři workflow i v `CONTRIBUTING.md`.

**Claude Code prompt:**

> Přestav `.github/workflows/ci.yml` na tři joby: `rychla-brana` (vždy: format:check, lint,
> vitest, build + kroky z TASK-029), `strukturalni` (path filtr na `src/_includes/**`,
> `src/assets/**`, `**/*.njk`, `lib/**`, `eleventy.config.js`, `src/_data/**`,
> `.github/workflows/**`; override štítkem `run-full-suite`; obsahuje testy z TASK-028/029)
> a `gate` (`needs: [rychla-brana, strukturalni]`, `if: always()`, selže jen při reálném
> selhání potřebného jobu, ne při skipu). Zdokumentuj mapu cest do komentáře workflow
> a do `CONTRIBUTING.md`. Nic nerozbij — stávající kroky se jen přesunou do `rychla-brana`.

**Notes:** ⚠️ **Akce pro Pavla (sběr povolení předem):** po mergi tohohle PR je potřeba
v branch protection ruleset **změnit required status check z `check` na `gate`** (Settings →
Rules → ruleset → Require status checks). Jinak zůstane vyžadovaný starý `check`, který už
nebude existovat, a merge se zablokuje. Naveď Pavla v okamžiku, kdy PR půjde do review.

---

### TASK-028: Strukturální testy — Playwright e2e smoke + responzivita 360 px

**Size:** L (4–6 h) · **Status:** ✅ Done (2026-11-07) · **PR:** #33 · **Priority:** High
**Goal:** Automaticky ověřit, že se web načítá, ovládací prvky fungují a nic se neláme na mobilu.

**Acceptance criteria:**

- [ ] Playwright (chromium) nainstalovaný, skript `npm run test:e2e`, zapojený do jobu
      `strukturalni` (headless).
- [ ] **Smoke:** úvod, Želvy na prodej, jeden detail druhu, jeden článek a Kontakt se načtou
      (200, existuje `<h1>`); hlavní menu má 6 položek; `tel:` odkazy mají tvar
      `tel:+420774579582` a třídu `js-tel-*`; FAQ `<details>` jde otevřít; sticky „Zavolat"
      je na mobilním viewportu viditelná.
- [ ] **Responzivita:** na šířce 360 px žádný vodorovný posun (`scrollWidth <= clientWidth`)
      na úvodu, Želvy na prodej a jednom článku.
- [ ] Testy běží proti produkčnímu buildu (`npm run build` → lokální server → test), ne proti
      dev serveru s watchem.
- [ ] Testy ověřují **strukturu, ne konkrétní copy** — změna textu je nerozbije.

**Claude Code prompt:**

> Přidej Playwright e2e testy (chromium) podle AC v TASK-028: smoke na 5 klíčových stránkách
>
> - kontrola menu, `tel:` tvaru a tříd, FAQ `<details>`, sticky na mobilu; responzivita 360 px
>   bez vodorovného posunu. Spouštěj proti `npm run build` výstupu přes lokální server. Zapoj do
>   jobu `strukturalni` (TASK-027). Testuj strukturu/chování, ne konkrétní texty.

**Notes:** Blokováno TASK-027 (job `strukturalni`). Používej selektory odolné vůči změně obsahu
(role, třídy `js-tel-*`, `<details>`), ne text copy.

---

### TASK-029: Přístupnost (axe-core) + kontrola odkazů a alt textů

**Size:** M (3–4 h) · **Status:** ✅ Done (2026-11-07) · **PR:** #33 · **Priority:** Medium
**Goal:** Automaticky hlídat WCAG 2.2 AA a rozbité odkazy — i u obsahových PR tu levnou část.

**Acceptance criteria:**

- [ ] **axe-core** (přes Playwright) na úvodu, Želvy na prodej, detailu druhu a článku:
      žádné porušení úrovně `serious`/`critical`. Vědomé výjimky zdokumentované v testu.
      Běží v jobu `strukturalni`.
- [ ] **Kontrola odkazů** na `dist` buildu (linkinator/lychee nebo vlastní skript): žádný
      rozbitý interní odkaz; respektuje pathPrefix. Běží v `rychla-brana` (levné, chytá
      i obsahové PR).
- [ ] **Kontrola alt textů:** každý `<img>` v buildu má neprázdný `alt` (nebo vědomě `alt=""`
      u dekorativních). Běží v `rychla-brana`.

**Claude Code prompt:**

> Přidej axe-core a11y testy (Playwright) na 4 klíčové stránky do jobu `strukturalni` (fail na
> serious/critical). Do jobu `rychla-brana` přidej kontrolu interních odkazů na `dist` buildu
> (respektuj pathPrefix) a kontrolu, že každý `<img>` má `alt`. Vědomé výjimky zdokumentuj.

**Notes:** Blokováno TASK-027. Odkazy a alt jdou do rychlé brány schválně — obsahový PR může
rozbít odkaz nebo zapomenout alt, a tohle to chytne levně bez e2e.

---

### TASK-030: Lokální ověření Sprintu 6

**Size:** S (30–60 min) · **Status:** ✅ Done (2026-11-07) · **Priority:** High
**Goal:** Pavel ověří, že brána funguje: obsahový PR neběží strukturální testy, kódový ano,
`gate` správně hlídá merge.

**Jak spustit lokálně:**

> `npm test` (unit) · `npm run test:e2e` (Playwright) · `npm run build` a kontrola odkazů

**Checklist k odkliknutí:**

- [ ] Lokálně projdou unit, e2e i a11y testy; build zelený.
- [ ] Zkušební **obsahový** PR (změna jen v `docs/` nebo článku) má `strukturalni` **přeskočený**
      a `gate` přesto zelený → jde mergnout.
- [ ] Zkušební **kódový** PR (změna v šabloně/CSS) má `strukturalni` **spuštěný**.
- [ ] Štítek `run-full-suite` vynutí strukturální testy i na obsahovém PR.
- [ ] Required status check v ruleset je **přepnutý na `gate`** (akce Pavla z TASK-027).
- [ ] Regrese: běžné PR flow funguje, nic se nezaseklo.

**Po odkliknutí:**

> otevři PR → zelená CI (`gate`) → merge PR.

**Notes:** Manuální task pro Pavla. Součástí je i přepnutí required checku na `gate`.

---

## 🔵 Sprint 5 — Dotažení textového obsahu (běží souběžně, Claude Code na TASK-025)

**Cíl sprintu:** Propsat finální texty copywritera z `docs/obsah/` (zdroj pravdy) do webu
(`src/`). Po sprintu má web reálné texty místo `[DOPLNIT]` placeholderů. Odblokováno dodáním
kompletních textů od copywritera.

| ID       | Task                                                        | Size | Priority | Status |
| -------- | ----------------------------------------------------------- | ---- | -------- | ------ |
| TASK-025 | Propsat finální texty copywritera z `docs/obsah/` do `src/` | L    | Critical | ✅     |
| TASK-026 | Lokální ověření Sprintu 5                                   | S    | High     | ✅     |

---

### TASK-025: Propsat finální texty copywritera z `docs/obsah/` do `src/`

**Size:** L (4–6 h) · **Status:** ✅ Done (2026-11-07) · **PR:** #32 · **Priority:** Critical
**Goal:** Web používá finální texty copywritera místo placeholderů: 13 článků má tělo, detail
zelenavé je doplněný (kromě náročnosti) a drobné úpravy z revize jsou provedené.

**Acceptance criteria:**

- [ ] Všech 13 článků `src/pruvodce-chovem/<slug>.md` má tělo z `docs/obsah/pruvodce/<slug>.md`
      (nahrazeno `[DOPLNIT – text článku]`); `cas_cteni` ze zdroje přeneseno do `casCteni`.
- [ ] Značky boxů `::: v-kostce`, `::: z-naseho-chovu`, `::: rada-chovatele` převedeny na HTML
      box komponenty podle `docs/design-policy.md`.
- [ ] Detail zelenavé v `src/_data/detailyDruhu.json` (slug `zelva-zelenava`): `oDruhu`
      a `formy[0].popis` naplněny z `docs/obsah/druhy/zelva-zelenava.md`; **`narocnost` zůstává
      `[DOPLNIT]`** — čeká na potvrzení chovatele.
- [ ] Úpravy z `docs/obsah/navrhy-uprav.md` provedené (alt texty bez číslování u zelenavé
      galerie, oprava postřehu u žlutohnědé, 9 vs 10 druhů, „100+ odchovaných" na O nás,
      náhradní texty prázdných stavů v Jak nakoupit a Kontaktech, portrétní alt texty).
      U bodů `[KLIENT]` provést bezpečnou část, konečné potvrzení nechat na klientovi.
- [ ] **Nevyplněno** (čeká na chovatele, viz `docs/obsah/kontrola-faktu/`): náročnost zelenavé,
      dožití v „Je želva pro mě?", teplota zimoviště (3–6 vs 5–6 °C), potvrzení příloh CITES.
      Pardálí a kloubnatá zůstávají `[KE KONTROLE KLIENTEM]`. Nic nedohledávat ani netipovat.
- [ ] Interní odkazy přes `url` filtr; `tel:` odkazy s třídou `js-tel-<umístění>`; tlačítka
      min. 44 × 44 px; alt texty česky a popisné; žádný vodorovný posun na 360 px; `noindex`
      zapnutý; vzhled dle `docs/design-policy.md`.
- [ ] `format:check` + `lint` + testy + `build` zelené; PR do `main` přes zelenou CI.

**Claude Code prompt** (dodal copywriter, ověřeno šéfem vývoje — zdroje i cíle existují na `main`):

> **ÚKOL:** Propsat finální texty copywritera z `docs/obsah/` do webu (`src/`).
>
> **KONTEXT:** Copywriter dodal finální texty do `docs/obsah/` (zdroj pravdy). Na webu ale
> pořád nejsou: 13 článků má v `src/pruvodce-chovem/*.md` prázdné tělo (`[DOPLNIT – text
článku]`) a detail zelenavé má v `src/_data/detailyDruhu.json` 3× `[DOPLNIT]`. Přenes texty
> ze zdroje do `src/`. Přečti si napřed `docs/obsah/HANDOFF.md` (mapa implementace)
> a `docs/obsah/README.md` (stylová příručka).
>
> **VLASTNICTVÍ (dle `CONTRIBUTING.md`):** Pracuj na větvi `feat/propsat-finalni-texty`,
> PR do `main`, zelená CI. Píšeš do `src/`. `docs/obsah/` je copywriterův zdroj pravdy — čti
> z něj, **needituj ho**. Interní odkazy vždy přes filtr `url`. Fakta nevymýšlej. `noindex`
> nech zapnutý.
>
> **CO UDĚLAT:**
>
> 1. **13 článků průvodce** — vlož těla z `docs/obsah/pruvodce/<slug>.md` do
>    `src/pruvodce-chovem/<slug>.md` (nahraď `[DOPLNIT – text článku]`). Zachovej zapojení
>    hlavičky; z hlavičky zdroje přenes `cas_cteni` → `casCteni`. Značky boxů `::: v-kostce`,
>    `::: z-naseho-chovu`, `::: rada-chovatele` převeď na HTML box komponenty podle
>    `docs/design-policy.md`. Interní odkazy přes `url` filtr.
>
> 2. **Detail zelenavé** — z `docs/obsah/druhy/zelva-zelenava.md` naplň
>    `src/_data/detailyDruhu.json`, slug `zelva-zelenava`: `oDruhu` (odstavce ze sekce
>    „O druhu"), `formy[0].popis` (T. h. boettgeri = „Nejběžnější forma. Menší typy kolem
>    12–15 cm, makedonské přes 25 cm."). `narocnost` NECH jako `[DOPLNIT]` — čeká na potvrzení
>    chovatele (viz `kontrola-faktu/druhy.md`), nevyplňuj návrh natvrdo.
>
> 3. **Úpravy pracovních textů z revize** — proveď změny z `docs/obsah/navrhy-uprav.md`
>    v příslušných `src` souborech (alt texty bez číslování u zelenavé galerie, oprava postřehu
>    u žlutohnědé, 9 vs 10 druhů, „100+ odchovaných" na O nás, náhradní texty prázdných stavů
>    v Jak nakoupit a Kontaktech, portrétní alt texty). U bodů označených `[KLIENT]` proveď
>    bezpečnou část (např. odstraň číslování, použij znění ze zdroje) a konečné potvrzení nech
>    na klientovi — neblokuj se tím.
>
> **CO NECHAT BÝT (čeká na chovatele — viz `docs/obsah/kontrola-faktu/`):** Nevyplňuj a nech
> jako placeholder: náročnost zelenavé, dožití v „Je želva pro mě?", teplotu zimoviště (3–6 vs
> 5–6 °C), potvrzení příloh CITES. Texty pardálí a kloubnaté nech se značkou
> `[KE KONTROLE KLIENTEM]`. Nic z toho nedohledávej ani netipuj.
>
> **GUARDRAILY:** `tel:` odkazy s třídou `js-tel-<umístění>`; tlačítka min. 44 × 44 px; alt
> texty česky a popisné; žádný vodorovný posun na 360 px; vzhled dle `design-policy`.
>
> **DEFINITION OF DONE:** Všech 13 článků má tělo, zelenavá doplněná (kromě náročnosti), úpravy
> z revize provedené; `format:check` + `lint` + testy + `build` zelené; PR do `main` přes
> zelenou CI.

**Notes:** Zdroj `docs/obsah/` i cílové soubory (`src/pruvodce-chovem/*.md`,
`src/_data/detailyDruhu.json`) jsou ověřeně na `main`. Task není blokovaný. Fakta čekající na
chovatele jsou vědomě ponechaná jako placeholdery — nedolaďovat je v tomhle tasku.

---

### TASK-026: Lokální ověření Sprintu 5

**Size:** S (20–40 min) · **Status:** ✅ Done (2026-11-07) · **Priority:** High
**Goal:** Pavel odklikne, že web používá finální texty a placeholdery zbyly jen tam, kde se čeká na chovatele.

**Jak spustit lokálně:**

> `npm run dev` → projít `/pruvodce-chovem/` a pár článků, `/zelva-zelenava/`, O nás, Kontakt

**Checklist k odkliknutí:**

- [ ] Všech 13 článků má reálné tělo (žádné `[DOPLNIT – text článku]`), boxy se zobrazují správně.
- [ ] Detail zelenavé má text „O druhu" a popis formy; náročnost zůstává placeholder.
- [ ] Úpravy z revize jsou vidět (alt texty bez číslování, 9 druhů konzistentně, „100+ odchovaných").
- [ ] Zbylé placeholdery jsou jen ty čekající na chovatele; pardálí/kloubnatá mají `[KE KONTROLE KLIENTEM]`.
- [ ] Na 360 px žádný vodorovný posun; `tel:` odkazy fungují.
- [ ] Regrese: ostatní stránky beze změny; build, lint, format:check a testy zelené.

**Po odkliknutí:**

> otevři PR z `feat/propsat-finalni-texty` → zelená CI → merge PR.

**Notes:** Manuální task pro Pavla.

---

## 🔧 Revize v1 — připomínky k běžící verzi (2026-11-05)

Dev připomínky z revize běžící produkce. Část je nezávislá (dá se hned), část **čeká na
rozhodnutí designera** (implementuje se, až designer dodá vizuál do `docs/design-policy.md`).
Souběžně běží copywriterské a designérské připomínky (mimo repo → prompty).

| ID       | Task                                                                             | Size | Priority | Status |
| -------- | -------------------------------------------------------------------------------- | ---- | -------- | ------ |
| TASK-034 | Navigace: Galerie do hlavního menu + v patičce přesun do sekce Informace         | S    | High     | ✅     |
| TASK-035 | Opravit duplicitní žluté CTA boxy — na stránce vždy jen jeden                    | S    | High     | ✅     |
| TASK-036 | Responzivní menu: hamburger < ~1000 px (CSS-only) + CTA doprava při zalomení     | M    | High     | ✅     |
| TASK-037 | Responzivní patička: mobil zmenšit, odkazy do rozklikávacích sekcí               | M    | Medium   | ✅     |
| TASK-038 | O nás: opravit „šišaté" fotky (poměr/object-fit) + náhled galerie s proklikem    | M    | Medium   | ✅     |
| TASK-039 | Hero header homepage — papírové sklo + oprava tlačítek (design-policy §8)        | S    | Medium   | ✅     |
| TASK-040 | Tabulka /zelvy-na-prodej/ — scroll affordance (design-policy §8)                 | S    | Medium   | ✅     |
| TASK-041 | Práce s fotkami v průvodci (výpis + detail článku) (design-policy §8)            | M    | Medium   | ✅     |
| TASK-042 | O nás — záhlaví (grid 5/7) + portréty 3:4 (design-policy §8)                     | S    | Low      | ✅     |
| TASK-044 | Startovací sady — oprava textu (překlep „już"→„už" + přejmenování nadpisu)       | XS   | High     | ✅     |
| TASK-046 | Propsat poslední copywriterovy úpravy z `docs/obsah/` do `src/` (odkazy + O nás) | S    | High     | ✅     |
| TASK-043 | Ověření Revize v1 (Pavel, produkce)                                              | S    | High     | ✅     |

---

### TASK-034: Navigace — Galerie do menu + patička do sekce Informace

**Size:** S · **Status:** ✅ Done (2026-11-06) · **Priority:** High
**Goal:** Galerie je dostupná z hlavního menu; patička má logické sekce.
**Acceptance criteria:**

- [ ] Položka **Galerie** přidána do hlavního menu (`src/_data/navigace.json` / `header.njk`).
- [ ] V patičce jsou **Jak nakoupit, Galerie, O nás** přesunuty do sekce **Informace**.
- [ ] Odkazy přes `url` filtr; 360 px OK; brány zelené.
      **Claude Code prompt:**

> Přidej Galerii do hlavního menu a v patičce (`footer.njk`) přesuň Jak nakoupit, Galerie
> a O nás do sekce Informace. Dodrž `docs/design-policy.md` (§3.2, §3.11).

---

### TASK-035: Opravit duplicitní žluté CTA boxy

**Size:** S · **Status:** ✅ Done (2026-11-06) · **Priority:** High
**Goal:** Na každé stránce je právě jeden závěrečný CTA pruh.
**Acceptance criteria:**

- [ ] Příčina: `base.njk` vkládá `cta.njk` a zároveň ho vkládají i jednotlivé stránky
      (`o-nas.njk`, `startovaci-sady.njk` a další) → vzniká dvojitý CTA.
- [ ] Sjednotit: CTA se vkládá na **jednom místě** (buď layout, nebo stránka), nikdy dvakrát.
- [ ] Projít všechny stránky, ověřit že je vždy jeden; brány zelené.
      **Claude Code prompt:**

> Najdi, proč se na mnoha stránkách zobrazují dva žluté CTA pruhy (`cta.njk` je vkládán
> v `base.njk` i v jednotlivých `*.njk`). Zvol jedno místo vkládání a odstraň duplicity tak,
> aby byl na každé stránce právě jeden závěrečný CTA. Ověř napříč všemi stránkami.

---

### TASK-036: Responzivní menu — hamburger + zarovnání CTA

**Size:** M · **Status:** ✅ Done (2026-11-06) · **Priority:** High
**Goal:** Menu je na úzkých šířkách použitelné a nerozsype se.
**Acceptance criteria:**

- [ ] Pod ~1000 px (kde menu padá pod logo) se hlavní menu přepne na **hamburger**.
- [ ] Hamburger je **CSS-only** (bez JS jako podmínky — `<details>`/checkbox hack), ať drží
      no-JS baseline a přenositelnost (design-policy §5). JS jen jako progressive enhancement.
- [ ] Když se menu zalomí na víc řádků, tlačítko „Zavolat" se zarovná **doprava**.
- [ ] 360 px bez vodorovného posunu; cílové plochy ≥ 44×44 px; brány zelené.
      **Claude Code prompt:**

> Udělej hlavní menu responzivní: pod ~1000 px přepni na hamburger (CSS-only, bez JS jako
> podmínky — `<details>` nebo checkbox), při zalomení zarovnej CTA „Zavolat" doprava. Dodrž
> design-policy (§3.2, §4, §5). Doplň do policy §3.2 pravidlo pro mobilní menu.

---

### TASK-037: Responzivní patička — rozklikávací sekce na mobilu

**Size:** M · **Status:** ✅ Done (2026-11-07) · **PR:** #32 · **Priority:** Medium
**Goal:** Patička na mobilu nezabírá celou obrazovku.
**Acceptance criteria:**

- [ ] Na mobilu je patička menší a odkazy jsou schované do **rozklikávacích sekcí**
      Nabídka / Průvodce chovem / Informace (`<details>`, bez JS).
- [ ] Na desktopu zůstává patička jako teď; 360 px OK; brány zelené.
      **Claude Code prompt:**

> Na mobilu zmenši patičku a odkazy schovej do rozklikávacích sekcí (`<details>`): Nabídka,
> Průvodce chovem, Informace. Desktop beze změny. Dodrž design-policy (§3.11, §5).

---

### TASK-038: O nás — šišaté fotky + náhled galerie

**Size:** M · **Status:** ✅ Done (2026-11-07) · **PR:** #32 · **Priority:** Medium
**Goal:** Fotky na O nás nejsou deformované a stránka vede do galerie.
**Acceptance criteria:**

- [ ] „Šišaté" fotky opraveny — správný poměr stran (`object-fit: cover` + `aspect-ratio`),
      žádné roztažení.
- [ ] V sekci **„Jak u nás želvy žijí"** přibyl náhled galerie: několik fotek z jednotlivých
      kapitol galerie s proklikem do `/galerie/` (data z `src/_data/galerie.json`).
- [ ] 360 px OK; alt texty česky; brány zelené.
      **Claude Code prompt:**

> Na stránce O nás oprav deformované fotky (object-fit/aspect-ratio) a do sekce „Jak u nás
> želvy žijí" přidej náhled galerie — pár fotek z kapitol `galerie.json` s proklikem do
> `/galerie/`. Umístění/velikost hlavní fotky řeší TASK-042 (designer) — tady jen deformaci.

---

### TASK-039: Hero header homepage — papírové sklo + oprava tlačítek

**Size:** S · **Status:** ✅ Done (2026-11-06) · **Priority:** Medium
**Goal:** Hero panel není černý blok, ale světlé papírové sklo; tlačítka v souladu s policí.
**Acceptance criteria:**

- [ ] `.hero__panel` = papírové sklo dle `docs/design-policy.md` §8 (bod 1): tokeny `--hero-sklo-*`,
      `backdrop-filter`, fallback `@supports`, na mobilu plný papír. Text tmavý, nahoře `.rule`.
- [ ] Tlačítka: jantarové „Zavolat" (`js-tel-hero`) + tmavé `.btn--tma` „Vybrat želvu"; odstranit
      `kick--tma` a `.hero__panel .btn--obrys { color: papír }`.
- [ ] Kontrast dle §8 (krytí 85 % neměnit); bez JS; 360 px OK; brány zelené.
      **Claude Code prompt:**

> Implementuj hero panel jako papírové sklo a oprav tlačítka přesně podle `docs/design-policy.md`
> §8 (bod 1) a §3.3 — CSS je v §8. Reference: mockup `navrhy/B-pripominky-1-4.html`.

---

### TASK-040: Tabulka /zelvy-na-prodej/ — scroll affordance

**Size:** S · **Status:** ✅ Done (2026-11-07) · **PR:** #32 · **Priority:** Medium · **Odblokováno** (design dodán)
**Goal:** Pozná se, že porovnávací tabulka se posouvá, a vypadá to záměrně.
**Acceptance criteria:**

- [ ] Obal `.tabulka-blok` + nápověda „← Posuňte →" + lepivý 1. sloupec + okrajový přechod
      (container query 61,25 rem) dle §8 (bod 2) a §3.13. Vše CSS, bez JS.
- [ ] Buňky mají průhledné pozadí; 1. sloupec `tbody` je `<th scope="row">`.
- [ ] Aplikovat i na tabulku na Teráriu na míru (§7.4). 360 px OK; brány zelené.
      **Claude Code prompt:**

> Implementuj scroll affordance porovnávací tabulky podle `docs/design-policy.md` §8 (bod 2)
> a §3.13 — HTML obal, nápověda, lepivý sloupec, okrajový přechod (CSS v §8). Aplikuj i na
> tabulku Terária na míru.

---

### TASK-041: Práce s fotkami v Průvodci chovem (výpis + detail)

**Size:** M · **Status:** ✅ Done (2026-11-07) · **PR:** #32 · **Priority:** Medium · **Odblokováno** (design dodán)
**Goal:** Výpis rubriky i detail článku pracují s fotkami jako hezký výpis na homepage.
**Acceptance criteria:**

- [ ] Fotka článku se čte z **front matter** (`foto`, `fotoAlt`, `fotoPopisek`, `fotoPozice`);
      pole `foto` v `uvod.json → clanky` zrušeno (jeden zdroj) — dle §8 (bod 3).
- [ ] Výpis `/pruvodce-chovem/`: karty `.row--clanek` s náhledy, mřížka 520px, kompaktní náhled
      112×84 v úzkém sloupci, zvýrazněná „Je želva pro mě?" — dle §8 a §3.5.
- [ ] Detail článku: úvodní fotka 3:2 (LCP), fotky v textu, `.clanek-fotky`, pořadí dle §8/§7.5.
- [ ] Přiřazení fotek dle tabulky v §8; pravidlo „zobrazená šířka ≤ nativní šířka". Reálné
      optimalizované fotky řeší grafický sprint (TASK-008) — zatím hotlink dle tabulky.
- [ ] Bez JS; 360 px OK; brány zelené.
      **Claude Code prompt:**

> Implementuj práci s fotkami v Průvodci chovem podle `docs/design-policy.md` §8 (bod 3), §3.5
> a §7.5: fotka článku z front matter (jeden zdroj), výpis rubriky s náhledy + kompaktní náhled
> v úzkém sloupci, detail s úvodní fotkou a `.clanek-fotky`. Přiřazení fotek z tabulky v §8;
> zatím hotlink (lokální až po TASK-008). Alt texty doladí copywriter — prozatím ze zadání/tabulky.

---

### TASK-042: O nás — záhlaví (grid 5/7) + portréty 3:4

**Size:** S · **Status:** ✅ Done (2026-11-07) · **PR:** #32 · **Priority:** Low · **Odblokováno** (design dodán)
**Goal:** Hlavní fotka a portréty na O nás působí záměrně a vyváženě.
**Acceptance criteria:**

- [ ] Záhlaví `.o-nas-uvod` grid 5/7, dole lícující, hlavní fotka = výběhy `/obrazky/zahrada/10.jpg`
      (`figure` + popisek + alt místo `[DOPLNIT]`), H1 `clamp`; mobil text + fotka pod ním — dle §8 (bod 4).
- [ ] Portréty `.karta-osoby` obdélník 3:4 160 px, role mono olivově, tlačítko „Zavolat Jiřímu".
- [ ] `/miniatury/02.jpg` se **nepoužije**. Deformaci (object-fit) obecně řeší TASK-038 — tady layout.
- [ ] Alt texty nahradí `[DOPLNIT]` (koordinace s copywriterem). 360 px OK; brány zelené.
      **Claude Code prompt:**

> Implementuj záhlaví a portréty O nás podle `docs/design-policy.md` §8 (bod 4) a §7.5: grid 5/7
> s fotkou výběhů, portréty 3:4 160 px, role mono. `/miniatury/02.jpg` nepoužívej.

**Assety od klienta (viz §8 / grafický sprint):** lepší portréty Jana a Jiřího (≥ 800×1067 px),
originál `/miniatury/02.jpg`, lepší fotka k článku Vitamíny a minerály.

---

### TASK-044: Startovací sady — oprava textu (překlep + přejmenování)

**Size:** XS · **Status:** ✅ Done (2026-11-06) · **Priority:** High
**Goal:** Opravit překlep a přejmenovat hlavní sadu na stránce Startovací sady.
**Acceptance criteria:**

- [ ] Překlep „Pro toho, kdo już želvu má" → „Pro toho, kdo **už** želvu má" (polské „już" → „už").
- [ ] Nadpis „Startovací sada" → „Startovací sada i s vaší první želvou".
- [ ] Text je v dev-šabloně (`src/startovaci-sady.njk` — ověř umístění); brány zelené.
      **Claude Code prompt:**

> Na stránce Startovací sady oprav překlep „już" → „už" ve větě „Pro toho, kdo už želvu má"
> a přejmenuj nadpis „Startovací sada" na „Startovací sada i s vaší první želvou". Jen tyto
> dvě textové úpravy, nic víc.
> **Notes:** Připomínka z revize; text je v dev-psané šabloně (ne v `docs/obsah/`), proto dev
> task, ne copywriter.

---

### TASK-046: Propsat poslední copywriterovy úpravy z `docs/obsah/` do `src/`

**Size:** S · **Status:** ✅ Done (2026-11-06) · **Priority:** High
**Goal:** Živý web (`src/`) obsahuje copywriterovy úpravy z `docs/obsah/` — interní odkazy
v článcích a vyřešené `[DOPLNIT]` na O nás.
**Acceptance criteria:**

- [ ] Do 7 článků `src/pruvodce-chovem/<slug>.md` přenesen nově přidaný interní odkaz
      z `docs/obsah/pruvodce/<slug>.md` (přes `url` filtr, přirozeně v textu): **chov-na-zahrade,
      pohlavi, registrace-cites, utlum, velikost-a-rust, zelvi-kuriozity, zimovani**. (Zbylých
      6 článků odkaz už mělo.)
- [ ] O nás (`src/o-nas.njk`): `[DOPLNIT: ověřit]` u počtu odchovaných → **„více než 100"**
      (vlastní údaj chovatele, ne vymyšlené); doplnit alt texty `[DOPLNIT – …]` dle
      `docs/obsah/navrhy-uprav.md` (bod E1). **Žádná `[DOPLNIT]` závorka nesmí zůstat na webu.**
- [ ] Startovací sady se tady NEřeší — to je TASK-044.
- [ ] Odkazy přes `url` filtr; brány zelené.
      **Claude Code prompt:**

> Propsat poslední copywriterovy úpravy z `docs/obsah/` do `src/`:
>
> 1. Do 7 článků `src/pruvodce-chovem/{chov-na-zahrade,pohlavi,registrace-cites,utlum,
velikost-a-rust,zelvi-kuriozity,zimovani}.md` přenes nově přidaný interní odkaz z
>    `docs/obsah/pruvodce/<slug>.md` (porovnej docs/obsah vs src; odkaz přes `url` filtr,
>    přirozeně ve větě).
> 2. V `src/o-nas.njk` vyřeš `[DOPLNIT: ověřit]` u počtu odchovaných → „více než 100" a doplň
>    alt texty podle `docs/obsah/navrhy-uprav.md` (bod E1). Žádná `[DOPLNIT]` závorka nesmí
>    zůstat. Startovací sady neřeš (TASK-044). Ověř, že na webu nejsou žádné `[DOPLNIT]`.
>    **Notes:** `docs/obsah/` je copywriterův zdroj — čti, needituj. Zdroj změn: commit `ac25a68`,
>    sekce „Doplněno 5. 11." v `docs/obsah/navrhy-uprav.md`.

---

### TASK-043: Ověření Revize v1

**Size:** S · **Status:** ✅ Done (2026-11-07) · **Priority:** High
**Goal:** Pavel na produkci odklikne, že připomínky jsou vyřešené.
**Checklist k odkliknutí:**

- [ ] Galerie je v menu; patička má Jak nakoupit/Galerie/O nás v Informacích.
- [ ] Žádná stránka nemá dva žluté CTA boxy.
- [ ] Pod ~1000 px je hamburger; při zalomení je CTA vpravo; na 360 px žádný posun.
- [ ] Patička je na mobilu zmenšená s rozklikávacími sekcemi.
- [ ] Fotky na O nás nejsou deformované; je tam náhled galerie s proklikem.
- [ ] Startovací sady: žádný překlep „już"; nadpis zní „Startovací sada i s vaší první želvou".
- [ ] Všech 13 článků průvodce odkazuje zpět na nabídku; na webu nejsou žádné `[DOPLNIT]` (vč. O nás).
- [ ] (po dodání designu) hero header, scroll tabulky, foto-layout průvodce a foto na O nás sedí.
      **Notes:** Manuální task pro Pavla. Design-blokované body (039–042) se ověřují až po jejich dodání.

---

## 🌐 Go-live na subdoménu novy.zelvycr.cz

### TASK-045: Nasazení na vlastní subdoménu novy.zelvycr.cz

**Size:** S · **Status:** ⬜ · **Priority:** High
**Goal:** Web běží na `https://novy.zelvycr.cz/` místo `pavel-bartos.github.io/zelvycr/`.

**Acceptance criteria:**

- [ ] V buildu je `CNAME` soubor (`src/static/CNAME` s obsahem `novy.zelvycr.cz`) — kopíruje se
      do kořene `dist/`, aby Pages držely custom doménu i při deploy přes Actions.
- [ ] **pathPrefix změněn na kořen `/`** — na custom doméně web běží v kořeni, ne v `/zelvycr/`.
      V buildu nejsou žádné odkazy `/zelvycr/...` ani `//`; CSS i interní odkazy fungují z kořene.
- [ ] `deploy.yml`: `PATH_PREFIX` pro custom doménu = `/` (nespoléhat naslepo na `base_path`,
      ověřit/normalizovat, ať nevznikne `//`).
- [ ] `noindex` **zůstává** (robots.txt + meta), dokud Pavel nerozhodne jinak (viz otevřená otázka).
- [ ] Po nasazení: web na `https://novy.zelvycr.cz/` funguje přes HTTPS, žádné rozbité odkazy/CSS.
- [ ] Brány zelené (vč. kontroly odkazů na buildu).

**Claude Code prompt:**

> Nasaď web na custom subdoménu `novy.zelvycr.cz`:
>
> 1. Přidej `CNAME` do buildu — `src/static/CNAME` s jediným řádkem `novy.zelvycr.cz`
>    (kopíruje se do kořene `dist/`).
> 2. Změň pathPrefix na kořen `/` — uprav `deploy.yml` tak, aby `PATH_PREFIX` byl `/`
>    (ne `/zelvycr/`), a ověř, že build nemá žádné odkazy `/zelvycr/` ani `//`. Pozor na to,
>    co vrací `actions/configure-pages` `base_path` u custom domény — výsledek nesmí být `//`.
> 3. `noindex` nech být.
>    Ověř build kontrolou odkazů a aktualizuj `CLAUDE.md` (sekce hosting: web běží na
>    `novy.zelvycr.cz` v kořeni).

**Notes:** Vyžaduje **akce Pavla** (DNS + GitHub Pages) — viz níž. pathPrefix je tu kritický:
špatně = rozbité odkazy a CSS. Přesměrování starých `.html` adres (TASK-018) sem NEpatří — to
se váže na ostrou doménu `www.zelvycr.cz`, ne na tuhle subdoménu.

**Akce Pavla (sběr předem):**

- **DNS** (u správce domény zelvycr.cz): přidat záznam **CNAME `novy` → `pavel-bartos.github.io`**.
- **GitHub**: Settings → Pages → Custom domain → `novy.zelvycr.cz` → Save → počkat na DNS check
  → zapnout **Enforce HTTPS**.

---

## Backlog (Upcoming)

| ID       | Task                                                                                                | Size | Priority | Status |
| -------- | --------------------------------------------------------------------------------------------------- | ---- | -------- | ------ |
| TASK-018 | Přesměrování 17 starých `.html` adres + kotvy `#6_x` (3.3)                                          | M    | High     | ⬜     |
| TASK-019 | SEO: sitemap, kanonické adresy, Open Graph, JSON-LD (8.3)                                           | M    | Medium   | ⬜     |
| TASK-047 | Migrace hostingu na Vedos před finálním nasazením (FTP/SFTP deploy + `.htaccess` 301)               | M    | High     | ⬜     |
| TASK-031 | GTM kontejner + cookie consent (Consent Mode v2, základ) — plán Sprint 9                            | M    | High     | ⬜     |
| TASK-032 | GA4 + Google Ads + Meta Pixel přes GTM (základní, consent-gated, bez custom eventů) — plán Sprint 9 | M    | High     | ⬜     |
| TASK-033 | Ověření měřicího sprintu (GTM Preview, consent chování) — plán Sprint 9                             | S    | High     | ⬜     |
| TASK-008 | Fotopipeline: self-hostované WebP obrázky místo hotlinků na zelvycr.cz                              | M    | Medium   | ⏸️     |

### TASK-008: Fotopipeline — self-hostované optimalizované obrázky

**Size:** M (2–4 h) · **Status:** ⏸️ Deferred · **Priority:** Medium
**Goal:** Nahradit dočasné hotlinky na `zelvycr.cz` vlastními obrázky v repu — optimalizovanými WebP
s rozměry a popisnými alt texty. Web pak nezávisí na starém hostingu a je rychlý.

**Notes:** Odloženo rozhodnutím Pavla 2026-11-04 — hotlinky na zelvycr.cz zatím nevadí, fotopipeline
řešit až v pozdějším sprintu. Fotky v plném rozlišení jsou otevřený bod S4 (přístup k FTP starého
webu nebo manuální stažení). Než to půjde otevřít, Pavel dodá fotky nebo přístup k FTP.

---

### Plán — Sprint 9: Základní měření a reklamní pixely

**Zahájit, až web poběží jako dočasná živá produkce** (Shoptet je výhledově měsíce daleko; do té
doby je tenhle web ostrá produkce). **Rozsah vědomě základní, ne best-practice** — perfektní setup
přijde za ~měsíc na Shoptetu. Nahrazuje původní TASK-020 (cookieless bez lišty); s GTM a reklamou
jdeme jinou cestou.

**TASK-031 — GTM kontejner + cookie consent (Consent Mode v2, základ):** Založit GTM kontejner,
vložit snippet (head + noscript). Jednoduchá cookie lišta: přijmout / odmítnout stejně snadné,
marketingové a analytické tagy se **nespustí před souhlasem**, Consent Mode v2 default „denied"
(`ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`). Minimum nutné, aby web
zjevně neporušoval zásadní pravidla; šedá zóna u jemností (granularita kategorií, dokonalé znění)
přijatelná.

**TASK-032 — Tagy přes GTM (základní, consent-gated):** GA4 (pageviews), Google Ads (základní tag /
conversion linker pro remarketing a kampaně), Meta Pixel (base PageView). **Bez custom konverzních
eventů.** Pozor: **Meta consent je oddělený od Google Consent Mode** — Pixel gatuj vlastní
podmínkou na marketingový souhlas.

**TASK-033 — Ověření (Pavel):** GTM Preview / Tag Assistant: před souhlasem se nespustí nic,
po souhlasu tagy fungují; signály Consent Mode sedí; rychlá právní kontrola textu lišty (zadání 5.6).

**Závislosti — sběr předem (dle pravidla „povolení seber najednou na začátku"):** ID účtů od
Pavla/klienta — **GTM container ID, GA4 Measurement ID, Google Ads tag/conversion ID, Meta Pixel ID**.
Bez nich jde struktura připravit s placeholdery, ale ne dokončit.

**Volitelný levný přídavek:** jeden konverzní event „klik na telefon" (hooky `js-tel-*` už
existují, je to hlavní KPI). Mimo základní rozsah — můžeme přidat, nebo nechat na Shoptet.

---

### TASK-047: Migrace hostingu na Vedos před finálním nasazením

**Size:** M · **Status:** ⬜ · **Priority:** High · **plán — až před produkcí**
**Goal:** Než nový web nahradí starý na produkční doméně, přesunout hosting z GitHub Pages na
**Vedos** (kde běží starý web i doména). Preview do té doby zůstává na GitHub Pages (TASK-045).
**Proč Vedos pro produkci:** `.htaccess` umí serverová **301** (Pages ne — povinné pro staré
`.html` adresy), co-location s doménou a starým webem, Pavel to už platí.

**Ověřeno 2026-11-06:** tarif **NOLIMIT** (3 aliasy, ∞ disk, DB 2 GB), **HTTPS zapnuté zdarma**,
`www` + apex běží na hlavní doméně **bez placeného aliasu** (ověřeno na starém webu). Žádný
add-on ani upgrade tieru netřeba — na migraci stačí jen FTP/SFTP účet pro deploy.

**Akce Pavla (Vedos admin + DNS):**

- ~~Ověřit tarif~~ ✅ hotovo (NOLIMIT stačí). Zbývá ověřit, zda je **SFTP** dostupné (jinak
  FTPS). ([SFTP](https://kb.vedos.cz/en/wms-sftp/))
- Založit doménu/docroot; **DNS A/AAAA na Vedos** (zrušit CNAME na github.io); zapnout HTTPS
  (Let's Encrypt, subdoména = ruční setup).
- Vytvořit FTP/SFTP účet; credentials uložit do **GitHub Secrets**.

**Dev (Claude Code):**

- [ ] GitHub Actions: build (`pathPrefix=/`) → nahrát `dist/` přes **FTPS/SFTP** (ne plaintext FTP)
      z CI; nahradí Pages deploy pro tento web.
- [ ] `.htaccess`: 17× 301 přesměrování starých `.html` adres + `www`/`http` sjednocení
      (navazuje na TASK-018).
- [ ] `noindex`: při skutečném go-live produkce se řeší zrušení (samostatné rozhodnutí Pavla).
- [ ] Ověřit: web na cílové doméně přes HTTPS, žádné rozbité odkazy/CSS.

**Cutover bez výpadku:** nový web nasadit do **vedlejší složky** (nebo staging subdomény) na
**témže** Vedos hostingu, kde běží starý; ověřit; pak jen **přehodit docroot** hlavní domény na
novou složku. Protože oba weby jsou na stejném serveru, je to změna konfigurace, **ne DNS** —
near-instant, bez propagace, bez výpadku, a snadný rollback (docroot zpět). V ten moment se
zapnou 301 v `.htaccess` a řeší se zrušení `noindex`. (Tohle je hlavní důvod, proč produkci na
Vedos — s Pages by šlo jen přes DNS flip s propagačním oknem.)

**Notes:** Rozhodnuto 2026-11-05 — preview na Pages, Vedos až před produkcí. Váže se na TASK-018
(přesměrování) a na rozhodnutí o zrušení `noindex`.

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
| TASK-024 | Ověření Sprintu 4 — Galerie (Pavel)                                                  | 2026-11-05 |
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
