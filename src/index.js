let originalCardList = [];
const cards = document.querySelectorAll(".card");
const resultadoCards = document.querySelector(".resultado-cards");

(function() {
  const deleteButtons = document.querySelectorAll(".js-card-footer-button-delete");
  const editButtons = document.querySelectorAll(".js-card-footer-button-edit");
  [...deleteButtons].forEach(el => {
    el.onclick = function() {
      alert("Esta função não foi implementada ainda.");
    };
  });

  [...editButtons].forEach(el => {
    el.onclick = function() {
      alert("Esta função não foi implementada ainda.");
    };
  });

  originalCardList = cards;
})();


function searchCards(event) {
  const text = event.target.value;
  const newCards = [...cards].filter(el => {
    const subElement = el.querySelector(".card-body-text span");
    return subElement.textContent.toLowerCase().includes(text.toLowerCase());
  });

  if (text.length === 0) {
    resultadoCards.innerHTML = "";
    originalCardList.forEach((el, i) => {
      resultadoCards.appendChild(el);
    });
  }

  if (newCards.length) {
    resultadoCards.innerHTML = "";
    newCards.forEach((el, i) => {
      resultadoCards.appendChild(el);
    });
  } else {
    alert("Nenhum resultado encontrado");
  }

}

function clickOverlay(event) {
  const el = event.target.parentElement;
  el.classList.add("display-none");
}