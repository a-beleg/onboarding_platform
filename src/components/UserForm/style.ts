import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { Button } from '../../ui/Button/Button';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Form = styled.form<{isEdit?: boolean}>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${({isEdit}) => isEdit && css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 24px;

        @media (max-width: ${theme.breakpoints.md}px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: ${theme.breakpoints.sm}px) {
            grid-template-columns: 1fr;
        }
    `}
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: ${theme.breakpoints.sm}px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ButtonSubmit = styled(Button)`
    width: fit-content;
    margin-top: 20px;
    grid-column: 1;
`;