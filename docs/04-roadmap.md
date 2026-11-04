# Želvy ČR (zelvycr-web) — Roadmapa

_Vize: Laik, který uvažuje o první suchozemské želvě, na webu během pár minut pochopí,
jaký druh se mu hodí a co k němu potřebuje — a zavolá._
_Poslední aktualizace: 2026-11-04 (Sprinty 1–3 ✅ hotové)_

Roadmapa říká **co a proč**, backlog **jak**. Tenhle web je dočasný prototyp; konečné
řešení vzniká souběžně na Shoptetu.

## 🟢 Now — Stav

- **Sprinty 1–3 hotové a ověřené na produkci.** Stojí design systém (varianta B) a všechny
  stránky z navigace i patičky: úvod, 6 druhů, Startovací sady, Příslušenství, Terária na
  míru, Jak nakoupit, O nás, Kontakt, Reklamace a garance, Ochrana osobních údajů, Průvodce
  chovem + 13 skeletonů článků. Obsah je zatím kostrový/placeholderový.
- **Teď se čeká na obsah od Pavla** — bez textů a fotek nemá další stavění smysl.

## 🟡 Next — Obsahové sprinty (blokováno obsahem od Pavla)

- **Sprint 4 — Dotažení textového obsahu.** Finální texty všech stránek a 13 článků
  průvodce, doplnění `[DOPLNIT]` míst (např. detail zelenavé). _Proč první:_ text je páteř
  webu, graficky i technicky se pak dolaďuje na hotových textech.
- **Sprint 5 — Dotažení grafického obsahu.** Reálné fotky: hero, karty druhů, sady, galerie
  (40–60 fotek) a fotopipeline (stažení, optimalizace na WebP, self-host místo hotlinků).
  _Proč druhé:_ obraz sedá na hotový text a layout.

_Oba sprinty jsou blokované, dokud Pavel nedodá obsah (texty, resp. fotky / přístup k FTP
starého webu — otevřený bod S4)._

## 🔵 Later — Nasazovací sprint (poslední před přepnutím domény)

- **Sprint 6 — Připravenost ke spuštění.** Přesměrování 17 starých `.html` adres + kotvy
  `#6_x`, analytika bez cookies s událostí `click_tel`, technické SEO (sitemap, kanonické
  adresy, Open Graph, případně JSON-LD). _Proč až nakonec:_ přesměrování a analytika se
  vážou na ostrou doménu, SEO má smysl až na hotovém obsahu a po zrušení `noindex`.
- **Předání obsahu na Shoptet** — texty a HTML bloky jako podklad pro konečný web.

## ❌ Záměrně nezahrnuto (v prototypu)

| Téma                       | Proč ne teď                                             |
| -------------------------- | ------------------------------------------------------- |
| E-shop, košík, platby      | Fáze 2 a patří na Shoptet, ne na statický prototyp      |
| Kontaktní formulář, e-mail | Rozhodnutí klienta — jediný kanál je telefon            |
| Cookie lišta               | Prototyp měří bez cookies; cookie režim řeší až Shoptet |
| Vícejazyčnost              | Nikdo ji nepožadoval                                    |

_Pozn.: přesměrování, analytika a SEO nejsou „nezahrnuté" — patří do nasazovacího Sprintu 6,
ne do fáze `noindex` prototypu._
