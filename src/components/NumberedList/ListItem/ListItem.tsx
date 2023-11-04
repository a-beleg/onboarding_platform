import * as S from './styledListItem';
import { FC, ReactNode } from "react";

type PropsItem = {
  item: {
    title: ReactNode;
    description: string;
  };
  index?: number;
  className?: string;
}

const ListItem: FC<PropsItem> = ({ item, index, className }) => {
  const currentIndex = () => {
    if (typeof index === "number") {
      return index + 1;
    }
    return undefined;
  }

  return (
      <S.Item className={className} index={currentIndex()}>
        <S.Article>
          <S.Title>{item.title}</S.Title>
          <S.Description>{item.description}</S.Description>
        </S.Article>
      </S.Item>
  );
};

export { ListItem };
