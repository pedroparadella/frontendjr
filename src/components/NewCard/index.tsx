import Modal from "react-modal";
import style from './NewCard.module.scss';
import createIcon from '../../assets/img/icone_criar.svg'
import {ToastContainer, toast } from "react-toastify";

interface NewCardModal{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewCard({isOpen, onRequestClose}: NewCardModal){
  const notify = () => toast.error('Funcionalidade ainda não implementada!');

  return(
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={style.reactModalOverlay}
        className={style.reactModalContent}
      >
        <div className={style.topIcon}>
          <img src={createIcon} alt="" />
          <h2>Criar card</h2>
        </div>        
        <div className={style.horizontalLine}/>
        
        <div className={style.content}>
          <h2>Digite um nome para o card</h2>
          <div className={style.inputInfos}>
            <input 
              type="text" 
              placeholder="Digite o título"
            />
          </div>

          <h2>Inclua uma imagem para aparecer no card</h2>
          <div className={style.inputInfos}>
            <input 
              type="text"
              placeholder="Nenhum arquivo selecionado"
            />
            <button 
              className={style.btnArchive}
              onClick={notify}  
            >
              Escolher arquivo
            </button>
          </div>

          <div className={style.horizontalLine}/>
          <div className={style.btnCreate}>
            <button onClick={notify}>Criar card</button>
          </div>

        </div>
        <ToastContainer/>
      </Modal>
  )
}