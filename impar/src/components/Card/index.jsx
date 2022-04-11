import * as React from "react";
import { CardContainer, CardImg, CardIcons, Ico, Button } from "./styles";
import icoLixeira from "../../assets/ico-lixeira.png";
import icoLapiseira from "../../assets/ico-lapiseira.png";

const Card = ({ src }) => {
  console.log(src);
  return (
    <CardContainer>
      <CardImg src={src} />
      <CardIcons>
        <Ico src={icoLixeira} /> <Button>Excluir</Button>
        <Ico src={icoLapiseira} /> <Button>Editar</Button>
      </CardIcons>
    </CardContainer>
  );
};

export default Card;
