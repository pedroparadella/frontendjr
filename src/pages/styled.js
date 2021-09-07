import styled from 'styled-components';
import fundoBusca from '../images/fundo-busca.png';

export const SearchSection = styled.div`
  height: 261px;
  background: url(${fundoBusca}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Input = styled.input`
  padding: 20px;
  width: 150px;
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 20px;
  top: 50px;
  position: relative;
  font-size: 1.3rem;
  color: #454545;

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  height: 261px;
  align-items: center;
`;

export const ResultSection = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TituloCard = styled.h2`
  color: #5f1478;
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
  font-size: 1.05rem;
  font-family: Muli, sans-serif;
  cursor: pointer;
  min-width: 106px;
  @media (max-width: 450px) {
    padding: 15px 20px;
    font-size: 0.85rem;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 25px;

  @media (max-width: 1200px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 900px) {
    grid-template-columns: auto auto;
    grid-gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;
