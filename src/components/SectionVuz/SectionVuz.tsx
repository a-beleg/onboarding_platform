import {useEffect, useMemo, useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import {getUniversities} from "../../api/vuz/getUniversities";
import {Input} from "../../ui/Input/Input";
import {SectionTitle} from "../../ui/Typography";
import {SelectDropdown} from "../../ui/SelectDropdown/SelectDropdown";
import {PhoneInput} from "../../ui/PhoneInput/PhoneInput";
import * as S from './style';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {TextError} from "../../ui/TextError/TextError";
import {updateUniversity} from '../../api/vuz/updateUniversity';
import {University} from "../../api/vuz/getUniversity";
import {getErrorText} from '../../helpers/getErrorText';
import {ButtonSubmit, SubmitWrapper} from "../SectionEditUser/styledSectionEditUser";

const VuzSchema = Yup.object().shape({
    full_name: Yup.string().nullable()
        .required('Обязательно для заполнения'),
    short_name: Yup.string().nullable()
        .required('Обязательно для заполнения'),
    city: Yup.string().nullable()
        .required('Обязательно для заполнения'),
    post_code: Yup.string().nullable()
        .min(6, 'Неверный формат индекса')
        .required('Обязательно для заполнения'),
    address: Yup.string().nullable()
        .required('Обязательно для заполнения'),
    phone: Yup.string().nullable()
        .min(11, 'Введите номер телефона полностью')
        .required('Обязательно для заполнения'),
    site: Yup.string().nullable()
        .matches(/^((http|https):\/\/)?[a-zа-я0-9]+([-.]{1}[a-zа-я0-9]+)*\.[a-zа-я]{2,5}(:[0-9]{1,5})?(\/.*)?$/, 'Неверный формат сайта'),
    org_name: Yup.string().nullable()
        .required('Обязательно для заполнения'),
    inn: Yup.string().nullable()
        .required('Обязательно для заполнения'),
    kpp: Yup.string().nullable()
        .required('Обязательно для заполнения'),
});

type Props = {
    data?: University;
}

const SectionVuz = ({data}: Props) => {
    const [error, setError] = useState('');
    const [universities, setUniversities] = useState<any[]>([]);

    const formik = useFormik({
        initialValues: {
            full_name: '',
            short_name: '',
            city: '',
            post_code: '',
            address: '',
            phone: '',
            site: '',
            image: '',
            org_name: '',
            inn: '',
            kpp: '',
        },
        onSubmit: async (values) => {
            try {
                setError('');
                await updateUniversity({...values, email: data?.email || ''})
                formik.resetForm({values})
            } catch (e: any) {
                setError(getErrorText(e.status))
            }

        },
        validationSchema: VuzSchema,
    })

    useEffect(() => {
        if (!data) {
            return;
        }
        const {full_name, short_name, city, post_code, address, phone, site, image, org_name, inn, kpp} = data;
        formik.resetForm({
            values: {
                full_name,
                short_name,
                city,
                post_code,
                address,
                phone,
                site,
                image,
                org_name,
                inn,
                kpp
            },
        })
    }, [data, formik])

    const handleUiversitySearch = useDebouncedCallback(async () => {
        const {data} = await getUniversities() as any;
        setUniversities(data?.data?.items || []);
    }, 500);

    const eduOptions = useMemo(() => {
        return universities.map(uni => ({
            label: uni.full_name,
            value: uni.id,
            short_name: uni.short_name
        }));
    }, [universities]);

    const selectUniversiy = (val: { value: string } | null) => {
        const value = val?.value;
        const uni = universities.find(u => u.id === value);
        if (!uni) {
            formik.setValues({
                ...formik.values,
                full_name: '',
                short_name: '',
                city: '',
                post_code: '',
                address: '',
                phone: '',
                site: '',
                image: '',
                org_name: '',
                inn: '',
                kpp: '',
            });
            return;
        }

        formik.setValues({
            ...formik.values,
            full_name: uni.full_name,
            short_name: uni.short_name,
            city: uni.city,
            post_code: uni.post_code,
            address: uni.address,
            phone: uni.phone,
            site: uni.site,
            org_name: uni.org_name,
            inn: uni.inn,
            kpp: uni.inn
        })
    }

    const handleDrop = async (images: File[]) => {
        // const {data} = await uploadImage(images[0]);
        // await formik.setFieldValue('photo', `${data.data.url}`);
        await formik.setFieldValue('photo', `${'img/univerpic.png'}`);

    }

    return (
        <S.Wrapper>
            <SectionTitle>Учебное заведение</SectionTitle>
            <S.StyledDropzone isLogo={true} onDrop={handleDrop} imageUrl={formik.values.image}/>
            <S.Form onSubmit={formik.handleSubmit}>
                <S.Row>
                    <SelectDropdown
                        isMultiselect={false}
                        optionsData={eduOptions}
                        defaultPlaceholder={'Длинное название'}
                        handleChange={selectUniversiy}
                        onInputChange={handleUiversitySearch}
                        value={formik.values.full_name ? {
                            label: formik.values.full_name,
                            value: 'full_name'
                        } : undefined}
                        handleBlur={(full_name: string) => full_name && formik.setFieldValue('full_name', full_name)}
                    />
                    {formik.errors.full_name && <TextError>{formik.errors.full_name}</TextError>}
                </S.Row>
                <div>
                    <Input
                        type='text'
                        name='short_name'
                        value={formik.values.short_name}
                        hasError={!!formik.errors.short_name}
                        placeholder='Короткое название'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.short_name && <TextError>{formik.errors.short_name}</TextError>}
                </div>
                <div>
                    <PhoneInput
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        name="phone"
                        regexPattern="^(\+7|7|8)?[\s\-]?\(?[0-9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
                        labelText="+7 XXX XXX XX XX"
                        mask="+7 (999) 999-99-99"
                    />
                    {formik.errors.phone && <TextError>{formik.errors.phone}</TextError>}
                </div>
                <div>
                    <PhoneInput
                        value={formik.values.post_code}
                        onChange={formik.handleChange}
                        name="post_code"
                        regexPattern="^\d+"
                        labelText="Индекс"
                        mask="999999"
                    />
                    {formik.errors.post_code && <TextError>{formik.errors.post_code}</TextError>}
                </div>
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
                        value={formik.values.address}
                        name='address'
                        hasError={!!formik.errors.address}
                        placeholder='Адрес'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.address && <TextError>{formik.errors.address}</TextError>}
                </div>
                <div>
                    <Input
                        type='text'
                        value={formik.values.site}
                        name='site'
                        hasError={!!formik.errors.site}
                        placeholder='Сайт'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.site && <TextError>{formik.errors.site}</TextError>}
                </div>
            <S.Row>
                <div>
                    <Input
                        type='text'
                        value={formik.values.org_name}
                        name='org_name'
                        hasError={!!formik.errors.org_name}
                        placeholder='Название организации'
                        onChange={formik.handleChange}
                    />
                </div>
            </S.Row>
                <div>
                    <Input
                        type='text'
                        value={formik.values.inn}
                        name='inn'
                        hasError={!!formik.errors.inn}
                        placeholder='ИНН'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.site && <TextError>{formik.errors.inn}</TextError>}
                </div>
                <div>
                    <Input
                        type='text'
                        value={formik.values.kpp}
                        name='kpp'
                        hasError={!!formik.errors.kpp}
                        placeholder='КПП'
                        onChange={formik.handleChange}
                    />
                    {formik.errors.site && <TextError>{formik.errors.kpp}</TextError>}
                </div>
                {error && <TextError>{error}</TextError>}
            </S.Form>
            {formik.errors.site && <TextError>{formik.errors.org_name}</TextError>}
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

export default SectionVuz;