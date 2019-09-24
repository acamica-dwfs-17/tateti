var jugadorActual = prompt("Quién comienza el juego? X=1 O=2");
//Definir bandera para saber cuando terminó el juego

//Definir grilla de 3 x 3


//Inicializar grilla con valores en 0 


function clickCelda(x,y) {
  //Validar que no haya un valor en la grilla que se hace click
  //si hay emitir un mensaje.

  //Validar si el juego ya termino, si termino preguntar si quiere comenzar de nuevo. 
  //Si quiere comenzar de nuevo resetear juego
  

    if (jugadorActual==1) {
      document.getElementById("cell_"+x+"_"+y).style.color="#3F88C5";
      document.getElementById("cell_"+x+"_"+y).innerHTML="X";
      grid[x][y]=1;
      jugadorActual=2;
    } else {
       document.getElementById("cell_"+x+"_"+y).style.color="#E2C290";
       document.getElementById("cell_"+x+"_"+y).innerHTML="O";
      grid[x][y]=2;
      jugadorActual=1;
    }
    checkGanador();
  
}

function reset() {
for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    //Resetar grilla y HTML
  }
}
 jugadorActual=1;
}

function checkGanador() {
  //Validar si algún jugador gano. 
  //Si alguno gano emitir un mensaje diciendo cual y terminando el juego
}

