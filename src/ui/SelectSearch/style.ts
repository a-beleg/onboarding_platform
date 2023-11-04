import styled, {css} from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
`

export const StyledFilterField = styled.div`
    width: 100%;
    position: relative;
`

export const SearchIcon = styled.span<{isChecked: any}>`
  display: inline-block;
  content: '';
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_721_45883)'%3E%3Cpath d='M14.7676 14.0332L14.4141 13.6796L13.707 14.3867L14.0605 14.7403L14.7676 14.0332ZM19.0448 19.7246C19.2401 19.9198 19.5567 19.9198 19.7519 19.7246C19.9472 19.5293 19.9472 19.2127 19.7519 19.0175L19.0448 19.7246ZM14.0605 14.7403L19.0448 19.7246L19.7519 19.0175L14.7676 14.0332L14.0605 14.7403Z' fill='%23B5ADC2'/%3E%3Ccircle cx='9.51562' cy='9.51562' r='6.01562' stroke='%23B5ADC2'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_721_45883'%3E%3Crect width='24' height='24' rx='4' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-repeat: no-repeat;
  position: absolute;
  right: 15px;
  top: 16px;
  
  ${({isChecked}) => isChecked && css`
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.63593 5.63604L11.9999 12L5.63593 18.364' stroke='%237927E1' stroke-linecap='round'/%3E%3Cpath d='M18.3641 18.364L12.0001 12L18.3641 5.63604' stroke='%237927E1' stroke-linecap='round'/%3E%3C/svg%3E")
  `};
`
export const StyledSearch = styled.input<{ errorStatus?: boolean | null }>`
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
  padding-right: 50px;
  min-height: 56px;
  border: 1px solid #CEC1E6;
  ${({errorStatus}) => !errorStatus && errorStatus !== null && `border: 1px solid #D72751;`}
  box-sizing: border-box;
  transition: border .3s ease;
  outline: 0;

  &::placeholder {
    color: #B5ADC2;
  }

  &:hover {
    border: 1px solid #7B5AB7;
    ${({errorStatus}) => !errorStatus && errorStatus !== null && `border: 1px solid #D72751;`}
    cursor: pointer;
  }

  &:focus {
    border: 1px solid #7B5AB7;
    ${({errorStatus}) => !errorStatus && errorStatus !== null && `border: 1px solid #D72751;`}
    outline: 0;
  }
`

export const StyledFilterMenu = styled.div<{maxHeight?: number, isMenuTop: boolean}>`
  width: calc(100% - 10px);
  max-height: 334px;
  ${({maxHeight}) => maxHeight && `height: ${maxHeight}px`};
  position: absolute;
  ${({isMenuTop}) => isMenuTop ? 'bottom: 58px' : 'top: 58px'};
  left: 3px;
  padding: 8px;
  z-index: 10;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(54, 25, 88, 0.08);
  border-radius: 24px;

  overflow: hidden auto;

  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background:transparent;
  }
`

export const StyledNoOptionMenu = styled.div<{isMenuTop: boolean}>`
  width: calc(100% - 10px);
  position: absolute;
  ${({isMenuTop}) => isMenuTop ? 'bottom: 58px' : 'top: 58px'};
  left: 0;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(54, 25, 88, 0.08);
  border-radius: 24px;
  padding: 8px;
  z-index: 10;
  
  button{
    top: 15px;
  }
`

export const StyledBtnClose = styled.button`
    display: block;
    width: 25px;
    height: 25px;
    background-color: transparent;
    outline: none;
    z-index: 11;
    border: none;
    position: absolute;
    top: 10px;
    right: 12px;
    cursor: pointer;
    
    &::before{
        transform: rotate(45deg);
        position: absolute;
        left: 4px;
        top: 12px;
        content: "";
        width: 15px;
        height: 1.5px;
        background-color: #7927E1;
    }
    
    &::after{
        transform: rotate(-45deg);
        position: absolute;
        left: 4px;
        top: 12px;
        content: "";
        width: 15px;
        height: 1.5px;
        background-color: #7927E1;
        transition: all .4s ease-in-out;
    }
`

export const StyledMenuList = styled.div`
  //height: calc(100% - 50px);
  margin: 0;
  padding: 0;
`

export const StyledMenuTitle = styled.h4`
  width: 100%;
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  color: #B5ADC2;
  margin: 0;
  padding-top: 7px;
  padding-bottom: 12px;
  padding-left: 16px;
`

export const StyledVacanciesList = styled.ul<{length?: number}>`
  width: 100%;
  height: 100%;
  // ${({length}) => length && length > 3 && `height: 193px`};
  // ${({length}) => length && length < 4 && `height: ${length}px`};
  // ${({length}) => length && length < 4 && `height: ${length*80}px`};
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  
  
  @media (max-width:889px){
    ${({length}) => length && length > 3 && `height: 228px`};
    ${({length}) => length && length < 4 && `height: ${length * 80}px`};
  }
`

export const StyledVacanciesItem = styled.li`
  width: 100%;
  padding-right: 10px;
`

export const StyledVacanciesWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 24px;
  padding: 10px 16px;
  
  &:hover{
    background-color: #A183D8;
    
    span{
      color: #fff;
    }
  }
`

export const StyledVacancyName = styled.span`
  width: 90%;
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  color: #7927E1;
  
  @media (max-width:889px) {
    width: 100%;
    margin-bottom: 8px;
  }
`


export const NoVacancyText = styled.span`
  display: inline-block;
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  color: #7927E1;
  padding: 10px 10px;
  
  @media (max-width:768px){
    span{
      display: none;
    }
  }
`