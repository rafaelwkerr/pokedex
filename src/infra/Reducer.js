import { getPokemonDetail, getPokemonSpecies } from '../infra/Api'

const INITIAL_STATE = {
  data: {
    pokemonId: 0,
    pokemon: {},
    species: [],
  },
}


const getPokemonData = async (state, pokemonId) => {
  const pokemonData = await getPokemonDetail(pokemonId);
  const pokemonSpecie = await getPokemonSpecies(pokemonId);
  console.log("Pokemon Data", pokemonData);
  console.log("Pokemon Specie", pokemonSpecie);
  const newState = {pokemon:  pokemonData, species: pokemonSpecie, pokemonId: pokemonId}
  console.log("New State", newState);
  return newState;
}

export default function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'INPUT_POKEMON_ID':
      return getPokemonData(state, action.pokemonId).then(value => return value);
  default:
      return state;
  }  
};