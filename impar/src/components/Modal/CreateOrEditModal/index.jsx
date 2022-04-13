import React from "react";
import actions from "../../../store/actions";
import "../keyframes.css";

import {
  CreateOrEditModalContainer,
  Overlay,
  Modal,
  Button,
  Input,
  Text,
} from "./styles";

import { useSelector, useDispatch } from "react-redux";

const CreateOrEditModal = ({ isCreating }) => {
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.isEditing);
  const productsList = useSelector((state) => state.productsList);
  const cardIndex = useSelector((state) => state.cardIndex);

  const toggleModal = () => {
    dispatch({ type: actions.TOGGLE_EDITING });
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
      {isEditing && (
        <CreateOrEditModalContainer>
          <Overlay onClick={toggleModal}></Overlay>
          <Modal className="modal-content">
            <Text>{isCreating ? "Criar Card" : "Editar Card"}</Text>
            <Input placeholder="   Digite o título do Card" />
            <Input placeholder="   Digite o link da thumbnail" />
          </Modal>
        </CreateOrEditModalContainer>
      )}
    </>
  );
};

export default CreateOrEditModal;
