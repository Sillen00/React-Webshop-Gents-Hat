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
}

export const FormContext = createContext<FormContextTypes>(defaultFormData)

export const FormProvider = (props: PropsWithChildren) => {
  const [formValues, setFormValues] = useState(defaultFormData.formValues)

  return <FormContext.Provider value={{formValues, setFormValues}}>{props.children}</FormContext.Provider>
}
