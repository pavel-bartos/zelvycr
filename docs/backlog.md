# Želvy ČR (zelvycr-web) — Backlog

_Last updated: 2026-11-04 | Sprint: 3 (aktivní) · Sprint 2 ✅ uzavřen, detail v `docs/backlog-archive.md`_

Backlog píše Claude (šéf vývoje), implementaci dělá Claude Code. Každý kódovací task má
**Claude Code prompt** a odvolává se na `docs/design-policy.md` (vzhled) a zadání v Claude
projektu (obsah). Fakta o želvách Claude Code **nevymýšlí** — konkrétní hodnoty jsou v tascích.

## Current Sprint — Sprint 3: Stránky důvěry a Průvodce chovem

**Cíl sprintu:** Všechny stránky z navigace i patičky existují a jsou přístupné. Obsah je
skeleton — reálné texty ze zadání 4.10–4.15; `[DOPLNIT]` tam, kde obsah teprve doladíme.
Po Sprintu 3 nevede žádný odkaz na 404.

_Zahájen 2026-11-04 po uzavření Sprintu 2 (PR #3 mergnut, TASK-012 ověřen Pavlem).
Detail Sprintu 2: `docs/backlog-archive.md`._

| ID       | Task                                               | Size | Priority | Status |
| -------- | -------------------------------------------------- | ---- | -------- | ------ |
| TASK-013 | Jak nakoupit (/jak-nakoupit/)                      | M    | High     | ⬜     |
| TASK-014 | O nás (/o-nas/) + Kontakty (/kontakty/)            | M    | High     | ⬜     |
| TASK-015 | Reklamace a garance + Ochrana osobních údajů       | S    | Medium   | ⬜     |
| TASK-016 | Průvodce chovem: rozcestník + 13 article skeletonů | L    | Medium   | ⬜     |
| TASK-023 | Lokální ověření Sprintu 3                          | S    | High     | ⬜     |

---

### TASK-013: Jak nakoupit (/jak-nakoupit/)

**Size:** M (3–4 h) · **Status:** ⬜ Pending · **Priority:** High
**Goal:** Odstranit nejistotu z nákupu — zákazník přijde na stránku a přesně ví, co ho čeká,
a volá připravený.

**Acceptance criteria:**

- [ ] Stránka `/jak-nakoupit/` s permalink `/jak-nakoupit/`.
- [ ] Sekce v pořadí: úvod · 4 kroky (`.kroky`) · 3 způsoby předání (Rozvoz / Záhornice /
      Burzy) · Platba · CITES info box (`.info-box`) · Garance info box · FAQ 4 otázky
      (`<details name="faq">`) · závěrečné CTA.
- [ ] Texty ze zadání 4.10 doslovně; chybějící nebo sezonní údaje (termín rozvozu, seznam burz)
      označeny `[DOPLNIT]`.
- [ ] Tel. odkaz v sekci Záhornice dostane třídu `js-tel-nakoupit`.
- [ ] Brány zelené, 360 px OK.

**Podklady (zadání 4.10):**

- Úvod: „Nákup je jednoduchý a vše domluvíme osobně po telefonu. Tady najdete, co vás čeká."
- Kroky: 1 **Zavolejte** – „Jiří Haltuf vám poradí s druhem a vybavením a řekne, co je právě
  k dispozici." · 2 **Domluvíme výběr** – „Želva, terárium, příslušenství nebo celá sada." ·
  3 **Převezmete si ji** – „Při rozvozu, v Záhornicích nebo na burze." · 4 **Dostanete
  doklady a radu** – „Doklady CITES, předvyplněný formulář a návod, jak se o želvu starat."
- Způsoby předání: **Rozvoz po ČR** – „Jednou měsíčně rozvážíme želvy po celé republice.
  Termín a místo předání domluvíme po telefonu." · **Odběr v Záhornicích** – „Na Sádkách
  174, 289 03 Záhornice – po předchozí domluvě." · **Terarijní burzy** – „Potkáte nás na
  terarijních burzách. Želvu si můžete předem rezervovat a na burze jen vyzvednout." (seznam
  termínů: `[DOPLNIT – klient doplní a udržuje]`).
- Platba: „Způsob platby domluvíme individuálně po telefonu."
- CITES info: „Ke každé želvě, která registraci podléhá, dostanete doklady a předvyplněný
  formulář. Registraci vyřídíte zdarma poštou do 30 dnů."
- Garance: „Na zdraví želvy platí 6týdenní lhůta. Kdyby se cokoli dělo, zavolejte nám jako
  prvním – vždy se domluvíme." + odkaz na `/reklamace-a-garance/`.
- FAQ: Kdy je další rozvoz? · Lze želvu rezervovat? („Domluvíme se individuálně.") · Prodáváte
  i do zahraničí? („Ano, Jiří Haltuf zajišťuje i zahraniční prodej.") · Dovezete i terárium?

**Claude Code prompt:**

> Postav stránku `/jak-nakoupit/` (`src/jak-nakoupit.njk`) podle podkladů v TASK-013
> a `docs/design-policy.md`. Kroky jako `.kroky` (§3.7), způsoby předání jako tři karty (odvoď
> ze `.sada-varianta` nebo `.karta-druhu`), CITES a garance jako `.info-box`. FAQ jako
> `<details name="faq">`. Texty doslovně z podkladů; `[DOPLNIT]` tam, kde chybí. Telefon
> z `site.json`, nový `tel:` odkaz s třídou `js-tel-nakoupit`.

**Notes:** Title: „Jak koupit želvu – rozvoz po ČR, odběr, doklady | Želvy ČR".
Mapa Záhornic = textová adresa s odkazem na Mapy.cz (ne iframe).

---

### TASK-014: O nás (/o-nas/) + Kontakty (/kontakty/)

**Size:** M (3–4 h) · **Status:** ⬜ Pending · **Priority:** High
**Goal:** Budovat důvěru příběhem rodiny; kontaktní údaje přehledně na jednom místě.

**Acceptance criteria:**

- [ ] Stránka `/o-nas/` sekce: příběh (text + foto `[DOPLNIT]`) · Kdo jsme (2 osoby: Jan
      a Jiří) · Chov v číslech (45 / 2 / 9 / [DOPLNIT]) · CTA.
- [ ] Stránka `/kontakty/` sekce: hlavní kontakt Jiří (velká karta, foto `[DOPLNIT]`) ·
      2 místa (Záhornice + Nepolisy) · Burzy `[DOPLNIT]` · Fakturační údaje.
- [ ] Texty ze zadání 4.11 a 4.13; `[DOPLNIT]` pro fotky a sezónní obsah (burzy).
- [ ] Tel. odkaz na kontaktní stránce s třídou `js-tel-kontakt`.
- [ ] Brány zelené, 360 px OK.

**Podklady (zadání 4.11 a 4.13):**

- O nás — příběh: „Chov želv u nás začal před 45 lety a dnes ho vedou už dvě generace rodiny
  Haltufových. Z malého chovu se stal jeden z největších soukromých chovů suchozemských
  želv v Evropě." (Fotka `/miniatury/02.jpg` + aktuální — `[DOPLNIT]`).
- Kdo jsme: **Jan Haltuf st.** – zakladatel chovu, poradce · **Jiří Haltuf** – prodej v ČR
  i zahraničí, tel. 774 579 582. (Fotky `/foto/foto1.jpg`, `/foto/jirka.jpg`)
- Chov v číslech: 45 let · 2 generace · 9 druhů ·
  „více než 100 želv odchovaných do dospělosti `[DOPLNIT: ověřit nebo vypustit]`"
- Pro obchodníky: „Zajišťujeme i velkoobchodní a zahraniční prodej – kontaktujte Jiřího Haltufa."
- Kontakt — hlavní karta: foto Jiřího `[DOPLNIT]`, „Jiří Haltuf – prodej a poradenství",
  „+420 774 579 582", „Nejrychleji se domluvíme po telefonu. Když to nezvedneme, ozveme se zpět."
- Místa: **Odběrní místo** Na Sádkách 174, 289 03 Záhornice (po domluvě) · **Chov** Nepolisy
  174, 503 63 (u Chlumce nad Cidlinou)
- Fakturační údaje: Jan Haltuf, Nepolisy 174, 503 63, IČO 48633119,
  živnostenský úřad MÚ Nový Bydžov, ev. č. 360203-3756-00
- Formulář ani e-mail na webu nebudou.

**Claude Code prompt:**

> Postav `/o-nas/` (`src/o-nas.njk`) a `/kontakty/` (`src/kontakty.njk`) podle podkladů
> v TASK-014 a `docs/design-policy.md`. Čísla „45 let / 2 / 9 / [DOPLNIT]" jako stat-bar
> (§3.4). Osoby jako karty (odvoď ze `.row` §3.5). Kontaktní kartu Jiřího odvoď ze
> `.strana-uvod__obsah`. Mapa = textová adresa s odkazem na Mapy.cz.
> Nový `tel:` odkaz s třídou `js-tel-kontakt`.

**Notes:** Title O nás: „O nás – rodinný chov želv Haltufovi, 45 let | Želvy ČR".
Title Kontakty: „Kontakt – Želvy ČR, Jiří Haltuf, tel. 774 579 582".

---

### TASK-015: Reklamace a garance + Ochrana osobních údajů

**Size:** S (1–2 h) · **Status:** ⬜ Pending · **Priority:** Medium
**Goal:** Stránky v patičce existují a odkazují na smysluplný obsah.

**Acceptance criteria:**

- [ ] `/reklamace-a-garance/`: 4 body ze zadání 4.15 (vstřícnější tón), CTA Zavolat.
- [ ] `/ochrana-osobnich-udaju/`: jednoduchá stránka — web nepoužívá cookies ani formuláře,
      sbírá jen záznamy serveru (IP, čas přístupu). Přehled v jednom odstavci.
- [ ] Tel. odkaz na reklamační stránce s třídou `js-tel-reklamace`.
- [ ] Brány zelené, 360 px OK.

**Podklady (zadání 4.15 — reklamace):**

1. „Na zdraví zvířete platí ze zákona 6týdenní lhůta."
2. „Když se v této době objeví zdravotní problém, zavolejte nám prosím jako prvním. Želvy jsou
   specifické a ne každý veterinář s nimi má zkušenosti."
3. „V případě úhynu se nejčastěji domluvíme na náhradě nebo slevě na další želvu. Druhou
   možností je pitva na Státní veterinární správě nebo jiné akreditované instituci –
   prokáže-li vadu na straně chovatele, dáme vám novou želvu a uhradíme náklady na pitvu."
4. „Vždy se snažíme o rozumnou domluvu."

**Claude Code prompt:**

> Postav `/reklamace-a-garance/` (`src/reklamace-a-garance.njk`) a `/ochrana-osobnich-udaju/`
> (`src/ochrana-osobnich-udaju.njk`) podle podkladů v TASK-015 a `docs/design-policy.md`.
> Reklamace: 4 číslované body jako jednoduchý text (bez `.kroky`, jsou to věty ne nadpisy),
> CTA Zavolat. Ochrana údajů: perex + jeden odstavec o absenci cookies/formulářů.

**Notes:** Obchodní podmínky zatím nejsou — web nemá e-shop. Budou potřeba ve fázi 2.

---

### TASK-016: Průvodce chovem — rozcestník + 13 article skeletonů

**Size:** L (4–6 h) · **Status:** ⬜ Pending · **Priority:** Medium
**Goal:** Všechny URL průvodce chovem existují a jsou přístupné; obsah se ladí postupně.

**Acceptance criteria:**

- [ ] Layout `src/_includes/layouts/clanek.njk` pro všechny články (drobečky → H1 → perex
      → V kostce → tělo → CTA).
- [ ] Rozcestník `/pruvodce-chovem/` (`src/pruvodce-chovem.njk`) se 4 skupinami a kartami
      všech 13 článků (`.row--clanek` nebo ekvivalent).
- [ ] 13 Markdown souborů v `src/pruvodce-chovem/` s frontmatterem (title, description, perex,
      permalink) a [DOPLNIT] tělem.
- [ ] Slugy přesně dle tabulky níže. Brány zelené, 360 px OK.

**Skupiny a slugy (zadání 4.7 a 4.9):**

| Skupina               | Slug                | Název článku        |
| --------------------- | ------------------- | ------------------- |
| Než si želvu pořídíte | je-zelva-pro-me     | Je želva pro mě?    |
| Než si želvu pořídíte | chov-v-terariu      | Chov v teráriu      |
| Než si želvu pořídíte | chov-na-zahrade     | Chov na zahradě     |
| Každodenní péče       | krmeni              | Krmení              |
| Každodenní péče       | svetlo-a-teplo      | Světlo a teplo      |
| Každodenní péče       | voda-a-vlhkost      | Voda a vlhkost      |
| Každodenní péče       | vitaminy-a-mineraly | Vitamíny a minerály |
| Rok se želvou         | utlum               | Útlum               |
| Rok se želvou         | zimovani            | Zimování            |
| Rok se želvou         | velikost-a-rust     | Velikost a růst     |
| Rok se želvou         | pohlavi             | Pohlaví             |
| Papíry a zajímavosti  | registrace-cites    | Registrace CITES    |
| Papíry a zajímavosti  | zelvi-kuriozity     | Želví kuriozity     |

**Claude Code prompt:**

> Postav layout `src/_includes/layouts/clanek.njk` (drobečky Průvodce chovem → H1 → perex
> → `.box-v-kostce` [DOPLNIT] → tělo → závěrečné CTA). Pak rozcestník `src/pruvodce-chovem.njk`
> se 4 skupinami a 13 kartami (`.row--clanek` z design-policy §3.5). Pak 13 Markdown souborů
> v `src/pruvodce-chovem/` podle tabulky v TASK-016 — každý s frontmatterem a [DOPLNIT] tělem.
> Přidej `src/pruvodce-chovem/pruvodce-chovem.json` s defaultním layoutem pro adresář. Doplň
> do `docs/design-policy.md` §7.5 (nové třídy: `.box-v-kostce`, `.clanek-skupina`,
> `.karta-clanku` nebo odkaz na §3.5).

**Notes:** Blokuje výpis v patičce (5 článků tam je) a sekci „Z průvodce chovem" na úvodu.

---

### TASK-023: Lokální ověření Sprintu 3

**Size:** S (30–60 min) · **Status:** ⬜ Pending · **Priority:** High
**Goal:** Uživatel na běžící aplikaci odklikne, že sprint splnil cíl, a teprve pak se nasazuje.

**Jak spustit lokálně:**

> `npm run dev` → otevřít `http://localhost:8080/`

**Checklist k odkliknutí:**

- [ ] Jak nakoupit: stránka existuje, 4 kroky a 3 způsoby předání se zobrazují, FAQ funguje.
- [ ] O nás: příběh rodiny, Jan a Jiří viditelní s rolemi a čísly chovu.
- [ ] Kontakty: Jiří jako hlavní kontakt, obě adresy (Záhornice + Nepolisy) jsou vidět.
- [ ] Reklamace a garance: 4 body ze zadání a tlačítko Zavolat.
- [ ] Ochrana osobních údajů: stránka existuje (není 404).
- [ ] Průvodce chovem: rozcestník zobrazuje 4 skupiny, kliknutím na článek se otevře stránka.
- [ ] Navigace: všech 6 položek vede na existující stránky (ne 404).
- [ ] Patička: Reklamace, Ochrana os. údajů a Kontakty v sekci Informace fungují (ne 404).
- [ ] 360 px: žádný vodorovný posun na žádné nové stránce.
- [ ] Regrese: úvod, Želvy na prodej a detail želvs zelenavé fungují beze změny; build, lint,
      format:check a testy zelené.

**Po odkliknutí všech bodů:**

> otevři PR z feature větve (`git push -u origin feat/sprint-3-duvera-pruvodce` →
> `gh pr create`) → počkej na zelenou CI → **merge PR** (ne přímý push do main).

**Notes:** Manuální task pro Pavla, ne pro Claude Code.

---

## Backlog (Upcoming)

| ID       | Task                                                                                                             | Size | Priority | Status |
| -------- | ---------------------------------------------------------------------------------------------------------------- | ---- | -------- | ------ |
| TASK-017 | Galerie (/galerie/)                                                                                              | M    | Low      | ⬜     |
| TASK-018 | Přesměrování 17 starých `.html` adres + kotvy `#6_x` (3.3)                                                       | M    | High     | ⬜     |
| TASK-019 | SEO: sitemap, kanonické adresy, Open Graph, JSON-LD (8.3)                                                        | M    | Medium   | ⬜     |
| TASK-020 | Měření bez cookies + události `click_tel` (8.3/5.5)                                                              | S    | Medium   | ⬜     |
| TASK-008 | Fotopipeline: self-hostované WebP obrázky místo hotlinků na zelvycr.cz                                           | M    | Medium   | ⏸️     |
| TASK-021 | Branch protection na `main` (Pavel; GitHub Pages už zapnuté)                                                     | S    | High     | ⬜     |
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

## Future / Deferred

| ID  | Položka                            | Poznámka                                                      |
| --- | ---------------------------------- | ------------------------------------------------------------- |
| —   | Migrace obsahu na Shoptet          | Konečný web vzniká souběžně; prototyp dodá HTML bloky a texty |
| —   | Vlastní doména pro prototyp        | Jen pokud Pavel bude chtít; jinak zůstává `*.github.io`       |
| —   | Strukturovaná data FAQPage/Article | Smysluplné až s ostrým (indexovaným) nasazením                |

<!-- Pravidla: statusy ⬜🔵✅🔴⏸️; ID TASK-NNN neměnná; každý sprint končí ověřovacím
taskem (Size S, manuální); DoD = AC + format + lint + testy + CI + revize; závěr sprintu
= otevřít PR → zelená CI → merge (nikdy přímý push do main); uzavřený sprint → archiv. -->
