import {provide} from "../helpers/ioc";
import {action, computed, makeAutoObservable} from "mobx";
import {Education, getUser, TUser} from "../api/user/getUser";
import {updateUser} from "../api/user/updateUser";
import {updateEducation} from "../api/user/updateVuz";
import moment from "moment";
import "moment/min/locales";
import {EventItem, getEvents} from "../api/events/getEvents";
import {regEvent} from "../api/events/regEvent";
import {getPrograms, ProgramItem} from "../api/programs/getPrograms";
import {BannerItem, getBanners} from "../api/banners/getBanners";
import {getVacancies, VacancyData} from "../api/vacancies/getVacancies";
import {formatDateTime} from "../helpers/formatDateTime";
import {getResults, Result} from "../api/results/getResults";
import {v4 as uuidv4} from 'uuid';
import {postResponse} from "../api/vacancies/postResponse";

@provide.singleton()
export class UserStore {
  user: TUser | null = null;
  education: Education | null = null;
  idToEvent: Map<string, EventItem> = new Map<string, EventItem>();
  rawUserEvents: EventItem[] = [];
  programs: ProgramItem[] = [];
  idToBanner: Map<string, BannerItem> = new Map<string, BannerItem>();
  idToVacancy: Map<string, VacancyData> = new Map<string, VacancyData>();
  idToResult: Map<string, Result> = new Map<string, Result>();
  aliasToVacanciesType: Map<string, { label: string; value: string }> = new Map<
      string,
      { label: string; value: string }
  >();
  aliasToLabelCity: Map<string, { label: string; value: string }> = new Map<
      string,
      { label: string; value: string }
  >();
  aliasToLabelDirection: Map<string, { label: string; value: string }> = new Map<
      string,
      { label: string; value: string }
  >();

  constructor() {
    makeAutoObservable(this);
  }

  @computed
  get events() {
    return Array.from(this.idToEvent.values());
  }

  @computed
  get banners() {
    return Array.from(this.idToBanner.values());
  }

  @computed
  get userEvents() {
    return this.rawUserEvents.map((event) => {
      return {
        ...event,
        date: moment(event.date_time).locale("ru").format("DD MMMM YYYY"),
        time: moment(event.date_time).format("hh:mm"),
      };
    });
  }

  @computed
  get vacancies() {
    return Array.from(this.idToVacancy.values());
  }

  @computed
  get vacanciesCities() {
    return Array.from(this.aliasToLabelCity.values());
  }

  @computed
  get vacanciesTypes() {
    return Array.from(this.aliasToVacanciesType.values());
  }

  @computed
  get vacanciesDirections() {
    return Array.from(this.aliasToLabelDirection.values());
  }

  @computed
  get getVacancyByID() {
    return (uuid: string) => this.vacancies.find(vacancy => vacancy.uuid === uuid);
  }


  @computed
  get results() {
    return Array.from(this.idToResult.values());
  }

  @action
  async fetchEvents() {
    try {
      const response = await getEvents(true);
      response.data.data.items.forEach((item) => {
        this.idToEvent.set(`${item.id}`, {
          ...item,
          date: moment(item.date_time).locale("ru").format("DD MMMM YYYY"),
          time: formatDateTime(item.date_time, true),
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async fetchPrograms() {
    try {
      const response = await getPrograms(false);
      console.log(response.data)
        this.programs = response.data.data.items;
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async regUserToEvent(event_id: string) {
    try {
        await regEvent(event_id);
      const event = this.idToEvent.get(`${event_id}`);
      if (event) {
        this.rawUserEvents.push(event);
        this.idToEvent.delete(`${event_id}`);
      }
    } catch (e) {
      console.log(e);
    }
  }


  @action
  async fetchUser() {
    try {
      const response = await getUser();
      const { birth_date, ...rest } = response.data.data;
      const formatted = moment(birth_date).format("DD.MM.YYYY");
      this.user = { birth_date: formatted, ...rest };
      this.education = response.data.data.education;
      this.rawUserEvents = response.data.data.events;
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async fetchBanners() {
    try {
      const response = await getBanners();
      response.data.data.items.forEach((banner) => {
        const data = { ...banner };
        if (data.priority === 1) {
          data.buttonText = "Посмотреть";
        }
        this.idToBanner.set(`${banner.id}`, data);
      });
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async fetchVacancies() {
    try {
      const response = await getVacancies();
      const vacancyTypes: { [key: string]: string } = {
        vacancy: "Вакансии",
        practice: "Практики",
        trainee: "Стажировки",
      };

      response.data.data.forEach((vacancy) => {
        this.idToVacancy.set(vacancy.uuid, vacancy);

        if (vacancyTypes.hasOwnProperty(vacancy.type)) {
          const label = vacancyTypes[vacancy.type];
          const value = vacancy.type;
          const typeObject = { label, value };

          if (!this.aliasToVacanciesType.has(value)) {
            this.aliasToVacanciesType.set(value, typeObject);
          }
        }

        this.aliasToLabelCity.set(vacancy.location.title, {
          label: vacancy.location.title,
          value: vacancy.location.title,
        });

        this.aliasToLabelDirection.set(vacancy.direction.title, {
          label: vacancy.direction.title,
          value: vacancy.direction.title,
        });
      });
    } catch (e) {
      console.log(e);
    }
  }


  @action
  async updateUser(data: any) {
    try {
      const response = await updateUser(data);
      const { birth_date, ...rest } = response.data.data;
      const formatted = moment(birth_date).format("DD.MM.YYYY");
      this.user = { birth_date: formatted, ...rest };
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async updateEducation(data: any) {
    try {
      const response = await updateEducation(data);
      // @ts-ignore
      this.education = response.data.data;
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async responseToVacancy(vacancyId: string) {
    try {
      const response = await postResponse(vacancyId);
        console.log(response.data)
      return response.status === 200;
    } catch (error) {
      throw error;
    }
  }

  @action async fetchResults() {
    try {
      const response = await getResults();
      response.data.forEach((result) => {
        this.idToResult.set(uuidv4(), result);
      });

    } catch (error) {
      console.error('Error fetching results:', error);
    }
  }
}