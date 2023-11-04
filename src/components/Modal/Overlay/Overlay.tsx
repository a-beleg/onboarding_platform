import * as S from './OverlayStyled'
import {FC, ReactNode, useEffect, useRef} from "react";

interface OverlayProps {
  children: ReactNode
  clickFunc: Function
  className?: string
}

const Overlay: FC<OverlayProps> = ({children, clickFunc, className}) => {
  const overlayRef = useRef(null)

  function hiddenMenu(event: MouseEvent) {
    if (event.target === overlayRef.current) {
      clickFunc(false)
    }
  }

  const variantOverlay = {
    visible: {
      backgroundColor: 'rgba(54, 25, 88, 0.8)',
      blur: 10,
    }
  }

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
    document.body.style.left = '0px';
    document.body.style.right = '0px';

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.overflowY = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [])


  return (
    <S.Overlay
      onTap={hiddenMenu}
      variants={variantOverlay}
      animate={'visible'}
      exit={{opacity: 0}}
      ref={overlayRef}
      className={className}
    >
      {children}
    </S.Overlay>
  );
};

export {Overlay};
