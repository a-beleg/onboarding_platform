import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const ListItem = styled.li``;
export const Article = styled.article``;
export const Title = styled.h3`
  font-family: 'Druk Cy', sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.TextPrimaryDark80};
  margin: 0;
`;
export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.35;
  color: ${({theme}) => theme.colors.TextSecondary};
  margin: 0;
`;
