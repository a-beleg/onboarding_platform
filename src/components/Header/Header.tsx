import * as S from './styledHeader'

import {LogoDark} from "../svg_components/LogoDark";
import {LogoLight} from "../svg_components/LogoLight";

import {MenuProps} from "./Menu/Menu";
import {FC, ReactNode, useState} from "react";
import {BurgerButton} from "./BurgerButton";
import {MobileMenu} from "./MobileMenu";
import {AnimatePresence} from "framer-motion";
import {ButtonLogin} from "./ButtonLogin";

type HeaderProps = {} & MenuProps;

const Header: FC<HeaderProps> = ({type}) => {
  const [toggle, setToggle] = useState(false)

  function ifTypeContract(): ReactNode {
    return (
      <>
        <BurgerButton toggle={toggle} setToggle={setToggle}/>
        <AnimatePresence>
          {toggle && <MobileMenu key='overlay' clickFunc={setToggle}/>}
        </AnimatePresence>
      </>
    )
  }

  function ifTypeIndex(): ReactNode {
    return (
      <>
        <ButtonLogin/>
      </>
    )
  }

  return (
    <S.Header type={type}>
      <S.MainContainer>
        <S.Logo to={'/'}>
          {type === '[contract]' && <LogoDark width={122} height={30}/>}
          {type === 'index' && <LogoLight width={122} height={30}/>}
        </S.Logo>

        {type === '[contract]' && ifTypeContract()}
        {type === 'index' && ifTypeIndex()}

      </S.MainContainer>
    </S.Header>
  );
};

export {Header};
