import styled from "styled-components";

export const CardContainer = styled.div `
  background-color: white;
  border-radius: 5%;
  box-shadow: 2px 2px 2px 2px gray;
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
  color: gray;
`;

export const CardIcons = styled.div`
  align-self: center;
  background-image: linear-gradient(to bottom, whitesmoke, white);
  display: flex;
  flex-direction: row;
  height: 18%;
  margin-top: 1vh;
  width: 22vw;
`;

export const Ico = styled.img`
  display: flex;
  height: ${(props) => `${props.height}%`};
  margin-left: 10%;
  margin-top: 2vh;
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
  :hover {
    color: ${(props) => `${props.hover}`};
  }
  font-size: 1vw;
`;

export const TitleContainer = styled.div`
  height: 50%;
  padding-top: 10%;
  margin-bottom: -20%;
  width: 100%;
`;