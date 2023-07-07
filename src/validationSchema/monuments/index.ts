import * as yup from 'yup';

export const monumentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  rfid: yup.string().required(),
  organization_id: yup.string().nullable(),
});
