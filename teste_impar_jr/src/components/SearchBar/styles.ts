import styled from "styled-components";
import fundoBusca from "../../assets/fundo-busca.png";

export const Container = styled.div`
  background-image: url(${fundoBusca});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;

  align-items: center;

  width: 100%;
  height: 261px;
`;

export const Search = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1046px;
  height: 76px;

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;

    padding: 0 100px 0 15px;
    border-radius: 8px;

    font-size: 24px;

    ::placeholder {
      font-weight: 400;

      color: #757575;
    }
  }

  div {
    position: absolute;
    height: 100%;
    width: 49px;
    height: 49px;
    display: flex;
    align-items: center;

    right: 20px;
    align-self: center;

    pointer-events: none;
    img {
      margin-bottom: 5px;
    }
  }
`;
