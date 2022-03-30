import React from 'react';
import ModalContext from '../../contexts/ModalContext';
import {useContext} from "react";

const NewButton = () => {
    const {handleModal} = useContext(ModalContext); 
    return (
        <button id="create" onClick={handleModal}>
            Add Game
        </button>
    )
}

export default NewButton;