import React from "react";
// import { buscarPokemon } from "../api";
const { useState } = React;

const BarraDeBusca = (props) => {
    const { onSearch } = props;
    const [busca, setBusca] = useState('');

    const onChange = (e) => {
        setBusca(e.target.value.toLowerCase());
        if (e.target.value.length === 0) {
            setBusca(null);
        }
    }

    const onEnter = async (e) => {
        if (e.keyCode === 13) {
            onSearch(busca);
        }
    }

    return (
        <div>
            <div>
                <input type="text" className="barraDeBusca" onKeyDown={(e) => onEnter(e)}
                    onChange={onChange} placeholder="Digite aqui sua busca..." />
            </div>
            <div>
            </div>
        </div>
    )
}

export default BarraDeBusca