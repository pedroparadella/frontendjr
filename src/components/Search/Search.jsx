import React from 'react';
import FilterContext from '../../contexts/FilterContext';
import {useContext} from "react";
import {motion} from 'framer-motion';


const Search = () => {
    const {filter, handleChange} = useContext(FilterContext); 
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
        <motion.div id="search" {...slideDown}>
            <input type="text" placeholder="Nome do Jogo..." value={filter} onChange={handleChange} />           
        </motion.div>
  );
}

export default Search;