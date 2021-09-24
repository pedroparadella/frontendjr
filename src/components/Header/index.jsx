import React from "react";
import { Header } from "./styles";

import Logo from "../../images/logo-teste.svg";

const HeaderCabecalho = () => {
  return (
    <Header>
      <img src={Logo} alt="" />
    </Header>
  );
};

export default HeaderCabecalho;
