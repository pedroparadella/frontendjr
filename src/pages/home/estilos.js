import styled from "styled-components";

export const Menu = styled.header`
  position: fixed;
  z-index: 11;
  background: transparent linear-gradient(272deg, #ae276f 0%, #5f1478 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  height: 64px;
  width: 100%;

  img {
    padding: 15px;
  }
`;

export const Banner = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 40px;

  img {
    width: 100%;
    height: 30vh;
  }
  div {
    position: absolute;
    bottom: 50px;
  }
  @media (max-width: 750px) {
    img {
      height: 30vh;
    }
  } ;
`;

export const Busca = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 520px) {
    width: 95%;
  }
  button {
    position: absolute;
    padding-right: 25px;
    z-index: 10;
    border: none;
    background: transparent;
    outline: none;
  }

  img {
    height: auto;
  }

  input {
    width: 100%;
    height: 80px;
    border-radius: 8px;
    border: 0;
    font-size: 24px;
    padding: 28px;
    font: normal normal 300 24px/30px Muli;
  }

  input:hover::placeholder {
    color: #000;
  }
`;

export const Header = styled.header`
  display: flex;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 60px 0;

  p {
    color: #5f1478;
    text-align: center;
    font: normal normal normal 32px/40px Muli;
  }
  button {
    font-size: 18px;
    width: 230px;
    height: 55px;
    color: #fff;
    background-color: #e76316;
    border: 0;
    border-radius: 8px;
    font: normal normal bold 18px/23px Muli;
  }
  @media (max-width: 820px) {
    justify-content: center;
    p {
      padding: 15px;
    }
  } ;
`;

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 auto;
  width: 80%;
  margin-bottom: 50px;
  @media (max-width: 1020px) {
    justify-content: center;
  }
`;
