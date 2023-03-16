import * as Icon from '@mui/icons-material'
import { Box, Button, Paper, SxProps, Theme, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { products } from '../../data'
import {
  cardImgStyle,
  cartCardRightBoxStyleSx,
  descriptionTextStyleSx,
  imageBoxStyleSx,
  mediaFontSizeStyleSx,
  productCardStyleSx,
  quantityBoxStyleSx,
  quantityStyleSx,
} from '../components/CheckoutCard'

function OrderConfirmation() {
  return (
    <Container>
      <Paper
        elevation={3}
        sx={{
          mt: '4rem',
          borderRadius: '1rem',
        }}
      >
        <Box sx={confirmStyleBoxSX}>
          <Typography variant='h6' sx={typographyStylesSX}>
            Your order has been recived
          </Typography>
          <Icon.CheckCircleOutline sx={iconStylesSX} color='success' />
          <Typography variant='body2' sx={typographyStylesSX}>
            Thank you for your purchase
          </Typography>
          <Typography variant='body2' sx={typographyStylesSX}>
            Your order number is
          </Typography>
          <Typography sx={typographyStylesSX}>
            <b>#{Math.floor(Math.random() * 100000) + 100000}</b>
          </Typography>
          <Button sx={buttonStyleSX} href='/' variant='contained'>
            Continue Shopping
          </Button>
        </Box>
        {/* ------------------------------------------------------------------- */}
        <Box data-cy='cart-item' sx={productCardStyleSx}>
          <Box sx={imageBoxStyleSx}>
            <img style={cardImgStyle} src={products[0].image} alt={products[0].description} />
          </Box>
          <Box sx={cartCardRightBoxStyleSx}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant='h3' sx={mediaFontSizeStyleSx}>
                {products[0].title}
              </Typography>
              {/* deletebutton */}
            </Box>
            <Box sx={{ flexGrow: '4', display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='body2' color='secondary.dark' sx={descriptionTextStyleSx}>
                {'$30'} &nbsp;&nbsp; {'|'} &nbsp;&nbsp; {'Black'} &nbsp;&nbsp; {'|'} &nbsp;&nbsp;
                {'M'}
              </Typography>
              <Box sx={quantityBoxStyleSx}>
                <Typography data-cy='product-quantity' variant='body2' sx={quantityStyleSx}>
                  2
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}

const confirmStyleBoxSX: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  py: '2rem',
  px: '1rem',
  gap: '1rem',
  borderRadius: '1rem',
  backgroundColor: 'white',
  [theme.breakpoints.up('sm')]: {
    py: '4rem',
    h6: {
      fontSize: '1.5rem',
    },
  },
  [theme.breakpoints.up('md')]: {
    py: '6rem',
    h6: {
      fontSize: '2rem',
    },
  },
})

const typographyStylesSX: SxProps<Theme> = theme => ({
  textAlign: 'center',
  fontWeight: '600',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
})

const iconStylesSX: SxProps<Theme> = theme => ({
  fontSize: '30px',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
})

const buttonStyleSX: SxProps<Theme> = theme => ({
  fontWeight: '600',
  [theme.breakpoints.between('sm', 'md')]: {
    scale: '1.2',
  },
  [theme.breakpoints.up('md')]: {
    scale: '1.5',
  },
})

export default OrderConfirmation
