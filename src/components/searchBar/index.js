import React, {useState} from 'react';
import { api } from '../../services/goat-api';


export default function SearchBar(){
  const [searched, setSearched] = useState();
  const [characterName, setCharacterName] = useState("");
  const getCharacterName = event => setCharacterName(event.target.value);

  async function searchCharacter(){
    const response = await api.get(`?name=${characterName}`);
    setSearched(response.data)
  }

  return(
    <>
      <input type="text" value={characterName} onChange={getCharacterName}/>
      <button onClick={searchCharacter}>get</button>
    {searched &&(
      searched.results.map(character => (
        <h1>{character.name}</h1>
      )))
    }
    </>
  )
}
