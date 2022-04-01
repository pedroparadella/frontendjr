import React from 'react';
import ModalContext from '../../contexts/ModalContext';
import {useContext} from "react";

const NewButton = () => {
    const {handleModal} = useContext(ModalContext); 
    return (
        <button className="create" onClick={handleModal}>
            <span class="material-icons md-light md-18">add</span><span>Adicionar Jogo</span>
        </button>
        
        
    )
}

export default NewButton;