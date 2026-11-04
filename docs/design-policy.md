# Design policy — Želvy ČR

Závazný zdroj pravdy pro vzhled webu. **Každý stránkový task se odvolává na tento soubor.**
Implementaci dělá Claude Code, autorem policy je Claude (šéf vývoje); vzniklo kodifikací
schválené **varianty B** (`~/Documents/Claude/Projects/Zelvy CR/navrhy/uvod-varianta-b.html`
a `B-zelvy-na-prodej.html`).

Když je spor mezi touto policy a konkrétním taskem, platí policy. Když something policy
neřeší, odvoď to z nejbližší komponenty tady a **zapiš doplnění sem** (přes task, ne potichu
v kódu).

---

## 1. Charakter

Editoriální „chovatelský deník", ne „e-shop se zvířaty". Dojem návštěvy u rodiny, která
želvy chová 45 let. Konkrétně to znamená:

- **Velká displejová typografie** a hodně vzduchu. Nadpisy jsou výrazné, ne krotké.
- **Číslované sekce** s mono „kickerem" nahoře (`01 — Výběr`, `02 — Vybavení`…).
- **Tenké linky** (hairlines) místo stínů a rámečků — oddělují obsah střídmě.
- **Zemitá, teplá paleta** (papír, oliva, zem) + jediná výrazná jantarová jen pro „Zavolat".
- **Reálné fotky** z chovu, nikdy stock. Žádné ikony-dekorace navíc.

Vyhýbej se: gradientům, zaobleným „kartičkám" se stíny, modré/fialové, zářivým barvám,
vycpávkovým ilustracím, stock fotkám.

---

## 2. Tokeny

Implementuj jako CSS custom properties v `:root`. **Hodnoty jsou závazné** — jsou odečtené
z varianty B. Nevymýšlej nové barvy; potřebuješ-li odstín navíc, přidej ho sem nejdřív.

### 2.1 Barvy

```css
:root {
  /* plochy */
  --barva-papir: #fbfaf6; /* pozadí stránky */
  --barva-plocha: #efece2; /* světlá alternativní sekce (startovací sada) */
  --barva-plocha-neutr: #e4e1d8; /* neutrální výplň (badge „na dotaz") */
  --barva-tma: #1c1b17; /* tmavé sekce, hero panel, text */

  /* text */
  --barva-text: #1c1b17; /* primární */
  --barva-text-tlumena: #45423a; /* sekundární (odstavce ve výpisech) */
  --barva-text-slaba: #5e5a4f; /* terciární (dt popisky, latinské názvy) */
  --barva-text-na-tme: #e4e0d4; /* text na tmavém pozadí */
  --barva-text-na-tme-slaba: #beb9ab; /* popisky na tmavém pozadí */

  /* značka */
  --barva-zelena: #4e5b2e; /* oliva — kickery, hover odkazů, čísla kroků */
  --barva-zelena-svetla: #c9d3a8; /* kicker na tmavém pozadí, podtržení „jump" odkazů */

  /* akce */
  --barva-jantar: #f0b429; /* primární CTA „Zavolat", akční pruh */
  --barva-jantar-tmava: #d49a1c; /* tmavší jantar (jemné stínění, nikdy jako plocha textu) */

  /* linky a placeholdery */
  --barva-linka: #d9d4c5; /* hairline oddělovače, spodní linky tabulky */
  --barva-linka-silna: #1c1b17; /* 2px „rule" nad sekcí a hlavička tabulky */
  --barva-img-placeholder: #dcd3be; /* podklad pod obrázkem, než se načte */

  /* dostupnost (sémantika) */
  --badge-skladem-bg: #dde8c6;
  --badge-skladem-text: #2e4a12;
  --badge-dotaz-bg: #e4e1d8;
  --badge-dotaz-text: #45423a;
  --badge-neni-bg: #f6dcc4;
  --badge-neni-text: #7a3a0a;
}
```

**Použití jantarové je výsadní pro konverzi.** Jantarová `#F0B429` = „Zavolat" a akční pruh,
nic jiného. Když zjantaříš i druhotné prvky, tlačítko „Zavolat" přestane táhnout oko.

### 2.2 Typografie

Dvě písma z Google Fonts + systémové mono. Načítej je jedním `<link>` (viz portabilita §5).

```css
--pismo-displej: 'Bricolage Grotesque', system-ui, sans-serif; /* váhy 600 a 800 */
--pismo-text: 'Public Sans', system-ui, sans-serif; /* váhy 400, 600, 700 */
--pismo-mono: ui-monospace, Menlo, Consolas, monospace; /* kickery, kódové popisky */
```

- **Displej** (`.disp`): `font-weight: 800` (karty druhů 600), `letter-spacing: -0.025em`,
  `line-height: 1`, barva `--barva-text`. Pro nadpisy a velká čísla.
- **Text**: Public Sans, základ **18px**, `line-height: 1.6`.
- **Kicker** (`.kick`): mono, **14px**, `letter-spacing: 0.08em`, `text-transform: uppercase`,
  barva `--barva-zelena` (na tmavém `--barva-zelena-svetla`).

**Typografická škála** (px, z varianty B — drž se jí; mezistupně interpoluj, nepřestřeluj):

| Prvek                                   | Desktop | Pozn.              |
| --------------------------------------- | ------- | ------------------ |
| Hero H1                                 | 64      | na tmavém panelu   |
| Velký sekční H2 (rodina)                | 80      | tmavá sekce        |
| Sekční H2                               | 56      | běžný nadpis sekce |
| CTA H2                                  | 44      | jantarový pruh     |
| Statistika (čísla v liště důvěry)       | 72      | displej            |
| Cena sady                               | 48      | displej            |
| H3 karta / položka                      | 30      | displej, váha 600  |
| Nadpis kroku / summary FAQ              | 20–22   |                    |
| Perex / úvodní odstavec                 | 20      |                    |
| Běžný text                              | 18      |                    |
| Malý text (dt, latinské názvy, popisky) | 16      |                    |
| Nejmenší (legal, th tabulky, badge)     | 14      |                    |

Na mobilu velké nadpisy zmenši (hero ~40px, sekční ~34px) tak, aby se nelámaly ošklivě
a nevznikal vodorovný posun. Použij `clamp()` nebo breakpoint — ne pevné desktopové px.

### 2.3 Rozměry, mezery, poloměry

```css
--sirka-obsahu: 1240px; /* .wrap; hlavička smí 1400px */
--gutter: 32px; /* boční padding .wrap */
--radius: 4px; /* tlačítka */
--radius-badge: 3px; /* badge dostupnosti */
--vyska-sticky: 56px; /* mobilní lišta „Zavolat" */
```

- **Vertikální rytmus sekcí:** velké sekce ~88–96px nahoře/dole, menší ~56–72px.
- **Linka nad sekcí** (`.rule`): `border-top: 2px solid var(--barva-linka-silna)`.
- **Hairline oddělovač:** `1px solid var(--barva-linka)`.
- Mobilní gutter nech 32px nebo zmenši na 20px, ať se text nelepí k okraji; nikdy pod 16px.

---

## 3. Komponenty

Každou dělej jako **CSS třídu v jednom stylesheetu** (`src/assets/css/style.css`), ne inline
styly (varianta B je má inline jen proto, že je to mockup). Značení tříd česky a sémanticky
(`.karta-druhu`, `.cta-pruh`), ať jdou bloky vyjmout do Shoptetu (viz §5).

### 3.1 Tlačítko `.btn`

`display: inline-flex; align-items: center; gap: 10px; min-height: 52px; padding: 0 26px;`
`font-weight: 700; font-size: 18px; border-radius: var(--radius); text-decoration: none;`

Varianty:

- **`.btn--tel` (primární, jantar):** `background: var(--barva-jantar); color: var(--barva-text);`
  Vždy s telefonní ikonou (inline SVG, `stroke: currentColor`). Text „Zavolat 774 579 582".
- **`.btn--tma`:** `background: var(--barva-tma); color: var(--barva-papir);` — sekundární akce
  na světlé ploše („Prohlédnout sady").
- **`.btn--obrys`:** `background: transparent; border: 2px solid currentColor;` — na fotce/tmavém
  („Více o nás", druhé CTA v hero).
- **Velké CTA** v závěrečném pruhu: `min-height: 68px; font-size: 26px; padding: 0 34px;`.

Cílová plocha vždy ≥ 44 × 44 px (default 52px výška to plní).

### 3.2 Hlavička `.hlavicka`

Logo (symbol `logo-haltuf-symbol-cerne.svg`, výška 48px + „Želvy ČR" s olivovou tečkou) ·
nav 6 položek (Public Sans 600, 16px) · jantarové tlačítko „Zavolat". Flex, zalamovací,
`max-width: 1400px`. Košík a přihlášení se **nezobrazují** (na statickém webu nejsou vůbec).

Nad hlavičkou **oznamovací pruh** (akce): `background: var(--barva-zelena); color: var(--barva-papir);`
centrovaný, krátký text + „Zobrazit akci →". Zobrazuje se jen v sezóně (řízeno daty akce).

### 3.3 Hero

Fotka přes celou šířku (výška ~680px desktop, na mobilu nižší) + **tmavý panel**
`background: var(--barva-tma); color: var(--barva-papir);` (max-width ~660px, zarovnaný dolů).
V panelu: kicker světle zelený (`Rodinný chov · 45 let`), H1 64px, perex, dvě CTA
(jantarové „Vybrat želvu" + obrysové „Zavolat"). Fotka má `object-fit: cover` a placeholder
podklad.

### 3.4 Lišta důvěry (stat bar)

`.rule` nahoře, grid `repeat(auto-fit, minmax(220px, 1fr))`. Každá položka: velké displejové
číslo (72px) + popisek pod ním. Obsah: `45 / let chovu`, `2 / generace rodiny Haltufových`,
`9 / druhů želv v chovu`, `1× / měsíčně rozvoz po celé ČR`. (Počet druhů „9" — otevřený bod
15 zadání; drž „9", dokud klient nepotvrdí jinak.)

### 3.5 Karta druhu `.row`

Vodorovná položka-odkaz: `display: flex; gap: 24px; padding: 24px 0;`
`border-bottom: 1px solid var(--barva-linka);`. Vlevo čtvercová fotka 168×168 (`object-fit: cover`),
vpravo H3 (displej 30px, váha 600) + latinský název kurzívou slabě + `<dl>` se třemi páry
(Velikost / Chov / Cena). Hover: podtržení H3. `dl` je grid `auto 1fr`, `dt` slabá barva,
`dd` váha 600.

**Štítky druhu `.stitek`** (Byt / Zahrada / Začátečník, doplněno v TASK-004 podle zadání 4.1): malé
pilulky odvozené z badge — `background: var(--barva-plocha-neutr); color: var(--barva-text-tlumena);`
14px, váha 700, `--radius-badge`. Jsou pod názvem druhu, před `<dl>`. Barvou nenesou informaci, vždy mají text.

**Varianta karta článku:** stejná `.row`, širší fotka 240×135 (poměr 16:9), H3 + jednořádkový
perex. Používá se v „Z průvodce chovem".

### 3.6 Startovací sada (sekce)

Světlá alternativní plocha `background: var(--barva-plocha);`. Kicker `02 — Vybavení`, H2 56px,
čtyři položky obsahu jako `.rule` (hairline, 1px) v gridu, pod tím cena 48px displejem
(`Startovací sada / 5 999 Kč`) + tmavé tlačítko „Prohlédnout sady", vedle velká fotka terária.

### 3.7 Kroky „Jak koupit"

`<ol>` bez odrážek, grid `repeat(auto-fit, minmax(240px, 1fr))`. Každá položka `.rule` nahoře,
číslo kroku displejem 20px olivově (`Krok 1`), tučný nadpis, krátký text tlumeně. Na mobilu
pod sebou.

### 3.8 Tmavá sekce (rodina / příběh)

`background: var(--barva-tma); color: var(--barva-papir);`. Kicker světle zelený, H2 velký
(80px), odstavce `--barva-text-na-tme`, obrysové tlačítko. Vedle mřížka portrétů (poměr 3:4)
s popisky (jméno tučně + role slabě `--barva-text-na-tme-slaba`).

### 3.9 FAQ `<details>`

Nativní `<details>/<summary>`, **funguje bez JavaScriptu** (podmínka — viz §5). `summary`
tučně 20px, marker skryt, vlastní `::after` šipka `↓` (otevřeno `↑`) olivově. Hairline linky
mezi otázkami. Jedna otevřená naráz přes `name="faq"` (HTML atribut, bez JS). Odpověď tlumeně.

### 3.10 Závěrečné CTA `.cta-pruh`

Celosekční **jantarová** plocha `background: var(--barva-jantar);`. Vlevo kulatá fotka Jiřího

- H2 44px „Nevíte si rady s výběrem?" + věta. Vpravo velké **tmavé** tlačítko s telefonní
  ikonou (min-height 68px, 26px). Tohle je hlavní opakovaná konverze — je na konci stránek,
  kategorií i článků. Claude Code ho udělá jako jeden partial a vkládá všude stejně.

### 3.11 Patička `.paticka`

`.rule` nahoře, grid `repeat(auto-fit, minmax(220px, 1fr))`, 4 sloupce: **logo celé**
(`logo-haltuf-cerne.svg`) + kontakt (telefon `tel:`, Záhornice, Nepolisy) · **Nabídka**
(odkazy) · **Průvodce chovem** (odkazy) · **Informace** (Reklamace a garance, GDPR, Cookies).
Pod tím tenká linka a legal řádek (14px, slabě): `Jan Haltuf, Nepolisy 174, 503 63 · IČO
48633119 · zapsán v živnostenském rejstříku, MÚ Nový Bydžov`.

### 3.12 Badge dostupnosti `.badge`

`display: inline-flex; gap: 7px; padding: 3px 10px; border-radius: var(--radius-badge);`
`font-size: 14px; font-weight: 700;` + barevná tečka `::before` (8px kolečko `currentColor`).
Tři stavy (vždy i text, nikdy jen barva — viz přístupnost):

- **Skladem:** bg `--badge-skladem-bg`, text `--badge-skladem-text`
- **Na dotaz:** bg `--badge-dotaz-bg`, text `--badge-dotaz-text`
- **Momentálně není:** bg `--badge-neni-bg`, text `--badge-neni-text`

### 3.13 Porovnávací tabulka

`table { border-collapse: collapse; width: 100%; min-width: 980px; }`. `th` vlevo, uppercase,
14px, slabě, `border-bottom: 2px solid var(--barva-linka-silna)`. `td` hairline spodní linka,
první sloupec tučně. **Na mobilu** se tabulka nesmí roztáhnout přes stránku — zabal ji do
`overflow-x: auto` kontejneru (posuvná), nebo překlop na karty. Žádný vodorovný posun celé
stránky.

### 3.14 Sticky „Zavolat" (mobil)

Ve variantě B desktop není, ale je **povinná** (zadání 5.1): pevná lišta dole přes celou
šířku, `background: var(--barva-jantar); color: var(--barva-text);` váha 700, `tel:` odkaz,
`min-height: var(--vyska-sticky)`. Zobrazená jen do `48rem`; nad tím skrytá. **Nesmí
překrývat obsah ani patičku** — `body` dostane spodní padding `calc(var(--vyska-sticky) + …)`
jen na mobilu. Třída `js-tel-sticky` (měření, viz níže).

### 3.15 „Jump" kotvy `.jump`

Odkazy s olivově-zeleným podtržením (`border-bottom: 2px solid var(--barva-zelena-svetla)`,
hover `--barva-zelena`). Pro navigaci v rámci dlouhé stránky (rozcestníky, obsah).

---

## 4. Přístupnost (WCAG 2.2 AA) — závazné

Platí pro vše, co přidáváme (statický web stavíme celý, takže vše).

- **Kontrast textu ≥ 4.5:1** (velký text ≥ 3:1). Hlídané páry: jantar `#F0B429` snese jen
  **tmavý** text `#1C1B17` (ne bílý). Olivová `#4E5B2E` na papíru je OK pro text. Světle
  zelený kicker `#C9D3A8` jen na **tmavém** pozadí.
- **Nikdy barva jako jediný nositel informace** — badge dostupnosti má vždy text, ne jen tečku.
- **Cílové plochy ≥ 44 × 44 px** (tlačítka, odkazy v navigaci, sticky).
- **Viditelný focus** na všech interaktivních prvcích (neodstraňuj `outline` bez náhrady).
- **Alt texty česky a popisně** („mládě želvy vroubené v trávě", ne „foto1"). Dekorativní
  obrázek má `alt=""`.
- **Sémantické HTML:** jeden `<h1>` na stránku, logická hierarchie nadpisů, `<nav>`, `<main>`,
  `<footer>`, `<ol>` pro kroky, `<table>` pro porovnání.
- **Ovladatelné klávesnicí**, `<details>` a odkazy to plní nativně.
- **360 px bez vodorovného posouvání** — včetně tabulek (viz 3.13).

---

## 5. Přenositelnost do Shoptetu — závazné

Statický web je dočasný; jeho HTML bloky a CSS se přenesou do Shoptetu (zadání 8.4). Proto:

- **Žádný JS jako podmínka funkce.** FAQ = `<details>`, jedna-otevřená = `name="faq"`.
  Menu, karty, tabulka fungují bez skriptu. JS smí jen vylepšovat (progressive enhancement),
  nikdy nést základní funkci. Stránka musí dávat smysl s vypnutým JS.
- **Komponenty jako samostatné HTML bloky + CSS třídy**, ne utility-soup ani inline styly.
  Blok „závěrečné CTA" nebo „porovnávací tabulka" musí jít zkopírovat do HTML pole Shoptetu
  a s připojeným CSS vypadat stejně.
- **Žádná závislost na build-time magii** v markupu, kterou by Shoptet neuměl (žádné
  framework komponenty, žádné runtime šablonování na klientovi).
- **CSS držet malé a v jednom souboru.** Shoptet má limit 8 192 znaků na HTML pole; velké CSS
  půjde jako jeden soubor. Nepleť tokeny do stovek utility tříd.
- **Fonty** jedním `<link>` na Google Fonts (preconnect + jeden css2 request oba řezy).
- **Obrázky self-hostované a optimalizované** (AVIF/WebP, rozměry, lazy loading). Mockup
  hotlinkuje z `zelvycr.cz` — to je jen pro náhled, v buildu fotky stáhni a zmenši.

---

## 6. Měření — telefonní odkazy

Každý `tel:` odkaz dostane třídu podle umístění, aby šlo později v analytice rozlišit, odkud
se volá (zadání 5.5): `js-tel-hlavicka`, `js-tel-hero`, `js-tel-sticky`, `js-tel-cta`,
`js-tel-karta`, `js-tel-kontakt`, `js-tel-paticka`. **Nový `tel:` odkaz bez takové třídy =
chyba.** Číslo vždy ve tvaru `tel:+420774579582`, zobrazené „774 579 582".

---

## 7. Doplněná pravidla pro konkrétní stránky

### 7.1 Detail druhu (TASK-006)

Šablona pro 6 stránek `/zelva-…/` (zadání 4.3). Vychází z existujících komponent, nový vizuální
jazyk nezavádí. Pořadí sekcí shora dolů:

1. **Hlavička druhu `.druh-hlavicka`** — drobečky, pod nimi `.rule` a dva sloupce (flex,
   zalamovací): vlevo **galerie**, vpravo **panel**.
   - **Galerie `.galerie`:** jedna velká fotka (poměr 4 : 3, `object-fit: cover`, podklad
     `--barva-img-placeholder`) + řada 2–4 náhledů (čtverec, ~96 px, hairline rámeček). Každý
     náhled je odkaz na fotku v plné velikosti — **bez JavaScriptu a bez lightboxu** (policy §5).
     Všechny fotky mají česky popisný `alt`.
   - **Panel `.druh-panel`:** `.badge` dostupnosti → H1 (displej, 56 px, váha 800) s českým
     názvem, latinský název kurzívou slabě (jako ve `.row`) → jednovětné shrnutí (perex 20 px,
     `--barva-text-tlumena`) → `.stitky` (Byt / Zahrada / Začátečník) → řádek ceny v komponentě
     `.fakta` (popisek „Cena“, hodnota displejem 40 px: „500–2 500 Kč podle formy a stáří“) →
     tlačítka: `.btn--tel` „Zavolat a domluvit nákup“ (`js-tel-hero`) a `.btn--tma` „Startovací
     sada“ (odkaz na sady).
2. **V kostce `.v-kostce`** — `.rule` 2 px, kicker „01 — V kostce“, H2 56 px, pod tím `<dl>`
   v gridu `auto 1fr`: řádky odděleny hairline 1 px, `dt` slabá barva 16 px, `dd` váha 600.
   Řádky: velikost (samci/samice), vhodný chov, zimování, povinná registrace, náročnost.
   Chybí-li údaj, `[DOPLNIT]` — nikdy netipovat.
3. **O druhu `.druh-text`** — kicker „02 — O druhu“, H2 56 px, text max 40 em, 18 px,
   odstavce `--barva-text-tlumena`. Osobní postřehy chovatele se zvýrazní boxem
   `.box-chov` (viz níže).
4. **Formy, které chováme `.formy`** — kicker, H2, seznam položek oddělených hairline:
   název formy (displej 30 px, váha 600, latinský název kurzívou) + jedna věta (`--barva-text-tlumena`).
5. **Co bude potřebovat `.druh-potreby`** — světlá plocha `--barva-plocha` (jako startovací
   sada §3.6): vlevo odrážky (3–4, hairline položky jako `.sada__polozka`), vpravo karta
   s odkazem na Startovací sady (`.karta-vybaveni`).
6. **Související články** — 3× `.row--clanek` (§3.5).
7. **Další druhy** — 3× `.row` (§3.5), bez aktuálně zobrazeného druhu.
8. **Závěrečné CTA** — partial `.cta-pruh` (§3.10).

**Box `.box-chov`** („Z našeho chovu“, později „Rada chovatele“ u článků): `border-left: 4px solid
var(--barva-zelena)`, `background: var(--barva-plocha)`, padding 24 px, kicker mono olivově nad
textem. Bez zaoblení a stínu. Odvozeno z `.info-box` (CITES) a `.sekce-plocha`.

Mobil: galerie i panel pod sebou (galerie první), H1 `clamp(2.25rem, 10vw, 3.5rem)`, náhledy
v jedné řadě (zalamují), sekce svislý rytmus jako ostatní (56 px).

### 7.2 Co policy zatím neřeší (doplní se při tvorbě dané stránky)

Varianta B ukazuje úvod a „Želvy na prodej". Následující vznikne odvozením z komponent výše
a **doplní se sem** při tvorbě dané stránky (ne potichu v kódu):

- Šablona **článku** (perex, boxy „V kostce / Rada chovatele / Z našeho chovu", obsah s kotvami).
- **Galerie** (mřížka, lightbox/odkaz na plnou velikost).
- Stránky **Příslušenství**, **Jak nakoupit**, **O nás**, **Kontakt**.

### 7.3 Stránka Startovací sady (TASK-010)

Odvozeno z komponent §3.1–§3.9 (§3.6 jako základ, §3.7 kroky, §3.9 FAQ). Nové třídy:

- **`.sady-varianty`** — grid se dvěma kartami sad (`auto-fit, minmax(460px, 1fr)`);
  každá karta `.sada-varianta` má `.rule` nahoře, název (displej 36 px), podtitulek,
  `.sada__polozky` checklist, cenu a CTA tlačítko. Sekundární varianta (terárium bez
  želvy) má `--sekundarni` modifikátor — menší cena (36 px) a `.btn--tma`.
- **`.sady-obsah`** — grid pro obsah terária (auto-fit, `minmax(260px, 1fr)`), jinak
  vizuálně totožný s `.sada__polozky`.
- **`.sady-foto-teraria`** — `width: 100%`, `max-height: 420px`, `object-fit: cover`.
- Nový `tel:` odkaz v sadách dostane třídu `js-tel-sady`.

Zásada: nový prvek vychází z nejbližší existující komponenty (karty, boxy, CTA, tabulka),
nezavádí nový vizuální jazyk a jeho pravidlo se dopíše do §3.

### 7.4 Stránky Příslušenství a Terária na míru (TASK-011)

**Příslušenství (`/prislusenstvi/`):** Pět kategorií jako samostatné `<section>` s `.rule`
kicerem a H2 (44 px). Každá kategorie má `.box-chov` s radou chovatele (§7.1) a `.pris-produkty`
seznam produktů. Nové třídy: `.pris-produkty` (list), `.pris-produkt` (řádek flex
justify-between, hairline-oddělovač), `.pris-poznamka` (16 px, slabě). Produkty jsou
ilustrační „Na dotaz" — datová struktura pro fázi e-shopu připravena v šabloně.
Nový `tel:` odkaz dostane třídu `js-tel-pris`.

**Terária na míru (`/terarium-na-miru/`):** Čtyři výhody jako `.kroky` (§3.7), nabídka jako
`.tabulka` (§3.13) se sloupci Terárium / Rozměry (š × h × v) / Vybavení / Dostupnost / Cena,
rada o velikosti v `.info-box` (§3; Příslušenství). Drobečková navigace jde přes
Příslušenství (`/prislusenstvi/`). Nový `tel:` odkaz `js-tel-tera`.

### 7.5 Sprint 3 — stránky důvěry a Průvodce chovem (TASK-013–016)

**Layout článku (`clanek.njk`):** Drobečky Úvod → Průvodce chovem → název článku, pak `.rule`
s H1, perex (`clanek-perex`, 20 px, tlumeně), čas čtení (`clanek-meta`, 14 px, slabě). Pak
`.box-v-kostce` (zelená levá linka 4 px, olivový kicker „V kostce", seznam 3–5 odrážek —
stejný styl jako `.box-chov`). Tělo `.clanek-telo` (max-width `70ch`). Závěrečné CTA přes partial.

**Průvodce chovem — rozcestník (`/pruvodce-chovem/`):** Zvýrazněná karta „Je želva pro mě?"
(`.pruvodce-vyber`, světlá plocha, `.rule` nahoře). Čtyři skupiny v `.pruvodce-skupiny`
(grid `auto-fit, minmax(300px, 1fr)`). Každá skupina `.clanek-skupina` má `.rule` s H3 a `.clanek-skupina__seznam`
(list, hairline oddělovač). Položky jako `.row.row--clanek` (§3.5). `tel:` odkaz v CTA pruhu
dostane třídu `js-tel-pruvodce`.

**Jak nakoupit (`/jak-nakoupit/`):** Kroky `.kroky` (§3.7), způsoby předání jako `.predani-varianty`
(grid `auto-fit, minmax(260px, 1fr)`), každá `.predani-varianta` s `.rule` nahoře a H3. CITES
a garance v `.info-box`. FAQ `<details name="faq">`. `tel:` odkaz `js-tel-nakoupit`.

**O nás (`/o-nas/`):** Příběh ve `.strana-uvod__obsah` s fotkou (`.o-nas-foto`). Čísla chovu
jako `.stat-bar` (§3.4). Dvě osoby v `.nas-tim` (grid `auto-fit, minmax(320px, 1fr)`), každá
karta `.karta-osoby` (flex, kulatá fotka 120 px, jméno displej 24 px, role mono olivově 14 px).
`tel:` odkaz `js-tel-onas`.

**Kontakty (`/kontakty/`):** Hlavní kontakt `.kontakt-hlavni` (flex, kulatá fotka 120 px,
velké číslo telefonu displejem 32 px). Místa `.kontakt-mista` (grid `auto-fit, minmax(260px, 1fr)`),
každé `.kontakt-misto` s H3 a `<address>`. Fakturační údaje `.kontakt-fakturace` (grid 2 sloupce
160 px / 1fr). `tel:` odkaz `js-tel-kontakt`.

**Reklamace a garance (`/reklamace-a-garance/`):** Čtyři odstavce textu ze zadání 4.15 v `.clanek-telo`,
pak `.btn--tel` s třídou `js-tel-reklamace`. Bez `.kroky` (jsou to věty, ne nadpisy).

**Ochrana osobních údajů (`/ochrana-osobnich-udaju/`):** Minimální stránka, text v `.clanek-telo`.
