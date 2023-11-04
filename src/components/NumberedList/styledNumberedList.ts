import styled from "styled-components";
import {ListItem} from "./ListItem";

export const ListOl = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  flex-direction: column;

  @media all and (min-width: ${({theme}) => theme.breakpoints.sm + 'px'}) {
    align-items: center;
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    gap: 20px;
  }
`;

export const Item = styled(ListItem)`
  max-width: 322px;

  @media all and (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    max-width: 224px;
  }
  @media all and (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    max-width: 284px;
  }
`;
