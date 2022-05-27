import { useState, useEffect } from 'react'
import Cards from '../../components/Card'
import CreateCards from '../../templates/CreateCard'
import DeleteCard from '../../templates/DeleteCard'
import Button  from '../../components/Button'

import {
  ContainerCards,
  InputSearch,
  Header,
} from './style'

export default function Home() {

  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const [deleteSidebar, setDeleteSidebar] = useState<boolean>(false)

  const [filterQuery, setFilterQuery] = useState<string>('')

  function queryHandler(e: any){
    setFilterQuery(e.target.value)
  }

  return (
    <>
    {showSidebar && <CreateCards onClick={() => setShowSidebar(false)} />}
    {deleteSidebar && <DeleteCard onClick={() => setDeleteSidebar(false)} />}
      <Header>
        <img src="/assets/logo-teste.png" alt="logo" />
      </Header>

      <InputSearch>
        <input type="text" placeholder="Digite aqui sua busca..." onChange={queryHandler}/>
      </InputSearch>

      <ContainerCards>
        <p>Resultado de Busca</p>
        {/*<button onClick={() => setShowSidebar(!showSidebar)}>Novo Card</button>*/}
        <Button onClick={() => setShowSidebar(!showSidebar)}>Novo Card</Button>
      </ContainerCards>

      <Cards actions={{setShowSidebar, setDeleteSidebar}} filterQuery={filterQuery}/>
    </>
  )
}
