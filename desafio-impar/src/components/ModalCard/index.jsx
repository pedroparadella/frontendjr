import React from "react";
import {
  Background,
  ModalWrapper,
  Criar,
  Titulo,
  Linha,
  LinhaB,
  Texto,
  Input,
  TextoCaixa,
  Button,
  ButtonCriar,
} from "../ModalCard/style";
import icone from "../../assets/img/icones/icone_criar.svg";

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <Titulo>
              <Criar src={icone} alt="Icone Criar" />
              Criar card</Titulo>
            <Linha />
            <Texto>Digite um nome para o card</Texto>
            <Input type="text" placeholder="    Digite o título" />
            <Texto>Inclua uma imagem para aparecer no card</Texto>
            <TextoCaixa>
              Nenhum arquivo selecionado{" "}
              <Button
                aria-label="Fechar modal"
                onClick={() => alert("Não implementado")}
              >Escolher arquivo</Button>
            </TextoCaixa>
            <LinhaB />
            <ButtonCriar
              aria-label="Fechar modal"
              onClick={() => setShowModal((prev) => !prev)}
            >Criar card</ButtonCriar>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};