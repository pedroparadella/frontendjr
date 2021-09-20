import axios from 'axios';

const api  = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});


class PokemonService {
    constructor() {
        this.api = api;
        if(!localStorage.getItem('data'))
            localStorage.setItem('data', JSON.stringify({
                deletePokemons: [],
                addPokemons: []
            }));
        this._deletePokemons = JSON.parse(localStorage.getItem('data')).deletePokemons;
        this._addPokemons = JSON.parse(localStorage.getItem('data')).addPokemons;
        this.count  = 0;
        //load the count
        this.api.get('/pokemon/').then(res => {
            this.count = res.data.count;
        });
    }

    async saveChanges() {
        localStorage.setItem('data', JSON.stringify({
            deletePokemons: this._deletePokemons,
            addPokemons: this._addPokemons
        }));
    }

    async addPokemon(pokemon) {
        this._addPokemons.push(
            {
                id: this.count + 1,
                name: pokemon.name,
                image: pokemon.imageUrl
            }  
        );
        this.count++;
        await this.saveChanges();
    }

    async deletePokemon(id) {
        if (id > this.count) {
            this._addPokemons = this._addPokemons.filter(pokemon => pokemon.id !== id);
            return;
        }
        this._deletePokemons.push(id);
        await this.saveChanges();
    }


    async getAllPokemons(offset, limit=16) {
        //filter out the deleted pokemons
        let d  = await this.api.get(`/pokemon/?limit=${limit || 16}&offset=${offset||0}`);
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