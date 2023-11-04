import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "../../helpers/ioc";
import {ProfileStore} from "../../stores/ProfileStore";
import {SearchingUniversity} from '../../api/vuz/searchUniversities';
import {
  StyledContainer,
  StyledFilterField,
  StyledSearch,
  StyledFilterMenu,
  StyledNoOptionMenu,
  StyledBtnClose,
  StyledMenuList,
  StyledVacanciesList,
  StyledVacanciesItem,
  StyledVacanciesWrapper,
  StyledVacancyName,
  NoVacancyText,
  SearchIcon
} from './style';

type SelectSearchProps = {
  defaultValue?: string;
  placeholderText: string;
  handleSearch: any;
  errorStatus: boolean | null;
  isMenuTop: boolean;
}

export const SelectSearch: FC<SelectSearchProps> = observer(
    ({
       defaultValue,
       placeholderText,
       handleSearch,
       errorStatus,
       isMenuTop
    }) => {

  const {
    fetchUniversitiesSearch,
    universitiesList
  } = useStore(ProfileStore)

  const [searchString, setSearchString] = useState('')
  const [checkedString, setCheckedString] = useState<any>(() => {
    if(defaultValue && defaultValue.length > 0){
      return defaultValue
    }else{
      return ''
    }
  })
  const [menuWidth, setMenuWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const refMenu = useRef()

  const listRef = useCallback((node: any) => {
      if (node !== null) {
          setMenuWidth(node.getBoundingClientRect().height);
      }
  }, []);

      useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
          // @ts-ignore
          if (isMenuOpen && refMenu.current && !refMenu.current.contains(e.target)) {
            setIsMenuOpen(false)
            setSearchString('')
          }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isMenuOpen])

  const onSearch = (v:string) => {
    setSearchString(v)

    if(v.length > 2){
      fetchUniversitiesSearch(v)
      setIsMenuOpen(true)
    }
  }

  const onCloseNoOptions = () => {
      if (isMenuOpen && universitiesList.length === 0) {
          setIsMenuOpen(true)
          setSearchString('')
      }
  }

  const onCheckedString = (v: SearchingUniversity) => {
    setIsMenuOpen(false)
    setSearchString('')
    setCheckedString(v.full_name)
    handleSearch(v)
  }

  const removeValue = () => {
    if(checkedString){
      setCheckedString(null)
      handleSearch(null)
    }
  }

  return (
    <StyledContainer>
      <StyledFilterField>
        {isMenuOpen && searchString && searchString.length > 2 &&
        <>
          {universitiesList.length > 0 ?
              // @ts-ignore
           <StyledFilterMenu ref={refMenu}
                             isMenuTop={isMenuTop}
                             maxHeight={menuWidth + 15}>

              {universitiesList.length > 0 &&
              <StyledMenuList >

                  <StyledVacanciesList ref={listRef}>
                    {universitiesList.map((item) => {
                      return (
                          <StyledVacanciesItem key={item.id}
                                               onClick={() => onCheckedString(item)}>
                          <StyledVacanciesWrapper>
                            <StyledVacancyName>{item.full_name}</StyledVacancyName>
                          </StyledVacanciesWrapper>
                          </StyledVacanciesItem>
                      )
                    })}
                  </StyledVacanciesList>

              </StyledMenuList>}

            </StyledFilterMenu> :
            <StyledNoOptionMenu isMenuTop={isMenuTop}>
              <StyledBtnClose onClick={onCloseNoOptions}/>
              <NoVacancyText>По вашему запросу ничего не найдено</NoVacancyText>
            </StyledNoOptionMenu>}
          </>}
        <StyledSearch placeholder={placeholderText}
                      errorStatus={errorStatus}
                      value={checkedString ? checkedString : searchString}
                      onChange={e => onSearch(e.target.value)}/>

        <SearchIcon isChecked={checkedString && checkedString.length > 0} onClick={removeValue}/>

      </StyledFilterField>
    </StyledContainer>
  )
})