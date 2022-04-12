import axios from "axios";

const endpoint =
    "https://api.mercadolibre.com/sites/MLB/search?category=MLB1384";

export const API = axios.create({
    baseURL: endpoint,
});