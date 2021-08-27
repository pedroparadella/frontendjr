import React from "react";

const SectionHeader = () => {
  return (
    <div className="sectionHeader">
      <h2 className="sectionText">Resultado de Busca</h2>
      <button
        className="sectionButton"
        onClick={() => alert("Funcionalidade do Novo Card não Implementada!")}
      >
        Novo Card
      </button>
    </div>
  );
};

export default SectionHeader;
