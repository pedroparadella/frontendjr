import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(242, 243, 245, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: #ffff;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.09);
  width: 438px;
  height: 434px;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const Footer = styled.div`
  height: 73px;
  margin: 0 20px 20px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImageContainer = styled.span`
  height: 159px;
  width: 159px;
  border: 6px solid #e4e4e4;
  background: #db25250f;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 68px;
  }
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: #454545;
  &:nth-child(2) {
    font-size: 32px;
    font-weight: bold;
    color: #db2525;
    margin-top: 25px;
    margin-bottom: 0;
  }
`;
