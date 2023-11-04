import styled from "styled-components";

type PropsItem = {
  index?: number | undefined;
}

export const Item = styled.li<PropsItem>`
  &::before {
    ${({index}) => index && `content: '${index}';`};

    font-family: 'Caveat', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 1;
    color: ${({theme}) => theme.colors.CommonPrimaryDark80};

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='33' height='31' fill='none'%3E%3Cpath stroke='%237927E1' stroke-linecap='round' stroke-width='2' d='M10 2.3C3.2 3.6-3.4 16.8 4.5 25.4c8 8.6 25.2 4.6 27.1-7.3C33.6 7.1 25.1 2.3 19.8 1'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: flex-end;
    text-indent: 4px;
    width: 31px;
    height: 29px;
    margin-bottom: 16px;
  }
`;

export const Article = styled.article``;

export const Title = styled.h3`
  font-family: 'Druk Cy', sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.TextPrimaryDark80};

  margin: 0 0 12px;

  @media all and (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    font-size: 32px;
  }
`;
export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.35;
  color: ${({theme}) => theme.colors.TextSecondary};

  margin: 0;
`;
