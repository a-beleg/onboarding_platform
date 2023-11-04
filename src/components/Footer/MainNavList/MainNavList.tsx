import * as S from './styled'

type Props = {
    navList: navList[],
    isPhoneBreakpoint: isPhoneBreakpoint,
}

type navList = {
    path: string;
    text: string;
}
type isPhoneBreakpoint = boolean

const MainNavList = ({navList, isPhoneBreakpoint}: Props) => {
    return (
        <S.Nav isPhoneBreakpoint={isPhoneBreakpoint}>
            <S.List>
                {navList.map((link: navList, index: number) => (
                    <S.ListItem key={index}>
                        <S.AnchorLink target={'_blank'} href={link.path}>{link.text}</S.AnchorLink>
                    </S.ListItem>
                ))}
            </S.List>
        </S.Nav>
    );
};

export {MainNavList};
