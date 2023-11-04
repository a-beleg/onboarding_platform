import React, {FC, useEffect} from "react";
import {LayoutWithSidebar} from "../../components/LayoutWithSidebar";
import {useStore} from "../../helpers/ioc";
import {UserStore} from "../../stores/UserStore";
import {observer} from "mobx-react-lite";
import {useNavigate, useParams} from "react-router-dom";
import {Vacancy} from "../../components/Vacancy/Vacancy";

const VacancyPage: FC = observer(() => {

    const {getVacancyByID} = useStore(UserStore);
    const {uuid} = useParams<{ uuid?: string }>();
    const vacancy = uuid ? getVacancyByID(uuid) : null;
    const navigate = useNavigate();

    useEffect(() => {
        if (!vacancy) {
            navigate("/vacancies");
        }
    }, [navigate, vacancy]);

    if (!vacancy) {
        return null;
    }

    return (
        <LayoutWithSidebar>
            <Vacancy vacancy={vacancy}/>
        </LayoutWithSidebar>
    );
});

export default VacancyPage;