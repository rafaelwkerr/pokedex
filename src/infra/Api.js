import axios from 'axios'

const httpClient = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

const getPokemonDetail = async (pokemonId) => {
    const response = await httpClient.get(`/pokemon/${parseInt(pokemonId)}`)
    return response.data
}

const getPokemonSpecies = async (pokemonId) => {
    const response = await httpClient.get(`/pokemon-species/${parseInt(pokemonId)}`)
    return response.data
}

export { getPokemonDetail, getPokemonSpecies }