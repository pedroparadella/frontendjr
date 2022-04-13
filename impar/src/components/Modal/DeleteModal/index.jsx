import React, { useState } from "react";
import {
  DeleteModalContainer,
  Overlay,
  Modal,
  DeleteIcoContainer,
  RoundedIco,
  Ico,
  ButtonsContainer,
  Button,
  Text,
} from "./styles";

import icoLixeira from "../../../assets/ico-lixeira.png";

const DeleteModal = ({isDeleting}) => {
  console.log(isDeleting)
  const [modal, setModal] = useState(isDeleting);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <DeleteModalContainer>
          <Overlay onClick={toggleModal}></Overlay>
          <Modal className="modal-content">
            <DeleteIcoContainer>
              <RoundedIco />
            </DeleteIcoContainer>
            <Ico src={icoLixeira} height={60} />
            <Text fontSize={2} color={"red"}>
              Excluir
            </Text>
            <Text fontSize={1}>CERTEZA QUE DESEJA EXCLUIR?</Text>
            <ButtonsContainer>
              <Button background={"red"} color={"white"}>
                Excluir
              </Button>
              <Button background={"white"} color={"red"} onClick={toggleModal}>
                Cancelar
              </Button>
            </ButtonsContainer>
          </Modal>
        </DeleteModalContainer>
      )}
    </>
  );
};

export default DeleteModal;
