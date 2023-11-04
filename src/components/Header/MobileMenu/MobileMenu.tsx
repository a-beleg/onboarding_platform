import * as S from './styledMobileMenu'
import { FC } from "react";
import { SidebarAdditionalContent } from "../../Sidebar/SidebarAdditionalContent";
import { Overlay } from "../../Modal/Overlay";

type MobileMenuProps = {
  clickFunc: Function;
}

const MobileMenu: FC<MobileMenuProps> = ({ clickFunc }) => {
  return (
    <Overlay clickFunc={clickFunc}>
      <S.Nav>
        <S.NavComponent />
        <SidebarAdditionalContent />
      </S.Nav>
    </Overlay>
  );
};

export { MobileMenu };
