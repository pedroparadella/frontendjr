import React from 'react'
import GamesContext from '../../../contexts/GamesContext';
import {useContext} from "react";

const Card = (props) => {
    const {name, title, cheapest, deal, image} = props;
    const {handleDeletion} = useContext(GamesContext);

    return (
        <div className="card">
            <a href={`https://www.cheapshark.com/redirect?dealID=${deal}`} target="_blank" rel="noopener noreferrer"><img src={image? image : "images/default-game.png"} alt={name} /></a>            
            <p>{name}</p>
            <p>{title}</p>
            <p>{cheapest}</p>
            <button className="edit">Editar</button>
            <button className="delete" name={name} onClick={handleDeletion}>Excluir</button>
        </div>
    )
}

export default Card