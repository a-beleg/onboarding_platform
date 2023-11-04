import styled from 'styled-components';

export const StyledContainer = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    position: relative;
`

export const StyledField = styled.div`
    width: 100%;
    position: relative;
    background-color: transparent;
    border-radius: 100px;
`

export const StyledInput = styled.input`
    z-index: 2;
    width: 100%;
    background-color: transparent;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 400;
    color: #7927E1;
    border-radius: 100px;
    padding-top: 15px;
    padding-bottom: 17px;
    padding-left: 16px;
    padding-right: 16px;
    min-height: 56px;
    border: 1px solid #CEC1E6;
    box-sizing: border-box;
    outline: none;
    &:focus{
        border: 1px solid #7B5AB7;
    }
    &:invalid{
        border: 1px solid #D72751;
    }
    &:invalid ~ div{
        display: block;
        
    }
    &::placeholder {
        color: #B5ADC2;
    }
`

export const StyledError = styled.div`
    margin: 0;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #D72751;
    display: none;
    position: absolute;
    bottom: -16px;
    left: 16px;
`


