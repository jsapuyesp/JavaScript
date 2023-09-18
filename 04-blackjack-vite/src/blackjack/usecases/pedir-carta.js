
/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} 
 */
export const pedirCarta = (deck) => {

  if (deck.length === 0) {
    throw 'No hay cartas en el deck';
  }
  const carta = deck.pop();
  return carta;
}

export default pedirCarta;