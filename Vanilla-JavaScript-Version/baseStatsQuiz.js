const STATS = ['HP', 'attack', 'defense', 'speed', 'special attack', 'special defense']
const randomStat = STATS[getRandomInt(0, 5)];
document.querySelector('#quizQuestion').innerText = `Which of these pokémon has more base ${randomStat}?`;


const leftPkmnNumber = getRandomPokemonNumber(1, 806);
const rightPkmnNumber = getRandomPokemonNumber(1, 806);

const leftPkmnURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${leftPkmnNumber}.png`;
document.querySelector('#leftPokemon').src = leftPkmnURL;

const rightPkmnURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${rightPkmnNumber}.png`;
document.querySelector('#rightPokemon').src = rightPkmnURL;
