import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import ACard from "./ACard";

const SearchResult = () => {
  return (
    <>
      <Row className="justify-content-center py-4 bg-light-gray">
        <Col md={9}>
          <Row>
            <Col className="fs-3 text-primary">Resultado de busca</Col>
            <Col className="d-flex justify-content-end">
              <Button className="px-4 btn-secondary text-white">
                Novo Card
              </Button>
            </Col>
          </Row>
          <Row className="py-3">
            <ACard />
            <ACard />
            <ACard />
            <ACard />
            <ACard />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SearchResult;
