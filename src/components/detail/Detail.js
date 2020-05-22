/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import './Detail.css'

export default function Detail() {

  const pokemonFromState = useSelector(state => {
    console.log("Global State", state)
    return state.data.pokemon;
  });

  const [pokemon, setPokemon] = useState(
    {
      id: 0,
      name: "",
      height: 0,
      weight: 0,
      types: [],
      frontImg: "",
      backImg: "",
      specie: [],
    }
  );
  
  useEffect(() => {
    console.log(pokemonFromState);
    setPokemon(pokemonFromState)
  }, [pokemonFromState])

  const urlImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id ? pokemon.id.toString().padStart(3, '0') : 0}.png`;

  const flavor = pokemon.specie ? pokemon.specie.map( ( flavor ) => {
       return flavor.language.name === 'en' ?  flavor.flavor_text : "";
  })[1] : null;

  return (
    <>
      {pokemon.id > 0 ?
        <div id="pokedex" class="card" >
          <div class="row no-gutters">
                <div class="col-md-4">
                  <img src={urlImg} alt={pokemon.name} class="card-img" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">
                          {pokemon.id} . {pokemon.name}
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
                          Height: {Math.round(pokemon.height * 0.1)} m
                        </p>
                        <p class="card-text">
                          Weight: {Math.round(pokemon.weight * 0.1)} kg
                        </p>
                        <div class="text-right">
                          <img src={pokemon.frontImg} alt={pokemon.name}/>
                          <img src={pokemon.backImg} alt={pokemon.name}/>  
                        </div>
                    </div>
                </div>
            </div>          
        </div>
      : null }
    </>
  );
}
