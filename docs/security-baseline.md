# Bezpečnostní baseline (vibe-secure)

Deterministická ochrana pro AI-orchestrovaný vývoj — to, co úsudek modelu nenahradí.
Audit a aplikace: 2026-11-04. Stav řádků 1–3, 6 a 11 ověřen znovu při uzavření Sprintu 1 (2026-11-04).

## Stav

| #   | Opatření                                                                   | Úroveň             | Stav                                          | Kdo            |
| --- | -------------------------------------------------------------------------- | ------------------ | --------------------------------------------- | -------------- |
| 1   | PreToolUse bash-safety hook (secrets, `rm -rf`, `curl \| bash`, `bash -c`) | stroj `~/.claude/` | ✅ nainstalováno (`bash-safety-extended.py`)  | —              |
| 2   | `git-push-guard` hook — blok přímého pushe do `main`                       | stroj `~/.claude/` | ✅ nainstalováno (`git-push-guard.py`)        | —              |
| 3   | Permission model v `~/.claude/settings.json`, bypass off, telemetry off    | stroj `~/.claude/` | ✅ deny-list, bypass off, telemetry off       | —              |
| 4   | Globál je generický (žádné názvy rep ani deploy URL cizích projektů)       | stroj `~/.claude/` | ⬜ k ověření                                  | Pavel          |
| 5   | Audit always-allow oprávnění podle rubriky                                 | stroj `~/.claude/` | ⬜ on-demand                                  | Pavel + Claude |
| 6   | `.claude/settings.local.json` s `autoMode.environment` (gitignored)        | repo               | ✅ vytvořeno, sloučeno se šablonou `.example` | —              |
| 7   | Secrets v `.gitignore` (`.env`, `.env.*`, klíče, `.npmrc`)                 | repo               | ✅ hotovo                                     | —              |
| 8   | Guardrail „nikdy necommitovat `.env*` ani credential" v CLAUDE.md          | repo               | ✅ hotovo                                     | —              |
| 9   | PR flow v CLAUDE.md, `docs/07-process.md` i v pravidlech backlogu          | repo               | ✅ hotovo                                     | —              |
| 10  | PR template s odkazem na review rubriku                                    | repo               | ✅ hotovo                                     | —              |
| 11  | Branch protection na `main` — require PR + zelená CI                       | GitHub UI          | ⬜ chybí (ověřeno API: `main` není chráněná)  | Pavel          |
| 12  | Sken historie na klíče                                                     | repo               | ✅ triviálně čisté (repo nemá historii)       | —              |

## Co musí Pavel udělat na svém stroji

**Úroveň A — jednou na stroj, platí pro všechny projekty.** Tenhle repozitář vznikl
v cloudovém sandboxu, takže Claude nemohl `~/.claude/` ověřit ani upravit.

1. Nainstaluj bezpečnostní kernel ze starter packu
   ([`hradniai/claude-starter-pack`](https://github.com/hradniai/claude-starter-pack)) —
   instaluje se nedestruktivně se zálohou `~/.claude.bak-<datum>/`.
2. **Instaluj jen bezpečnostní jádro:** bash-safety hook, git-push-guard hook, deny-list,
   `bypass off`, `telemetry off`.
3. **Vynech:** statusline (vzhled), git-autosave (sám commituje — koliduje s naším
   workflow), inject-current-time, experimentální flagy, `cleanupPeriodDays: 3650`
   (nech default 30 — data-minimalizace).
4. **Allow-list neber v nejširší verzi** (`node *`, `python3 *`, `Edit(*)`, `WebFetch`) —
   to je pohodlí, ne ochrana. Začni úzce a uvolňuj, jak roste důvěra. Ochranu dělá
   deny-list a hooky, ne šířka allow-listu.
5. Ověř, že `~/.claude/settings.json` je **generický** — žádný název repa ani deploy URL
   z dřívějších projektů. Pokud tam jsou, přesuň je do
   `.claude/settings.local.json` příslušného projektu.

Falešné poplachy laď zpřesněním vzoru hooku — **nikdy je neobcházej jiným kódováním nebo
skriptem**, to by hook obešlo i pro skutečné hrozby.

## Co udělat na GitHubu

Repozitář: **[pavel-bartos/zelvycr](https://github.com/pavel-bartos/zelvycr)** · prototyp poběží na **https://pavel-bartos.github.io/zelvycr/**

1. ~~Settings → Pages → Source: GitHub Actions~~ — **hotovo**, Pages běží.
2. **Settings → Branches → Add branch ruleset** na `main`:

   - Require a pull request before merging
   - Require status checks to pass → vyber `check` (job z `ci.yml`)
   - Block force pushes

## Příkazy projektu, které musí hooky pustit

Z CLAUDE.md, sekce Příkazy: `npm run dev`, `npm run build`, `npm run lint`,
`npm run format`, `npm run format:check`, `npm test`, `npm ci`.
Projekt nepoužívá `sudo`, `curl | bash` ani mazání mimo `dist/` a `node_modules/`.

## Poznámka k přihlášení k GitHubu

Git i `gh` používají účet `pavel-bartos`. Pavel spustil `gh auth setup-git`, takže `git push`
jde přes aktivní účet `gh` (globální `~/.gitconfig`). Mění-li Pavel účet přes `gh auth switch`,
mění se tím i účet pro `git push`. Při chybě 403 se Claude Code zastaví a řekne to — přihlášení
neobchází ani nemění samo.
