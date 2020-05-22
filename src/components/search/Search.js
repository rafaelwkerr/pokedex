import React from 'react';
import {useDispatch} from 'react-redux'

export default function Search() {
  const dispatch = useDispatch();

  const setPokemonId = event => {
    dispatch({type:'INPUT_POKEMON_ID', pokemonId: event.target.value});
  }

  return (
    <div>
    <input
        minLength={1}
        type="number"
        class="form-control"
        placeholder="Enter a Pokémon code"
        onChange={setPokemonId} />
    </div>
  );
}