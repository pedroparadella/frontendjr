/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import * as B from '../../Button';
import * as S from './styles';

import iconTrash from '../../../assets/Icon-trash.svg';
import ModalContext from '../../../contexts/modalContext/Context';

const EditAndDeleteModal = () => {
  const { handleDeleteModal, handlePopup } = useContext(ModalContext);

  return (
    <S.Overlay>
      <S.Modal>
        <B.CloseButton onClick={handleDeleteModal}>X</B.CloseButton>
        <S.Main>
          <S.ImageContainer>
            <img src={iconTrash} alt="" />
          </S.ImageContainer>
          <S.Text>Excluir</S.Text>
          <S.Text>CERTEZA QUE DESEJA EXCLUIR?</S.Text>
        </S.Main>
        <S.Footer>
          <B.Button color="#DB2525" onClick={handlePopup}>
            Excluir
          </B.Button>
          <B.Button color="#DB2525" secondary onClick={handleDeleteModal}>
            Cancelar
          </B.Button>
        </S.Footer>
      </S.Modal>
    </S.Overlay>
  );
};

export default EditAndDeleteModal;
