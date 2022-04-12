import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: rgb(231, 99, 22);
  border: none;
  border-radius: 5%;
  box-shadow: 1px 1px 1px 1px gray;
  font-size: 1.5vw;
  height: 8vh;
  width: 15vw;
  font-weight: bold;
  margin-left: 45vw;
`;

export const CarouselAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 1vw;
  display: flex;
  font-size: 2vw;
  height: 8vh;
  margin-left: 15vw;
  margin-top: -15vh;
  padding-left: 2vw;
  text-decoration: none;
  width: 70vw;
  z-index: 2;
`;

export const InputIco = styled.div`
  border-radius: 1vw;
  display: flex;
  height: 8vh;
  margin-left: 15vw;
  margin-top: -8.5vh;
  width: 70vw;
`;

export const Ico = styled.img`
  margin-left: 65vw;
  width: 5vw;
  z-index: 2;
`;

export const MainContainer = styled.div`
  background-color: whitesmoke;
  display: flex;
  height: 100%;
  width: 100%;
  padding-left: 1vw;
`;

export const MainCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

export const NewCardsContainer = styled.div`
  background-color: whitesmoke;
  color: rgb(99, 21, 119);
  display: flex;
  font-size: 4vw;
  height: 10vh;
  padding-top: 15vh;
  padding-left: 3vw;
  width: 100vw;
`;
