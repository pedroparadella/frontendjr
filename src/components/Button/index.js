import { FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Modal from "../Modal";

import './styles.css'

const Button = ({ modalMethod }) => {
  return(
    <div className="btn-div">
      <button onClick={ () => modalMethod(true)}>
        < MdDeleteForever />
        <span>Excluir</span>
      </button>
      <button onClick={ () => modalMethod(true)}>
        < FaPencilAlt />
        <span>Editar</span>
      </button>
      </div>
  )
}
export default Button