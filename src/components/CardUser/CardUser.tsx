import {FC, useState, MouseEvent, TouchEvent} from 'react';
import {useEvent} from 'react-use';
import {ButtonLink} from '../../ui/ButtonLink/ButtonLink';
import * as S from './styledCardUser';
import {IconMore} from '../svg_components/IconMore';
import {getErrorText} from '../../helpers/getErrorText';
import {TextError} from '../../ui/TextError/TextError';
import UserForm from '../UserForm';

export type UserData = {
    id: string;
    photo: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    phone: string;
    email: string;
}

type Props = UserData & {
    isCurrentUser: boolean;
    isOnlyOne: boolean;
    onUpdate: () => void;
    onDelete: (id: string) => Promise<void>;
}

const CardUser: FC<Props> =
    ({
         id,
         photo,
         first_name,
         last_name,
         middle_name,
         phone,
         email,
         isCurrentUser,
         isOnlyOne,
         onUpdate,
         onDelete
     }) => {

        const [error, setError] = useState('');
        const [editing, setEditing] = useState(false);
        const [menuVisible, setMenuVisible] = useState(false);
        const name = `${last_name} ${first_name} ${middle_name}`;

        useEvent('click', () => setMenuVisible(false));

        const handleMenuClick = (e: MouseEvent | TouchEvent) => {
            e.stopPropagation();
            setMenuVisible(!menuVisible)
        }

        const handleDelete = async () => {
            try {
                setError('');
                await onDelete(id);
                onUpdate();
            } catch (e: any) {
                setError(getErrorText(e.status));
            }
        }

        return (
            <S.Wrapper isCurrentUser={isCurrentUser}>
                <S.ContainerUser>
                    <S.ContainerHeader>
                        <S.Userpic userpicUrl={photo}/>
                        <S.ButtonMore noPadding onClick={handleMenuClick as any}>
                            <IconMore/>
                        </S.ButtonMore>
                    </S.ContainerHeader>
                    <div>
                        <S.Title>{name}</S.Title>
                        <S.ContainerLinks>
                            <S.Phone href={`tel:${phone}`}>{phone}</S.Phone>
                            <S.Mail href={`mailto:${email}`}>{email}</S.Mail>
                        </S.ContainerLinks>
                    </div>
                </S.ContainerUser>
                <S.ContainerButtons visible={menuVisible}>
                    {/* {isCurrentUser && <ButtonLink noPadding>Выйти</ButtonLink>} */}
                    <ButtonLink noPadding onClick={() => setEditing(!editing)}>Редактировать</ButtonLink>
                    {!isOnlyOne && <ButtonLink noPadding onClick={handleDelete}>Удалить</ButtonLink>}
                    {error && <TextError>{error}</TextError>}
                </S.ContainerButtons>
                {editing &&
                    <S.FormWrapper>
                        <UserForm isEdit onSubmit={onUpdate}
                                  defaultValues={{first_name, last_name, middle_name, phone, email, photo}} id={id}/>
                    </S.FormWrapper>
                }
            </S.Wrapper>
        );
    }

export default CardUser;
