import classes from './Button.module.css'

const Button = (props: any) => {
  const { onClick, title, className, type = 'submit' } = props
  const cls = [classes.Button, className]

  return (
    <button className={cls.join(' ')} type={type} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
