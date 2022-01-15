import React, { useState } from "react";

import Header from "./Header";
import Search from "./Search";
import SearchResult from "./SearchResult";
import CreateCard from "./CreateCard";
import DeleteCard from "./DeleteCard";
import ACard from "./ACard";

import Container from "react-bootstrap/Container";

const App = () => {
  // *State "lifted up" de: <Search/>
  // *O que faz: É o estado com valor da barra de pesquisa de cards.
  // *Quem usa: <SearchResult/>
  const [search, setSearch] = useState("");
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  //State "lifted up de": <CreateCard/>
  // O que faz: controla a visibilidade do próprio
  const [showCreateCard, setShowCreateCard] = useState(false);

  //State "lifted up de": <DeleteCard/>
  // O que faz: controla a visibilidade do próprio
  const [showDeleteCard, setShowDeleteCard] = useState(false);

  return (
    <>
      <Header></Header>
      <Container fluid>
        <Search onChange={handleChangeSearch}></Search>
        <SearchResult
          search={search}
          setShowCreateCard={setShowCreateCard}
          setShowDeleteCard={setShowDeleteCard}
        ></SearchResult>
        <CreateCard
          show={showCreateCard}
          setShow={setShowCreateCard}
        ></CreateCard>
        <DeleteCard
          show={showDeleteCard}
          setShow={setShowDeleteCard}
        ></DeleteCard>
      </Container>
    </>
  );
};

export default App;
