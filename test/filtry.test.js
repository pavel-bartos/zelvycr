import { describe, expect, it } from 'vitest';
import {
  datumCZ,
  jinePolozky,
  kc,
  podleSlugu,
  rozpetiKc,
  telHref,
} from '../lib/filtry.js';

describe('telHref', () => {
  it('doplní předvolbu k českému číslu psanému s mezerami', () => {
    expect(telHref('774 579 582')).toBe('+420774579582');
  });

  it('nezdvojí předvolbu, když už tam je', () => {
    expect(telHref('+420 774 579 582')).toBe('+420774579582');
  });

  it('ignoruje pomlčky a závorky', () => {
    expect(telHref('(774) 579-582')).toBe('+420774579582');
  });
});

describe('datumCZ', () => {
  it('zformátuje ISO datum česky', () => {
    expect(datumCZ('2026-11-04')).toBe('4. 11. 2026');
  });
});

describe('kc', () => {
  it('formátuje částku s nezlomitelnými mezerami', () => {
    expect(kc(5999)).toBe('5\u00a0999\u00a0Kč');
    expect(kc(500)).toBe('500\u00a0Kč');
  });
});

describe('rozpetiKc', () => {
  it('složí rozpětí cen', () => {
    expect(rozpetiKc(500, 2500)).toBe('500–2\u00a0500\u00a0Kč');
  });
});

describe('podleSlugu', () => {
  const pole = [{ slug: 'a' }, { slug: 'b' }];
  it('najde položku podle slugu', () => {
    expect(podleSlugu(pole, 'b')).toEqual({ slug: 'b' });
  });
  it('vrátí undefined, když slug neexistuje', () => {
    expect(podleSlugu(pole, 'x')).toBeUndefined();
  });
});

describe('jinePolozky', () => {
  const pole = [{ slug: 'a' }, { slug: 'b' }, { slug: 'c' }, { slug: 'd' }];
  it('vynechá zadanou položku a omezí počet', () => {
    expect(jinePolozky(pole, 'a', 2).map((p) => p.slug)).toEqual(['b', 'c']);
  });
  it('ve výchozím stavu vrátí tři položky', () => {
    expect(jinePolozky(pole, 'd')).toHaveLength(3);
  });
});
