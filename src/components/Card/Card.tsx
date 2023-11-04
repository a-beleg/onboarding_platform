import * as S from './CardStyled';
import { FC, ReactNode } from "react";
import { BaseCardProps, StyledLinkProps } from "../../styles/s-components";

type CardProps = {
  className?: string;
  card: {
    typeCard: BaseCardProps['typeCard'];
    typeLink: StyledLinkProps['type'];
    customElement?: ReactNode;
    badge: string;
    title: string;
    textLink: string;
    pathLink: string | Function;
    isHiddenButton?: boolean;
  };
};

const Card: FC<CardProps> = ({ className, card }) => {
  function toggle() {
    if (typeof card.pathLink === "function") {
      card.pathLink((prevState: boolean) => !prevState);
    }
  }

  function setButton() {
    if (typeof card.pathLink === "function") {
      return (
          <S.CardButton isHidden={card.isHiddenButton} onClick={toggle} typeButton={card.typeLink}>
            {card.textLink}
          </S.CardButton>
      );
    } else {
      return (
          <S.CardLink to={card.pathLink} type={card.typeLink}>
            {card.textLink}
          </S.CardLink>
      );
    }
  }

  return (
      <S.Card typeCard={card.typeCard} className={className}>
        <S.Badge typeCard={card.typeCard}>{card.badge}</S.Badge>
        <S.Title typeCard={card.typeCard}>{card.title}</S.Title>
        {card.customElement && card.customElement}
        {setButton()}
      </S.Card>
  );
};

export { Card };