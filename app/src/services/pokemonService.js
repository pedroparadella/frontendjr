import axios from 'axios';

const api  = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});


class PokemonService {
    constructor() {
        this.api = api;
        this._deletePokemons = [];
        this._addPokemons = [];
        this.count  = 0;
        //load the count
        this.api.get('/pokemon/').then(res => {
            this.count = res.data.count;
        });
    }

    async addPokemon(pokemon) {
        this._addPokemons.push(
            {
                id: this.count + 1,
                name: pokemon.name,
                image: pokemon.imageUrl
            }  
        );
    }

    async deletePokemon(id) {
        if (id > this.count) {
            this._addPokemons = this._addPokemons.filter(pokemon => pokemon.id !== id);
            return;
        }
        this._deletePokemons.push(id);
    }


    async getAllPokemons({limit = 16 , offset = 0}) {
        //filter out the deleted pokemons
        let d  = await this.api.get(`/pokemon/?limit=${limit}&offset=${offset}`);
        d = await Promise.all(d.data.results.map(async obj => {
            let attributes = (await axios.get(obj.url)).data;
            return {
                id: attributes.id,
                name: attributes.name,
                image: attributes.sprites.front_default
            }  
        }));

        return d.filter(pokemon => !this._deletePokemons.includes(pokemon.id));
    }



}

export {PokemonService};