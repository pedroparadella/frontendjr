import React from "react";
import Pokemon from "./Pokemon"

const Pokedex = (props) => {
    console.log(props)

    const { pokemons } = props;

    return (
        <div>
            <div className="pagina">
                <div className="cards">
                    {pokemons.map((pokemon, idx) => {
                        return (
                            <Pokemon pokemon={pokemon} key={pokemon.name} />
                            // <div key={pokemon.name}>#{idx + 1}: {pokemon.name}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Pokedex