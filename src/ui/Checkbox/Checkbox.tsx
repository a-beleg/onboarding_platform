import {FC, useState} from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  padding: 10px;
`;

const HiddenCheckbox = styled.input.attrs({type: "checkbox"})<{ checked: boolean }>`
  -webkit-appearance: none;
  appearance: none;
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.15em;
  margin-right: 0.5em;
  border: 0.15em solid #CEC1E6;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: #7B5AB7;
    border: 0.15em solid #7B5AB7;
    position: relative;
  }

  &:checked::before {
    content: "\\2713";
    font-size: 1.5em;
    color: #fff;
    position: absolute;
    right: 1px;
    top: -5px;
  }

  &:disabled {
    border-color: #c0c0c0;
    background-color: #c0c0c0;
  }

`;

type IProps = {
    checked: boolean,
    isDisabled?: boolean,
    showResult?: string
}

const Checkbox: FC<IProps> = ({checked, isDisabled, showResult}) => {

    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <CheckboxContainer>
                <HiddenCheckbox
                    checked={isChecked}
                    onChange={handleOnChange}
                    className={isChecked ? "checked" : ""}
                    disabled={isDisabled}
                />
            </CheckboxContainer>
        </>

    );
};
export default Checkbox;