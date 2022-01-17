import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";

// . . . Componente DeleteCard . . .
// Como funciona: componente completamente visual
// que é chamado ao clicar no ícone de lixeira. Não tem
// utilidade lógica implementada ainda.

const DeleteCard = ({ show, setShow }) => {
  return (
    <>
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
