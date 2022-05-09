import React from "react";
import "./styles.scss";
import img from "../../Assets/icone.png";
import TextDeleteButton from "../Buttons/TextDeleteButton";
import TextEditButton from "../Buttons/TextEditButton";

interface ICard {
  title: string;
  setIsModalOpen: Function;
  setIsModalNotDoneOpen: Function;
}

const Card = (props: ICard) => {
  return (
    <div className="Card">
      <div className="iconDiv">
        <img className="icon" src={img} alt="icone" />
      </div>
      <hr />
      <h4>{props.title}</h4>
      <div className="buttonContent">
        <TextDeleteButton setIsModalOpen={props.setIsModalOpen} />
        <hr />
        <TextEditButton setIsModalOpen={props.setIsModalNotDoneOpen} />
      </div>
    </div>
  );
};

export default Card;
