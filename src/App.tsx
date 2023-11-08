import React, {lazy, Suspense} from 'react';
import {FC} from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from "./helpers/ioc";
import {ProfileStore} from "./stores/ProfileStore";
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./consts/routes";
import Preloader, {textToShow} from "./components/Preloader/Preloader";

const App: FC = observer(() => {

    const {userModal} = useStore(ProfileStore);
    const Modal = lazy(() => import('./components/CabinetModal/CabinetModal'));

    return (
        <Suspense fallback={<Preloader textToShow={textToShow}/>}>
            {!userModal ? <Modal/> : (
                <Routes>
                    {routes.map((route, key) => (
                        <Route key={key} path={route.path} element={<route.element/>}/>
                    ))}
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            )}
        </Suspense>

    );
});

export default App;
