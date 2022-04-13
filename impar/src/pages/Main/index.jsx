import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import DeleteModal from "../../components/Modal/DeleteModal";
import actions from "../../store/actions";
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
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const isDeleting = useSelector((state) => state.isDeleting);
  const productsList = useSelector((state) => state.productsList);
  const dispatch = useDispatch();

  useEffect(async () => {
    await getProducts()
      .then(({ data: { results } }) =>
        dispatch({ type: actions.UPDATE_PRODUCTS_LIST, productsList: results })
      )
      .catch((error) => alert(error));
  }, []);

  const search = () => {
    getBySearch(searchQuery)
      .then(({ data: { results } }) =>
        dispatch({ type: actions.UPDATE_PRODUCTS_LIST, productsList: results })
      )
      .catch((error) => alert(error));
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
          <Ico src={searchIco} onClick={search} />
        </InputIco>
      </CarouselAndInputContainer>
      <DeleteModal isDeleting={isDeleting} />
      <NewCardsContainer>
        Resultado de busca
        <Button> Novo Card </Button>
      </NewCardsContainer>
      <MainContainer>
        <MainCardsContainer>
          {productsList.map((product, index) => (
            <Card src={product.thumbnail} title={product.title} index={index} key={index} />
          ))}
        </MainCardsContainer>
      </MainContainer>
    </>
  );
};

export default Main;
