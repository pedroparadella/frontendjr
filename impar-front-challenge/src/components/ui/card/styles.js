import styled from "styled-components";

//Is there a better way to do it ? Research ...
const setBgColor = (props) => {
  if (props.bgColor) {
    if (props.bgColor.includes("grass") || props.bgColor.includes("bug")) {
      return "rgba(48, 180, 69, 0.8)";
    }

    if (props.bgColor.includes("fire")) {
      return "rgba(221, 7, 7, 0.8)";
    }

    if (props.bgColor.includes("water")) {
      return "rgba(34, 40, 228, 0.8)";
    }

    if (
      props.bgColor.includes("normal") ||
      props.bgColor.includes("flying") ||
      props.bgColor.includes("fairy")
    ) {
      return "rgba(29, 176, 171, 0.8)";
    }

    if (props.bgColor.includes("poison")) {
      return "rgba(124, 27, 166, 0.80)";
    }

    if (props.bgColor.includes("electric")) {
      return "rgba(250, 186, 3, 0.8)";
    }

    if (
      props.bgColor.includes("ground") ||
      props.bgColor.includes("fighting") ||
      props.bgColor.includes("rock")
    ) {
      return "rgba(163, 93, 14, 0.8)";
    }

    if (props.bgColor.includes("psychic")) {
      return "rgba(225, 35, 132, 0.63)";
    }

    if (props.bgColor.includes("ghost")) {
      return "rgba(169, 114, 142, 0.63)";
    }
    if (props.bgColor.includes("ice")) {
      return "rgba(112, 113, 235, 0.63)";
    }
    if (props.bgColor.includes("dragon")) {
      return "rgba(228, 102, 8, 0.63)";
    }
  } else {
    return "white";
  }
};


export const CardContainer = styled.div`
  padding: ${(props) => props.padding || null};
  margin: ${(props) => props.margin || null};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: ${setBgColor};
`;
