import styled, {css} from "styled-components";
import {Colors} from "../../consts/colors";
import {motion} from "framer-motion";

export const Vacancy = styled.div`
  padding: 50px 0 10px 10px;
`;

export const VacancyHeader = styled.header`
  display: flex;
`;

export const VacancyBody = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 12px;
  }
`;

export const VacancyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const IllustrationWrapper = styled.div`
  margin-top: 40px;
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const BackButton = styled.a`
  user-select: none;
  cursor: pointer;
  display: flex;
  gap: 5px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${Colors.CommonPrimaryDark80};
`;

export const Location = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${Colors.TextSecondary};
`;

export const Label = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${Colors.TextPrimaryDark80};
`;

export const Title = styled.h1`
  margin-top: 0;
  max-width: 550px;
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  color: ${Colors.TextPrimaryDark80};
  margin-bottom: 32px;
`;

export const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  color: ${Colors.TextPrimaryDark80};
  order: 0;
  align-self: stretch;
`;

export const Point = styled.li`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  color: ${Colors.TextPrimaryDark80};
  list-style-type: none;
  position: relative;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background-color: ${Colors.TextPrimaryDark80};
    border-radius: 50%;
  }
`;

export const ResponseButton = styled(motion.button)<{ inactive?: boolean }>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  gap: 10px;
  width: 372px;
  height: 46px;
  border-radius: 40px;
  flex: none;
  order: 0;
  flex-grow: 0;
  background: ${({ inactive }) => (inactive ? Colors.TextDisableLight : Colors.CommonPrimaryDark80)};
  color: ${Colors.TextPrimaryLight100};
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out;

  ${({ inactive }) =>
      !inactive &&
      css`
        &:hover {
          border: 1px solid ${Colors.TextPrimaryDark80};
          background-color: ${Colors.TextPrimaryLight100};
          color: ${Colors.TextPrimaryDark80};
        }
      `}

  ${({ inactive }) =>
      inactive &&
      css`
        cursor: not-allowed;
      `}
`;

export const Description = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 135%;
  letter-spacing: -0.03em;
  color: ${Colors.TextPrimaryDark80};
`;