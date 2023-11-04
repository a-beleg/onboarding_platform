import * as S from './styledSidebarStepTwo'
import {FC, lazy, ReactNode, Suspense, useState} from "react";
import {Card} from "../Card";
import {BaseCardProps, StyledLinkProps} from "../../styles/s-components";
import {AnimatePresence} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {ProfileStore} from "../../stores/ProfileStore";
import {useStore} from "../../helpers/ioc";
import {hoverStyle, RegButton as Button} from "../Event/styledEvent";


const Modal = lazy(() => import('../Modal'))

const SidebarStepTwo: FC = () => {
    const [toggleBanking, setBanking] = useState(false)
    const [toggleActiveThinking, setActiveThinking] = useState(false)
    const navigate = useNavigate()
    const {setContractStatus} = useStore(ProfileStore)

    const staticCards: {
        typeCard: BaseCardProps['typeCard']
        typeLink: StyledLinkProps['type']
        customElement?: ReactNode
        isHiddenButton?: boolean
        badge: string
        title: string
        textLink: string
        pathLink: string | Function
    }[] = [
        {
            typeCard: 'main',
            badge: 'Старт карьеры',
            title: 'Вакансии для студентов',
            typeLink: 'secondary-light',
            textLink: 'Смотреть вакансии',
            pathLink: () => {
                navigate('/vacancies');
            }
        },
        {
            typeCard: 'additional',
            badge: 'Практика удаленно',
            title: 'Онлайн-курс «Банковское дело»',
            customElement:
                <div style={{
                    paddingTop: '29px',
                    color: '#fff',
                    lineHeight: '135%',
                    fontSize: '17px',
                    textAlign: 'left'
                }}>
                    Студенты получат необходимые знания для начала успешной карьеры в банковской сфере за 1 день!
                </div>,
            typeLink: 'secondary-dark',
            textLink: 'Подробнее',
            pathLink: setBanking,
            isHiddenButton: true,
        },
        {

            typeCard: 'main',
            badge: 'Для подбора вакансии',
            title: 'профтест «активное мышление»',
            customElement: <div
                style={{paddingTop: '29px', color: '#7928e0', lineHeight: '135%', fontSize: '17px', textAlign: 'left'}}>
                После прохождения курса «Банковское дело» студенты получат доступ к профтесту на основе ИИ
            </div>,
            typeLink: 'secondary-light',
            textLink: 'Подробнее',
            pathLink: setActiveThinking,
            isHiddenButton: true,
        },
    ]

    return (
        <>
            <S.FirstSection>

                <S.LeftBlock>
                    <S.Title>Ссылка отправлена.
                        Ждем&nbsp;вашего подписания</S.Title>
                    <Button
                        whileHover={hoverStyle}
                        whileTap={{scale: .9,}}
                        onClick={() => setContractStatus('signed')}>
                        Документы подписаны
                    </Button>
                </S.LeftBlock>

                <S.RightBlock>
                    <S.Picture/>
                </S.RightBlock>

            </S.FirstSection>

            <S.SecondSection>
                <S.WhatIsWeOfferHeading>Что мы предлагаем вашим студентам</S.WhatIsWeOfferHeading>
                <S.ListCard>
                    {staticCards.map((card, index) => (
                        <S.ListItem key={index}>
                            <Card card={card}/>
                        </S.ListItem>
                    ))}
                </S.ListCard>
            </S.SecondSection>
            <AnimatePresence>
                {(toggleActiveThinking) &&
                    <Suspense>
                        <Modal clickFunc={setActiveThinking} typeModal={'active-thinking'}/>
                    </Suspense>
                }
                {(toggleBanking) &&
                    <Suspense>
                        <Modal clickFunc={setBanking} typeModal={'banking'}/>
                    </Suspense>
                }
            </AnimatePresence>
        </>
    )
        ;
};

export {SidebarStepTwo};
