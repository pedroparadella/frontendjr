import styled from "styled-components";
import { corTexto, corBranco, corDestaque, corPrimaria } from "../UI/variaveis";
<link rel="stylesheet" href="https://use.typekit.net/oqy8vpj.css"></link>;

export const Fundo = styled.img`
  width: 1440px;
  height: 261px;
  margin-top: 0px;
  margin-left: 0px;

  }
`;
export const Input = styled.input`
  width: 1046px;
  height: 75px;
  margin-top: 147px;
  margin-left: 162px;
  padding-left: 30px;
  border-radius: 8px;

  color: #757575;
  opacity: 1;
  position: absolute;
  border: none;

  font-size: 24px;
  font-weight: 300;
  text-align: left;
  
`;
export const Icone = styled.img`
  height: 46px;
  width: 46px;
  margin-left: 1120px;
  margin-top: 143px;

  position: absolute;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const BotaoB = styled.button`
  cursor: pointer;
`;

// style cartão
export const Texto = styled.li`
  color: ${(props) => (props.primary ? "white" : corTexto)};
  width: 191px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 8px;
  margin-left: 21px;

  background-color: #ffffff;
  text-transform: capitalize;

  text-align: center;
  font: Muli;
  font-size: 17px;
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
        
    background: padding-box;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    opacity: 1;
`;
export const Circulo = styled.div`
  width: 95px;
  height: 95px;
  margin-top: 28px;
  margin-left: 70px;

  border: 1px solid #e4e4e4;
  border-radius: 100%;
`;
export const Imagem = styled.img`
  margin-top: -5px;
  margin-left: -5px;
  width: 100px;
  height: 99px;
  background-color: transparent;
`;

export const Botoes = styled.div`
  width: 232px;
  height: 41px;
  
  background: #ffffff;
  box-shadow: inset 0px 3px 6px #0000000f;
  border-radius: 0px 0px 8px 8px;
  cursor: pointer;
`;

export const Botao = styled.button`
  width: 32px;
  margin-top: 13px;
  margin-left: 13px;
  margin-right: 7px;

  background-color: #ffffff;
  opacity: 0.52;
  cursor: pointer;
  border: none;
  &:hover {
    color: #db2525;
    opacity: 1;
  }
`;
export const ImagemIcone = styled.img`
  width: 13px;
  height: 14px;
  margin-left: 22px;
  margin-top: 14.87px;
  background: transparent;
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
export const LinhaHo = styled.span`
  margin-left: 20px;
  background: transparent;
  opacity: 0.1;
`;

export const Titulo = styled.h1`
  color: ${(props) => (props.primary ? "Roxo" : corPrimaria)};
  font-size: 32px;
  font-weight: normal;
  margin-left: 168px;
  margin-top: 40px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "laranja" : corDestaque)};
  color: ${(props) => (props.primary ? "white" : corBranco)};
  
  width: 173px;
  height: 48px;
  
  font-size: 19px;
  font-weight: 500;
  border: none;
  margin-left: 583px;
  margin-top: 0px;
  cursor: pointer;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  opacity: 1;
`;