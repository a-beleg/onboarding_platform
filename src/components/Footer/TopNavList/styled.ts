import styled from 'styled-components'
import {Container} from "../../../ui/Container/Container";

export const Nav = styled.nav<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) =>
          backgroundColor ? backgroundColor : `transparent`};
  @media (min-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
    border-bottom: solid 1px ${({ theme }) => theme.colors.CommonSecondary40};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
  }
`;

export const ListItem = styled.li`
  flex: 25% 1 1;
  border-bottom: solid 1px ${({ theme }) => theme.colors.CommonSecondary40};
  @media (min-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
    border-bottom: none;
  }
`;

export const MainContainer = styled(Container)`
  @media (min-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const AnchorLink = styled.a`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.TextPrimaryDark80};
  font-size: 10px;
  display: block;
  padding: 6px 0;

  transition-property: box-shadow, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;

  :hover {
    box-shadow: inset 0 -1px 0 0 currentColor;
    color: ${({ theme }) => theme.colors.TextPrimaryDark40};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
    display: inline-block;
    padding: 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    font-size: 12px;
  }
`;