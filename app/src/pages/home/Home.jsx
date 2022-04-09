import React, { useEffect, useState } from 'react';
import logo from '../../icons/logo-teste.svg';
import search_icon from '../../icons/lupa.png';
import Card from '../../components/card/Card';
import DeleteCard from '../../components/deleteCard/deleteCard';
import NewCard from '../../components/newCard/newCard';

import { 
    CardList,
    ContentHeader,
    ContentSection,
    ErrorMessage,
    Footer,
    Header, 
    LoadingContent, 
    Logo,
    NewCardButton,
    NextPageButton,
    PreviousPageButton,
    SearchBar,
    SearchBarBg,
    SearchBarBox,
    SearchIcon,
    Text,
    Wrapper,
} from './style';
import axios from 'axios';
import LoadingAnimation from '../../components/loadingAnimation/loadingAnimation';




const Home = props => {
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showNewCard, setShowNewCard] = useState(false);
  const [showDeleteCard, setShowDeleteCard] = useState(false);

  
  const [pokeList, setPokeList] = useState(null);
  const [pageCount, setPageCount] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextAndPreviousPage, setNextAndPreviousPage] = useState({ next: null, previous: null});

  

    const onChange = e => {
      const {value} = e.target;
      setValue(value);
      if(value === '') getPokemonsList();
    }

    const handleKeyDown = (e) => {
      if(e.key === 'Enter' && value !== "") {
          getPokemon();
      } 
    }

    const getPokemonsList = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${pageCount}`);
        const {next, previous, results} = response.data;
        setNextAndPreviousPage({next, previous});
        const pokemonPromises = results.map( e => axios.get(e.url));
        const result = await Promise.all(pokemonPromises);
        const newPokeList = result.map( e => e.data);
        setPokeList(newPokeList);
        setFilteredData(newPokeList);
        setIsLoading(false);
      } catch(e) {
        setIsLoading(false);
        setError(true);
      }
    }

    const getPokemon = async () => {
      try {
        if(value !== '') {
          setIsLoading(true);
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value.toLocaleLowerCase()}`);
          let newPokeList = [];
          newPokeList.push(response.data);
          setPokeList(newPokeList);
          setFilteredData(newPokeList);
          setIsLoading(false);
        } 
      } catch(e) {
        setIsLoading(false);
        if(e.response.status === 404) {
          setFilteredData([]);
        } else {
          setError(true);
        }
      }
    }


    const nextPage = () => {
      setPageCount(nextAndPreviousPage.next);
    };

    const previousPage = () => {
      setPageCount(nextAndPreviousPage.previous);
    }

    const handleDeleteCardVisibility = () => {
      setShowDeleteCard(!showDeleteCard);
    }
  
    const handleNewCardVisibility = () => {
      setShowNewCard(!showNewCard);
    }

    const handleEdit = () => {
      alert('Ainda não implementado');
    }
    

    useEffect( () => {
      getPokemonsList();
      setValue('');
    },[pageCount])


    return (
        <Wrapper>
            <Header>
                <Logo src={logo} alt='logo'/>
            </Header>
            <SearchBarBg>
                <SearchBarBox>
                    <SearchBar
                        placeholder='Digite aqui sua busca...'
                        maxLength={100}
                        value={value}
                        onChange={onChange}
                        onKeyDown={handleKeyDown}
                    />
                    <SearchIcon onClick={getPokemon}><img src={search_icon}/></SearchIcon>
                </SearchBarBox>
            </SearchBarBg>
            <ContentSection>
                <ContentHeader>
                    <Text>Resultado de busca</Text>
                    <NewCardButton onClick={handleNewCardVisibility}>Novo Card</NewCardButton>
                </ContentHeader>
                { !isLoading ? 
                  <CardList> 
                    { error ?  
                      <LoadingContent>
                        <ErrorMessage>Servidor indisponível.</ErrorMessage>
                      </LoadingContent> 
                      : 
                      filteredData.length > 0 ? filteredData.map( (e, i) => {
                        return <Card 
                                  handleDeleteVisibility={handleDeleteCardVisibility}
                                  key={i} 
                                  data={e}
                                  handleEdit={handleEdit}
                                  />
                                })
                        :
                        <h3>Nenhum resultado encontrado</h3>
                      }
                  </CardList> 
                  :
                  <LoadingContent>
                    <LoadingAnimation/>
                  </LoadingContent>
                }                
            {filteredData.length > 1 ?
            <Footer>
                <PreviousPageButton disabled={!nextAndPreviousPage.previous} onClick={previousPage}>Anterior</PreviousPageButton>
                <NextPageButton onClick={nextPage}>Próxima</NextPageButton>
            </Footer>
            :
            <></>
            }
            </ContentSection>
            {showNewCard && <NewCard handleVisibility={handleNewCardVisibility}/>}
            {showDeleteCard && <DeleteCard  handleClose={handleDeleteCardVisibility}/>}
        </Wrapper>
    )
}

export default Home;
