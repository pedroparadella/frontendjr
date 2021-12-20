import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { DeleteCard } from './components/DeleteCard';
import { Header } from './components/Header';
import {GlobalStyle} from './styles/global'
Modal.setAppElement('#root');

function App() {
  const [isDeleteCardOpen, setIsDeleteCardOpen] = useState(false);

  function handleOpenDeleteCardModal(){
    setIsDeleteCardOpen(true);
  }

  function handleCloseDeleteCardModal() {
    setIsDeleteCardOpen(false);
  }
  
  return (
    <div className="App">
        <Header/> 
        <Dashboard onOpenDeleteCardModal={handleOpenDeleteCardModal}/>
        <DeleteCard 
          isOpen={isDeleteCardOpen}
          onRequestClose={handleCloseDeleteCardModal}  
        />
        <GlobalStyle/>
    </div>
  );
}

export default App;

