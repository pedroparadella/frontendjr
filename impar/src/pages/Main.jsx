import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";

const Main = () => {
  return (
    <div className="Main">
      <NavBar />
      <Carousel />
      <h1>Welcome to Main!</h1>
    </div>
  );
};

export default Main;
