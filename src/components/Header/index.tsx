/* eslint-disable @next/next/no-img-element */
import React from 'react';

import SearchBar from './searchBar';
import * as S from './styles';
import logo_impar from '../../assets/logo-teste.svg';

const Header = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={logo_impar} alt="logo impar" />
      </S.LogoContainer>

      <SearchBar />
    </S.Container>
  );
};

export default Header;
