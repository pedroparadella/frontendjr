import axios from "axios";

const endpoint =
    "https://api.mercadolibre.com/sites/MLB";

const categoryAndLimit = "search?category=MLB1384&limit=20";

const http = axios.create({
    baseURL: endpoint,
});

export const getProducts = () => {
    return http.get(categoryAndLimit);
};

export const getBySearch = (query) => {
    return http.get(`${categoryAndLimit}&q=${query}`);
};