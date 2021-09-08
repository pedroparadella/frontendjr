import React from 'react';
import icone from '../images/icone.svg';
import iconEdit from '../images/Icon-edit.svg';
import iconTrash from '../images/Icon-trash.svg';
import * as S from './CardStyles';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <S.Card>
      <img src={icone} alt="Icone" className="icone" />
      <hr />
      <p className="cardText">Lorem ipsum dolor sit amet consectetur</p>
      <S.Options>
        <Link to="/" className="options edit">
          <img src={iconEdit} alt="icon-edit" className="icon" />
          Editar
        </Link>
        <Link to="/" className="options trash">
          <img src={iconTrash} alt="icon-trash" className="icon" />
          Excluir
        </Link>
      </S.Options>
    </S.Card>
  );
}

export default Card;
