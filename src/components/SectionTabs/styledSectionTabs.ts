import styled from "styled-components";
import {Colors} from "../../consts/colors";
import {Breakpoint} from "../../ui/media-queries";

export const Tabs = styled.div<{ margin?: string, padding?: string }>`
  height: auto;
  width: 100%;
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding ? padding : '1rem 1rem'};

  @media (max-width: ${Breakpoint.md}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  @media (max-width: ${Breakpoint.sm}px) {
    padding: 16px 24px;
  }

  @media (max-width: ${Breakpoint.sm}px) {
    min-width: ${Breakpoint.sm}px;
  }
  
`;

export const Nav = styled.ul`
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0;
`;

export const FiltersWrapper = styled.div`
  min-width: 258px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
`;

export const ListItem = styled.li<{ isActive: boolean, padding?: string }>`
  padding: ${({padding}) => padding ? padding : '10px'};
  list-style: none;
  text-align: left;
  cursor: pointer;
  color: ${({isActive}) => isActive ? Colors.TextTabBarActive : Colors.TextDisableDark};
  border-bottom: ${({isActive}) => isActive ? `2px solid ${Colors.LineTabBar}` : 'unset'};
`;

export const Wrapper = styled.div<{ noPadding?: boolean}>`
  gap: 32px;
  width: 100%;
  max-height: 40px;
  display: inline-flex;
  align-items: start;
  justify-content: space-between;
  padding-left: ${({noPadding}) => noPadding ? 'unset' : '35px'};
`;
export const Label = styled.p`
  margin: auto 0;
  white-space: nowrap;
`;

export const Title = styled.p`
  margin: auto 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${Colors.TextSecondary};
`;

export const Content = styled(Title)`
  color: ${Colors.CommonPrimaryDark80}
`;
export const Badge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 8px;
`;

export const BadgesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 16px;
`;

export const Vacancy = styled.div`
  display: grid;
  grid-template-columns: 1fr 136px 120px;
  flex-direction: row;
  align-items: center;
  height: 56px;
  margin-bottom: 16px;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  grid-column-gap: 20px;
  border-radius: 20px;
  background: ${Colors.CommonSecondary80};

  &:hover {
    cursor: pointer;
    background-color: ${Colors.MainNewLightBeige};
  }
  
  @media (max-width: 769px) {
    padding: 16px 0;
  }
`;

export const VacancyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const VacancyTitle = styled(Content)`
font-size: 18px;
`;
