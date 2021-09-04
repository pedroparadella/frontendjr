import React from "react";
import styled from "styled-components/macro";

// Assets
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import backgroundSearch from "../assets/image/background-search.png";

// Components
import Button from "../components/Button";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color_gray);
`;

const Header = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0.8125rem 1.5rem;
  background: transparent
    linear-gradient(272deg, var(--color_pink) 0%, var(--color_purple) 100%)
    no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
`;

const Logo = styled.img`
  width: 12rem;
`;

const ContainerSearch = styled.div`
  width: 100%;
  height: 12.3125rem;
  display: flex;
  justify-content: center;
  background: url(${backgroundSearch}) no-repeat padding-box;
  background-size: cover;
  background-position: center center;
`;

const SearchLabel = styled.label`
  width: 65.375rem;
  height: 4.6875rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 5.1875rem;
`;

const Search = styled.input`
  width: 100%;
  padding: 1.75rem 4.4375rem 1.75rem 1.4375rem;
  border: none;
  font-size: 1.5rem;
  border-radius: 0.5rem;
`;

const ButtonSearch = styled.button`
  width: 3.125rem;
  height: 3.125rem;
  position: absolute;
  right: 1.5625rem;
  border: none;
  background: none;
`;

const ContainerCards = styled.div`
  padding: 2rem 0 11.6875rem 0;
`;

const HeaderCards = styled.div`
  width: 65.375rem;
  display: flex;
  justify-content: space-between;
`;

const TitleCards = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: var(--color_purple);
`;

const Home = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo do site" />
      </Header>
      <ContainerSearch>
        <SearchLabel>
          <Search placeholder="Digite aqui sua busca..." />
          <ButtonSearch>
            <img src={search} alt="Lupa de busca" />
          </ButtonSearch>
        </SearchLabel>
      </ContainerSearch>
      <ContainerCards>
        <HeaderCards>
          <TitleCards>Resultado da busca</TitleCards>
          <Button funcAction={() => null}>Novo Card</Button>
        </HeaderCards>
      </ContainerCards>
    </Container>
  );
};

export default Home;
