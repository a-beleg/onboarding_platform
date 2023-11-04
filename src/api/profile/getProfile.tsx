import {api} from "../axiosWraper";

export type Data = {
    id: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    photo: string;
    email: string;
    phone: string;
}

export type ProfileData = {
    success: boolean;
    data: Data;
    errors?: any;
}


export const getProfile = () => {
    return api.get<ProfileData>('/profile')
}