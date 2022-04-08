import Modal from 'react-modal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Line } from './styles'
import imgTrash from '../../assets/icon_trash_64.png'
import imgClose from '../../assets/close_fff.svg'

Modal.setAppElement('#root')

export function DeleteModal(props) {
    const { isOpen, onRequestClose } = props

    const notify = () => toast.warn('Função não implementada', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
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
                <div className='radius'>
                    <img src={imgTrash} alt="Excluir" />
                </div>
                <h3>Excluir</h3>
                <p>CERTEZA QUE DESEJA EXCLUIR?</p>
                <Line />
                <div className="container-button">
                    <button
                        className='delete'
                        onClick={notify}
                    >
                        Excluir
                    </button>
                    <button
                        className='cancel'
                        onClick={onRequestClose}
                    >
                        Cancelar
                    </button>
                </div>
            </Container>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
        </ Modal>
    )

}