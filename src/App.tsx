import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { DeleteCard } from './components/DeleteCard';
import { Header } from './components/Header';
import { NewCard } from './components/NewCard';
import {GlobalStyle} from './styles/global'
Modal.setAppElement('#root');

function App() {
  const [isDeleteCardOpen, setIsDeleteCardOpen] = useState(false);
  const [isNewCardOpen, setIsNewCardOpen] = useState(false);

  function handleOpenDeleteCardModal(){
    setIsDeleteCardOpen(true);
  }

  function handleCloseDeleteCardModal() {
    setIsDeleteCardOpen(false);
  }

  function handleOpenNewCardModal() {
    setIsNewCardOpen(true);
  }

  function handleCloseNewCardModal() {
    setIsNewCardOpen(false);
  }
  
  return (
    <div className="App">
        <Header/> 
        <Dashboard 
          onOpenDeleteCardModal={handleOpenDeleteCardModal}
          onOpenNewCardModal={handleOpenNewCardModal}
        />
        <DeleteCard 
          isOpen={isDeleteCardOpen}
          onRequestClose={handleCloseDeleteCardModal}  
        />
        <NewCard
          isOpen={isNewCardOpen}
          onRequestClose={handleCloseNewCardModal}
        />
        <GlobalStyle/>
    </div>
  );
}

export default App;

