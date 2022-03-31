import React from 'react'
import GamesContext from '../../../contexts/GamesContext';
import ModalContext from '../../../contexts/ModalContext';
import {useContext} from "react";

const Card = (props) => {
    const {name, title, cheapest, deal, image} = props;
    const {handleDeletion, handleToEdit} = useContext(GamesContext);
    const {handleModal} = useContext(ModalContext);

    const handleAll = e => {
        handleToEdit(e);
        handleModal(e);
    }

    return (
        <div className="card">
            <a href={`https://www.cheapshark.com/redirect?dealID=${deal}`} target="_blank" rel="noopener noreferrer"><img src={image? image : "images/logo.svg"} alt={name} /></a>            
            <h2>{name}</h2>
            <h3 className="title">{title}</h3>
            <p className="cheapest">{cheapest}</p>
            <button id="edit" name={name} onClick={handleAll}>Editar</button>
            <button id="delete" name={name} onClick={handleDeletion}>Excluir</button>
        </div>
    )
}

export default Card