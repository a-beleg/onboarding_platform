import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;

`;

export const Sentence = styled.div<{ isLastItem: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: ${({isLastItem}) => isLastItem ? `unset` : `1px solid ${theme.colors.TextSecondary}`};
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`;

export const Title = styled.p`
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
  letter-spacing: -0.03em;
  color: ${theme.colors.CommonPrimaryDark80};
`;

export const Description = styled.div<{formatted?:boolean}>`
  max-width: 800px;
  margin: auto 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  color: ${theme.colors.CommonPrimaryDark80};
  ${({formatted}) => formatted &&' white-space: pre-wrap;'}
`;

export const Arrow = styled.div<{ isActive: boolean }>`
  background: ${theme.icons.Arrow};
  background-size: contain;
  width: 24px;
  height: 24px;
  transform: ${({isActive}) => isActive ? 'rotate(0deg)' : 'rotate(180deg)'};
  transition: transform 0.3s ease-in-out;
`;
