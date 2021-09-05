import React, { useState } from "react";
import styled from "styled-components/macro";

// Assets
import createCard from "../assets/create.svg";

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
    props.animation &&
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
      transform: translateX(300px);
    }
  }
`;

const Header = styled.div`
  width: 100%;
  margin-bottom: 2rem;
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
  padding: 1.125rem;
  border: 0.0625rem solid var(--color_lightGray);
  border-radius: 0.5rem;
  margin-bottom: 3.125rem;
  position: relative;

  p {
    color: var(--color_mediumGray);
    font-size: 1.125rem 1.5625rem;
    font-weight: 300;
  }
`;

function CreateCard({ isOpen, ...props }) {
  const selectFile = () => {
    let element = document.querySelector('input[type="file"]');
    element.click();
  };

  return (
    <Container setAnimation={isOpen} onClick={(ev) => ev.stopPropagation()}>
      <Header>
        <RowHeader>
          <HeaderImage src={createCard} alt="Icone de criar card" />
          <HeaderTitle>Criar Card</HeaderTitle>
        </RowHeader>
        <Line />
      </Header>
      <TitleInput>DIGITE UM NOME PARA O CARD</TitleInput>
      <Input accept="image/*" type="text" placeholder="Digite o título" />
      <TitleInput>INCLUA UMA IMAGEM PARA APARECER NO CARD</TitleInput>
      <Label for="upload-file">
        <p>Nenhum arquivo selecionado</p>
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
      <Input id="upload-file" type="file" />
      <Line marginBottom="1.625rem" />
      <Button
        alignSelfButton="flex-end"
        widthButton="10.4375rem"
        paddingButton="0"
      >
        Criar Card
      </Button>
    </Container>
  );
}

export default CreateCard;
