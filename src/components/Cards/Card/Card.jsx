import React from 'react'
import GamesContext from '../../../contexts/GamesContext';
import {useContext} from "react";

const Card = (props) => {
    const {name, title, cheapest, deal, image} = props;
    const {handleDeletion} = useContext(GamesContext);

    return (
        <div className="card">
            <img src={image? image : "images/default-game.png"} alt={name} />
            <p>{name}</p>
            <p>{title}</p>
            <p>{cheapest}</p>
            <p>{deal}</p>
            <button className="edit">Editar</button>
            <button className="delete" name={name} onClick={handleDeletion}>Excluir</button>
        </div>
    )
}

export default Card