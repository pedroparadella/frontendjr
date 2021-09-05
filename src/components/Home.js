import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

// Assets
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import backgroundSearch from "../assets/image/background-search.png";

// Components
import Button from "../components/Button";
import Card from "../components/Card";
import api from "../Api";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
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
  box-shadow: 0 0.1875rem 0.375rem #00000029;
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
  max-width: 80%;
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
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;

  @media (max-width: 648px) {
    padding: 0.75rem 4.4375rem 0.75rem 1.4375rem;
    font-size: 1rem;
  }
`;

const ButtonSearch = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  position: absolute;
  right: 1.5625rem;

  @media (max-width: 648px) {
    width: 1.5625rem;
  }
`;

const ContainerCards = styled.div`
  padding: 2rem 0 11.6875rem 0;

  @media (max-width: 648px) {
    padding: 2rem 0;
  }
`;

const HeaderCards = styled.div`
  width: 65.375rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.25rem;

  @media (max-width: 648px) {
    width: 90%;
    margin: 0 auto 2.25rem auto;
    align-items: center;
  }
`;

const TitleCards = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: var(--color_purple);

  @media (max-width: 648px) {
    font-size: 1.5rem;
  }
`;

const GroupCards = styled.div`
  display: grid;
  grid-gap: 2.3125rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 648px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const Message = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  grid-column: 2/4;
  grid-row: 3;

  @media (max-width: 648px) {
    grid-column: 1;
  }
`;

const Home = () => {
  const [data, setData] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    api
      .get(`pokemon?limit=16&offset=48`)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setValueSearch("");
    setDataSearch({ search: data.results });
  }, [data?.results?.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    const { value } = e.target;
    setValueSearch(value);

    const search = data.results.filter((item) => {
      return !item.name.toLowerCase().indexOf(value.toLowerCase());
    });

    if (value === "") {
      setDataSearch({ search: data.results });
    } else {
      setDataSearch({ search });
    }
  };

  console.log("data", data);
  console.log("dataSearch", dataSearch);

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo do site" />
      </Header>
      <ContainerSearch>
        <SearchLabel>
          <Search
            value={valueSearch}
            onChange={(value) => handleChange(value)}
            placeholder="Digite aqui sua busca..."
          />
          <ButtonSearch src={search} alt="Lupa de busca" />
        </SearchLabel>
      </ContainerSearch>
      <ContainerCards>
        <HeaderCards>
          <TitleCards>Resultado da busca</TitleCards>
          <Button funcAction={() => null}>Novo Card</Button>
        </HeaderCards>
        <GroupCards>
          {!dataSearch?.search?.length ? (
            <Message>
              <p>Nenhum resultado encontrado.</p>
            </Message>
          ) : (
            dataSearch?.search?.map((item) => <Card dataCard={item} />)
          )}
        </GroupCards>
      </ContainerCards>
    </Container>
  );
};

export default Home;
