import * as Icon from '@mui/icons-material'
import {
  Box,
  CardMedia,
  Container,
  Paper,
  Skeleton,
  SxProps,
  Theme,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Product } from '../../data'
import ProductBtnSection from '../components/ProductBtnSection'
import { useProducts } from '../contexts/ProductsContext'

function ProductDescription() {
  const { id } = useParams<{ id: string }>()
  const { databaseProducts } = useProducts()
  const product: Product | undefined = databaseProducts.find(p => p.id === id)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleLoad = () => {
    setLoading(false)
    setError(false)
  }

  const handleError = () => {
    setLoading(false)
    setError(true)
  }

  if (!product) {
    return (
      <Box>
        <NavLink to='/'>
          <Typography sx={flexAlignStyle} variant='h6'>
            <Icon.ArrowBack />
            Back To Products
          </Typography>
        </NavLink>

        <Typography variant='h3' sx={{ ml: 3, marginBottom: '10rem' }}>
          Product not found
        </Typography>
      </Box>
    )
  }

  return (
    <Container>
      <Paper elevation={3} sx={mainBoxStyle}>
        <NavLink to='/'>
          <Typography sx={flexAlignStyle} variant='h6'>
            <Icon.ArrowBack />
            Back To Products
          </Typography>
        </NavLink>
        <Box sx={contentStyle}>
          <Box sx={imgWrapperStyle}>
            <Skeleton
              variant='rounded'
              animation='wave'
              sx={loading || error ? skeletonSx : { display: 'none' }}
            />
            <CardMedia
              sx={loading || error ? { display: 'none' } : {}}
              component='img'
              image={product.image}
              alt={product.title}
              onLoad={handleLoad}
              onError={handleError}
            />
          </Box>
          <Box sx={textAndBtnWrapperStyle}>
            <Typography variant='h4' data-cy='product-title'>
              {product.title}
            </Typography>
            <Typography variant='h6' data-cy='product-price'>
              ${product.price}
            </Typography>
            <Typography variant='h6' sx={{ mt: 2, mb: 1, fontSize: '1rem' }}>
              Product Description
            </Typography>

            <Typography variant='body2' data-cy='product-description'>
              {product.description}
            </Typography>

            <Typography variant='h6' sx={{ mt: 2, mb: 1, fontSize: '1rem' }}>
              Product Details
            </Typography>
            <Box>
              <ul>
                {product.details?.map(({ detail, id }) => (
                  <li style={{ listStyleType: 'none' }} key={id}>
                    <Typography
                      component='span'
                      sx={{ '::before': { pl: 1, pr: 1, content: "'• '" } }}
                      variant='body2'
                    >
                      {detail}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
            <Typography sx={flexAlignStyle} variant='body1'>
              {(product.inStock as unknown) == 'false' ? (
                <>
                  <Icon.HighlightOff sx={{ color: 'red' }} />
                  <p style={{ paddingLeft: '0.5rem' }}>Out of stock</p>
                </>
              ) : (
                <>
                  <Icon.CheckCircleOutline sx={{ color: 'green' }} />
                  <p style={{ paddingLeft: '0.5rem' }}>In stock</p>
                </>
              )}
            </Typography>
            <ProductBtnSection product={product} />
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}

const mainBoxStyle: SxProps<Theme> = theme => ({
  background: 'white',
  margin: '0 1rem',
  padding: '1.5rem',
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

const skeletonSx: SxProps<Theme> = theme => ({
  width: '100%',
  height: '100%',
  mx: 3,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '20rem',
    mx: 2,
    my: 2,
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '15rem',
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

export default ProductDescription
