import {api} from "../axiosWraper";
import {GetUserDTO} from "./getUser";

export const updateEducation = (data: any) => {
    return api.post<GetUserDTO>('/profile/education', data)
}
