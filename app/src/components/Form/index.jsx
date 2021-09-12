import React from "react";
import styled from "styled-components";
import SearchInputField from "./../SearchInputField";
import Button from "../Button";
import ResultContainer from "../ResultContainer";

const Container = styled.div`
    margin-top: 147px;;
    margin-bottom: 153px;
    width: 1056px;
`; 

const Row = styled.div`
    display: flex;
    margin-top: 59px;
    justify-content: space-between;
    width:100%;
`;


const Label = styled.div`
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-32)/var(--unnamed-line-spacing-40) var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--cor-primaria);
    text-align: left;
`;


export default function Form(props) {
  return (
    <Container>
          <SearchInputField />
          <Row>
              <Label>
                Resultado de Busca
              </Label>
              <Button>Novo Card</Button>
          </Row>
          <ResultContainer />
    </Container>
  )
}
