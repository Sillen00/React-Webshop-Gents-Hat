import { Button, FormHelperTextProps, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

interface CustomFormHelperTextProps extends Partial<FormHelperTextProps<'p', {}>> {
  'data-cy'?: string
}

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
      15,
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

type checkoutFormValues = Yup.InferType<typeof checkoutFormSchema>

export default function CheckoutForm() {
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
    onSubmit: values => {},
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit} data-cy='customer-form'>
        <TextField
          fullWidth
          id='fullName'
          label='Full name'
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
          margin='normal'
          inputProps={{ 'data-cy': 'customer-name' }}
          FormHelperTextProps={{ 'data-cy': 'customer-name-error' } as CustomFormHelperTextProps}
        />
        <TextField
          fullWidth
          id='email'
          label='E-mail'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin='normal'
          inputProps={{ 'data-cy': 'customer-email' }}
          FormHelperTextProps={{ 'data-cy': 'customer-email-error' } as CustomFormHelperTextProps}
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
          inputProps={{ 'data-cy': 'customer-phone' }}
          FormHelperTextProps={{ 'data-cy': 'customer-phone-error' } as CustomFormHelperTextProps}
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
          inputProps={{ 'data-cy': 'customer-address' }}
          FormHelperTextProps={{ 'data-cy': 'customer-address-error' } as CustomFormHelperTextProps}
        />
        <TextField
          fullWidth
          id='zipcode'
          label='Zip code'
          value={formik.values.zipcode}
          onChange={formik.handleChange}
          error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
          helperText={formik.touched.zipcode && formik.errors.zipcode}
          margin='normal'
          inputProps={{ 'data-cy': 'customer-zipcode' }}
          FormHelperTextProps={{ 'data-cy': 'customer-zipcode-error' } as CustomFormHelperTextProps}
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
          inputProps={{ 'data-cy': 'customer-city' }}
          FormHelperTextProps={{ 'data-cy': 'customer-city-error' } as CustomFormHelperTextProps}
        />
        <Button color='primary' variant='contained' fullWidth type='submit'>
          Place order
        </Button>
      </form>
    </div>
  )
}
