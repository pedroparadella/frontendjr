import styled from "styled-components"

export const Container = styled.div`
    margin: 2.25rem auto 0 auto;
    width: min(100%, 65rem);
    padding: 1rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: min(100%, 15rem);
    height: min(100%, 17rem);

    background: var(--white-color);
    border-radius: .5rem;
    border: 1px solid var(--light-gray);
    box-shadow: 0px 3px 6px var(--gray);


    p{
        margin: .75rem 0 1.75rem 0;
        color: var(--text-color);
    }

`
export const ContainerImage = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.75rem 0;
    width: 6rem;
    height: 6rem;
    background: var(--background);

    border-radius: 50%;
    border: 1px solid var(--light-gray);

    img {
        width: 5rem;
        height: 5rem;
    }
`

export const Line = styled.span`
    width: 11rem;
    border: 1px solid #f0eff0;
    ;
`
export const ControlButtons = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 3rem;

    border-radius: 0px 0px .5rem .5rem;
    box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.06);

    button{
        display: flex;
        align-items: center;
        background: transparent;
        border: none;
        outline: none;
        color: var(--text-colot);
        opacity: 0.48;
        transition: all .5s ease-in-out;

            &:hover{
                color: var(--error-color);
            }


        
        img{
            width: 14px;
            height: 14px;
            margin: 0 8px 3px 0
        }
    }
`