import styled from "styled-components";
import {motion} from "framer-motion";

export const BurgerButton = styled(motion.button)`
  padding: 16px;
  width: 56px;
  height: 56px;
  background-color: ${({theme}) => theme.colors.CommonPrimaryDark80};
  border-radius: 40px;

  border: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  z-index: 3;
`;

export const BurgerLine = styled(motion.span)`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.CommonPrimaryLight100};
`;
