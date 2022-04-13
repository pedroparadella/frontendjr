import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import DeleteModal from "../../components/Modal/DeleteModal";
import CreateOrEditModal from "../../components/Modal/CreateOrEditModal";
import WelcomeModal from "../../components/Modal/WelcomeModal";

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
  const [welcome, setWelcome] = useState(true);

  const isCreating = useSelector((state) => state.isCreating);
  const productsList = useSelector((state) => state.productsList);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts()
      .then(({ data: { results } }) =>
        dispatch({
          type: actions.UPDATE_PRODUCTS_LIST,
          productsList: results,
        })
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

  const createCard = () => {
    dispatch({
      type: actions.CREATING_OR_EDITING,
      creatingOrEditing: "creating",
    });
    dispatch({ type: actions.TOGGLE_EDITING });
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
      <WelcomeModal />
      <DeleteModal />
      <CreateOrEditModal isCreating={isCreating} />
      <NewCardsContainer>
        Resultado de busca
        <Button onClick={createCard}> Novo Card </Button>
      </NewCardsContainer>
      <MainContainer>
        <MainCardsContainer>
          {productsList.map((product, index) => (
            <Card
              thumbnail={product.thumbnail}
              title={product.title}
              index={index}
              key={index}
            />
          ))}
        </MainCardsContainer>
      </MainContainer>
    </>
  );
};

export default Main;
