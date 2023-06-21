export interface Validation {
  [key: string]:
    | string
    | {
        length: number
        msg: string
      }
}

export interface FormControl {
  value: string
  type: string
  label: string
  msgError: string
  touched: boolean
  valid: boolean
  validation: Validation
}

export interface FormControls {
  [key: string]: FormControl
}

export interface ValidationRules {
  [key: string]: (value: string, validation: Validation) => boolean
}
