# Želvy ČR (zelvycr-web) — Roadmapa

_Vize: Laik, který uvažuje o první suchozemské želvě, na webu během pár minut pochopí,
jaký druh se mu hodí a co k němu potřebuje — a zavolá._
_Poslední aktualizace: 2026-11-04 (Sprint 1 ✅, Sprint 2 aktivní)_

Roadmapa říká **co a proč**, backlog **jak**. Tenhle web je dočasný prototyp; konečné
řešení vzniká souběžně na Shoptetu.

## 🟢 Now — Právě stavíme

- **Kompletní katalog a fotky (Sprint 2)** — zbylých 5 druhů, Startovací sady, Příslušenství,
  Terária na míru a vlastní optimalizované fotky místo hotlinků.
  _Proč:_ dokončí nákupní cestu, na jejímž konci je telefonát; Sprint 1 postavil základ
  (design systém, úvod, Želvy na prodej, detail zelenavé).

## 🟡 Next — Na řadě

- **Důvěra a nákup** — O nás, Jak nakoupit, Kontakt, Reklamace a garance.
  _Proč:_ čtvrtá a pátá fáze cesty zákazníka („Jsou spolehliví?", „Jak to probíhá?").
- **Doplnění textů** — tři `[DOPLNIT]` na detailu zelenavé (TASK-022).
- **Provozní základ** — branch protection na `main` (TASK-021).

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
