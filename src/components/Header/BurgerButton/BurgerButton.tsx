import * as S from './styledBurgerButton'
import {useAnimationControls} from "framer-motion";
import {FC, useEffect} from "react";

type BurgerButtonType = {
  toggle: boolean;
  setToggle: Function;
}

const BurgerButton: FC<BurgerButtonType> = ({toggle, setToggle}) => {
  const controls = useAnimationControls()

  function showMenuButton() {
    setToggle((prevState: boolean) => !prevState)
  }

  useEffect(() => {
      controls.start('visible')
  }, [toggle, controls])

  const variantMiddleLineOpen = {
    visible: {
      opacity: 0,
      transition: {duration: .1}
    },
    hidden: {
      opacity: 1,
      transition: {duration: .1}
    }
  }
  const variantMiddleLineClose = {
    visible: {
      opacity: 1,
      transition: {duration: .1}
    },
    hidden: {
      opacity: 0,
      transition: {duration: .1}
    }
  }

  const variantTopLineOpen = {
    visible: {
      rotate: '45deg',
      translateY: 5
    },
  }
  const variantTopLineClose = {
    visible: {
      rotate: 0,
      translateY: 0
    },
  }
  const variantBottomLineOpen = {
    visible: {
      rotate: '-45deg',
      translateY: -5
    },
  }
  const variantBottomLineClose = {
    visible: {
      rotate: '0',
      translateY: 0
    },
  }

  return (
    <S.BurgerButton
      onClick={showMenuButton}
      animate={controls}
      aria-label={'кнопка меню'}
    >
      <S.BurgerLine variants={toggle ? variantTopLineOpen : variantTopLineClose}/>
      <S.BurgerLine variants={toggle ? variantMiddleLineOpen : variantMiddleLineClose}/>
      <S.BurgerLine variants={toggle ? variantBottomLineOpen : variantBottomLineClose}/>
    </S.BurgerButton>
  );
};

export {BurgerButton};
