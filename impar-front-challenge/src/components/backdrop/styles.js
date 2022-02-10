import styled from "styled-components";
import { keyframes } from "styled-components";

const slideInFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100%)
    }

    100%{
        opacity: 1
        transform: translateX(0%);
    }

`;

export const BackdropContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${props => props.value === "create" ? "flex-end" : "center"} ;
  align-items: ${props => props.value === "create"  ? null : "center"};
  background-color: rgba(255, 255, 255, 0.6);
  animation: ${slideInFadeIn} 0.5s forwards;
`;
