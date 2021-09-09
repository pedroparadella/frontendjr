import React, { useState } from 'react';
import CreateCard from './CreateCard';
import * as S from './ResultStyles';

function Result() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };

  return (
    <>
      <div
        className={sidebar ? 'bgCreateCard active' : 'bgCreateCard'}
        onClick={showSidebar}
      />
      <div className={sidebar ? 'createCard active' : 'createCard'}>
        <CreateCard />
      </div>

      <S.Search>
        <S.TituloCard>Resultado de busca</S.TituloCard>
        <S.Button type="button" onClick={showSidebar}>
          Novo Card
        </S.Button>
      </S.Search>
    </>
  );
}

export default Result;
