/**
 * 2C = Two of clubs (treboles)
 * 2D = Two of diamonds
 * 2H = Two of hearts
 * 2S = Two of spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0;
let puntosComputador = 0;

// Referencias

const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const puntajes = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const crearDeck = () => {

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
}

crearDeck();

// Tomar una carta

const pedirCarta = () => {

  if (deck.length === 0) {
    throw 'No hay cartas';
  }

  const carta = deck.pop();
  return carta;

}

// pedirCarta();

const valorCarta = (carta) => {

  const valor = carta.substring(0, carta.length - 1);

  return (isNaN(valor)) ?
    (valor === 'A') ? 11 : 10
    : valor * 1;
}

// valorCarta('KD')


// Turno computadora
const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();
    puntosComputador = puntosComputador + valorCarta(carta);
    puntajes[1].innerText = puntosComputador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta')
    divCartasComputadora.append(imgCarta)

    if (puntosMinimos > 21) {
      break;
    }

  } while ((puntosComputador < puntosMinimos) && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputador === puntosMinimos) {
      alert('Nadie gana :(');
    } else if (puntosMinimos > 21) {
      alert('Computadora gana');
    } else if (puntosComputador > 21) {
      alert('Jugador gana');
    } else {
      alert('Computadora gana')
    }
  }, 10)
}



// Eventos

btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  puntajes[0].innerText = puntosJugador;

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta')
  divCartasJugador.append(imgCarta)

  if (puntosJugador > 21) {
    console.warn('Perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    console.warn('21!!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  }
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () => {
  console.clear();
  deck = [];
  deck = crearDeck();
  puntosJugador = 0;
  puntosComputador = 0;
  puntajes[0].innerText = 0;
  puntajes[1].innerText = 0;
  divCartasComputadora.innerHTML = '';
  divCartasJugador.innerHTML = '';
  btnPedir.disabled = false;
  btnDetener.disabled = false;
})
