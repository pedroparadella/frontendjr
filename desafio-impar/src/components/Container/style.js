import styled from "styled-components";
import { corBranco, corDestaque, corFundo, corPrimaria } from "../UI/variaveis";

export const Titulo = styled.h1`
  color: ${(props) =>(props.primary ? "white" : corPrimaria)};
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal normal 32px/40px Muli;
  
  margin-left: 168px;
  margin-top: 40px;
  
`;

export const Button = styled.button`
  background-color: ${(props) =>(props.primary ? "white" : corDestaque)};
  color: ${(props) =>(props.primary ? "white" : corBranco)};

  margin-top: 0px;
  margin-left: 619px;
 
  width: 173px;
  height: 48px;
`;
