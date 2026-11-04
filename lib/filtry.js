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
