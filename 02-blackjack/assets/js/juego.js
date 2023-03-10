const miModulo = (() => {
  'use strict'

  const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];
  let puntosJugadores = [],
    deck = [];

  // Referencias

  const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

  const puntajes = document.querySelectorAll('small');

  const divCartas = document.querySelectorAll('.divCartas')


  const iniciarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0)
    }

    puntajes.forEach(e => e.innerText = 0);
    divCartas.forEach(e => e.innerHTML = '');

    btnDetener.disabled = false;
    btnPedir.disabled = false;

  }

  const crearDeck = () => {
    deck = [];
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
    return _.shuffle(deck);
  }

  // Tomar una carta

  const pedirCarta = () => {
    if (deck.length === 0) {
      throw 'No hay cartas';
    }
    return deck.pop();
  }

  // Valor de la carta

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
      (valor === 'A') ? 11 : 10
      : valor * 1;
  }

  // Puntos
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntajes[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno]
  }

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta')
    divCartas[turno].append(imgCarta)
  }

  const ganador = () => {

    const [puntosMinimos, puntosComputador] = puntosJugadores;

    setTimeout(() => {
      if (puntosComputador === puntosMinimos) {
        alert('Nadie gana :(');
      } else if (puntosMinimos > 21) {
        alert('Computadora gana');
      } else if (puntosComputador > 21) {
        alert('Jugador gana');
      } else if (puntosComputador > puntosMinimos) {
        alert('Computadora gana');
      } else {
        alert('Jugador gana');
      }
    }, 100)
  }

  // Turno computadora
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputador = 0;
    do {
      const carta = pedirCarta();
      puntosComputador = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);

    } while ((puntosComputador < puntosMinimos) && puntosMinimos <= 21);

    ganador();

  }



  // Eventos

  btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

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

    turnoComputadora(puntajes[0]);
  });

  btnNuevo.addEventListener('click', () => {
    iniciarJuego();

  })


  return {
    nuevoJuego: iniciarJuego
  }



})()


