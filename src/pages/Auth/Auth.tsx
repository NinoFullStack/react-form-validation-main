import { ReactNode, useState } from 'react'

import classes from './Auth.module.css'
import validator from './Auth.validator'

import ButtonClasses from '../../components/UI/Button/Button.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

import { FormControls } from './Auth.interfaces'

const Auth = () => {
  const [validForm, setValidForm] = useState(false)
  const [formControls, setFormControls] = useState<FormControls>({
    email: {
      value: '',
      type: 'email',
      label: 'Email',
      msgError: '',
      touched: false,
      valid: false,
      validation: {
        required: 'This field is required',
        email: 'Invalid email',
      },
    },
    password: {
      value: '',
      type: 'password',
      label: 'Password',
      msgError: '',
      touched: false,
      valid: false,
      validation: {
        required: 'This field is required',
        minLength: {
          length: 6,
          msg: 'Min length 6 characters',
        },
        maxLength: {
          length: 20,
          msg: 'Max length 20 characters',
        },
      },
    },
  })

  const changeHandler = (value: string, controlName: string) => {
    const formControlsCopy = { ...formControls }
    const control = formControlsCopy[controlName]
    const { valid, msgError } = validator(value, control.validation)

    control.value = value
    control.touched = true
    control.valid = valid
    control.msgError = msgError

    const isValidForm = Object.values(formControlsCopy).reduce(
      (acc, value, i, arr) => {
        const validFields = arr.filter(field => field.valid)
        const isValid = validFields.length === arr.length

        return (acc = isValid)
      },
      false
    )

    setFormControls(formControlsCopy)
    setValidForm(isValidForm)
  }

  const renderFormControls = (): ReactNode => {
    return Object.keys(formControls).map((controlName: string, i: number) => {
      const { value, type, label, touched, valid, msgError } =
        formControls[controlName]

      return (
        <Input
          key={i}
          value={value}
          type={type}
          label={label}
          touched={touched}
          valid={valid}
          msgError={msgError}
          onChange={e => changeHandler(e.target.value, controlName)}
        />
      )
    })
  }

  return (
    <form className={classes.Auth}>
      {renderFormControls()}

      <Button
        title='Submit'
        className={`mt-1 ${!validForm && ButtonClasses.disabled}`}
      />
    </form>
  )
}

export default Auth
