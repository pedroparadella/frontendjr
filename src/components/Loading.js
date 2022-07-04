import React from "react";
import styled from "styled-components/macro";
import loading from '../assets/loading.gif'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 10rem;
  height: auto;
`;

const Loading = () => {
  return (
    <Container>
      <Img src={loading} alt="Gif do Pikachu correndo"/>
    </Container>
  );
};

export default Loading;
