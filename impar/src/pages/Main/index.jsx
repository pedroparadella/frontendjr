import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import { MainContainer, MainCardsContainer } from "./styles";
import getProducts from "../../services/axiosAPI";
import a from "../../assets/familia-feliz.jpg";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    await getProducts()
      .then(({ data: { results } }) => setProducts(results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <NavBar />
      <Carousel />
      <MainContainer>
        <MainCardsContainer>
          {products.map((product) => (
            <Card src={product.thumbnail} title={product.title} />
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
