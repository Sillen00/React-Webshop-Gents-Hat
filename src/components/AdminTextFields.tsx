import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { FormContext } from '../contexts/FormContext'

const checkoutFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Please tell us your full name.')
    .min(
      5,
      'The name you have given us it too short. Please give us a name of minimum 5 characters.'
    ),
  email: Yup.string()
    .email("Your e-mail seems to be incorrectly formatted. Please make sure it's correct.")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Your e-mail seems to be incorrectly formatted. Please make sure it's correct."
    )
    .required('Please tell us your email.')
    .min(
      7,
      'The e-mail you have given us it too short. Please give us an e-mail of minimum 7 characters.'
    ),
  phoneNumber: Yup.string()
    .required('Please tell us your phone number.')
    .matches(
      /^[0-9]*$/,
      'Your phone number must be numeric. Please give us a correctly formatted phone number.'
    )
    .min(
      8,
      'The phone number you have given us it too short. Please give us a phone number of minimum 8 characters.'
    )
    .max(
      15,
      'The phone number you have given us it too long. Please give us a phone number of maximum 15 characters.'
    ),
  address: Yup.string()
    .required('Please tell us on what address you currently live at.')
    .min(
      6,
      'The address you have given us it too short. Please give us an address of minimum 6 characters.'
    )
    .max(
      60,
      'The address you have given us it too long. Please give us an address of maximum 60 characters.'
    ),
  zipcode: Yup.string()
    .required('Please tell us your zip code.')
    .matches(
      /^[0-9]*$/,
      'Your zip code must be numeric. Please give us a correctly formatted zip code.'
    )
    .min(
      5,
      'The zip code should be 5 characters long. Please make sure you have given us a correct zip code.'
    )
    .max(
      5,
      'The zip code should be 5 characters long. Please make sure you have given us a correct zip code.'
    ),
  city: Yup.string().required('Please tell us in which city you reside.'),
})

/* ----------------------
         FORMIK
---------------------- */

type checkoutFormValues = Yup.InferType<typeof checkoutFormSchema>

function AdminTextFields() {
  const navigate = useNavigate()
  const { setFormValues } = useContext(FormContext)

  const formik = useFormik<checkoutFormValues>({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
      zipcode: '',
      city: '',
    },
    validationSchema: checkoutFormSchema,
    onSubmit: values => {
      setFormValues(values)
      navigate('/confirmation')
    },
  })

  /* ----------------------
       FORM COMPONENT
  ---------------------- */

  return (
    <>
      <TextField
        fullWidth
        id='fullName'
        label='Full name'
        value={formik.values.fullName}
        onChange={formik.handleChange}
        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
        helperText={formik.touched.fullName && formik.errors.fullName}
        margin='normal'
      />
      
    </>
  )
}

export default AdminTextFields
