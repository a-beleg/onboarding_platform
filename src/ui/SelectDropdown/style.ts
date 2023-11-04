import styled from "styled-components";

export const StyledControlContainer = styled.div`

  width: 100%;
  display: flex;
  border-radius: 100px;
  padding-top: 6px;
  padding-bottom: 9px;
  padding-left: 10px;
  min-height: 58px;
  min-width: 405px;
  border: 1px solid #B5ADC2;
  transition: all .4s;
  cursor: pointer;

  &:hover {
    border: 1px solid #7B5AB7;
  }

  &:active {
    border: 1px solid #7B5AB7;
  }
  
`

export const ValueWrapper = styled.div.attrs(props => ({className: props.className}))`
  width: 100%;
  display: flex;
  border-radius: 100px;
  transition: all .4s;
  cursor: pointer;
`

export  const LabelWrapper = styled.div`
  padding: 10px;
`