import styled, {css} from "styled-components";
import {Colors} from "../../consts/colors";
import {Breakpoint} from "../../ui/media-queries";
import {ButtonLink} from "../../ui/ButtonLink/ButtonLink";

export const Wrapper = styled.div<{ isCurrentUser?: boolean; }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
    padding: 16px 24px;
    background-color: ${Colors.CommonSecondary60};
  }

  ${({isCurrentUser}) => isCurrentUser && css`
    &::before {
      content: '';
      inset: 0;
      border-radius: 20px;
      padding: 2px;
      width: 100%;
      height 100%;
      box-sizing: border-box;
      position: absolute;
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      background-image: linear-gradient(90deg,
      #7420DA 0%,
      #BE2CB9 34.84%,
      #E79570 63.48%,
      #84E3FB 100%);
      pointer-events: none;
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ContainerHeader = styled.div`
  @media (max-width: ${Breakpoint.sm}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const ContainerButtons = styled(Container) <{ visible: boolean }>`
  margin-left: auto;
  @media (max-width: ${Breakpoint.md}px) {
    margin-left: 56px;
  }
  @media (max-width: ${Breakpoint.sm}px) {
    display: ${({visible}) => visible ? 'flex' : 'none'};
    position: absolute;
    top: 11px;
    right: 10px;
    background-color: ${Colors.CommonPrimaryLight100};
    padding: 18px 24px;
    border-radius: 20px;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
  }
`;

export const ContainerUser = styled(Container)`
  @media (max-width: ${Breakpoint.sm}px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;
export const ContainerLinks = styled(Container)`
  @media (max-width: ${Breakpoint.sm}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

export const Userpic = styled.div<{ userpicUrl: string }>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  background-image: url(${({userpicUrl}) => userpicUrl});
  @media (max-width: ${Breakpoint.sm}px) {

  }
`;

export const Phone = styled.a`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  display: flex;
  align-items: center;
  color: #B5ADC2;
  margin-top: 0;
  margin-bottom: 16px;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='23' viewBox='0 0 20 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.9167 3V3.5V3ZM7.08332 3V2.5V3ZM8.74999 15.4167C8.47385 15.4167 8.24999 15.6405 8.24999 15.9167C8.24999 16.1928 8.47385 16.4167 8.74999 16.4167V15.4167ZM11.25 16.4167C11.5261 16.4167 11.75 16.1928 11.75 15.9167C11.75 15.6405 11.5261 15.4167 11.25 15.4167V16.4167ZM7.08332 3.5H12.9167L12.9167 2.5H7.08332V3.5ZM14.0833 4.66667V16.3333H15.0833V4.66667H14.0833ZM12.9167 17.5H7.08332V18.5H12.9167V17.5ZM5.91666 16.3333V4.66667H4.91666V16.3333H5.91666ZM7.08332 17.5C6.43899 17.5 5.91666 16.9777 5.91666 16.3333H4.91666C4.91666 17.53 5.88671 18.5 7.08332 18.5V17.5ZM14.0833 16.3333C14.0833 16.9777 13.561 17.5 12.9167 17.5V18.5C14.1133 18.5 15.0833 17.53 15.0833 16.3333H14.0833ZM12.9167 3.5C13.561 3.5 14.0833 4.02233 14.0833 4.66667H15.0833C15.0833 3.47005 14.1133 2.5 12.9167 2.5V3.5ZM7.08332 2.5C5.88671 2.5 4.91666 3.47005 4.91666 4.66667H5.91666C5.91666 4.02233 6.43899 3.5 7.08332 3.5V2.5ZM8.74999 16.4167H11.25V15.4167H8.74999V16.4167Z' fill='%23B5ADC2'/%3E%3C/svg%3E");
  background-position: left;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  padding-left: 28px;
`;

export const Mail = styled(Phone)`
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 14.6666H3H2.5ZM2.5 6.33329H2H2.5ZM3.18829 5.08017C2.95645 4.93016 2.6469 4.99649 2.49688 5.22833C2.34687 5.46017 2.4132 5.76973 2.64504 5.91974L3.18829 5.08017ZM17.355 5.91974C17.5868 5.76973 17.6531 5.46017 17.5031 5.22833C17.3531 4.99649 17.0435 4.93016 16.8117 5.08017L17.355 5.91974ZM10 10.0833L9.72837 10.5031C9.89367 10.61 10.1063 10.61 10.2716 10.5031L10 10.0833ZM4.16667 5.16663H15.8333V4.16663H4.16667V5.16663ZM17 6.33329V14.6666H18V6.33329H17ZM15.8333 15.8333H4.16667V16.8333H15.8333V15.8333ZM3 14.6666L3 6.33329H2L2 14.6666H3ZM4.16667 15.8333C3.52233 15.8333 3 15.311 3 14.6666H2C2 15.8632 2.97005 16.8333 4.16667 16.8333V15.8333ZM17 14.6666C17 15.311 16.4777 15.8333 15.8333 15.8333V16.8333C17.03 16.8333 18 15.8632 18 14.6666H17ZM15.8333 5.16663C16.4777 5.16663 17 5.68896 17 6.33329H18C18 5.13668 17.03 4.16663 15.8333 4.16663V5.16663ZM4.16667 4.16663C2.97005 4.16663 2 5.13668 2 6.33329H3C3 5.68896 3.52233 5.16663 4.16667 5.16663V4.16663ZM2.64504 5.91974L9.72837 10.5031L10.2716 9.66351L3.18829 5.08017L2.64504 5.91974ZM10.2716 10.5031L17.355 5.91974L16.8117 5.08017L9.72837 9.66351L10.2716 10.5031Z' fill='%23B5ADC2'/%3E%3C/svg%3E");
`;

export const Title = styled.h3`
  color: #7928e0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  margin-top: 0;
  margin-bottom: 4px;
`;

export const ButtonMore = styled(ButtonLink)`
  font-size: 0;
  display: none;

  @media (max-width: ${Breakpoint.sm}px) {
    display: block;
  }
`;

export const FormWrapper = styled.div`
  padding: 16px;
  width: 100%;
`;
