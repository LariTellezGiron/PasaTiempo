function LimpiaReloj(){
	clearInterval(cronometro)
}

function IniciaReloj(){
	s=document.getElementById("segundos");
	m=document.getElementById("minutos");
	segundos=0;
	
	cronometro=setInterval(function(){
	
	segundos++;
	segs=segundos;
	
	mins=0;
	while(segs>=60)
	{
		mins++;
		segs-=60;
	}
	if (mins<10)m.innerHTML="0"+mins;
	else m.innerHTML=mins;
	
	if (segs<10)s.innerHTML="0"+segs;
	else s.innerHTML=segs;
	
	total_segs=segs;
	total_mins=mins;
	
},1000);
}