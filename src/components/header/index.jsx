import { Container } from "./style.js";

import Logo from "../../assets/logo-teste.svg";

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
    </Container>
  );
}
