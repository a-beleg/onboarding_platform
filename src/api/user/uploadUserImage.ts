import {api} from "../axiosWraper";

export const uploadImage = (image: File) => {
    const data = new FormData();
    data.append('image', image);
    return api.post('/profile/image', data);
}