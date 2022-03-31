import { Container, Content, ButtonContainer, CardContainer } from './styles';

import { CardList } from '../CardList';

interface MaindProps {
  onOpenNewCardModal:()=>void;
}

export function MainContent({onOpenNewCardModal} : MaindProps) {



  return (
    <Container>
      <Content>
        <ButtonContainer>
          <h1>Resultado da busca</h1>
          <button type="button" onClick={onOpenNewCardModal}>Novo Card</button>

        </ButtonContainer>
        <CardList />
      </Content>

    </Container>

  );
}
