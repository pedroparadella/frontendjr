import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import NewCard from './components/NewCard/NewCard'; 
import Navbar from './components/Navbar/Navbar';
import NewButton from './components/NewButton/NewButton'; 
import Cards from './components/Cards/Cards'; 
import {GamesProvider} from "./contexts/GamesContext"; 
import {FilterProvider} from "./contexts/FilterContext"; 
import {ModalProvider} from "./contexts/ModalContext"; 



//App will contain a Navbar, NewButton, Cards, New Card Module and Search;

function App() {
  return (
    <div className="app">
        <GamesProvider>
            <FilterProvider>
                <Navbar />
                <Search />
                <ModalProvider>
                    <NewCard />
                    <NewButton />               
                    <Cards />
                </ModalProvider> 
            </FilterProvider>     
        </GamesProvider>
    </div> 
  );
}

export default App;
