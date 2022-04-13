import { useState } from "react";
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

const CreateOrEditModal = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const dispatch = useDispatch();

  const isEditing = useSelector((state) => state.isEditing);
  const creatingOrEditing = useSelector((state) => state.creatingOrEditing);
  const productsList = useSelector((state) => state.productsList);
  const cardIndex = useSelector((state) => state.cardIndex);

  const toggleModal = () => {
    dispatch({ type: actions.TOGGLE_EDITING });
  };

  const onClick = () => {
    const newInfo = { title, thumbnail };

    if (creatingOrEditing === "creating") {
      dispatch({
        type: actions.ADD_PRODUCTS_LIST,
        newProduct: newInfo,
      });
    }

    if (creatingOrEditing === "editing") {
      dispatch({
        type: actions.EDIT_PRODUCT,
        newProduct: newInfo,
      });
    }

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
            <Text>
              {creatingOrEditing === "creating" ? "Criar Card" : "Editar Card"}
            </Text>
            <Input
              placeholder="   Digite o título do Card"
              onChange={(event) => setTitle(event.target.value)}
            />
            <Input
              placeholder="   Digite o link da thumbnail"
              onChange={(event) => setThumbnail(event.target.value)}
            />
            <Button onClick={onClick}>
              {creatingOrEditing === "creating" ? "Criar" : "Editar"}
            </Button>
          </Modal>
        </CreateOrEditModalContainer>
      )}
    </>
  );
};

export default CreateOrEditModal;
