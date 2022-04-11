import * as React from "react";
import { NavBarContainer, WhiteLogo } from "./styles";
import whiteLogo from "../../assets/white-logo.svg";

const NavBar = () => {
  return (
    <NavBarContainer>
      <WhiteLogo src={whiteLogo} />
    </NavBarContainer>
  );
};

export default NavBar;
