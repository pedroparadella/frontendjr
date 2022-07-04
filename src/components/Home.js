import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useQuery } from "react-query";

// Assets
import trash from "../assets/trash.svg";
import search from "../assets/search.svg";
import exit from "../assets/exit.png";
import backgroundSearch from "../assets/image/background-search.png";

// Components
import Button from "../components/Button";
import Card from "../components/Card";
import api from "../Api";
import BaseModal from "./BaseModal";
import CreateCard from "./CreateCard";
import Loading from "./Loading";

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
  width: 2.125rem;
  height: 2.125rem;
  position: absolute;
  right: 1.5625rem;

  @media (max-width: 648px) {
    width: 1.5625rem;
  }
`;

const ContainerCards = styled.div`
  padding: 2rem 0 5.6875rem 0;

  @media (max-width: 648px) {
    width: 90%;
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
  justify-items: center;

  @media (max-width: 648px) {
    grid-template-columns: 1fr;
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

// Modal Trash
const ContainerDelete = styled.div`
  width: 27.375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color_white);
  padding: 3.125rem 2.25rem 2.0625rem 2.25rem;
  position: relative;
  cursor: initial;

  @media (max-width: 648px) {
    width: 90%;
  }
`;

const ExitDelete = styled.img`
  width: 2.125rem;
  height: 2.125rem;
  box-shadow: 0 0.1875rem 0.375rem #e7631636;
  position: absolute;
  top: -1rem;
  right: -1rem;
  border-radius: 50%;
  cursor: pointer;
`;

const IconDelete = styled.div`
  width: 9.9375rem;
  height: 9.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #db25250f;
  border-radius: 50%;
  border: 0.375rem solid var(--color_lightGray);
  padding: 2.8125rem 2.625rem;

  img {
    width: 100%;
  }
`;

const TitleDelete = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color_red);
  margin-top: 0.8125rem;
  margin-bottom: 1.5625rem;
`;

const TextDelete = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color_darkGray);
  margin-bottom: 1.75rem;
`;

const Line = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: var(--color_lightGray);
`;

const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.375rem;
`;

const ContainerPaginate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const Paginate = styled.button`
  width: 20%;
  height: 3rem;
  box-shadow: 0 0.1875rem 0.375rem #00000029;
  background: var(--color_white);
  border-radius: 0.5rem;
  grid-column: 2;
  border: none;
  font-size: 1.5rem;
  color: var(--color_orange);
  margin-right: 1rem;

  :last-child {
    margin-left: 1rem;
    margin-right: 0;
    grid-column: 3;
  }
`;

// Modal Warning

const ContainerWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color_darkGray);
  background: var(--color_white);
  position: relative;
  padding: 2.125rem 2.25rem 2.0625rem 2.25rem;

  @media (max-width: 648px) {
    width: 80%;
  }
`;

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const [valueSearch, setValueSearch] = useState("");
  const [newCard, setNewCard] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [dataDelete, setDataDelete] = useState([]);
  const [dataUpdate, setDataUpdate] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [endPointRequest, setEndPointRequest] = useState(
    "pokemon?offset=0&limit=16"
  );

  const pokemonRequest = useQuery("pokemonRequest", async () => {
    const { data } = await api
      .get(endPointRequest)
      .then((response) => {
        if(response.status === 200) {
          setLoading(false)
          return response
        }
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    return data;
  });

  useEffect(() => {
    pokemonRequest.refetch();
  }, [endPointRequest]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setPokemonList(pokemonRequest?.data?.results || []);
    setPrevious(pokemonRequest?.data?.previous);
    setNext(pokemonRequest?.data?.next);

    setTimeout(() => {
      setLoading(false)
    }, "1000")
  }, [pokemonRequest]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setDataSearch([...newCard]);
  }, [newCard]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    const { value } = e.target;
    setValueSearch(value);
    
    let allData = [...dataSearch, ...pokemonList]
    
    const search = allData.filter((item) => {  
      return !item.name.toLowerCase().indexOf(valueSearch.toLowerCase());
    });
    
    const set = new Set();
    const newSearch = search.filter(item => {
      const removeDuplicate = set.has(item?.name);
      set.add(item?.name);

      return !removeDuplicate;
    })

    if (value === "") {
      setDataSearch([...allData]);
    } else {
      setDataSearch(newSearch);
    }
  };

  const handleAdd = (value) => {
    setNewCard([...newCard, value]);
  };

  const handleUpdate = (value) => {
    const updated = newCard.map((card) =>
      card.name === dataUpdate.name ||
      card.front_default === dataUpdate.front_default
        ? {
            ...card,
            name: value.name,
            front_default: value.front_default,
          }
        : card
    );

    setNewCard(updated);
  };

  const handleDelete = () => {
    const value = dataDelete;

    setNewCard(
      newCard.filter(
        (i) => i.name !== value.name || i.front_default !== value.front_default
      )
    );

    setDataSearch([...newCard]);
  };

  const ModalWarning = () => (
    <ContainerWarning>
      <ExitDelete onClick={() => setWarning(false)} src={exit} alt="Sair" />
      <p>
        Os cards iniciais não podem ser editados ou excluidos, tente modificar
        os novos cards.
      </p>
    </ContainerWarning>
  );

  const ModalDelete = () => (
    <ContainerDelete>
      <ExitDelete onClick={() => setDataDelete([])} src={exit} alt="Sair" />
      <IconDelete>
        <img src={trash} alt="Icone de excluir" />
      </IconDelete>
      <TitleDelete>Excluir</TitleDelete>
      <TextDelete>CERTEZA QUE DESEJA EXCLUIR?</TextDelete>
      <Line />
      <ContainerButtons>
        <Button
          widthButton="48%"
          backgroundButton="var(--color_red)"
          funcAction={() => handleDelete()}
        >
          Excluir
        </Button>
        <Button
          widthButton="48%"
          colorButton="var(--color_red)"
          backgroundButton="var(--color_white)"
          borderButton=".0625rem solid var(--color_red)"
          funcAction={() => setDataDelete([])}
        >
          Cancelar
        </Button>
      </ContainerButtons>
    </ContainerDelete>
  );

  return (
    <Container>
      <Header>
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
          <Button
            widthButton={window.innerWidth <= 648 && "50%"}
            paddingButton={window.innerWidth <= 648 && "0"}
            funcAction={() => setIsOpen(true)}
          >
            Novo Card
          </Button>
        </HeaderCards>
        { loading
            ? <Loading/>
            :
              <>
                <GroupCards>
                  {dataSearch.map((item) => {
                    if (!item) return null;

                    return (
                      <Card
                        key={Math.random().toString(36).substr(2, 9)}
                        setDataDelete={setDataDelete}
                        dataCard={item}
                        setIsOpen={setIsOpen}
                        setWarning={setWarning}
                        setDataUpdate={setDataUpdate}
                        setLoading={setLoading}
                      />
                    );
                  })}
                  {valueSearch === "" &&
                    pokemonList.map((item) => {
                      if (!item) return null;

                      return (
                        <Card
                          key={Math.random().toString(36).substr(2, 9)}
                          setDataDelete={setDataDelete}
                          result={item}
                          setIsOpen={setIsOpen}
                          setWarning={setWarning}
                          setLoading={setLoading}
                        />
                      );
                    })}
                </GroupCards>
                <ContainerPaginate>
                  {valueSearch === "" && previous && (
                    <Paginate
                      onClick={() => {
                        const endPoint = previous.replace(
                          "https://pokeapi.co/api/v2/",
                          ""
                        );
                        setEndPointRequest(endPoint);
                        setLoading(true);
                      }}
                    >
                      &#8678;
                    </Paginate>
                  )}
                  {valueSearch === "" && next && (
                    <Paginate
                      onClick={() => {
                        const endPoint = next.replace("https://pokeapi.co/api/v2/", "");
                        setEndPointRequest(endPoint);
                        setLoading(true);
                      }}
                    >
                      &#8680;
                    </Paginate>
                  )}
                </ContainerPaginate>
              </>
        }
      </ContainerCards>
      {(isOpen || dataUpdate?.length > 0) && (
        <BaseModal
          closeModal={() => {
            setTimeout(() => {
              setIsOpen(false);
              setAnimation(false);
              setDataUpdate([]);
            }, 400);
            setAnimation(true);
          }}
        >
          <CreateCard
            handleAdd={handleAdd}
            animation={animation}
            handleUpdate={handleUpdate}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            closeModal={() => {
              setTimeout(() => {
                setIsOpen(false);
                setAnimation(false);
                setDataUpdate([]);
              }, 400);
              setAnimation(true);
            }}
          />
        </BaseModal>
      )}
      {(dataDelete?.name || dataDelete?.front_default?.name) && (
        <BaseModal closeModal={() => setDataDelete([])}>
          {ModalDelete()}
        </BaseModal>
      )}
      {warning && (
        <BaseModal closeModal={() => setWarning(false)}>
          {ModalWarning()}
        </BaseModal>
      )}
    </Container>
  );
};

export default Home;
