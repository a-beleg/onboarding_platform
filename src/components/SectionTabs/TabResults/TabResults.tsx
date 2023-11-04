import * as S from "../../SectionDocs/styledDoc";
import {Document} from "../../../api/user/getUser";

import React, {FC} from "react";
import moment from "moment";

type ResultProps = {
    results: Document[]
}

const TabResults: FC<ResultProps> = ({results}) => {

    return (
        <S.Wrapper>
            {results.map(doc =>
                <S.Doc key={doc.id}>
                    <S.Title>{doc.name}</S.Title>
                    <S.ContainerData>
                        <S.Info>
                            <S.InfoItem>
                                <S.DateTitle>Период проведения курса </S.DateTitle>
                                <S.Date>{moment(doc.created_at).format('DD.MM.YYYY')}</S.Date> - <S.Date>{moment(doc.created_at).format('DD.MM.YYYY')}</S.Date>
                            </S.InfoItem>
                        </S.Info>
                        <S.Download href={doc.path}
                                    target="_blank" download>Скачать</S.Download>
                    </S.ContainerData>
                </S.Doc>
            )}
        </S.Wrapper>
    );
};
export default TabResults;