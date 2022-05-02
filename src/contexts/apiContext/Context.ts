import { createContext, Dispatch, SetStateAction } from 'react';
import { Character } from '../../types/character';

type AppContextType = {
  characters: Character[];
  setCharacters: (newState: Character[]) => void;
  searchTerm: string;
  setSearchTerm: (newState: string) => void;
};

const initialValue = {
  characters: [],
  setCharacters: () => {},
  searchTerm: '',
  setSearchTerm: () => {},
};

const AppContext = createContext<AppContextType>(initialValue);

export default AppContext;
