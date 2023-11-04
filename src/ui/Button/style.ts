import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const Wrapper = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 24px;
    gap: 10px;

    background: ${theme.colors.TextPrimaryDark80};
    border-radius: 40px;
    border: none;

    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 135%;
    text-align: center;
    color: ${theme.colors.CommonPrimaryLight100};
    cursor: pointer;

    &[disabled] {
        color: #ADA8B3;
        background: ${theme.colors.CommonDisableLight};
        cursor: not-allowed;
    }
`;