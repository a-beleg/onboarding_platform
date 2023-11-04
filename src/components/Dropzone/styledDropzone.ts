import styled, { css } from "styled-components";
import { ButtonLink } from '../../ui/ButtonLink/ButtonLink';
import { ProfileIcon } from "../svg_components/ProfileIcon";

export const Wrapper = styled.div<{ containerWidth: number }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px dashed #CEC1E6;
    border-radius: 12px;
    padding: ${({ containerWidth }) => containerWidth < 700 ? containerWidth < 600 ? '16px 16px 24px 16px' : '24px' : '32px'};
    position: relative;
`;

export const Preview = styled.div<{ imageUrl: string; containerWidth: number; bordered: boolean; }>`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-image: url(${({ imageUrl }) => imageUrl});
    background-size: cover;
    background-position: center;
    position: absolute;
    left: ${({ containerWidth }) => containerWidth < 700 ? '24px' : '32px'};
    ${({ bordered }) => bordered ? 'border: 1px solid #4128C6' : ''};
    ${({ containerWidth }) => containerWidth < 600 && css`
        position: static;
        margin-bottom: 16px;
    `}
`;

export const PreviewPlaceholder = styled(ProfileIcon)<{ containerWidth: number; bordered: boolean; }>`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    position: absolute;
    left: ${({ containerWidth }) => containerWidth < 700 ? '24px' : '32px'};
    ${({ bordered }) => bordered ? 'border: 1px solid #4128C6' : ''};
    ${({ containerWidth }) => containerWidth < 600 && css`
        position: static;
        margin-bottom: 16px;
    `}
`;

export const WrappedButton = styled(ButtonLink) <{ containerWidth: number; }>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 11px;
    
    @media (max-width: 379px) {
        margin-bottom: 5px;
    }
`;

export const Instruction = styled.p<{ hideOnMobile?: boolean }>`
    margin: 0 auto 4px auto;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #8B8B8B;
    ${({ hideOnMobile }) => hideOnMobile && css`
        @media (max-width: 379px) {
            display: none;
        }
    `}
`;
