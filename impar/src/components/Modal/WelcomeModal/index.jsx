import React from "react";
import "../keyframes.css";
import { useState } from "react";
import {
  WelcomeModalContainer,
  Overlay,
  Modal,
  Text,
  LogoContainer,
} from "./styles";

import imparBabyLogo from "../../../assets/impar-baby-logo.png";

const WelcomeModal = () => {
  const [welcome, setWelcome] = useState(true);

  const toggleWelcome = () => {
    setWelcome(!welcome);
  };

  return (
    <>
      {welcome && (
        <WelcomeModalContainer onClick={toggleWelcome}>
          <Overlay></Overlay>
          <Modal className="modal-content">
            <Text>Bem Vindo ao Site da</Text>
            <LogoContainer src={imparBabyLogo} />
          </Modal>
        </WelcomeModalContainer>
      )}
    </>
  );
};

export default WelcomeModal;
