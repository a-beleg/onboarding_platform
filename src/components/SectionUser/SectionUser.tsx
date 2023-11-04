import React, {FC, useState} from 'react';
import * as S from "./styledSectionUser"
import {TUser} from "../../api/user/getUser";
import SectionEditUser from "../SectionEditUser/SectionEditUser";
import {Telegram} from "../svg_components/Telegram";

type UserProps = {
    user: TUser,
    onUpdate: (data: any) => Promise<void>;
}

const SectionUser: FC<UserProps> = ({user, onUpdate}) => {
    const [editing, setEditing] = useState(false);

    return (
        <S.Wrapper editing={editing}>
            {editing ?
                <>
                    <S.EditButton onClick={() => setEditing(!editing)}/>
                    <SectionEditUser onUpdate={onUpdate} user={user}/>
                </>
                :
                <S.Container>
                    <S.FirstRow>
                        <S.ProfilePic
                            userpicUrl={user.photo}/>
                        <S.Title>{user.first_name} {user.last_name}</S.Title>
                        <S.EditButton onClick={() => setEditing(!editing)}/>
                    </S.FirstRow>
                    <S.Row>
                        <S.Item>
                            <S.Link>Телефон</S.Link>
                            <S.Span>{user.phone}</S.Span>
                        </S.Item>
                        <S.Item>
                            <S.Link>Email</S.Link>
                            <S.Span>{user.email}</S.Span>
                        </S.Item>
                        <S.Item>
                            <S.Link>Дата рождения</S.Link>
                            <S.Span>{user.birth_date}</S.Span>
                        </S.Item>
                        <S.Item>
                            <S.Link>Город</S.Link>
                            <S.Span>{user.city}</S.Span>
                        </S.Item>
                    </S.Row>
                    <S.Row>
                        <S.DescriptionContainer>
                            <S.DescriptionText>Переходите по ссылке в&nbsp;&nbsp;&nbsp;&nbsp;
                                <S.InlineContainer>
                                    <Telegram width={"16"} height={"16"} color={'#32a7df'}/>
                                </S.InlineContainer>
                                &nbsp;&nbsp;&nbsp;&nbsp;<S.DescriptionLink target={'_blank'}
                                                                           href={'https://t.me/a_beleg_bot'}>telegram</S.DescriptionLink>,
                                чтобы не пропустить важную информацию и получить
                                ответы на важные
                                вопросы.</S.DescriptionText>
                        </S.DescriptionContainer>
                    </S.Row>
                </S.Container>}
        </S.Wrapper>
    );
};

export default SectionUser;