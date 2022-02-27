import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import './styles.scss';

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

const main_types = Object.keys(colors);

export default function Description() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonId, setPokemonId] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonAbility, setPokemonAbility] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);

  const pokemonName = useParams().pokemon;

  useEffect(() => {
    api.get(`pokemon/${pokemonName}`).then(response => {
      setPokemon(response.data);
      setPokemonId(response.data.id);
      setPokemonType(response.data.types[0].type.name);
      setPokemonAbility(response.data.abilities[0].ability.name)
      setPokemonStats(response.data.stats)
    })
  }, []);

  console.log(pokemonStats);

  return(
    <div className='description'>
      <div className='details-column-one' key={pokemon.id}>
        <div className='img-container'>
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId.toString().padStart(3, '0')}.png`} alt='pokemon' />
        </div>
        <div className='description-stats'>
          {pokemonStats.map((stat) => (
            <div>
              <h3>{stat.stat.name}</h3>
              <p>{stat.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="details-column-two">
        <span className="poke-description">
          There is a plant seed on its back right from the day this pokémon is born. The seed slowly grows larger.
        </span>
        <div className="description-details">
          <div>
            <h3>Name</h3>
            <p>{pokemon.name}</p>
          </div>
          <div>
            <h3>Number</h3>
            <p>{`${pokemonId.toString().padStart(3, '0')}`}</p>
          </div>
          <div>
            <h3>Height</h3>
            <p>{pokemon.height}dm</p>
          </div>
          <div>
            <h3>Weight</h3>
            <p>{`${pokemon.weight}g`}</p>
          </div>
          <div>
            <h3>Ability</h3>
            <p>{pokemonAbility}</p>
          </div>
            <div className="description-type">
              <h3>Type</h3>
              <p>{pokemonType}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
