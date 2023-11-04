import * as S from './styledLayoutWithSidebar'
import {ReactNode, useEffect, useState} from "react";
import {Sidebar} from "../Sidebar";
import {Header} from "../Header";
import {Footer} from "../Footer/Footer";

type PropsLayout = {
  children: ReactNode
}

const LayoutWithSidebar = ({ children }: PropsLayout) => {
  const [isSidebar, setSidebar] = useState(true)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1280px)')

    media.addEventListener('change', onChange)

    setSidebar(media.matches)

    function onChange(event: MediaQueryListEvent) {
      setSidebar(event.matches)
    }
    return () => media.removeEventListener('change', onChange)

  }, [])

  return (
    <>
      <S.LayoutContainer>
        {isSidebar && <Sidebar />}
        {!isSidebar && <Header type={'[contract]'} />}
        <S.Main>{children}</S.Main>
      </S.LayoutContainer>
      <Footer />
    </>

  );
};

export { LayoutWithSidebar };
