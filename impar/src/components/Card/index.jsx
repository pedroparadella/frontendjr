import * as React from "react";
import {
  CardContainer,
  CardImgContainer,
  CardImg,
  CardTitle,
  CardIcons,
  Ico,
  Button,
  TitleContainer
} from "./styles";
import icoLixeira from "../../assets/ico-lixeira.png";
import icoLapiseira from "../../assets/ico-lapiseira.png";

const Card = ({ src, title }) => {
  return (
    <CardContainer>
      <CardImgContainer>
        <CardImg src={src} />
      </CardImgContainer>
      <TitleContainer>
        <CardTitle>{title}</CardTitle>
      </TitleContainer>
      <CardIcons>
        <Ico src={icoLixeira} height={60} /> <Button>Excluir</Button>
        <Ico src={icoLapiseira} height={70} /> <Button>Editar</Button>
      </CardIcons>
    </CardContainer>
  );
};

export default Card;
