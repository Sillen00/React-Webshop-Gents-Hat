import { Button, SxProps, TextField, Theme } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { generateId, Product } from '../../data'

/* ----------------------
      YUP VALIDATION
---------------------- */

const adminFormSchema = Yup.object().shape({
  productTitle: Yup.string()
    .required('Please write a product title')
    .min(
      2,
      'The title you have given us it too short. Please give us a name of minimum 2 characters.'
    ),
  productPrice: Yup.string()
    .required('Please enter a price for your product.')
    .matches(/^[0-9]*$/, 'The price you have given us is not a number. Please give us a number.')
    .min(2, 'The price you have given is to low. We need to go profit.'),
  productSize: Yup.string().required('Please enter a size for your product.'),
  productColor: Yup.string()
    .required('Please enter a color for your product.')
    .min(
      1,
      'The name of the color you have given us it too short. Please give us a name of minimum 5 characters.'
    ),
  productImage: Yup.string()
    .required('Please enter an image-URL for your product.')
    .min(1, 'The URL you have given us is not valid. Please give us a valid URL.'),
  productCardDescrip: Yup.string()
    .required('Please write a short card description.')
    .max(
      30,
      'The description you have given us it too long. Please give us a description of maximum 30 characters.'
    ),
  productDescrip: Yup.string()
    .required('Please write a long product description.')
    .min(
      5,
      'The description you have given us it too short. Please give us a name of minimum 5 characters.'
    ),
  productDetail1: Yup.string().min(
    3,
    'The detail you have given us it too short. Please give us a detail of minimum 3 characters.'
  ),
  productDetail2: Yup.string().min(
    3,
    'The detail you have given us it too short. Please give us a detail of minimum 3 characters.'
  ),
  productDetail3: Yup.string().min(
    3,
    'The detail you have given us it too short. Please give us a detail of minimum 3 characters.'
  ),
})

/* ----------------------
         FORMIK
---------------------- */

type adminFormValues = Yup.InferType<typeof adminFormSchema>

interface Props {
  handleClose: () => void
  setDataProducts: React.Dispatch<React.SetStateAction<Product[]>>
  dataProducts: Product[]
}

function AdminProductForm({ handleClose, setDataProducts, dataProducts }: Props) {
  const formik = useFormik<adminFormValues>({
    validationSchema: adminFormSchema,
    initialValues: {
      productTitle: '',
      productPrice: '',
      productSize: '',
      productColor: '',
      productImage: '',
      productCardDescrip: '',
      productDescrip: '',
      productDetail1: '',
      productDetail2: '',
      productDetail3: '',
    },
    onSubmit: values => {
      // Generates new ID
      let newId = generateId()
      dataProducts.forEach(product => {
        if (product.id === newId) {
          newId = generateId()
        }
      })

      // Adds new product
      const newProduct: Product = {
        id: newId,
        image: values.productImage,
        title: values.productTitle,
        shortDescription: values.productCardDescrip,
        description: values.productDescrip,
        price: parseInt(values.productPrice),
        details: [
          { id: 1, detail: values.productDetail1 as string },
          { id: 2, detail: values.productDetail2 as string },
          { id: 3, detail: values.productDetail3 as string },
        ],
        size: values.productSize,
        color: values.productSize,
        inStock: true,
      }

      setDataProducts([...dataProducts, newProduct])

      // Closes form
      handleClose()
    },
  })

  /* --------------------------
       ADMIN FORM COMPONENT
  -------------------------- */

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id='productTitle'
          label='Product title'
          value={formik.values.productTitle}
          onChange={formik.handleChange}
          error={formik.touched.productTitle && Boolean(formik.errors.productTitle)}
          helperText={formik.touched.productTitle && formik.errors.productTitle}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productPrice'
          label='Product price'
          value={formik.values.productPrice}
          onChange={formik.handleChange}
          error={formik.touched.productPrice && Boolean(formik.errors.productPrice)}
          helperText={formik.touched.productPrice && formik.errors.productPrice}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productSize'
          label='Product size'
          value={formik.values.productSize}
          onChange={formik.handleChange}
          error={formik.touched.productSize && Boolean(formik.errors.productSize)}
          helperText={formik.touched.productSize && formik.errors.productSize}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productColor'
          label='Hat color'
          value={formik.values.productColor}
          onChange={formik.handleChange}
          error={formik.touched.productColor && Boolean(formik.errors.productColor)}
          helperText={formik.touched.productColor && formik.errors.productColor}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productImage'
          label='Image (URL)'
          value={formik.values.productImage}
          onChange={formik.handleChange}
          error={formik.touched.productImage && Boolean(formik.errors.productImage)}
          helperText={formik.touched.productImage && formik.errors.productImage}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productCardDescrip'
          label='Card description'
          value={formik.values.productCardDescrip}
          onChange={formik.handleChange}
          error={formik.touched.productCardDescrip && Boolean(formik.errors.productCardDescrip)}
          helperText={formik.touched.productCardDescrip && formik.errors.productCardDescrip}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productDescrip'
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
          label='Product detail #1 (optional)'
          value={formik.values.productDetail1}
          onChange={formik.handleChange}
          error={formik.touched.productDetail1 && Boolean(formik.errors.productDetail1)}
          helperText={formik.touched.productDetail1 && formik.errors.productDetail1}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productDetail2'
          label='Product detail #2 (optional)'
          value={formik.values.productDetail2}
          onChange={formik.handleChange}
          error={formik.touched.productDetail2 && Boolean(formik.errors.productDetail2)}
          helperText={formik.touched.productDetail2 && formik.errors.productDetail2}
          margin='normal'
        />
        <TextField
          fullWidth
          id='productDetail3'
          label='Product detail #3 (optional)'
          value={formik.values.productDetail3}
          onChange={formik.handleChange}
          error={formik.touched.productDetail3 && Boolean(formik.errors.productDetail3)}
          helperText={formik.touched.productDetail3 && formik.errors.productDetail3}
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
