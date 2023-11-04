import React, {FC} from 'react'
import * as S from './styledDoc';
import {SectionTitle} from '../../ui/Typography';
import {IDoc} from '../../api/vuz/getUniversity';


interface DocsProps {
    docs: IDoc[]
}

export const link = (path:string) => {
    return path
}

const SectionDocs: FC<DocsProps> = ({ docs }) => {

    return (
        docs.length === 0 ? <></> :
            <S.Wrapper>
                <SectionTitle>Документы</SectionTitle>
                {docs.map(doc =>
                    <S.Doc key={doc.id}>
                        <S.Title>{doc.file_name}</S.Title>
                        <S.ContainerData>
                            <S.Info>
                                <S.InfoItem>
                                    <S.DateTitle>Подписан </S.DateTitle>
                                    <S.Date>{doc.signed_at}</S.Date>
                                </S.InfoItem>
                                <S.InfoItem>
                                    <S.DateTitle>Истекает </S.DateTitle>
                                    <S.Date>{doc.expires_at}</S.Date>
                                </S.InfoItem>
                            </S.Info>
                            <S.Download href={link(doc.file_path)} target="_blank" download>Скачать</S.Download>
                        </S.ContainerData>
                    </S.Doc>
                )}
            </S.Wrapper>
    );
}

export default SectionDocs;