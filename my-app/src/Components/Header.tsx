import React from "react";
import Logo from "../Assets/logo-teste.svg";
import styled from "styled-components";

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  padding: 12px 24px;
  background-image: linear-gradient(45deg, #5f1478, #ae276f);
  img {
    width: 190px;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <img src={Logo} alt="logo" />
    </Wrapper>
  );
};

export default Header;
