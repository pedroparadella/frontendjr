import React, { useState } from "react";

import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";

import ACard from "./ACard";

const SearchResult = ({ search, setShowCreateCard, setShowDeleteCard }) => {
  // Como funciona:
  // Realiza uma pesquisa nos objetos do "card-list.json"
  // Usando como parâmetro o valor de 'search' passado pelo <App/>
  // A pesquisa retorna os valores que CONTÉM o valor de 'search'
  const [cardList, setCardList] = useState(() => require("../card-list.json"));

  let searchList = cardList.filter((cardList) =>
    cardList.text.includes(search)
  );

  return (
    <>
      <Row className="justify-content-center py-4 bg-light-gray">
        <Col md={9}>
          <Row>
            <Col className="fs-3 text-primary">Resultado de busca</Col>
            <Col className="d-flex justify-content-end">
              <Button
                className="px-4 btn-secondary text-white"
                onClick={() => setShowCreateCard(true)}
              >
                Novo Card
              </Button>
            </Col>
          </Row>
          <Row className="py-3">
            {searchList.map((e) => (
              <ACard
                key={e.id.toString()}
                text={e.text}
                imgPath={e.imgPath}
                setShowDeleteCard={setShowDeleteCard}
              />
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SearchResult;
