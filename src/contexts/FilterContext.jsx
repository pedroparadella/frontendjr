import { createContext, useState } from "react";

const FilterContext = createContext(); 

//Handles the search bar input and used it to filter the cards

export const FilterProvider = ({children}) => {
    const [filterSearch, setFilter] = useState("");
    const handleChange = (e) => {
        setFilter(e.target.value);
    }
    
    return (
        <FilterContext.Provider value={{filterSearch, handleChange}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext;