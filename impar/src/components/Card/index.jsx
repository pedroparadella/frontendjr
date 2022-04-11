import * as React from "react";
import { CardContainer, CardImg } from "./styles";
import icoLixeira from "../../assets/ico-lixeira.png";
import icoLapiseira from "../../assets/ico-lapiseira.png";

const Card = ({src}) => {
  console.log(src)
  return (
    <CardContainer>
      <CardImg src={src} />
    </CardContainer>
  );
};

export default Card;
