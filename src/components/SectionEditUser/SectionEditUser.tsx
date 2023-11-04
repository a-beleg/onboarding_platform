import {FC, useEffect, useState} from "react";
import {Input} from "../../ui/Input/Input";
import {ButtonSubmit, SubmitWrapper} from "./styledSectionEditUser";
import {PhoneInput} from "../../ui/PhoneInput/PhoneInput";
import * as S from '../SectionVuz/style';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {TextError} from "../../ui/TextError/TextError";
import {getErrorText} from '../../helpers/getErrorText';
import {uploadImage} from "../../api/user/uploadUserImage";
import {TUser} from "../../api/user/getUser";
import moment from "moment/moment";

const UserSchema = Yup.object().shape({
  first_name: Yup.string().min(2, 'Слишком короткое')
    .required('Обязательно для заполнения'),
  last_name: Yup.string().min(2, 'Слишком короткое')
    .required('Обязательно для заполнения'),
  phone: Yup.string()
    .min(11, 'Введите номер телефона полностью')
    .required('Обязательно для заполнения'),
  birth_date: Yup.string().min(10, 'Введите дату в формате ДД.ММ.ГГ')
    .required('Обязательно для заполнения'),
  city: Yup.string()
    .required('Обязательно для заполнения'),
  email: Yup.string().email('Неверный формат').required('Обязательно для заполнения'),
});

type Props = {
  user?: TUser;
  onUpdate: (data: any) => Promise<void>;
}

const SectionEditUser: FC<Props> = ({user, onUpdate}) => {
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      phone: '',
      birth_date: '',
      city: '',
      email: '',
      photo: '',
    },
    onSubmit: async (values) => {
      try {
        setError('');
        const {birth_date, ...rest} = values
        const formatted = moment(birth_date, 'DD.MM.YYYY').format('YYYY-MM-DD');
        await onUpdate({birth_date: formatted, ...rest})
        formik.resetForm({values})
      } catch (e: any) {
        setError(getErrorText(e.status))
      }

    },

    validationSchema: UserSchema,
  })

  useEffect(() => {
    if (!user) {
      return;
    }
    const {first_name, last_name, phone, birth_date, city, email, photo} = user;
    formik.resetForm({
        values: {
            first_name,
            last_name,
            phone,
            birth_date,
            city,
            email,
            photo,
        },
    })
  }, [user, formik])


  const handleDrop = async (photos: File[]) => {
    if (photos[0].size > 5242880) {
      setError('Размер фото превышает 5 мб')
    } else {
      const {data} = await uploadImage(photos[0]);
        await formik.setFieldValue('photo', `${data.data.url}`);
    }
  }

  return (
    <S.Wrapper>
      <S.StyledDropzone onDrop={handleDrop} imageUrl={formik.values.photo}/>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.ItemsRow amount={2}>
          <Input
            type='text'
            name='first_name'
            value={formik.values.first_name}
            hasError={!!formik.errors.first_name}
            placeholder='Имя'
            onChange={formik.handleChange}
          />
          {formik.errors.first_name && <TextError>{formik.errors.first_name}</TextError>}
          <div>
            <Input
              type='text'
              name="last_name"
              value={formik.values.last_name}
              hasError={!!formik.errors.first_name}
              placeholder="Фамилия"
              onChange={formik.handleChange}
            />
            {formik.errors.last_name && <TextError>{formik.errors.last_name}</TextError>}
          </div>
        </S.ItemsRow>
        <S.ItemsRow amount={2}>
          <div>
            <PhoneInput
              value={formik.values.phone}
              onChange={formik.handleChange}
              name="phone"
              regexPattern="^(\+7|7|8)?[\s\-]?\(?[9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
              labelText="+7 XXX XXX XX XX"
              mask="+7 (999) 999-99-99"
            />
            {formik.errors.phone && <TextError>{formik.errors.phone}</TextError>}
          </div>
          <div>
            <Input
              type='text'
              value={formik.values.birth_date}
              name='birth_date'
              hasError={!!formik.errors.birth_date}
              placeholder='Дата рождения'
              onChange={formik.handleChange}
            />
            {formik.errors.birth_date && <TextError>{formik.errors.birth_date}</TextError>}
          </div>
        </S.ItemsRow>
        <S.ItemsRow amount={2}>
          <div>
            <Input
              type='text'
              value={formik.values.city}
              name='city'
              hasError={!!formik.errors.city}
              placeholder='Город'
              onChange={formik.handleChange}
            />
            {formik.errors.city && <TextError>{formik.errors.city}</TextError>}
          </div>
          <div>
            <Input
              type='text'
              value={formik.values.email}
              name='email'
              hasError={!!formik.errors.email}
              placeholder='Email'
              onChange={formik.handleChange}
            />
            {formik.errors.email && <TextError>{formik.errors.email}</TextError>}
          </div>
        </S.ItemsRow>
      </S.Form>
      <SubmitWrapper>
        {error && <TextError>{error}</TextError>}
        <ButtonSubmit onClick={() => formik.submitForm()}
                      type='submit'
                      disabled={!formik.isValid || !formik.dirty}
        >
          Сохранить изменения
        </ButtonSubmit>
      </SubmitWrapper>

    </S.Wrapper>
  );
}

export default SectionEditUser;