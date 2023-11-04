import {api} from "../axiosWraper";

export type User = {
    id: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    photo: string;
    email: string;
    phone: string;
}

export type UserData = {
    success: boolean;
    data: User[];
    errors?: any;
}


export const getUsers = () => {
    return api.get<UserData>('/users')
}