import * as S from './styledProfileDropdown'
import {FC, Ref, useRef} from "react";
import {useOutsideAlerter} from "../../../../../helpers/clickoutside";

type Props = {
  setDropdown: Function,
  exceptions?: Ref<any>
}

const ProfileDropdown: FC<Props> = ({setDropdown, exceptions}) => {

  const dropdown = useRef(null)

  useOutsideAlerter(dropdown, setDropdown, exceptions)

  return (
    <S.Dropdown ref={dropdown}>
      <S.DropdownItem>
        <S.Button>Профиль</S.Button>
      </S.DropdownItem>

      <S.DropdownItem>
        <S.Button>Выйти</S.Button>
      </S.DropdownItem>
    </S.Dropdown>
  );
};

export {ProfileDropdown};
