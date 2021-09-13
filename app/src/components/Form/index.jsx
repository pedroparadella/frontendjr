import React, { useRef, useState }  from "react";
import styled from "styled-components";
import SearchInputField from "./../SearchInputField";
import Button from "../Button";
import ResultContainer from "../ResultContainer";
import newCardIcon from './../../icons/icone_criar.svg';

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


const Label = styled.p`
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-32)/var(--unnamed-line-spacing-40) var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--cor-primaria);
    text-align: left;
`;


const SideNav = styled.div`
  display: flex;
  justify-content: end;
  align-items: stretch;
  height: 100%; 
  width: 100vw; 
  position: fixed;
  z-index: 2; 
  top: 0; 
  left: 100%;
  background-color: #F6F4F6CC;
  overflow-x: hidden;
  transition: 0.5s;
`;

const SideNavContent = styled.div`
  width: 44.6vw;
  height: 100%;
  background-color: var(--cor-branco);
  padding: 41px 34px 235px 32px;
`;

const HBar  = styled.div`
  height: 1px;
  width: 100%;
  background-color: #D4D4D4;
`;



export default function Form(props) {
  const sideNav = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  function toggleSideNav(){
    sideNav.current.style.left = isOpen ?  "100%" : 0;
    setIsOpen(!isOpen);
  }

  return (
    <Container>
          <SearchInputField />
          <Row>
              <Label>
                Resultado de Busca
              </Label>
              <Button onClick={toggleSideNav}>Novo Card</Button>
          </Row>
          <ResultContainer />
          <SideNav ref={sideNav} onClick={toggleSideNav}>
          <SideNavContent>
              <div style={{display: 'flex'}}>
                <img style={{width: '46px', height: '46px', marginRight: '18px'}} src={newCardIcon} />
                <h1 className="-titulo-h1" >Criar card</h1>
              </div>
              <HBar style={{marginTop: 30.71}} />
              <h2 style={{marginTop: 43.29}}>DIGITE UM NOME PARA O CARD</h2>
              <input type="text" name="" id="" placeholder="Digite o título"/>
              <h2 style={{marginTop: 43.29}}>INCLUA UMA IMAGEM PARA APARECER NO CARD</h2>
              <div>
                <span>
                  Nenhum arquivo selecionado
                </span>
                <label for="files">Escolher arquivo</label>
                <input type="file" id="files" style={{"display": "none"}}/>
              </div>
              <HBar style={{marginTop: 51.22}} />
              <div style={{display: 'flex', justifyContent:"end"}}>
                <Button style={{marginTop: 26}}>Criar card</Button>
              </div>
          </SideNavContent>
          </SideNav>
    </Container>
  )
}
