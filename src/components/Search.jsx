import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Search = ({ onChange }) => {
  return (
    <Row className="justify-content-center align-content-end vh-25 bg-image-bg-search pb-4">
      <Col md={9}>
        <div className="input-group">
          <input
            type="text"
            className="form-control py-3 px-4 fs-5 fw-light input-mag-glass"
            aria-label="Text input with dropdown button"
            placeholder="Digite aqui sua busca..."
            onChange={onChange}
          />
        </div>
      </Col>
    </Row>
  );
};

export default Search;
