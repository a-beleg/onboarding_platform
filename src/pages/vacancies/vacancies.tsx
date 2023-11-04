import React, {FC, useMemo, useState} from "react";
import {LayoutWithSidebar} from "../../components/LayoutWithSidebar";
import {Header} from "../styledPage";
import {SectionTitle} from "../../ui/Typography";
import {useStore} from "../../helpers/ioc";
import {UserStore} from "../../stores/UserStore";
import {observer} from "mobx-react-lite";
import VacanciesFilters from "../../components/VacanciesFilters/VacanciesFilters";
import SectionTabs from "../../components/SectionTabs/SectionTabs";
import * as S from "../../components/SectionTabs/styledSectionTabs";
import {useNavigate} from "react-router-dom";
import {VacancyData} from "../../api/vacancies/getVacancies";

const Vacancies: FC = observer(() => {
    const {vacancies, vacanciesCities, vacanciesTypes, vacanciesDirections} = useStore(UserStore);

    const [filterCity, setFilterCity] = useState<{ label: string; value: string }[]>([]);
    const [filterDirection, setFilterDirection] = useState<{ label: string; value: string }[]>([]);

    const navigate = useNavigate();

    const citiesValues = useMemo(() => filterCity.map(city => city.label), [filterCity]);
    const directionsValues = useMemo(() => filterDirection.map(direction => direction.label), [filterDirection]);

    const getFilteredVacancies = (type: string) => {
        return vacancies.filter((vacancy: VacancyData) => {
            if (type === vacancy.type) {
                const cityFilter = !citiesValues.length || citiesValues.includes(vacancy.location.title);
                const directionFilter = !directionsValues.length || directionsValues.includes(vacancy.direction.title);
                return cityFilter && directionFilter;
            }
            return false;
        });
    };

    const navigateToVacancy = (vacancy: VacancyData) => {
        const {uuid} = vacancy;
        navigate(`/vacancy/${uuid}`);
    };

    const tabs = vacanciesTypes.map(type => {
        const filteredVacancies = getFilteredVacancies(type.value);

        const vacanciesContent = filteredVacancies.map(vacancy => (
            <S.VacancyWrapper key={vacancy.uuid}>
                <S.Vacancy>
                    <S.VacancyTitle onClick={() => navigateToVacancy(vacancy)}>
                        {vacancy.title}
                    </S.VacancyTitle>
                    <S.Title>{vacancy.location.title}</S.Title>
                    <S.Title>{vacancy.experience.title}</S.Title>
                </S.Vacancy>
            </S.VacancyWrapper>
        ));

        const badgeVacanciesCount = filteredVacancies.length;
        const badgeCitiesCount = Array.from(new Set(filteredVacancies.map(vacancy => vacancy.location.title))).length;

        const badges = (
            <S.BadgesWrapper>
                <S.Badge>
                    <S.Title>Вакансий:</S.Title>
                    <S.Content>{badgeVacanciesCount}</S.Content>
                </S.Badge>
                <S.Badge>
                    <S.Title>Городов:</S.Title>
                    <S.Content>{badgeCitiesCount}</S.Content>
                </S.Badge>
            </S.BadgesWrapper>
        );

        return {
            label: type.label,
            key: type.value,
            tabContent: (
                <>
                    {badges}
                    {vacanciesContent}
                </>
            ),
        };
    });

    return (
        <LayoutWithSidebar>
            <Header>
                <SectionTitle>Вакансии</SectionTitle>
            </Header>
            <SectionTabs
                tabs={tabs}
                filters={
                    <VacanciesFilters
                        cities={vacanciesCities}
                        directions={vacanciesDirections}
                        handleChangeCity={setFilterCity}
                        handleChangeCategory={setFilterDirection}
                    />
                }
            />
        </LayoutWithSidebar>
    );
});

export default Vacancies;
