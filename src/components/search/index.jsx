import { BannerContainer, InputSearch, Form } from "./style";

import lupa from "../../assets/lupa.png";

export default function Search({ searchText, setSearchText }) {
  return (
    <BannerContainer>
      <Form>
        <InputSearch
          type="text"
          placeholder="Digite aqui sua busca..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <img src={lupa} alt="lupa de pesquisa" />
      </Form>
    </BannerContainer>
  );
}
