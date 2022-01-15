import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { ReactComponent as Logo } from "../assets/icon-logo.svg";

// . . . Componente Header . . .
// Como funciona: componente completamente visual
// apenas exibe o logo da empresa no topo da tela.
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
