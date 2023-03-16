import * as Icon from '@mui/icons-material'
import { Box, Button, SxProps, Theme, Typography } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom'
import { Product, products } from '../../data'
import Snackbar from '../components/Snackbar'

function ProductDescription() {
  const { id } = useParams<{ id: string }>()
  const product: Product | undefined = products.find(p => p.id === id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <Box sx={centerMainBoxStyle}>
      <Box sx={mainBoxStyle}>
        <NavLink to='/'>
          <Typography sx={flexAlignStyle} variant='h6'>
            <Icon.ArrowBack />
            Back To Products
          </Typography>
        </NavLink>
        <Box sx={contentStyle}>
          <Box sx={imgWrapperStyle}>
            <img src={product.image} alt={product.title} />
          </Box>
          <Box sx={textAndBtnWrapperStyle}>
            <Typography variant='h4'>{product.title}</Typography>
            <Typography variant='h6'>${product.price}</Typography>
            <Typography variant='h6' sx={{ fontSize: '1rem' }}>
              Product Description
            </Typography>
            <Typography variant='body2'>{product.longDescription}</Typography>
            <Typography variant='h6' sx={{ fontSize: '1rem' }}>
              Product Details
            </Typography>
            <Box>
              <ul>
                {product.details.map(({ detail, id }) => (
                  <li style={{ listStyleType: 'none' }} key={id}>
                    <Typography
                      component='span'
                      sx={{ '::before': { content: "'- '" } }}
                      variant='body2'
                    >
                      {detail}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
            <Typography sx={flexAlignStyle} variant='body1'>
              {product.inStock ? (
                <>
                  <Icon.CheckCircleOutline sx={{ color: 'green' }} />
                  In stock
                </>
              ) : (
                <>
                  <Icon.HighlightOff sx={{ color: 'red' }} />
                  Out of stock
                </>
              )}
            </Typography>

            {/* Bryt ut till komponent */}
            <Box sx={flexAlignStyle}>
              <Typography sx={quantityBoxStyle}>1</Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Snackbar />
              </Box>
            </Box>
            <NavLink to='/checkout'>
              <Box sx={{ flexGrow: 1 }}>
                <Button variant='contained' sx={checkOutBtnStyle}>
                  Checkout
                </Button>
              </Box>
            </NavLink>
            {/* Bryt ut till komponent */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const centerMainBoxStyle: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const mainBoxStyle: SxProps<Theme> = theme => ({
  background: 'lightgrey',
  margin: '0 1rem',
  padding: '1.5rem',
  border: '2px solid black',
  maxWidth: 'lg',
})

const contentStyle: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
})

const imgStyle: SxProps<Theme> = theme => ({
  maxWidth: '100%',
})

const imgWrapperStyle: SxProps<Theme> = theme => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': imgStyle(theme),
  [theme.breakpoints.up('sm')]: {
    '& img': {
      maxWidth: '80%',
    },
  },
})

const textAndBtnWrapperStyle: SxProps<Theme> = theme => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0 1rem',
})

const flexAlignStyle: SxProps<Theme> = theme => ({
  display: 'flex',
  alignItems: 'center',
  margin: '1rem 0',
})

const quantityBoxStyle: SxProps<Theme> = theme => ({
  border: '1px solid black',
  padding: '0.3rem 1rem',
  marginRight: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const checkOutBtnStyle: SxProps<Theme> = theme => ({
  background: 'black',
  color: 'white',
  width: '100%',
})

export default ProductDescription
