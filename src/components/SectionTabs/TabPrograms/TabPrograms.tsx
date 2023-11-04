import React, {FC} from 'react';
import {ProgramItem} from "../../../api/programs/getPrograms";
import * as S from './styledTabPrograms'
import {observer} from "mobx-react-lite";
import {useStore} from "../../../helpers/ioc";
import {UserStore} from "../../../stores/UserStore";
import {EventTitle, hoverStyle} from "../../Event/styledEvent";
import {AlertWrapper} from "../../../pages/styledPage";

type ProgramsProps = {
    programs: ProgramItem[];
    onClick?: (data: any) => Promise<void>;
}

const TabPrograms: FC<ProgramsProps> = observer(({programs}) => {

    const {user} = useStore(UserStore);

    if (user && Array.isArray(user.courses) && user.courses.length > 0) {
        programs = user.courses;
    }

    return (
        programs.length > 0 ?
            (<>
                {programs.map(item => (
                        <S.Course key={item.id} width={'100%'}>
                            <S.HorizontalCard amount={1}>
                                <S.Image
                                    img={`${item.image}`}/>
                                <S.Info>
                                    <S.Badge>открыт доступ</S.Badge>
                                    <S.ProgramTitle>{item.title}</S.ProgramTitle>
                                    <S.ProgramDescription>База для работы в банке за 1 день. Принять участие может студент
                                        любого курса</S.ProgramDescription>
                                    <S.ProgramButton
                                        href={item.wt_link}
                                        target="_blank"
                                        whileHover={hoverStyle}
                                        whileTap={{scale: .9,}}>
                                        Начать
                                    </S.ProgramButton>
                                </S.Info>
                            </S.HorizontalCard>
                        </S.Course>
                    )
                )}
            </>) : (
                <AlertWrapper>
                    <EventTitle>
                        Нет программ доступных для регистрации
                    </EventTitle>
                </AlertWrapper>
            )

    );
});

export default TabPrograms;