const INITIAL_STATE = {
  data: {
    pokemonId: 9,
  },
}
  
const appReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case 'INPUT_POKEMON_ID':
      return {...state, data: {pokemonId: action.pokemonId}};
  default:
      return state;
  }  
};

export default appReducer;