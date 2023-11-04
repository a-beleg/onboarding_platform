import styled,{ css } from "styled-components";
import { theme } from "../../styles/theme";

export const PageTitle = styled.h1`
    font-family: 'Druk Cy';
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 100%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${theme.colors.TextPrimaryDark80};
    margin: 0;
`;

export const SectionTitle = styled.h2<{ hideOnMobile?: boolean }>`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 100%;
    color: ${theme.colors.TextPrimaryDark80};
    margin-top: 0;
    margin-bottom: 32px;

    ${({ hideOnMobile }) => hideOnMobile && css`
        @media (max-width: 379px) {
            display: none;
        }
    `}
`;