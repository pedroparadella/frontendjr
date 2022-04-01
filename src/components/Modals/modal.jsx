import { Open } from "./style.js"
import icone from '../../assets/icone_criar.png'

export function Modals() {
    function exibirAlert() {
        alert("funcionalidade não implementada")
    }
    return (
        <Open>
            <div className="modalContainer">
            <div className="header">
                <img src={icone} alt="" />
                <h1>Criar card</h1>
                <div className="caminho"></div>
                <p id="insertText">Digite um nome para o card</p>
                <div className="text">

                <input type="text" placeholder="Digite o título" id="text" />
                </div>
                <p id="insertImg">Inclua uma imagem para aparecer no card</p>
                <div className="file">
                    <label htmlFor="inputFile">Escolher arquivo</label>
                        <input type="file" accept="image/*" id="inputFile"/>
                    
                </div>
                <div className="footer">               
                </div>
                <button onClick={exibirAlert}>Criar card</button>
            </div>
            </div>
        </Open>

    )
}