// Function to fetch data for all 151 Pokémon
async function fetchAllPokemon() {
    // The PokeAPI allows a 'limit' query parameter to specify the number of results
    const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const response = await fetch(API_URL);
    const data = await response.json();
    const pokemonResults = data.results;

    // Use Promise.all to fetch details for all Pokémon concurrently
    const detailedPokemonData = await Promise.all(pokemonResults.map(async (pokemon) => {
        const detailResponse = await fetch(pokemon.url);
        return detailResponse.json();
    }));
    
    displayPokemon(detailedPokemonData);
}

// Function to display the Pokémon in the HTML div
function displayPokemon(pokemons) {
    const pokemonListDiv = document.getElementById('pokemon-list');
    pokemons.forEach(pokemon => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');

        // Get the image URL (front_default sprite)
        const imageUrl = pokemon.sprites.front_default;
        const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); // Capitalize name

        pokemonCard.innerHTML = `
            <img src="${imageUrl}" alt="${name}">
            <p>#${pokemon.id} - ${name}</p>
        `;

        pokemonListDiv.appendChild(pokemonCard);
    });
}

// Call the function to start fetching and displaying Pokémon
fetchAllPokemon();