import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ReactComponent as IconBin } from "../../src/assets/icon-bin.svg";
import { ReactComponent as IconEdit } from "../../src/assets/icon-edit.svg";

const ACard = ({ text, imgPath }) => {
  //const imgPath = require("../../src/assets/img-place-holder-2.jpg");

  return (
    <Col md={3}>
      <Card className="my-3 shadow rounded d-flex justify-content-center ">
        <div className="align-self-center w-75">
          <Card.Header className="bg-white">
            <img src={imgPath} className="w-100 circle-mask"></img>
          </Card.Header>

          <Card.Body>
            <Card.Text className="text-dark">{text}</Card.Text>
          </Card.Body>
        </div>
        <Card.Footer className="bg-white text-primary">
          <Row>
            <Col>
              <Button variant="light" size="sm" className="text-dark">
                <IconBin className="mx-1" />
                Excluir
              </Button>
            </Col>
            <Col>
              <Button variant="light" size="sm" className="text-dark">
                <IconEdit className="mx-1" />
                Editar
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ACard;
