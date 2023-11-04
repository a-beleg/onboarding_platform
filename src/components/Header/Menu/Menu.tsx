import * as S from './styledMenu'
import {FC} from "react";

export type MenuProps = {
  type: '[contract]' | 'index',
}

const Menu: FC<MenuProps> = ({type}) => {
  return (
    <S.Menu>
    </S.Menu>
  );
};

export {Menu};
