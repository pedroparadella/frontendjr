import React from "react";
import './App.css';
import pokedexLogo from "./assets/logo.svg";
import SearchBar from "./components/SearchBar";
import Pokedex from "./components/Pokedex";
import { searchPokemon, catchPokemonData, catchPokemons } from "./Api";

const { useState, useEffect } = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [notFound, setNotFound] = useState(false)

  const fetchPokemons = async () => {
    try {
      const data = await catchPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await catchPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setNotFound(false)
    } catch (err) { }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const onSearch = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }
    setNotFound(false)
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
    }
  }

  return (
    <div>
      <div className="menu">
        <img className="pokedexLogo" src={pokedexLogo} alt="logo" />
      </div>
      <div className="introBar" >
        <SearchBar onSearch={onSearch} />
      </div>
      {notFound ? (
        <div> Pokemon não encontrado</div>
      ) : (
        <div>
          <Pokedex pokemons={pokemons} />
        </div>
      )}
    </div>
  )
}



