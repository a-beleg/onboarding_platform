import {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {FC} from 'react';
import {observer} from 'mobx-react-lite';
import CabinetModal from './components/CabinetModal';
import {useStore} from "./helpers/ioc";
import {ProfileStore} from "./stores/ProfileStore";

const Auth = lazy(() => import('./pages/auth'));
const StepOne = lazy(() => import('./pages/steps/step-one'));
const Profile = lazy(() => import('./pages/profile'));
const Events = lazy(() => import('./pages/events/events'));
const Programs = lazy(() => import('./pages/programs/programs'));
const Desktop = lazy(() => import('./pages/desktop/desktop'));
const Vacancies = lazy(() => import('./pages/vacancies/vacancies'));
const FAQ = lazy(() => import('./pages/faq/faq'));
const VacancyPage = lazy(() => import('./pages/vacancies/vacancy'));
const Results = lazy(() => import('./pages/results/results'))

const App: FC = observer(() => {

    const {userModal} = useStore(ProfileStore);

    if (!userModal) {
        return <CabinetModal/>;
    }

    return (
        <>
            <Suspense>
                <Routes>
                    <Route path='/' element={<StepOne/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/auth/token' element={<Auth/>}/>
                    <Route path='/logout' element={<Auth/>}/>
                    <Route path='/desktop' element={<Desktop/>}/>
                    <Route path='/events' element={<Events/>}/>
                    <Route path='/programs' element={<Programs/>}/>
                    <Route path='/vacancies' element={<Vacancies/>}/>
                    <Route path='/vacancy/:uuid' element={<VacancyPage/>}/>
                    <Route path='/faq' element={<FAQ/>}/>
                    <Route path='/results' element={<Results/>}/>
                </Routes>
            </Suspense>
        </>
    );
});

export default App;
