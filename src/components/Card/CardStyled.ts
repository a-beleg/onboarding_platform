import styled from "styled-components";
import {BaseCard, BaseCardBadge, BaseCardTitle, StyledButton, StyledLink} from "../../styles/s-components";

export const Card = styled(BaseCard)``;

export const Badge = styled(BaseCardBadge)``;

export const Title = styled(BaseCardTitle)``;

export const CardLink = styled(StyledLink)`
  align-self: flex-start;
  margin-top: auto;
`;
export const CardButton = styled(StyledButton)<{isHidden?:boolean}>`
  ${({isHidden}) => isHidden && 'display: none;'}
  align-self: flex-start;
  margin-top: auto;
`;

