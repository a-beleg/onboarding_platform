import styled from "styled-components";
import {RegButton} from "../../Event/styledEvent";

export const Info= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const HorizontalCard = styled.div<{amount:number}>`
  gap:25px ;
  display:grid;
  width: 100%;
  grid-template-columns: ${({amount}) => `${amount}fr 2fr`}
`

export const Course = styled.div<{width?:string}>`
  width: ${({width}) => width? width : '33%'};
  align-items:stretch;
  padding: 16px;
  gap: 24px;
  background: ${({theme}) => theme.colors.CommonSecondary80};
  border-radius: 16px;
`;

export const Image = styled.div<{ img: string }>`
  width: 272px;
  height: 185px;
  border-radius: 16px;
  justify-content: center;
  flex-direction: column;
  background-image:url( ${({img}) => img});
  background-size: cover;
  background-position: center;
`;

export const Badge = styled.div`
  justify-self: center;
  text-align: center;
  width: content-box;
  padding: 1px 10px 2px;
  background:${({theme}) => theme.colors.CommonPrimaryDark40};
  border-radius: 100px;
  font-family: 'Roboto',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({theme}) => theme.colors.CommonSecondary80};
`;

export const ProgramTitle = styled.p`
  margin-top: 10px;
  //white-space: nowrap;
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 135%;
  color: ${({theme}) => theme.colors.CommonPrimaryDark80};
`;

export const ProgramDescription = styled(ProgramTitle)`
  margin: 0;
  font-size: 18px;
`;

export const ProgramButton = styled(RegButton)`
  justify-self: center;
  text-align: center;
  width: content-box;
`;



