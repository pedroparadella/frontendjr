import { useState } from 'react'

import {
  CriarCardContainer,
  Header,
  Form,
  InputContainer,
  ErrorMessage
} from "./styles"

import IconeCriar from '../../../../assets/icon-criar.svg'

export default function CriarCard() {
  const [showError, setShowError] = useState(false)

  const dontSubmit = (e: any) => {
    e.preventDefault();
    setShowError(true);
  }


  return (
    <CriarCardContainer >
      <Header>
        <img src={IconeCriar} alt="Icone de criação" />
        <h1>Criar card</h1>
      </Header>



      <Form id="form">
        <InputContainer>
          <label htmlFor="nomeDoCard">DIGITE UM NOME PARA O CARD
            <input name="nomeDoCard" placeholder="Digite o título" />
          </label>
        </InputContainer>

        <InputContainer>
          <label htmlFor="ImagemParaUpload">INCLUA UMA IMAGEM PARA APARECER NO CARD
            <input type="file" name="ImagemParaUpload" />
          </label>
        </InputContainer>
      </Form>

      {showError ? <ErrorMessage initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 7 }} transition={{ duration: 0.25 }}>
        Função ainda não implementada
      </ErrorMessage> : null}

      <input type="submit" form="form" value="Criar card" onClick={(e) => dontSubmit(e)} />

    </CriarCardContainer>

  )

}