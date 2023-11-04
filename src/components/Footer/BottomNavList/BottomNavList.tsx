import * as S from './styled'

interface Props {
    navList: {
        text: string;
        path: string;
    }[],
    isPhoneBreakpoint: boolean;
    isOpen?: boolean;
    refFunc?: Function;
    height?: number;
}

const BottomNavList = ({navList, isPhoneBreakpoint, isOpen = false, refFunc, height}: Props) => {
    return (
        <S.Nav
            isPhoneBreakpoint={isPhoneBreakpoint}
            isOpen={isOpen}
            height={height}
        >
            <S.List ref={refFunc}>
                {navList.map((link, index: number) => (
                    <S.ListItem key={index}>
                        <S.AnchorLink target={'_blank'} href={link.path}>{link.text}</S.AnchorLink>
                    </S.ListItem>
                ))}
            </S.List>
        </S.Nav>
    );
};

export {BottomNavList};
