import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { SearchBox } from './components/SearchBox'
import { MainContent } from './components/Main'
import { NewCardModal } from './components/NewCardModal'

import Modal from 'react-modal'

import { useState } from 'react';
import { CardProvider } from './hooks/useNewCard'

Modal.setAppElement('#root')


export function App() {
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
 

  function handleOpenNewCardModal() {
    setIsNewCardModalOpen(true)

  }
  function handleCloseNewCardModal() {
    setIsNewCardModalOpen(false)
    

  }





  return (
    <CardProvider>

      <Header />
      <SearchBox />
      <MainContent onOpenNewCardModal={handleOpenNewCardModal} />
      <NewCardModal
        isOpen={isNewCardModalOpen}
        onRequestClose={handleCloseNewCardModal}
      />
      <GlobalStyle />

    </CardProvider>




  )
}


