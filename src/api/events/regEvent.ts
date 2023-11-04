import {api} from "../axiosWraper";


export type EventRegData = {
    message: string;
}

export type EventRegDTO = {
    success: boolean;
    data: EventRegData;
    errors?: any;
}


export const regEvent = (event_id: string) => {
    return api.post<EventRegDTO>(`/events/users/${event_id}`)
}
