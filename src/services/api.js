import axios from "axios";

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const searchPokemon = async (pokemon) => {
    try{
        let url = `/pokemon/${pokemon}`

        const response = await api.get(url)
        const data = response.data
    
        return data
    } catch(error){
        console.log(error);
    }

}

export const getPokemon = async (limit = 48, offset = 0) => {
    try{
        let url = `/pokemon?limit=${limit}&offset=${offset}`

        const response = await api.get(url)
        const data = response.data
    
        return data
    } catch(error){
        console.log(error);
    }
    
}

export const getPokemonData = async (url) => {
    try {         
        const response = await api.get(url)
        const data = response.data

        return data
    } catch(error){
        console.log(error);
    }

}