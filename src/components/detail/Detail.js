/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import { getPokemonDetail, getPokemonSpecies } from '../../infra/Api'
import './Detail.css'

export default function Detail() {

  const pokemonId = useSelector(state => state.data.pokemonId);

  const [pokemon, setPokemon] = useState(
    {
      id: 0,
      name: "",
      height: 0,
      weight: 0,
      types: [],
      specie: [],
    }
  )
  
  useEffect(() => {
    fetchData()
  }, [pokemonId])

  const fetchData = async () => {
    const pokemonData = await getPokemonDetail(pokemonId);
    const pokemonSpecie = await getPokemonSpecies(pokemonId);
    setPokemon({
      id: pokemonData.id,
      name: pokemonData.name,
      height: pokemonData.height,
      weight: pokemonData.weight,
      types: pokemonData.types,
      frontImg: pokemonData.sprites.front_default,
      backImg:pokemonData.sprites.back_default,
      specie: pokemonSpecie.flavor_text_entries,
    });
  }

  const urlImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id.toString().padStart(3, '0')}.png`;

  const flavor = pokemon.specie.map( ( flavor ) => {
       return flavor.language.name === 'en' ?  flavor.flavor_text : "";
  })[1];

  return (
    <>
      {pokemonId > 0 ?
        <div id="pokedex" class="card" >
          <div class="row no-gutters">
                <div class="col-md-4">
                  <img src={urlImg} alt={pokemon.name} class="card-img" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">
                          {pokemon.name}
                        </h5>
                        <ul class="list-inline">
                        {pokemon.types.map((type) => {
                          const typeStyle = `list-inline-item type ${type.type.name}`;
                          return(
                            <li class={typeStyle}>
                              {type.type.name}
                            </li>
                          );
                        })}
                        </ul>
                        <p class="card-text">
                          {flavor}
                        </p>
                        <p class="card-text">
                          Height: {pokemon.height}m
                        </p>
                        <p class="card-text">
                          Weight: {pokemon.weight}kg
                        </p>
                    </div>
                </div>
            </div>          
        </div>
      : null }
    </>
  );
}
