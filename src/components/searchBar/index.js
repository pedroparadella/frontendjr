import React from 'react';
import { api } from '../../services/goat-api';


export default function searchBar(){
  const [characterName, setCharacterName] = useState("");
  const [searched, setSearched] = useState(initialState);
  const getCharacterName = event => setCharacterName(event.target.value);

  function searchCharacter(){
    const response = await api.get('character');
    setSearched(response.data)
  }

  return(
    <>
      <input type="text" value={characterName} onChange={getCharacterName}/>
      <button onClick={searchCharacter}>get</button>

      <h1>{searched.results.name}</h1>
    </>
  )
}
