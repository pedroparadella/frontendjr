
import { Container, OutsideClick } from './styles'

import CriarCard from './components/CriarCard'
import Excluir from './components/Excluir'


interface ModalProps {
  active: boolean;
  setActive: any;
  type: string;
}

export default function Modal({ active, setActive, type }: ModalProps) {


  //MODAL CRIAR CARD
  if (type === 'criar-card-modal' && active) {
    return (

      <Container
        key={type}

        transition={{ duration: 0.25 }}
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        exit={{ x: 2000 }}

        modalSelector={type}
      >
        <OutsideClick onOutsideClick={() => setActive(false)}>
          <CriarCard />
        </OutsideClick>
      </Container>

    )
  }

  //MODAL EXCLUIR CARD
  if (type === 'excluir-card-modal' && active) {
    return (
      <Container modalSelector={type}>
        <OutsideClick onOutsideClick={() => setActive(false)}>
          <Excluir setActive={setActive} />
        </OutsideClick>
      </Container>
    )
  }



  return null
}