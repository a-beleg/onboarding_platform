import styled from "styled-components";
import {SidebarNav} from "../../Sidebar/SidebarNav";

export const Nav = styled.nav`
  width: 100%;
  height: 100%;

  background-color: ${({theme}) => theme.colors.CommonSecondary80};
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  @media all and (min-width: ${({theme}) => theme.breakpoints.sm + 'px'}) {
    margin-left: auto;
    width: 368px;
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    width: 398px;
  }
`;
export const NavComponent = styled(SidebarNav)`
  padding: 104px 16px 0 16px;
`;

