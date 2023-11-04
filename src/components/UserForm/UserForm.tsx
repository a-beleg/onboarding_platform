import {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {Input} from '../../ui/Input/Input';
import {Dropzone} from '../Dropzone/Dropzone';
import * as S from './style';
import * as Yup from 'yup';
import {TextError} from '../../ui/TextError/TextError';
import {PhoneInput} from '../../ui/PhoneInput/PhoneInput';
import {addUser, TUser} from '../../api/vuz/addUser';
import {updateUser} from '../../api/vuz/updateUser';
import {getErrorText} from '../../helpers/getErrorText';
import {ButtonSubmit, SubmitWrapper} from "../SectionEditUser/styledSectionEditUser";

const UserSchema = Yup.object().shape({
    first_name: Yup.string().min(2, 'Слишком короткое')
        .required('Обязательно для заполнения'),
    last_name: Yup.string().min(2, 'Слишком короткое')
        .required('Обязательно для заполнения'),
    middle_name: Yup.string()
        .required('Обязательно для заполнения'),
    email: Yup.string().email('Неверный формат').required('Обязательно для заполнения'),
    phone: Yup.string()
        .min(11, 'Введите номер телефона полностью')
        .required('Обязательно для заполнения'),
});

type TValues = {
    first_name: string;
    last_name: string;
    middle_name: string;
    email: string;
    phone: string;
    photo: string;
}

type Props = {
    onSubmit: () => void;
    isEdit?: boolean;
    defaultValues?: TValues;
    id?: string;
}

const UserForm = ({onSubmit, isEdit, defaultValues, id}: Props) => {
    const [error, setError] = useState('');
    const handleSubmit = async (fields: TUser) => {
        try {
            if (isEdit && id) {
                await updateUser(id, fields);
            } else {
                await addUser(fields);
            }
            onSubmit();
            formik.resetForm({values: fields});
        } catch (e: any) {
            setError(getErrorText(e.status))
        }
    }

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            middle_name: '',
            email: '',
            phone: '',
            photo: '',
        },
        onSubmit: handleSubmit,
        validationSchema: UserSchema,
    });

    const handleDrop = async (images: File[]) => {
        // const {data} = await uploadImage(images[0]);
        // await formik.setFieldValue('photo', `${data.data.url}`);
        await formik.setFieldValue('photo', `${'/img/userpic.png'}`);

    }

    useEffect(() => {
        formik.resetForm({values: defaultValues})
    }, [defaultValues, formik]);


    const rowContent = () => (
        <>
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
                    type='email'
                    name='email'
                    value={formik.values.email}
                    hasError={!!formik.errors.email}
                    placeholder='Email'
                    onChange={formik.handleChange}
                />
                {formik.errors.email && <TextError>{formik.errors.email}</TextError>}
            </div>
        </>
    );

    return (
        <S.Wrapper>
            <Dropzone onDrop={handleDrop} imageUrl={formik.values.photo}/>
            <S.Form onSubmit={formik.handleSubmit} isEdit={isEdit}>
                <div>
                    <Input
                        type='text'
                        name='last_name'
                        value={formik.values.last_name}
                        hasError={!!formik.errors.last_name}
                        placeholder='Фамилия'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.last_name && <TextError>{formik.errors.last_name}</TextError>}
                </div>
                <div>
                    <Input
                        type='text'
                        name='first_name'
                        value={formik.values.first_name}
                        hasError={!!formik.errors.first_name}
                        placeholder='Имя'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.first_name && <TextError>{formik.errors.first_name}</TextError>}
                </div>
                <div>
                    <Input
                        type='text'
                        name='middle_name'
                        value={formik.values.middle_name}
                        hasError={!!formik.errors.middle_name}
                        placeholder='Отчество'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.middle_name && <TextError>{formik.errors.middle_name}</TextError>}
                </div>
                <>
                    {isEdit ?
                        rowContent()
                        :
                        <S.Row>
                            {rowContent()}
                        </S.Row>
                    }
                </>
                {error && <TextError>{error}</TextError>}
            </S.Form>
            <SubmitWrapper>
                {error && <TextError>{error}</TextError>}
                <ButtonSubmit onClick={() => formik.submitForm()}
                              type='submit'
                              disabled={!formik.isValid || !formik.dirty}
                >
                    {isEdit ? 'Сохранить изменения' : 'Добавить'}
                </ButtonSubmit>
            </SubmitWrapper>
        </S.Wrapper>
    );
}

export default UserForm;