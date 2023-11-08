import {lazy} from "react";

const APP = '/';
const PROFILE = '/profile';
const EVENTS = '/events';
const PROGRAMS = '/programs';
const DESKTOP = '/desktop';
const VACANCIES = '/vacancies';
const FAQ = '/faq';
const VACANCY = '/vacancy/:uuid';
const RESULTS = '/results';


const StepOne = lazy(() => import('../pages/steps/step-one'));
const Profile = lazy(() => import('../pages/profile'));
const Events = lazy(() => import('../pages/events/events'));
const Programs = lazy(() => import('../pages/programs/programs'));
const Desktop = lazy(() => import('../pages/desktop/desktop'));
const Vacancies = lazy(() => import('../pages/vacancies/vacancies'));
const Faq = lazy(() => import('../pages/faq/faq'));
const VacancyPage = lazy(() => import('../pages/vacancies/vacancy'));
const Results = lazy(() => import('../pages/results/results'));


export const routes = [
    {
        path: APP,
        element: StepOne,
    },
    {
        path: PROFILE,
        element: Profile,
    },
    {
        path: EVENTS,
        element: Events,
    },
    {
        path: PROGRAMS,
        element: Programs,
    },
    {
        path: DESKTOP,
        element: Desktop,
    },
    {
        path: VACANCIES,
        element: Vacancies,
    },
    {
        path: FAQ,
        element: Faq,
    },
    {
        path: VACANCY,
        element: VacancyPage,
    },
    {
        path: RESULTS,
        element: Results,
    },
]