import { createContext, useState } from "react";

const GamesContext = createContext(); 

export const GamesProvider = ({children}) => {
    const [games, setGames] = useState([]);
    const handleCall = game => {
        setGames([...games, game]);
    }
    

    return (
        <GamesContext.Provider value={{games, handleCall}}>
            {children}
        </GamesContext.Provider>
    )
}

export default GamesContext;