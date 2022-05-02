import React, { useContext } from 'react';
import ModalContext from '../../../../contexts/modalContext/Context';

import * as B from '../../../Button';
import CustomFileInput from '../customInputFile';
import * as S from './styles';

const FormModal = () => {
  const { handlePopup } = useContext(ModalContext);
  return (
    <S.FormContainer onSubmit={(e) => e.preventDefault()}>
      <hr />
      <S.FormMain>
        <S.InputGroup>
          <label>DIGITE UM NOME PARA O CARD</label>
          <S.Input type="text" placeholder="Digite o título" />
        </S.InputGroup>
        <S.InputGroup>
          <CustomFileInput />
        </S.InputGroup>
      </S.FormMain>
      <hr />

      <S.ButtonContainer>
        <B.Button color="#e76316" onClick={handlePopup}>
          Criar Card
        </B.Button>
      </S.ButtonContainer>
    </S.FormContainer>
  );
};

export default FormModal;
