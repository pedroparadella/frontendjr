import React, { MouseEvent, useContext } from 'react';
import ModalContext from '../../../../contexts/modalContext/Context';
import * as B from '../../../Button';
import * as S from './style';

const ContainerHeader = () => {
  const { handleFormModal } = useContext(ModalContext);

  const handleOpenModal = () => {
    handleFormModal();
  };

  return (
    <S.Container>
      <p>Resultado de busca</p>
      <B.Button color="#e76316" onClick={handleOpenModal}>
        Novo Card
      </B.Button>
    </S.Container>
  );
};

export default ContainerHeader;
