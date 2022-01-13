import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 234px;
  height: 267px;
  border-radius: 8px;

  box-shadow: 0px 3px 6px #e5e5e5;
  background: #ffffff;

  align-items: center;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 28px;

  width: 95px;
  height: 95px;
  border-radius: 50%;

  background: #f6f4f6;
  border: 1px solid #e4e4e4;

  img {
    width: 92px;
    height: 92px;

    border-radius: 50%;
  }
`;

export const Text = styled.p`
  bottom: 40px;
  width: 191px;
  height: 40px;

  text-align: center;
`;

export const Divider = styled.div`
  width: 60%;
  height: 5px;
  border-top: 1px solid #f0eff0;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 43px;
  box-shadow: inset 0px 3px 6px #0000000f;

  //Divider
  div {
    height: 50%;
    width: 0;
    border-right: 1px solid #f6f4f6;
  }

  button {
    font-size: 15px;
    color: #263238;

    cursor: pointer;
    display: flex;
    height: 29px;
    align-items: center;

    gap: 11px;

    background: none;
    border: none;
    img {
      margin-bottom: 4px;
    }
    transition: all 0.3s ease;

    :first-of-type:hover {
      color: #db2525;
    }
    :last-of-type:hover {
      color: #e76316;
    }

    :active {
      transform: scale(0.9);
      opacity: 0.7;
    }
  }
`;

export const ErrorMessage = styled(motion.h2)`
  position: absolute;
  bottom: 50px;
  font-size: 14px;
  font-weight: 500;
  color: #e76316;
`;
