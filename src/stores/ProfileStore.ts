import {lazyInject, provide} from "../helpers/ioc";
import {action, computed, makeAutoObservable} from "mobx";
import {getUsers, User} from "../api/vuz/getUsers";
import {deleteUser} from "../api/vuz/deleteUser";
import {getUniversity, University} from "../api/vuz/getUniversity";
import {SearchingUniversity, searchUniversities} from "../api/vuz/searchUniversities";
import {getProfile, ProfileData} from "../api/profile/getProfile";
import {UserStore} from "./UserStore";


@provide.singleton()
export class ProfileStore {

    @lazyInject(UserStore)
    protected userStore: UserStore

    constructor() {
        makeAutoObservable(this);
    }


    idToUser: Map<string, User> = new Map<string, User>();
    university: University | null = null;
    profile: ProfileData | null = null;
    userPic: string | undefined = '';
    userModal: string | null | undefined;
    contractStatus: string = '';

    @computed
    get users() {
        return Array.from(this.idToUser.values());
    }

    @action
    setContractStatus = (status: string) => {
        this.contractStatus = status
    }

    @action
    fetchUsers = async () => {
        let response;
        try {
            response = await getUsers();
        } catch (e) {
            console.log(e);
            return;
        }
        response.data.data.forEach((user) => {
            this.idToUser.set(user.id, user);
        });
    }


    @action
    deleteUser = async (id: string) => {
        try {
            await deleteUser(id);
        } catch (e) {
            console.log(e);
            return;
        }
        this.idToUser.delete(id);
    }

    @action
    fetchUniversity = async () => {
        let response;
        try {
            response = await getUniversity();
        } catch (e) {
            console.log(e);
            return;
        }
        this.university = response.data.data;
        return
    }

    idToUniversities: Map<any, any> = new Map();

    @computed
    get universitiesList(): SearchingUniversity[]{
        return Array.from(this.idToUniversities.values());
    }

    @action
    fetchUniversitiesSearch = async (v: string) => {
        let response: any;
        try{
            response = await searchUniversities(v)
        }catch(reason){
            console.warn('Not available universities');
            return;
        }

        if(!response.data){
            return
        }

        this.idToUniversities.clear();
        response.data.data.items.forEach((item: University) => {
            this.idToUniversities.set(item.id, item)
        })
    }

    @action
    fetchProfile = async () => {
        let response;
        try {
            response = await getProfile();
        } catch (e) {
            console.log(e);
            return;
        }

        this.profile = response.data;
        this.userPic = response.data.data.photo
    }

    @action
    clear = () => {
        this.idToUser.clear();
        this.university = null;
    }

    @action
    initiateStore = async (cabinet: string | null) => {
        this.userModal = cabinet

        if (localStorage.getItem('cabinet') === '/lk') {

            await Promise.all([
                this.userStore.fetchUser(),
                this.userStore.fetchEvents(),
                this.userStore.fetchPrograms(),
                this.userStore.fetchBanners(),
                this.userStore.fetchVacancies(),
                this.userStore.fetchResults(),
            ])

            this.userPic = this.userStore.user?.photo
            return
        }

        await Promise.all([
            this.fetchProfile(),
            this.fetchUsers(),
            this.fetchUniversity(),
            this.userStore.fetchVacancies(),
        ])

    }
}