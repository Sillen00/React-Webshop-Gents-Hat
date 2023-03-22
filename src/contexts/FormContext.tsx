import { createContext, PropsWithChildren, useState } from 'react'

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
  clearForm: () => void
}

const defaultFormData: FormContextTypes = {
  formValues: {
    address: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    zipcode: '',
    city: '',
  },
  setFormValues: () => {},
  clearForm: () => {},
}

// Context to share form data between components
export const FormContext = createContext<FormContextTypes>(defaultFormData)

export const FormProvider = (props: PropsWithChildren) => {
  const [formValues, setFormValues] = useState(defaultFormData.formValues)

  const clearForm = () => {
    setFormValues(defaultFormData.formValues)
  }

  return <FormContext.Provider value={{formValues, setFormValues, clearForm}}>{props.children}</FormContext.Provider>
}
