import React, { useState } from "react";

import Header from "./Header";
import Search from "./Search";
import SearchResult from "./SearchResult";
import CreateCard from "./CreateCard";
import DeleteCard from "./DeleteCard";
import ACard from "./ACard";

import Container from "react-bootstrap/Container";

const App = () => {
  // State "lifted up" de:
  // <Search/>
  // ... ... ... ...
  // O que faz:
  // É o estado com valor da barra de pesquisa de cards.
  // ... ... ... ...
  // Quem usa:
  // <SearchResult/>
  const [search, setSearch] = useState("");
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Header></Header>
      <Container fluid>
        <Search onChange={handleChangeSearch}></Search>
        <SearchResult search={search}></SearchResult>
        <CreateCard></CreateCard>
        <DeleteCard></DeleteCard>
      </Container>
    </>
  );
};

export default App;
