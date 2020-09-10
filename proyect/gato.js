let turnoPrimerJugador = true


function marcarCasilla(numero) {
  let casilla = document.getElementById('casilla' + numero);

  if (turnoPrimerJugador){
    casilla.classList.add("casilla-morada");
    casilla.classList.remove("casilla-verde");
    casilla.childNodes[0].innerText ='X';
    turnoPrimerJugador = false
  }
  else{
    casilla.classList.add("casilla-verde");
    casilla.classList.remove("casilla-morada");
    casilla.childNodes[0].innerText ='O';
    turnoPrimerJugador = true
  }
}
