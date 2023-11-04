import styled from "styled-components";
import {Link} from "react-router-dom";

export const Nav = styled.div``;
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const NavItem = styled.li``;

type PropsAnchor = {
    disabled: boolean,
    icon?: string,
    selected?:boolean
}
export const Anchor = styled(Link)<PropsAnchor>`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.35;
  color: ${({theme}) => theme.colors.TextPrimaryDark80};
  cursor: pointer;
  display: block;
  padding: 12px 0 12px 36px;
  border-radius: 12px;

  transition-duration: .1s;
  transition-property: background-color;
  transition-timing-function: ease-in-out;
  background-image: ${({icon}) => icon };
  background-repeat: no-repeat;
  background-position: left;
  background-color: ${({selected, theme}) => selected && theme.colors.CommonSecondary60};

  &[disabled] {
    color: ${({theme}) => theme.colors.TextDisableLight};
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.CommonSecondary60};
  }
  
`;

