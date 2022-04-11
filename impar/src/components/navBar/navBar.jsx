import * as React from "react";
import { NavBarContainer } from "./styles";
import whiteLogo from "../../assets/white-logo.svg"

const NavBar = () => {
  return (
      <NavBarContainer>
          <img src={whiteLogo} width="120vw"/>
      </NavBarContainer>
  );
};

export default NavBar;
