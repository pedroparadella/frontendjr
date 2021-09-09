import React from 'react';
import styled from 'styled-components';
import AppBar from './components/AppBar';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function App() {
  return (
      <AppContainer>
      <AppBar />
      </AppContainer>
  );
}

export default App;
