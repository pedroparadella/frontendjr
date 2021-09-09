import styled from 'styled-components';

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;

export const TituloCard = styled.h2`
  color: #5f1478;
  font-weight: 700;
  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`;

export const Button = styled.button`
  color: white;
  background: #e76316;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 3px 6px #92207242;
  padding: 15px 45px;
  font-size: 1.1rem;
  font-family: Muli, sans-serif;
  cursor: pointer;
  min-width: 106px;
  @media (max-width: 450px) {
    padding: 15px 20px;
    font-size: 0.8rem;
  }
`;
