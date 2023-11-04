import {api} from "../axiosWraper";

export type SearchingUniversity = {
    email: any;
    full_name: string;
    has_contract: boolean;
    id: string;
    image: string;
    inn: any;
    kpp: any;
    org_name: any;
    phone: any;
    post_code: any;
    short_name: string;
    site: any;
}

type dataList = {
    items: SearchingUniversity[];
}

type metaUniversitiesSearch = {
    current_page: number;
    from: number;
    last_page: number;
    links: any[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export type getUniversitiesRequest = {
    data: dataList;
    meta: metaUniversitiesSearch;
    success: boolean;
}
export const searchUniversities = (params: string) => {
    let route = `/universities?q=${params}`;

    return api.get<getUniversitiesRequest, any>(route)
}