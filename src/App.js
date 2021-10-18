import React from 'react';
import SearchMechanism from './components/SearchMechanism'
import Header from './components/header/index.js'
import Modal from './components/modal'
import * as S from './style/app.js'

function App() {
  return (
    <S.Wrapper>
      <Modal/>
      <Header/>
      <SearchMechanism/>
    </S.Wrapper>
  );
}


export default App;
