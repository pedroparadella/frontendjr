import styled from "styled-components";
import { motion } from "framer-motion";

export const CriarCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  padding: 32px;

  width: 642px;
  height: 100%;

  background: #ffff;

  position: absolute;
  right: 0;

  input[type="submit"] {
    align-self: end;
    color: #ffffff;
    background: #e76316;
    box-shadow: 0px 3px 6px #92207242;

    font-size: 18px;
    font-weight: 700;

    border: none;
    border-radius: 8px;

    cursor: pointer;

    padding: 12px 40px;

    transition: all 0.3s ease;
    :hover {
      opacity: 0.9;
    }
    :active {
      transform: scale(0.9);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 10px;

  h1 {
    font-size: 32px;
    font-weight: 800;
    color: #5f1478;
  }

  img {
    height: 46px;
  }
`;

export const Divider = styled.div`
  width: 98%;
  border-top: 1px solid #d4d4d4;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;

  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;

  padding: 50px 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;

  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    font-weight: 700;
    color: #454545;
  }

  input {
    width: 573px;
    height: 60px;
    border-radius: 8px;

    padding: 0 25px;

    outline: none;
    border: 1px solid #b9b9b9;
    font-weight: 500;

    ::placeholder {
      font-size: 14px;
      font-weight: 300;
      color: #757575;
    }
  }

  input[type="file"] {
    position: relative;
    padding-top: 20px;

    font-size: 14px;
    font-weight: 300;
    color: #757575;

    ::file-selector-button,
    ::-webkit-file-upload-button {
      font-size: 18px;
      font-weight: 700;

      cursor: pointer;

      position: absolute;
      margin-top: 6px;
      right: 0;
      top: 0;

      color: #e76316;

      border: 1px solid #e76316;
      border-radius: 8px;

      padding: 12px 40px;

      background: none;

      transition: all 0.3s ease;
      :hover {
        opacity: 0.8;
      }
      :active {
        transform: scale(0.9);
      }
    }
  }
`;

export const ErrorMessage = styled(motion.h2)`
  position: absolute;
  bottom: 102px;
  font-size: 14px;
  font-weight: 500;

  transform: translate(-100px, -100px);

  color: #e76316;
`;
