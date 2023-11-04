import { ButtonHTMLAttributes } from 'react';
import * as S from './style';

export const Button = ({type = 'button', ...props}: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <S.Wrapper type={type} {...props} />
)