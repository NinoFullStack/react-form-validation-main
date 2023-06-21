import { ValidationRules } from './Auth.interfaces'
import { Validator } from './Auth.type'

const isEmail = (value: string): boolean => {
  return /^((([a-z]|[0-9]|!|#|$|%|&|'|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+(\.([a-z]|[0-9]|!|#|$|%|&|'|\+|\-|\/|=|\?|\^|_|`|\{|\||\}|~)+)*)@((((([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.))*([a-z]|[0-9])([a-z]|[0-9]|\-){0,61}([a-z]|[0-9])\.)[\w]{2,4}|(((([0-9]){1,3}\.){3}([0-9]){1,3}))|(\[((([0-9]){1,3}\.){3}([0-9]){1,3})\])))$/.test(
    value
  )
}

const validationRules: ValidationRules = {
  email: value => isEmail(value),
  required: value => value.trim() !== '',
  minLength: (value, { minLength }) => value.length >= minLength.length,
  maxLength: (value, { maxLength }) => value.length <= maxLength.length,
}

const validator: Validator = (value, validation) => {
  const { valid = true, msgError = '' } = Object.keys(validation).reduce(
    (acc: any, key: string) => {
      const valid = validationRules[key](value, validation)
      const current: any = validation[key]

      if (!valid && !Object.keys(acc).length) {
        acc = {
          valid,
          msgError: current.msg || current,
        }
      }

      return acc
    },
    {}
  )

  return { valid, msgError }
}

export default validator
