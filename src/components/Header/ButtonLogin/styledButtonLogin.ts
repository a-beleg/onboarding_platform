import styled from "styled-components";

export const LoginButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.CommonPrimaryLight100};
  opacity: 0.6;
  background-color: transparent;
  padding: 5px 0 5px 5px;

  border: none;
  cursor: pointer;

  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: .15s;

  &:hover {
    opacity: 1;
  }
`;
