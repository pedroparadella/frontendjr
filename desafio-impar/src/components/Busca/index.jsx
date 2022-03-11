import React from "react";
import { Input, Icone, Fundo, Botao } from "../Busca/style";
import fundo_busca from "../../assets/img/fundo_busca.png";
import lupa from "../../assets/img/icones/lupa.svg";

const Busca = () => {

  
  return (
    <>
      <div>
        <Input type="text" placeholder="    Digite aqui sua busca..." />
        
        <Botao onClick={console.log("ola mundo")}>
          <Icone src={lupa} alt="Icone lupa" />
        </Botao>
      </div>

      <Fundo src={fundo_busca} alt="Fundo pagina busca" />
    </>
  );
};

export default Busca;
