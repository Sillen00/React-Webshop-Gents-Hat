import { createContext, useState } from 'react'

interface FormData {
  address: string
  fullName: string
  email: string
  phoneNumber: string
  zipcode: string
  city: string
}

interface FormContextTypes {
  formValues: FormData
  setFormValues: (values: FormData) => void
}

const defaultFormValue: FormContextTypes = {
  formValues: {
    address: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    zipcode: '',
    city: '',
  },
  setFormValues: () => {},
}

export const FormContext = createContext<FormContextTypes>(defaultFormValue)

interface FormContextProviderProps {
  children: React.ReactNode
}

export const FormProvider: React.FC<FormContextProviderProps> = ({ children }) => {
  const [formValues, setFormValues] = useState<FormData>(defaultFormValue.formValues)

  const contextValue: FormContextTypes = {
    formValues,
    setFormValues,
  }

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
}
