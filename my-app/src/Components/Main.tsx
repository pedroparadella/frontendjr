import { useState } from "react";
import Result from "./Result";
import Search from "./Search";

const Main = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Result search={search} />
    </>
  );
};

export default Main;
