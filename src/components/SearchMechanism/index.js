import React, { useState } from "react";
import { api } from "../../services/rick-and-morty-api";
import Lottie from "react-lottie";
import animationData from "../../animations/x.json";
import * as S from "../../style/search";
import * as M from "../../style/modal";
import magnifier from "../../assets/lupa.svg";
import trash from "../../assets/Icon-trash.svg";
import edit from "../../assets/Icon-edit.svg";

export default function SearchMechanism() {
  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState();
  const [characterName, setCharacterName] = useState("");
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const animationsDefaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function getCharacterName(event) {
    return setCharacterName(event.target.value);
  }

  async function searchCharacter() {
    const response = await api.get(`character/?name=${characterName}`);
    return setSearched(response.data);
  }

  function openModal() {
    return setOpen(true);
  }

  function closeModal() {
    return setOpen(false);
  }

  return (
    <main>
      {open ? (
        <M.Modal onClick={closeModal}>
          <M.Card>
            <Lottie
              options={animationsDefaultOptions}
              height={100}
              width={100}
              isStopped={setAnimationState.isStopped}
              isPaused={setAnimationState.isPaused}
            />
            <M.H3>Ops!</M.H3>
            <M.P>Essa funcionalidade ainda não foi implementada.</M.P>

            <M.Button onClick={closeModal}>Fechar</M.Button>
          </M.Card>
        </M.Modal>
      ) : null}
      <S.Background>
        <S.Input
          type="text"
          value={characterName}
          onChange={getCharacterName}
          placeholder="Digite aqui sua busca"
        />
        <S.Button onLoad={searchCharacter} onClick={searchCharacter}>
          <S.Magnifier src={magnifier} alt="lupa" />
        </S.Button>
      </S.Background>
      <S.Section>
        <S.PreCardsLine>
          <S.H1>Resultados de busca</S.H1>
          <S.NewCardButton onClick={openModal}>Novo Card</S.NewCardButton>
        </S.PreCardsLine>
        <S.Cards>
          {searched &&
            searched.results.map((character, i) =>
              i < 12 ? (
                <S.Card>
                  <S.Content>
                    <S.Image src={character.image} alt="Foto do Personagem" />
                    <S.Hr />
                    <S.H2>{character.name}</S.H2>
                    <S.P>{character.location.name}</S.P>
                  </S.Content>
                  <S.Options>
                    <S.Option onClick={openModal}>
                      <S.Trash src={trash} alt="Lixeira" />
                      <S.POptions>Excluir</S.POptions>
                    </S.Option>
                    <S.OHr />
                    <S.Option onClick={openModal}>
                      <img src={edit} alt="Lápis" />
                      <S.POptions>Editar</S.POptions>
                    </S.Option>
                  </S.Options>
                </S.Card>
              ) : null
            )}
        </S.Cards>
      </S.Section>
    </main>
  );
}
