import React, {FC, ReactElement} from "react";
import * as Styled from "./style";


export type BannerColorScheme = 'darkPurple' | 'pink' | 'peach' | 'blue' | 'darkBlue' | 'yellow';

export type BannerProps = {
  title: string;
  description: ReactElement | string;
  buttonText?: string;
  image: string;
  colorScheme?: BannerColorScheme;
  handleClick?: () => void;
}

export const Banner: FC<BannerProps> = ({
  title,
  buttonText,
  colorScheme = 'darkPurple',
  image,
  handleClick
}) => {


  return (
    <Styled.Wrapper colorScheme={colorScheme}>
      <Styled.BannerImg src={image}/>
      <Styled.TextWrap>
        <Styled.Title>{title}</Styled.Title>
        {
          buttonText && (
            <Styled.Button onClick={handleClick}>
              <Styled.ButtonText>{buttonText}</Styled.ButtonText>
            </Styled.Button>
          )
        }
      </Styled.TextWrap>
    </Styled.Wrapper>
  )
}