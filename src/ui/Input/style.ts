import styled from "styled-components";

export const Wrapper = styled.input<{ hasError: boolean }>`
  width: 100%;
  background-color: transparent;
  font-family: 'Roboto',serif;
  font-size: 18px;
  font-weight: 400;
  color: #7927E1;
  border-radius: 100px;
  padding: 15px 16px 17px;
  min-height: 56px;
  border: 1px solid #CEC1E6;
  ${({hasError}) => hasError && `border: 1px solid #D72751;`}
  box-sizing: border-box;
  transition: border .3s ease;
  outline: 0;

  &::placeholder {
    color: #B5ADC2;
  }

  &:hover {
    border: 1px solid #7B5AB7;
    ${({hasError}) => hasError && `border: 1px solid #D72751;`}
    cursor: pointer;
  }

  &:focus {
    border: 1px solid #7B5AB7;
    ${({hasError}) => hasError && `border: 1px solid #D72751;`}
    outline: 0;
  }

`