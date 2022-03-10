import React from "react";

import { GlobalStyle } from "./components/UI/GlobalStyle"
import Cabecalho from "./components/Cabecalho";
import Busca from "./components/Busca";
import Container from "./components/Container";
import Cartao from "./components/Cartao";


function App() {
  return (
    <>
    <GlobalStyle />
    <Cabecalho />
    <Busca />
    <Container />
    <Cartao />
    </>
  );
}

export default App;
