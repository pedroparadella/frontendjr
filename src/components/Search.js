import React, { useState } from 'react';
import * as S from './SearchStyles';
import lupa from '../images/lupa.svg';
import Data from '../data.json';

export default function Search() {
  const [search, setSearch] = useState('');

  function handleSearch(){
    Data.map((pokemon) => {
      return console.log(pokemon.name);
    })
  }

  return (
    <>
      <S.SearchSection>
        <S.Container>
          <S.Input
            placeholder="Digite aqui sua busca..."
            className="usuarioInput"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch();
            }}
          />
          <img src={lupa} alt="Logo" className="lupa" />
        </S.Container>
      </S.SearchSection>
    </>
  );
}
