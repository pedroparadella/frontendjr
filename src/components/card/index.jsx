import { CardBox, OptionsBox, Title } from "./style";

import deleteIcon from "../../assets/icon-trash.png";
import editIcon from "../../assets/icon-edit.png";

export default function Card({
  setIsModalDelete,
  setIsEdit,
  coursesData,
  setCardSelected,
  filteredCard,
}) {
  const handleDelete = (item) => {
    setIsModalDelete(true);
    setCardSelected(item);
  };

  const handleEdit = (item) => {
    setIsEdit(true);
    setCardSelected(item);
  };

  const validate = filteredCard?.length ? filteredCard : coursesData;

  return validate?.map((item, index) => (
    <CardBox>
      <span>
        <img src={item.image} alt={item.name} />
      </span>
      <Title>{item.title}</Title>
      <OptionsBox>
        <button onClick={() => handleDelete(item)}>
          <img src={deleteIcon} alt="deletar card" />
          <p>Excluir</p>
        </button>
        <button onClick={() => handleEdit(item)}>
          <img src={editIcon} alt="editar card" />
          <p>Editar</p>
        </button>
      </OptionsBox>
    </CardBox>
  ));
}
