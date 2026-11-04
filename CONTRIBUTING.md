# Spolupráce více agentů na tomto repu

Na tomhle repozitáři pracují **souběžně tři agenti**. Aby si nepřepisovali práci, platí
pravidla níže. Jádro: **každý má svůj pracovní strom, svůj jmenný prostor větví a své
soubory; `main` je jen pro integraci přes PR.** Řešení je izolace, ne časový rozvrh.

## Agenti a role

| Agent                        | Dělá                              | Píše (cesty)                                                    |
| ---------------------------- | --------------------------------- | --------------------------------------------------------------- |
| **Šéf vývoje** (Claude chat) | backlog, roadmapa, policy, proces | `docs/`, `CLAUDE.md`                                            |
| **Claude Code**              | implementace podle backlogu       | `src/_includes/`, `src/assets/`, `*.njk`, `lib/`, konfig        |
| **AI copywriter**            | texty webu                        | `src/_data/*` (textová pole), články v markdownu, `docs/obsah/` |

## Pravidla

### 1. Každý agent svůj pracovní strom

Nikdy víc agentů v jedné složce. Buď **samostatný klon na agenta**, nebo `git worktree add`
(jeden `.git`, víc složek). **Do cizího pracovního stromu nikdo nesahá** — žádné `pull`
ani `switch` za druhého.

### 2. Vlastnictví větví (jmenné prostory)

- Šéf vývoje: `docs/*`, `backlog/*`
- Claude Code: `feat/*`, `fix/*`
- Copywriter: `content/*`

Každý commituje **jen na své větve**. Nikdy přímo na `main`, nikdy na cizí větev.

### 3. `main` jen přes PR

Branch protection to vynucuje (PR + zelená CI + zákaz force push). Každá změna:
větev → PR → zelená CI → merge. **V pracovním stromu `main` se nepracuje.**

### 4. Vlastnictví cest (tichá pojistka proti konfliktům)

Když se nepřekrývají soubory, nepřekrývají se ani diffy. Drž rozdělení z tabulky výše.
Pokud task sahá do víc oblastí (např. nová stránka = šablona + text), **rozděl ho** nebo se
domluvte přes backlog — ne současnou editací stejného souboru dvěma agenty.

## Pracovní postup (každý task)

```bash
git fetch origin
git switch -c <prefix>/<nazev> origin/main   # čerstvá větev z aktuálního main
# ... práce, commit (prefix feat:/fix:/docs:/content:) ...
git fetch origin && git rebase origin/main    # před PR srovnej s main
git push -u origin <prefix>/<nazev>           # → PR → zelená CI → merge
```

- **Pull vždy `--rebase`.**
- **Před přepnutím větve commitni nebo `git stash`** — nikdy nepřepínej s rozpracovaným stromem.
- Po mergi: `git switch main && git pull --rebase`, pak novou větev na další task.

## Když přesto nastane konflikt

- **Divergovaný `main` v lokálním klonu:** commitni/stashni rozpracované, pak `git pull --rebase`.
  Neforcuj (`--force` nikdy).
- **Dvě větve mění stejný soubor:** dřív mergnutá vyhrává, druhá se rebasne a konflikt vyřeší.
  Proto drž vlastnictví cest — ať k tomu nedochází.
