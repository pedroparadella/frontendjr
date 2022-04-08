import styled from "styled-components"

export const Container = styled.main`
    margin: 0 auto;
    width: min(100%, 65rem);

    .loading-pokemons{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 1rem;
        font-size: 2rem;
        font-weight: 600;
        color:var(--primary-color);
    }

`
export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    padding: 1rem;
    margin-top: 2rem;

    h2{
        font-size: 2rem;
        color: var(--primary-color);
    }
    button{
        width: min(100%, 11rem);
        height: 3rem;
        border-radius: .5rem;
        border: none;
        background: var(--highlight-color);
        font-size: 1.125rem;
        color:var(--white-color);
        box-shadow: 0px 3px 6px rgba(146, 32, 114, 0.26)
    }
`
export const MainCardContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 15.4rem);
    grid-gap: 1rem;
    margin: 0 auto;
    justify-content: center;
    

`