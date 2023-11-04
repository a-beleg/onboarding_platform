import {api} from "../axiosWraper";

export type GetProgramsDTO = {
    data: ProgramsData;
    success: boolean;
    errors: any[];
}

export type ProgramsData = {
    items: ProgramItem[];
}

export type ProgramItem = {
    id: string;
    title: string;
    image: string;
    description: string;
    wt_link: string;
    created_at:Date;
    users?:any;
}

export const getPrograms= (exclude_registered?: boolean) => {
    return api.get<GetProgramsDTO>(exclude_registered ? '/courses':'/courses')
}
