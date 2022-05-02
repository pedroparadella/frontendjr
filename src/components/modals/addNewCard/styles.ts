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
  justify-content: flex-end;
  align-items: center;
`;

export const Modal = styled.div`
  position: relative;
  width: 642px;
  height: 100vh;
  max-height: 767px;
  padding: 41px 35px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.09);

  display: flex;
  flex-direction: column;

  @media (max-width: 420px) {
    padding: 0 5px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;

  p {
    align-self: flex-end;
    margin-left: 18px;
    font-size: 32px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
  }

  @media (max-width: 510px) {
    p {
      font-size: 28px;
    }
  }
`;
