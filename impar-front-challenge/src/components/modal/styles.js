import styled from "styled-components";


export const CenterAlignWrapper = styled.div`
  width: 40vw;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftAlignWrapper = styled(CenterAlignWrapper)`
  align-items: start;
  padding: 1.5rem;

  @media (max-width :648px){
    width: 60vw;
  }

  @media (max-width: 432px){
    width: 85vw;
  }
`;

export const TrashIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid rgba(0, 13, 255, 0.15);
  background-color: rgba(149, 13, 247, 0.16);
}
`;

export const TextContainer = styled.div`
  text-align: center;

  h3 {
    color: red;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  p {
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  button {
    margin-top: 0.5rem;
    width: 90px;
    min-width: 90px;
  }
`;

export const AddModalContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    h1{
      font-size: 1.8rem;
      color: rgb(121, 30, 121);
      margin: 0;
      padding-left: 20px;
    }
  
`;

export const BreakLine = styled.hr`
  margin: 1.5rem 0;
  width: 100%;
`

export const InputContainer = styled.div`
  
  width: 100%;
  margin: 1rem 0;
  
  label{
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  input{
    margin-top: 0.7rem;
    border: 1px solid gray;
  }

  button{
    margin-top: 1.5rem;
  }
`

export const ButtonAlignRight = styled.div`
  align-self: flex-end ;
`
