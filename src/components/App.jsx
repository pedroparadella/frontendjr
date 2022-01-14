import Header from "./Header";
import Search from "./Search";
import SearchResult from "./SearchResult";
import CreateCard from "./CreateCard";
import DeleteCard from "./DeleteCard";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const App = () => {
  return (
    <>
      <Header></Header>
      <Container fluid>
        <Search></Search>
        <SearchResult></SearchResult>
        <CreateCard></CreateCard>
        <DeleteCard></DeleteCard>
      </Container>
    </>
  );
};

export default App;
