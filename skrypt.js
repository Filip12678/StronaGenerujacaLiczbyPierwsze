function czyPierwsza(n)
{
	if (n < 2) {return 0;}
	
	for (var i = 2; i*i <= n; i++)
	{
		if (n % i == 0) {return false;}
	}
	
	return true;
}


function sito(n)
{
	var tablica = new Array(n - 1).fill(true);
	var liczbyPierwsze = [];
	
	for (var i = 2; i*i <= n; i++)
	{
		if(tablica[i]==true)
		{
			for(var j = i*i; j <= n; j += i) {tablica[j] = false};
		}
	}
	
	
	for(var i=2; i<=n; i++)
	{
		if(tablica[i]==true) {liczbyPierwsze.push(i);}
	}
	
	return liczbyPierwsze;
	
}

	


function wygenerujLiczbyPierwsze() {

	a = prompt("Wprowadź dolną granicę generowania liczb pierwszych")
	b = prompt("Wprowadź górną granicę generowania liczb pierwszych")


	var liczbyPierwsze = [];
	
	for (var i = a; i <= b; i++)
	{
		if ( czyPierwsza(i) == 1 ) {liczbyPierwsze.push(i);}
	}
	
	pass.value = liczbyPierwsze;

}



function wygenerujLiczbyPierwszeSitemErastotenesa() {
	
	b = prompt("Wprowadź górną granicę generowania liczb pierwszych")
	
	if (b >= 2)
	{
		pass.value = sito(b);
	}
	
}


function skopiujLiczbyPierwsze() {
	navigator.clipboard.writeText(pass.value);
}