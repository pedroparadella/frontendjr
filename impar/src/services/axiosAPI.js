import axios from "axios";

const endpoint =
    "https://api.mercadolibre.com/sites/MLB";

const categoryAndLimit = "search?category=MLB1384&limit=20";

const http = axios.create({
    baseURL: endpoint,
});

const getProducts = () => {
    return http.get(categoryAndLimit);
};

const getBySearch = (query) => {
    return http.get(`${categoryAndLimit}&q=${query}`);
};

export default { getProducts, getBySearch };