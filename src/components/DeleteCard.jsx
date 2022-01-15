import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const DeleteCard = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="d-flex justify-content-end delete-card-modal"
        contentClassName="modal-content-delete-card"
      >
        <Modal.Body>
          <div className="text-center mb-3">
            <img
              src={require("../../src/assets/img-circle-bin.png")}
              draggable={false}
              style={{ width: "120px" }}
              className="circle-mask"
            />
          </div>

          <p className="h4 text-danger text-center">Excluir</p>
          <p className="fs-7 text-center">Certeza que deseja excluir?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger px-5">Excluir</Button>
          <Button variant="outline-danger px-5">Cancelar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteCard;
