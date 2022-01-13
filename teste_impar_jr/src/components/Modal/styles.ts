import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
import { motion } from "framer-motion";
interface ContainerProps {
  modalSelector: string;
}
export const Container = styled(motion.div)<ContainerProps>`
  position: fixed;

  display: flex;
  align-items: ${(props) =>
    props.modalSelector === "criar-card-modal" ? "flex-start" : "center"};
  justify-content: center;

  width: 100%;
  height: 100%;

  z-index: 9999;

  overflow: hidden;

  background: #f6f4f6cc;
`;

export const OutsideClick = styled(OutsideClickHandler)``;
