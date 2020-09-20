let turnoPrimerJugador = true
let copiaTablero = []

function marcarCasilla(numero) {
  let casilla = document.getElementById('casilla' + numero);
  let ocupada = estaOcupada(casilla);

  if(!ocupada){

    if (turnoPrimerJugador){
      casilla.classList.add("casilla-morada");
      casilla.classList.remove("casilla-verde");
      casilla.childNodes[0].innerText ='X';
      copiaTablero[numero-1] = "X";
      turnoPrimerJugador = false;
    } else{
      casilla.classList.add("casilla-verde");
      casilla.classList.remove("casilla-morada");
      casilla.childNodes[0].innerText ='O';
      copiaTablero[numero-1] = "O";
      turnoPrimerJugador = true;
    }
    if (revisarGanador()) {
      alert('ya hay un ganador')
    }

  }

}

function revisarGanador() {

  if (
    (copiaTablero[0] && copiaTablero[0] == copiaTablero[3] && copiaTablero[0] == copiaTablero[6]) ||
    (copiaTablero[1] && copiaTablero[1] == copiaTablero[4] && copiaTablero[1] == copiaTablero[7]) ||
    (copiaTablero[2] && copiaTablero[2] == copiaTablero[5] && copiaTablero[2] == copiaTablero[8])
  ) {
     console.log('vertical');
     return true;
  }else if (
    (copiaTablero[0] && copiaTablero[0] == copiaTablero[1] && copiaTablero[0] == copiaTablero[2]) ||
    (copiaTablero[3] && copiaTablero[3] == copiaTablero[4] && copiaTablero[3] == copiaTablero[5]) ||
    (copiaTablero[6] && copiaTablero[6] == copiaTablero[7] && copiaTablero[6] == copiaTablero[8])
  ) {
     console.log('horizontal');
     return true;

  if (
    (copiaTablero[0] && copiaTablero[0] == copiaTablero[4] && copiaTablero[0] == copiaTablero[8]) ||
    (copiaTablero[2] && copiaTablero[2] == copiaTablero[4] && copiaTablero[2] == copiaTablero[6])
  ) {
    console.log('diagonal');
    return true;

  }

}
function estaOcupada(casilla){
  if(casilla.childNodes[0].innerText){
    return true;
  } else {
    return false;
  }
}

function reiniciarJuego() {
  copiaTablero = []
  limpiarCasilla(1);
  limpiarCasilla(2);
  limpiarCasilla(3);
  limpiarCasilla(4);
  limpiarCasilla(5);
  limpiarCasilla(6);
  limpiarCasilla(7);
  limpiarCasilla(8);
  limpiarCasilla(9);

}

function limpiarCasilla(numero){
  let casilla = document.getElementById('casilla' + numero);
  casilla.childNodes[0].innerText = "";
  casilla.classList.remove("casilla-morada");
  casilla.classList.remove("casilla-verde");
}

console.log("si esta conectado");
