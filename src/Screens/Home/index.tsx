import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Searchbar from "../../Components/Searchbar";
import FilledButton from "../../Components/Buttons/FilledButton";
import "./styles.scss";
import Card from "../../Components/Card";
import cardMock from "../../Mock";
import ModalComponent from "../../Components/Modal";
import ModalNotDone from "../../Components/ModalNotDone";

const Home = () => {
  const [searchValue, setSearch] = useState<string>("");
  const [newCardData, setNewCardData] = useState(cardMock);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalNotDoneOpen, setIsModalNotDoneOpen] = useState<boolean>(false);

  const searchByTitle = (value: string) => {
    let newData = cardMock.filter((item) =>
      value.toLowerCase().match(item.title.toLowerCase())
    );
    setNewCardData(newData);
  };

  useEffect(() => {
    if (searchValue === "") {
      setNewCardData(cardMock);
    } else {
      searchByTitle(searchValue);
    }
  }, [searchValue]);

  return (
    <>
      <div className="Home">
        <Header />
        <Searchbar setSearch={setSearch} />
        <div className="content">
          <h2 className="title">Resultado de busca</h2>
          <FilledButton
            setIsModalNotDoneOpen={setIsModalNotDoneOpen}
            setIsModalOpen={setIsModalNotDoneOpen}
            color="#E76316"
          >
            Novo Card
          </FilledButton>
        </div>

        <div className="CardContainer">
          {newCardData.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                setIsModalOpen={setIsModalOpen}
                setIsModalNotDoneOpen={setIsModalNotDoneOpen}
              />
            );
          })}
        </div>
      </div>
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setIsModalNotDoneOpen={setIsModalNotDoneOpen}
      />
      <ModalNotDone
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalNotDoneOpen}
        setIsModalNotDoneOpen={setIsModalNotDoneOpen}
      />
    </>
  );
};

export default Home;
