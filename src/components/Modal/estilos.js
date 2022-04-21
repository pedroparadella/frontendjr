import styled from "styled-components";

export const BackgroundModal = styled.section`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background-color: #f6f4f6cc;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
  width: 30%;
  position: fixed;
  z-index: 1001;
  height: 48vh;
  background-color: #fff;
  @media (max-width: 1600px) {
    width: 60%;
    height: 64vh;
  }

  @media (max-width: 800px) {
    width: 90%;
    height: 70vh;
  }

  @media (max-height: 700px) {
    height: 90vh;
  } ;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconeTrash = styled.div`
  width: 170px;
  height: 170px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 6px solid #e4e4e4;
  background: #db25250f;
  border-radius: 50%;

  img {
    width: 40%;
    height: 800%;
  }
`;
export const TxtBody = styled.div`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #e4e4e4;

  p:first-child {
    color: #db2525;
    font: normal normal bold 32px/40px Muli;
  }

  p:not(p:first-child) {
    font: normal normal bold 12px/15px Muli;
    padding: 20px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button {
    width: 200px;
    height: 60px;
    margin: 20px 20px 0 20px;
    border-radius: 8px;
    font: normal normal bold 18px/23px Muli;
    cursor: pointer;
  }

  button:first-child {
    background-color: #db2525;
    color: #fff;
    border: 0;
  }

  button:not(button: first-child) {
    border: 1px solid #db2525;
    background-color: #fff;
    color: #db2525;
  }

  @media (max-height: 700px) {
    button {
      width: 150px;
      height: 44px;
    }
  }
`;

export const Exit = styled.div`
  position: absolute;
  right: -18px;
  top: -18px;

  button {
    padding: 12px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    background-color: #e76316;
    color: #fff;
  }

  button::after,
  button::before {
    content: "";
    display: block;
    width: 14px;
    height: 1.5px;
    background: currentColor;
    margin-top: 5px;
    position: relative;
  }

  button::after {
    transform: rotate(-135deg);
    top: -6px;
  }

  button::before {
    transform: rotate(135deg);
  }
`;
