import styled from "styled-components";

export const Box = styled.div`
  border: 1px solid #e4e4e4;
  width: 250px;
  border-radius: 8px;
  padding-top: 4rem;
  text-align: center;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .steel {
    background-color: rgb(184, 184, 208);
  }

  .fire {
    background-color: rgb(240, 128, 48);
  }

  .grass {
    background-color: rgb(45, 205, 69);
  }

  .electric {
    background-color: rgb(248, 208, 48);
  }

  .water {
    background-color: rgb(20, 158, 255);
  }
  .ice {
    background-color: rgb(152, 216, 216);
  }

  .ground {
    background-color: rgb(224, 192, 104);
  }

  .rock {
    background-color: rgb(184, 160, 56);
  }

  .poison {
    background-color: rgb(136, 54, 136);
  }

  .bug {
    background-color: rgb(168, 184, 32);
  }

  .dragon {
    background-color: rgb(112, 10, 238);
  }

  .psychic {
    background-color: rgb(255, 105, 150);
  }

  .flying {
    background-color: rgb(168, 144, 240);
  }

  .fighting {
    background-color: rgb(148, 53, 45);
  }

  .normal {
    background-color: rgb(168, 168, 120);
  }
`;

export const Name = styled.p`
  max-width: 65%;
  margin: 0 auto;
  padding: 10px 0 10px 0;
  border-top: 1px solid #0000000f;
  font: normal normal normal 16px/20px Muli;
  text-transform: capitalize;
`;

export const Img = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  background-color: #f6f4f6;
  border-radius: 50%;
  border: 1px solid #e4e4e4;
`;

export const FooterBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  box-shadow: inset 0px 3px 6px #0000000f;
  font: normal normal normal 15px/19px Muli;
  div {
    display: flex;
  }
  div:first-child {
    padding-right: 25px;
    border-right: 1px solid #f6f4f6;
  }
  div button {
    padding-left: 8px;
    border: 0;
    background-color: #fff;
  }
  div :hover {
    color: #e76316;
    transition: all 0.3s;
  }
  div:first-child :hover {
    color: #db2525;
    transition: all 0.3s;
  }
`;

export const Type = styled.p`
  align-self: center;
  padding: 10px 0 20px 0;
`;
