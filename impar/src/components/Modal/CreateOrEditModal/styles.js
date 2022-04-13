import styled from "styled-components";
export const CreateOrEditModalContainer = styled.div `
  animation: animaterOpacity 1.5s;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 4;
`;

export const DeleteIcoContainer = styled.div `
  /* background-color: pink; */
  display: flex;
  align-self: center;
  width: 10vw;
  height: 20vh;
`;

export const Overlay = styled.div `
  background: rgba(49, 49, 49, 0.8);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
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
  background-color: ${(props) => `${props.background}`};
  border: 2px solid red;
  color: ${(props) => `${props.color}`};
  border-radius: 2vh;
  height: 5vh;
  font-size: 2vw;
  width: 10vw;
  margin-top: 14vh;
  margin-left: 3vw;
`;

export const Text = styled.p`
  display: flex;
  color: rgb(99, 21, 119);
  font-size: 2vw;
  font-weight: bold;
`;

export const Input = styled.input`
  border-radius: 1vh;
  display: flex;
  font-size: 1.5vw;
  height: 5vh;
  margin-top: 3vh;
  width: 25vw;
`;