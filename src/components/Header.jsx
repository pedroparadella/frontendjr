import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { ReactComponent as Logo } from "../assets/icon-logo.svg";

const Header = () => {
  return (
    <>
      <Navbar sticky="top" className="bg-gradient-header">
        <Logo className="mx-4" />
      </Navbar>
    </>
  );
};

export default Header;
