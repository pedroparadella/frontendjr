import styled from "styled-components";
export const CreateOrEditModalContainer = styled.div `
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
  height: 100vh;
  margin-left: 65vw;
  opacity: 0.9;
  padding: 2%;
  position: absolute;
  width: 180vw;
`;

export const Button = styled.button `
  background-color: rgb(231, 99, 22);
  border: 0px;
  border-radius: 1vh;
  color: white;
  height: 5vh;
  font-size: 2vw;
  margin-left: 15vw;
  margin-top: 14vh;
  width: 10vw;
`;

export const Text = styled.p `
  display: flex;
  color: rgb(99, 21, 119);
  font-size: 2vw;
  font-weight: bold;
`;

export const Input = styled.input `
  border-radius: 1vh;
  display: flex;
  font-size: 1.5vw;
  height: 5vh;
  margin-top: 3vh;
  width: 25vw;
`;