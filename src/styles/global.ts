import {createGlobalStyle} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #F6F4F6;
  }

  //1 rem = 16px
  html{
    @media(max-width: 1080px){
      font-size: 93.75%; //equilave a 15px em relação a 16x
    }

    @media(max-width: 720px){
      font-size: 87.5%; //14px
    }

    @media(max-width: 375px){
      font-size: 75%; //12px
    }
  }
`