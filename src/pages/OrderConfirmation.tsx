import * as Icon from '@mui/icons-material'
import { Box, Button, Paper, SxProps, Theme, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useContext } from 'react'
import OrderData from '../components/OrderData'
import { useCart } from '../contexts/CartContext'
import { FormContext } from '../contexts/FormContext'

function OrderConfirmation() {
  const { formValues } = useContext(FormContext)
  const { cartItems, totalPrice } = useCart()
  const orderItems = cartItems.map(item => (
    <OrderData
      title={item.title}
      price={item.price}
      quantity={item.quantity}
      size={item.size}
      image={item.image}
      color={item.color}
    />
  ))

  return (
    <Container>
      <Paper
        elevation={3}
        sx={{
          mt: '4rem',
          borderRadius: '1rem',
          paddingBottom: '2rem',
        }}
      >
        <Box sx={confirmStyleBoxSX}>
          <Typography variant='h6' sx={typographyStylesSX}>
            Your order has been received
          </Typography>
          <Icon.CheckCircleOutline sx={iconStylesSX} color='success' />
          <Typography variant='body2' sx={typographyStylesSX}>
            Thank you for your purchase!
          </Typography>
          <Typography variant='body2' sx={typographyStylesSX}>
            Your order number is:
          </Typography>
          <Typography gutterBottom sx={typographyStylesSX}>
            <b>#{Math.floor(Math.random() * 100000) + 100000}</b>
          </Typography>
          <Button sx={buttonStyleSX} href='/' variant='contained'>
            Continue Shopping
          </Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem' }}>
          <Typography variant='h3' color='secondary.dark' sx={subHeaderStyleSX}>
            Product
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='h3' color='secondary.dark' sx={subHeaderStyleSX}>
              Quantity
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography sx={ItemStyleSX}>{orderItems}</Typography>
        </Box>
        <Typography sx={priceStyleSX}>Total: ${totalPrice}</Typography>

        <Box sx={shippingDetailsStyleSX}>
          <Box sx={{marginRight: '4rem'}}>
            <Typography gutterBottom variant='h3' color='secondary.dark' sx={subHeaderStyleSX}>
              User Details
            </Typography>
            <Typography sx={formDataStyleSX}>{formValues.fullName}</Typography>
            <Typography sx={formDataStyleSX}>{formValues.email}</Typography>
            <Typography sx={formDataStyleSX}>{formValues.phoneNumber}</Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant='h3' color='secondary.dark' sx={subHeaderStyleSX}>
              Shipping Details
            </Typography>
            <Typography sx={formDataStyleSX}>{formValues.address}</Typography>
            <Typography sx={formDataStyleSX}>{formValues.city}</Typography>
            <Typography sx={formDataStyleSX}>{formValues.zipcode}</Typography>
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
    fontSize: '1rem',
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

const priceStyleSX: SxProps<Theme> = theme => ({
  textAlign: 'end',
  pt: '1rem',
  mr: '2rem',
  fontWeight: '600',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '1.2rem',
    mr: '5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
    mr: '6rem',
  },
})

const ItemStyleSX: SxProps<Theme> = theme => ({
  marginLeft: '0.5rem',
  marginRight: '0.5rem',
  [theme.breakpoints.up('sm')]: {
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: '2.8rem',
    marginRight: '2.8rem',
  },
})

const subHeaderStyleSX: SxProps<Theme> = theme => ({
  paddingTop: '3rem',
  fontSize: '1.8rem',
  mr: '2.4rem',
  ml: '3.0rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
    ml: '2.2rem',
    mr: '2.9rem',
  },
  [theme.breakpoints.down('sm')]: {
    ml: '1.6rem',
    mr: '1.6rem',
  },
})

const formDataStyleSX: SxProps<Theme> = theme => ({
  fontStyle: 'italic',
  ml: '1.6rem',
  fontSize: '0.8rem',
  [theme.breakpoints.up('sm')]: {
    ml: '2.2rem',
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    ml: '3rem',
    fontSize: '1.2rem',
  },
})

const shippingDetailsStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  pt: 3,
  pb: 3,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
})

export default OrderConfirmation
