import React, { cloneElement, useState } from "react";
import { api } from "../../services/goat-api";
import Lottie from "react-lottie";
import animationData from "../../animations/x.json";
import * as S from "../../style/search";
import * as M from "../../style/modal";
import lupa from "../../assets/lupa.svg";
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

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function getCharacterName(event) {
    setCharacterName(event.target.value);
  }

  async function searchCharacter() {
    const response = await api.get(`character/?name=${characterName}`);
    setSearched(response.data);
    console.log(response.data);
  }

  function handleClick() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <main>
      {open ? (
        <M.Modal onClick={closeModal}>
          <M.Card>
            <Lottie
              options={defaultOptions}
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
          <S.Magnifier src={lupa} alt="lupa" />
        </S.Button>
      </S.Background>
      <S.Section>
        <S.PreCardsLine>
          <S.H1>Resultados de busca</S.H1>
          <S.NewCardButton onClick={handleClick}>Novo Card</S.NewCardButton>
        </S.PreCardsLine>
        <S.Cards>
          {searched &&
            searched.results.map((character, i) =>
              i < 12 ? (
                <S.Card>
                  <S.Content>
                    <S.Image src={character.image} alt="" />
                    <S.Hr />
                    <S.H2>{character.name}</S.H2>
                    <S.P>{character.location.name}</S.P>
                  </S.Content>
                  <S.Options>
                    <S.Option onClick={handleClick}>
                      <S.Trash src={trash} alt="" />
                      <S.POptions>Excluir</S.POptions>
                    </S.Option>
                    <S.OHr />
                    <S.Option onClick={handleClick}>
                      <img src={edit} alt="" />
                      <S.POptions>Editar</S.POptions>
                    </S.Option>
                  </S.Options>
                </S.Card>
              ) : (
                <></>
              )
            )}
        </S.Cards>
      </S.Section>
    </main>
  );
}
