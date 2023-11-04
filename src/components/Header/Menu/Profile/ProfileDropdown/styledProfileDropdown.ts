import styled from "styled-components";

export const Dropdown = styled.ul`
  position: absolute;
  right: 0;
  top: 42px;

  width: 294px;
  min-height: 124px;
  padding: 12px;

  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.CommonSecondary60};
`;
export const DropdownItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 44px;

  border-radius: 12px;
  border: none;
  cursor: pointer;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.35;
  color: ${({theme}) => theme.colors.TextPrimaryDark80};

  transition-property: background-color;
  transition-timing-function: ease-in-out;
  transition-duration: .15s;

  &:hover {
    background-color: ${({theme}) => theme.colors.CommonSecondary80};
  }
`;
