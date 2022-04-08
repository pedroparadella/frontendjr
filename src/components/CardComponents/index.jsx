
import { Container, ContainerImage, Content, ControlButtons, Line } from "./styles";
import imgDelete from '../../assets/Icon-trash.png'
import imgEdit from '../../assets/Icon-edit.png'



export function CardComponents(props) {
    const { pokemon, showInsertCard, handleOpenNewDeleteModal } = props

    return (
        <Container>
            <Content key={pokemon.name}>
                <ContainerImage>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </ContainerImage>
                <Line />
                <p>{pokemon.name}</p>
                <ControlButtons>
                    <button onClick={handleOpenNewDeleteModal}>
                        <img src={imgDelete} alt="" />
                        Excluir
                    </button>
                    <button onClick={showInsertCard}>
                        <img src={imgEdit} alt="" />
                        Editar
                    </button>
                </ControlButtons>
            </Content>
        </Container>
    )
}