
function clicar(){
    alert('Essa funcionalidade ainda não foi implementada.')
}

function pesquisaProduto(){ 
    const input = document.querySelector('#filter').value.toUpperCase()// pegar valor da barra de pesquisa
    const cardcontainer = document.querySelector('#card-lista')// pegar lista de cartoes
    console.log(cardcontainer)
    const cards = cardcontainer.getElementsByClassName('card')//pegar cartoes usando className
    console.log(cards)

    for(let i = 0; i < cards.length; i++){//laço para percorrer todos os cartoes
        let title = cards[i].querySelector(".card-body .card-title")//percorrer todos os titulos dos cartoes
        console.log(title)

        if(title.innerText.toUpperCase().indexOf(input) > -1 ){
            cards[i].style.display = ""
        }else{
            cards[i].style.display = "none" 
        }
    }

}
    







