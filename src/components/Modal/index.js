import './styles.css'

import { GrClose } from 'react-icons/gr'

const Modal = ({ onClose }) => {
  return(
    <div className="modal-bg">
      <div className="modal">
        <button className="close" onClick={onClose}>< GrClose /></button>
        <h2>Desculpe</h2>
        <p>Esta funcionalidade está indisponível no momento</p>
      </div>
    </div>
  )
}

export default Modal