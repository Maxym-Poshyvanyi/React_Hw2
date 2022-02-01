import {axiosService} from "./axios.service";
import {urls} from "../configs/Urls";

export const userService = {
    getAll:()=>axiosService.get(urls.users).then(value => value.data)
}
