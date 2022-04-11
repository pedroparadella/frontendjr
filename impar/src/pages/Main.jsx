import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "../components/navBar/navBar";

const Main = () => {
  return (
    <div className="Main">
      <NavBar />
      <h1>Welcome to Main!</h1>
    </div>
  );
};

export default Main;
