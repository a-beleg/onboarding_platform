import styled from "styled-components";

type isPhone = {
    isPhoneBreakpoint: boolean
}
export const Nav = styled.nav<isPhone>`
  display: none;
  ${({isPhoneBreakpoint}) => isPhoneBreakpoint && `display: block;`};
  margin-bottom: 24px;

  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    display: block;
    ${({isPhoneBreakpoint}) => isPhoneBreakpoint && `display: none;`};
  }
  @media (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    margin-bottom: 26px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    margin-bottom: 24px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;

  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    gap: 4px 28px;
    flex-wrap: wrap;
    max-width: 528px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    column-gap: 26px;
    max-width: 666px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    column-gap: 32px;
    max-width: 812px;
`;

export const ListItem = styled.li``;

export const AnchorLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  font-size: 10px;
  color: ${({theme}) => theme.colors.CommonPrimaryDark80};
  
  transition-property: box-shadow, color;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  :hover {
    box-shadow: inset 0 -1px 0 0 currentColor;
    color: ${({theme}) => theme.colors.TextPrimaryDark40};
  }

  @media (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    font-size: 12px;
  }
`
