import React from 'react';
import styled from 'styled-components';
import AppBar from './components/AppBar';
import Form from './components/Form';
import Banner from './img/fundo-busca.png';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerBackground  = styled.img`
    z-index: -1;
    top:0;
    left:0;
    position: absolute;
    width: 100%;
`;


function App() {
  return (
      <AppContainer>
      <AppBar />
      <BannerBackground src={Banner}/>
      <Form></Form>
      </AppContainer>
  );
}

export default App;
