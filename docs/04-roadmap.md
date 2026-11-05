# Želvy ČR (zelvycr-web) — Roadmapa

_Vize: Laik, který uvažuje o první suchozemské želvě, na webu během pár minut pochopí,
jaký druh se mu hodí a co k němu potřebuje — a zavolá._
_Poslední aktualizace: 2026-11-04 (Sprinty 1–3 ✅ hotové)_

Roadmapa říká **co a proč**, backlog **jak**. Tenhle web je dočasný prototyp; konečné
řešení vzniká souběžně na Shoptetu.

## 🟢 Now — Souběžně: obsah (Sprint 5) + testovací brána (Sprint 6)

- **Sprinty 1–4 hotové.** Design systém (varianta B), všechny stránky z navigace i patičky
  a data-driven galerie (Sprint 4). Obsah je zatím kostrový/placeholderový.
- **Sprint 5 — Dotažení textového obsahu (běží).** Copywriter dodal finální texty do
  `docs/obsah/`; Claude Code je propisuje do `src/` (13 článků, detail zelenavé, úpravy
  z revize). Fakta čekající na chovatele zůstávají placeholdery.
- **Sprint 6 — Testovací brána (aktuální infra).** Vícevrstvá CI: rychlá brána vždy,
  strukturální testy (e2e, 360 px, přístupnost) přes path filtr, agregační `gate` job.
  _Proč teď:_ je nezávislá na obsahu a chrání veškerou práci obsahových sprintů.

## 🟡 Next — Grafický obsah (blokováno fotkami od Pavla)

- **Sprint 7 — Dotažení grafického obsahu.** Reálné fotky: hero, karty druhů, sady, výběr
  40–60 fotek do galerie a fotopipeline (stažení, optimalizace na WebP, self-host místo
  hotlinků). _Blokováno, dokud Pavel nedodá fotky / přístup k FTP starého webu (bod S4)._

## 🔵 Later — Nasazovací sprint (poslední před přepnutím domény)

- **Sprint 8 — Připravenost ke spuštění.** Přesměrování 17 starých `.html` adres + kotvy
  `#6_x`, analytika bez cookies s událostí `click_tel`, technické SEO (sitemap, kanonické
  adresy, Open Graph, případně JSON-LD) a **těžké testy (Lighthouse/CWV, vizuální regrese)**
  jako preflight. _Proč až nakonec:_ přesměrování a analytika se vážou na ostrou doménu, SEO
  a výkon mají smysl až na hotovém obsahu a po zrušení `noindex`.
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
