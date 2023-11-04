import * as S from './styledSidebarNav'
import {theme} from "../../../styles/theme";
import {useState} from "react";
import {useLocation} from 'react-router-dom'


type NavListProps = {
    className?: string;
}

export const sidebarNavList = localStorage.getItem('cabinet') === '/lk' ?
    [
        {
            text: 'Рабочий стол',
            textButtonSteps: 'Перейти',
            paragraphSteps: 'Актуальные программы и ближайшие мероприятия',
            isActive: true,
            path: '/desktop',
            icon: theme.icons.Desktop,
        },
        {
            text: 'Программы',
            textButtonSteps: 'Перейти',
            paragraphSteps: 'Доступные программы для развития навыков',
            isActive: true,
            path: '/programs',
            icon: theme.icons.Programs,
        },
        {
            text: 'Результаты',
            textButtonSteps: 'Перейти',
            paragraphSteps: 'Результаты сравнительного тестирования навыков',
            isActive: true,
            path: '/results',
            icon: theme.icons.Results,
        },
        {
            text: 'Вакансии',
            textButtonSteps: 'Перейти',
            paragraphSteps: 'Вакансии от партнеров проекта',
            isActive: true,
            path: '/vacancies',
            icon: theme.icons.Vacancies,
        },
        {
            text: 'Мероприятия',
            textButtonSteps: 'Перейти',
            paragraphSteps: 'Мероприятия от партнеров проекта',
            isActive: true,
            path: '/events',
            icon: theme.icons.Events,
        },
        {
            text: 'Вопрос ответ',
            textButtonSteps: 'Перейти',
            paragraphSteps: 'Остались вопросы? Мы постарались ответить на самые частые из них',
            isActive: true,
            path: '/faq',
            icon: theme.icons.FAQ,
        },
    ]
    :
    [
        {
            text: 'Кабинет вуза',
            textButtonSteps: 'Заполнить',
            paragraphSteps: 'Здесь вы сможете заполнить информацию о вашем вузе, добавить администраторов и скачать договор',
            isActive: true,
            path: '/profile',
            icon: theme.icons.Desktop,
        },
        {
            text: 'Заявки',
            textButtonSteps: 'Создать заявку',
            paragraphSteps: 'Вы сможете оставлять заявки для обучения ваших студентов и для регистрации их на мероприятия',
            isActive: false,
            path: '#',
            icon: theme.icons.Applications,
        },
        {
            text: 'Отчеты по студентам',
            textButtonSteps: 'Подробнее',
            paragraphSteps: 'Здесь будут храниться все отправленные вами документы с сортировкой по студентам',
            isActive: false,
            path: '#',
            icon: theme.icons.Reports
        },
        {
            text: 'Аналитика',
            textButtonSteps: 'Подробнее',
            paragraphSteps: 'Отслеживайте прогресс ваших студентов, статусы и форматы обучения',
            isActive: false,
            path: '#',
            icon: theme.icons.Analytics,
        },
        {
            text: 'Доступные программы',
            textButtonSteps: 'Подробнее',
            paragraphSteps: 'Готовые программы для развития студента и предложения по индивидуальным программам',
            isActive: false,
            path: '#',
            icon: theme.icons.Programs,
        },
    ]
const SidebarNav = ({className}: NavListProps) => {
    const location = useLocation();
    const [selectedItem, selectItem] = useState(location.pathname);

    const handleClick = (navItemPath: string, navItemIsActive: boolean) => {
        if (navItemIsActive) {
            selectItem(navItemPath);
        }
    };

    return (
        <S.Nav className={className}>
            <S.NavList>
                {sidebarNavList.map((navItem, index) => {
                    if (index === 0 && localStorage.getItem('cabinet') !== '/lk') {
                        return null;
                    }

                    return (
                        <S.NavItem key={index}>
                            <S.Anchor
                                onClick={() => handleClick(navItem.path, navItem.isActive)}
                                selected={selectedItem === navItem.path}
                                to={navItem.isActive ? navItem.path : ''}
                                icon={navItem.icon}
                                disabled={!navItem.isActive}
                            >
                                {navItem.text}
                            </S.Anchor>
                        </S.NavItem>
                    );
                })}
            </S.NavList>
        </S.Nav>
    );
};

export {SidebarNav};