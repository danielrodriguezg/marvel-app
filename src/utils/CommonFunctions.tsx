import axios from "axios";
import { getUrl } from "./GlobalConstants";

export const apiCall = (url: string, method: string) => axios({
        method,
        url: getUrl(url)
    });
