import React from "react";

const Navbar = () => {

  let imgUrl =
    "https://impar.com.br/img/Impar_logo_branco.svg";

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="Teste-logo" className="navbar-image" />
      </div>
    </nav>
  );
};

export default Navbar;
