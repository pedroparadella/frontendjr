import React from 'react';
import * as S from './ModalStyles';
import icone from '../images/icone.svg';

export default function Modal() {
  return (
    <>
      <S.ModalBox>
        <img src={icone} alt="Icone" className="iconTrash" />
        <S.ModalTitle>
          Funcionalidade <br /> não implementada
        </S.ModalTitle>
        <hr />
        <S.ModalText>
          Em breve disponibilizaremos essa funcionalidade
        </S.ModalText>
        <S.Button type="button">ENTENDI</S.Button>
      </S.ModalBox>
    </>
  );
}
