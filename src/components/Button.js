import React from "react";
import styled from "styled-components/macro";

const Button = styled.button`
  width: ${(props) => props.widthButton || "auto"};
  height: ${(props) => props.heightButton || "3rem"};
  padding: ${(props) => props.paddingButton || ".75rem 2.5rem"};
  color: ${(props) => props.colorButton || "var(--color_white)"};
  background: ${(props) => props.backgroundButton || "var(--color_orange)"};
  border: none;
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: 0 0.1875rem 0.375rem #92207242;
  outline: none;
  border-radius: 0.5rem;
`;

const Home = (props) => {
  return (
    <Button
      type="button"
      onClick={props.funcAction}
      widthButton={props.widthButton}
      heightButton={props.heightButton}
      colorButton={props.colorButton}
      backgroundButton={props.backgroundButton}
    >
      {props.children}
    </Button>
  );
};

export default Home;
