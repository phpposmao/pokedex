const poke_container = document.getElementById('poke-container');

const pokemon_count = 150;

const colors = {
  fire: '#fddfdf',
  grass: '#defde0',
  electric: '#fcf7de',
  water: '#def3fd',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#b38aea',
  bug: '#f8d5a3',
  dragon: '#97b3a6',
  psychic: '#ff90c4',
  flying: '#f5f5f5',
  fighting: '#E6E0D4',
  normal: '#f5f5f5',
};

const typesColors = {
  fire: '#e3350d',
  grass: '#4dad5b',
  electric: '#ffe119',
  water: '#30a7d7',
  ground: '#e5c800',
  rock: '#7f6f00',
  fairy: '#ff90c4',
  poison: '#4b1a8e',
  bug: '#a38c21',
  dragon: '#0e2b61',
  psychic: '#b97fc9',
  flying: '#9eb7b8',
  fighting: '#a93f0e',
  normal: '#c7aa79',
};


const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  for(let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');

  const poke_types = pokemon.types.map(type => type.type.name);
  const type = main_types.find(type => poke_types.indexOf(type) > -1);
  const color = colors[type];
  const typeColor = typesColors[type];

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHtml = `
    <div class="img-container">
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="">
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type" style="background-color:${typeColor}">${type.toLocaleUpperCase()}</small>
    </div>
  `;

  pokemonEl.innerHTML = pokemonInnerHtml;

  poke_container.appendChild(pokemonEl);
}

fetchPokemons()
