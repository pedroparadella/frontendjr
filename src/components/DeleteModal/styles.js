import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    button.close{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 2.125rem;
        height: 2.125rem;
        top: -15px;
        right: -15px;
        border-radius: 50%;
        border: none;
        background: var(--highlight-color);
        box-shadow: 0px 3px 6px #E7631636;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10rem;
        height: 10rem;
        background: rgba(219, 37, 37, 0.06);
        border-radius: 50%;
        border: 6px solid var(--light-gray);
        margin-bottom: 1.5rem;
            img[alt="Excluir"]{
                width: 4.25rem;
                height: 4.25rem;
            }
    }
    h3{
        font-size: 2rem;
        color: var(--error-color);
        margin-bottom: 0.75rem;
    }
    p{
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--text-color);
    }
`