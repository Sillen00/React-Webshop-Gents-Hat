import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'

export default function CheckoutForm() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      adress: '',
      postalCode: '',
      city: '',
    },

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
          margin="normal"
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
          margin="normal"
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
          margin="normal"
        />
        <TextField
          fullWidth
          id='adress'
          label='Adress'
          value={formik.values.adress}
          onChange={formik.handleChange}
          error={formik.touched.adress && Boolean(formik.errors.adress)}
          helperText={formik.touched.adress && formik.errors.adress}
          margin="normal"
        />
        <TextField
          fullWidth
          id='postalCode'
          label='Postal code'
          value={formik.values.postalCode}
          onChange={formik.handleChange}
          error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
          helperText={formik.touched.postalCode && formik.errors.postalCode}
          margin="normal"
        />
        <TextField
          fullWidth
          id='city'
          label='City'
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          margin="normal"
        />
        <Button color='primary' variant='contained' fullWidth type='submit'>
          Place order
        </Button>
      </form>
    </div>
  )
}
