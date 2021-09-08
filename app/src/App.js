import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: ${props => props.theme.primary};
`;

const theme = {
  primary: '#5F1478',
  secondary: '#AE276F',
  tertiary: '#E76316',
  white: '#FFFFFF',
  gray1: '#F6F4F6',
  gray2: '#E5E5E5',
  gray3: '#E4E4E4',
  gray4: '#0000000F',
  black: '#263238',
  graySeparator: '#F0EFF0',
  pinkShadow: '#92207242',
  shadowAppbar: '#00000029',
  darkGray: '#757575',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <h1>Hello World</h1>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
