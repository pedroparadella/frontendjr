import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before{
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, 
    input, 
    button, 
    textarea {
        font-family: 'Muli', sans-serif;
        font-size: 15px;

        @keyframes initialFade {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        animation: initialFade .6s ease-in-out; 
    }

    body{
        background: #f6f4f6;
    }

::-webkit-scrollbar{
  width:0;
}
`;
export default GlobalStyle;
