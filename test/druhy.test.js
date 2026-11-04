import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const druhy = JSON.parse(
  readFileSync(new URL('../src/_data/druhy.json', import.meta.url), 'utf8'),
);

const POVINNA_POLE = [
  'slug',
  'nazev',
  'latinsky',
  'velikost',
  'chov',
  'zimuje',
  'registrace',
  'stitky',
  'dostupnost',
  'poznamka',
  'foto',
];
const STITKY = ['Byt', 'Zahrada', 'Začátečník'];
const DOSTUPNOST = ['skladem', 'na-dotaz', 'neni'];

describe('druhy.json', () => {
  it('obsahuje 6 druhů ve správném pořadí', () => {
    expect(druhy.map((d) => d.slug)).toEqual([
      'zelva-zelenava',
      'zelva-vroubena',
      'zelva-zlutohneda',
      'zelva-stepni',
      'zelva-pardali',
      'zelva-kloubnata',
    ]);
  });

  it.each(druhy.map((d) => [d.slug, d]))('%s má všechna povinná pole', (_slug, druh) => {
    for (const pole of POVINNA_POLE) {
      expect(druh, pole).toHaveProperty(pole);
    }
    for (const pole of POVINNA_POLE.filter((p) => p !== 'stitky')) {
      expect(String(druh[pole]).trim(), pole).not.toBe('');
    }
  });

  it.each(druhy.map((d) => [d.slug, d]))(
    '%s má platné štítky a dostupnost',
    (_slug, druh) => {
      expect(Array.isArray(druh.stitky)).toBe(true);
      for (const stitek of druh.stitky) expect(STITKY).toContain(stitek);
      expect(DOSTUPNOST).toContain(druh.dostupnost);
    },
  );

  it('všem druhům je dostupnost zatím „na dotaz“', () => {
    expect(druhy.every((d) => d.dostupnost === 'na-dotaz')).toBe(true);
  });
});
