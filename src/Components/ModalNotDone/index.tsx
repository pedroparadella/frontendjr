import React, { useEffect } from "react";
import { Box, Modal } from "@mui/material";
import "./styles.scss";
import deleteIcon from "../../Assets/icon-trash.svg";
import FilledButton from "../Buttons/FilledButton";
import OutlinedButton from "../Buttons/OutlinedButton";

interface IModalNotDone {
  isModalOpen: boolean;
  setIsModalNotDoneOpen: Function;
  setIsModalOpen: Function;
}

const ModalNotDone = (props: IModalNotDone) => {
  const handleClose = () => {
    props.setIsModalNotDoneOpen(false);
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
          width: 238,
          height: 234,
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="modalContent">
          <h1>Função ainda não desenvolvida</h1>
          <h4>Volte mais tarde</h4>

          <OutlinedButton
            color="#db2525"
            setIsModalOpen={props.setIsModalOpen}
            setIsModalNotDoneOpen={props.setIsModalNotDoneOpen}
          >
            Fechar
          </OutlinedButton>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalNotDone;
