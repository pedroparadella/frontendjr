import styled from "styled-components";

export const InputContainer = styled.div`
    height: 3rem;
    width: 100%;

    input{
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 5px;
        font-family: inherit;
        font-size: 1rem;
        padding: 0 15px;
    
    &: focus{
        outline: none
    }
`