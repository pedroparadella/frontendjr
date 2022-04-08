import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F6F4F6;
        --primary-color: #5F1478;
        --secondary-color: #AE276F;
        --light-text-color: #D6D6D6;
        --dark-text-color: #757575;
        --highlight-color: #E76316;
        --white-color: #FFFFFF;
        --light-gray: #e4e4e4;
        --gray: #e5e5e5;
        --text-color: #263238;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }
    body{
        font-family: 'muli' , sans-serif ;
        font-weight: 400;
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button, img {
        font-family: 'muli' , sans-serif ;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    .search-error {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        max-width: 65rem;
        padding: 0 2rem;
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
        color: var(--primary-color);
    }
`