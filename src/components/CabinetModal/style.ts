import styled from "styled-components";
import {theme} from "../../styles/theme";
import {Button} from "../../ui/Button/Button";
import {Overlay} from "../Modal/Overlay";
import {SectionTitle} from '../../ui/Typography';

export const StyledOverlay = styled(Overlay)`
    z-index: 1000;
    overflow-y: auto;
`;

export const Wrapper = styled.div`
  max-width: calc(100vw - 60px);
  position: fixed;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  background-color: ${theme.colors.CommonSecondary60};
  border-radius: 20px;
  padding: 32px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`;


export const Title = styled(SectionTitle)`
    padding-right: 76px;
`;

export const ButtonClose = styled(Button)`
    font-size: 0;
    padding: 0;
    width: 56px;
    height: 56px;
    border-radius: 28px;
    position: absolute;
    top: 32px;
    right: 32px;

    &::before, &::after {
        content: '';
        width: 24px;
        height: 1px;
        background-color: ${theme.colors.CommonPrimaryLight100};
        transform-origin: center;
        position: absolute;
        top: 50%;
        left: 50%;
    }

    &::before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    @media (max-width: ${theme.breakpoints.sm}px) {
        top: 16px;
        right: 16px;
    }
`;