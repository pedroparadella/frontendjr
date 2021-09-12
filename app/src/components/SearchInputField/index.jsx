import React from "react";
import styled from "styled-components";
import lupa from "../../icons/lupa.svg";

const InputField = styled.input`
    width: 100%;
    height: 75px;
    background: var(--cor-branco) 0% 0% no-repeat padding-box;
    border-radius: 8px;
    border:0px;
    outline: 0px;
    padding: 23px 0 22px 28px;
    &::placeholder {
        color: #757575;
    }

    &:hover::placeholder {
        color: var(--unnamed-color-263238);
    }

    &:hover {
        cursor: pointer;
    }

    &:focus::placeholder {
        color:transparent;
    }
`;

const Magnifier = styled.img`
    float: right;
    left: -25px;
    top: -60px;
    position: relative;
    background-color: transparent;
    cursor: pointer;
`;

export default function SearchInputField(props) {
    return (
        <div>
            <InputField className="-titulo-h2" type="text" placeholder="Digite aqui sua busca..." onChange={null}/>
            <Magnifier src={lupa} alt="magnifier" />
        </div>
    )
}