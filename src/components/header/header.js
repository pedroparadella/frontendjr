import React, { useState } from "react";
import styled from "styled-components";
import img from "../../images/fundo-busca.png"

const Container = styled.div`
width: 100%;
height: 28vh;
background-image: url(${img});
display: flex;
align-items: center;
justify-content: center;
background-size: cover;
`
const Input = styled.input`
width: 50%;
height: 8vh;
border: none;
border-radius: 15px;
padding-left: 20px;
font-family: Arial, Helvetica, sans-serif;
font-size: 22px;

&:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }


::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
    color: gray;

}
`
const Titulo = styled.div`
width: 100%;
height: 8vh;
background-color: #6C0042;
display: flex;
align-items: center;
`
const Texto1 = styled.h1`
font-family: "Poppins";
font-size: 28px;
color: white;
font-weight: lighter;
margin: 8px;
`
const Texto2 = styled.h1`
font-family: "Poppins";
font-style: italic;
font-size: 28px;
color: white;
font-weight: 100;
`

function Header(props){
  
  return (
      <>
      <Titulo>
        <Texto1>Teste</Texto1>
        <Texto2>Ímpar</Texto2>
      </Titulo>
      <Container>
         <Input placeholder='Digite sua busca aqui...' onChange = {(e) =>{
          props.onSearch(e.target.value)
         } }/>
      </Container>
      </>
    );
}
export default Header;