import React from "react";
/* import FavoriteContext from "./FavoritesContext"; */

/* const { useContext } = React; */

const Navbar = () => {
  /* const { favoritePokemons } = useContext(FavoriteContext); */

  let imgUrl =
    "https://impar.com.br/img/Impar_logo_branco.svg";

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="Teste-logo" className="navbar-image" />
      </div>
      {/* <div>&#10084;&#65039; {favoritePokemons.length}</div> */}
    </nav>
  );
};

export default Navbar;
