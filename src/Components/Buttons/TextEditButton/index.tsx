import React from "react";
import { IconButton } from "@mui/material";
import "./styles.scss";
import editIcon from "../../../Assets/icon-edit.png";

interface ITextDeleteButton {
  setIsModalOpen: Function;
}

const TextEditButton = (props: ITextDeleteButton) => {
  return (
    <IconButton
      onClick={() => props.setIsModalOpen(true)}
      className="deleteButton"
      aria-label="delete"
      size="small"
    >
      <img src={editIcon} alt="icon" />
      <h5>Editar</h5>
    </IconButton>
  );
};

export default TextEditButton;
