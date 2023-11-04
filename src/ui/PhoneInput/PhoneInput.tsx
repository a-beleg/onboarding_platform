import { FC } from 'react';
// @ts-ignore
import InputMask from 'react-input-mask';
import { StyledContainer, StyledField, StyledInput, StyledError } from './style';

type PhoneInputProps = {
    onChange: any,
    mask: string,
    labelText: string,
    regexPattern: string,
    errorMessage?: string,
    name: string,
    value?: string,
}

export const PhoneInput: FC<PhoneInputProps> = ({
    onChange,
    value,
    mask,
    labelText,
    regexPattern,
    errorMessage,
    name,
}) => {

    return (
        <StyledContainer>
            <StyledField id={name}>
                <InputMask mask={mask}
                    name={name}
                    placeholder={labelText}
                    onChange={onChange}
                    value={value}>
                    {(inputProps: any) => <StyledInput {...inputProps} pattern={regexPattern} />}
                </InputMask>

                {errorMessage && <StyledError>{errorMessage}</StyledError>}
            </StyledField>
        </StyledContainer>

    )
}
