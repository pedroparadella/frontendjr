import React from "react";

const CardFooter = () => {
  return (
    <div className="cardFooter">
      <button
        onClick={() => alert("Funcionalidade da Lixeira não Implementada!")}
        className="footerButton"
      >
        <img
          className="footerIcon"
          src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/52-512.png"
          alt="lixeira"
        />
        <p id="deleteBtn">Excluir</p>
      </button>
      <button
        className="footerButton"
        onClick={() => alert("Funcionalidade de Editar não Implementada!")}
      >
        <img
          className="footerIcon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Red_pencil.svg/1200px-Red_pencil.svg.png"
          alt="editar"
        />
        <p id="editBtn">Editar</p>
      </button>
    </div>
  );
};

export default CardFooter;
