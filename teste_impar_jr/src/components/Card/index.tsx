import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { Container, ImgContainer, Text, Divider, Bottom, ErrorMessage } from './styles'

import DefaultImg from '../../assets/icon-hand.svg'
import IconTrash from '../../assets/icon-trash.svg'
import IconEdit from '../../assets/icon-edit.svg'
import API from '../../api'

export default function Card(props: any) {
  const [Image, setImage] = useState('')
  const [showError, setShowError] = useState(false)

  if (showError === true) {
    setTimeout(() => setShowError(false), 3000);
  }

  const fetchPokemonData = async () => {
    const res = await API.get(`${props.nome}`)
    setImage(res.data.sprites.other.home.front_default)
  }
  fetchPokemonData();

  return (
    <Container initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 5, opacity: 0 }} >
      <ImgContainer>
        <img src={Image ? Image : DefaultImg} alt='imagem'></img>
      </ImgContainer>
      <Divider />
      <Text>{props.nome.charAt(0).toUpperCase() + props.nome.slice(1)}</Text>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {showError ? <ErrorMessage initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 7 }} transition={{ duration: 0.25 }}>
          Função ainda não implementada
        </ErrorMessage> : null}
      </AnimatePresence>

      <Bottom>
        <button onClick={() => props.setActive(true)}>
          <img src={IconTrash} alt="Icone de exclusão"></img>
          Excluir
        </button>

        <Divider />

        <button onClick={() => setShowError(!showError)}>
          <img src={IconEdit} alt="Icone de Edição"></img>
          Editar
        </button>
      </Bottom>
    </Container>
  )
}