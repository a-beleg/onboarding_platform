import {api} from "../axiosWraper";
import {ProfileData} from "./getProfile";

export const getVuzUserProfile = () => {
    return api.get<ProfileData>('/vuzUserProfile')
}