import { useState, useEffect } from 'react'
import { Box, Img, Name, FooterBox } from './style'
import { RequestApi } from '../../services'

interface CardsProps {
  filterQuery: any
  actions: any
}

export default function Cards({ actions, filterQuery }: CardsProps) {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    RequestApi().then((data: any) => {
      const cats = data.filter((cat: any) => cat.name.includes(filterQuery))
      setData(cats)
    })
  }, [filterQuery])

  return (
    <Box>
      {data.map((p: any, index: number) => (
        <div className="container-box" key={index}>
          <Img src={p.url} alt={p.name} />

          <Name>{p.name}</Name>

          <FooterBox>
            <div>
              <img src="/assets/icon-trash.svg" alt="Ícone de lixo"></img>
              <button onClick={() => actions.setDeleteSidebar(true)}>
                Excluir
              </button>
            </div>
            <div className="div-button"></div>
            <div>
              <img src="/assets/icon-edit.svg" alt="Ícone para editar"></img>
              <button onClick={() => actions.setShowSidebar(true)}>
                Editar
              </button>
            </div>
          </FooterBox>
        </div>
      ))}
    </Box>
  )
}
