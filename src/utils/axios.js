import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://www.cheapshark.com/api/1.0'
});
export default instance;