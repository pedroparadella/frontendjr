import './Styles/position-resultSection.scss'
import './Styles/style-resultSection.scss'
import {SearchField} from "../SearchField/SearchField"
import { useState, useEffect, useMemo} from "react"
import pokemonApi from "../../Services/api";
import { Card } from "../Card/Card"

export const ResultSection = () => {
  function handleClick(){
    alert('Funcionalidade não implementada')
  }

  // pega os pokemons
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    pokemonApi
      .get("pokemon")
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => console.warn(err));
  }, []);

  // função para pegar a url da img dos pokemons
  const buildImgUrl = (url) => {
    const id = url.split("/");
    const idx = id.length - 2;
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[idx]}.png`;

    return imgUrl;
  };

  //filtro de busca
  const [search, setSearch] = useState('')

  const filteredPokemons = useMemo(() => {
    const lowerSearch = search.toLowerCase()
    return pokemons.filter((pokemon) => pokemon.name.includes(lowerSearch))
  },[search,pokemons])

  return (
    <section className='results-section'>
      {/* Passando as propriedades e função do meu input via props */}
      <SearchField type='text' value={search} onChangeFunction={(event) => setSearch(event.target.value)}/>
      <div className='div-grid'>  
        <div className='header-grid'>
          <h1>Resultado de busca</h1>
          <button id="button-create-card" type='button' onClick={handleClick}>Novo Card</button>
        </div>
        <div className="container-cards">
          {
            filteredPokemons.map((pokemon) => {
              return (
                <Card key={pokemon.name} pokemonName={pokemon.name} pokemonImage={buildImgUrl(pokemon.url)} />
              )
            })
          }
        </div>
      </div>

    </section>
  )
}