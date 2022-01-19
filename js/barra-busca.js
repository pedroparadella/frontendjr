document.getElementById('formulario').addEventListener('submit', pesquisarFilme);

function pesquisarFilme (e){
    let filmePesquisa = document.getElementById('pesquisar').value;
    buscarFilmes(filmePesquisa);
    e.preventDefault();
}

function buscarFilmes(filmePesquisa){
    axios.get('http://www.omdbapi.com/?s=' + filmePesquisa + '&apikey=c883e37f')
  .then(function (response) {
    console.log(response);
    let filmes = response.data.Search;
    let mostrarFilmes = "";

    for(let i = 0; i < filmes.length; i++){
        mostrarFilmes += `
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src="${filmes[i].Poster}" class="img-thumbnail">
                    <p>${filmes[i].Title}</p>
                    <p>
                      <button data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="img/Icon-trash.svg">Excluir</button>
                      <button data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="img/Icon-edit.svg">Editar</button>
                    </p>
                </div>
            </div>
        
        `;
    }

    document.getElementById('filmes').innerHTML = mostrarFilmes;

  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
}