import styled from "styled-components";
import {Container as UserContainer, Userpic} from "../CardUser/styledCardUser";
import {Breakpoint} from "../../ui/media-queries";
import {Colors} from "../../consts/colors";

export const Wrapper = styled.div<{ editing: boolean }>`
  background-color: ${({editing}) => editing ? Colors.CommonPrimaryLight100 : Colors.CommonSecondary80};
  border-radius: 20px;
  padding: 16px;
  position: relative;
  overflow: visible;
  margin-bottom: 34px;

  @media (max-width: ${Breakpoint.md}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  @media (max-width: ${Breakpoint.sm}px) {
    padding: 16px 24px;
    background-color: ${Colors.CommonSecondary80};
  }
  
  @media (max-width: ${Breakpoint.sm}px) {
    min-width: ${Breakpoint.sm}px;
  }
`;
export const TabWrapper = styled.div`
  border-radius: 20px;
  position: relative;
  overflow: visible;
  margin-bottom: 34px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: ${Breakpoint.md}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  @media (max-width: ${Breakpoint.sm}px) {
    padding: 16px 24px;
    background-color: ${Colors.CommonSecondary80};
  }`

export const Title = styled.h3`
  margin-left: 5px;
  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 135%;
  letter-spacing: -0.03em;
  color: ${Colors.TextPrimaryDark80}
`;

export const Container = styled(UserContainer)`
  margin-left: 5px;
  align-items: stretch;
  flex-direction: column;
  @media (max-width: ${Breakpoint.sm}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const FirstRow = styled(Container)`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: nowrap; /* Change flex-wrap value to nowrap */

  @media (max-width: ${Breakpoint.xs | Breakpoint.sm}px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Row = styled(Container)<{ width?: string }>`
  width: ${({width}) => width};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: ${Breakpoint.sm}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Item = styled.div<{ isLineBreak?: boolean }>`
  gap: 4px;
  flex: ${({isLineBreak}) => isLineBreak ? 'unset' : 'none'};
  flex-grow: 1;
`;

export const Span = styled.p`
  margin: 4px;
  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: ${Colors.TextPrimaryDark80};
  word-wrap: break-word;
`

export const Link = styled(Span)`
  font-size: 14px;
  line-height: 130%;
  color: ${Colors.TextSecondary}
`;

export const DescriptionContainer = styled.div`
  max-width: 518px;
  position: relative;
  display: flex;
  flex-direction: row;
  
`;

export const DescriptionText = styled(Link)`
  color: ${Colors.TextPrimaryDark80};
`;

export const DescriptionLink = styled.a`
  font-size: 14px;
  line-height: 130%;
  color: ${Colors.TextTabBarActive};
`;

export const InlineContainer = styled.div`
  top: 13px;
  right: 332px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translateY(-50%);
`;

export const ProfilePic = styled(Userpic)`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  @media (max-width: ${Breakpoint.sm}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const EditButton = styled.a<{ t?: string, r?: string }>`
  z-index: 1;
  position: absolute;
  top: ${({t}) => t ? t : '12px'};
  right: ${({r}) => r ? r : '12px'};
  margin-left: auto;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' rx='16' fill='%237927E1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.9836 10.8631C20.2026 10.0821 18.9363 10.0821 18.1552 10.8631L17.6838 11.3345L20.5122 14.163L20.9836 13.6916C21.7647 12.9105 21.7647 11.6442 20.9836 10.8631ZM17.2125 13.6916L18.1553 14.6344L12.3055 20.4842L11.4098 20.4371L11.3627 19.5414L17.2125 13.6916ZM10.1414 21.7055L12.8284 21.8469L19.0981 15.5772L20.0409 14.6344L19.0981 13.6916L18.1553 12.7488L17.2125 11.806L16.2697 12.7488L10 19.0185L10.1414 21.7055Z' fill='white'/%3E%3C/svg%3E%0A");
`;
export const FormWrapper = styled.div`
  align-items: stretch;

  padding: 16px;
  width: 100%;
`;
