import { Container, ContainerInput, Line } from "./styles";
import imgCreateCard  from '../../assets/icone_criar.png'
import imgClose from '../../assets/close.svg'

export function ContainerCard(props){
    const {CloseInsertCard} = props
    console.log(CloseInsertCard);
    return(
        <Container>
            <button className="close" onClick={CloseInsertCard}>
                <img src={imgClose} alt="Fechar" />
            </button>
            <div>
                <img src={imgCreateCard} alt="Criar Card" />
                <h2>Criar Card</h2>
            </div>
            <Line />
            <ContainerInput>
                <label>DIGITE UM NOME PARA O CARD</label>
                <input type="text" placeholder="Digite o título"/>
            </ContainerInput>
            <ContainerInput>
                <label>INCLUA UMA IMAGEM PARA APARECER NO CARD</label>
                <div className="send-image">
                    <input type="text" placeholder="Nenhum arquivo selecionado"/>
                    <label htmlFor="file">Escolher Arquivo</label>
                    <input type="file" id="file"/>
                </div>
            </ContainerInput>
            <Line />
            <button>Criar Card</button>
        </Container>
    )
}