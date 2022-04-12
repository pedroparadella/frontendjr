import axios from "axios";

const endpoint =
    "https://api.mercadolibre.com/sites/MLB/search?category=MLB1384&limit=20";

const API = axios.create({
    baseURL: endpoint,
});

const getProducts = () => {
    return API.get("");
};

const getBySearch = (query) => {
    return API.get(`&q=${query}`)
}

export default { getProducts };