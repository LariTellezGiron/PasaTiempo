function Comprobar(x,y,jugador)
{
	if(tablero[0][0]==jugador && tablero[0][1]==jugador &&tablero[0][2]==jugador)
	{		gana=jugador;
	}	
	if(tablero[1][0]==jugador && tablero[1][1]==jugador &&tablero[1][2]==jugador)
	{		gana=jugador;
	}
	if(tablero[2][0]==jugador && tablero[2][1]==jugador &&tablero[2][2]==jugador)
	{		gana=jugador;
	}
	if(tablero[0][0]==jugador && tablero[1][0]==jugador &&tablero[2][0]==jugador)
	{		gana=jugador;
	}
	if(tablero[0][1]==jugador && tablero[1][1]==jugador &&tablero[2][1]==jugador)
	{		gana=jugador;
	}
	if(tablero[0][2]==jugador && tablero[1][2]==jugador &&tablero[2][2]==jugador)
	{		gana=jugador;
	}
	if(tablero[0][1]==jugador && tablero[1][1]==jugador &&tablero[2][2]==jugador)
	{		gana=jugador;
	}
	if(tablero[0][2]==jugador && tablero[1][1]==jugador &&tablero[2][0]==jugador)
	{		gana=jugador;
	}

	if(gana==1)
	{
//alert("gana el jugador 1");
		mensaje(gana);
		fin=true;
	}
	else if(gana==2){
		//alert("gana el jugador 2");
		mensaje(gana);
		fin=true;
		
	}
	else if(casillapte==0)
		fin=true;
		gana=0;
		mensaje(gana); 	
	
}

function mensaje(gana){
	console.log(gana);
	if(gana!==0){
textoMensaje="gana el jugador "+gana;
Mensaje=document.getElementById("mensaje");
Mensaje.style.display="block";
Mensaje.innerHTML=textoMensaje;
texto="jugar otra vez";
textoBoton=document.getElementById("boton");
textoBoton.style.display="block";
textoBoton.innerHTML=texto;

}if (gana === 0) {

	
}
	else{
textoMensaje="Empate";
Mensaje=document.getElementById("mensaje");
Mensaje.style.display="block";

Mensaje.innerHTML=textoMensaje;
texto="jugar otra vez";
textoBoton=document.getElementById("boton");
textoBoton.style.display="block";
textoBoton.innerHTML=texto;

}

}

function mensajeFin()
{ 
textoMensaje="Se acabo la partida ";
Mensaje=document.getElementById("mensaje");
Mensaje.style.display="block";
Mensaje.innerHTML=textoMensaje;
Pausa();
}

function mensajeCasilla(){

textoMensaje="Casilla ocupada";
Mensaje=document.getElementById("mensaje");
Mensaje.style.display="block";
Mensaje.innerHTML=textoMensaje;
Pausa();
}
function Pausa(){
segundos=0;
tiempo=setInterval(function(){
	while(segundos<2)
	{
		segundos++;
	}
	if(segundos==2)
	{
		Mensaje.style.display="none";
	}
},2000);
}