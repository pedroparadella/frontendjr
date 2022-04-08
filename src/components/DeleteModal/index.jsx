import Modal from 'react-modal'
import { Container } from './styles'
import imgTrash from '../../assets/icon_trash_64.png'
import imgClose from '../../assets/close_fff.svg'

export function DeleteModal(props){
    const {isOpen, onRequestClose} = props
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
         >
            <Container>
                    <button className='close' onClick={onRequestClose}>
                        <img src={imgClose} alt="fechar" />
                    </button>
                    <div>
                        <img src={imgTrash} alt="Excluir" />
                    </div>
                    <h3>Excluir</h3>
                    <p>CERTEZA QUE DESEJA EXCLUIR?</p>
            </Container>

        </ Modal>
    )

}