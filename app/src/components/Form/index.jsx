import React from "react";
import styled from "styled-components";
import SearchInputField from "./../SearchInputField";

const Container = styled.div`
    margin-top: 147px;;
    width:73vw;
`; 

const ResultContainer = styled.div`
    background-color: #fff;
`;



export default function Form(props) {
  return (
    <Container>
          <SearchInputField />
         
          <ResultContainer />
    </Container>
  )
}
