import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import { MainCardsContainer } from "./styles";

const Main = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <MainCardsContainer>
        <Card /> <Card /> <Card />
        <Card />
      </MainCardsContainer>
    </>
  );
};

export default Main;
