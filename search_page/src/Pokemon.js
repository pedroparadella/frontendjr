import React, { useContext } from "react";
import FavoriteContext from "./FavoritesContext";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
      FavoriteContext
    );

    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
  
    const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <div className="pokemon-button">
            <button className="pokemon-button-1">
              <div className="Exclude-button">Excluir</div>
            </button>
            <button onClick={clickHeart} className="pokemon-button-2">
            <div className="Edit-button">Editar</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
