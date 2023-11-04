import * as S from './styledSidebarStepOne'
import {FC} from "react";
import {NumberedList} from "../NumberedList";
import {link} from "../SectionDocs/SectionDocs";
import {observer} from "mobx-react-lite";
import {ProfileStore} from "../../stores/ProfileStore";
import {useStore} from "../../helpers/ioc";

export const variantButton = {
    visible: {
        backgroundImage: 'linear-gradient(89.66deg, #6AC5F5 0.21%, #6F86E2 18.07%, #4E51D2 43.92%, #773DCB 69.17%, rgba(71,38,130,1) 101.47%)',
    },
}

const SidebarStepOne: FC = observer(() => {
    const {setContractStatus} = useStore(ProfileStore);

    const staticListData = [
        {
            title: 'Получить приглашение в систему ЭДО',
            description: 'Мы пришлем вам запрос на почту'
        },
        {
            title: <>Получить форму договора<br/>на подпись</>,
            description: 'Она появится во Входящих системы ЭДО'
        },
        {
            title: <>Подписать<br/>Договор</>,
            description: 'Инструкцию для получения ЭЦП мы пришлем отдельно'
        },
    ]

    return (
        <>
            <S.FirstSection>

                <S.LeftBlock>
                    <S.Title>Подписать договор на подключение к программе</S.Title>
                    <S.Download href={link('/static/template.docx')} download>Скачать шаблон</S.Download>
                    <S.GetLink
                        to={'#'}
                        whileHover={'visible'}
                        variants={variantButton}
                        onClick={() => setContractStatus('sign_process')}
                    >
                        Перейти к подписанию
                    </S.GetLink>
                </S.LeftBlock>

                <S.RightBlock>
                    <S.Picture/>
                </S.RightBlock>

            </S.FirstSection>

            <S.SecondSection>
                <S.TitleSecondSection>Что нужно сделать</S.TitleSecondSection>
                <NumberedList list={staticListData}/>
            </S.SecondSection>
        </>
    );
});

export {SidebarStepOne};
