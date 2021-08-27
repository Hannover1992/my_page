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
	elem.innerHTML = "Ich bin ein technische Informatiker.Jemand der sowohl Informatik als auch Elektrotechnik in Bezug auf Rechnergestützte Anwendung studiert hat.Dank meinem Studium habe ich ein sehr tiefes und grundlegendes Verständnis für die aufbaut und Funktionsweise eines Computers.\n"
	var elem = document.getElementById("youtube_video")
	elem.style.visibility="hidden";
	}

function was_kann_ich() {
	var elem = document.getElementById("head_text");
	elem.innerHTML = " Ich kann sowohl in das Maschinennahe C/C++ als auch in Objekt Orientiertes Java programmieren. Wenn sie eine Datenbank benötigen, kann ich es von Relationales Algebra bis hin zu deklarative  SQL aufbauen, erweitern oder \npflegen. Des Weiteren kenne ich mich mit HTML/CSS und PHP, somit kann ich für ihnen eine einfache Werbung bis hin zu einem Online-Shop entwerfen. Unten kleine Video von letzten Projekt."
	var elem = document.getElementById("youtube_video")
	elem.style.visibility="visible";
	}


function resume() {
	var elem = document.getElementById("head_text");
	elem.innerHTML = "Edukation:<br>2013-2017: Hannover Kolleg <br>2017-Heute: Student am Leibniz Universität Hannover              technische Informatik<br><br>Selbständig:<br>2017/18: PC/Handy Reparatur Service<br>2019: Vermittlung von polnischen Pflegekräften<br><br>Arbeitnehmer:<br>2020: Studienkreis Nachhilfelehrer für Mathematik und Informatik<br>2021-Heute: Tier Wartung von E-Scooter und E-Mopeds<br>2021-Heute: Barbarossa Erwachsenenbildung Microsoft-Excel/Outlook Kurse"

	elem.style.fontSize = "15px"
	var elem = document.getElementById("youtube_video")
	elem.style.visibility="hidden";
}




function contackt() {
	var elem = document.getElementById("head_text");
	elem.innerHTML = "Ich bin erreichbar unter der telephone nummer: <br> 017641613749 <br> oder e-mail Adresse:<br>Hannover1992@googlemail.com";
	var elem = document.getElementById("youtube_video")
	elem.style.visibility="hidden";
	}
