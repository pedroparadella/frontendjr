import React, { useState } from "react";
import { api } from "../../services/goat-api";
import * as S from "../../style/search";
import lupa from "../../assets/lupa.svg";
import trash from "../../assets/Icon-trash.svg";
import edit from "../../assets/Icon-edit.svg"

export default function SearchMechanism() {
  const [searched, setSearched] = useState();
  const [characterName, setCharacterName] = useState("");
  const getCharacterName = (event) => setCharacterName(event.target.value);

  async function searchCharacter() {
    const response = await api.get(`character/?name=${characterName}`);
    setSearched(response.data);
    console.log(response.data);
  }

  return (
    <main>
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
          <S.NewCardButton>Novo Card</S.NewCardButton>
        </S.PreCardsLine>

        <S.Cards>
          {searched &&
            searched.results.map((character, i) => (
              i <= 10 ?

                <S.Card>
                  <S.Image src={character.image} alt="" />
                  <S.HR/>
                  <S.H2>{character.name}</S.H2>
                  <S.P>{character.location.name}</S.P>
                  <S.Options>
                    <img src={trash} alt="" />
                    <p>Excluir</p>
                    <hr />
                    <img src={edit} alt="" />
                    <p>Editar</p>
                  </S.Options>
                </S.Card>

              :

                <></>
            ))
          }
        </S.Cards>
      </S.Section>
    </main>
  );
}
