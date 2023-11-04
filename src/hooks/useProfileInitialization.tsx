import {useEffect, useCallback} from "react";
import {useStore} from "../helpers/ioc";
import {ProfileStore} from "../stores/ProfileStore";

export const useProfileInitialization = () => {
    const {initiateStore, userModal} = useStore(ProfileStore);
    const cabinet = localStorage.getItem('cabinet');

    const initializeProfile = useCallback(() => {
        initiateStore(cabinet);
    }, [initiateStore, cabinet]);

    useEffect(() => {
        if (cabinet) {
            initializeProfile();
        }
    }, [userModal, cabinet, initializeProfile]);

    return {initializeProfile};
};
