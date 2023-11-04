import styled from "styled-components";
import { Container } from "../../ui/Container/Container";

export const LayoutContainer = styled(Container)`
  @media all and (min-width: ${({ theme }) => theme.breakpointsShort.xl}) {
    display: flex;
  }
`;
export const Main = styled.main`
  padding-top: 88px;
  max-width: 896px;
  @media all and (min-width: ${({ theme }) => theme.breakpointsShort.xl}) {
    padding-top: 0;
    flex: auto;
  }
`;
