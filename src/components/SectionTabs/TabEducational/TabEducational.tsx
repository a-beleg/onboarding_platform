import * as S from "../../SectionUser/styledSectionUser"
import React, {FC, useState} from "react";
import {Education} from "../../../api/user/getUser";
import SectionEditVuz from "../../SectionEditVuz/SectionEditVuz";

type EducationProps = {
    education: Education | null,
    onUpdate: (data: any) => Promise<void>;
}

const TabEducational: FC<EducationProps> = ({education, onUpdate}) => {

    const [editing, setEditing] = useState(false);

    if (!education) {
        return <></>;
    }

    return (
        <S.TabWrapper>
            <S.EditButton t={'-55px'} r={'-3px'} onClick={() => setEditing(!editing)}/>
            {editing ?
                <SectionEditVuz onUpdate={onUpdate} education={education}/>
                :
                <S.Container>
                    <S.Row >
                        <S.Item isLineBreak={true}>
                            <S.Link>Университет</S.Link>
                            <S.Span>{education.university_name}</S.Span>
                        </S.Item>
                    </S.Row>
                    <S.Row width={'50%'}>
                        <S.Item>
                            <S.Link>Кафедра</S.Link>
                            <S.Span>{education.department}</S.Span>
                        </S.Item>
                        <S.Item>
                            <S.Link>Факультет</S.Link>
                            <S.Span>{education.faculty}</S.Span>
                        </S.Item>
                    </S.Row>
                    <S.Row width={'40%'}>
                        <S.Item>
                            <S.Link>Специальность</S.Link>
                            <S.Span>{education.speciality}</S.Span>
                        </S.Item>
                        <S.Item>
                            <S.Link>Статус</S.Link>
                            <S.Span>{education.education_type}</S.Span>
                        </S.Item>
                        <S.Item>
                            <S.Link>Поступление</S.Link>
                            <S.Span>{education.begin_study_year}</S.Span>
                        </S.Item>
                        <S.Item>
                            <S.Link>Выпуск</S.Link>
                            <S.Span>{education.finish_study_year}</S.Span>
                        </S.Item>
                    </S.Row>
                </S.Container>
            }
        </S.TabWrapper>

    );
};
export default TabEducational;