import React from "react";
import { Container } from "./styles";

import Header from '../Header'
import Content from '../MainContent'

const MainContainer = () => {
  return( 
  <Container>
    <Header></Header>
    <Content></Content>
  </Container>
  )
}

export default MainContainer;
