import React from "react";
import img from "../../Assets/logo-teste.png";
import "./styles.scss";

const Header = () => {
  return (
    <div className="Header">
      <img src={img} alt="" />
    </div>
  );
};

export default Header;
