import { useEffect, useState } from 'react';

import { Character, CharacterContextProps } from '../../types/character';
import useRequest from '../../hooks/useRequest';
import AppContext from './Context';

const AppProvider = ({ children }: CharacterContextProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const response = useRequest(searchTerm);

  useEffect(() => {
    setCharacters(response);
  }, [response]);

  return (
    <AppContext.Provider
      value={{ characters, setCharacters, setSearchTerm, searchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
