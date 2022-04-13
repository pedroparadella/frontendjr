import * as React from "react";
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
import { useDispatch, useSelector } from "react-redux";

const Card = ({ src, title, index }) => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch({ type: actions.TOGGLE_DELETING });
  };

  const delCard = () => {
    dispatch({ type: actions.UPDATE_CARD_INDEX, cardIndex: index });
    toggleModal();
  };
  return (
    <CardContainer>
      <CardImgContainer>
        <CardImg src={src} />
      </CardImgContainer>
      <TitleContainer>
        <CardTitle>{title}</CardTitle>
      </TitleContainer>
      <CardIcons>
        <Ico src={icoLixeira} height={60} />
        <Button hover={"red"} onClick={delCard}>
          Excluir
        </Button>
        <Ico src={icoLapiseira} height={70} />
        <Button hover={"orange"}>Editar</Button>
      </CardIcons>
    </CardContainer>
  );
};

export default Card;
