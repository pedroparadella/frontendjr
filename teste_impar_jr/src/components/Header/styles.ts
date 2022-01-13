import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 5;

  width: 100%;
  height: 64px;

  padding: 10px;

  background: rgb(95, 20, 120);
  background: linear-gradient(
    45deg,
    rgba(95, 20, 120, 1) 0%,
    rgba(174, 39, 111, 1) 100%
  );

  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  img {
    width: 192px;
  }
`;
