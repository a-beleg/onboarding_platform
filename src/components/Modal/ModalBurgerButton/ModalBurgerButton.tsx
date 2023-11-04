import * as S from './ModalBurgerButtonStyled'
import {FC} from "react";

interface ModalBurgerButtonProps {
  toggle: boolean;
  setToggle: Function;
}

const ModalBurgerButton: FC<ModalBurgerButtonProps> = ({setToggle}) => {

  function showMenuButton() {
    setToggle((prevState: boolean) => !prevState)
  }

  return (
    <S.BurgerButton
      onClick={showMenuButton}
      aria-label={'закрыть'}
    >
      <S.BurgerLine/>
      <S.BurgerLine/>
    </S.BurgerButton>
  );
};

export {ModalBurgerButton};
