import { InputHTMLAttributes } from 'react';
import * as S from './style';

type Props = {
    hasError?: boolean;
}

export const Input = ({type = 'text', hasError = false, ...props}: InputHTMLAttributes<HTMLInputElement> & Props) => (
    <S.Wrapper type={type} hasError={hasError} {...props} />
);