import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Muli', sans-serif;
    
  }

  button {
    cursor: pointer;
  }
`;
