import axios from "axios";
import UrlsBase from "../configs/Urls";


export const axiosService = axios.create({
    baseURL:UrlsBase
});
