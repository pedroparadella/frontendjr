import React, { useEffect } from "react";
import { Box, Modal } from "@mui/material";
import "./styles.scss";
import deleteIcon from "../../Assets/icon-trash.svg";
import FilledButton from "../Buttons/FilledButton";
import OutlinedButton from "../Buttons/OutlinedButton";

interface IModalComponent {
  isModalOpen: boolean;
  setIsModalOpen: Function;
  setIsModalNotDoneOpen: Function;
}

const ModalComponent = (props: IModalComponent) => {
  const handleClose = () => {
    props.setIsModalOpen(false);
  };

  return (
    <Modal
      open={props.isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ display: "flex" }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          width: 438,
          height: 434,
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="modalContent">
          <div className="logoContent">
            <img className="logo" src={deleteIcon} />
          </div>
          <div className="infosContent">
            <h1>Excluir</h1>
            <h4>CERTEZA QUE DESEJA EXCLUIR?</h4>
            <hr />
          </div>
          <div className="buttons">
            <FilledButton
              setIsModalNotDoneOpen={props.setIsModalNotDoneOpen}
              setIsModalOpen={props.setIsModalOpen}
              width={165}
              color="#DB2525"
            >
              Excluir
            </FilledButton>
            <OutlinedButton
              setIsModalNotDoneOpen={props.setIsModalNotDoneOpen}
              setIsModalOpen={props.setIsModalOpen}
              width={158}
              color="#DB2525"
            >
              Cancelar
            </OutlinedButton>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
