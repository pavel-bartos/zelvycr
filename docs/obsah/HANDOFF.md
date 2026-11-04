# Handoff pro Claude Code — finální texty k implementaci

Copywriter (samostatný chat) dodal finální texty ve stavu `ke-kontrole`. Tohle je mapa,
co s nimi udělat. **Zdroj pravdy pro texty je `docs/obsah/`** — JSON a těla článků se plní
z něj, ne naopak. Fakta nevymýšlej; značky `[DOPLNIT]` a `[KE KONTROLE KLIENTEM]` nech být,
dokud je klient nerozhodne.

## Dvě části

### 1. Úpravy textů, které už jsou na main

Soubor **`docs/obsah/navrhy-uprav.md`** — konkrétní před→po. Implementuj do existujících
souborů (`src/_data/*.json`, `src/*.njk`). Nejdůležitější:

- **Alt texty bez číslování** „fotografie N z M" (`detailyDruhu.json`, zelenavá) — návrhy v revizi.
- **Vymyšlený detail** v `postrehChovatele` u žlutohnědé — nahradit zněním ze zdroje.
- **9 vs 10 druhů** — věta na O nás, která rozpor vysvětlí.
- **„100+ odchovaných"** na O nás — odstranit hedge „[DOPLNIT: ověřit]", údaj je na starém webu.
- **Náhradní texty prázdných stavů** v Jak nakoupit / Kontakty.
- **Portrétní alt texty** v O nás a Kontakty.

Vše ostatní v revizi je drobnost; `[KLIENT]` = čeká na potvrzení klientem, needituj natvrdo.

### 2. Nový obsah, který se má dostat na web

**Detail želvy zelenavé** — `docs/obsah/druhy/zelva-zelenava.md` → naplň do
`src/_data/detailyDruhu.json`, slug `zelva-zelenava`:
- `oDruhu` = odstavce ze sekce „O druhu"
- `formy[0].popis` (T. h. boettgeri) = „Nejběžnější forma. Menší typy kolem 12–15 cm, makedonské přes 25 cm."
- `narocnost` zůstává `[DOPLNIT]` — návrh „Nízká – vděčný druh pro začátečníky", čeká na Jiřího.

**13 článků průvodce** — `docs/obsah/pruvodce/*.md` → vlož těla do existujících
`src/pruvodce-chovem/<slug>.md` (mají hotovou hlavičku, tělo je `[DOPLNIT – text článku]`).
Mapování hlaviček:

| docs/obsah (zdroj pravdy) | src/pruvodce-chovem |
| --- | --- |
| `h1` (bez latinského názvu) | `title` |
| `url` | `permalink` |
| `cas_cteni` | `casCteni` (teď `[DOPLNIT] min` — doplň odhad ze zdroje) |
| `description`, `perex`, `skupinaKicker` | stejné (zdroj je novější, přenes) |
| `seo_title` | SEO title stránky |

**Boxy** `::: v-kostce`, `::: z-naseho-chovu`, `::: rada-chovatele` převeď na své HTML
komponenty (třídy z design policy). Interní odkazy nech přes filtr `url`.

## Otevřené [DOPLNIT] / [KE KONTROLE KLIENTEM] — čekají na klienta

| Kde | Co chybí |
| --- | --- |
| zelenavá | náročnost chovu |
| je-zelva-pro-me | údaj o dožití |
| zimování | jednotná teplota zimoviště (3–6 vs 5–6 °C) — teplota, kde chyba ublíží zvířeti |
| registrace-cites, druhy | potvrzení příloh CITES (otevřený bod 13) |
| pardálí, kloubnatá | celé texty `[KE KONTROLE KLIENTEM]` — klient přečte |

Vše svedené do `docs/obsah/kontrola-faktu/` (README → druhy.md, clanky.md) ve formátu
údaj → zdroj → otázka. Dokud klient neodpoví, texty zůstávají `ke-kontrole`, ne `schvaleno`.

## Pořadí

1. Implementuj část 2 (nový obsah) — odblokuje zelenavou a 13 článků, které jsou teď skeleton.
2. Implementuj část 1 (úpravy), ideálně až klient projde `[KLIENT]` body revize.
3. Doplň `[DOPLNIT]` podle odpovědí klienta.
4. Korektura: samostatný průchod nad celým webem (pevné mezery, uvozovky, shoda) dle
   `docs/obsah/README.md` kap. 11 — až bude obsah schválený.
