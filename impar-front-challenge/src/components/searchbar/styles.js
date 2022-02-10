import styled from "styled-components";


export const BackgroundImage = styled.section`
    width: 100%;
    height: 9rem;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    text-align: center;
    
`

export const InputContainer = styled.div`
    width: 30%;
    position: relative;
    top: 4.2rem;
    margin: 0 auto;

    @media(max-width:600px){
        width: 50%;
    }

    @media(max-width:370px){
        width: 70%;
    }
  
`
