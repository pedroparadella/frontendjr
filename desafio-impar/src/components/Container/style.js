import styled from "styled-components";
import {
  corTexto,
  corBranco,
  corDestaque,
  corFundo,
  corPrimaria,
} from "../UI/variaveis";

export const Fundo = styled.img`
  width: 1440px;
  height: 261px;
  margin-top: 0px;
  margin-left: 0px;
`;

export const Input = styled.input`
  width: 1046px;
  height: 75px;
  margin-top: 147px;
  margin-left: 162px;
  padding-left: 30px;
  background: var(---cor-branco) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  position: absolute;
  font-size: 24px;
  font-weight: 300;
  text-align: left;
  color: #757575;
  border: none;
`;

export const Icone = styled.img`
  height: 46px;
  width: 46px;
  position: absolute;
  margin-left: 1120px;
  margin-top: 143px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const BotaoB = styled.button`
  cursor: pointer;
`;

// style cartão

<link rel="stylesheet" href="https://use.typekit.net/oqy8vpj.css"></link>;

export const Texto = styled.li`
  color: ${(props) => (props.primary ? "white" : corTexto)};
  width: 191px;
  height: 40px;
  background-color: #ffffff;
  margin-top: 10px;
  margin-right: 22px;
  margin-bottom: 21px;
  margin-left: 21px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: lighter;
  font-size: 20px;
  opacity: 1;
`;
export const UL = styled.ul`
  display: grid;
  grid-template-columns: 260px 260px 260px 260px;
  list-style: none;
  grid-gap: 10px;
`;
export const Card = styled.li`
    margin-left: 168px;
    margin-top: 36px;
    width: 234px;
    height: 267px
        
    background: var(---cor-branco) 0% 0% no-repeat     padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    opacity: 1;
`;

export const Circulo = styled.div`
  margin-top: 28px;
  margin-left: 70px;
  width: 95px;
  height: 95px;
  background: #f6f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #e4e4e4;
  border-radius: 100%;
  opacity: 1;
`;
export const Imagem = styled.img`
  margin-top: -16px;
  margin-left: -15px;
  width: 120px;
  height: 119px;
  background-color: transparent;
`;

export const Botoes = styled.div`
  width: 234px;
  height: 43px;
  opacity: 1;
  background: 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px #0000000f;
  border-radius: 0px 0px 8px 8px;
  cursor: pointer;
`;

export const Botao = styled.button`
  width: 46px;
  height: 19px;
  margin-top: 13px;
  margin-bottom: 11px;
  margin-left: 11.75px;
  background-color: #ffffff;
  color: #263238;
  opacity: 0.52;
  font: normal normal normal 19px Muli;
  text-align: center;
  letter-spacing: 0px;
  display: inline-block;
  cursor: pointer;
  border: none;
  &:hover {
    color: #DB2525;
    opacity: 1;
    
  }
`;
export const ImagemIcone = styled.img`
  width: 13px;
  height: 14px;
  margin-left: 27.6px;
  margin-top: 14.87px;
  background: transparent url("img/Icon-trash.png") 0% 0% no-repeat padding-box;
  opacity: 1;
  :hover {
    color: black;
  }
`;
export const Linha = styled.hr`
  width: 180px;
  margin-left: 25px;
  margin-top: 30px;
  opacity: 0.2;
`;

export const Titulo = styled.h1`
  color: ${(props) => (props.primary ? "Roxo" : corPrimaria)};
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font-size: 32px;
  font-weight: normal;
  margin-left: 168px;
  margin-top: 40px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "laranja" : corDestaque)};
  color: ${(props) => (props.primary ? "white" : corBranco)};
  font-size: 19px;
  font-weight: 500;
  border: none;
  margin-left: 583px;
  margin-top: 0px;
  width: 173px;
  height: 48px;
  cursor: pointer;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  opacity: 1;
`;
