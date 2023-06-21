import classes from './Input.module.css'

import { InputProps } from './Input.interfaces'

const isInvalid = ({ valid, touched }: any) => {
  return !valid && touched
}

const Input = (props: InputProps) => {
  const { type = 'text', label, value, msgError, onChange } = props

  const cls = [classes.Input]
  const htmlFor = `${Date.now()}_${type}`

  if (isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{label}</label>
      <input id={htmlFor} type={type} value={value} onChange={onChange} />
      {isInvalid(props) && <small>* {msgError}</small>}
    </div>
  )
}

export default Input
