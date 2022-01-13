import styled from "styled-components";
import { motion } from "framer-motion";

export const ExcluirContainer = styled.div`
  margin: auto;
  position: relative;

  padding: 50px 0 33px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 430px;
  height: 430px;

  background: #ffffff;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #db2525;

    text-align: center;

    margin-bottom: 13px;
  }
  p {
    font-size: 12px;
    font-weight: 700;
    color: #454545;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 159px;
  height: 159px;

  background: #db25250f;
  border: 6px solid #e4e4e4;

  border-radius: 50%;

  img {
    width: 68px;
  }
`;
export const Bottom = styled.div`
  display: flex;
  gap: 17px;
  border-top: 1px solid #e4e4e4;
  padding-top: 20px;

  button {
    padding: 13px 54px;
    cursor: pointer;
    border: none;
    border-radius: 8px;

    font-size: 18px;
    font-weight: 700;

    :first-of-type {
      color: #ffff;
      background: #db2525;
      box-shadow: 0px 3px 6px #92207242;
    }

    :last-of-type {
      color: #db2525;
      border: 1px solid #db2525;
      background: transparent;
      box-shadow: 0px 3px 6px #92207242;
    }

    transition: all 0.3s ease;
    :hover {
      opacity: 0.7;
    }
    :active {
      transform: scale(0.9);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  right: 0;

  transform: translate(10px, -10px);

  font-size: 20px;
  font-weight: 700;

  cursor: pointer;

  border: none;

  width: 34px;
  height: 34px;

  background: #e76316;
  box-shadow: 0px 3px 6px #e7631636;

  border-radius: 50%;

  img {
    width: 15px;
  }

  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  :active {
    transform: translate(10px, -10px) scale(0.9);
  }
`;

export const ErrorMessage = styled(motion.h2)`
  position: absolute;

  font-size: 14px;
  font-weight: 500;

  bottom: 0;

  transform: translate(0px, 10px);

  color: #e76316;
`;
