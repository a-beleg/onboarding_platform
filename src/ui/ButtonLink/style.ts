import styled from "styled-components";
import { Colors } from "../../consts/colors";

export const Wrapper = styled.button<{ noPadding?: boolean; }>`
  padding: ${({ noPadding }) => noPadding ? 0 : '16px 24px'};
  border: none;
  background: none;
  border-radius: 40px;
  
  width: fit-content;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  text-align: center;
  cursor: pointer;
  
  color: ${Colors.TextPrimaryDark80};
`;