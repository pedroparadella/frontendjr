import styled from "styled-components";
import { corTextoModal, corDestaque, corBranco } from "../UI/variaveis";

export const Background = styled.div`
  width: 1440px;
  height: 772px;

  background: #f6f4f6aa;
  opacity: 0.9;

  position: fixed;
  display: flex;

  left: 0px;
  top: 0px;
`;

export const ModalWrapper = styled.div`
  width: 642px;
  height: 772px;

  position: fixed;

  left: 798px;
  top: -2px;

  color: #000;
  background: #ffffff;
  opacity: 1;
`;
export const Criar = styled.img`
  width: 46px;
  height: 46px;

  margin-top: 46px;
  margin-left: 32px;
`;
export const Titulo = styled.h1`
  color: ${(props) => (props.primary ? "roxo" : corTextoModal)};

  background: #ffffff;

  font-size: 32px;
  font-weight: bold;
  text-align: left;

  margin-top: 0px;
  margin-left: 0px;
`;
export const Linha = styled.hr`
  width: 571.5px;

  margin-left: 32px;
  margin-right: 38.44px;
  margin-top: 32.5px;
  margin-bottom: 43.2px;

  border: 1px solid #d4d4d4;
  opacity: 1;
`;
export const Texto = styled.p`
  background: #ffffff;

  margin-left: 35.3px;

  text-align: left;
  color: #454545;
  text-transform: uppercase;
  letter-spacing: 0px;
  opacity: 1;

  font-size: 14px;
  font-weight: bold;
`;
export const Input = styled.input`
  margin-top: 12px;
  margin-left: 35px;
  margin-right: 34px;
  margin-bottom: 50px;

  border: 1px solid #b9b9b9;
  border-radius: 8px;
  opacity: 1;

  background: #ffffff 0% 0% no-repeat padding-box;

  font-size: 18px;
  font-weight: 300;

  text-align: left;
  color: #757575;

  opacity: 1;
  width: 573px;
  height: 60px;
`;
export const TextoCaixa = styled.p`
  margin-top: 12px;
  margin-left: 35px;
  margin-right: 34px;

  padding-left: 25px;

  justify-content: center;

  width: 573px;
  height: 60px;

  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  opacity: 1;

  font-size: 17px;
  text-align: left;
  font-weight: 300;
  letter-spacing: 0px;

  color: #757575;
  opacity: 1;
`;

export const Button = styled.button`
  color: ${(props) => (props.primary ? "laranja" : corDestaque)};

  margin-left: 92px;
  margin-top: 5.22px;
  margin-bottom: 5.78px;
  background: #ffffff;

  width: 224px;
  height: 48px;

  border: 1px solid var(---cor-destaque);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #e763162e;
  border: 1px solid #e76316;
  border-radius: 8px;
  opacity: 1;

  font-size: 18px;
  font-weight: 700;

  cursor: pointer;
`;

export const LinhaB = styled.hr`
  width: 571.5px;

  margin-left: 32px;
  margin-right: 38.44px;
  margin-top: 44px;

  border: 1px solid #d4d4d4;
  opacity: 1;
`;

export const ButtonCriar = styled.button`
  color: ${(props) => (props.primary ? "branco" : corBranco)};

  margin-top: 26px;
  margin-left: 435px;
  width: 167px;
  height: 48px;

  background: #e76316 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #92207242;
  border-radius: 8px;
  opacity: 1;

  font-size: 18px;
  font-weight: 400;

  border: none;
  cursor: pointer;
  opacity: 1;
`;
