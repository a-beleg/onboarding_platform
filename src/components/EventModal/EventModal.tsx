import * as S from './style';

type Props = {
    close: () => void;
}

const EventModal = ({close}: Props) => {
    return(
        <S.StyledOverlay clickFunc={close}>
            <S.Wrapper>
                <S.Image/>
                <S.Title>Вы успешно зарегистрировались <br/> на мероприятие</S.Title>
                <S.ButtonClose onClick={close}/>
            </S.Wrapper>
        </S.StyledOverlay>
    );
}

export default EventModal;