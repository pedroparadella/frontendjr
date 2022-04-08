import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Banner } from "./components/Banner";
import { DeleteModal } from "./components/DeleteModal";
import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";
import { getPokemon, getPokemonData, searchPokemon } from "./services/api";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const [isNewDeleteModalIsOpen, setIsNewDeleteModalIsOpen] = useState(false)


  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemon()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const result = await Promise.all(promises)
      setPokemons(result)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons()
    }
    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)

    if (!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
    }
    setLoading(false)
  }

  const showInsertCard = () => {
    setShowCard(true)
  }
  const CloseInsertCard = () => {
    if (showCard) {
      setShowCard(false)
    }
  }
  function handleOpenNewDeleteModal() {
    setIsNewDeleteModalIsOpen(true)
  }

  function handleCloseNewDeleteModal() {
    setIsNewDeleteModalIsOpen(false)
  }
  const notify = () => toast.warn('Função não implementada', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});


  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <DeleteModal
        isOpen={isNewDeleteModalIsOpen}
        onRequestClose={handleCloseNewDeleteModal}
        notify={notify}
      />
      <Banner onSearch={onSearchHandler} />
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
      {notFound ? (<div className="search-error">Não encontramos este Pokemon, Refaça a pesquisa ou Recarregue a página.</div>)
        : (<MainContainer
            pokemons={pokemons}
            loading={loading}
            showCard={showCard}
            showInsertCard={showInsertCard}
            CloseInsertCard={CloseInsertCard}
            handleOpenNewDeleteModal={handleOpenNewDeleteModal}
            notify={notify}
        />
        )}
    </div>
  );
}


