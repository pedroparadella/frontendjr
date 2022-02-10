import Card from "../../ui/card/Card";
import { ListElement, ListElementActions } from "./styles";
import pokeball from "../../../assets/pokeball.svg";
import Button from "../../ui/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function ListItem(props) {
  const types = props.types;
  const formatedTypes = types.join(", ");
  const [mainType] = formatedTypes.split(",")

  function openModal(e) {
    props.onHandleModal({
      value: e.target.value,
      show: true,
      itemToDelete: e.target.dataset.index,
    });
  }

  return (
    <Card margin="1rem 0" bgColor={mainType}>
      <ListElement image={pokeball}>
        <img src={props.image} alt="Pokemon" />
        <div>
          <p>Index: {props.index}</p>
          <p>Name: {props.name} </p>
          <p>Type: {formatedTypes}</p>
        </div>
      </ListElement>
      <ListElementActions>
        <Button
          value="delete"
          custom={true}
          border="none"
          data-index={props.index}
          onClick={openModal}
        >
          <span>
            <FontAwesomeIcon icon={faTrashAlt} color="red" />
          </span>
          Excluir
        </Button>
        <Button value="create" custom={true} border="none" onClick={openModal}>
          <span>
            <FontAwesomeIcon icon={faPencilAlt} color="red" />
          </span>
          Editar
        </Button>
      </ListElementActions>
    </Card>
  );
}

export default ListItem;
