

/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement}
 */

export const crearCartaHTML = (carta) => {

  if (!carta) throw new Error('Se necesita la carta');

  // <img class="carta" src="assets/cartas/2C.png">
  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add('carta');

  return imgCarta
}