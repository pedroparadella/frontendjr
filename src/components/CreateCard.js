import React from 'react';
import * as S from './CreateCardStyles';
import * as R from './ResultStyles';
import criar from '../images/icone_criar.svg';

export default function CreateCard() {
  return (
    <S.Container>
      <S.Titulo>
        <img src={criar} alt="Logo" className="criar" />
        Criar card
      </S.Titulo>
      <S.Linha />
      <label>
        <S.Info>DIGITE UM NOME PARA O CARD</S.Info>
        <S.Input type="text" placeholder="Digite o título" />
      </label>
      <label>
        <S.Info>INCLUA UMA IMAGEM PARA APARECER NO CARD</S.Info>
        <S.Input type="file" />
      </label>
      <S.Linha />

      <R.Button type="button" className="right">
        Criar card
      </R.Button>
    </S.Container>
  );
}
