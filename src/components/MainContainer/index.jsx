
import { CardComponents } from "../CardComponents";
import { CreateCard } from "../CreateCard";
import { Container, HeaderContent, MainCardContent } from "./styles";

export function MainContainer(props) {
    const { pokemons, loading, showCard, showInsertCard, CloseInsertCard, handleOpenNewDeleteModal, notify } = props

    return (
        <Container>
            <CreateCard showCard={showCard} CloseInsertCard={CloseInsertCard} notify={notify} />
            <HeaderContent>
                <h2>Resultado de Busca</h2>
                <button onClick={showInsertCard}>Novo Card</button>
            </HeaderContent>
            {loading ? (<div className="loading-pokemons">Buscando Pokemons</div>) :
                (
                    <MainCardContent>
                        {pokemons.map((pokemon, index) => {
                            return <CardComponents
                                showInsertCard={showInsertCard}
                                CloseInsertCard={CloseInsertCard}
                                handleOpenNewDeleteModal={handleOpenNewDeleteModal}
                                notify={notify}
                                pokemon={pokemon}
                                key={pokemon.name}
                            />
                        })}
                    </MainCardContent>

                )}

        </Container>
    )
}