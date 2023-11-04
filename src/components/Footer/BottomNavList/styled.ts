import styled from "styled-components";

type isPhone = {
    isPhoneBreakpoint: boolean;
    isOpen: boolean;
    height?: number;
}

export const Nav = styled.nav<isPhone>`
  overflow: hidden;
  transition-property: height, overflow;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  ${({isOpen, height}) => isOpen ? `height: ${height}px;` : 'height: 0'};
  ${({isOpen}) => isOpen ? 'margin-bottom: 24px;' : 'margin-bottom: 0;'};
  ${({isPhoneBreakpoint}) => isPhoneBreakpoint ? 'display: block' : 'display: none'};

  @media (min-width: ${({theme}) => theme.breakpoints.sm + 'px'}) {
    ${({isOpen, height}) => isOpen ? `height: ${height}px;` : 'height: 0'};
  }
  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    height: auto;
    margin-bottom: 24px;
    ${({isPhoneBreakpoint}) => isPhoneBreakpoint ? `display: none;` : 'display: block'};
  }
  @media (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    margin-bottom: 24px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    margin-bottom: 24px;
  }
`;

type PropsList = {
    ref: any;
}
export const List = styled.ul<PropsList>`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  font-size: 0;

  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    gap: 8px 6px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    gap: 8px 12px;
  }
`;

export const ListItem = styled.li``;

export const AnchorLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 10px;
  color: ${({theme}) => theme.colors.CommonPrimaryDark80};

  transition-property: box-shadow, color;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  :hover {
    box-shadow: inset 0 -1px 0 0 currentColor;
    color: ${({theme}) => theme.colors.TextPrimaryDark40};
  }


  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    font-size: 8px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    font-size: 10px;
  }
`
