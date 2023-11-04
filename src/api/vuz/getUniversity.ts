import {api} from '../axiosWraper';

export type IDoc = {
    id: string,
    university_id: string,
    file_name: string,
    file_path: string,
    signed_at: string,
    expires_at: string
}

export type University = {
    id: string,
    full_name: string,
    short_name: string,
    city: string,
    post_code: string,
    address: string,
    phone: string,
    email: string,
    has_contract: boolean,
    contract_number: string,
    contract_begin_date: string,
    contract_finish_date: string,
    site: string,
    contact_person: string,
    image: string,
    docs: IDoc[],
    contract_status: string,
    org_name:string,
    inn:string,
    kpp:string
}

export type GetUniversityDTO = {
    success: boolean,
    data: University,
    errors: any
}

export const getUniversity = () => {
    return api.get<GetUniversityDTO>('/university')
}