import React from "react";
import { Button } from "@mui/material";
import "./styles.scss";

interface IFilledButton {
  color: string;
  width?: number;
  children: React.ReactNode;
  setIsModalOpen: Function;
  setIsModalNotDoneOpen: Function;
}

const OutlinedButton = (props: IFilledButton) => {
  return (
    <div className="OutlinedButton">
      <Button
        style={{
          color: props.color,
          borderColor: props.color,
          width: props.width,
        }}
        className="Button"
        variant="outlined"
        onClick={() => {
          props.setIsModalOpen(false);
          props.setIsModalNotDoneOpen(false);
        }}
      >
        {props.children}
      </Button>
    </div>
  );
};

export default OutlinedButton;
