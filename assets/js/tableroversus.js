function IniciarTablero(color){
	for(i=0;i<3;i++){

		for(j=0;j<3;j++)
			{
				tablero [i][j]=0;
				celda.style.background=color;
				celda=document.getElementById("c"+i+j);
				celda.innerHTML="";
			}
}
}

function PintarCelda(x,y,color,jugador){
celda=document.getElementById("c"+x+y);

celda.style.background=color;
if (jugador==1) {
celda.innerHTML="<img src='assets/images/gato/tache2.PNG'></img>";
}
else{
celda.innerHTML="<img src='assets/images/gato/CIRCULO2.PNG'></img>"; 
}
} 