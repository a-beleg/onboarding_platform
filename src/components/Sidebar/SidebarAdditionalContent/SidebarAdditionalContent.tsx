import * as S from './styledSidebarAdditionalContent'
import {useStore} from '../../../helpers/ioc';
import {ProfileStore} from '../../../stores/ProfileStore';
import {observer} from 'mobx-react-lite';
import {useNavigate} from "react-router-dom";

const SidebarAdditionalContent = observer(() => {

    const {userPic, clear} = useStore(ProfileStore);
    const navigate = useNavigate();

    const exit = () => {
        clear();
        localStorage.clear();
        navigate('/');
        window.location.reload();
    }

    return (
        <S.AdditionalContent>
            <S.PersonalAccount>
                <S.Anchor
                    to={'/profile'}>
                    <S.Icon userpicUrl={userPic || ''}/>
                    Личный кабинет
                </S.Anchor>
            </S.PersonalAccount>
            <S.Exit>
                <S.Anchor onClick={exit} to={'/'}>Выйти</S.Anchor>
            </S.Exit>
        </S.AdditionalContent>
    );
});

export {SidebarAdditionalContent};
