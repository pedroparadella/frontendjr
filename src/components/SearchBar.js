import React from "react";
const { useState } = React;

const SearchBar = (props) => {
    const { onSearch } = props;
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value.toLowerCase());
        if (e.target.value.length === 0) {
            setSearch(null);
        }
    }

    const onEnter = async (e) => {
        if (e.keyCode === 13) {
            onSearch(search);
        }
    }

    return (
        <div>
            <input type="text" className="searchBar" onKeyDown={(e) => onEnter(e)}
                onChange={onChange} placeholder="Digite aqui sua busca..." />
        </div>
    )
}

export default SearchBar
