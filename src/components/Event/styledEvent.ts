import styled from "styled-components";
import {Colors} from "../../consts/colors";
import {theme} from "../../styles/theme";
import {Date, DateTitle, Doc} from "../SectionDocs/styledDoc"
import {Breakpoint} from "../../ui/media-queries";
import {motion} from "framer-motion";


export const Wrapper = styled.section``;
export const Event = styled(Doc)`
  display: flex;
  padding: 16px 0;
  background-color: ${Colors.CommonPrimaryLight100};
  border-bottom: 1px solid ${theme.colors.TextSecondary};
  border-radius: unset;

  &:last-of-type {
    border-bottom: unset;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 8px;
`;
export const RightColumn = styled(LeftColumn)`
  margin-left: 10%;
  flex-basis: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: ${Breakpoint.md}px) {
    margin-left: unset;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  @media (max-width: ${Breakpoint.sm | Breakpoint.xs}px) {
    margin-left: unset;
  }
`;
export const EventLocation = styled(DateTitle)`
  font-size: 14px;
`;
export const EventType = styled(EventLocation)`
  padding-right: 30px;
  background-image: ${theme.icons.Online};
  background-repeat: no-repeat;
  background-position: right;
`;

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const DateWrapper = styled(LocationWrapper)`
  display: flex;
  gap: 8px;
  background-image: unset;
  background-repeat: unset;
  background-position: unset;
`;

export const ImageWrapper = styled(LocationWrapper)<{ userPickUrl: string }>`
  margin-top: 16px;
  width: 291px;
  height: 164px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  background-image: url(${({userPickUrl}) => userPickUrl});
`;

export const EventDate = styled(Date)`
  font-family: 'Druk Cy', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 100%;
  white-space: nowrap;
  text-transform: uppercase
`;
export const EventTime = styled(EventDate)`
  color: ${Colors.TextSecondary};
`;

export const EventZone = styled(EventTime)`
  font-style: normal;
  font-size: 24px;
  padding-top: 10px;
`;
export const EventTitle = styled(Date)`
  font-size: 24px;
  font-weight: 400;
`;
export const EventDescription = styled(DateTitle)`
  font-size: 16px;
`;

export const RegButton = styled(motion.a)<{ hide?: boolean }>`
  color: ${theme.colors.TextPrimaryDark80};
  border: 1px solid ${theme.colors.CommonPrimaryDark80};
  background-color: unset;
  margin: 16px 0;
  align-self: flex-start;
  justify-self: flex-start;
  width: fit-content;
  border-radius: 40px;
  padding: 16px 24px;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  display: ${({hide}) => hide ? 'none' : 'block'}
`;

export const VkButton = styled(motion.a)`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 4px 4px 12px;
  gap: 4px;
  background: #7927E1;
  border-radius: 40px;
  flex-direction: row
`;

export const hoverStyle = {
    border: '1px solid #fff',
    backgroundImage: 'linear-gradient(89.66deg, #6AC5F5 0.21%, #6F86E2 18.07%, #4E51D2 43.92%, #773DCB 69.17%, #A32AC5 101.47%, #fff 120%)',
    color: '#fff',
    transition: {duration: .2, ease: 'easeOut'},
}