import styled from "styled-components";
import { Link } from "react-router-dom";

export const Sidebar = styled.aside`
  min-height: calc(802px - 60px);
  //max-height: calc(902px - 40px);
  flex: 292px 0 0;
  margin: 20px 20px 20px 0;

  background-color: ${({ theme }) => theme.colors.CommonSecondary80};
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar{ 
    display: none;  /* Safari and Chrome */
  }
`;

export const Logo = styled(Link)`
  cursor: pointer;
  display: inline-block;
`;

export const Hr = styled.hr`
  margin: 12px 0 24px;
  border: none;
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.CommonSecondary60};
`;

export const MainContent = styled.div`
  padding: 20px;
`;
