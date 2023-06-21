import { Validation } from './Auth.interfaces'

export type Validator = (
  value: string,
  validation: Validation
) => { valid: boolean; msgError: string }
