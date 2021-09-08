import React from 'react';
import * as S from './styled';
import Search from '../components/Search';
import Card from '../components/Card';

export default function home() {
  return (
    <>
      <Search />

      <S.ResultSection>
        
        <S.Search>
          <S.TituloCard>Resultado de busca</S.TituloCard>
          <S.Button>Novo Card</S.Button>
        </S.Search>

        <S.ContainerCards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </S.ContainerCards>

      </S.ResultSection>
    </>
  );
}
