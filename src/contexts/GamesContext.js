import { createContext, useState } from "react";

const GamesContext = createContext(); 

export const GamesProvider = ({children}) => {
    const [games, setGames] = useState([]);
    

    return (
        <GamesContext.Provider value={{games, setGames}}>
            {children}
        </GamesContext.Provider>
    )
}

export default GamesContext;