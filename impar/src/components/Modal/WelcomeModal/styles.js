import styled from "styled-components";

export const WelcomeModalContainer = styled.div `
  animation: animaterOpacity 2s;
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 4;
`;

export const LogoContainer = styled.div `
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  width: 35vw;
  height: 40vh;
  margin-top: -4vh;
`;

export const Overlay = styled.div`
  background: rgba(49, 49, 49, 0.8);
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
`;

export const Modal = styled.div`
  background-color: whitesmoke;
  border-radius: 1vh;
  display: flex;
  flex-direction: column;
  height: 60vh;
  margin-top: 40vh;
  margin-left: 50vw;
  padding: 2%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 35vw;
`;

export const Text = styled.p`
  align-self: center;
  display: flex;
  color: black;
  font-size: 3vw;
`;