import {api} from "../axiosWraper";

export const deleteUser = (id: string) => {
    return api.delete(`/users/${id}`)
    // return JSON.parse(JSON.stringify({
    //
    //     "success": true,
    //     "data": null,
    //     "errors": null
    // }));
}