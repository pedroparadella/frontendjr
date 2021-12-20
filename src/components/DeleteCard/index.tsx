import Modal from 'react-modal';
import trash from '../../assets/img/Icon-trash.svg';
import style from './DeleteCard.module.scss'

interface DeleteCardProps{
  isOpen: boolean;
  onRequestClose: () => void;
}
// : tenho que estilizar esse modal. Colocar que a função nao foi implementada e criar o outro panel
export function DeleteCard({isOpen, onRequestClose}: DeleteCardProps){
  
  return(
    <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName={style.reactModalOverlay}
          className={style.reactModalContent}
    > 
    <button 
      type="button"
      className={style.buttonCloseModal} 
      onClick={onRequestClose}>
        X
    </button>
    <div className={style.image}>
      <img src={trash} alt="trash icon" className={style.trashIcon}/>
    </div>
    <h2 className={style.delete}>Excluir</h2>
    <h2 className={style.phrase}>Certeza que deseja excluir?</h2>
    <div className={style.horizontalLine}/>
    <div className={style.buttons}>
      <button className={style.deleteButton}>Excluir</button>
      <button 
        className={style.cancelButton}
        onClick={onRequestClose}
      >
        Cancelar
      </button>
    </div>

  </Modal>
  )
}