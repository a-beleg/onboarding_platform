import * as S from './SidebarStepThreeStyled'
import {FC} from "react";
import {sidebarNavList} from "../Sidebar/SidebarNav/SidebarNav";

interface SidebarStepThreeProps {
    title: string;
}

const SidebarStepThree: FC<SidebarStepThreeProps> = ({title}) => {
    function isDisabledClass(is: boolean) {
        return !is ? 'is-disabled' : ''
    }

    return (
        <>
            <S.Section>
                <S.FirstSection>
                    <S.LeftBlock>
                        <S.Title>{title}</S.Title>
                    </S.LeftBlock>
                    <S.RightBlock>
                        <S.Picture/>
                    </S.RightBlock>
                </S.FirstSection>
                <S.WhatIsNextHeading>Что дальше</S.WhatIsNextHeading>
                <S.List>
                    {sidebarNavList.map((item, index) => (
                        <S.ListItem key={index}>
                            <S.ListItemTitle>{item.text}</S.ListItemTitle>
                            <S.ListItemContainer>
                                <S.ListItemParagraph>{item.paragraphSteps}</S.ListItemParagraph>
                                <S.Anchor type={'secondary-light'} to={item.path}
                                          className={isDisabledClass(item.isActive)}>{item.textButtonSteps}</S.Anchor>
                            </S.ListItemContainer>
                        </S.ListItem>
                    ))}
                </S.List>
            </S.Section>
        </>
    );
};

export {SidebarStepThree};
