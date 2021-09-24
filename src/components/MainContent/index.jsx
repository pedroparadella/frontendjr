import React, {useState } from 'react'
import swal from 'sweetalert';
import {
  Content,
  TopContent,
  ContentCards,
  GeneralContent,
  ContentGeralCard,
  Cards,
  TopCards,
  CardsNew,
  ImageCard,
  TextCard,
  ButtonsCard,
} from "./styles";


import Icon from "../../images/icone.svg";
import Trash from "../../images/Icon-trash.svg";
import Edit from "../../images/Icon-edit.svg";

const data = require('../../data/data.json')

const ConteudoPrincipal = () => {
  const [cards, setCards] = useState(data);
  const [cardSearch, setCardSearch] = useState(null)

  const searchCard = (cardTitle) => {
    const card = data.find(elm => elm.title.toLowerCase() === cardTitle.toLowerCase())

    if (card && !card.length) {
      setCardSearch(card)
      setCards(null)
    } else{
      swal("Atenção", "Card não encontrado", "error")
    }
  }

  const handleInput = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value.length > 2) {
        searchCard(event.target.value)
      } else {
        swal("Preencha com no minimo 2 caracteres")
      }
    }
  }

  const clearSearch = (event) => {
    setCards(data)
    setCardSearch('')
    document.getElementById('input-search').value = ''
  }

  const handleClick = () =>{
    swal("Atenção", "Funcionalidade não implementada", "error");
  }

  return (

    <Content>
          <TopContent>
            <GeneralContent>
              <div style={{ width: "100%"}}>
                <input
                  className="search"
                  type="text"
                  name="input-search"
                  id="input-search"
                  placeholder="Digite aqui sua busca.."
                  style={{
                    paddingRight: "20px",
                    paddingLeft: "20px",
                    borderRadius: "30px"
                  }}
                  onKeyPress={handleInput}
                />
               
              </div>
            </GeneralContent>
          </TopContent>

          {cards ? (
            <>
              <ContentCards>
                <ContentGeralCard>
                  <TopCards>
                    <h1>Cards cadastrados</h1>
                    <button onClick={handleClick}>Novo card</button>
                  </TopCards>

                  <Cards>
                    {cards.map(card => {
                      return (
                        <>
                          <CardsNew>
                            <ImageCard>
                              <img src={card.image ? card.image : Icon } alt="" />
                            </ImageCard>
                            <TextCard>
                              <h3>{card.title}</h3>
                            </TextCard>
                            <ButtonsCard>
                              <button onClick={handleClick} className="button-edit">
                                {" "}
                                <img src={Trash} alt="" /> Excluir
                              </button>
                              <button onClick={handleClick} className="button-delete">
                                {" "}
                                <img src={Edit} alt="" /> Editar
                              </button>
                            </ButtonsCard>
                          </CardsNew>
                        </>
                      )
                    })}
                  </Cards>
                </ContentGeralCard>
              </ContentCards>
            </>
          ) : null }

          {cardSearch ? (
            <>
              <ContentCards>
                <ContentGeralCard>
                  <TopCards>
                    <h1>Resultado de Busca</h1>
                    <button onClick={clearSearch}>Limpar pesquisa</button>
                  </TopCards>

                  <Cards>
                    <CardsNew>
                      <ImageCard>
                      <img src={cardSearch.image ? cardSearch.image : Icon } alt="" />
                      </ImageCard>
                      <TextCard>
                        <h3>{cardSearch.title}</h3>
                      </TextCard>
                      <ButtonsCard>
                        <button className="button-edit" onClick={handleClick} >
                          {" "}
                          <img src={Trash} alt="" /> Excluir
                        </button>
                        <button className="button-delete" onClick={handleClick}>
                          {" "}
                          <img src={Edit} alt="" /> Editar
                        </button>
                      </ButtonsCard>
                    </CardsNew>
                  </Cards>
                </ContentGeralCard>
              </ContentCards>
            </>
          ): null}
        </Content>
  
  )
}

export default ConteudoPrincipal