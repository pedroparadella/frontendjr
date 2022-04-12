import styled from "styled-components";

export const CardContainer = styled.div `
  background-color: white;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  height: 50vh;
  padding: 2vw;
  width: 18vw;
  margin: 1vw;
`;

export const CardImgContainer = styled.div `
  /* background-color: black; */
  height: 100%;
  width: 100%;
`;

export const CardImg = styled.div `
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;

export const CardTitle = styled.div`
  /* background-color: purple; */
  width: 100%;
  height: 50%;
`;

export const CardIcons = styled.div`
  align-self: center;
  /* background-color: pink; */
  display: flex;
  height: 18%;
  flex-direction: row;
  width: 20vw;
`;

export const Ico = styled.img`
  display: flex;
  height: ${(props) => `${props.height}%`};
  margin-left: 10%;
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
  :hover {
    color: red;
  }
  font-size: 1vw;
`;