import styled from 'styled-components';

import banner from '../../assets/fundo-busca.png';

export const Container = styled.div`
  background: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 261px;
  width: 100%;

  @media (max-width: 1050px) {
    background: none;
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  height: 64px;
  background: linear-gradient(90deg, #5f1478 5%, #ae276f 100%);
  padding: 0;
  width: 100%;
  position: relative;
  top: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 192.03px;
    padding: 0;
    margin-left: 1.5em;
  }
`;
