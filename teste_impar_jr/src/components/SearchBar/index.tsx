import { Container, Search } from './styles'
import Lupa from '../../assets/lupa.svg'

export default function SearchBar(props: any) {

  return (
    <Container>
      <Search>

        <input type="text" placeholder="Digite aqui sua busca..." onChange={(e) => { props.setSearchTerm(e.target.value) }}  ></input>

        <div>
          <img src={Lupa} alt="lupa"></img>
        </div>
      </Search>
    </Container>
  )
}