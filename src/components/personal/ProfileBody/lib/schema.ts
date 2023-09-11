import * as yup from 'yup'

import { schema } from 'helpers/schema'

export const updateProfileSchema = yup.object().shape({
  fam: schema.lastName,
  im: schema.name,
  email: schema.email,
  userName: schema.username,
  phoneNumber: schema.phone,
  country: schema.country,
  oldPassword: schema.password,
  newPassword: schema.password,
  repeat_password: schema.confirmPassword,
})
