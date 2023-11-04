import styled from "styled-components";

export const ModalContent = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  background-color: ${({theme}) => theme.colors.CommonSecondary80};

  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 1;

  padding: 16px;

  @media all and (min-width: ${({theme}) => theme.breakpoints.sm + 'px'}) {
    margin-left: auto;
    width: 368px;
    border-radius: 20px 0 0 20px;
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    width: 700px;
    padding: 32px 30px;
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    width: 720px;
    padding: 40px 30px;
  }
`;
