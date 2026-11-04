import { describe, expect, it } from 'vitest';
import { datumCZ, telHref } from '../lib/filtry.js';

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
