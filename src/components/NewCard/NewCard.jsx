import React, { useContext} from 'react';
import ModalContext from '../../contexts/ModalContext';
import GamesContext from '../../contexts/GamesContext';
import {motion, AnimatePresence} from 'framer-motion';


//Used to create a new card or edit existing ones

const NewCard = () => {
    const {modal, handleModal} = useContext(ModalContext);     
    const {games, handleAdd, handleChange, gameToAdd, handleEdit} = useContext(GamesContext);
    const [title, imageUrl] = gameToAdd;
    const appear = {
        key: "form-modal",
        initial: {
            opacity: 0,
            
        },
        animate: {
            opacity: 1,
           
        },
        exit: {
            opacity: 0,
            transition: {duration: 0.5, ease: "easeIn"},
            
        },
        transition:  {
            duration: 0.5, 
            ease: "easeOut"
        }
    }

    const handleAll = (e) => {
        if(title !== "" && games.findIndex(game => game[0] === title) === -1){
            modal === "edit"? handleEdit() : handleAdd(); 
            handleModal(e);
        } 
    } 

    return (
        <AnimatePresence>
            {!["close", "add"].includes(modal) && <motion.div {...appear} id="modal">
                <div id="form">
                    <label htmlFor="add-title">Título do Jogo</label>
                    <input type="text" name="add-title" id="add-title" value ={title} placeholder="Batman" onChange={handleChange} />
                    <label htmlFor="add-image">Imagem do Jogo</label>
                    <input type="text" name="add-image" id="add-image" placeholder="https:..." value={imageUrl} onChange={handleChange} />
                    <div id="modal-buttons">
                        <button className="close" onClick={handleModal}>Fechar</button>                       
                        <button className="add" onClick={handleAll}>{modal}</button>
                    </div>
                </div>                        
            </motion.div>}
        </AnimatePresence>
        
    )
}

export default NewCard