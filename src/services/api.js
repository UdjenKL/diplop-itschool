import axios from "axios";
import {data} from './data.js';
export const getItems = async (limit) => {
    try {
        // const {data} = await axios.get(`https://6341bc1320f1f9d79978ecb3.mockapi.io/items/?page=1&limit=${limit}`)
        return data
    } catch (error) {
        console.log(error);
    }
    return []
};
