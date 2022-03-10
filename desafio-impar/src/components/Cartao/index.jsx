import React from "react";
import { Texto, Card, Imagem, Circulo, Botoes, Botao, ImagemIcone } from "../Cartao/style";
import Mao from "../../assets/img/icones/mao.svg";
import Edit from "../../assets/img/icones/edit.svg";
import Trash from "../../assets/img/icones/trash.svg";

const Cartao = () => {
  return (
    <Card>
      <Circulo>
        <Imagem src={Mao} alt="Icone mão" />
      </Circulo>

      <Texto>Lorem ipsum dolor sit amet consectetur</Texto>

      <Botoes>
        <ImagemIcone src={Trash} alt="Icone Lixeira" />
        <Botao>Excluir</Botao>
        
        <ImagemIcone src={Edit} alt="Icone Lapis" />
        <Botao>Editar</Botao>
        
      </Botoes>
    </Card>
  );
};

export default Cartao;
