import styled from "styled-components";
import {Colors} from "../../consts/colors";
import {Breakpoint} from "../../ui/media-queries";

export const Wrapper = styled.section`
    margin-bottom: 42px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
`;

export const Doc = styled.div`
    background-color: ${Colors.CommonSecondary80};
    border-radius: 20px;
    padding: 16px;
    position: relative;
    overflow: visible;

    @media (max-width: ${Breakpoint.md}px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }

    @media (max-width: ${Breakpoint.sm}px) {
        padding: 24px 16px;
    }

    @media (max-width: ${Breakpoint.xs}px) {
        padding: 16px 24px;
        background-color: ${Colors.CommonSecondary60};
    }
`;

export const Info = styled.div`
    display: flex;
    gap: 16px;
    padding-left: 32px;
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: baseline;
    gap: 8px;

    @media (max-width: ${Breakpoint.sm}px) {
        flex-direction: column;
        gap: 0;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const ContainerData = styled(Container)`
display: flex;

@media (max-width: ${Breakpoint.sm}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
}

    @media (max-width: ${Breakpoint.xs}px) {
        flex-direction: column;
        align-items: flex-start;
        margin-left: auto; 
        gap: 0;
    }
`;

export const DateTitle = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
margin: 0;
    gap: 4px;
    color: ${Colors.TextSecondary};
`;

export const Date = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin: 0;
  gap: 4px;
  color: ${Colors.TextPrimaryDark80};
`;

export const Title = styled.h3`
  color: #7928e0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-top: 0;
  margin-bottom: 16px;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 2C4.5 1.72386 4.72386 1.5 5 1.5H13.1911C13.3221 1.5 13.4479 1.55145 13.5414 1.64328L19.3504 7.34849C19.4461 7.4425 19.5 7.57104 19.5 7.70521V22C19.5 22.2761 19.2761 22.5 19 22.5H5C4.72386 22.5 4.5 22.2761 4.5 22V2Z' stroke='%23AFA3BC'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17 9H11V8H17V9ZM17 16H7V15H17V16ZM17 19H7V18H17V19Z' fill='%23AFA3BC'/%3E%3Crect x='7' y='12' width='10' height='1' fill='%23AFA3BC'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 24px 24px;
  padding-left: 32px;
`;

export const Download = styled.a`
  display: flex;
  cursor: pointer;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.CommonPrimaryDark80};

  background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 13.4v4.1C4 18.9 5.1 20 6.5 20h11c1.4 0 2.5-1.1 2.5-2.5v-4M12 16.7V4.5' stroke='%237927E1' stroke-linecap='round'/%3E%3Cpath d='m16 13.5-4 3.7-4-3.7' stroke='%237927E1' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right;
  background-size: 24px 24px;
  padding-right: 32px;

  transition-property: box-shadow;
  transition-duration: .15s;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: inset 0px -1px 0 0px;
  }

  @media (max-width: ${Breakpoint.sm}px) {
    width: 100%;
    height: 44px;
    font-size: 0;
    border-radius: 90px;
    background: ${Colors.CommonPrimaryDark100};
    padding: 0;
    position: relative;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 24px 24px;
        background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 13.4v4.1C4 18.9 5.1 20 6.5 20h11c1.4 0 2.5-1.1 2.5-2.5v-4M12 16.7V4.5' stroke='%237927E1' stroke-linecap='round'/%3E%3Cpath d='m16 13.5-4 3.7-4-3.7' stroke='%237927E1' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        filter: brightness(0) invert(1);
        pointer-events: none;
    }
}
`;
