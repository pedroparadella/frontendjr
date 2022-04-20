import React from "react";

import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;

  return (
    <div>
      <div className="header">
        <h1>Resultado de busca</h1>
        
        <div className="card-btn" >
        <button /* onClick={onClick} */>
        Novo card          
        </button>
      </div>
      </div>
      
      {loading ? (
        <div>Cargando pokemons...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
