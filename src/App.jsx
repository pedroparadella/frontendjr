import React from 'react';
import './App.css';
import {GamesProvider} from "./contexts/GamesContext"; 

//App will contain a Navbar, NewButton, Cards, New Card Module and Search;

function App() {
  return (
    <div id="id">
        <GamesProvider>
            <NewCard />
            <Navbar />
            <Search />
            <NewButton />
            <Cards />
        </GamesProvider>
    </div> 
  );
}

export default App;
