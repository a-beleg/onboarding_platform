import * as S from './styledSidebar'
import {SidebarNav} from "./SidebarNav";
import {SidebarAdditionalContent} from "./SidebarAdditionalContent";
import {LogoDark} from "../svg_components/LogoDark";

const Sidebar = () => {

  return (
    <S.Sidebar>
      <S.MainContent>

        <S.Logo to={'/'}>
          <LogoDark width={161} height={22}/>
        </S.Logo>
        <S.Hr />
        <SidebarNav />
      </S.MainContent>

      <SidebarAdditionalContent />
    </S.Sidebar>
  );
};

export { Sidebar };
