import * as S from './styled'

type Props = {
    listIcons: Link[]
}

type Link = {
    path: string;
    icon: any;
    label: string;
    width: string;
    height: string
}

const ListIcons = ({listIcons}: Props) => {
    return (
        <S.List>
            {listIcons.map((link: Link, index: number) => (
                <S.ListItem key={index}>
                    <S.AnchorLink target={'_blank'}
                                  href={link.path}
                                  aria-label={link.label}
                    >
                        <link.icon width={link.width} height={link.height}/>
                    </S.AnchorLink>
                </S.ListItem>
            ))}
        </S.List>
    );
};

export {ListIcons};
