import { useState } from 'react'

import {
  ExcluirContainer,
  ImageContainer,
  Bottom,
  CloseButton,
  ErrorMessage
} from './styles'

import IconExcluir from '../../../../assets/icon-trash.svg'
import IconFechar from '../../../../assets/icon-close.svg'

export default function Excluir(props: any) {
  const [showError, setShowError] = useState(false)

  return (

    <ExcluirContainer>
      <CloseButton onClick={() => props.setActive(false)}>
        <img src={IconFechar} alt="Fechar Modal" />
      </CloseButton>

      <ImageContainer>
        <img src={IconExcluir} alt="Lixeira" />
      </ImageContainer>

      <div>
        <h1>EXCLUIR</h1>

        <p>CERTEZA QUE DESEJA EXCLUIR?</p>
      </div>

      <Bottom>
        <button onClick={() => setShowError(true)}>Excluir</button>

        <button onClick={() => props.setActive(false)}>Cancelar</button>
      </Bottom>

      {showError ? <ErrorMessage initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 7 }} transition={{ duration: 0.25 }}>
        Função ainda não implementada
      </ErrorMessage> : null}

    </ExcluirContainer>
  )
}