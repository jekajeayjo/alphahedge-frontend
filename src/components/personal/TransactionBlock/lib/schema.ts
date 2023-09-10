import * as yup from 'yup'

import { schema } from 'helpers/schema'

export const transactionForm = yup.object().shape({
  deposit: schema.deposit,
})
