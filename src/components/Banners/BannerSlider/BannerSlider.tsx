import React, {FC, useEffect, useRef, useState} from "react";
import {Banner, BannerProps} from "../Banner/Banner";
import * as Styled from "./style";
import {ReactComponent as LeftArrow} from '../../../image/bannerArrows/slider_arrow_left.svg'
import {ReactComponent as RightArrow} from '../../../image/bannerArrows/slider_arrow_right.svg';

type BannerSliderProps = {
  slides: BannerProps[];
  delaySlide?: number;
  handleClick?: () => void;

}

export const BannerSlider: FC<BannerSliderProps> = ({
                                                      slides,
                                                      delaySlide = 5000,
                                                      handleClick
                                                    }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(1041);

  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide(prevState => prevState === slides.length - 1 ? 0 : prevState + 1);
  }

  const prevSlide = () => {
    setCurrentSlide(prevState => prevState === 0 ? slides.length - 1 : prevState - 1);
  }

  useEffect(() => {
    sliderRef.current && setSliderWidth(sliderRef.current.getBoundingClientRect().width);
  }, []);

  return (
    <Styled.Wrapper
      ref={sliderRef}
    >
      <Styled.BannersLine
        slideWidth={sliderWidth}
        width={sliderWidth * slides.length}
        currentSlide={currentSlide}
      >
        {slides.map((slide, index) =>
          <Banner handleClick={handleClick} {...slide} key={slide.title}/>)}
      </Styled.BannersLine>
      {slides.length > 1 && (<Styled.ControlWrapper>
        <Styled.PrevNextControl onClick={prevSlide}>
          <LeftArrow/>
        </Styled.PrevNextControl>
        {slides.map((slide, index) =>
          <Styled.Control key={index} isActive={currentSlide === index}/>)}
        <Styled.PrevNextControl onClick={nextSlide}>
          <RightArrow/>
        </Styled.PrevNextControl>
      </Styled.ControlWrapper>)}
    </Styled.Wrapper>
  )

}
