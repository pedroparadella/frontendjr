import React from "react";
import actions from "../../../store/actions";
import "../keyframes.css";

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
import { useSelector, useDispatch } from "react-redux";

const DeleteModal = () => {
  const dispatch = useDispatch();

  const isDeleting = useSelector((state) => state.isDeleting);

  const toggleModal = () => {
    dispatch({ type: actions.TOGGLE_DELETING });
  };

  const deleteCard = () => {
    dispatch({
      type: actions.REMOVE_PRODUCT,
    });
    toggleModal();
  };

  return (
    <>
      {isDeleting && (
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
              <Button background={"red"} color={"white"} onClick={deleteCard}>
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
