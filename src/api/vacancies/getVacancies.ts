import {api} from "../axiosWraper";

export type Category = {
  title: string;
  description: string;
}

export type Direction = {
  title: string;
}

export type Experience = {
  title: string;
}

export type Location = {
  title: string;
}

export type VacancyData = {
  uuid: string;
  title: string;
  description: string;
  salary: string;
  category: Category;
  direction: Direction;
  experience: Experience;
  location: Location;
  responsibilities: string;
  offers: string;
  skills: string;
  manager_name: string;
  manager_phone: string;
  manager_email: string;
  address: string;
  link: string;
  type:string;
}

export type GetVacanciesDTO = {
  success: boolean;
  data: VacancyData[];
  errors?: any;
}

export const getVacancies = () => {
  return api.get<GetVacanciesDTO>('/vacancies')
}

