import styled from "styled-components";
import { Dropzone } from "../Dropzone/Dropzone";
import { Button } from '../../ui/Button/Button';
import { theme } from "../../styles/theme";

export const Wrapper = styled.section`
    margin-bottom: 34px;
  width: 100%;
`;

export const Form = styled.form`
    display: grid;
    gap: 20px;

    @media (max-width: ${theme.breakpoints.sm}px) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
`;

export const StyledDropzone = styled(Dropzone)`
    margin-bottom: 25px;

    @media (max-width: ${theme.breakpoints.sm}px) {
        margin-bottom: 32px;
    }
`;

export const Row = styled.div`
    grid-column: 1 / span 2;
`
export const ItemsRow = styled.div<{amount:number}>`
  gap:25px ;
  display:grid;
  width: 100%;
  grid-template-columns: ${({amount}) => `repeat(${amount}, 1fr)`}
`
export const ButtonSubmit = styled(Button)`
    width: fit-content;
    margin-top: 28px;

    @media (max-width: ${theme.breakpoints.sm}px) {
        margin: auto;
        margin-top: 20px;
    }
`;