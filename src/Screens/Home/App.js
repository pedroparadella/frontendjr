import api from "../../services/api"
import React,{useEffect, useState} from "react"
import { BiTrash} from 'react-icons/bi'
import { FiEdit2 } from 'react-icons/fi'
import Sidebar from "../../Components/SideBar/Sidebar"
import ModalPoke from "../../Components/Modal/ModalPoke"
import logo from "../../Assets/Img/logo-teste/logo-teste.png"

import {
    ContainerCardPoke,
    CardPokemon,
    NamePokemon,
    ContainerHeader,
    ContainerSearch,
    Search,
    InputSearch,
    Container,
    Logo,
    ContainerTitle,
    Title,
    Newcard,
    PokemonSprite,
    ContainerButton,
    ButtonCard,
    Icons
    } from "./style"
export default function App() {
  //Pokemon Select
  const [selectPoke,setSelectPoke] = useState()
  const PokeCurrent = () =>{
    setSelectPoke()
  }
  //SideBar
  const [sidebar,setSidebar] = useState(false)
  const showsidebar = () =>{
    setSidebar(!sidebar)
    console.log(sidebar)
  } 
  //Request API Pokedex
  const [pokemons,setPokemons] = useState([])
  useEffect(() =>{
    api.get(`?offset=20&limit=40`)
    .then(response =>{
      setPokemons(response.data.results)
    }).catch(error =>{
      console.log(error)
    })
   
  },[])
  
  //Search Pokemon
  const [busca,setBusca] = useState('')
  const pokemonFilter = pokemons.filter((ite) => ite.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))
  //DeletPoke
  const handleDeletePokemon = () =>{
        const indice = pokemons.findIndex((i) => i.name === selectPoke)
        pokemons.splice(indice,1)
        console.log(pokemons)
        setSelectPoke()
  }
  return (
    <Container>      
      {<Sidebar show={sidebar}active={showsidebar}/>}
      {<ModalPoke show={selectPoke} pokemonSelect={PokeCurrent} delpoke={handleDeletePokemon}/>}
      <ContainerHeader>
        <Logo src={logo}></Logo>
      </ContainerHeader>
      <ContainerSearch>
        <Search>
            <InputSearch type="text" name="name" value={busca} onChange={(ev) =>setBusca(ev.target.value)}placeholder="Digite aqui sua busca..."></InputSearch>
        </Search>
      </ContainerSearch>
      <ContainerTitle>
        <Title>Resultado de busca</Title>
        <Newcard color={"btn_warning"}onClick={showsidebar}>Novo Card</Newcard>
      </ContainerTitle>
       <ContainerCardPoke>
        {pokemonFilter.map((item)=>{
        const uf = item.url
        const splitURl = uf.split('/')
        const spriteId = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${splitURl[6]}.png`
        return (
        <CardPokemon key={item.name}>
          <PokemonSprite src={spriteId} alt="poke" onClick={(ev) =>setSelectPoke(item.name)}/> 
          <NamePokemon>{item.name}</NamePokemon>
          <ContainerButton>
            <Icons color={"danger"}><BiTrash/></Icons>
            <ButtonCard color={"danger"} onClick={(ev) => setSelectPoke(item.name)}>Excluir</ButtonCard>
            <span>|</span>
            <Icons color={"warning"}><FiEdit2/></Icons>
            <ButtonCard color={"warning"} onClick={showsidebar}>Editar</ButtonCard>
          </ContainerButton>
        </CardPokemon>
        )})}
      </ContainerCardPoke> 
    </Container>

  )
}

