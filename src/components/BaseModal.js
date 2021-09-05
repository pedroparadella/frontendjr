import React from "react";
import styled from "styled-components/macro";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f4f6cc;
  z-index: 10;
  cursor: pointer;
`;

function BaseModal(props) {
  return <Overlay onClick={props.closeModal}>{props.children}</Overlay>;
}

export default BaseModal;
