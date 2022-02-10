import { CardContainer} from "./styles";

function Card(props) {
  
  return <CardContainer {...props} >{props.children}</CardContainer>;
}

export default Card;
