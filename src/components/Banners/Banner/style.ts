import styled, {css} from "styled-components";
import {theme} from '../../../styles/theme';
import {BannerColorScheme} from "./Banner";
import {Colors} from "../../../consts/colors";

const fontFamily = css`
   font-family: 'Roboto', Arial, sans-serif;
   margin: 0;
`;

const getStylesByColorScheme = (colorScheme: BannerColorScheme) => {
  const variants: Record<BannerColorScheme, string> = {
    darkPurple: `
      background-color: ${theme.colors.CommonPrimaryDark80};
    `,
    pink: `
      background-color: ${theme.colors.TextPrimaryDark20};
    `,
    blue: `
      background-color: ${theme.colors.AccentBusinessProcessSecondary};
    `,
    darkBlue: `
      background-color: ${theme.colors.CommonPrimaryDark100};
    `,
    peach: `
      background-color: ${theme.colors.AccentRapidStartPrimary};
    `,
    yellow: `
      background-color: ${theme.colors.AccentRapidStartSecondary};
    `
  }

  return variants[colorScheme];
}


export const Wrapper = styled.section<{ colorScheme: BannerColorScheme
  // , imageBg?: string
}>` 
  position: relative; 
  width: 100%;
  height: 200px;
  border-radius: 16px;  
  padding: 42px 36px;
  ${({colorScheme}) => getStylesByColorScheme(colorScheme)}; 
  overflow: hidden;
  cursor: pointer;
  
  
`;

export const BannerImg = styled.img` 
   position: absolute;
   right: 98px;
   bottom: -4px;
    width: 300px;
`;


export const TextWrap = styled.div`

`;

export const Title = styled.h3`
  ${fontFamily};
  max-width: 519px;
  font-size: 28px;
  line-height: 38px;
  font-weight: 500;
  color: ${Colors.CommonPrimaryLight100};
  padding-bottom: 4px;
  white-space: pre-line
`;

export const Description = styled.p`
  ${fontFamily};
  max-width: 519px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${Colors.CommonSecondary80};
  padding-bottom: 20px;
`;

export const Button = styled.a`
  margin-top: 10px;
  display: inline-block;
  height: 36px;
  padding: 8px 20px;
  border-radius: 12px;
  background:  ${Colors.CommonSecondary80};
  transition: .1s;
  :hover {
    opacity: .8
  }
`;

export const ButtonText = styled.p`
   ${fontFamily}; 
   font-weight: 400;
   font-size: 16px;
   line-height: 20px;
   color: ${Colors.CommonPrimaryDark100};
`;

export const Icon = styled.span`
   display: inline-block;
   vertical-align: middle;
   padding-left: 5px
`;
export const AddImg = styled.div`
   position: absolute;
    bottom: 40px;
    left: calc(50% - 150px);
`;
