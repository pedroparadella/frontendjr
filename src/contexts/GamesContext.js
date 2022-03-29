import { createContext, useState } from "react";
import axios from "../utils/axios";

const GamesContext = createContext(); 

//Controls the API call, the list of games and the game to be added

export const GamesProvider = ({children}) => {
    const [games, setGames] = useState([]);
    const [gameToAdd, setGameToAdd] = useState(["", ""]); 

    const handleCall = () => {
        let data = new FormData();
        let config = {
        method: 'get',
        url: 'https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0',
        headers: {"Access-Control-Allow-Origin": "*"} ,
        data : data
        };
        axios.get('https://www.cheapshark.com/api/1.0/games?title=batman&steamAppID=35140&limit=60&exact=0')
            .then(response => {
                console.log(response);
                const {cheapest, cheapestDealId, external} = response.data;
                setGames(prevState => [...prevState, [gameToAdd[0],{cheapest, cheapestDealId, external}]]);
            })
            .catch(err => {
                console.log(err);
            })
        
    }
    
    const handleChange = (e) => {
        setGameToAdd(prevState => e.target.id === "add-title"? [e.target.value, prevState[1]]: [prevState[0], e.target.value]);
    }

    return (
        <GamesContext.Provider value={{games, handleCall, handleChange, gameToAdd}}>
            {children}
        </GamesContext.Provider>
    )
}

export default GamesContext;