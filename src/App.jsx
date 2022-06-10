import Header from "./components/header";
import Search from "./components/search";
import styled from "styled-components";
import Button from "./components/button";
import Card from "./components/card";
import ModalCreate from "./components/modalCreate";

import { useState, useEffect } from "react";
import ModalDelete from "./components/modalDelete";
import {
  createCourse,
  deleteCourse,
  editCourse,
  getCourses,
} from "./services/api";

const Content = styled.section`
  max-width: 1050px;
  align-self: center;
  margin: 40px auto 0 auto;

  @media (max-width: 1000px) {
    max-width: 95% !important;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 25px;
    color: #5f1478;
    font-weight: normal;
  }
`;

const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 37px;
  margin: 36px 0;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const BoxError = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 32px;
    color: #4d4b4b;
    width: 50%;
    text-align: center;
  }
`;

function App() {
  const [isModalCreate, setIsModalCreate] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [coursesData, setCoursesData] = useState(undefined);
  const [cardSelected, setCardSelected] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredCard, setFilteredCard] = useState([]);

  useEffect(() => {
    fetchingCourses();
  }, [isModalCreate, isModalDelete, isEdit]);

  useEffect(() => {
    const filteredList = coursesData?.filter((item) =>
      handleFiltered(item.title)
    );
    setFilteredCard(filteredList);
  }, [searchText]);

  const handleFiltered = (title) => {
    const regex = new RegExp(searchText, "i");
    return regex.test(title);
  };

  const fetchingCourses = async () => {
    try {
      const { data } = await getCourses("course");
      setCoursesData(data);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="App">
      <Header />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <Content>
        <span>
          <h1>{searchText ? "Resultado da busca" : "Cursos"}</h1>
          <Button handleClick={() => setIsModalCreate(true)}>Novo card</Button>
        </span>
        <ContainerCards>
          {coursesData ? (
            <Card
              setIsModalDelete={setIsModalDelete}
              setIsEdit={setIsEdit}
              coursesData={coursesData}
              setCardSelected={setCardSelected}
              filteredCard={filteredCard}
            />
          ) : (
            searchText &&
            !filteredCard.length && (
              <BoxError>
                <h2>Não encontramos nenhum resultado para {searchText}</h2>
              </BoxError>
            )
          )}
        </ContainerCards>
      </Content>
      {(isModalCreate || isEdit) && (
        <ModalCreate
          setIsModalCreate={setIsModalCreate}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          cardSelected={cardSelected}
          coursesData={coursesData}
        />
      )}
      {isModalDelete && (
        <ModalDelete
          setIsModalDelete={setIsModalDelete}
          cardSelected={cardSelected}
        />
      )}
    </div>
  );
}

export default App;
