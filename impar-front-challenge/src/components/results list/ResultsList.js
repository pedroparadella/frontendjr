import { useEffect, useContext } from "react";
import {PokemonContex} from "../../store/pokemon-contex"
import {
  Main,
  Wrapper,
  TextAndButtonContainer,
  ListContainer,
  ButtonContainer,
} from "./styles";
import ListItem from "./list item/ListItem";
import Button from "../ui/button/Button";
import LoadingSpinner from "../ui/loading-spinner/LoadingSpinner";
import ErrorMessage from "../error-message/ErrorMessage";

function ResultsList(props) {
  const pokemonCtx = useContext(PokemonContex);
  const {
    fetchPokemons,
    pokemonList,
    isLoading,
    error,
    nextPageURL,
    previousPageURL,
  } = pokemonCtx;

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);
  //Pokemon list were loading out of order, this ensure that they will always appear ordered by their index
  const sortedPokemonsList = pokemonList.sort((a, b) =>
    a.order > b.order ? 1 : -1
  );

  const pokemons = sortedPokemonsList.map((pokemon) => {
    return (
      <ListItem
        key={pokemon.id}
        index={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites["front_default"]}
        types={pokemon.types.map((ele) => ele.type.name)}
        onHandleModal={props.onHandleModal}
      />
    );
  });

  function changePage(e) {
    if (e.target.value === "next") {
      fetchPokemons(nextPageURL);
    } else if (e.target.value === "prev") {
      fetchPokemons(previousPageURL);
    } else {
      return;
    }
  }

  function openModal(e) {
    props.onHandleModal({ value: e.target.value, show: true });
  }
  
  return (
    <Main>
      <Wrapper>
        <TextAndButtonContainer>
          <h1>Pokédex</h1>
          <Button
            value="create"
            border="none"
            bgColor="orange"
            onClick={openModal}
          >
            Novo Card
          </Button>
        </TextAndButtonContainer>
        {isLoading && <LoadingSpinner />}
        {!isLoading && !error && <ListContainer>{pokemons}</ListContainer>}
        {error && <ErrorMessage />}
        {!isLoading && !error && (
          <ButtonContainer>
            {previousPageURL && (
              <Button
                border="none"
                bgColor="orange"
                value="prev"
                onClick={changePage}
              >
                Volta
              </Button>
            )}
            {nextPageURL && (
              <Button
                border="none"
                bgColor="orange"
                value="next"
                onClick={changePage}
              >
                Próxima
              </Button>
            )}
          </ButtonContainer>
        )}
      </Wrapper>
    </Main>
  );
}

export default ResultsList;
