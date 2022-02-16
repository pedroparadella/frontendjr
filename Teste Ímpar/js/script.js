function inicialModal(modalID) {
  const modal = document.getElementById(modalID);
  if (modal) {
    modal.classList.add("mostrar");
    modal.addEventListener("click", (e) => {
      if (e.target.id == modalID || e.target.className == "modal-btn") {
        modal.classList.remove("mostrar");
      }
    });
  }
}

const ButtonExcluir = document.getElementsByTagName("button");

const ArrayButtonExcluir = Array.from(ButtonExcluir);

ArrayButtonExcluir.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.className == "botao-excluir" || "botao-card") {
      inicialModal("modal-excluir");
    } else if (e.target.className == "botao-editar" || "botao-card") {
      inicialModal("modal-editar");
    }
  });
});
