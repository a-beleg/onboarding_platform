import styled from "styled-components";
import {Colors} from "../../../consts/colors";

const transitionSliderS = `.7s`;

export const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-bottom: 40px;
`;

export const BannersLine = styled.div<{
  width: number;
  slideWidth: number;
  currentSlide: number;
}>`
  display: flex;
  flex-direction: row;
  width: ${({width}) => width}px;
  transition: transform ${transitionSliderS};
  ${({currentSlide, slideWidth}) => `transform: translateX(-${currentSlide * slideWidth}px)` };
`;

export const ControlWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 8px;
  height: 24px;
  gap: 4px;
`;

export const Control = styled.div<{isActive?: boolean}>`
  height: 8px;
  background-color: ${Colors.CommonPrimaryLight100};
  border-radius: 50px;
  transition: width ${transitionSliderS};
  ${({isActive}) => isActive ? 'width: 28px;' : 'width: 8px;'}
`;

export const PrevNextControl = styled.a`
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${Colors.CommonPrimaryLight100};
  :hover {
    opacity: .7;
  }
`;