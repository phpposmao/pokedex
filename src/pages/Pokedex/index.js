import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.scss';

import pokeballImg from '../../assets/pokeball.svg'

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get(`pokemon`).then(response => {
      setPokemons(response.data.results)
    })
  }, []);
  console.log(pokemons)

  return (
    <div className='poke-container' id='poke-container'>
      {pokemons.map(pokemon => (
        <div className='pokemon' key={pokemon.id}>
          <div className='img-container'>
            <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt={`${pokemon.name}`}/>
          </div>
          <div className='info'>
            <span className='number'>{pokemon.id}</span>
            <h3 className='name'>{pokemon.name}</h3>
            <img src={pokeballImg} alt="pokeball" />
          </div>
        </div>
      ))}
    </div>
  )
}
