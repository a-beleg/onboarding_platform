import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0 0 24px;
  list-style: none;
  font-size: 0;

  display: flex;
  column-gap: 18px;
  
  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    gap: 10px 0;
    flex-wrap: wrap;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    gap: 8px 16px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    flex-wrap: nowrap;
    column-gap: 18px;
    max-width: 292px;
  }
`;

type ListItemStyledProps = {
    width: string;
    image: string;
}
export const ListItem = styled.li<ListItemStyledProps>`
  flex-shrink: 0;
  height: 28px;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  position: relative;
  ${({width}) => width && `width: ${width}`};
  ${({image}) => image && `background-image: url(${image})`};
`;

export const LinkApp = styled.a``;
