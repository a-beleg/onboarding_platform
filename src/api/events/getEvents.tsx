import {api} from "../axiosWraper";

export type GetEventsDTO = {
    data: EventsData;
    success: boolean;
    errors: any[];
};

export type EventsData = {
    items: EventItem[];
};

export type EventItem = {
    id: string;
    event_id: string | null;
    title: string;
    description: string;
    image: string;
    author: string;
    date_time: string;
    date: string;
    time: string;
    status: string;
    link?: string;
    is_online: number;
    program: ProgramItem[] | null;
    speakers: SpeakerItem[];
    meta: MetaItem;
};

export type ProgramItem = {
    timing: string;
    description: string;
};

export type SpeakerItem = {
    id: string;
    name: string;
    description: string;
    image: string;
};

export type MetaItem = {
    links: {
        vk: string | null;
        video_preview: string | null;
    };
    place: string | null;
};

export const getEvents = (exclude_registered?: boolean) => {
    return api.get<GetEventsDTO>(exclude_registered ? "/events?exclude_registered=1" : "/events");
};
