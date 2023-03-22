import { Button, SxProps, TextField, Theme } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const adminFormSchema = Yup.object().shape({
  productTitle: Yup.string()
    .required('Please tell us your full name.')
    .min(
      5,
      'The name you have given us it too short. Please give us a name of minimum 5 characters.'
    ),
  productImage: Yup.string()
    .required('Please tell us your full name.')
    .min(
      5,
      'The name you have given us it too short. Please give us a name of minimum 5 characters.'
    ),
  productPrice: Yup.string()
    .required('Please tell us your full name.')
    .min(
      5,
      'The name you have given us it too short. Please give us a name of minimum 5 characters.'
    ),
  productDescrip: Yup.string()
    .required('Please tell us your full name.')
    .min(
      5,
      'The name you have given us it too short. Please give us a name of minimum 5 characters.'
    ),
})

/* ----------------------
         FORMIK
---------------------- */

type adminFormValues = Yup.InferType<typeof adminFormSchema>

interface Props {
  handleClose: () => void
}

function AdminProductForm({ handleClose }: Props) {
  const formik = useFormik<adminFormValues>({
    initialValues: {
      productTitle: '',
      productImage: '',
      productPrice: '',
      productDescrip: '',
    },
    validationSchema: adminFormSchema,
    onSubmit: values => {
      handleClose()
    },
  })

  /* ----------------------
       FORM COMPONENT
  ---------------------- */

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id='title'
          label='Product title'
          value={formik.values.productTitle}
          onChange={formik.handleChange}
          error={formik.touched.productTitle && Boolean(formik.errors.productTitle)}
          helperText={formik.touched.productTitle && formik.errors.productTitle}
          margin='normal'
        />
        <TextField
          fullWidth
          id='price'
          label='Product price'
          value={formik.values.productPrice}
          onChange={formik.handleChange}
          error={formik.touched.productPrice && Boolean(formik.errors.productPrice)}
          helperText={formik.touched.productPrice && formik.errors.productPrice}
          margin='normal'
        />
        <TextField
          fullWidth
          id='size'
          label='Product size'
          onChange={formik.handleChange}
          margin='normal'
        />
        <TextField
          fullWidth
          id='color'
          label='Hat color'
          onChange={formik.handleChange}
          margin='normal'
        />
        <TextField
          fullWidth
          id='image'
          label='Image (URL)'
          value={formik.values.productImage}
          onChange={formik.handleChange}
          error={formik.touched.productImage && Boolean(formik.errors.productImage)}
          helperText={formik.touched.productImage && formik.errors.productImage}
          margin='normal'
        />
        <TextField
          fullWidth
          id='cardDescription'
          label='Card description'
          onChange={formik.handleChange}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productDescription'
          label='Product description'
          value={formik.values.productDescrip}
          onChange={formik.handleChange}
          error={formik.touched.productDescrip && Boolean(formik.errors.productDescrip)}
          helperText={formik.touched.productDescrip && formik.errors.productDescrip}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productDetail1'
          label='Product detail #1'
          onChange={formik.handleChange}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productDetail2'
          label='Product detail #2'
          onChange={formik.handleChange}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productDetail3'
          label='Product detail #3'
          onChange={formik.handleChange}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productDetail4'
          label='Product detail #4'
          onChange={formik.handleChange}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productDetail5'
          label='Product detail #5'
          onChange={formik.handleChange}
          margin='normal'
        />
        <Button color='primary' variant='contained' type='submit'>
          Place order
        </Button>
        <Button variant='contained' onClick={handleClose} color='error'>
          Close
        </Button>
      </form>
    </>
  )
}

const AdminCardListSx: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
})

export default AdminProductForm
