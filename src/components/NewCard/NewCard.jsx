import React, { useContext} from 'react';
import ModalContext from '../../contexts/ModalContext';
import GamesContext from '../../contexts/GamesContext';


//Used to create a new card

const NewCard = () => {
    const {modal, handleClick} = useContext(ModalContext);     
    const {games, handleCall, handleChange, gameToAdd} = useContext(GamesContext);
    const [title, imageUrl] = gameToAdd;
    const handleAll = () => {
        if(title !== "" && games.findIndex(game => game[0] === title) === -1){
            handleClick();
            handleCall();
        }
    } 

    return (
        <div className={modal? "" : "hidden"}>            
            <label htmlFor="add-title">Título do Jogo</label>
            <input type="text" name="add-title" id="add-title" value ={title} placeholder="Batman" onChange={handleChange} />
            <label htmlFor="add-image">Imagem do Jogo</label>
            <input type="text" name="add-image" id="add-image" placeholder="https:..." value={imageUrl} onChange={handleChange} />
            <button onClick={handleAll}>Adicionar</button>                       
        </div>
    )
}

export default NewCard