function loadData() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const pkmnDataString = this.responseText.split("\n")
			const allPkmnDataArray = []
			for (let i = 1; i < pkmnDataString.length; i++) {
		      	let pkmnDataArray = pkmnDataString[i].slice(pkmnDataString[i].indexOf(']')+2).split(',')
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
const STATS = ['HP', 'Attack', 'Defense', 'Speed', 'Special Attack', 'Special Defense']
const randomStat = STATS[getRandomInt(0, 5)];
document.querySelector('#quizQuestionStat').innerText = `${randomStat}`;


function preparePkmnInfo (allPkmnDataArray) {
	const leftPkmnNumber = getRandomPokemonNumber(1, 807);
	const rightPkmnNumber = getRandomPokemonNumber(1, 807);
	const leftPkmn = allPkmnDataArray[parseInt(leftPkmnNumber)];
	const rightPkmn = allPkmnDataArray[parseInt(rightPkmnNumber)];

	const leftPkmnURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${leftPkmnNumber}.png`;
	document.querySelector('#leftPokemon').src = leftPkmnURL;
	const leftPkmnName = document.querySelector('#leftPokemonName');
	leftPkmnName.innerText = leftPkmn[30];

	const rightPkmnURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${rightPkmnNumber}.png`;
	document.querySelector('#rightPokemon').src = rightPkmnURL;
	const rightPkmnName = document.querySelector('#rightPokemonName');
	rightPkmnName.innerText = rightPkmn[30];

	let loadedPokemon = 0;
	const selectablePokemonOnLoad = () => {
		loadedPokemon++;
		if (loadedPokemon === 2) {
			hideLoading();
		}
	}

	document.querySelector('#leftPokemon').onload = selectablePokemonOnLoad;
	document.querySelector('#rightPokemon').onload = selectablePokemonOnLoad;
}
