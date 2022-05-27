import axios from 'axios'

export async function RequestApi() {
  const { data } = await axios.get(
    'https://api.thecatapi.com/v1/breeds'
  )

  const result = data.map((cats:any) => {
    const name: string[] = cats.name
    const url: string[] = cats.image?.url || ''
    
    return {name, url}
  }).filter(({url}: any) => url !== '')

  return result
}

