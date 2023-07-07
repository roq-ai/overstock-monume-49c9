import * as yup from 'yup';

export const paymentValidationSchema = yup.object().shape({
  transaction_id: yup.string().required(),
  user_id: yup.string().nullable(),
});
