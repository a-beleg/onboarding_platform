import * as S from './styled'
import {useState} from "react";
import {BottomNavList} from '../BottomNavList'

type Props = {
  navList: {
    text: string;
    path: string;
  }[],
}

const ButtonShowMore = ({navList}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)

  function refFunc(elem: HTMLUListElement | null) {
    if (elem) {
      setHeight(elem.getBoundingClientRect().height)
    }
  }

  const toggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Button onClick={toggle} isOpen={isOpen}>Показать еще </S.Button>
      <BottomNavList
        navList={navList}
        isPhoneBreakpoint={true}
        isOpen={isOpen}
        refFunc={refFunc}
        height={height}
      />
    </S.Wrapper>
  );
};

export {ButtonShowMore};
