import styled from "styled-components";
import {Container} from "../../../ui/Container/Container";

export const Footer = styled.footer`
  background-color: ${({theme}) => theme.colors.CommonSecondary60};
`;

export const MainContainer = styled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
  min-height: 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;

  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    justify-content: initial;
    flex-direction: initial;
  }
`;

export const SocialSpan = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  color: ${({theme}) => theme.colors.CommonPrimaryDark80};
`;

export const LkSocial = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
  grid-gap: 12px;
`;


export const SocialLink = styled.a.attrs(({href}) => (
    {href}
))``;

export const LeftBox = styled.div`
  flex-basis: auto;
  flex-grow: 1;
`;

export const LeftBoxWrapper = styled.div`
  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    max-width: 524px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    max-width: 666px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    max-width: 812px;
  }
`;
export const RightBox = styled.div`
  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    flex-basis: 25%;
  }

`;
export const RightBoxWrapper = styled.div`
  height: 100%;
  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    max-width: 164px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    max-width: 212px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    max-width: 292px;
  }
`;
export const Info = styled.p`
  margin: 0 0 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${({theme}) => theme.colors.CommonPrimaryDark80};
  font-size: 10px;

  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    font-size: 12px;
    margin-bottom: 24px;
  };
  @media (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    font-size: 14px;
  };
`;

export const InfoLink = styled.a.attrs(({href}) => (
    {href}
))`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  display: inline-block;
  color: #6D37D1;
  font-size: inherit;

  transition-property: box-shadow, color;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  :hover {
    box-shadow: inset 0 -1px 0 0 currentColor;
    color: ${({theme}) => theme.colors.TextPrimaryDark40};
  }

`;
export const License = styled.p`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${({theme}) => theme.colors.CommonPrimaryDark80};
  font-size: 10px;

  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    font-size: 12px;
  }
  @media (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    font-size: 14px;
  }
`;
export const PhoneNumber = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  display: inline-block;
  color: ${({theme}) => theme.colors.CommonPrimaryDark80};

  transition-property: box-shadow, color;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  :hover {
    box-shadow: inset 0 -1px 0 0 currentColor;
    color: ${({theme}) => theme.colors.TextPrimaryDark40};
  }
`;

export const PhoneNumberLabel = styled.label.attrs(({htmlFor}) => ({
    htmlFor
}))`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  display: inline-block;
`;

export const WrapPhoneNumber = styled.div`
  margin-bottom: 12px;
  color: ${({theme}) => theme.colors.CommonPrimaryDark80};

  @media (min-width: ${({theme}) => theme.breakpoints.sm + 'px'}) {
    margin-bottom: 16px;
  }
`;
export const ContactsForMedia = styled.p`
  margin: 0 0 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  display: inline-block;
  color: ${({theme}) => theme.colors.CommonPrimaryDark80};

  @media (min-width: ${({theme}) => theme.breakpoints.sm + 'px'}) {
    margin: 0 0 16px;
  }
`;

export const ContactsForMediaLink = styled.a`
  color: #6D37D1;

  transition-property: box-shadow, color;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  :hover {
    box-shadow: inset 0 -1px 0 0 currentColor;
    color: ${({theme}) => theme.colors.TextPrimaryDark40};
  }
`;
export const Address = styled.address`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  color: ${({theme}) => theme.colors.CommonPrimaryDark80};
  margin-bottom: 24px;

  @media (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    margin-bottom: 40px;
  }
`;

export const PhoneAndIconsBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    flex-direction: column;
  }
`;
