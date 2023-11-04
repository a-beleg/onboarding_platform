import styled from 'styled-components';
import {theme} from '../styles/theme';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;

  @media (max-width: ${theme.breakpoints.lg}px) {
    padding-top: 64px;
  }

  @media (max-width: ${theme.breakpoints.md}px) {
    padding-top: 53px;
  }

  @media (max-width: ${theme.breakpoints.sm}px) {
    padding-top: 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 46px;
    margin-bottom: 18px;
  }
`;

export const AlertWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 245px;
  padding-bottom: 245px;
  background: #FBF9F9;
  border-radius: 16px;
  margin-bottom: 32px;
`;

