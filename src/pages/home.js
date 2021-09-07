import React from 'react';
import * as S from './styled';
import Card from '../components/Card';

export default function home() {
  return (
    <>
      <S.SearchSection>
        <S.Container>
          <S.Input
            placeholder="Digite aqui sua busca..."
            className="usuarioInput"
          />
        </S.Container>
      </S.SearchSection>

      <S.ResultSection>
        <S.Search>
          <S.TituloCard>Resultado de busca</S.TituloCard>
          <S.Button>Novo Card</S.Button>
        </S.Search>
        <S.Cards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </S.Cards>
      </S.ResultSection>
    </>
  );
}
