import styled from 'styled-components';

export const Header = styled.div`
  background: transparent linear-gradient(272deg, #ae276f 0%, #5f1478 100%) 0%
    0% no-repeat padding-box;
  height: 64px;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (max-width: 460px) {
    display: flex;
    justify-content: center;
  }
`;
