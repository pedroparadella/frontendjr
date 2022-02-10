import React from "react";
import { useState, useCallback } from "react";

export const PokemonContex = React.createContext({
    pokemonList: [],
    isLoading: false,
    setIsLoading: () => {},
    error: null,
    setError: () => {},
    nextPageURL: null,
    previousPageURL: null,
    fetchPokemons: (url) => {},
    deletePokemon: (id) => {}
})

function PokemonProvider(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);
    const [nextPageURL, setNextPageUrl] = useState(null);
    const [previousPageURL, setPreviousPageURL] = useState(null);
  
    const fetchPokemons = useCallback(
      async (
        url = "https://pokeapi.co/api/v2/pokemon?limit=8",
        nameSearch = false
      ) => {
        //ensure everything is in default state when fuctions start running
        setIsLoading(true);
        setError(null);
        setNextPageUrl(null);
        setPreviousPageURL(null)
        setPokemonList([]);
  
        try {
          const response = await fetch(url);
  
          if (!response.ok) {
            throw new Error(
              "Failed to fecth data. Try refreshing the page or check for typos if you are searching by name!"
            );
          }
  
          const data = await response.json();
  
          if (nameSearch) {
            setPokemonList((prevState) => {
              return [...prevState, data];
            });
            setIsLoading(false);
          }
  
          if (!nameSearch) {
            const nextPage = data.next;
            const prevPage = data.previous;
            setNextPageUrl(nextPage);
            setPreviousPageURL(prevPage);
  
            return data.results.map(async function (pokemon) {
              const detailedResponse = await fetch(`${pokemon.url}`);
  
              const detailedData = await detailedResponse.json();
              setPokemonList((prevState) => {
                return [...prevState, detailedData];
              });
              setIsLoading(false);
            });
          }
        } catch (err) {
          setError(err.message);
          setIsLoading(false);
        }
      }, []);
  
    function deletePokemon(id) {
      setPokemonList((prevState) => {
        return prevState.filter((pokemon) => pokemon.id !== id);
      });
    }
  
  //passing setIsLoading and serError so I can manage those states in the SearchBar component
  //Not sure if is the best practice ... Research
    const pokemonCtx = {
      pokemonList,
      isLoading,
      setIsLoading,
      error,
      setError,
      nextPageURL,
      previousPageURL,
      fetchPokemons,
      deletePokemon,
    };
  
    return (
      <PokemonContex.Provider value={pokemonCtx}>
        {props.children}
      </PokemonContex.Provider>
    );
  }
  
  export default PokemonProvider;
  