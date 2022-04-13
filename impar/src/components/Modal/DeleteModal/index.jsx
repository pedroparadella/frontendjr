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
  const productsList = useSelector((state) => state.productsList);
  const cardIndex = useSelector((state) => state.cardIndex);

  const toggleModal = () => {
    dispatch({ type: actions.TOGGLE_DELETING });
  };

  const deleteCard = () => {
    productsList.splice(cardIndex, 1);
    dispatch({
      type: actions.UPDATE_PRODUCTS_LIST,
      productsList: productsList,
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
