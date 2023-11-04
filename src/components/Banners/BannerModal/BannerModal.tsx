import * as S from './style';

type Props = {
  close: () => void;
}

const BannerModal = ({close}: Props) => {
  return (
    <S.StyledOverlay clickFunc={close}>
      <S.Wrapper>
        <S.Title>Как попасть на стажировку?</S.Title>
        <S.Description>
          {
            " 1. Проверь наличие договора между ом и твоим учебным заведением\n" +
              " 2. В случае отсутствия – подай заявку на подключение твоего учебного заведения в систему банка\n" +
            " 3. Откликнись на предложение стажировки в разделе «Вакансии»\n" +
            " 4. Дождись ответа от куратора проекта со стороны банка\n" +
            " 5. Подготовь необходимые документы: направление на практику от учебного заведения и свой паспорт\n" +
            " 6. Пройди процедуру оформления"
          }
        </S.Description>
        <S.ButtonClose onClick={close}/>
      </S.Wrapper>
    </S.StyledOverlay>
  );
}

export default BannerModal;