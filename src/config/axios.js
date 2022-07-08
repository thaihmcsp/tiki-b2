import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tiki.thaihm.online/',
});

export default instance