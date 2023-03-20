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
  <Typography>
    <OrderData 
      title={item.title}
      price={item.price}
      quantity={item.quantity}
      size={item.size}
      image={item.image}
      color={item.color}
    />
  </Typography>
))

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
        <Typography>{formValues.fullName}</Typography>
        <Typography>{formValues.fullName}</Typography>
        <Typography>{formValues.fullName}</Typography>
        <Typography>{formValues.fullName}</Typography>
        <Typography>{formValues.fullName}</Typography>
        <Typography>{orderItems}</Typography>
        <Typography>{totalPrice}</Typography>
        

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
