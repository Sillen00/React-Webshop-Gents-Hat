import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const checkoutFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Please tell us your full name.')
    .min(
      5,
      'The name you have given us it too short. Please give us a name of minimum 5 characters.'
    ),
  email: Yup.string()
    .email("Your e-mail seems to be incorrectly formatted. Please make sure it's correct.")
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
      15,
      'The address you have given us it too long. Please give us an address of maximum 60 characters.'
    ),
  postalCode: Yup.string()
    .required('Please tell us your postal code.')
    .matches(
      /^[0-9]*$/,
      'Your postal code must be numeric. Please give us a correctly formatted postal code.'
    )
    .min(
      5,
      'The postal code should be 5 characters long. Please make sure you have given us a correct postal code.'
    )
    .max(
      5,
      'The postal code should be 5 characters long. Please make sure you have given us a correct postal code.'
    ),
  city: Yup.string().required('Please tell us in which city you reside.'),
})

type checkoutFormValues = Yup.InferType<typeof checkoutFormSchema>

export default function CheckoutForm() {
  const formik = useFormik<checkoutFormValues>({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
      postalCode: '',
      city: '',
    },
    validationSchema: checkoutFormSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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
        <TextField
          fullWidth
          id='email'
          label='E-mail'
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin='normal'
        />
        <TextField
          fullWidth
          id='phoneNumber'
          label='Phone number'
          type='tel'
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          margin='normal'
        />
        <TextField
          fullWidth
          id='address'
          label='address'
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          margin='normal'
        />
        <TextField
          fullWidth
          id='postalCode'
          label='Postal code'
          value={formik.values.postalCode}
          onChange={formik.handleChange}
          error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
          helperText={formik.touched.postalCode && formik.errors.postalCode}
          margin='normal'
        />
        <TextField
          fullWidth
          id='city'
          label='City'
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          margin='normal'
        />
        <Button color='primary' variant='contained' fullWidth type='submit'>
          Place order
        </Button>
      </form>
    </div>
  )
}
