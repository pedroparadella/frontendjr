import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  margin: 0 6rem;
`;

export const TextAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  @media (max-width: 430px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 1.4rem;
    color: rgb(121, 30, 121);
  }

`;

export const ListContainer = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  &>div{
   flex-basis: 20%;
   margin: 0.5rem 1rem;
   min-width: 200px;
  }

`;

export const ButtonContainer = styled(TextAndButtonContainer)`
  width: 50%;
  justify-content: space-around;
  margin: 1rem auto;

  @media(max-width: 600px){
    width: 100%
  }

  button{
    width: 100px;
    margin-bottom: 0.5rem;
  }
 
`;
