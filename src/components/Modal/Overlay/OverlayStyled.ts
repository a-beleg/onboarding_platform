import styled from "styled-components";
import {motion} from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
  overflow-y: hidden;
  z-index: 2;
`;
