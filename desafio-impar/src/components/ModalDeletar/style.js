import styled from "styled-components";
import { corExcluir, corTextoExcluir } from "../UI/variaveis";
<link rel="stylesheet" href="https://use.typekit.net/oqy8vpj.css"></link>;

export const Fundo = styled.div`
  width: 1440px;
  height: 100%;

  background: rgba(246, 244, 246, 0.1) ;

  position: fixed;
  display: flex;

  left: 0px;
  top: 0px;
`;
export const ModalWrapper = styled.div`
  margin-top: 144px;
  margin-left: 501px;
  width: 438px;
  height: 434px;

  background-color: rgba(255, 255, 255);
  opacity: 1;
`;
export const Circulo = styled.div`
  margin-top: 35px;
  margin-left: 139px;

  width: 159px;
  height: 159px;

  background: #f6f4f6 0% 0% no-repeat padding-box;
  border: 6px solid #e4e4e4;
  border-radius: 100%;
  opacity: 1;
`;
export const ButaoSair = styled.button`
  margin-top: -20px;
  margin-left: 420px;
  width: 34px;
  height: 34px;

  font-size: 20px;
  
  border: none;
  cursor: pointer;
  border-radius: 100%;
  opacity: 1;

  color: #FFFFFF;
  background: #e76316;
`;
export const Imagem = styled.img`
  margin-top: 39px;
  margin-bottom: 45px;
  margin-left: 40px;

  width: 68px;
  height: 68px;
`;
export const TextoExcluir = styled.h1`
  color: ${(props) => (props.primary ? "Vermelho" : corExcluir)};

  margin-top: 25px;

  text-align: center;
  font-size: 30px;

  font-weight: 700;
  letter-spacing: 0px;

  opacity: 1;

  background: #ffffff;
`;
export const TextoCerteza = styled.h1`
  color: ${(props) => (props.primary ? "Vermelho" : corTextoExcluir)};

  margin-top: 13px;

  text-align: center;
  font-size: 12px;

  font-weight: 800;
  letter-spacing: 0px;
  font-family: Muli, sans-serif;
  text-transform: uppercase;
  opacity: 0.8;

  background: #ffffff;
`;
export const Linha = styled.hr`
  width: 364.5px;

  margin-left: 36.5px;
  margin-right: 37.04px;
  margin-top: 28.11px;

  border: 1px solid #e4e4e4;
  opacity: 1;
`;
export const BotaoExcluir = styled.button`
  margin-top: 22.9px;
  margin-left: 49px;
  width: 165px;
  height: 48px;

  background: #db2525 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  opacity: 1;

  border: none;
  cursor: pointer;

  text-align: center;
  font-size: 18px;
  font-weight: 100;

  font-family: Muli, sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
`;
export const BotaoCancelar = styled.button`
  color: ${(props) => (props.primary ? "Vermelho" : corExcluir)};

  margin-top: 22.9px;
  margin-left: 17px;
  width: 165px;
  height: 48px;

  border: none;
  cursor: pointer;

  text-align: center;
  font-size: 18px;
  font-weight: 700;

  border: 1px solid;
  box-shadow: 0px 3px 6px #92207242;
  border: 1px solid #db2525;
  border-radius: 8px;
  opacity: 1;
`;