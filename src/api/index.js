import axios from "axios";
import { config } from "../config";

export const getImages = async (query) => {
    const res = await axios.get(config.apiUrl, {
        method: "get",
        params: { query, page: 1 },
        headers: { Authorization: config.apiKey },
    });
    return res;
};
