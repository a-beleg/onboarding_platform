import styled, {css} from "styled-components";
import {Container} from "../../ui/Container/Container";
import {Link} from "react-router-dom";

type PropsHeader = {
  type: string;
}
export const Header = styled.header<PropsHeader>`
  ${(props) =>
          (props.type === '[contract]' && `background-color: ${props.theme.colors.CommonSecondary80};`) ||
          (props.type === 'index' && `background-color: ${props.theme.colors.CommonPrimaryDark80};`)
  }
  ${({type}) =>
          type === '[contract]' &&
          css`
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
          `}
`;

export const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Logo = styled(Link)`
  cursor: pointer;
  display: inline-block;
`;
