import styled from "styled-components";
import bg_img from "../Assets/background.png";
import lupa from "../Assets/lupa.svg";

const Wrapper = styled.div`
  background-image: url(${bg_img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 280px;
  padding-top: 150px;
  .searchBar {
    margin: 0 10%;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    background-color: white;
  }
  .searchBar__input {
    width: 100%;
    padding: 24px 0 24px 24px;
    border: none;
    font-size: 24px;
    :focus {
      outline: none;
    }
  }
  .searchBar__enter {
    cursor: pointer;
    padding: 0 24px;
  }
`;

type SearchProps = {
  search: string;
  setSearch: (arg0: string) => void;
};

const Search = ({ search, setSearch }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Wrapper>
      <div className="searchBar">
        <input
          className="searchBar__input"
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Digite aqui sua busca..."
        />
        <img className="searchBar__enter" src={lupa} alt="ícone" />
      </div>
    </Wrapper>
  );
};

export default Search;
