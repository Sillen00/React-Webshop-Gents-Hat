import { Box, CardMedia, Skeleton, SxProps, Theme, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import {
  cardImgStyle,
  cartCardRightBoxStyleSx,
  descriptionTextStyleSx,
  quantityBoxStyleSx,
  quantityStyleSx
} from './CheckoutCard'

interface Props {
  title: string
  price: number
  quantity: number
  size: string
  image: string
  color: string
}

export default function OrderData(props: Props) {
  const theme = useTheme()
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

  return (
    <Box sx={{ pt: 2, pb: 2, borderBottom: 'solid black 1px', display: 'flex' }}>
      <Box data-cy='cart-item' sx={displayOrderItem}>
        <Box sx={imageBoxStyleSx}>
        <Skeleton
              variant='rounded'
              animation='wave'
              sx={loading || error ? skeletonSx : { display: 'none' }}
            />
            <CardMedia
              sx={loading || error ? { display: 'none' } : cardImgStyle}
              component='img'
              height='150'
              image={props.image}
              alt={props.title}
              onLoad={handleLoad}
              onError={handleError}
            />
        </Box>
        <Box sx={cartCardRightBoxStyleSx}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '1rem',
            }}
          >
            <Typography variant='h3' sx={headingStyleSx}>
              {props.title}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: '4', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='body2' color='secondary.dark' sx={descriptionTextStyleSx}>
              {'$' + props.price} &nbsp;&nbsp; {'|'} &nbsp;&nbsp; {props.color} &nbsp;&nbsp; {'|'}{' '}
              &nbsp;&nbsp;
              {props.size}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ...quantityBoxStyleSx,
            alignItems: 'center',
            justifyContent: 'flex-end',
            display: 'flex',
          }}
        >
          <Typography data-cy='product-quantity' variant='body2' sx={quantityStyleSx}>
            {props.quantity}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const displayOrderItem: SxProps<Theme> = theme => ({
  display: 'flex',
  maxHeight: '200px',
  alignItems: 'center',
  width: '100%',
  paddingRight: '2rem',
  [theme.breakpoints.down('sm')]: {
    paddingRight: '0rem',
  },
})

const headingStyleSx: SxProps<Theme> = theme => ({
  fontSize: '1.6rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
  },
})

const imageBoxStyleSx: SxProps<Theme> = theme => ({
  maxWidth: '100px',
  minWidth: '100px',
  mx: '10px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '80px',
    minWidth: '80px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '50px',
    minWidth: '50px',
  },
})

const skeletonSx: SxProps<Theme> = theme => ({
  maxWidth: '100px',
  minWidth: '100px',
  maxHeight: '100px',
  minHeight: '100px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '80px',
    minWidth: '80px',
    maxHeight: '80px',
    minHeight: '80px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '50px',
    minWidth: '50px',
    maxHeight: '50px',
    minHeight: '50px',
  },
})
