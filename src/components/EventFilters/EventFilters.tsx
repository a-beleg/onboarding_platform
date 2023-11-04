import React, {FC, useState} from "react";
import Checkbox from "../../ui/Checkbox/Checkbox";
import {SelectDropdown} from "../../ui/SelectDropdown/SelectDropdown";
import * as S from "../SectionTabs/styledSectionTabs";

const yearOptions = [
    {
        label: '2022',
        value: 2022,
    },
    {
        label: '2023',
        value: 2023,
    }
]

const monthOptions = [
    {
        label: 'Январь',
        value: 0,
    },
    {
        label: 'Февраль',
        value: 1,
    },
    {
        label: 'Март',
        value: 2,
    },
    {
        label: 'Апрель',
        value: 3,
    },
    {
        label: 'Май',
        value: 4,
    },
    {
        label: 'Июнь',
        value: 5,
    },
    {
        label: 'Июль',
        value: 6,
    },
    {
        label: 'Август',
        value: 7,
    },
    {
        label: 'Сентябрь',
        value: 8,
    },
    {
        label: 'Октябрь',
        value: 9,
    },
    {
        label: 'Ноябрь',
        value: 10,
    },
    {
        label: 'Декабрь',
        value: 11,
    },
]

export type TMonth = {
    label: string;
    value: number;
}

export type TYear = {
    label: string;
    value: number;
}

type Props = {
    handleChangeMonth: (value: TMonth[]) => void;
    handleChangeYear: (value: TYear[]) => void;

}
const EventFilters = ({handleChangeMonth, handleChangeYear}: Props) => {


    return (
        <>
            {/*<Checkbox checked={true} isDisabled={true}/>*/}
            {/*<S.ListItem isActive={false} padding={'10px 0px'}>*/}
            {/*    Онлайн*/}
            {/*</S.ListItem>*/}
            {/*<Checkbox checked={false} isDisabled={true}/>*/}
            {/*<S.ListItem isActive={false} padding={'10px 0px'}>*/}
            {/*    Оффлайн*/}
            {/*</S.ListItem>*/}
            <S.Wrapper>
                <SelectDropdown
                    isMultiselect={true}
                    optionsData={monthOptions}
                    defaultPlaceholder={'Месяц'}
                    handleChange={handleChangeMonth}
                    onInputChange={undefined}
                    value={undefined}
                    handleBlur={undefined}

                />
                <SelectDropdown
                    isMultiselect={true}
                    optionsData={yearOptions}
                    defaultPlaceholder={'Год'}
                    handleChange={handleChangeYear}
                    onInputChange={undefined}
                    value={undefined}
                    handleBlur={undefined}
                />
            </S.Wrapper>
        </>
    )
}
export default EventFilters;