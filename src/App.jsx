import React from 'react';
import './App.css';
import {GamesProvider} from "./contexts/GamesContext"; 
import {FilterProvider} from "./contexts/FilterContext"; 


//App will contain a Navbar, NewButton, Cards, New Card Module and Search;

function App() {
  return (
    <div id="id">
        <GamesProvider>
            <FilterProvider>
                <NewCard />
                <Navbar />
                <Search />
                <NewButton />
                <Cards />
            </FilterProvider>     
        </GamesProvider>
    </div> 
  );
}

export default App;
