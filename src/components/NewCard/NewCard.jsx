import React, { useContext} from 'react';
import ModalContext from '../../contexts/ModalContext';
import GamesContext from '../../contexts/GamesContext';


//Used to create a new card or edit existing ones

const NewCard = () => {
    const {modal, handleModal} = useContext(ModalContext);     
    const {games, handleAdd, handleChange, gameToAdd, handleEdit} = useContext(GamesContext);
    const [title, imageUrl] = gameToAdd;
    const handleAll = (e) => {
        if(title !== "" && games.findIndex(game => game[0] === title) === -1){
            modal === "edit"? handleEdit() : handleAdd(); 
            handleModal(e);
        } 
    } 

    return (
        <div className={["close", "add"].includes(modal)? "hidden" : ""}>            
            <label htmlFor="add-title">Título do Jogo</label>
            <input type="text" name="add-title" id="add-title" value ={title} placeholder="Batman" onChange={handleChange} />
            <label htmlFor="add-image">Imagem do Jogo</label>
            <input type="text" name="add-image" id="add-image" placeholder="https:..." value={imageUrl} onChange={handleChange} />
            <button id="close" onClick={handleModal}>Fechar</button>                       
            <button id="add" onClick={handleAll}>{modal}</button>
        </div>
    )
}

export default NewCard