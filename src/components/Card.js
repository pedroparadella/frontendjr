import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import api from "../Api";

// Assets
import defaultCard from "../assets/default-card.svg";
import edit from "../assets/edit.svg";
import trash from "../assets/trash.svg";

const Container = styled.div`
  box-shadow: 0 0.1875rem 0.375rem #00000029;
  border-radius: 0.5rem;

  @media (max-width: 648px) {
    width: 90%;
  }
`;

const Card = styled.div`
  width: 14.625rem;
  height: auto;
  min-height: 14.6875rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--color_white);
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  border-radius: 0.5rem 0.5rem 0 0;

  @media (max-width: 648px) {
    width: 100%;
  }
`;

const CircleImageCard = styled.div`
  width: 5.9375rem;
  height: 5.9375rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.625rem;
  background: var(--color_gray);
  border: 0.0625rem solid #e4e4e4;
`;

const Line = styled.div`
  width: 80%;
  height: 0.0625rem;
  background: var(--color_gray);
  margin-bottom: 0.625rem;
`;

const TextCard = styled.p`
  display: flex;
  align-items: center;
  max-height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  font-size: 1rem;
  font-weight: 400;
  color: var(--color_blue);
  text-align: center;
  padding: 2rem 1.375rem;
  text-transform: capitalize;
`;

const Buttons = styled.div`
  display: flex;
  border-radius: 0 0 0.5rem 0.5rem;
  background: var(--color_white);
  box-shadow: inset 0 0.1875rem 0.375rem #0000000f;
  padding: 0.8125rem 0;
`;

const Button = styled.button`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9375rem;
  font-weight: 400;
  background: none;
  border: none;
  outline: none;
  color: var(--color_lightGray);

  :hover {
    color: ${(props) =>
      props.colorButtonRed ? "var(--color_red)" : "var(--color_orange)"};
  }

  :first-child {
    border-right: 0.0625rem solid var(--color_gray);
  }

  img {
    max-width: 0.8125rem;
    margin-right: 0.6875rem;
  }
`;

const CardComponent = ({ setIsOpen, dataCard, ...props }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`pokemon/${dataCard?.name}/`)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [dataCard]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <Card>
        <CircleImageCard>
          <img
            src={data?.sprites?.back_default || defaultCard}
            alt="Imagem do card"
          />
        </CircleImageCard>
        <Line />
        <TextCard>{data?.name}</TextCard>
      </Card>
      <Buttons>
        <Button colorButtonRed>
          <img src={trash} alt="Icone de editar" />
          Excluir
        </Button>
        <Button onClick={() => setIsOpen(true)} colorButtonOrange>
          <img src={edit} alt="Icone de excluir" />
          Editar
        </Button>
      </Buttons>
    </Container>
  );
};

export default CardComponent;
