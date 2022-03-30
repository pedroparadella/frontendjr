import { createContext, useState } from "react";
import axios from "../utils/axios";

const GamesContext = createContext(); 

//Controls the API call, the list of games and the game to be added

export const GamesProvider = ({children}) => {
    const [games, setGames] = useState([]);
    const [gameToAdd, setGameToAdd] = useState(["", ""]);
    const [gameToEdit, setGameToEdit] = useState(""); 


    const handleAdd = () => {
        axios.get(`/games?title=${gameToAdd[0]}&limit=1`)
            .then(response => {
                const {cheapest, cheapestDealID, external} = response.data[0];
                setGames(prevState => [...prevState, [gameToAdd[0],{cheapest, cheapestDealID, external, image: gameToAdd[1]}]]);
            })
            .catch(err => {
                setGames(prevState => [...prevState, [gameToAdd[0],{cheapest: "", cheapestDealID: "", external: "Jogo Não Encontrado", image: gameToAdd[1]}]]);
            }).then(() => setGameToAdd(["", ""]))        
    }

    const handleEdit = () => {
        const index = games.findIndex(game => gameToEdit === game[0]);
        axios.get(`/games?title=${gameToAdd[0]}&limit=1`)
            .then(response => {
                const {cheapest, cheapestDealID, external} = response.data[0];
                setGames(prevState => [...prevState.slice(0, index), [gameToAdd[0],{cheapest, cheapestDealID, external, image: gameToAdd[1]}], ...prevState.slice(index+1)]);
            })
            .catch(err => {
                setGames(prevState => [...prevState.slice(0, index), [gameToAdd[0],{cheapest: "", cheapestDealID: "", external: "Jogo Não Encontrado", image: gameToAdd[1]}], prevState.slice(index+1)]);
            }).then(() => {
                setGameToAdd(["", ""]);
                setGameToEdit("");
            }) 
    }
    
    const handleChange = (e) => {
        setGameToAdd(prevState => e.target.id === "add-title"? [e.target.value, prevState[1]]: [prevState[0], e.target.value]);
    }

    const handleDeletion = (e) => {       
        setGames(prevState => {
            const name = e.target.name;
            const index = prevState.findIndex(game => game[0] === name);           
            return [...prevState.slice(0, index), ...prevState.slice(index+1)];
        });
    }

    const handleToEdit = (e) => {
        setGameToEdit(e.target.name);       
    }

    return (
        <GamesContext.Provider value={{handleEdit, handleToEdit, gameToEdit, games, handleAdd, handleChange, gameToAdd, setGames, handleDeletion}}>
            {children}
        </GamesContext.Provider>
    )
}

export default GamesContext;