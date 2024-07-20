import * as yup from 'yup';
import { usePatterns } from '~hooks';

export const useValidation = () => {
  const { EMAIL, SPECIAL_CHARS } = usePatterns();

  const validationSchema = yup.object().shape({
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
  });
  return { validationSchema };
};
