import actions from "../../store/actions";
import {
  CardContainer,
  CardImgContainer,
  CardImg,
  CardTitle,
  CardIcons,
  Ico,
  Button,
  TitleContainer,
} from "./styles";
import icoLixeira from "../../assets/ico-lixeira.png";
import icoLapiseira from "../../assets/ico-lapiseira.png";
import { useDispatch } from "react-redux";

const Card = ({ thumbnail, title, index }) => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch({ type: actions.TOGGLE_DELETING });
  };

  const updateIndexCard = () => {
    dispatch({ type: actions.UPDATE_CARD_INDEX, cardIndex: index });
  };

  const deleteCard = () => {
    updateIndexCard();
    toggleModal();
  };

  const editCard = () => {
    updateIndexCard();
    dispatch({ type: actions.TOGGLE_EDITING });
    dispatch({
      type: actions.SEND_THUMB_AND_TITLE,
      thumbAndTitle: { thumbnail, title },
    });
    dispatch({
      type: actions.CREATING_OR_EDITING,
      creatingOrEditing: "editing",
    });
  };

  return (
    <CardContainer>
      <CardImgContainer>
        <CardImg src={thumbnail} />
      </CardImgContainer>
      <TitleContainer>
        <CardTitle>{title}</CardTitle>
      </TitleContainer>
      <CardIcons>
        <Ico src={icoLixeira} height={60} />
        <Button hover={"red"} onClick={deleteCard}>
          Excluir
        </Button>
        <Ico src={icoLapiseira} height={70} />
        <Button hover={"orange"} onClick={editCard}>
          Editar
        </Button>
      </CardIcons>
    </CardContainer>
  );
};

export default Card;
