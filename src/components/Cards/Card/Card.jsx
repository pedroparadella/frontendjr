import React from 'react'
import GamesContext from '../../../contexts/GamesContext';
import ModalContext from '../../../contexts/ModalContext';
import {useContext} from "react";
import {motion} from 'framer-motion';

const Card = (props) => {
    const {name, title, cheapest, deal, image} = props;
    const {handleDeletion, handleToEdit} = useContext(GamesContext);
    const {handleModal} = useContext(ModalContext);

    const entryExit = {
        initial: {
            opacity: 0, 
            scale: 0.5
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            transition: {duration: 0.2}
        },
        transition:  {
            duration: 0.2, 
            ease: "easeOut"
        }
    } 

    const handleAll = e => {
        handleToEdit(e);
        handleModal(e);
    }

    return (
           <motion.div className="card" {...entryExit}>
                <img className="card-image" src={image? image : "images/logo-white.svg"} alt={name} />
                <div className="card-buttons">
                    <div className="cheapest">
                        <a href={deal? `https://www.cheapshark.com/redirect?dealID=${deal}` : 'https://store.steampowered.com/'} target="_blank" rel="noopener noreferrer">
                        <span class="material-icons md-light md-18">
                            shopping_cart
                        </span>
                        <span>${cheapest}</span>
                    </a>
                    </div>
                    <button className="edit" name={name} onClick={handleAll}>
                        <span class="material-icons md-light md-18">
                            edit
                        </span>
                        <span>
                            Editar
                        </span>
                    </button>
                    <button className="delete" name={name} onClick={handleDeletion}>
                    <span class="material-icons md-light md-18">
                            delete
                        </span>
                        <span>
                            Excluir
                        </span>
                    </button>
                </div>
                <div className="card-texts">
                    <div className="name">
                        <p>{name.length >= 28? name.slice(0, 26) + "..." : name }</p>
                    </div>
                    <div className="title">
                        <p>{title.length >= 63? title.slice(0, 61) + "..." : title }</p>
                    </div>
                </div>           
                
                
                
                
            </motion.div>
        
    )
}

export default Card