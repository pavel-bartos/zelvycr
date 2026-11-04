# Návrhy úprav textů na main

Revize pracovních textů, které už jsou na webu (stav k 5. 11. 2026). Každý bod je
**konkrétní před → po** s místem v repu. Implementuje Claude Code; obsah přebírá odtud,
fakta nevymýšlí. Co vyžaduje klienta, je označeno **[KLIENT]**.

Řazení podle priority: nejdřív věci, které jsou fakticky nebo stylově špatně, pak drobnosti.

---

## A. Alt texty — plošná chyba

**Problém:** Galerie zelenavé má alt texty „…fotografie 1 z 5", „…fotografie 2 z 5". Stylová
příručka (kap. 7) i zadání 5.4 to zakazují — alt popisuje, **co je na fotce**, ne její pořadí.
Pořadové číslo nenese pro nevidomého návštěvníka žádnou informaci.

**Soubor:** `src/_data/detailyDruhu.json`, slug `zelva-zelenava`, pole `galerie`.

Protože fotky zatím hotlinkujeme z původního webu a jejich obsah neznám jistě, navrhuju alt texty
podle toho, co na fotkách být má (galerie druhu = daný druh v různých pohledech). Finální znění
potvrdí, kdo fotky vybíral:

| Teď | Návrh |
| --- | --- |
| Želva zelenavá z našeho chovu, fotografie 1 z 5 | Dospělá želva zelenavá z našeho chovu |
| …fotografie 2 z 5 | Krunýř želvy zelenavé shora — žlutohnědá kresba |
| …fotografie 3 z 5 | Mládě želvy zelenavé v trávě |
| …fotografie 4 z 5 | Želva zelenavá při krmení |
| …fotografie 5 z 5 | Spodní část krunýře (plastron) — rozlišení pohlaví |

**[KLIENT]** potvrdí, že fotky tohle opravdu ukazují; jinak alt upravíme podle skutečnosti.
Stejné pravidlo platí pro všechny fotky, které se budou doplňovat — žádné „fotografie N z M".

---

## B. Vymyšlený detail v postřehu chovatele

**Soubor:** `src/_data/detailyDruhu.json`, slug `zelva-zlutohneda`, pole `postrehChovatele`.

**Teď:** „Žlutohnědé nás poznávají. Stačí přijít ke výběhu a hned přibíhají — to je na želvách
pořád překvapivé."

**Problém:** Starý web dokládá jen „vyšší fixaci a lepší paměť na přátelství k lidem, samci až
dotěrní". Detail „hned přibíhají ke výběhu" v žádném zdroji není — je dopsaný. Box „Z našeho
chovu" musí být první ruka, ne pravděpodobně znějící vymyšlenost (příručka kap. 2).

**Návrh (drží se zdroje):** „Žlutohnědé si pamatují lidi. Samci bývají až dotěrní — přízeň si
u nich udržíte kontaktem. To je mezi želvami výjimečné."

**[KLIENT]** — jestli „přibíhají k výběhu" sedí na jejich zkušenost, vrátíme to; pak to ale
musí potvrdit jako svoje.

---

## C. Konzistence: 9 druhů vs. 10 taxonů

**Problém (otevřený bod 15 zadání):** Úvod a lišta důvěry uvádějí „9 druhů". Stránka O nás má
tabulku s 10 taxony (včetně egyptské a rytířské, které se neprodávají). Návštěvník to vidí jako
rozpor.

**Soubory:** `src/_data/uvod.json` (`cisla`), `src/o-nas.njk`.

**Návrh:** Držet **9 druhů** jako hlavní číslo (prodejní nabídka) a v tabulce na O nás tabulku
uvést větou, která rozpor vysvětlí: „Chováme devět druhů želv; další dva (egyptskou a rytířskou)
máme v chovu, ale neprodáváme." Tím 9 i 10 dávají smysl vedle sebe.

**[KLIENT]** potvrdí, že prodejních druhů je 9 a chovaných 10 — nebo dá vlastní čísla.

---

## D. O nás — údaj „sto odchovaných želv"

**Soubor:** `src/o-nas.njk`, sekce Chov v číslech.

**Teď:** „želv odchovaných do dospělosti *[DOPLNIT: ověřit]*".

**Zjištění:** Tvrzení **je na starém webu** (stránka Velikost / růst: „jsme odchovali více než sto
želv do dospělosti"). Je to vlastní tvrzení chovatele, ne něco, co bych dohledával. Můžeme ho
tedy uvést:

**Návrh:** „**100+** — želv odchovaných do dospělosti". Hedge „[DOPLNIT: ověřit]" odstranit.

**[KLIENT]** (otevřený bod 14) jen potvrdí, že číslo pořád platí — ale už není „neznámý údaj".

---

## E. Drobné [DOPLNIT] v postavených stránkách

### E1. Alt texty portrétů (O nás, Kontakty)

**Soubory:** `src/o-nas.njk`, `src/kontakty.njk`.

| Místo | Teď | Návrh |
| --- | --- | --- |
| Kontakty, foto Jiřího | [DOPLNIT – portrét Jiřího Haltufa] | Jiří Haltuf, prodej a poradenství |
| O nás, foto chovu | [DOPLNIT – popis fotografie chovu] | Venkovní výběh našeho chovu želv |
| O nás, foto Jana | [DOPLNIT – popis fotografie Jana Haltufa] | Jan Haltuf starší, zakladatel chovu |
| O nás, foto Jiřího | [DOPLNIT – popis fotografie Jiřího Haltufa] | Jiří Haltuf, druhá generace chovu |

### E2. Jak nakoupit + Kontakty — termíny, které udržuje klient

**Soubor:** `src/jak-nakoupit.njk` (3×), `src/kontakty.njk` (1×).

Tyhle `[DOPLNIT]` jsou správně — jde o termíny rozvozu a seznam burz, které se mění a doplňuje
je klient průběžně. **Neodstraňovat.** Jen doplnit **náhradní text pro prázdný stav** (zadání
8.7: „prázdný seznam burz zobrazí náhradní text"), aby stránka nevypadala rozbitě, než klient
termín zadá:

| Místo | Náhradní text, když není termín |
| --- | --- |
| Termín příštího rozvozu | „Termín nejbližšího rozvozu domluvíme po telefonu." |
| Nejbližší burzy | „Nejbližší burzy vám řekneme po telefonu — rádi vás na některé potkáme." |

---

## F. Úvod — hero a alt

**Soubor:** `src/_data/uvod.json`.

- `hero.alt` = „Suchozemská želva v trávě" → **„Mláďata suchozemských želv v trávě"** (hero na
  úvodu zadání 4.1 má být fotka mláďat). **[KLIENT]** potvrdí motiv fotky.
- Zbytek úvodu (perex, čísla, FAQ, kroky) je v pořádku a odpovídá zadání — neměním.

---

## G. Drobnost — vroubená, nové tvrzení

**Soubor:** `src/_data/detailyDruhu.json`, slug `zelva-vroubena`, `oDruhu[0]`.

Text říká „největší evropský suchozemský druh". Na starém webu to není (jen „dorůstající velkých
rozměrů, 30–35 cm"). Tvrzení je pravděpodobně pravdivé, ale je nové → zapsáno do kontroly faktů
(`kontrola-faktu/druhy.md`). Text neměním, jen **[KLIENT]** potvrdí.

---

## Co neměním

Startovací sady, Příslušenství, Terária na míru, Reklamace, Ochrana osobních údajů, 404 a
rozcestník Průvodce chovem jsou napsané dobře a v souladu s příručkou. Drobné typografické
nálezy (pevné mezery) vyřeší korekturní průchod nad celým webem na konci, ne tahle revize.
