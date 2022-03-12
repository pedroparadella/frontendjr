import React from "react";
import {
  Fundo,
  ModalWrapper,
  Circulo,
  Imagem,
  TextoExcluir,
  TextoCerteza,
  Linha,
  BotaoExcluir,
  BotaoCancelar,
} from "../ModalDeletar/style";

import Trash from "../../assets/img/icones/trash.svg";

export const ModalDeletar = ({ showModalDeletar, setShowModalDeletar }) => {
  return (
    <>
      {showModalDeletar ? (
        <Fundo>
          <ModalWrapper>
            <Circulo>
              <Imagem src={Trash} alt="Icone mão" />
            </Circulo>
            
            <TextoExcluir>Excluir</TextoExcluir>
            <TextoCerteza>Certeza que deseja excluir?</TextoCerteza>
            <Linha />

            <BotaoExcluir aria-label="Fechar modal"
              onClick={() => alert("Não implementado")}>Excluir</BotaoExcluir>
            <BotaoCancelar
              aria-label="Fechar modal"
              onClick={() => setShowModalDeletar((prev) => !prev)}
            >
              Cancelar
            </BotaoCancelar>
          </ModalWrapper>
        </Fundo>
      ) : null}
    </>
  );
};
