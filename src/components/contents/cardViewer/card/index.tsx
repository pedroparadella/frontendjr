/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';

import * as S from './styles';
import * as B from '../../../Button';
import { CharProps } from '../../../../types/character';

import trashIcon from '../../../../assets/Icon-trash.svg';
import editIcon from '../../../../assets/Icon-edit.svg';
import ModalContext from '../../../../contexts/modalContext/Context';

const Card = ({ character: { name, thumbnail } }: CharProps) => {
  const { handleDeleteModal, handlePopup } = useContext(ModalContext);

  const imagePath = `${thumbnail.path}/landscape_large.${thumbnail.extension}`;

  return (
    <S.Container>
      <S.CardContent>
        <img src={imagePath} alt="" />
        <span>
          <hr />
          {name}
        </span>
      </S.CardContent>
      <S.CardFooter>
        <B.EditAndDeleteButton onClick={handleDeleteModal}>
          <img src={trashIcon} alt="Icone Excluir" />
          <p>Excluir</p>
        </B.EditAndDeleteButton>

        <B.EditAndDeleteButton onClick={handlePopup}>
          <img src={editIcon} alt=" icone editar" />
          <p>Editar</p>
        </B.EditAndDeleteButton>
      </S.CardFooter>
    </S.Container>
  );
};

export default Card;
