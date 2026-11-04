# Želvy ČR (zelvycr-web) — Backlog

_Last updated: 2026-11-04 | Sprint: 2 (aktivní, fotky odloženy) · Sprint 1 ✅ uzavřen, detail v `docs/backlog-archive.md`_

Backlog píše Claude (šéf vývoje), implementaci dělá Claude Code. Každý kódovací task má
**Claude Code prompt** a odvolává se na `docs/design-policy.md` (vzhled) a zadání v Claude
projektu (obsah). Fakta o želvách Claude Code **nevymýšlí** — konkrétní hodnoty jsou v tascích.

## Current Sprint — Sprint 2: Kompletní katalog a fotky

**Cíl sprintu:** Dokončit vše, co si návštěvník může koupit — zbylých 5 druhů, startovací
sady, příslušenství a terária na míru. Fotky zatím zůstávají hotlinkované na zelvycr.cz;
náhrada vlastními optimalizovanými je TASK-008 (odloženo do pozdějšího sprintu).
Po Sprintu 2 je katalogová část weba hotová; stránky důvěry (Jak nakoupit,
O nás, Kontakt, Reklamace) a průvodce chovem jsou Sprint 3.

_Zahájen 2026-11-04 po uzavření Sprintu 1 (PR #1 a #2 mergnuty, TASK-007 schválen Pavlem).
Všechny tasky stavějí na Sprintu 1 (design systém, `druhy.json`, šablona detailu druhu).
Detail Sprintu 1: `docs/backlog-archive.md`._

| ID       | Task                                                                       | Size | Priority | Status |
| -------- | -------------------------------------------------------------------------- | ---- | -------- | ------ |
| TASK-009 | Zbylých 5 detailů druhů (vroubená, žlutohnědá, stepní, pardálí, kloubnatá) | M    | High     | ✅     |
| TASK-010 | Startovací sady (/startovaci-sady/)                                        | M    | Medium   | ✅     |
| TASK-011 | Příslušenství (/prislusenstvi/) + Terária na míru (/terarium-na-miru/)     | L    | Medium   | ⬜     |
| TASK-012 | Lokální ověření Sprintu 2                                                  | S    | High     | ⬜     |

---

### TASK-009: Zbylých 5 detailů druhů

**Size:** M (3–5 h) · **Status:** ✅ Done (2026-11-04) · **Priority:** High
**Goal:** Doplnit detaily pro vroubenou, žlutohnědou, stepní, pardálí a kloubnatou — stejná
šablona jako zelenavá (TASK-006).

**Acceptance criteria:**

- [ ] Vygenerované stránky `/zelva-vroubena/`, `/zelva-zlutohneda/`, `/zelva-stepni/`,
      `/zelva-pardali/`, `/zelva-kloubnata/` ze šablony detailu druhu a `druhy.json`.
- [ ] Texty „O druhu" a formy podle podkladů níže (ze zadání 4.3). Fakta **nevymýšlet**;
      co chybí → `[DOPLNIT]`.
- [ ] Text pro pardálí a kloubnatou je nový (psaný z podkladů níže) — označit jako
      `[KE KONTROLE KLIENTEM]` (zadání otevřený bod 5).
- [ ] Brány zelené, 360 px OK.

**Podklady „O druhu" a formy (zadání 4.3 — přepiš, neměň fakta):**

- **vroubená** — formy _Testudo marginata_, _T. m. weissingeri_. O druhu: podlouhlý tvar
  krunýře, s věkem tmavne, kontrastní mláďata, vhodná do venkovních výběhů.
- **žlutohnědá** — formy _Testudo graeca_, _T. g. ibera_ (gigantní forma). O druhu: velká
  variabilita forem, silná fixace na člověka (pamatuje si lidi), africké populace venku
  problematické.
- **stepní** — forma _Testudo horsfieldii_. O druhu: výrazná povaha a hierarchie ve skupině,
  odolná, nutné dlouhé klidové období, hrabe — plot zapustit do země.
- **pardálí** (NOVÝ text, `[KE KONTROLE KLIENTEM]`) — _Stigmochelys pardalis_. Druhý největší
  africký suchozemský druh; krunýř 30–50 cm, dospělí 13–20 kg; savany a polopouště;
  **nezimuje** — přes den 26–29 °C, místo k vyhřívání 32–35 °C, noc ne pod ~24 °C; v létě
  venku jen za tepla; upřímně upozornit, že dospělá potřebuje hodně místa.
- **kloubnatá** (NOVÝ text, `[KE KONTROLE KLIENTEM]`) — _Kinixys belliana_ (formy nogueyi,
  zombensis). Africký druh ze savan; krunýř do ~22 cm; pohyblivý kloub v zadní části krunýře;
  všežravá (ovoce, houby, trávy, hmyz, šneci); kolem 24 °C, vyhřívání aspoň 32 °C; aktivní
  spíš ráno a večer; nezimuje, za sucha upadá do letního klidu.

**Claude Code prompt:**

> Naplň šablonu detailu druhu (z TASK-006) pro zbylých 5 druhů z `src/_data/druhy.json`
> a podkladů v TASK-009. Texty „O druhu" a formy přepiš z podkladů — nevymýšlej fakta.
> Text pardálí a kloubnaté je nový z veřejných zdrojů; nahoru dej komentář
> `[KE KONTROLE KLIENTEM]`. Dodrž `docs/design-policy.md`.

**Notes:** Blokováno TASK-006 (šablona). Registrace CITES: zelenavá/vroubená/žlutohnědá = ano
(příloha A); stepní/pardálí/kloubnatá = ne (příloha B) — otevřený bod 13, drž tento návrh.

---

### TASK-010: Startovací sady (/startovaci-sady/)

**Size:** M (3–4 h) · **Status:** ✅ Done (2026-11-04) · **Priority:** Medium
**Goal:** Prodat kompletní balíček — nejvyšší hodnota objednávky, řeší obavu laika „co všechno
potřebuju".

**Acceptance criteria:**

- [ ] Stránka `/startovaci-sady/`, H1 „Startovací sady pro vaši první želvu". Sekce: úvod ·
      2 sady (karty) · co obsahuje terárium · ideální dárek · proč sada od chovatele (3 body)
      · FAQ (3 otázky) · závěrečné CTA.
- [ ] Sady a ceny přesně podle podkladů níže. U hlavní sady se cena **5 999 Kč zobrazuje**,
      u vybaveného terária „na dotaz".
- [ ] Komponenty z design systému, FAQ `<details>`. Title/description dle zadání 4.4.
- [ ] Brány zelené, 360 px OK.

**Podklady (zadání 4.4 — složení a ceny potvrdí klient, `[KE KONTROLE KLIENTEM]`):**

- **Startovací sada** (hlavní) — `5 999 Kč`: želva vroubená nebo zelenavá s registrací na
  fotku · terárium 80 × 40 × 40 cm plně vybavené · granule na celý rok.
- **Vybavené terárium bez želvy** — `na dotaz`: terárium 80 × 40 × 40 cm plně vybavené, pro
  ty, kdo už želvu mají.
- **Vybavení terária:** substrát, miska na vodu, domeček, UVA a UVB žárovky s objímkou
  a krytkou, kabely, roztrojka do zásuvky, časovač, sépiová kost, rostlinka.
- Úvod: „Nemusíte nic shánět ani zkoumat. Sadu sestavujeme z vybavení, které máme ověřené ve
  vlastním chovu, a vše vám vysvětlíme při předání."
- Proč sada od chovatele (3 body): terárium vyrobené pro želvy (sklo + kov, průduchy, správná
  výška pro UV) · želva s doklady CITES · rada i po nákupu.

**Claude Code prompt:**

> Postav stránku „Startovací sady" (`src/startovaci-sady.njk`, permalink `/startovaci-sady/`)
> podle podkladů v TASK-010 a `docs/design-policy.md` (sekce startovací sada §3.6). Ceny
> doslovně; složení sad označ komentářem `[KE KONTROLE KLIENTEM]`. FAQ jako `<details>`.

**Notes:** Blokováno TASK-002.

---

### TASK-011: Příslušenství + Terária na míru

**Size:** L (4–6 h) · **Status:** ⬜ Pending · **Priority:** Medium
**Goal:** Ukázat šíři sortimentu s odborným doporučením (objednávka telefonem) a stránku
teráií na míru. Datová struktura připravená pro e-shop fáze 2.

**Acceptance criteria:**

- [ ] `/prislusenstvi/`: úvod · rozcestník 5 podkategorií · sekce pro každou podkategorii
      s „radou chovatele" a ilustračními produkty „na dotaz" · závěrečné CTA.
- [ ] `/terarium-na-miru/`: úvod · 4 výhody · nabídka (tabulka) · jak velké terárium · CTA.
- [ ] Rady chovatele doslovně podle podkladů níže. Rozměry ve formátu šířka × hloubka × výška
      v cm (80 × 40 × 40 cm).
- [ ] Komponenty z design systému (boxy „rada chovatele", karty). Brány zelené, 360 px OK.

**Podklady příslušenství (zadání 4.5):**

- Úvod: „Prodáváme jen to, co sami používáme v chovu. Pokud si nejste jistí, co vybrat,
  zavolejte – poradíme podle velikosti vaší želvy a terária."
- Podkategorie + rada chovatele:
  - **Terária** → odkaz na Terária na míru.
  - **Osvětlení a elektro** — „UVB působí nejlépe do 15 cm od trubice. Obyčejné žárovky ani
    topné desky pod želvu nepatří."
  - **Krmivo a doplňky** — „Dvakrát týdně posypte krmení vápníkem."
  - **Substráty** — „Substrát musí držet vlhkost – na noc ho navlhčete."
  - **Misky a domečky** — „Voda má sahat do třetiny krunýře."
- Produkty ve fázi 1 jen ilustrační (typy zboží) s cenou „na dotaz".

**Podklady terária na míru (zadání 4.6):**

- Úvod: „Vyrábíme terária přímo pro chov želv – ze skla a kovu, s broušenými hranami. Plast se
  kvůli plísním ve styku se zeminou nehodí."
- 4 výhody: průduchy pro výměnu vzduchu · bezpečná výška pro UV žárovky · otevírací dvířka
  z obou stran · vybavení na klíč.
- Nabídka: 80 × 40 × 40 cm plně vybavené (skladem) · 80 × 40 × 40 cm skelet bez vybavení
  (skladem) · jiný rozměr na zakázku (do 3 týdnů); cena „na dotaz".
- „Pro první roky stačí 80 × 40 × 40 cm. Dospělá želva potřebuje terárium dlouhé aspoň
  100–120 cm."

**Claude Code prompt:**

> Postav `/prislusenstvi/` a `/terarium-na-miru/` podle podkladů v TASK-011 a
> `docs/design-policy.md`. Rady chovatele jako boxy, doslovně. Produkty příslušenství jen
> ilustrační „na dotaz". Rozměry v cm (š × h × v).

**Notes:** Blokováno TASK-002. Datovou strukturu produktu drž připravenou pro e-shop (fáze 2).

---

### TASK-012: Lokální ověření Sprintu 2

**Size:** S (30–60 min) · **Status:** ⬜ Pending · **Priority:** High
**Goal:** Pavel na běžící aplikaci odklikne, že katalogová část sedí, a teprve pak se merguje.

**Jak spustit lokálně:**

> `npm run dev` → otevřít `http://localhost:8080/`

**Checklist k odkliknutí:**

- [ ] Všech 6 druhů má detail; pardálí a kloubnatá mají text označený `[KE KONTROLE KLIENTEM]`.
- [ ] Startovací sady: hlavní sada ukazuje 5 999 Kč, vybavené terárium „na dotaz".
- [ ] Příslušenství má 5 podkategorií s radami; terária na míru mají nabídku a rozměry v cm.
- [ ] Obrázky se zobrazují (hotlinky na `zelvycr.cz` fungují; alt texty popisné a česky).
- [ ] Žádný vymyšlený údaj o želvách; `[DOPLNIT]`/`[KE KONTROLE KLIENTEM]` jen tam, kde čekáš.
- [ ] Na 360 px žádný vodorovný posun (vč. tabulek).
- [ ] Regrese: úvod a Želvy na prodej ze Sprintu 1 fungují beze změny; build, lint, format:check
      a testy zelené.

**Po odkliknutí všech bodů:**

> otevři PR z feature větve → zelená CI → **merge PR** (ne přímý push do main).

**Notes:** Manuální task pro Pavla, ne pro Claude Code.

---

## Backlog (Upcoming)

Sprint 3+ — stránky důvěry, průvodce chovem a příprava na spuštění. Rozpracuje se přes
`vibe-backlog`, až bude Sprint 2 schválený. (Očíslováno znovu při detailu Sprintu 2.)

| ID       | Task                                                                                                             | Size | Priority | Status |
| -------- | ---------------------------------------------------------------------------------------------------------------- | ---- | -------- | ------ |
| TASK-013 | Jak nakoupit (/jak-nakoupit/) podle 4.10                                                                         | M    | High     | ⬜     |
| TASK-014 | O nás (/o-nas/) podle 4.11 + Kontakt (/kontakty/) podle 4.13                                                     | M    | High     | ⬜     |
| TASK-015 | Reklamace a garance (4.15) + Ochrana osobních údajů (web bez formulářů/cookies)                                  | S    | Medium   | ⬜     |
| TASK-016 | Průvodce chovem: rozcestník + 13 článků (4.7–4.9)                                                                | XL   | Medium   | ⬜     |
| TASK-017 | Galerie (4.12)                                                                                                   | M    | Low      | ⬜     |
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

## Future / Deferred

| ID  | Položka                            | Poznámka                                                      |
| --- | ---------------------------------- | ------------------------------------------------------------- |
| —   | Migrace obsahu na Shoptet          | Konečný web vzniká souběžně; prototyp dodá HTML bloky a texty |
| —   | Vlastní doména pro prototyp        | Jen pokud Pavel bude chtít; jinak zůstává `*.github.io`       |
| —   | Strukturovaná data FAQPage/Article | Smysluplné až s ostrým (indexovaným) nasazením                |

<!-- Pravidla: statusy ⬜🔵✅🔴⏸️; ID TASK-NNN neměnná; každý sprint končí ověřovacím
taskem (Size S, manuální); DoD = AC + format + lint + testy + CI + revize; závěr sprintu
= otevřít PR → zelená CI → merge (nikdy přímý push do main); uzavřený sprint → archiv. -->
