import { createContext, ReactNode, useContext, useState } from "react";

interface Pokemon {
  title: {
    pokename: string,
  },
  setTitle:  React.Dispatch<React.SetStateAction<{
    pokename: string;
  }>>
}

export const SearchContext = createContext({} as Pokemon);

export const SearchProvider = ({children}: {children: ReactNode}) => {
  const [title, setTitle] = useState({
    pokename: '',
  });

  return(
    <SearchContext.Provider value={ {title, setTitle} }>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch(){
  const context = useContext(SearchContext);
  return context;
}