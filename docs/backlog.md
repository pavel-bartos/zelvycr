# Želvy ČR (zelvycr-web) — Backlog

_Last updated: 2026-11-05 | Sprint: 6 🔵 Testovací brána (aktuální) · Sprint 5 🔵 Texty (souběžně) · Sprinty 1–4 ✅ · archiv v `docs/backlog-archive.md`_

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
| TASK-027 | CI architektura: rychlá brána + strukturální (path filtr) + `gate` | M    | High     | ⬜     |
| TASK-028 | Strukturální testy: Playwright e2e smoke + responzivita 360 px     | L    | High     | ⬜     |
| TASK-029 | Přístupnost (axe-core) + kontrola odkazů a alt textů               | M    | Medium   | ⬜     |
| TASK-030 | Lokální ověření Sprintu 6                                          | S    | High     | ⬜     |

---

### TASK-027: CI architektura — rychlá brána + strukturální (path filtr) + agregační `gate`

**Size:** M (2–4 h) · **Status:** ⬜ Pending · **Priority:** High
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

**Size:** L (4–6 h) · **Status:** ⬜ Pending · **Priority:** High
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

**Size:** M (3–4 h) · **Status:** ⬜ Pending · **Priority:** Medium
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

**Size:** S (30–60 min) · **Status:** ⬜ Pending · **Priority:** High
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
| TASK-025 | Propsat finální texty copywritera z `docs/obsah/` do `src/` | L    | Critical | ⬜     |
| TASK-026 | Lokální ověření Sprintu 5                                   | S    | High     | ⬜     |

---

### TASK-025: Propsat finální texty copywritera z `docs/obsah/` do `src/`

**Size:** L (4–6 h) · **Status:** ⬜ Pending · **Priority:** Critical — **první věc dneška**
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

**Size:** S (20–40 min) · **Status:** ⬜ Pending · **Priority:** High
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

## Backlog (Upcoming)

| ID       | Task                                                                                                             | Size | Priority | Status |
| -------- | ---------------------------------------------------------------------------------------------------------------- | ---- | -------- | ------ |
| TASK-018 | Přesměrování 17 starých `.html` adres + kotvy `#6_x` (3.3)                                                       | M    | High     | ⬜     |
| TASK-019 | SEO: sitemap, kanonické adresy, Open Graph, JSON-LD (8.3)                                                        | M    | Medium   | ⬜     |
| TASK-031 | GTM kontejner + cookie consent (Consent Mode v2, základ) — plán Sprint 9                                         | M    | High     | ⬜     |
| TASK-032 | GA4 + Google Ads + Meta Pixel přes GTM (základní, consent-gated, bez custom eventů) — plán Sprint 9              | M    | High     | ⬜     |
| TASK-033 | Ověření měřicího sprintu (GTM Preview, consent chování) — plán Sprint 9                                          | S    | High     | ⬜     |
| TASK-008 | Fotopipeline: self-hostované WebP obrázky místo hotlinků na zelvycr.cz                                           | M    | Medium   | ⏸️     |

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
