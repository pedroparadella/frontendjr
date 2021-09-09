import React from 'react';
import styled from 'styled-components';
import AppBar from './components/AppBar';
import Form from './components/Form';
import Banner from './img/fundo-busca.png';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BannerBackground  = styled.div`
    background-image: url(${Banner});
    width: 100%;
    height:261px;
    z-index: -1;
    top:0;
    left:0;
    position: absolute;
`;


function App() {
  return (
      <AppContainer>
      <AppBar />
      <BannerBackground />
      <Form></Form>
      </AppContainer>
  );
}

export default App;
