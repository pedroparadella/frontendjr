import styled from "styled-components";

export const ContainerError = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 300px;
    margin: 24px 0;
    animation: shake 1.5s;
  }

  a {
    background-color: #fff;
    color: #132742;
    text-decoration: none;
    padding: 12px 18px;
    border-radius: 4px;
    margin: 14px 0;
    font-weight: bold;
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;
