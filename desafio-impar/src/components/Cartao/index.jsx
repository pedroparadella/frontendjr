import React, { useState, useEffect } from "react";
import {
  Texto,
  Card,
  Imagem,
  Circulo,
  Botoes,
  Botao,
  ImagemIcone,
  Linha,
  UL
} from "../Cartao/style";
import Mao from "../../assets/img/icones/mao.svg";
import Edit from "../../assets/img/icones/edit.svg";
import Trash from "../../assets/img/icones/trash.svg";
import api from "../../assets/Service/api";

const Cartao = () => {
  // const [pokemon, setPokemon] = useState("");

  // useEffect(() => {
  //   async function cardPokemon() {
  //     var { data } = await api.get("");
  //     setPokemon(data);
  //     console.log(pokemon);
  //   }
  //   cardPokemon();
  // }, []);
  
  return (
    <UL>

    <Card>
      <Circulo>
        <Imagem src={Mao} alt="Icone mão" />
      </Circulo>
      <Linha />
      <Texto>Lorem ipsum dolor sit amet consectetur</Texto>

      <Botoes>
        <ImagemIcone src={Trash} alt="Icone Lixeira" />
        <Botao>Excluir</Botao>

        <ImagemIcone src={Edit} alt="Icone Lapis" />
        <Botao>Editar</Botao>
      </Botoes>
    </Card>
    <Card>
      <Circulo>
        <Imagem src={Mao} alt="Icone mão" />
      </Circulo>
      <Linha />
      <Texto>Lorem ipsum dolor sit amet consectetur</Texto>

      <Botoes>
        <ImagemIcone src={Trash} alt="Icone Lixeira" />
        <Botao>Excluir</Botao>

        <ImagemIcone src={Edit} alt="Icone Lapis" />
        <Botao>Editar</Botao>
      </Botoes>
    </Card>
    <Card>
      <Circulo>
        <Imagem src={Mao} alt="Icone mão" />
      </Circulo>
      <Linha />
      <Texto>Lorem ipsum dolor sit amet consectetur</Texto>

      <Botoes>
        <ImagemIcone src={Trash} alt="Icone Lixeira" />
        <Botao>Excluir</Botao>

        <ImagemIcone src={Edit} alt="Icone Lapis" />
        <Botao>Editar</Botao>
      </Botoes>
    </Card>
    <Card>
      <Circulo>
        <Imagem src={Mao} alt="Icone mão" />
      </Circulo>
      <Linha />
      <Texto>Lorem ipsum dolor sit amet consectetur</Texto>

      <Botoes>
        <ImagemIcone src={Trash} alt="Icone Lixeira" />
        <Botao>Excluir</Botao>

        <ImagemIcone src={Edit} alt="Icone Lapis" />
        <Botao>Editar</Botao>
      </Botoes>
    </Card>
    </UL>
  );

};

export default Cartao;
