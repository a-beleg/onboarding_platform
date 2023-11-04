import {api} from "../axiosWraper";
import {GetUserDTO} from "./getUser";

export const updateUser = (data: any) => {
    return api.post<GetUserDTO>('/profile/', data)
}