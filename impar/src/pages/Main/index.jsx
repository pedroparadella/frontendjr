import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import {
  MainContainer,
  MainCardsContainer,
  CarouselAndInputContainer,
  Input,
  InputIco,
  Ico,
} from "./styles";
import searchIco from "../../assets/search-ico.png";
import API from "../../services/axiosAPI";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(async () => {
    await API.getProducts()
      .then(({ data: { results } }) => setProducts(results))
      .catch((error) => console.log(error));
  }, []);

  const search = () => {
    API.getBySearch(searchQuery)
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
