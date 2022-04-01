import React from 'react';
import ModalContext from '../../contexts/ModalContext';
import {useContext} from "react";

const NewButton = () => {
    const {handleModal} = useContext(ModalContext); 
    return (
        <button className="create" onClick={handleModal}>
            <span className="material-icons md-light">add</span><span>Adicionar</span>
        </button>                
    )
}

export default NewButton;