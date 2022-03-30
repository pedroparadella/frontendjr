import React from 'react';
import Card from './Card/Card';
import FilterContext from '../../contexts/FilterContext';
import GamesContext from '../../contexts/GamesContext';
import {useContext} from "react";

const Cards = () => {
    const {games} = useContext(GamesContext);
    const {filterSearch} = useContext(FilterContext);
    const regex = new RegExp(filterSearch, "i");

    //Generates cards depending on search input and cards that were created

    return (
        <div className="cards">
            {games.length > 0 && games.filter((game) => regex.test(game[0])).map((game, index) => <Card name={game[0]} title={game[1].external} cheapest={game[1].cheapest} deal={game[1].cheapestDealID} key={index} image={game[1].image}/>)}
        </div>
    )
}

export default Cards