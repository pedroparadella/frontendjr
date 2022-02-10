import styled from "styled-components";
import { keyframes } from "styled-components";

const spinner = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const CenterSpinner = styled.div`
  width: 100%;
  text-align: center;
`

export const LoadingSpinnerContainer = styled.div`
  margin: 10rem auto 0 auto;
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid rgb(121, 30, 121);
    border-color: rgb(121, 30, 121) transparent rgb(121, 30, 121) transparent;
    animation: ${spinner} 1.2s linear infinite;
  }
`;
