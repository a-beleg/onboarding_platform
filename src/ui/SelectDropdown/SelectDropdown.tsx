import React, {useState, FC, useRef} from 'react';
import Select, {components, ControlProps, GroupBase, OptionProps} from 'react-select';
import {LabelWrapper, StyledControlContainer, ValueWrapper} from './style';
import customSelectStyles from "./customSelectStyles";
import Checkbox from "../Checkbox/Checkbox";

interface SelectDropdownProps {
    optionsData: any;
    defaultPlaceholder: string;
    handleChange: (value: any) => void;
    onInputChange?: (newValue: string) => void;
    value?: any;
    handleBlur?: (search: string) => void;
    className?: string;
    isMultiselect: boolean;

}

export const SelectDropdown: FC<SelectDropdownProps> = (
    {
        optionsData,
        defaultPlaceholder,
        handleChange,
        onInputChange,
        value,
        handleBlur,
        className,
        isMultiselect,
    }
) => {
    const [search, setSearch] = useState(value?.label)
    const [focus, setFocus] = useState(false)
    const selectInputRef = useRef<any | undefined>()

    const handleFocus = (status: boolean) => {
        if (status) {
            onInputChange?.(search)
            setFocus(true)
        } else {
            setFocus(false)
            handleBlur?.(search);
        }
    }


    const handleSearch = (searchStr: string) => {
        setSearch(searchStr);
        onInputChange?.(searchStr);
    }


    const Control: FC<ControlProps> = ({children, ...props}) => {
        return (
            <components.ValueContainer {...props}>
                <StyledControlContainer className={className}>
                    {children}
                </StyledControlContainer>
            </components.ValueContainer>
        );

    };

    const Option = (props: JSX.IntrinsicAttributes & OptionProps<unknown, boolean, GroupBase<unknown>>) => {

        return (
            <components.Option {...props}>
                <ValueWrapper>
                    <Checkbox checked={props.isSelected}
                              isDisabled={false}
                              showResult={props.label}
                    />
                    <LabelWrapper>
                        <label>{props.label}</label>
                    </LabelWrapper>
                </ValueWrapper>
            </components.Option>
        );
    };

    const onChange = (value: any) => {
        handleChange(value)
    }
    return (
        <Select
            onChange={onChange}
            ref={selectInputRef}
            styles={customSelectStyles}
            isClearable
            onFocus={() => handleFocus(true)}
            onBlur={() => handleFocus(false)}
            components={isMultiselect ? {Option} : {Control}}
            closeMenuOnSelect={!isMultiselect}
            hideSelectedOptions={false}
            placeholder={focus ? '' : defaultPlaceholder}
            options={optionsData}
            onInputChange={handleSearch}
            inputValue={search}
            value={value}
            noOptionsMessage={() => 'Нет совпадений'}
            className={className}
            isMulti={isMultiselect}
        />
    )
}
