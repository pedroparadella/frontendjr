import React from "react";
import { Button } from "@mui/material";
import "./styles.scss";

interface IFilledButton {
  color: string;
  children: React.ReactNode;
  width?: number;
  setIsModalOpen: Function;
  setIsModalNotDoneOpen: Function;
}

const FilledButton = (props: IFilledButton) => {
  return (
    <div className="FilledButton">
      <Button
        style={{ backgroundColor: props.color, width: props.width }}
        className="Button"
        variant="contained"
        onClick={() => {
          props.setIsModalOpen(false);
          props.setIsModalNotDoneOpen(true);
        }}
      >
        {props.children}
      </Button>
    </div>
  );
};

export default FilledButton;
