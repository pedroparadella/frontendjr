import React from 'react';
import SearchBar from './components/searchBar'
import Header from './components/header/index.js'
import * as S from './style/app.js'

function App() {
  return (
    <S.Wrapper>
      <Header/>
      <SearchBar/>
    </S.Wrapper>
  );
}


export default App;
