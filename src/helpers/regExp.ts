/* eslint-disable */

import * as yup from 'yup'

export function escapeRegExp(stringToGoIntoTheRegex: string) {
  return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

export function replace(str: string, find: string, replace = '$&') {
  if (!find || !str) return str
  const regStr = escapeRegExp(find)
  const regex = new RegExp(regStr, 'gi')
  return str.replace(regex, replace)
}

export const phoneMask = '+9 (999) 999-99-99'
export const phoneRegExp = new RegExp(
  escapeRegExp(phoneMask).replace(/9/g, '[0-9]'),
  'gi',
)
export const phoneTest = phoneRegExp.test

function equalTo(this: any, ref: any, msg: string) {
  return this.test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path,
    },
    test: function (value: string) {
      return value === this.resolve(ref)
    },
  })
}

yup.addMethod(yup.string, 'equalTo', equalTo)
