import React, { useState } from 'react';
import * as S from './SearchStyles';
import lupa from '../images/lupa.svg';

export default function Search() {
  const [search, setSearch] = useState('');

  function handleSearch() {
    console.log(search);
  }

  return (
    <>
      <S.SearchSection>
        <S.Container>
          <S.Input
            placeholder="Digite aqui sua busca..."
            className="usuarioInput"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyUp={handleSearch}
          />
          <img src={lupa} alt="Logo" className="lupa" />
        </S.Container>
      </S.SearchSection>
    </>
  );
}
