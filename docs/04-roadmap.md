# Želvy ČR (zelvycr-web) — Roadmapa

_Vize: Laik, který uvažuje o první suchozemské želvě, na webu během pár minut pochopí,
jaký druh se mu hodí a co k němu potřebuje — a zavolá._
_Poslední aktualizace: 2026-11-04_

Roadmapa říká **co a proč**, backlog **jak**. Tenhle web je dočasný prototyp; konečné
řešení vzniká souběžně na Shoptetu.

## 🟢 Now — Právě stavíme

- **Kostra a vizuální směr** — layout, hlavička, patička, sticky „Zavolat", design tokeny.
  _Proč:_ bez nich nejde ukázat ani jednu stránku a každá další se dělá dvakrát.
- **Jádro nákupní cesty** — Želvy na prodej → detail druhu → Startovací sady.
  _Proč:_ to je cesta, na jejímž konci je telefonát; zbytek webu ji jen podpírá.

## 🟡 Next — Na řadě

- **Úvodní stránka v plné podobě** — 11 sekcí ze zadání, včetně lišty důvěry a FAQ.
- **Důvěra a nákup** — O nás, Jak nakoupit, Kontakt, Reklamace a garance.
  _Proč:_ čtvrtá a pátá fáze cesty zákazníka („Jsou spolehliví?", „Jak to probíhá?").
- **Příslušenství a terária** — šíře sortimentu, příprava dat pro e-shop fáze 2.

## 🔵 Later — Na výhledu

- **Průvodce chovem** — 13 článků. _Proč později:_ je to organický vstup z vyhledávání,
  ale prototyp je `noindex`, takže SEO přínos nastane až na ostrém webu. Obsah ale přežije
  migraci, takže práce není ztracená.
- **Galerie** — výběr 40–60 fotek.
- **Předání obsahu na Shoptet** — texty a HTML bloky jako podklad pro konečný web.

## ❌ Záměrně nezahrnuto

| Téma                                  | Proč ne teď                                                                      |
| ------------------------------------- | -------------------------------------------------------------------------------- |
| E-shop, košík, platby                 | Fáze 2 a patří na Shoptet, ne na statický prototyp                               |
| Kontaktní formulář, e-mail            | Rozhodnutí klienta — jediný kanál je telefon                                     |
| GA4, GTM, cookie lišta                | Na `noindex` prototypu bez návštěvnosti by jen přidaly práci a právní povinnosti |
| 301 přesměrování starých adres        | Váže se na ostrou doménu, ne na GitHub Pages                                     |
| Strukturovaná data (FAQPage, Article) | Nemá smysl na neindexovaném webu; připravit až s ostrým nasazením                |
| Vícejazyčnost                         | Nikdo ji nepožadoval                                                             |
