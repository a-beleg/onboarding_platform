import styled from "styled-components";
import {Link} from "react-router-dom";

export const AdditionalContent = styled.div`
  margin-top: auto;
  background: ${({theme}) => theme.colors.CommonSecondary60};
  border-radius: 0 0 20px 20px;
  padding: 16px;

  @media all and (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    padding: 20px;
  }
`;

export const PersonalAccount = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.35;
  color: ${({theme}) => theme.colors.TextPrimaryDark80};
`;

export const Icon = styled.span<{ userpicUrl: string }>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  background-size: cover;
  background-position: center;
  background-image: url(${({userpicUrl}) => userpicUrl});
  width: 24px;
  height: 24px;
  background-color: #D5CDC8;
  border-radius: 100px;
`;

export const Exit = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.35;
  color: ${({theme}) => theme.colors.TextPrimaryDark80};
`;

export const Anchor = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.35;
  color: ${({theme}) => theme.colors.TextPrimaryDark80};
  cursor: pointer;
  padding: 12px 0 12px 46px;
  position: relative;
  display: flex;
  border-radius: 12px;
  transition-duration: .1s;
  transition-property: background-color;
  transition-timing-function: ease-in-out;

  &:hover {
    border: unset;
  }
`;
