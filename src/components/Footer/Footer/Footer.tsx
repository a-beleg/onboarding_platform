import * as S from './styled'
import {TopNavList} from "../TopNavList/TopNavList";

const Footer = () => {
    const footerData = {
        lkLinks: [
            {
                text: 'Главная',
                navigate: '/',
            },
            {
                text: 'Мероприятия',
                navigate: '/events',
            },
            {
                text: 'Вакансии',
                navigate: '/vacancies',
            },
            {
                text: 'Программы',
                navigate: '/programs',
            },
        ]
    }


    return (

        <S.Footer>
            <TopNavList navList={footerData.lkLinks}/>
            <S.MainContainer/>
        </S.Footer>
    );
};

export {Footer};
