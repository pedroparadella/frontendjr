import { useContext, useState, useEffect } from "react";
import {PokemonContex} from "../../store/pokemon-contex"
import { BackgroundImage, InputContainer } from "./styles";
import Input from "../ui/input/Input";
import backImage from "../../assets/pokebackimage.png";

function SearchBar() {
  const [searchParam, setSearchParam] = useState("");
  const pokemonCtx = useContext(PokemonContex);
  const { fetchPokemons, setIsLoading, setError } = pokemonCtx;

  function getSearchParam(e) {
    setSearchParam(e.target.value)    
  }
//create a delay when calling the fetchpokemon function so the user has time to type
//also clear up the timer at each change on the input
  useEffect(() => {
    if(searchParam === ""){
      setIsLoading(false)
      return
    }
    setIsLoading(true)
    setError(null)

    const formatText = searchParam.toLowerCase()
    const clock = setTimeout(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${formatText}`;

    fetchPokemons(url, true);
    }, 1000)
    return () => clearTimeout(clock)

  }, [searchParam ,fetchPokemons, setError, setIsLoading])

  return (
    <BackgroundImage image={backImage}>
      <InputContainer>
        <Input
          type="text"
          onChange={getSearchParam}
          placeholder="Digite um pokemon ..."
          value = {searchParam}
        />
      </InputContainer>
    </BackgroundImage>
  );
}

export default SearchBar;
