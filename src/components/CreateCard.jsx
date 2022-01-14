import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import ModalDialog from "react-bootstrap/ModalDialog";

const CreateCard = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="create-card-modal d-flex justify-content-end"
      >
        <Modal.Header>
          <Modal.Title className="text-primary">Criar card</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label for="ipt-card-title" class="form-label fw-bold fs-7">
            DIGITE UM NOME PARA O CARD
          </label>
          <input
            type="text"
            class="form-control"
            id="ipt-card-title"
            placeholder="Digite o título"
          />

          <label for="ipt-card-img" class="form-label fw-bold fs-7 mt-5">
            INCLUA UMA IMAGEM PAR APARECER NO CARD
          </label>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              id="ipt-card-img"
              placeholder="Nenhum arquivo selecionado"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
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
