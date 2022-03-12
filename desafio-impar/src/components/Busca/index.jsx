import React, { useState, useEffect } from "react";
import fundo_busca from "../../assets/img/fundo_busca.png";
import lupa from "../../assets/img/icones/lupa.svg";
import Edit from "../../assets/img/icones/edit.svg";
import Trash from "../../assets/img/icones/trash.svg";
import { Modal } from "../ModalCard";

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
} from "../Busca/style";
import { ModalDeletar } from "../ModalDeletar";
import api from "../../assets/Service/api";

const Busca = () => {
  const [pokemon, setPokemon] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [typedPokemon, setTypedPokemon] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Filtar Pokemons.
  // const [busca, setBusca] = useState("");
  // const pokemonFilter = pokemons.filter((ite) => ite.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))

  // Função Botão busca.
  const handleChange = (event) => {
    setTypedPokemon(event.target.value);
  };

  // Filtar Pokemons.
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!typedPokemon) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.get(`/pokemon/${typedPokemon}`);
      setPokemon(response.data);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError("Pokemon não encontrado");
      setIsLoading(false);
      setPokemon(null);
    }
  };

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

  // Callback API Pokemons
  useEffect(() => {
    api
      .get(`?offset=20&limit=40`)
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          value={typedPokemon}
          onChange={handleChange}
          type="text"
          placeholder="Digite aqui sua busca..."
        />

        <BotaoB type="submit">
          <Icone src={lupa} alt="Icone lupa" />
        </BotaoB>
      </form>

      <Fundo src={fundo_busca} alt="Fundo pagina busca" />

      {/* Container */}

      <Titulo>
        Resultado de busca
        <Button onClick={openModal}>Novo Card</Button>
      </Titulo>

      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* Cartão */}

      <UL>
        {pokemon && (
          <div key={pokemon.id}>
            {isLoading ? (
              <p>Carregando...</p>
            ) : (
              <Card>
                <Circulo>
                  <Imagem
                    src={pokemon.sprites["front_default"]}
                    alt="{pokemon.name}"
                  />
                </Circulo>
                <Linha />
                <Texto>{pokemon.name}</Texto>

                <Botoes>
                  <ImagemIcone
                    onClick={openModalDeletar}
                    src={Trash}
                    alt="Icone Lixeira"
                  />
                  <Botao onClick={openModalDeletar}>Excluir</Botao>

                  <ImagemIcone
                    onClick={openModal}
                    src={Edit}
                    alt="Icone Lapis"
                  />
                  <Botao onClick={openModal}>Editar</Botao>
                </Botoes>

                <Modal showModal={showModal} setShowModal={setShowModal} />
                <ModalDeletar
                  showModalDeletar={showModalDeletar}
                  setShowModalDeletar={setShowModalDeletar}
                />
              </Card>
            )}
          </div>
        )}
      </UL>
    </>
  );
};

export default Busca;
