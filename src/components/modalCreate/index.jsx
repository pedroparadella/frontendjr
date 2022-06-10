import Button from "../button";
import {
  Overlay,
  Modal,
  ModalTitle,
  InputBox,
  Input,
  Label,
  BoxButton,
  TextError,
} from "./style";

import { useState } from "react";

import createCardIcon from "../../assets/icone_criar.png";
import { ButtonBox } from "../button/style";
import { createCourse, editCourse } from "../../services/api";

import { v4 as uuidv4 } from "uuid";

export default function ModalCreate({
  setIsModalCreate,
  isEdit,
  setIsEdit,
  cardSelected,
  coursesData,
}) {
  const [title, setTitle] = useState(isEdit ? cardSelected.title : "");
  const [image, setImage] = useState(undefined);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    const validation = coursesData.find((item) => item.title === title);

    if (!title && !image) {
      setIsError(true);
      setErrorMessage("Preencha todos os campos");
    } else if (validation) {
      setIsError(true);
      setErrorMessage("Curso já existente");
    } else {
      if (isEdit) {
        handleEditCard();
      } else {
        let courseData = {
          id: uuidv4(),
          title,
          image,
        };

        try {
          const { data } = await createCourse("course", courseData);
        } catch (err) {
          console.log("err", err);
        }
        closeModal();
      }
    }
  };

  const handleErrorScenario = () => {};

  const handleImageChange = (ev) => {
    ev.preventDefault();
    let reader = new FileReader();
    let file = ev.target.files[0];

    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const closeModal = () => {
    setIsEdit(false);
    setIsModalCreate(false);
  };

  const handleEditCard = async () => {
    let data = {
      title,
      image,
    };
    try {
      await editCourse("course", cardSelected.id, data);
      setSuccess(true);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
    setIsError(false);
    setErrorMessage("");
  };

  const renderInputFile = () => (
    <InputBox image={image || isEdit} isError={isError}>
      <Label>Inclue uma imagem para aparecer no card</Label>
      <label for="image" className="file">
        <p>
          {image !== undefined || isEdit
            ? "Imagem selecionada"
            : "Nenhum arquivo selecionado"}
        </p>
        <p className="button">
          {image || isEdit ? "Alterar arquivo" : "Enviar arquivo"}
        </p>
      </label>
      <Input type="file" id="image" onChange={(ev) => handleImageChange(ev)} />
    </InputBox>
  );

  return (
    <Overlay onClick={() => closeModal()}>
      <Modal onClick={(e) => e.stopPropagation()} success={success}>
        {success ? (
          <div className="modal-success">
            <ModalTitle>Editado com sucesso</ModalTitle>
            <Button
              buttonMarginDesk="30px 0 0 0"
              handleClick={() => closeModal()}
            >
              Fechar
            </Button>
          </div>
        ) : (
          <>
            <span>
              <img src={createCardIcon} alt="criar um card" />
              <ModalTitle>{isEdit ? "Editar card" : "Criar card"}</ModalTitle>
            </span>
            <InputBox>
              <Label for="title">digite um nome para o card</Label>
              <Input
                placeholder="Digite o titulo"
                type="text"
                onChange={(e) => handleChange(e)}
                value={title}
                id="title"
                isError={isError}
              />
            </InputBox>
            {renderInputFile()}
            <BoxButton>
              <Button
                buttonMarginDesk="30px 0 0 0"
                handleClick={() => handleSubmit()}
              >
                {isEdit ? "Editar card" : "Criar card"}
              </Button>
            </BoxButton>
            {isError && <TextError>{errorMessage}</TextError>}
          </>
        )}
      </Modal>
    </Overlay>
  );
}
