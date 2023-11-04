import * as S from './styled';
import {useNavigate} from 'react-router-dom';


type Props = {
    navList: NavList[];
    color?: string;
};

type NavList = {
    text?: string;
    path?: string;
    navigate?: string;
    social?: JSX.Element;
};

export const TopNavList = ({navList, color}: Props) => {
    const navigate = useNavigate();


    return (
        <S.Nav backgroundColor={color}>
            <S.MainContainer>
                <S.List color={'black'}>
                    {navList.map((link: NavList, index: number) => (
                        <S.ListItem key={index}>
                            {link.path ? (
                                <S.AnchorLink target={'_blank'} href={link.path}>
                                    {link.text}
                                </S.AnchorLink>
                            ) : (
                                <S.AnchorLink onClick={() => navigate(link.navigate || '')}>
                                    {link.text || link.social}
                                </S.AnchorLink>
                            )}
                        </S.ListItem>
                    ))}
                </S.List>
            </S.MainContainer>
        </S.Nav>
    );
};