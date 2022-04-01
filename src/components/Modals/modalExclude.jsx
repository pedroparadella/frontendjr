import { ButtonExclude } from "./style"
import iconTrash from "../../assets/icon-trash.svg"

export function ModalExclude({closeModal}) {
    function exibirAlert() {
        alert("funcionalidade não implementada")
    }
    return (
        <ButtonExclude>
            <div className="fechar">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
            <div className="main">
                
                <div className="imagem">
                <img src={iconTrash} alt="" />
                </div>
                <div className="content">
                    <h1>Excluir</h1>
                    <p>Certeza que deseja excluir?</p>
                    <div className="traco"></div>
                    <div className="buttons">
                        <button id="buttonExcluir" onClick={exibirAlert}>Excluir</button>
                        <button id="buttonCancelar"onClick={exibirAlert}>Cancelar</button>
                    </div>
                </div>

            </div>
        </ButtonExclude>
    )
}