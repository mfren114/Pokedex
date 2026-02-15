const maxPokemon = 151;
const listWrapper = document.querySelector('list-wrapper');
let allPokemon = [];

fetch(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemon}`)
.then((response) => response.json())
.then((data) => {
    allPokemon = data.results;
    console.log(allPokemon);
});

async function fetchPokemonData(id) {
    try {
        const [pokemon, pokemonspecies] = await Promise.all([fetch(`https://pokeapi.co/api/v2/pokemon${id}`).then((res) => {
            res.json()
        }),
        fetch(`https://pokeapi.co/api/v2/pokemon-species${id}`).then((res) => {
            res.json()})
    ])
    return true
    } catch (error){
        console.error('Failed to fetch data'); 
    }
}

function displayPokemon(pokemon) {
    listWrapper.innerHTML = "";

    pokemon.forEach((pokemon) => {
        const pokemonID = pokemon.url.split("/") [6]
    })

}