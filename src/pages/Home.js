import React, { useState } from 'react';
import * as S from './HomeStyles';
import * as SS from '../components/SearchStyles';
import Result from '../components/Result';
import icone from '../images/icone.svg';
import iconEdit from '../images/Icon-edit.svg';
import iconTrash from '../images/Icon-trash.svg';
import { Link } from 'react-router-dom';
import Data from '../data.json';
import Modal from '../components/Modal';
import lupa from '../images/lupa.svg';

export default function Home() {
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  return (
    <>
      <SS.SearchSection>
        <SS.Container>
          <SS.Input
            placeholder="Digite aqui sua busca..."
            className="usuarioInput"
            value={search}
            onChange={(e) => {
              setSearch(console.log(e.target.value));
            }}
          />
          <img src={lupa} alt="Logo" className="lupa" />
        </SS.Container>
      </SS.SearchSection>

      <div className={modal ? '' : 'desactive'}>
        <S.ContainerModal onClick={showModal}>
          <Modal />
        </S.ContainerModal>
      </div>

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
                  <Link to="/" className="options edit" onClick={showModal}>
                    <img src={iconEdit} alt="icon-edit" className="icon" />
                    Editar
                  </Link>
                  <Link to="/" className="options trash" onClick={showModal}>
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
