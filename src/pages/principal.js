import React, { useEffect, useState } from 'react';
import { getPokemon, getAllPokemon } from '../services/pokemon';
import {AppBody, AppContainer, GridContainer, Btn, Button} from './principalStyles'
import Header from '../components/header/header';
import  Card from '../components/cards/cards'


function Principal() {
  
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';


  useEffect(() => {
    fetchData();
  }, [])


  async function fetchData() {
    let response = await getAllPokemon(initialURL)
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    await loadPokemon(response.results);
    setLoading(false);
  }

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

    console.log(pokemonData)
    
    return (   
      <AppBody>
      <Header onSearch =  { async (text) => {
        if(text !== ''){ setPokemonData(pokemonData.filter((pokemon)=>{
         return pokemon.name.includes(text)
        } ) )
      } else {
        fetchData()
      }
      }}  />
      <br/>
      <h1>Procure por seu pokemon preferido</h1>
       <AppContainer>
         
        {
          loading ? <h1> loading</h1> : (
            <>
            <Btn>
              <Button onClick = {prev}>Anterior</Button>
              <Button onClick = {next}>Próximo</Button>
            </Btn>
            <GridContainer>
            <Card  pokemons = {pokemonData} />
            </GridContainer>
            <Btn>
              <Button onClick = {prev}>Anterior</Button>
              <Button onClick = {next}>Próximo</Button>
            </Btn>
            </>
          )
        }
        </AppContainer>
      </AppBody>    
  )
}

export default Principal;