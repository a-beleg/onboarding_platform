import {api} from "../axiosWraper";

export const getUniversities = () => {
    return api.get('/universities');
}