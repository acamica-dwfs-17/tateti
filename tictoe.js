var jugadorActual = prompt("Quién comienza el juego? X=1 O=2");
var juegoTermino = false;


// var grid=new Array(3);
// grid[0]=new Array(3);
// grid[1]=new Array(3);
// grid[2]=new Array(3);

var grid = [new Array(3), new Array(3), new Array(3)];

for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
  }
}

function clickCelda(x,y) {
  console.log(grid[x][y])
  if (grid[x][y]>0 ) {
    alert("Esa casilla ya está con selección");
  } else if (juegoTermino) {
    if(confirm("Parece que el juego ya termino, queres arrancar de nuevo?"))
      reset();
  }
  else {
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
    checkMovimiento();
  }
  
}

function reset() {
for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
    document.getElementById("cell_"+i+"_"+j).innerHTML="&nbsp;";
  }
}
 jugadorActual=1;
}

function checkMovimiento() {
  var quienGano = 0;
  if(grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2] && (grid[0][0]+grid[0][1]+grid[0][2]) >= 3) {
    quienGano = grid[0][0];
    console.log('horizontal arriba')
  } else if (grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2] && (grid[2][0]+grid[2][1]+grid[2][2]) >= 3) {
    quienGano = grid[2][0];
    console.log('horizontal abajo')
  } else if (grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2] && (grid[1][0]+grid[1][1]+grid[1][2]) >= 3) {
    quienGano = grid[1][1];
    console.log('horizontal medio')
  } else if (grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0] && (grid[0][0]+grid[1][0]+grid[2][0]) >= 3) {
    quienGano = grid[0][0];
    console.log('vertical izq')
  } else if (grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2] && (grid[0][2]+grid[1][2]+grid[2][2]) >= 3) {
    quienGano = grid[0][2];
    console.log('vertical der')
  } else if (grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1] && (grid[0][1]+grid[1][1]+grid[2][1]) >= 3) {
    quienGano = grid[0][1];
    console.log('vertical medio')
  } else if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && (grid[0][0]+grid[1][1]+grid[2][2]) >= 3) {
    quienGano = grid[0][0];
    console.log('diagonal 0 a 2')
  } else if (grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2] && (grid[2][0]+grid[1][1]+grid[0][2]) >= 3) {
    quienGano = grid[0][2];
    console.log('diagonal 2 a 0')
  }   
    
  if(quienGano>0) {
    alert(`Gano el jugador ${quienGano}`);
    juegoTermino = true;
  }
}

| 