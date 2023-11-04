import * as S from './ModalContentStyled'
import {FC, ReactNode} from "react";

interface ModalContentProps {
  children: ReactNode
}

const ModalContent: FC<ModalContentProps> = ({children}) => {
  return (
    <S.ModalContent>
      {children}
    </S.ModalContent>
  );
};

export {ModalContent};
