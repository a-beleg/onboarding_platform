import {FC, useEffect, useState} from "react";
import * as Yup from "yup";
import {Education} from "../../api/user/getUser";
import {useFormik} from "formik";
import {getErrorText} from "../../helpers/getErrorText";
import * as S from "../SectionVuz/style";
import * as U from '../SectionUser/styledSectionUser'
import {Input} from "../../ui/Input/Input";
import {TextError} from "../../ui/TextError/TextError";
import {ButtonSubmit, SubmitWrapper} from "../SectionEditUser/styledSectionEditUser";
import {SelectSearch} from "../../ui/SelectSearch/SelectSearch";

const VuzSchema = Yup.object().shape({
    university_name: Yup.string()
        .min(2, 'Слишком короткое')
        .required('Обязательно для заполнения'),
    department: Yup.string()
        .min(2, 'Слишком короткое')
        .required('Обязательно для заполнения'),
    faculty: Yup.string()
        .min(2, 'Слишком короткое')
        .required('Обязательно для заполнения'),
    speciality: Yup.string()
        .required('Обязательно для заполнения'),
    education_type: Yup.string()
        .required('Обязательно для заполнения'),
    begin_study_year: Yup.string()
        .required('Обязательно для заполнения'),
    finish_study_year: Yup.string()
});

type EducationProps = {
    education?: Education,
    onUpdate: (data: any) => Promise<void>;
}

const SectionEditVuz: FC<EducationProps> = ({education, onUpdate}) => {

    const [error, setError] = useState('');
    // const [universities, setUniversities] = useState<any[]>([]);
    const [errorUniversityStatus, setErrorUniversityStatus] = useState<boolean | null>(null)
    const [errorUniversityMessage, setErrorUniversityMessage] = useState<boolean | string>(false)

    const formik = useFormik({
        initialValues: {
            university_name: '',
            university_id: '',
            department: '',
            faculty: '',
            speciality: '',
            education_type: '',
            begin_study_year: '',
            finish_study_year: '',
        },
        onSubmit: async (values) => {
            try {
                setError('');
                await onUpdate({...values})
                formik.resetForm({values})
                window.location.reload()
            } catch (e: any) {
                setError(getErrorText(e.status))
            }
        },
        validationSchema: VuzSchema,
    })

    useEffect(() => {
        if (!education) {
            return;
        }
        const {
            university_name,
            university_id,
            department,
            faculty,
            speciality,
            education_type,
            begin_study_year,
            finish_study_year
        } = education;
        formik.resetForm({
            values: {
                university_name,
                university_id,
                department,
                faculty,
                speciality,
                education_type,
                begin_study_year,
                finish_study_year,
            },
        })
    }, [education, formik])

    const onHandleUniversity = (university: any) => {
        if (!university) {
            formik.setValues({
                ...formik.values,
                university_id: ''
            });
            setErrorUniversityStatus(false)
            setErrorUniversityMessage('Обязательное поле')
            return;
        }
        formik.setValues({
            ...formik.values,
            university_id: university.id,
            university_name: university.full_name,
        })

        setErrorUniversityStatus(true)
    }

    return (
        <U.Container>
            <S.Form onSubmit={formik.handleSubmit}>
                <S.ItemsRow amount={2}>
                    <U.Item>
                        <SelectSearch placeholderText={'Университет'}
                                      defaultValue={education?.university_name}
                                      isMenuTop={false}
                                      errorStatus={errorUniversityStatus}
                                      handleSearch={onHandleUniversity}/>
                        {/*<SelectDropdown*/}
                        {/*    isMultiselect={false}*/}
                        {/*    optionsData={eduOptions}*/}
                        {/*    defaultPlaceholder={'Университет'}*/}
                        {/*    handleChange={selectUniversiy}*/}
                        {/*    onInputChange={handleUiversitySearch}*/}
                        {/*    value={formik.values.university_name ? {*/}
                        {/*      label: formik.values.university_name,*/}
                        {/*      value: 'university_id'*/}
                        {/*    } : undefined}*/}
                        {/*/>*/}
                        {!errorUniversityStatus && <TextError>{errorUniversityMessage}</TextError>}
                    </U.Item>
                    <U.Item>
                        <Input
                            type='text'
                            name="department"
                            value={formik.values.department}
                            hasError={!!formik.errors.department}
                            placeholder="Кафедра"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.department && <TextError>{formik.errors.department}</TextError>}
                    </U.Item>
                </S.ItemsRow>
                <S.ItemsRow amount={2}>
                    <U.Item>
                        <Input
                            type='text'
                            name="faculty"
                            value={formik.values.faculty}
                            hasError={!!formik.errors.faculty}
                            placeholder="Факультет"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.department && <TextError>{formik.errors.faculty}</TextError>}
                    </U.Item>
                    <U.Item>
                        <Input
                            type='text'
                            value={formik.values.speciality}
                            name='speciality'
                            hasError={!!formik.errors.speciality}
                            placeholder='Специальность'
                            onChange={formik.handleChange}
                        />
                        {formik.errors.speciality && <TextError>{formik.errors.speciality}</TextError>}
                    </U.Item>
                </S.ItemsRow>
                <S.ItemsRow amount={3}>
                    <U.Item>
                        <Input
                            type='text'
                            value={formik.values.education_type}
                            name='education_type'
                            hasError={!!formik.errors.education_type}
                            placeholder='Статус'
                            onChange={formik.handleChange}
                        />
                        {formik.errors.education_type && <TextError>{formik.errors.education_type}</TextError>}
                    </U.Item>
                    <U.Item>
                        <Input
                            type='text'
                            value={formik.values.begin_study_year}
                            name='begin_study_year'
                            hasError={!!formik.errors.begin_study_year}
                            placeholder='Поступление'
                            onChange={formik.handleChange}
                        />
                        {formik.errors.begin_study_year && <TextError>{formik.errors.begin_study_year}</TextError>}
                    </U.Item>
                    <U.Item>
                        <Input
                            type='text'
                            value={formik.values.finish_study_year}
                            name='finish_study_year'
                            hasError={!!formik.errors.finish_study_year}
                            placeholder='Окончание'
                            onChange={formik.handleChange}
                        />
                        {formik.errors.finish_study_year && <TextError>{formik.errors.finish_study_year}</TextError>}
                    </U.Item>
                </S.ItemsRow>
                <SubmitWrapper>
                    {error && <TextError>{error}</TextError>}
                    <ButtonSubmit
                        onClick={() => formik.submitForm()}
                        type='submit'
                        disabled={!formik.isValid || !formik.dirty || !errorUniversityStatus}>
                        Сохранить изменения
                    </ButtonSubmit>
                </SubmitWrapper>
            </S.Form>
        </U.Container>
    );
}

export default SectionEditVuz