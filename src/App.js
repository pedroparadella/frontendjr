import React from 'react';
import SearchMechanism from './components/SearchMechanism'
import Header from './components/header/index.js'
import * as S from './style/app.js'

function App() {
  return (
    <S.Wrapper>
      <Header/>
      <SearchMechanism/>
    </S.Wrapper>
  );
}


export default App;
