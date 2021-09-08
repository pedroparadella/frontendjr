import React, { useState } from "react";
import styled from "styled-components/macro";

// Assets
import createCard from "../assets/create.svg";
import exit from "../assets/exit.png";

// Component
import Button from "./Button";

const Container = styled.div`
  width: 40.125rem;
  height: 47.9375rem;
  display: flex;
  flex-direction: column;
  background: var(--color_white);
  position: absolute;
  top: 0;
  right: 0;
  padding: 2.5625rem 2rem 0 2rem;
  cursor: initial;
  animation: animationIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${(props) =>
    props.animationOut &&
    "animationOut 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"};

  @keyframes animationIn {
    0% {
      transform: translateX(300px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes animationOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(600px);
    }
  }

  @media (max-width: 648px) {
    width: 100%;
    height: 100vh;
  }
`;

const Header = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const ExitDelete = styled.img`
  width: 2.125rem;
  height: 2.125rem;
  box-shadow: 0 0.1875rem 0.375rem #e7631636;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
`;

const RowHeader = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderImage = styled.img`
  width: 2.875rem;
  margin-right: 1.125rem;
  margin-bottom: 2rem;
`;

const HeaderTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color_purple);
  margin-bottom: 2rem;
`;

const Line = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: var(--color_lightGray);
  margin-bottom: ${(props) => props.marginBottom};
`;

const TitleInput = styled.h2`
  margin-bottom: 0.6875rem;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color_darkGray);
`;

const Input = styled.input`
  width: 100%;
  color: var(--color_mediumGray);
  font-size: 1.125rem 1.5625rem;
  font-weight: 300;
  padding: 1.125rem;
  border: 0.0625rem solid var(--color_lightGray);
  border-radius: 0.5rem;
  margin-bottom: 3.125rem;

  :nth-of-type(2) {
    display: none;
  }
`;

const Label = styled.label`
  width: 100%;
  padding: 1.125rem 15.125rem 1.125rem 1.125rem;
  border: 0.0625rem solid var(--color_lightGray);
  border-radius: 0.5rem;
  margin-bottom: 3.125rem;
  position: relative;

  p {
    color: var(--color_mediumGray);
    font-size: 1.125rem 1.5625rem;
    font-weight: 300;
    width: 100%;
    overflow-x: hidden;
  }
`;

function CreateCard({
  handleAdd,
  closeModal,
  animation,
  dataUpdate,
  setDataUpdate,
  handleUpdate,
  ...props
}) {
  const [newCard, setNewCard] = useState({});

  const selectFile = () => {
    let element = document.querySelector('input[type="file"]');
    element.click();
  };

  const handleChange = (field, value) => {
    const newValue = value.target.value;
    const file = field === "front_default" && value.target.files[0];

    if (field === "front_default") {
      setNewCard({
        ...newCard,
        front_default: {
          preview: URL.createObjectURL(file),
          name: file.name,
        },
      });
    }
    if (field === "name") {
      setNewCard({
        ...newCard,
        name: newValue,
      });
    }
  };

  const handleCreateCard = (e) => {
    if (e.keyCode === 13) {
      handleAdd(newCard);
      closeModal();
    }
  };

  const checkValidate = () => {
    if (!newCard.name) {
      return false;
    }
    return true;
  };

  return (
    <Container
      animationOut={animation}
      onClick={(ev) => ev.stopPropagation()}
      onKeyDown={(e) => handleCreateCard(e)}
    >
      <Header>
        {window.innerWidth <= 648 && (
          <ExitDelete onClick={() => closeModal()} src={exit} alt="Sair" />
        )}
        <RowHeader>
          <HeaderImage src={createCard} alt="Icone de criar card" />
          <HeaderTitle>Criar Card</HeaderTitle>
        </RowHeader>
        <Line />
      </Header>
      <TitleInput>DIGITE UM NOME PARA O CARD</TitleInput>
      <Input
        onChange={(value) => handleChange("name", value)}
        value={newCard.name}
        type="text"
        placeholder="Digite o título"
      />
      <TitleInput>INCLUA UMA IMAGEM PARA APARECER NO CARD</TitleInput>
      {window.innerWidth > 648 && (
        <Label htmlFor="upload-file">
          <p>
            {newCard?.front_default?.name
              ? newCard?.front_default?.name
              : "Nenhum arquivo selecionado"}
          </p>
          <Button
            funcAction={() => selectFile()}
            positionButton="absolute"
            rightButton=".5rem"
            topButton=".2rem"
            backgroundButton="var(--color_white)"
            borderButton="0.0625rem solid var(--color_orange)"
            colorButton="var(--color_orange)"
          >
            Escolher arquivo
          </Button>
        </Label>
      )}
      <Input
        onChange={(value) => handleChange("front_default", value)}
        accept="image/*"
        id="upload-file"
        type="file"
      />
      {window.innerWidth <= 648 && (
        <Button
          funcAction={() => selectFile()}
          rightButton=".5rem"
          topButton=".2rem"
          backgroundButton="var(--color_white)"
          borderButton="0.0625rem solid var(--color_orange)"
          colorButton="var(--color_orange)"
        >
          {newCard?.front_default?.name
            ? newCard?.front_default?.name
            : "Escolher arquivo"}
        </Button>
      )}
      <Line marginBottom="1.625rem" />
      <Button
        funcAction={() => {
          dataUpdate.name ? handleUpdate(newCard) : handleAdd(newCard);
          closeModal();
          setDataUpdate([]);
        }}
        alignSelfButton="flex-end"
        widthButton="10.4375rem"
        paddingButton="0"
        disabled={
          dataUpdate.name || dataUpdate.front_default ? false : !checkValidate()
        }
      >
        {dataUpdate.name ? "Editar Card" : "Criar Card"}
      </Button>
    </Container>
  );
}

export default CreateCard;
