import styled from "styled-components";

type ButtonProps = {
  isOpen: boolean
}

export const Wrapper = styled.div<ButtonProps>`
  transition-property: margin;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  ${({isOpen}) => isOpen ? 'margin-bottom: 0;' : 'margin-bottom: 24px;'};

  @media (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    display: none;
  }
`;
export const Button = styled.button<ButtonProps>`
  display: inline-block;
  border: none;
  background-color: transparent;
  color: #6D37D1;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.5;
  padding: 0;
  margin-bottom: 4px;

  &:after {
    content: '';
    height: 24px;
    width: 24px;
    background-image: url('/icons/arrow-up.svg');
    background-repeat: no-repeat;
    background-position: right center;
    display: inline-block;
    vertical-align: middle;
    transform: rotate(0);

    transition-property: transform;
    transition-duration: .2s;
    transition-timing-function: ease-in-out;

    ${({isOpen}) => isOpen && 'transform: rotate(180deg);'}
  }
`;
