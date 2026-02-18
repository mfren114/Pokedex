async function fetchAllPokemon() {
   
    const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const response = await fetch(API_URL);
    const data = await response.json();
    const pokemonResults = data.results;

    const detailedPokemonData = await Promise.all(pokemonResults.map(async (pokemon) => {
        const detailResponse = await fetch(pokemon.url);
        return detailResponse.json();
    }));
    
    displayPokemon(detailedPokemonData);
}

function displayPokemon(pokemons) {
    const pokemonListDiv = document.getElementById('pokemon-list');
    pokemons.forEach(pokemon => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');

        
        const imageUrl = pokemon.sprites.front_default;
        const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); // Capitalize name

        pokemonCard.innerHTML = `
            <img src="${imageUrl}" alt="${name}">
            <p>#${pokemon.id} - ${name}</p>
        `;

        pokemonListDiv.appendChild(pokemonCard);
    });
}

fetchAllPokemon();