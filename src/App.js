import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "../src/components/Header";
import CardFooter from "./components/CardFooter";
import SectionHeader from "./components/SectionHeader";
import SearchIcon from "./components/SearchIcon";

const Teste = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const getData = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=1%22")
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const searchFunction = () => {
    if (search.length > 0) {
      return setData(
        data.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
      );
    } else {
      return getData();
    }
  };
  return (
    <div>
      <Header />
      <div
        className="backgroundBox"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage:
            "url(" +
            "https://ihadaf.com/wp-content/uploads/2021/03/%D9%85%D8%AC%D9%85%D8%B9-1.jpg)",
        }}
      >
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="searchBar"
          placeholder="Digite aqui sua busca..."
        />
        <button className="searchIcon" onClick={searchFunction}>
          <SearchIcon />
        </button>
      </div>
      <div className="container">
        <SectionHeader />
        <section>
          {data.map((item, key) => {
            key = item.id;
            return (
              <div className="card">
                <div className="backgroundIcon">
                  <img className="cardIcon" src={item.image} alt="icon" />
                </div>
                <hr />
                <p className="cardText">{item.name}</p>
                <CardFooter />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Teste;
