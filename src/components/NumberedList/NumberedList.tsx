import * as S from './styledNumberedList'
import {FC, ReactNode} from "react";

type Props = {
  list: {
    title: ReactNode;
    description: string;
  }[];
}

const NumberedList: FC<Props> = ({list}) => {
  return (
      <S.ListOl>
        {list.map((item, index) => (
            <S.Item item={item} key={index} index={index}/>
        ))}
      </S.ListOl>
  );
};

export {NumberedList};
