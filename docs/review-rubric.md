# Review rubrika (LLM-as-judge na diff)

Hodnoť diff větve proti acceptance criteria tasku:

1. **Splnění AC** — dělá přesně to, co task žádal? Nic navíc, nic míň.
2. **Bezpečnost** — žádné secrets v repu, žádný nový útočný povrch, žádný externí skript
   nebo iframe, který tam nemá co dělat.
3. **Regrese** — nerozbilo to existující stránky? Zvlášť sdílené partials (hlavička,
   patička, CTA pruh, sticky lišta) — změna v nich se propíše všude.
4. **Dead code / cruft** — žádné osiřelé soubory, zakomentovaný kód, nepoužité závislosti,
   nepoužité CSS třídy.
5. **Konvence** — soulad s CLAUDE.md.

## Co u tohohle projektu kontrolovat navíc

6. **Přenositelnost na Shoptet** — jde výsledný blok vzít jako HTML + CSS a vložit do
   stránky Shoptetu? Závislost na build-time magii nebo na JS = problém.
7. **Odkazy přes `url` filtr** — každý interní odkaz `{{ "/…/" | url }}`. Natvrdo psaná
   cesta se na Pages rozbije.
8. **`tel:` odkazy** — správný tvar z `telHref` a třída `js-tel-<umístění>`.
9. **`noindex` nedotčený** — `site.prototyp` zůstává `true`, `robots.txt` beze změny.
10. **Mobil a přístupnost** — 360 px bez vodorovného posouvání, cílové plochy 44 × 44 px,
    české alt texty, sticky lišta nepřekrývá obsah.
11. **Fakta o želvách** — žádný nový údaj o druhu, teplotě nebo velikosti, který nepochází
    ze zadání nebo od Pavla. Vymyšlené číslo je kritický nález.

Výstup: 🟢 / 🟡 / 🔴 + konkrétní nálezy → zpět Claude Code k opravě dřív, než to vidí Pavel.
