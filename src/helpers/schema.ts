import * as yup from 'yup'

import { phoneRegExp } from './regExp'

export const schema = {
  name: yup
    .string()
    .required('Необходимо ввести Имя')
    .min(3, 'Минимально 3 символа'),
  middleName: yup
    .string()
    .required('Необходимо ввести Отчество')
    .min(3, 'Минимально 3 символа'),
  lastName: yup
    .string()
    .required('Необходимо ввести Фамилию')
    .min(3, 'Минимально 3 символа'),
  username: yup
    .string()
    .required('Необходимо ввести Username')
    .min(3, 'Минимально 3 символа'),
  email: yup
    .string()
    .required('Необходимо ввести email')
    .email('Недействительный email'),
  phone: yup
    .string()
    .required('Необходимо ввести телефон')
    .matches(phoneRegExp, 'Телефон введен некорректно'),
  password: yup
    .string()
    .required('Необходимо ввести пароль')
    .min(3, 'Минимально 6 символов'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Required'),
  code: yup
    .string()
    .required('Необходимо ввести sms код')
    .min(6, 'Минимально 6 символов'),
  message: yup
    .string()
    .required('Необходимо ввести сообщение')
    .min(5, 'Минимально 5 символов'),
  country: yup.string().required('Необходимо выбрать страну'),
  deposit: yup.number().required('Необходимо указать число'),
}
