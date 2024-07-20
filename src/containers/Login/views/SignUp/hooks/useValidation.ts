import * as yup from 'yup';
import { usePatterns } from '~hooks';

export const useValidation = () => {
  const { EMAIL, SPECIAL_CHARS } = usePatterns();

  const validationSchema = yup.object().shape({
    userName: yup
      .string()
      .required('*name is required')
      .min(2, 'name must contain at least two character'),
    email: yup
      .string()
      .required('*email is required')
      .matches(EMAIL, '*the email is incorrect'),
    password: yup
      .string()
      .required('*password is required')
      .min(8, '*password must contain at least 8 characters')
      .matches(
        SPECIAL_CHARS,
        '*password must contain at least one special character',
      ),
    password_confirmation: yup
      .string()
      .required('*password is required')
      .min(8, '*password must contain at least 8 characters')
      .matches(
        SPECIAL_CHARS,
        '*password must contain at least one special character',
      )
      .oneOf([yup.ref('password')], '*passwords must match'),
  });
  return { validationSchema };
};
