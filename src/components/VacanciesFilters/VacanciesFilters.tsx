import React from "react";
import {SelectDropdown} from "../../ui/SelectDropdown/SelectDropdown";
import * as S from "../SectionTabs/styledSectionTabs";

type Props = {
  cities: { label: string, value: string }[],
  directions: { label: string, value: string }[],
  handleChangeCity: (value: {
    label: string;
    value: string;
  }[]) => void,
  handleChangeCategory: (value: {
    label: string;
    value: string;
  }[]) => void,
}

const VacanciesFilters: React.FC<Props> = ({handleChangeCity, handleChangeCategory, cities, directions}) => {
  return (
    <>
      <S.Wrapper>
        <S.FiltersWrapper>
          <SelectDropdown
            isMultiselect={true}
            optionsData={cities}
            defaultPlaceholder={'Город'}
            handleChange={handleChangeCity}
            onInputChange={undefined}
            value={undefined}
            handleBlur={undefined}
          />
          {/*<SelectDropdown*/}
          {/*  isMultiselect={true}*/}
          {/*  optionsData={directions}*/}
          {/*  defaultPlaceholder={'Направление'}*/}
          {/*  handleChange={handleChangeCategory}*/}
          {/*  onInputChange={undefined}*/}
          {/*  value={undefined}*/}
          {/*  handleBlur={undefined}*/}
          {/*/>*/}
        </S.FiltersWrapper>
      </S.Wrapper>
    </>
  );
};

export default VacanciesFilters;
