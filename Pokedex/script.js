// Obtener referencias a elementos HTML
const pokemonList = document.getElementById('pokemon-list');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
const modal = document.getElementById('modal');

// Variable para almacenar datos de Pokémon
let pokemonData = [];

// Función para cargar los datos desde el archivo JSON local
function loadPokemonData() {
  fetch('pokemons.json')
    .then(response => response.json())
    .then(data => {
      pokemonData = data;
      displayPokemonList();
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
}

// Función para mostrar la lista de Pokémon en tarjetas con imágenes
function displayPokemonList(filteredData = []) {
  const dataToDisplay = filteredData.length > 0 ? filteredData : pokemonData;
  pokemonList.innerHTML = '';

  dataToDisplay.forEach(pokemon => {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    card.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.ThumbnailImage}" alt="${pokemon.name}">
    <p>Type: ${pokemon.type}</p>
  `;

    // Agregar evento de clic para mostrar detalles
    card.addEventListener('click', () => {
      displayPokemonDetails(pokemon);
    });

    pokemonList.appendChild(card);
  });
}

// Función para mostrar detalles de un Pokémon en el modal
function displayPokemonDetails(pokemon) {
  modal.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.ThumbnailImage}" alt="${pokemon.name}">
    <p>Type: ${pokemon.type.join(', ')}</p>
    <p>Weight: ${pokemon.weight} kg</p>
    <p>Height: ${pokemon.height} cm</p>
    <p>Abilities: ${pokemon.abilities.join(', ')}</p>
    <p>Weaknesses: ${pokemon.weakness.join(', ')}</p>
    <!-- Agregar más detalles aquí si es necesario -->
  `;

  // Mostrar el modal
  modal.style.display = 'block';
}

// Función para buscar Pokémon por nombre
function searchPokemonByName() {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredPokemon = pokemonData.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchTerm);
  });

  displayPokemonList(filteredPokemon);
}

// Cargar los datos desde el archivo JSON local cuando se cargue la página
window.addEventListener('load', loadPokemonData);

// Agregar evento de clic al botón de búsqueda
searchButton.addEventListener('click', searchPokemonByName);

// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});