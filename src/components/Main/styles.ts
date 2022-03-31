import styled from 'styled-components';

export const Container = styled.div`
   width:100%;
   margin-bottom:100rem;
`;
export const Content = styled.div`
  margin:0 auto;
  max-width:1046px;

`

export const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:4.0rem 0;

   h1{
        color:var(--color-primary);
        font-family:Mulish, sans-serif;
        font-weight:400;
        line-height:4.0rem;
    }
    button{
        height:4.8rem;
        width: 17.3rem;
        border-radius:8px;
        background: var(--color-emphasis);
        font-family:Mulish, sans-serif;
        font-weight:bold;
        color: var(--color-white);

        transition:filter 0.2s;
        &:hover{
            filter:brightness(0.9);
        }
    }
`

export const CardContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:  flex-start;
    height:100%;
    gap:3.5rem;
    

`