import React from "react";
import {StyledCabecalho, Logo} from "../Cabecalho/style"
import logoTeste from "../../assets/img/icones/logo-teste.png"


const Cabecalho = () => {
    return(
        <StyledCabecalho>
        <Logo src={logoTeste} alt="Logo Impar" />
        </StyledCabecalho>
    );
};

export default Cabecalho;