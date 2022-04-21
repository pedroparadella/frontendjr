import axios from "axios";

const getPokemonData = async (id) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res;
};
export default getPokemonData;
