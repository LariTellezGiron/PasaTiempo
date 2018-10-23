function aleatorio(inferior,superior){//devuelve num aleatorio
numPosibilidades = superior - inferior
aleat = Math.random() * numPosibilidades
aleat = Math.round(aleat)
return parseInt(inferior) + aleat
}

//genera la comida mirando de no posicionarla en una pos ocupada x l serp
function generaPapeo(){
var generadoOK=false
var cont
var longSerp=serpF.length

while(generadoOK==false){
cont=0
comidaF=aleatorio(0,tamFTablero)
comidaC=aleatorio(0,tamCTablero)
while((comidaF!=serpF[cont] || comidaC!=serpC[cont]) && cont<longSerp){
cont++
}
//si contador es menor q la longitud del array (serp), se ha de repetir la posicion xq le ha tocado una pos ocupada por la serp
if(cont<longSerp){
generadoOK=false
}else{
generadoOK=true
}
}
document.getElementById(comidaF+","+comidaC).style .background=colorComida
}

//captura tecla y asigana el valor a la variable direccion
function capturaTecla(){
var tecla=event.keyCode

if(tecla==49 && direccion!=2){5
direccion=4
}else if(tecla==50 && direccion!=1){
direccion=3
}else if(tecla==51 && direccion!=4){
direccion=2
}else if(tecla==53 && direccion!=3){
direccion=1
}
event.returnValue = false;
}

//dibuja el tablero. tanto la comida, como la serpiente, usea todo, son celdas
function pintaTablero(filas,cols){
document.write("<center><table border=0 cellspacing=3 cellpadding=11 id=tablero>")
for(f=0;f<filas;f++){
document.write("<tr></tr>")
for(c=0;c<cols;c++){
document.write("<td width=4 height=4 id="+f+","+c+"></td>")
}
}
document.write("</table><font face=Verdana size=2><br><b><span id=puntos>0</span></b></font></center>")
document.getElementById("tablero").style.background=colorTablero
}

//recorre los arrays de la serp(sus posiciones en tablero) y las pinta
function pintaSerp(){
for(i=0;i<serpF.length;i++){
document.getElementById(serpF[i]+","+serpC[i]).style.background=colorSerp
}
}

function colisionSerp(){
//miro si la cabeza de la serp xoca con su cola
var cont=1//empiezo a contar desde la pos 2 del array serp,porque logicamente la cabeza no puede chocar con su propia cabeza
var longSerp=serpF.length-1

while((serpF[0]!=serpF[cont] || serpC[0]!=serpC[cont]) && cont<=longSerp){
cont++
}
if(serpF[0]!=serpF[cont] || serpC[0]!=serpC[cont]){
return false
}else{
return true
}
}

function pisadoPosProhibida(){
//miro si la serp se come la comida o choca con fin tablero o ella misma
if(serpF[0]==comidaF && serpC[0]==comidaC){
puntos=puntos+20
document.getElementById("puntos").innerHTML=puntos
posisACrecer=3
generaPapeo()
}else if(colisionSerp()==true){
return true
}else if(serpF[0]>tamFTablero || serpF[0]<0 || serpC[0]>tamCTablero || serpF[0]<0) {
return true
}
}

//muevo la cabeza(posiciones 0 de los 2 arrays)de la serp pa arriba,abajo,izq o der
function direccionaSerp(){
if(direccion==1){
serpF[0]=serpF[0]-1//movimiento hacia arriba
}else if(direccion==2){
serpC[0]=serpC[0]+1//movimiento hacia derecha
}else if(direccion==3){
serpF[0]=serpF[0]+1//movimiento hacia abajo
}else{
serpC[0]=serpC[0]-1//movimiento hacia izquierda
}
}

function mueveSerp(){
var numTemp//variable auxiliar
if(posisACrecer>0){
posisACrecer=posisACrecer-1
numTemp=0
}else{
document.getElementById(serpF[serpF.length-1]+","+serpC[serpF.length-1]).style.background=colorTablero
numTemp=1
}
var longSerp=serpF.length-numTemp

//muevo hacia arriba los valores de los arrays (movimiento serp)
for(i=longSerp;i!=0;i--){
serpF[i]=serpF[i-1];serpC[i]=serpC[i-1]
}

direccionaSerp()

if(pisadoPosProhibida()==true){
//si esto ocurre mato temporizador
window.clearInterval(init)
//alert("Game Over.")
 document.getElementById("msg-final").innerHTML = "Game Over";
}else{
pintaSerp()
}
}





//variables globales-----
var tamCTablero=26//tamaño en columnas para el tablero de juego
var tamFTablero=15//tamaño en filas para el tablero de juego
var comidaF//posicion en fila para situar la comida
var comidaC//posicion en columna para situar la comida
var colorTablero="blue"
var colorSerp="#ffffff"
var colorComida="#888800"
var direccion=2//direccion serpiente. 1=arriba,2=derecha,3=abajo,4=izquierda
var posisACrecer=0//variable que guarda cuantos cuadraditos ha de crecer la serp
var puntos=0//puntuacion obtenida

var serpF = new Array()//posiciones en filas para las posis de la serpiente
var serpC = new Array()//posiciones en cols para las posis de la serpiente
//todas las posiciones del tablero que "son" serpiente se guarda en estos 2 arays. Se podria haber hecho en una matriz de 2 dimensiones

//inicializo la serpiente con 3 posiciones o cuadraditos de larga
serpF[0]=10
serpF[1]=10
serpF[2]=10
serpC[0]=5
serpC[1]=4
serpC[2]=3


//pinto el tablero de juego y pinto comida
pintaTablero(tamFTablero+1,tamCTablero+1)
generaPapeo()

//cada 130 misisegs se llama a mueveSerp, es como si fuera el programa principal
var init=window.setInterval("mueveSerp()",130);