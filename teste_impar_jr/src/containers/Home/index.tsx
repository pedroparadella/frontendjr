/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react'

import { Container, Article, ArticleHeader, Body } from './styles'

import Modal from '../../components/Modal'
import { AnimatePresence } from 'framer-motion'

import API from '../../api'

import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import Card from '../../components/Card'

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalSelector, setModalSelector] = useState<string>('')

  const [pokemons, setPokemons] = useState([])
  const [pokemonsData, setPokemonsData] = useState([])

  //MODAIS HANDLERS
  const handleCriarCardModal = () => {
    setModalSelector('criar-card-modal')
  }
  const handleExcluirModal = () => {
    setModalSelector('excluir-card-modal')
  }

  //API
  const fetchPokemons = async () => {
    await API.get('').then(res => { setPokemons(res.data.results.map((pkm: { name: any }) => pkm.name)) })
    await API.get('').then(res => { setPokemonsData(res.data.results.map((pkmData: { url: any }) => pkmData.url)) })
  }
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchPokemons();
  }, [])

  return (
    <Container isModalOpen={showModal}>

      <AnimatePresence initial={false} exitBeforeEnter={true} >
        {showModal && <Modal setActive={setShowModal} active={showModal} type={modalSelector} />}
      </AnimatePresence>

      <Header />
      <SearchBar pokemon={pokemons} setSearchTerm={setSearch} />
      <Article>
        <ArticleHeader>
          <h1>Resultado de Busca</h1>

          <button onClick={() => { handleCriarCardModal(); setShowModal(true) }}>Novo Card</button>
        </ArticleHeader>
        <Body>

          {pokemons.filter((val: string) => {
            if (search === "") {
              return val;
            } else if (val.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          }).map((name) =>
            <AnimatePresence initial={false} exitBeforeEnter={true}>
              <Card key={name} nome={name} pokemon={pokemonsData}
                setActive={() => { handleExcluirModal(); setShowModal(true) }} />
            </AnimatePresence>
          )}


        </Body>
      </Article>
    </Container >
  )

}
