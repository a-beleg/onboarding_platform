import * as S from './style';
import UserForm from '../UserForm';

type Props = {
    close: () => void;
    onSubmit: () => void;
}

const ModalUser = ({close, onSubmit}: Props) => {
    const handleSubmit = () => {
        onSubmit();
        close();
    }
    return(
        <S.StyledOverlay clickFunc={close}>
            <S.Wrapper>
                <S.Title>
                    Добавление пользователя
                </S.Title>
                <S.ButtonClose onClick={close}>
                    Закрыть
                </S.ButtonClose>
                <UserForm onSubmit={handleSubmit} />
            </S.Wrapper>
        </S.StyledOverlay>
    );
}

export default ModalUser;