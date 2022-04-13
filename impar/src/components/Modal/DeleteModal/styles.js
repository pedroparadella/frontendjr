import styled from "styled-components";
import icoLixeira from "../../../assets/ico-lixeira.png";

export const DeleteModalContainer = styled.div `
  animation: animaterOpacity 1.5s;
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 4;
`;

export const DeleteIcoContainer = styled.div `
  align-self: center;
  display: flex;
  height: 20vh;
  width: 10vw;
`;

export const Overlay = styled.div `
  background: rgba(49, 49, 49, 0.8);
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
`;

export const Modal = styled.div `
  background-color: whitesmoke;
  border-radius: 1vh;
  display: flex;
  flex-direction: column;
  height: 50vh;
  margin-top: 40vh;
  margin-left: 50vw;
  opacity: 0.9;
  padding: 2%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 30vw;
`;

export const RoundedIco = styled.div `
  background-color: rgba(255, 0, 0, 0.4);
  border: 4px groove gray;
  border-radius: 100%;
  display: flex;
  height: 20vh;
  opacity: 0.3;
  width: 10vw;
`;

export const Ico = styled.img `
  display: flex;
  height: 17vh;
  margin-left: 10.4vw;
  margin-top: -17.5vh;
  width: 9vw;
`;

export const ButtonsContainer = styled.div `
  display: flex;
  flex-direction: row;
  height: 30vh;
  margin-top: -10vh;
  width: 30vw;
`;

export const Button = styled.button `
  background-color: ${(props) => `${props.background}`};
  border: 2px solid red;
  border-radius: 2vh;
  color: ${(props) => `${props.color}`};
  height: 5vh;
  font-size: 2vw;
  margin-top: 14vh;
  margin-left: 3vw;
  width: 10vw;
`;

export const Text = styled.p`
  align-self: center;
  display: flex;
  color: ${(props) => `${props.color}`};
  font-size: ${(props) => `${props.fontSize}vw`};
`;