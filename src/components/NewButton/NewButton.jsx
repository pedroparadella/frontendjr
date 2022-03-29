import React from 'react';
import ModalContext from '../../contexts/ModalContext';
import {useContext} from "react";

const NewButton = () => {
    const {handleChange} = useContext(ModalContext); 
    return (
        <button onClick={handleChange}>
            Add Game
        </button>
    )
}

export default NewButton;