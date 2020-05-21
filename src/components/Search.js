import React from 'react';
import {useDispatch} from 'react-redux'

export default function Search() {
  const dispatch = useDispatch();

  function setPokemonId(event) {
    console.log(event.target.value);
    dispatch({type:'INPUT_POKEMON_ID', pokemonId: parseInt(event.target.value)});
  }

  return (
    <div>
    <input 
        type="number"
        class="form-control"
        onChange={setPokemonId} 
        placeholder="Enter a Pokémon code"/>
    </div>
  );
}