import { FormEvent, useState } from 'react';

import { Container, Content, SearchForm } from './styles';
import forgetIcon from '../../assets/lupa.svg'

import { useNewCardContext } from '../../hooks/useNewCard';

export function SearchBox() {
  const [newSearch, setNewSearch] = useState('')
  const { showFilteredCard } = useNewCardContext()

  
  function handleNewSearch(event: FormEvent) {
    event.preventDefault();
    showFilteredCard(newSearch)
    setNewSearch('')
  }

  return (

    <Container>
      <Content>
        <SearchForm onSubmit={handleNewSearch}>
          <img src={forgetIcon} onClick={handleNewSearch} />
          <input value={newSearch}
            onChange={event => setNewSearch(event.target.value)}
            placeholder="Digite aqui sua busca..."></input>
        </SearchForm>
      </Content>
    </Container>

  );
}

