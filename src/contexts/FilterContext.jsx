import { createContext, useState } from "react";

const FilterContext = createContext(); 

export const FilterProvider = ({children}) => {
    const [filter, setfilter] = useState('');
    

    return (
        <FilterContext.Provider value={{filter, setfilter}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext;