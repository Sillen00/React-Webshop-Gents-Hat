import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { Box, Button, Container, Stack, SxProps, Theme, Typography, useMediaQuery } from '@mui/material'
import { useRef } from 'react'
import CheckoutCard from '../components/CheckoutCard'
import CheckoutCardSubheaders from '../components/CheckoutCardSubheaders'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutTotalPrice from '../components/CheckoutTotalPrice'
import { useCart } from '../contexts/CartContext'
import '../index.css'

function Checkout() {
  const isMediumScreen = useMediaQuery('(min-width:900px)')
  const { cartItems, totalPrice } = useCart()
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Container>
      <Box sx={{ marginBottom: '10rem' }} >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
          <Typography variant='h3'>Cart</Typography>
          {cartItems.length > 0 && (
            <Button
              variant='contained'
              sx={{ fontWeight: '800', color: 'common.black' }}
              onClick={scrollToForm}
            >
              Checkout <KeyboardDoubleArrowDownIcon />
            </Button>
          )}
        </Box>

        {isMediumScreen && <CheckoutCardSubheaders />}

        <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
          {cartItems.map(cartItem => (
            <CheckoutCard cartItem={cartItem} key={cartItem.id} />
          ))}
        </Stack>

        <CheckoutTotalPrice totalPrice={totalPrice} />
      </Box>

      {cartItems.length > 0 && (
        <Box ref={formRef} sx={formMediaQueries}>
          <CheckoutForm />
        </Box>
      )}
    </Container>
  )
}

const formMediaQueries: SxProps<Theme> = theme => ({
  paddingTop: `calc(var(--header-height-xl) + 1rem)`,
  [theme.breakpoints.down('md')]: {
    paddingTop: `calc(var(--header-height-md) + 1rem)`,
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: `calc(var(--header-height-sm) + 1rem)`,
  },
})

export default Checkout
