import styled from "styled-components";
import {Link} from "react-router-dom";

export type StyledLinkProps = {
    type: 'secondary-light' | 'secondary-dark';
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  border-radius: 40px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  padding: 16px 24px;
  display: inline-block;

  background-color: transparent;
  border: 1px solid ${(props) =>
    (props.type === 'secondary-light' && props.theme.colors.CommonPrimaryDark80) ||
    (props.type === 'secondary-dark' && props.theme.colors.CommonPrimaryLight100)
  };
  color: ${(props) =>
    (props.type === 'secondary-light' && props.theme.colors.TextPrimaryDark80) ||
    (props.type === 'secondary-dark' && props.theme.colors.TextPrimaryLight100)
};

  transition-property: color, background-color, border-color, transform;
  transition-timing-function: ease-in-out;
  transition-duration: .2s;

  &:hover {
    background-color: ${(props) =>
    (props.type === 'secondary-light' && props.theme.colors.CommonPrimaryDark80) ||
    (props.type === 'secondary-dark' && props.theme.colors.CommonPrimaryLight100)
};
    color: ${(props) =>
    (props.type === 'secondary-light' && props.theme.colors.TextPrimaryLight100) ||
    (props.type === 'secondary-dark' && props.theme.colors.TextPrimaryDark80)
};
  }

  &:active {
    transform: scale(.9);
  }

  &.is-disabled {
    pointer-events: none;
    color: ${(props) =>
    (props.type === 'secondary-light' && props.theme.colors.TextDisableLight) ||
    (props.type === 'secondary-dark' && props.theme.colors.TextDisableDark)
};
    border-color: ${(props) =>
    (props.type === 'secondary-light' && props.theme.colors.BorderDisabledLight) ||
    (props.type === 'secondary-dark' && props.theme.colors.BorderDisabledDark)
};
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    font-size: 18px;
    line-height: 1.35;
  }
`;

interface StyledButtonProps {
    typeButton: 'secondary-light' | 'secondary-dark';
}

export const StyledButton = styled.button<StyledButtonProps>`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  border-radius: 40px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  padding: 16px 24px;
  display: inline-block;

  background-color: transparent;
  border: 1px solid ${(props) =>
    (props.typeButton === 'secondary-light' && props.theme.colors.CommonPrimaryDark80) ||
    (props.typeButton === 'secondary-dark' && props.theme.colors.CommonPrimaryLight100)
  };
  color: ${(props) =>
    (props.typeButton === 'secondary-light' && props.theme.colors.TextPrimaryDark80) ||
    (props.typeButton === 'secondary-dark' && props.theme.colors.TextPrimaryLight100)
};

  transition-property: color, background-color, border-color, transform;
  transition-timing-function: ease-in-out;
  transition-duration: .2s;

  &:hover {
    background-color: ${(props) =>
    (props.typeButton === 'secondary-light' && props.theme.colors.CommonPrimaryDark80) ||
    (props.typeButton === 'secondary-dark' && props.theme.colors.CommonPrimaryLight100)
};
    color: ${(props) =>
    (props.typeButton === 'secondary-light' && props.theme.colors.TextPrimaryLight100) ||
    (props.typeButton === 'secondary-dark' && props.theme.colors.TextPrimaryDark80)
};
  }

  &:active {
    transform: scale(.9);
  }

  &[disabled] {
    pointer-events: none;
    color: ${(props) =>
    (props.typeButton === 'secondary-light' && props.theme.colors.TextDisableLight) ||
    (props.typeButton === 'secondary-dark' && props.theme.colors.TextDisableDark)
};
    border-color: ${(props) =>
    (props.typeButton === 'secondary-light' && props.theme.colors.BorderDisabledLight) ||
    (props.typeButton === 'secondary-dark' && props.theme.colors.BorderDisabledDark)
};
  }

  @media all and (min-width: ${({theme}) => theme.breakpointsShort.xl}) {
    font-size: 18px;
    line-height: 1.35;
  }
`;

export type BaseCardProps = {
    typeCard: 'main' | 'additional';
};

export const BaseCard = styled.article<BaseCardProps>`
  padding: 16px;
  border-radius: 20px;
  min-height: 264px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  background-color: ${(props) =>
    (props.typeCard === 'main' && props.theme.colors.CommonSecondary60) ||
    (props.typeCard === 'additional' && props.theme.colors.CommonPrimaryDark20)
  };

  @media all and (min-width: ${({ theme }) => theme.breakpointsShort.md}) {
    min-height: 320px;
  }
`;

export const BaseCardBadge = styled.p<BaseCardProps>`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  color: ${(props) =>
    (props.typeCard === 'main' && props.theme.colors.TextPrimaryDark80) ||
    (props.typeCard === 'additional' && props.theme.colors.TextPrimaryLight100)
  };

  margin: 0 0 48px;
`;

export const BaseCardTitle = styled.h3<BaseCardProps>`
  font-family: 'Druk Cy', sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: ${(props) =>
          (props.typeCard === 'main' && props.theme.colors.TextPrimaryDark80) ||
          (props.typeCard === 'additional' && props.theme.colors.TextPrimaryLight100)
  };

  margin: 0 0 24px;

  @media all and (min-width: ${({theme}) => theme.breakpointsShort.xl}) {
    font-size: 32px;
  }
}`;