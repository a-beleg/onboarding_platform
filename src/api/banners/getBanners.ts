import {api} from "../axiosWraper";

export type BannerItem = {
  id: number;
  priority: number;
  title: string;
  description: string;
  image: string;
  category: string;
  buttonText?: string;
}

export type  BannersData = {
  items: BannerItem[];
  per_page: number;
  total: number;
  current_page: number;
}

export type GetBannersDTO = {
  success: boolean;
  data: BannersData;
  errors?: any;
}

export const getBanners = () => {
  return api.get<GetBannersDTO>('/banners')
}