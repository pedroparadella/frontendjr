import styled from 'styled-components';
import fundoBusca from '../images/fundo-busca.png';

export const SearchSection = styled.div`
  height: 261px;
  background: url(${fundoBusca}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  height: 261px;
  align-items: center;
  position: relative;
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
