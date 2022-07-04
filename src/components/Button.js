import React from "react";
import styled from "styled-components/macro";

const Button = styled.button`
  width: ${(props) => props.widthButton || "auto"};
  height: ${(props) => props.heightButton || "3rem"};
  padding: ${(props) => props.paddingButton || ".75rem 2.5rem"};
  color: ${(props) => props.colorButton || "var(--color_white)"};
  background: ${(props) => props.backgroundButton || "var(--color_orange)"};
  border: ${(props) => props.borderButton || "none"};
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: 0 0.1875rem 0.375rem #92207242;
  outline: none;
  border-radius: 0.5rem;
  align-self: ${(props) => props.alignSelfButton};
  position: ${(props) => props.positionButton};
  top: ${(props) => props.topButton};
  right: ${(props) => props.rightButton};
  display: flex;
  justify-content: center;
  align-items: center;

  :disabled {
    opacity: 0.4;
    cursor: initial;
  }
`;

const ButtonComponent = (props) => {
  return (
    <Button
      type="button"
      onClick={props.funcAction}
      widthButton={props.widthButton}
      positionButton={props.positionButton}
      topButton={props.topButton}
      rightButton={props.rightButton}
      paddingButton={props.paddingButton}
      heightButton={props.heightButton}
      colorButton={props.colorButton}
      borderButton={props.borderButton}
      alignSelfButton={props.alignSelfButton}
      backgroundButton={props.backgroundButton}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
};

export default ButtonComponent;
