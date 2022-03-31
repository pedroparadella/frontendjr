import React from 'react';
import ModalContext from '../../contexts/ModalContext';
import {useContext} from "react";

const NewButton = () => {
    const {handleModal} = useContext(ModalContext); 
    return (
        <button className="create" onClick={handleModal}>
        Adicionar Jogo
        </button>
        
        
    )
}

export default NewButton;