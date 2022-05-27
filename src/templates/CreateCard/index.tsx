import {
  Container,
  SubContainer,
  CreateCard,
  Header,
  ContainerInput,
} from './style'

import Button  from '../../components/Button'


export default function CreateCards({ onClick }: any) {
  return (
    <Container>
      <div style={{ width: '100%', height: '100%', top: '0' }} onClick={onClick}></div>
      <SubContainer>
        <div>
   
          <Header>
            <img src="/assets/icone_criar.svg" alt="" />
            <p>Criar Card</p>
          </Header>

          <hr style={{opacity:'0.25'}}/>

          <ContainerInput>
            <div>
              <p>DIGITE UM NOME PARA O CARD</p>
              <input type="text" placeholder="Digite um título" />
            </div>

            <div>
              <p style={{marginTop:'30px'}}>INCLUA UMA IMAGEM PARA APARECER NO CARD</p>
              <input type="file" placeholder="Nenhum arquivo selecionado" />
              <Button variant='secondary'>Escolher arquivo</Button>
            </div>
          </ContainerInput>

          <hr style={{marginTop: '30px', opacity:'0.25'}}/>

          <CreateCard>
            <Button onClick={() => alert('Função ainda não implementada!!')}>
              Criar Card
            </Button>
          </CreateCard>
        </div>
      </SubContainer>
    </Container>
  )
}
