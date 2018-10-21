function loadData() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const pkmnDataString = this.responseText.split("\n")
			const allPkmnDataArray = []
			for (let i = 1; i < pkmnDataString.length; i++) {
		      	let pkmnDataArray = pkmnDataString[i].slice(pkmnDataString[i].indexOf(']')+3).split(',')
		      	//TODO add object with the pokémon abilities in [0]	
		    	allPkmnDataArray[i] = pkmnDataArray
	      	}
			preparePkmnInfo(allPkmnDataArray);
	    }
  	};
	xhttp.open("GET", "pokemon.csv", true);
	xhttp.send();
}

const allPkmnDataArray = loadData();
const STATS = ['HP', 'attack', 'defense', 'speed', 'special attack', 'special defense']
const randomStat = STATS[getRandomInt(0, 5)];
document.querySelector('#quizQuestion').innerText = `Which of these pokémon has more base ${randomStat}?`;

function preparePkmnInfo (allPkmnDataArray) {
	const leftPkmnNumber = getRandomPokemonNumber(1, 806);
	const rightPkmnNumber = getRandomPokemonNumber(1, 806);
	const leftPkmn = allPkmnDataArray[parseInt(leftPkmnNumber)];
	const rightPkmn = allPkmnDataArray[parseInt(rightPkmnNumber)];

	const leftPkmnURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${leftPkmnNumber}.png`;
	document.querySelector('#leftPokemon').src = leftPkmnURL;
	const leftPkmnName = document.createElement('h1');
	leftPkmnName.innerText = leftPkmn[29];
	document.querySelector('#leftPokemonContainer').appendChild(leftPkmnName);

	const rightPkmnURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${rightPkmnNumber}.png`;
	document.querySelector('#rightPokemon').src = rightPkmnURL;
	const rightPkmnName = document.createElement('h1');
	rightPkmnName.innerText = rightPkmn[29];
	document.querySelector('#rightPokemonContainer').appendChild(rightPkmnName);

	document.querySelector('#reviewStatsButton').onclick = function(){
		const statsIndexes = {
			'attack' : 18,
			'defense' : 24,
			'HP' : 27,
			'special attack' : 32,
			'special defense' : 33,
			'speed' : 34,
		}
		document.querySelector('#leftPokemonStat').innerText = leftPkmn[statsIndexes[randomStat]];
		document.querySelector('#rightPokemonStat').innerText = rightPkmn[statsIndexes[randomStat]];
	}
}
