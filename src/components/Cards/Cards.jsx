import React from 'react'
import FilterContext from '../../contexts/FilterContext';
import GamesContext from '../../contexts/GamesContext';
import {useContext} from "react";

const Cards = () => {
    const {games} = useContext(GamesContext);
    const {filterSearch} = useContext(FilterContext);
    const regex = new RegExp(filterSearch, "i");

    return (
        <div className="cards">
            {games.length > 0 && games.filter(game => regex.test(game[0])).map(game => <p>{game[0]}</p>)}
        </div>
    )
}

export default Cards