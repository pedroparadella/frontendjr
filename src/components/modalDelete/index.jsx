import { useState } from "react";
import { Modal, Title, Description, ButtonClose, BoxButtons } from "./style";
import { Overlay } from "../modalCreate/style";
import Button from "../button";

import deleteIcon from "../../assets/icon-trash@2x.png";
import checkIcon from "../../assets/check-icon.png";

import { deleteCourse } from "../../services/api";

export default function ModalDelete({ setIsModalDelete, cardSelected }) {
  const [success, setSuccess] = useState(false);

  const deleteCard = async () => {
    try {
      const res = await deleteCourse("course", cardSelected.id);
      setSuccess(true);
    } catch (err) {
      console.log("err", err);
    }
  };

  const renderSuccess = () => (
    <>
      <Title>Deletado com sucesso</Title>
      <Button
        buttonBackground={"#DB2525"}
        handleClick={() => setIsModalDelete(false)}
      >
        Fechar
      </Button>
    </>
  );

  return (
    <Overlay>
      <Modal>
        <ButtonClose onClick={() => setIsModalDelete(false)}>x</ButtonClose>
        <span>
          <img src={success ? checkIcon : deleteIcon} alt="deletar card" />
        </span>
        {success ? (
          renderSuccess()
        ) : (
          <>
            <Title>Excluir</Title>
            <Description>
              certeza que deseja excluir o curso{" "}
              <strong>{cardSelected.title}</strong>?
            </Description>
            <BoxButtons>
              <Button
                buttonBackground={"#DB2525"}
                handleClick={() => deleteCard()}
              >
                Excluir
              </Button>
              <Button
                buttonBackground={"#FFF"}
                buttonBorder={"1px solid #DB2525"}
                buttonColor={"#DB2525"}
                buttonMarginDesk="0 0 0 17px"
                handleClick={() => setIsModalDelete(false)}
              >
                Cancelar
              </Button>
            </BoxButtons>
          </>
        )}
      </Modal>
    </Overlay>
  );
}
