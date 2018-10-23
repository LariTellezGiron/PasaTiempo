var total_segs;
var total_mins;
var cronometro;
var tablero= new Array(3);
var casillapte=9;
var jugador=1;
var color;
var gana=0;
var fin=false;
function jugarOtraVez(){
	jugador=1;
	gana=0;
	fin=null;
	casillapte=9;
	Mensaje.style.display="none";
	textoBoton.style.display="none";

	ejecutar();
}/*
function SeleccionaCelda(x,y){
	if(jugador==1)
	{
		tablero[x][y]=1;
PintarCelda(x,y,"white",jugador);
Comprobar(x,y,jugador);
jugador=2;
}
else {
	tablero[x][y]=1;
PintarCelda(x,y,"red",jugador);
Comprobar(x,y,jugador);
jugador=1;

}
if(!fin)
{
	alert("turno de jugador" + jugador); 
}

}


*/
function tiraJugador2(){
	jugador=2;
	x2=Math.round(Math.random()*2);
	y2=Math.round(Math.random()*2);
	while((tablero[x2][y2]==1) || (tablero[x2][y2]==2))
	{
	x2=Math.round(Math.random()*2);
	y2=Math.round(Math.random()*2);	
}
if (fin) {
	mensajeFin();
}
else{
	SeleccionaCelda(x2,y2,jugador);
}
jugador=1;
}

function SeleccionaCelda(x,y, jugador){
	
		tablero[x][y]=jugador;
PintarCelda(x,y,"white",jugador);
casillapte--;
Comprobar(x,y,jugador);

}


/*function RevisarCelda(x,y){
	if(tablero[x][y]==1 || tablero[x][y]==2)
		{
			//alert("casilla ocupada");
			mensajeCasilla();
		}
else if (fin) {
	//alert("se acabo la partida  ganó el jugador "+ jugador);
		mensajeFin();
}
else{
	SeleccionaCelda(x,y);

}

}*/

function RevisarCelda(x,y){
	if(tablero[x][y]==1 || tablero[x][y]==2)
		{
			//alert("casilla ocupada");
			mensajeCasilla();
		}
else if (fin) {
	//alert("se acabo la partida  ganó el jugador "+ jugador);
		mensajeFin();
}
else{
	jugador=1;
	SeleccionaCelda(x,y,jugador);

if (casillapte>0) {
	jugador=2;
	tiraJugador2();
}
}

}



function ejecutar(){
	for(i=0;i<3;i++)
	{
		tablero[i]=new Array(3);
		
	}
	
	LimpiaReloj();
	IniciaReloj();
	/*x=Math.round(Math.random()*2);
	y=Math.round(Math.random()*2);
	SeleccionaCelda(x,y);
	//alert("X es " +x + "y es "+y);*/
	color="red";
	IniciarTablero(color);
}

ejecutar();