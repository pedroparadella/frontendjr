import styled from 'styled-components';

import backgroundSearch from '../../assets/fundo-busca.png';

export const BannerContainer = styled.section`
  min-height: 261px;
  background-image: url(${backgroundSearch});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 1050px;
  height: 65px;
  background-color: #FFF;
  padding: 25px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px){
    max-width: 95%;
  }

  img{
    width: 39px;
    height: 39px;
    cursor: pointer;
  }
`;

export const InputSearch = styled.input`
  width: 90%;
  height: 65px;
  background: none;
  border: none;
  color: #757575;
  font-size: 18px;

  ::-webkit-input-placeholder{
    font-size: 18px;
    color: #757575;
  }
`;