import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import {
  Button,
  CarouselAndInputContainer,
  Input,
  InputIco,
  Ico,
  MainContainer,
  MainCardsContainer,
  NewCardsContainer,
} from "./styles";
import searchIco from "../../assets/search-ico.png";
import { getProducts, getBySearch } from "../../services/axiosAPI";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(async () => {
    await getProducts()
      .then(({ data: { results } }) => setProducts(results))
      .catch((error) => console.log(error));
  }, []);

  const search = () => {
    getBySearch(searchQuery)
      .then(({ data: { results } }) => setProducts(results))
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <NavBar />
      <CarouselAndInputContainer>
        <Carousel />
        <Input type="text" onChange={handleChange} />
        <InputIco>
          <Ico src={searchIco} onClick={() => search()} />
        </InputIco>
      </CarouselAndInputContainer>
      <NewCardsContainer>
        Resultado de busca
        <Button> Novo Card </Button>
      </NewCardsContainer>
      <MainContainer>
        <MainCardsContainer>
          {products.map((product, index) => (
            <Card src={product.thumbnail} title={product.title} key={index} />
          ))}
          <button onClick={() => console.log(products)}>
            asssssssssssssssss
          </button>
        </MainCardsContainer>
      </MainContainer>
    </>
  );
};

export default Main;
