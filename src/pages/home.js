import React from 'react';
import * as S from './styled';
import Search from '../components/Search';
import Result from '../components/Result';
import icone from '../images/icone.svg';
import iconEdit from '../images/Icon-edit.svg';
import iconTrash from '../images/Icon-trash.svg';
import { Link } from 'react-router-dom';
import Data from '../data.json';

export default function Home() {
  return (
    <>
      <Search />

      <S.ResultSection>
        <Result />

        <S.CardList>
          {Data.map((pokemon) => {
            return (
              <S.Card>
                <img src={icone} alt="Icone" className="icone" />
                <hr />
                <p className="cardText">{pokemon.name}</p>
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
          })}
        </S.CardList>
      </S.ResultSection>
    </>
  );
}
