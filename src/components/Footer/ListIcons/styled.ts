import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 0;

  display: flex;
  column-gap: 8px;

  @media (min-width: ${({theme}) => theme.breakpoints.sm + 'px'}) {
    margin: 0 0 4px;
  }
`;

export const ListItem = styled.li`
`;

export const AnchorLink = styled.a`
  width: 28px;
  height: 28px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6D37D1;

  &:hover {
    color: ${({theme}) => theme.colors.CommonPrimaryDark80};
  }
  > svg {
    transition-property: color;
    transition-duration: .2s;
    transition-timing-function: ease-in-out;
  }
`;
