import styled from "styled-components";

export const BurgerButton = styled.button`
  padding: 16px;
  width: 56px;
  height: 56px;
  background-color: ${({theme}) => theme.colors.CommonPrimaryDark80};
  border-radius: 40px;
  position: relative;

  border: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  z-index: 2;
`;

export const BurgerLine = styled.span`
  display: inline-block;
  width: 24px;
  height: 1px;
  background-color: ${({theme}) => theme.colors.CommonPrimaryLight100};

  position: absolute;

  &:first-child {
    transform: rotate(45deg);
  }

  &:last-child {
    transform: rotate(-45deg);
  }
`;


