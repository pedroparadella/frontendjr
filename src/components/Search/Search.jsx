import React from 'react';
import FilterContext from '../../contexts/FilterContext';
import {useContext} from "react";
import {motion} from 'framer-motion';


const Search = () => {
    const {filterSearch, handleChange, handleClear} = useContext(FilterContext); 
    const slideDown = {
        initial: {
            y: "-100%"
        },
        animate: {
            y: 0
        },
        transition:  {
            duration: 0.8, 
            ease: "easeOut"
        }
    }

   

    return (
        <motion.div id="hero" {...slideDown}>
            <div id="search">
                <input type="text" placeholder="Nome do Jogo..." value={filterSearch} onChange={handleChange} />
                <button onClick={handleClear}>
                    <span className="material-icons md-36 md-dark">
                        clear
                    </span>
                </button>  
            </div>
                     
        </motion.div>
  );
}

export default Search;