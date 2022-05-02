import React, { useContext } from 'react';
import AppContext from '../../../contexts/apiContext/Context';
import Card from './card';
import ContainerHeader from './header';

import * as S from './styles';

const CardViewer = () => {
  const { characters: data } = useContext(AppContext);

  return (
    <>
      <ContainerHeader />
      <S.Container>
        {data ? (
          data.map((char) => {
            return <Card key={char.id} character={char} />;
          })
        ) : (
          <p>Carregando...</p>
        )}
      </S.Container>
    </>
  );
};

export default CardViewer;
