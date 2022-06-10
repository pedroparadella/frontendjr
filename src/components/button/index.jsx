import { ButtonBox } from "./style";

export default function Button({
  children,
  buttonBackground,
  buttonBorder,
  buttonColor,
  handleClick,
  buttonMarginDesk,
  buttonMarginMobile,
}) {
  return (
    <>
      <ButtonBox
        buttonBackground={buttonBackground}
        buttonBorder={buttonBorder}
        buttonColor={buttonColor}
        onClick={handleClick}
        buttonMarginDesk={buttonMarginDesk}
        buttonMarginMobile={buttonMarginMobile}
      >
        {children}
      </ButtonBox>
    </>
  );
}

Button.defaultProps = {
  buttonBackground: "#E76316",
  buttonBorder: "none",
  buttonColor: "#FFF",
  buttonMarginDesk: 0,
  buttonMarginMobile: 0,
};
