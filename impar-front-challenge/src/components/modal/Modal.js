import { useContext } from "react";
import {PokemonContex} from "../../store/pokemon-contex"
import Card from "../ui/card/Card";
import {
  CenterAlignWrapper,
  LeftAlignWrapper,
  TrashIcon,
  TextContainer,
  ButtonsContainer,
  AddModalContainer,
  BreakLine,
  InputContainer,
  ButtonAlignRight,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faIdCard } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";

function Modal (props) {
  const pokeCtx = useContext(PokemonContex)
  const {deletePokemon} = pokeCtx
  const { value, deleteId } = props;

//Change the state to mount the UserMessage component
//Activated when the user try to create a new card
  function displayUserMessage(){
    props.onHandleModal({show: true, showMessage: true})
  }
//Call a function in the store to delete the clicked pokemon card
  function deletePokemonCard(){
    deletePokemon(+deleteId)
    props.onHandleModal({value: "", show: false, showMessage: false})
  }

  return (
    <Card>
      {value === "create" && (
        <LeftAlignWrapper>
          <AddModalContainer>
            <FontAwesomeIcon icon={faIdCard} color="gray" size="2x" />
            <h1>Criar novo card</h1>
          </AddModalContainer>
          <BreakLine />
          <InputContainer>
            <label>Digite um nome para o card</label>
            <Input placeholder="Digíte o título aqui" />
          </InputContainer>
          <InputContainer>
            <label>Inclua uma imagem para aparecer no card</label>
            <Input placeholder="Nenhum arquivo selecionado" />
            <Button border="none" bgColor="orange">
              Escolher Arquivo
            </Button>
          </InputContainer>
          <BreakLine />
          <ButtonAlignRight>
            <Button border="none" bgColor="orange" onClick = {displayUserMessage}>
              Criar card
            </Button>
          </ButtonAlignRight>
        </LeftAlignWrapper>
      )}
      {value === "delete" && (
        <CenterAlignWrapper>
          <TrashIcon>
            <FontAwesomeIcon icon={faTrashAlt} color="red" size="3x" />
          </TrashIcon>
          <TextContainer>
            <h3>Excluir</h3>
            <p>Certeza que deseja excuir ?</p>
          </TextContainer>
          <ButtonsContainer>
            <Button  border="none" bgColor="red" onClick = {deletePokemonCard} >
              Excluir
            </Button>
            <Button border="1px solid red" color = "red"  onClick = {props.onHandleModal}>
              Cancelar
            </Button>
          </ButtonsContainer>
        </CenterAlignWrapper>
      )}
    </Card>
  );
}

export default Modal ;


