import styled from 'styled-components';
import { Size } from "../media/size";

export const ContainerBlock = styled.div`
  width: 100%;
  max-width: 1228px;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${Size['4x']}px;
  padding-left: ${Size['4x']}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
    padding-right: ${Size['8x']}px;
    padding-left: ${Size['8x']}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg + 'px'}) {
    padding-right: ${Size['16x']}px;
    padding-left: ${Size['16x']}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    padding-right: 0;
    padding-left: 0;
  }
`;