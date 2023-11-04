import * as S from './styledListSteps'

type typeListCards = {
  listCards: {
    title: string;
    description: string;
  }[]
}

const ListSteps = ({listCards}: typeListCards) => {
  return (
    <S.List>
      {listCards.map((card, index) => (
        <S.ListItem key={index}>
          <S.Article>
            <S.Title>{card.title}</S.Title>
            <S.Description>{card.description}</S.Description>
          </S.Article>
        </S.ListItem>
      ))}
    </S.List>
  );
};

export {ListSteps};
