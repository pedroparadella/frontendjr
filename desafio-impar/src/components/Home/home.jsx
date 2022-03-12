import React from "react";

import { GlobalStyle } from "../UI/GlobalStyle"
import Cabecalho from "../Cabecalho/index"
import Busca from "../Busca/index"
// import ModalPoke from "../ListarPokemons/index"


function Home() {
  return (
    <>
    <GlobalStyle />
    <Cabecalho />
    <Busca />
    {/* <ModalPoke /> */}
  
    </>
  );
}

export default Home;
