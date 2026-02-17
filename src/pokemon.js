const maxPokemon = 151;
const listWrapper = document.querySelector("list-wrapper");
let allPokemon = [];

fetch(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemon}`)
.then((response) => response.json())
.then((data) => {
    allPokemon = data.results; 
    displayPokemon(allPokemon);
});

async function fetchPokemonData(id) {
    try {
        const [pokemon, pokemonSpecies] = await Promise.all([fetch(`https://pokeapi.co/api/v2/pokemon${id}`).then((res) => {
            res.json()
        }),
        fetch(`https://pokeapi.co/api/v2/pokemon-species${id}`).then((res) => {
            res.json()})
        ]);
        return true;
    }   catch (error) {
        console.error('Failed to fetch data'); 
    }
}

function displayPokemon(pokemon) {
    listWrapper.innerHTML = "";

    pokemon.forEach((pokemon) => {
        const pokemonID = pokemon.url.split("/") [6]
        const listItem = document.createElement("div");
        listItem.className= "list-item";
        listItem.innerHTML = `
        <div class= "number-wrap">
            <p class= "caption-font"> #${pokemonID}</p>
            </div>
            <div class= "img-wrap">
                <img src= "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites.pokemon/other/dream-world${pokemonID}.svg" alt= "${pokemon.name}" />
            </div>
            <div class= "name-wrap">
                <p class= "body-font">#${pokemon.name}</p>
            </div>
        `;

        listItem.addEventListener("click", async () => {
            const success= await fetchPokemonData(pokemonID);
            if (success) {
                window.location.href = `./detail.html?id=${pokemonID}`;f
            }
        })

        listWrapper.appendChild(listItem);
    });

}