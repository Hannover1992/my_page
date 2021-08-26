function odliczanie()
	{
		var dzisiaj = new Date();
		
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;
		 
		 setTimeout("odliczanie()",1000);
	}


function wer_bin_ich() {
	var elem = document.getElementById("head_text");
	elem.innerHTML = "Ich bin ein technische Informatiker.Jemand der sowohl Informatik als auch Elektrotechnik in Bezug auf Rechnergestützte Anwendung studiert hat.Dank meinem Studium habe ich ein sehr tiefes und grundlegendes Verständnis für die aufbaut und Funktionsweise eines Computers.\n" }

function was_kann_ich() {
	var elem = document.getElementById("head_text");
	elem.innerHTML = " Ich kann sowohl in das Maschinennahe C/C++ als auch in Objekt Orientiertes Java programmieren. Wenn sie eine Datenbank benötigen, kann ich es von Relationales Algebra bis hin zu deklarative  SQL aufbauen, erweitern oder \npflegen. Des Weiteren kenne ich mich mit HTML/CSS und PHP, somit kann ich für ihnen eine einfache Werbung bis hin zu  einem Online-Shop entwerfen." }

function contackt() {
	var elem = document.getElementById("head_text");
	elem.innerHTML = "Ich bin erreichbar unter der telephone nummer: <br> 017641613749 <br> oder e-mail Adresse:<br>Hannover1992@googlemail.com" +
		"" +
		"" }
