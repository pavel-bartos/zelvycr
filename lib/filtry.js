/** Čisté funkce používané jako Eleventy filtry. Testované ve `test/filtry.test.js`. */

/** Datum v českém formátu, např. "4. 11. 2026". */
export function datumCZ(hodnota) {
  return new Date(hodnota).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
}

/**
 * Telefon pro odkaz `tel:` — z libovolného zápisu udělá mezinárodní tvar.
 * "774 579 582" -> "+420774579582"; "+420 774 579 582" -> "+420774579582"
 */
export function telHref(hodnota) {
  const cislice = String(hodnota).replace(/\D/g, '');
  return cislice.startsWith('420') ? `+${cislice}` : `+420${cislice}`;
}

const NBSP = '\u00a0';

function cislo(hodnota) {
  return String(Math.round(Number(hodnota))).replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
}

/** Částka v Kč s nezlomitelnými mezerami: 5999 -> "5 999 Kč". */
export function kc(hodnota) {
  return `${cislo(hodnota)}${NBSP}Kč`;
}

/** Rozpětí cen želvy: (500, 2500) -> "500–2 500 Kč". */
export function rozpetiKc(od, doHodnoty) {
  return `${cislo(od)}–${cislo(doHodnoty)}${NBSP}Kč`;
}
