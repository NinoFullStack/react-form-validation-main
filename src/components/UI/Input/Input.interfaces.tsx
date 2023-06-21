import { OnChangeEvent } from './Input.type'

export interface InputProps {
  value: string
  type: string
  label: string
  touched: boolean
  valid: boolean
  msgError: string
  onChange: (e: OnChangeEvent) => void
}
