import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import React, { useState } from "react";

import { ReactComponent as IconCreateCard } from "../assets/icon-create-card.svg";

const CreateCard = ({ show, setShow }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="d-flex justify-content-end p-0"
        size="xl"
        dialogClassName="modal-dialog-create-card"
        contentClassName="modal-content-create-card"
      >
        <Modal.Header className="d-flex justify-content-start">
          <IconCreateCard />
          <Modal.Title className="text-primary ms-3">Criar card</Modal.Title>
        </Modal.Header>

        <Modal.Body className="py-5 modal-body-create-card">
          <label htmlFor="ipt-card-text" className="form-label fw-bold fs-7 ">
            DIGITE UM NOME PARA O CARD
          </label>
          <div className="input-group input-group-lg border-muted">
            <input
              type="text"
              className="form-control fw-light"
              id="ipt-card-text"
              placeholder="Digite o título"
            />
          </div>

          <label
            htmlFor="ipt-card-img"
            className="form-label fw-bold fs-7 mt-5"
          >
            INCLUA UMA IMAGEM PAR APARECER NO CARD
          </label>
          <div className="input-group input-group-lg border border-muted rounded pe-2">
            <input
              type="text"
              className="form-control border-white fw-light"
              id="ipt-card-img"
              placeholder="Nenhum arquivo selecionado"
            />
            <div className="input-group-append m-auto">
              <button
                className="btn btn-outline-secondary fw-bold px-4"
                type="button"
              >
                Escolher arquivo
              </button>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary px-4 text-white">Criar card</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateCard;
