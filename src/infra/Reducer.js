import { getPokemonDetail, getPokemonSpecies } from '../infra/Api'

const INITIAL_STATE = {
  data: {
    pokemonId: 0,
    pokemon: {}
  },
}


const getPokemonData = (state, pokemonId) => {
  const pokemon = fetchData(pokemonId);
  return {...state, data: {pokemon:  pokemon, pokemonId: pokemonId}};
}

const fetchData = async (pokemonId) => {
  const pokemonData = await getPokemonDetail(pokemonId);
  const pokemonSpecie = await getPokemonSpecies(pokemonId);
  return {
    id: pokemonData.id,
    name: pokemonData.name,
    height: pokemonData.height,
    weight: pokemonData.weight,
    types: pokemonData.types,
    frontImg: pokemonData.sprites.front_default,
    backImg:pokemonData.sprites.back_default,
    specie: pokemonSpecie.flavor_text_entries,
  };
}

  
export default function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'INPUT_POKEMON_ID':
      return getPokemonData(state, action.pokemonId);
  default:
      return state;
  }  
};