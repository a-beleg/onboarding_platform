import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 60px;

  @media all and (min-width: ${({theme}) => theme.breakpointsShort.md}) {
    margin-bottom: 44px;
  }
`;

export const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${({theme}) => theme.colors.TextPrimaryDark80};
  margin: 0;

  max-width: 224px;

  @media all and (min-width: ${({theme}) => theme.breakpointsShort.md}) {
    font-size: 36px;
    max-width: 564px;
  }
`;

export const Heading = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.03em;
  color: ${({theme}) => theme.colors.TextPrimaryDark80};

  margin: 0 0 8px;

  @media all and (min-width: ${({theme}) => theme.breakpointsShort.lg}) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({theme}) => theme.colors.TextPrimaryDark80};

  margin: 0 0 8px;
`;

export const ContentBox = styled.div`
  p:last-child {
    margin-bottom: 0;
  }

  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const List = styled.ul`
  padding-left: 28px;
  list-style: initial;

  color: ${({theme}) => theme.colors.TextPrimaryDark80};

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  @media all and (min-width: ${({theme}) => theme.breakpointsShort.lg}) {
    font-size: 18px;
  }
`;
