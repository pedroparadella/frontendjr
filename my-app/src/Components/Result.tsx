import { useEffect, useState } from "react";
import styled from "styled-components";
import { itemProps } from "../types/item";
import Card from "./Card";

const Wrapper = styled.div`
  margin: 0 10%;
  .result__header {
    margin: 40px 0px 32px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__title {
    font-size: 32px;
    color: #5f1478;
  }

  .header__action {
    background-color: #e76316;
    font-weight: 700;
    padding: 12px 32px;
    border-radius: 8px;
    border: none;
    color: white;
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 36px;
`;

type ResultProps = {
  search: string;
};

const Result = ({ search }: ResultProps) => {
  const [allItens, setAllItens] = useState<itemProps[]>([]);
  const [results, setResults] = useState<itemProps[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/item/").then((res) => {
      res.json().then((json) => setAllItens(json.results));
    });
  }, []);

  useEffect(() => {
    const response = allItens.filter((item) => {
      return item.name.includes(search);
    });
    setResults(response);
  }, [allItens, search]);

  const handleClick = () => {
    window.alert("Funcionalidade não implementada");
  };

  return (
    <Wrapper>
      <div className="result__header">
        <h1 className="header__title">Resultado de busca</h1>
        <button onClick={handleClick} className="header__action">
          Novo Card
        </button>
      </div>
      <Content>
        {results &&
          results.map((item: itemProps, index: number) => (
            <Card item={item} key={index} />
          ))}
      </Content>
    </Wrapper>
  );
};

export default Result;
