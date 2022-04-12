import styled from "styled-components";

export const CardContainer = styled.div `
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 30vh;
  padding: 2vw;
  width: 18vw;
  margin: 1vw;
`;

export const CardImgContainer = styled.div `
  background-color: red;
  border-radius: 5%;
  height: 100%;
  width: 100%;
`;

export const CardImg = styled.div `
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;

export const CardDescription = styled.div`
  background-color: purple;
  width: 100%;
  height: 50%;
`;

export const CardIcons = styled.div`
  align-self: center;
  background-color: pink;
  display: flex;
  height: 28%;
  flex-direction: row;
  width: 20vw;
`;

export const Ico = styled.img`
  display: flex;
  height: 90%;
  width: 30%;
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
`;