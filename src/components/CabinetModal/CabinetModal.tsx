import * as S from './style';
import {DownloadButton as Button} from '../../pages/results/styledResults';
import useButtonHover from '../../hooks/useButtonHoover';
import React, {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useProfileInitialization} from '../../hooks/useProfileInitialization';

type Cabinet = {
    cabinet: string;
    title: string;
}

const buttons: Cabinet[] = [
    {cabinet: "/lk", title: "Студент"},
    {cabinet: "/lk-university", title: "Университет"}
];

const CabinetModal: FC = () => {
    const {handleButtonHover, handleButtonLeave} = useButtonHover();
    const navigate = useNavigate();
    const {initializeProfile} = useProfileInitialization();

    const handleSubmit = (button: Cabinet) => {
        localStorage.setItem('cabinet', button.cabinet);
        navigate(button.cabinet === "/lk" ? "/profile" : "/");
    };


    useEffect(() => {
        const storedCabinet = localStorage.getItem('cabinet');
        if (storedCabinet) {
            initializeProfile();
        }
    }, [initializeProfile]);

    return (
        <S.StyledOverlay clickFunc={() => {}}>
            <S.Wrapper>
                <S.Title>Войти как:</S.Title>
                <S.ButtonsWrapper>
                    {buttons.map((button) => (
                        <Button
                            key={button.cabinet}
                            width="180px"
                            whileTap={{scale: 0.9}}
                            onMouseEnter={handleButtonHover}
                            onMouseLeave={handleButtonLeave}
                            onClick={() => handleSubmit(button)}
                        >
                            {button.title}
                        </Button>
                    ))}
                </S.ButtonsWrapper>
            </S.Wrapper>
        </S.StyledOverlay>
    );
};

export default CabinetModal;