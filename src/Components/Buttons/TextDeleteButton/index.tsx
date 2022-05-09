import React from "react";
import { IconButton } from "@mui/material";
import "./styles.scss";
import deleteIcon from "../../../Assets/icon-trash.png";

interface ITextDeleteButton {
  setIsModalOpen: Function;
}

const TextDeleteButton = (props: ITextDeleteButton) => {
  return (
    <IconButton
      onClick={() => props.setIsModalOpen(true)}
      className="deleteButton"
      aria-label="delete"
      size="small"
    >
      <img src={deleteIcon} alt="icon" />
      <h5>Excluir</h5>
    </IconButton>
  );
};

export default TextDeleteButton;
