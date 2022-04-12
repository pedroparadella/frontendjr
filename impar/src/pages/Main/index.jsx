import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import { MainCardsContainer } from "./styles";
import { Button } from "../../components/Card/styles";
import { API } from "../../services/axiosconfig";
import a from "../../assets/familia-feliz.jpg"

const Main = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <MainCardsContainer>
        <Card src={a} /> <Card /> <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </MainCardsContainer>
      <button
        onClick={() =>
          API.get().then(({ data: { results } }) => console.log(results))
        }
      >
        aaaaaaaa
      </button>
    </>
  );
};

export default Main;
