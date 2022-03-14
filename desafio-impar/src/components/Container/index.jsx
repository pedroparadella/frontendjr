import React, { useState, useEffect } from "react";
import fundo_busca from "../../assets/img/fundo_busca.png";
import lupa from "../../assets/img/icones/lupa.svg";
import Edit from "../../assets/img/icones/edit.svg";
import Trash from "../../assets/img/icones/trash.svg";
import { Modal } from "../ModalCard";
import { ModalDeletar } from "../ModalDeletar";
import api from "../Service/api";

import {
  Titulo,
  Button,
  Input,
  Icone,
  Fundo,
  BotaoB,
  Texto,
  Card,
  Imagem,
  Circulo,
  Botoes,
  Botao,
  ImagemIcone,
  Linha,
  UL,
  LinhaHo,
} from "./style";

const Container = () => {
  // Abre aba novo card.
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  // Abre card deletar.
  const [showModalDeletar, setShowModalDeletar] = useState(false);
  const openModalDeletar = () => {
    setShowModalDeletar((prev) => !prev);
  };

  // Callback API TodosPokemons
  const [TodosPokemons, setTodosPokemons] = useState([]);
  useEffect(() => {
    api
      .get("/pokemon?offset=0&limit=200")
      .then((response) => {
        setTodosPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filtrar
  const [busca, setBusca] = useState("");
  const pokemonFiltro = TodosPokemons.filter((ite) =>
    ite.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
  );
  return (
    <>
      <form>
        <Input
          placeholder="Digite aqui sua busca..."
          type="text"
          onChange={(ev) => setBusca(ev.target.value)}
          value={busca}
        />
        <BotaoB type="submit">
          <Icone src={lupa} alt="Icone lupa" />
        </BotaoB>
      </form>
      <Fundo src={fundo_busca} alt="Fundo pagina busca" />

      {/* Novo Card */}
      <Titulo>
        Resultado de busca<Button onClick={openModal}>Novo Card</Button>
      </Titulo>
      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* Cartão */}
      <UL>
        {pokemonFiltro.map((item) => {
          const id = item.url;
          const URL = id.split("/");
          const UrlID = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${URL[6]}.png`;
          return (
            <Card>
              <Circulo>
                <Imagem src={UrlID} alt={item.name} />
              </Circulo>
              <Linha />
              <Texto>{item.name}</Texto>
              <Botoes>
                <ImagemIcone
                  onClick={openModalDeletar}
                  src={Trash}
                  alt="Icone Lixeira"
                />
                <Botao onClick={openModalDeletar}>Excluir</Botao>
                <LinhaHo> | </LinhaHo>
                <ImagemIcone onClick={openModal} src={Edit} alt="Icone Lapis" />
                <Botao onClick={openModal}>Editar</Botao>
              </Botoes>
              <Modal showModal={showModal} setShowModal={setShowModal} />
              <ModalDeletar
                showModalDeletar={showModalDeletar}
                setShowModalDeletar={setShowModalDeletar}
              />
            </Card>
          );
        })}
      </UL>
    </>
  );
};

export default Container;