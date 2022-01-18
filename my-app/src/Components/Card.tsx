import styled from "styled-components";
import Hand from "../Assets/icone.svg";
import Trash from "../Assets/trash.svg";
import Edit from "../Assets/edit.svg";
import { itemProps } from "../types/item";

type CardProps = {
  item: itemProps;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #e5e5e5;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  opacity: 1;

  .content {
    margin: 0 24px;
    border-top: 1px solid #ccc;
    padding-top: 12px;
    text-align: center;
  }
`;

const Action = styled.div`
  width: 100%;
  display: flex;
  box-shadow: inset 0px 3px 6px #0000000f;

  .action__btn {
    width: 50%;
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 12px 0;
    cursor: pointer;
  }

  .action__btn:first-child {
    border-right: 1px solid #ccc;
  }
`;

const Icon = styled.div`
  margin-top: 32px;
  background: #f6f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #e4e4e4;
  padding: 16px;
  width: max-content;
  aspect-ratio: 1;
  border-radius: 50%;
`;

const Card = ({ item }: CardProps) => {
  const handleClick = () => {
    window.alert("Funcionalidade não implementada");
  };

  return (
    <Wrapper>
      <Icon>
        <img src={Hand} alt="ícone" />
      </Icon>
      <p className="content">{item.name}</p>
      <Action>
        <div onClick={handleClick} className="action__btn">
          <img src={Trash} alt="ícone" />
          Excluir
        </div>
        <div onClick={handleClick} className="action__btn">
          <img src={Edit} alt="ícone" />
          Editar
        </div>
      </Action>
    </Wrapper>
  );
};

export default Card;
