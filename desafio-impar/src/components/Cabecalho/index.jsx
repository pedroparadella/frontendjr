import React from "react";
import {StyledCabecalho, Logo} from "../Cabecalho/style"
import logoImpar from "../../assets/img/icones/logoImpar.svg"


const Cabecalho = () => {
    return(
        <StyledCabecalho>
        <Logo src={logoImpar} alt="Logo Impar" />
        </StyledCabecalho>
    );
};

export default Cabecalho;