import React, {FC, useRef} from "react";
import {observer} from "mobx-react-lite";
import {saveAs} from 'file-saver';
import {Document, Image, Page, pdf} from '@react-pdf/renderer';
import html2canvas from 'html2canvas';

import {LayoutWithSidebar} from "../../components/LayoutWithSidebar";
import {Header} from "../styledPage";
import {SectionTitle} from "../../ui/Typography";
import {useStore} from "../../helpers/ioc";
import {UserStore} from "../../stores/UserStore";
import {Colors} from "../../consts/colors";
import DownloadIcon from "../../components/svg_components/Results/DownloadIcon";
import SectionTabs from "../../components/SectionTabs/SectionTabs";
import {Argumentation} from "../../api/results/getResults";
import * as I from "../../components/svg_components/Results/";
import * as S from "./styledResults";
import useButtonHoover from "../../hooks/useButtonHoover";

type Skill = {
    skillSection: string;
    icon: JSX.Element;
    skills: Argumentation[];
};

const Results: FC = observer(() => {
    const {results} = useStore(UserStore);
    const result = results[0];
    const personal: Skill[] = [
        {
            skillSection: "Инициативность",
            icon: <I.Initiative/>,
            skills: [result.generation_of_ideas, result.independence_in_decision_making],
        },
        {
            skillSection: "Открытость к изменениям",
            icon: <I.Openness/>,
            skills: [
                result.operational_adaptability,
                result.the_speed_of_understanding_an_unfamiliar_task,
                result.perception_of_negative_feedback,
            ],
        },
        {
            skillSection: "Ориентация на результат",
            icon: <I.Result/>,
            skills: [result.priority_of_result_or_process, result.responsibility_fo_decisions],
        },
        {
            skillSection: "Командная работа",
            icon: <I.Teamwork/>,
            skills: [
                result.attitude_to_the_opinion_of_the_team,
                result.establishing_contacts,
                result.position_in_the_relationship_with_the_client,
            ],
        },
        {
            skillSection: "Коммуникация",
            icon: <I.Communication/>,
            skills: [
                result.focusing_on_the_flow_of_information,
                result.discussion_management,
                result.logics,
                result.argumentation,
            ],
        },
    ];
    const managerial: Skill[] = [
        {
            skillSection: "Лидерство",
            icon: <I.Leadership/>,
            skills: [
                result.attitude_towards_conflicts,
                result.emotionality_and_the_transmission_of_emotions,
                result.team_care,
            ],
        },
        {
            skillSection: "Планирование и организация",
            icon: <I.Planning/>,
            skills: [
                result.routine_prioritization,
                result.organizing_your_time,
                result.attention_to_detail,
            ],
        },
        {
            skillSection: "Совершенствование деятельности",
            icon: <I.Improvement/>,
            skills: [result.reflection],
        },
        {
            skillSection: "Управление задачами",
            icon: <I.TaskManagement/>,
            skills: [result.following_the_plan],
        },
        {
            skillSection: "Стратегическое видение",
            icon: <I.Vision/>,
            skills: [result.strategic_objectivity],
        },
    ];
    const SkillsTab: React.FC<{ skills: Skill[], numSkillsToRender?: number, noQuote?: boolean }> =
        ({
             skills,
             numSkillsToRender,
             noQuote
         }) => {
            const MAX_WORDS_PER_LINE = 7;
            const insertLineBreaks = (text: string) => {
                const words = text.split(" ");
                const lines = [];

                for (let i = 0; i < words.length; i += MAX_WORDS_PER_LINE) {
                    const line = words.slice(i, i + MAX_WORDS_PER_LINE).join(" ");
                    lines.push(line);
                }

                return lines.join("<br>");
            };

            const renderedSkills = numSkillsToRender ? skills.slice(0, numSkillsToRender) : skills;

            return (
                <>
                    {!noQuote && (
                        <S.Quote>
                            Мышление изменяется под влиянием среды и работы над собой. Поэтому если что-то хочется
                            изменить,
                            а
                            что-то сохранить – нужно работать над собой. Речь про работу с информацией, особенно новой.
                            Мы
                            не
                            рассматриваем бытовые аспекты, а также всё сказанное не относится к навыкам, доведенным до
                            автоматизма и зависящим
                            от опыта и экспертизы.
                        </S.Quote>
                    )}
                    <S.TabWrapper>
                        {renderedSkills.map((section, index) => (
                            <S.Section key={index}>
                                <S.SectionLeft>
                                    <S.SectionTitle>{section.skillSection}</S.SectionTitle>
                                    {section.icon}
                                </S.SectionLeft>
                                <S.SectionRight>
                                    {section.skills.map((skill, skillIndex) => (
                                        <S.SkillsWrapper key={skillIndex}>
                                            <S.SkillTitle>{skill.title}</S.SkillTitle>
                                            <S.SkillDescription
                                                dangerouslySetInnerHTML={{__html: insertLineBreaks(skill.description)}}
                                            />
                                        </S.SkillsWrapper>
                                    ))}
                                </S.SectionRight>
                            </S.Section>
                        ))}
                    </S.TabWrapper>
                </>
            );
        };

    const skills = [
        {
            label: 'Личностные навыки',
            key: 'personal',
            tabContent: <SkillsTab skills={personal}/>,
        },
        {
            label: 'Управленческие навыки',
            key: 'managerial',
            tabContent: <SkillsTab skills={managerial}/>,
        },
    ];

    const {iconColor, handleButtonHover, handleButtonLeave} = useButtonHoover();


    const pdfRefOne = useRef<HTMLDivElement>(null);
    const pdfRefTwo = useRef<HTMLDivElement>(null);

    const generatePDF = async () => {
        const pageOne = pdfRefOne.current;
        const pageTwo = pdfRefTwo.current;

        if (pageOne && pageTwo) {
            const firstCanvas = await html2canvas(pageOne, {scale: 2});
            const secondCanvas = await html2canvas(pageTwo, {scale: 2});

            const firstImage = firstCanvas.toDataURL('image/png');
            const secondImage = secondCanvas.toDataURL('image/png');

            const Report = () => (
                <Document>
                    {firstImage && (
                        <Page style={S.pdfStyles.page}>
                            <Image src={firstImage}/>
                        </Page>
                    )}
                    {secondImage && (
                        <Page style={S.pdfStyles.page}>
                            <Image src={secondImage}/>
                        </Page>
                    )}
                </Document>
            );

            const pdfBlob = await pdf(<Report/>).toBlob();
            saveAs(pdfBlob, 'results.pdf');
        }
    };

    return (
        <LayoutWithSidebar>
            <Header>
                <SectionTitle>Результаты сравнительного тестирования навыков</SectionTitle>
            </Header>
            {result ? (
                <S.TopWrapper>
                    <I.Illustration/>
                    <S.Wrapper>
                        <S.GridItem>
                            <S.TopTitle>Лучшие условия для вашего мышления</S.TopTitle>
                            <S.TopParagraph>{result.the_best_conditions_for_your_thinking_1}</S.TopParagraph>
                        </S.GridItem>
                        <S.GridItem>
                            <S.TopTitle color={Colors.CommonPrimaryDark100}>Худшие условия для вашего
                                мышления</S.TopTitle>
                            <S.TopParagraph>{result.the_worst_conditions_for_your_thinking_1}</S.TopParagraph>
                        </S.GridItem>
                        <S.GridItem>
                            <S.TopTitle color={Colors.AccentBusinessProcessPrimary}>
                                Какие вопросы вы должны задать на собеседовании?
                            </S.TopTitle>
                            <S.TopParagraph>{result.what_questions_should_you_ask_in_an_interview_1_1}</S.TopParagraph>
                        </S.GridItem>
                        <S.DownloadButton
                            target="_blank"
                            whileTap={{scale: 0.9}}
                            onMouseEnter={handleButtonHover}
                            onMouseLeave={handleButtonLeave}
                            onClick={generatePDF}
                        >
                            Скачать результаты
                            <DownloadIcon color={iconColor}/>
                        </S.DownloadButton>
                    </S.Wrapper>
                </S.TopWrapper>
            ) : (
                <div>Нет результатов</div>
            )}
            <SectionTabs tabs={skills} margin="0" padding="0" key="tabs"/>
            <S.PdfWrapper ref={pdfRefOne}>
                <S.PdfTitle>
                    <SectionTitle>Результаты сравнительного тестирования навыков</SectionTitle>
                </S.PdfTitle>
                <S.TopWrapper>
                    <I.Illustration/>
                    <S.Wrapper>
                        <S.GridItem>
                            <S.TopTitle>Лучшие условия для вашего мышления</S.TopTitle>
                            <S.TopParagraph>{result.the_best_conditions_for_your_thinking_1}</S.TopParagraph>
                        </S.GridItem>
                        <S.GridItem>
                            <S.TopTitle color={Colors.CommonPrimaryDark100}>Худшие условия для вашего
                                мышления</S.TopTitle>
                            <S.TopParagraph>{result.the_worst_conditions_for_your_thinking_1}</S.TopParagraph>
                        </S.GridItem>
                        <S.GridItem>
                            <S.TopTitle color={Colors.AccentBusinessProcessPrimary}>
                                Какие вопросы вы должны задать на собеседовании?
                            </S.TopTitle>
                            <S.TopParagraph>{result.what_questions_should_you_ask_in_an_interview_1_1}</S.TopParagraph>
                        </S.GridItem>
                    </S.Wrapper>
                </S.TopWrapper>
                <S.PdfQoute>
                    Мышление изменяется под влиянием среды и работы над собой. Поэтому если что-то хочется изменить, а
                    что-то сохранить – нужно работать над собой. Речь про работу с информацией, особенно новой. Мы не
                    рассматриваем бытовые аспекты, а также всё сказанное не относится к навыкам, доведенным до
                    автоматизма и зависящим от опыта и экспертизы.
                </S.PdfQoute>
                <S.PdfCompetentions>Управленческие компетенции</S.PdfCompetentions>
                <SkillsTab noQuote={true} skills={managerial}/>
            </S.PdfWrapper>
            <S.PdfWrapper ref={pdfRefTwo}>
                <S.PdfCompetentions>Личностные компетенции</S.PdfCompetentions>
                <SkillsTab skills={personal} noQuote={true}/>
            </S.PdfWrapper>
        </LayoutWithSidebar>
    );
});

export default Results;