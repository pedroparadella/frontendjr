import { ButtonContainer } from "./styles";

function Button(props) {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
}

export default Button;
