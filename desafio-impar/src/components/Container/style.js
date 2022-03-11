import styled from "styled-components";
import { corBranco, corDestaque, corFundo, corPrimaria } from "../UI/variaveis";

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

  margin-top: 0px;
  margin-left: 553px;

  width: 173px;
  height: 48px;

  
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  opacity: 1;
`;
