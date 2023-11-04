import {FC} from 'react';
import * as S from './style';
import {SectionTitle} from '../../ui/Typography';
import CardUser, {UserData} from '../../components/CardUser/CardUser';

type Props = {
    users: UserData[];
    currentEmail?: string;
    onUpdate: () => void;
    isCurrentUser?: boolean;
    onDelete: (id: string) => Promise<void>;
}

const SectionUsers: FC<Props> = ({users, currentEmail, onUpdate, onDelete}) => {
    return (
        <S.Wrapper>
            <SectionTitle>Пользователи</SectionTitle>
            <S.Users>
                {users.map(user =>
                    <CardUser key={user.id}
                              {...user}
                              isOnlyOne={users.length === 1}
                              isCurrentUser={currentEmail === user.email}
                              onUpdate={onUpdate}
                              onDelete={onDelete}/>
                )}
            </S.Users>
        </S.Wrapper>
    );
}

export default SectionUsers;