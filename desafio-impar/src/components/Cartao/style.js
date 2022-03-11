import styled from "styled-components";
import { corBranco, corTexto } from "../UI/variaveis";

export const Texto = styled.p`
  color: ${(props) => (props.primary ? "white" : corTexto)};

  width: 191px;
  height: 40px;

  margin-top: 10px;
  margin-right: 22px;
  margin-bottom: 41px;
  margin-left: 21px;

  text-align: center;
  font: normal normal normal 18px Muli;
  letter-spacing: 0px;
  opacity: 1;
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
export const UL = styled.ul`
  display: grid;
  grid-template-columns: 260px 260px 260px 260px;
  list-style: none;
  grid-gap: 10px;
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
  margin-top: 18px;
  margin-left: 15px;
  margin-bottom: 14px;
  margin-right: 16px;

  width: 64px;
  height: 63px;
`;

export const Botoes = styled.div`
  width: 234px;
  height: 43px;

  background: 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px #0000000f;
  border-radius: 0px 0px 8px 8px;
  opacity: 1;
`;
export const Botao = styled.p`
  width: 46px;
  height: 19px;

  margin-top: 13px;
  margin-bottom: 11px;
  margin-left: 11.75px;

  text-align: center;
  font: normal normal normal 19px Muli;
  letter-spacing: 0px;
  color: #263238;
  opacity: 0.52;
  display: inline-block;
`;
export const ImagemIcone = styled.img`
  width: 13px;
  height: 14px;

  margin-left: 27.6px;
  margin-top: 14.87px;

  background: transparent url("img/Icon-trash.png") 0% 0% no-repeat padding-box;
  opacity: 1;
`;
export const Linha = styled.hr`
  width: 180px;
  margin-left: 25px;
  margin-top: 30px;
  opacity: 0.2;
`;
