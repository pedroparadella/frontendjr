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
        box-shadow: 0 3px 6px #E7631636;
    }

    div.radius{
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
        margin-bottom: .75rem;
    }
    p{
        font-size: .75rem;
        font-weight: 600;
        color: var(--text-color);
        margin-bottom: 1.75rem;
    }
    div.container-button{
        display: flex;
        justify-content: space-around;
        width: 100%;

        button{
            margin-top: 1.5rem;
            width: 10rem;
            height: 3rem;
            border-radius: .5rem;
            border: none;
            box-shadow: 0 3px 6px rgba(146, 32, 114, 0.26);
            color: var(--white-color);
            font-size: 1.125rem;
            font-weight: 600;

        }
        button.delete{
            background: var(--error-color);
        }
        button.cancel{
            background: var(--white-color);
            color: var(--error-color);
            border: 1px solid var(--error-color);
        }
    }
`
export const Line = styled.div`
    width: min(100%, 23rem);
    border:  1px solid var(--light-gray);
`