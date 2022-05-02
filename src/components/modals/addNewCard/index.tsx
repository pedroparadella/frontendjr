/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import * as S from './styles';

import iconCriar from '../../../assets/icone_criar.svg';
import FormModal from './formModal';
import * as B from '../../Button';
import ModalContext from '../../../contexts/modalContext/Context';

const AddNewCardModal = () => {
  const { handleFormModal } = useContext(ModalContext);

  const handleOpenModal = () => {
    handleFormModal();
  };

  return (
    <S.Overlay>
      <S.Modal>
        <B.CloseButton onClick={handleOpenModal}>X</B.CloseButton>
        <S.ModalHeader>
          <img src={iconCriar} alt="Icone criar card" />
          <p>Criar card</p>
        </S.ModalHeader>
        <FormModal />
      </S.Modal>
    </S.Overlay>
  );
};

export default AddNewCardModal;
