import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import * as I from "../svg_components/VacancyIllustration";
import {ArrowBack} from "../svg_components/ArrowBack";
import {VacancyData} from "../../api/vacancies/getVacancies";
import * as S from "./StyledVacancy";
import {useStore} from "../../helpers/ioc";
import {UserStore} from "../../stores/UserStore";

type VacancyProps = {
    vacancy: VacancyData;
};

type IllustrationMap = {
    [key in VacancyData["type"]]: FC<React.SVGProps<SVGSVGElement>>;
};

const illustrationMap: IllustrationMap = {
    vacancy: I.Vacancy,
    trainee: I.Trainee,
    practice: I.Practice,
};

export const Vacancy: FC<VacancyProps> = ({vacancy}) => {
    const navigate = useNavigate();
    const {responseToVacancy} = useStore(UserStore);

    const handleResponse = async (uuid: string) => {
        const result = await responseToVacancy(uuid);
        setInactive(result ?? false);
    };

    const points = [
        {category: "Чем предстоит заниматься", data: vacancy.responsibilities},
        {category: "Наши ожидания", data: vacancy.skills},
        {category: "Мы предлагаем", data: vacancy.offers},
    ].filter(({data}) => data && data.trim().length > 0);

    if (vacancy.type === "trainee") {
        points.splice(1, 1);
    }

    const [inactive, setInactive] = React.useState(false);
    const Illustration = illustrationMap[vacancy.type];

    return (
        <S.Vacancy>
            <S.VacancyHeader>
                <S.VacancyWrapper>
                    <S.BackButton onClick={() => navigate("/vacancies")}>
                        <ArrowBack/>К вакансиям
                    </S.BackButton>
                    <S.Title>{vacancy.title}</S.Title>
                    <S.Location>
                        Локация: <S.Label>{vacancy.location.title}</S.Label>
                    </S.Location>
                    {localStorage.getItem('cabinet') === '/lk' ? <S.ResponseButton
                        disabled={inactive}
                        inactive={inactive}
                        onClick={() => handleResponse(vacancy.uuid)}
                        whileTap={{scale: 0.9}}
                    >
                        {inactive ? "Вы откликнулись" : "Откликнуться"}
                    </S.ResponseButton> : null}

                </S.VacancyWrapper>
                <S.IllustrationWrapper>
                    <Illustration/>
                </S.IllustrationWrapper>
            </S.VacancyHeader>
            <S.VacancyBody>
                <S.Description>{vacancy.description}</S.Description>
                {points.map(({category, data}, index) => (
                    <S.Paragraph key={index}>
                        <S.Paragraph>{category}</S.Paragraph>
                        {data
                            .split("\r\n")
                            .map((point, pointIndex) => point.trim())
                            .filter(Boolean)
                            .map((point, pointIndex) => (
                                <S.Point key={pointIndex}>{point}</S.Point>
                            ))}
                    </S.Paragraph>
                ))}
            </S.VacancyBody>
        </S.Vacancy>
    );
};