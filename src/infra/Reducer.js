const INITIAL_STATE = {
  data: {
    pokemonId: 0,
    pokemon: {},
  },
}
  
const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'INPUT_POKEMON_ID':
      return {...state, data: {pokemonId: action.pokemonId}};
  default:
      return state;
  }  
};

export default appReducer;