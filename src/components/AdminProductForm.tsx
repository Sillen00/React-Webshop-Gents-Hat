import { Box, Button, Container, Paper, SxProps, TextField, Theme, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { generateId, Product } from '../../data'
import { useProducts } from '../contexts/ProductsContext'

/* ----------------------
      YUP VALIDATION
---------------------- */

// type YupProduct = Record<keyof Omit<Product, 'id'>, Yup.AnySchema>;

const adminFormSchema = Yup.object().shape({
  title: Yup.string()
    .required('Please write a product title')
    .min(
      2,
      'The title you have given us it too short. Please give us a name of minimum 2 characters.'
    ),
  price: Yup.number()
    .required('Please enter a price for your product.')
    .min(2, 'The price you have given is to low. We need to go profit.'),
  size: Yup.string(),
  // .required('Please enter a size for your product.')
  color: Yup.string()
    // .required('Please enter a color for your product.')
    .min(
      1,
      'The name of the color you have given us it too short. Please give us a name of minimum 5 characters.'
    ),
  image: Yup.string()
    .required('Please enter an image-URL for your product.')
    .min(1, 'The URL you have given us is not valid. Please give us a valid URL.'),
  shortDescription: Yup.string()
    // .required('Please write a short card description.')
    .max(
      30,
      'The description you have given us it too long. Please give us a description of maximum 30 characters.'
    ),
  description: Yup.string()
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
  product?: Product
  onSave: () => void
}

function AdminProductForm({ onSave, product }: Props) {
  const { databaseProducts, setDatabaseProducts } = useProducts()

  const formik = useFormik<adminFormValues>({
    validationSchema: adminFormSchema,
    initialValues: product || {
      id: '',
      image: '',
      title: '',
      description: '',
      price: 0,
      details: [
        { id: 1, detail: '' },
        { id: 2, detail: '' },
        { id: 3, detail: '' },
      ],
      size: '',
      color: '',
      inStock: false,
    },
    onSubmit: values => {
      if (product) {
        const updatedProduct: Product = {
          id: product.id,
          image: values.image,
          title: values.title,
          description: values.description,
          price: values.price,
          details: [
            { id: 1, detail: values.productDetail1 as string },
            { id: 2, detail: values.productDetail2 as string },
            { id: 3, detail: values.productDetail3 as string },
          ],
          size: values.size as string,
          color: values.size as string,
          inStock: true,
        }

        const productIndex = databaseProducts.findIndex(p => p.id === product?.id)

        const updatedDatabaseProducts = [
          ...databaseProducts.slice(0, productIndex),
          updatedProduct,
          ...databaseProducts.slice(productIndex + 1),
        ]

        setDatabaseProducts(updatedDatabaseProducts)
      } else {
        // Generates new ID
        let newId = generateId()

        // Adds new product
        const newProduct: Product = {
          id: newId,
          image: values.image,
          title: values.title,
          description: values.description,
          price: values.price,
          details: [
            { id: 1, detail: values.productDetail1 as string },
            { id: 2, detail: values.productDetail2 as string },
            { id: 3, detail: values.productDetail3 as string },
          ],
          size: values.size as string,
          color: values.size as string,
          inStock: true,
        }

        setDatabaseProducts([...databaseProducts, newProduct])
      }

      // Closes form
      onSave()
    },
  })

  /* --------------------------
       ADMIN FORM COMPONENT
  -------------------------- */

  return (
    <>
      <Container>
        <Paper elevation={3}>
          <form data-cy='product-form' onSubmit={formik.handleSubmit}>
            <Container sx={formContainer}>
              <Typography sx={fontStyle} variant='h3'>
                {product ? `Editing "${product.title}"` : 'Add new product'}
              </Typography>
              <Typography
                sx={{ ml: '0.2rem', mt: '0.4rem', mb: '1rem' }}
                variant='body2'
                gutterBottom
              >
                {product ? `ID: "${product.id}"` : ''}
              </Typography>
              <TextField
                fullWidth
                id='title'
                label='Product title'
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                margin='normal'
                inputProps={{ 'data-cy': 'product-title', style: { fontFamily: 'Lora' } }}
                FormHelperTextProps={{ 'data-cy': 'product-title-error' } as any}
              />
              <TextField
                fullWidth
                id='price'
                label='Product price'
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
                margin='normal'
                inputProps={{ 'data-cy': 'product-price', style: { fontFamily: 'Lora' } }}
                FormHelperTextProps={{ 'data-cy': 'product-price-error' } as any}
              />
              <TextField
                fullWidth
                id='size'
                label='Product size'
                value={formik.values.size}
                onChange={formik.handleChange}
                error={formik.touched.size && Boolean(formik.errors.size)}
                helperText={formik.touched.size && formik.errors.size}
                margin='normal'
              />
              <TextField
                fullWidth
                id='color'
                label='Hat color'
                value={formik.values.color}
                onChange={formik.handleChange}
                error={formik.touched.color && Boolean(formik.errors.color)}
                helperText={formik.touched.color && formik.errors.color}
                margin='normal'
              />
              <TextField
                fullWidth
                id='image'
                label='Image (URL)'
                value={formik.values.image}
                onChange={formik.handleChange}
                error={formik.touched.image && Boolean(formik.errors.image)}
                helperText={formik.touched.image && formik.errors.image}
                margin='normal'
                inputProps={{ 'data-cy': 'product-image', style: { fontFamily: 'Lora' } }}
                FormHelperTextProps={{ 'data-cy': 'product-image-error' } as any}
              />
              <TextField
                fullWidth
                id='shortDescription'
                label='Card description'
                value={formik.values.shortDescription}
                onChange={formik.handleChange}
                error={formik.touched.shortDescription && Boolean(formik.errors.shortDescription)}
                helperText={formik.touched.shortDescription && formik.errors.shortDescription}
                margin='normal'
              />
              <TextField
                fullWidth
                id='description'
                label='Product description'
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
                margin='normal'
                inputProps={{ 'data-cy': 'product-description', style: { fontFamily: 'Lora' } }}
                FormHelperTextProps={{ 'data-cy': 'product-description-error' } as any}
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
              <Box sx={buttonContainer}>
                <Button sx={buttonSx} color='primary' variant='contained' type='submit'>
                  {product ? `Edit "${product.title}"` : 'Add product'}
                </Button>
                <Button sx={buttonSx} variant='contained' onClick={onSave} color='error'>
                  Close
                </Button>
              </Box>
            </Container>
          </form>
        </Paper>
      </Container>
    </>
  )
}

/* ----------------------
       CSS STYLING
---------------------- */

const formContainer: SxProps<Theme> = theme => ({
  width: '70%',
  paddingTop: '5rem',
  paddingBottom: '4rem',
})

const buttonContainer: SxProps<Theme> = theme => ({
  mt: 3,
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
})

const buttonSx: SxProps<Theme> = theme => ({
  ml: 3,
  [theme.breakpoints.down('sm')]: {
    ml: 0,
    mb: 2,
  },
})

const fontStyle: SxProps<Theme> = theme => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '1.9rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.3rem',
  },
})

export default AdminProductForm
