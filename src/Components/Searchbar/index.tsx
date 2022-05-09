import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import cardMock from "../../Mock";
import "./styles.scss";

interface ISearchbar {
  setSearch: Function;
}

const Searchbar = (props: ISearchbar) => {
  return (
    <div className="Searchbar">
      <TextField
        label="Digite aqui sua busca..."
        variant="outlined"
        className="text-field"
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </div>
  );
};
export default Searchbar;
