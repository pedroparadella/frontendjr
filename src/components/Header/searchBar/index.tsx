/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from 'react';

import { input, KeyDown } from '../../../types/character';
import * as S from './styles';
import AppContext from '../../../contexts/apiContext/Context';

import lupa from '../../../assets/lupa.svg';

const SearchBar = () => {
  const { setSearchTerm } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target }: input) => {
    setInputValue(target.value);
  };

  const getCharacters = () => {
    setSearchTerm(inputValue);
    setInputValue('');
  };

  const handleClick = () => {
    getCharacters();
  };

  const handleKeyDown = (e: KeyDown) => {
    if (e.key === 'Enter') {
      getCharacters();
    }
  };

  return (
    <S.Container>
      <S.Input
        type="text"
        placeholder="Digite aqui sua busca"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputValue}
      />
      <button onClick={handleClick}>
        <img src={lupa} alt="imagem do botao de pesquisa" />
      </button>
    </S.Container>
  );
};

export default SearchBar;
